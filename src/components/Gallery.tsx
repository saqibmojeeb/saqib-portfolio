
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { GalleryItem } from "../data/galleries";

export default function Gallery({
  title,
  items,
}: {
  title: string;
  items: GalleryItem[];
}) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((v) => (v === null ? null : (v + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((v) =>
          v === null ? null : (v - 1 + items.length) % items.length
        );
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", h);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", h);
    };
  }, [active, items.length]);

  return (
    <main className="gallery-page">
      <div className="gallery-frame">
        <header className="gallery-header">
          <Link to="/" className="back-link">
            ← Back to the room
          </Link>
          <p className="eyebrow">A COLLECTION OF MOMENTS</p>
          <h1>{title}</h1>
          <div className="heading-rule">
            <span />
            <span />
            <span />
          </div>
        </header>

        <div className="gallery-grid">
          {items.map((item, i) => (
            <button
              className={`gallery-tile tile-${i % 5}`}
              key={item.src}
              onClick={() => setActive(i)}
              aria-label={`Open ${item.type === "video" ? "video" : "photo"} ${i + 1}`}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    muted
                    playsInline
                    preload="metadata"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement?.classList.add("missing-image");
                    }}
                  />
                  <span className="video-play-badge">
                    <Play size={22} fill="currentColor" />
                  </span>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement?.classList.add("missing-image");
                  }}
                />
              )}

            </button>
          ))}
        </div>

        <footer className="gallery-footer">
          <span>{String(items.length).padStart(2, "0")} FRAMES</span>
          <span>MEMORIES, KEPT CLOSE</span>
        </footer>
      </div>

      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <button
            className="icon-button lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Close media"
          >
            <X />
          </button>

          <button
            className="icon-button lightbox-prev"
            onClick={() => setActive((active - 1 + items.length) % items.length)}
            aria-label="Previous media"
          >
            <ArrowLeft />
          </button>

          <figure className="lightbox-figure">
            {items[active].type === "video" ? (
              <video
                src={items[active].src}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={items[active].src} alt={items[active].alt} />
            )}
            <figcaption>
              {active + 1} / {items.length}
            </figcaption>
          </figure>

          <button
            className="icon-button lightbox-next"
            onClick={() => setActive((active + 1) % items.length)}
            aria-label="Next media"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </main>
  );
}
