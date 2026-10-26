
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowLeft,
  Sparkles,
  Linkedin,
  Github,
  Instagram,
  Mail,
  ExternalLink,
} from "lucide-react";
import { profile } from "../data/profile";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, value: profile.linkedin },
  { name: "GitHub", icon: Github, value: profile.github },
  { name: "Instagram", icon: Instagram, value: "" },
  { name: "Contact", icon: Mail, value: profile.email },
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  const activeLink = socialLinks.find((item) => item.name === selected);

  return (
    <main className="intro-page">
      <div className="intro-grid" />

      <header className="intro-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to the room
        </Link>
        <span className="intro-mark">SM<span>.</span></span>
      </header>

      <section className="intro-content">
        <div className="intro-kicker">
          <Sparkles size={15} /> A LITTLE INTRODUCTION
        </div>

        <div className="intro-avatar">SM</div>
        <p className="intro-overline">HELLO, I'M</p>
        <h1>{profile.name}<span>.</span></h1>
        <h2>{profile.headline}</h2>
        <p className="intro-copy">{profile.intro}</p>

        <div className="intro-actions">
          <Link className="primary-action" to="/journey">
            My journey <ArrowDownRight size={17} />
          </Link>
        </div>

        <div className="social-links-row" aria-label="Social links">
          {socialLinks.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type="button"
              className={`social-icon-button ${selected === name ? "active" : ""}`}
              aria-label={name}
              aria-pressed={selected === name}
              onClick={() =>
                setSelected((current) => (current === name ? null : name))
              }
            >
              <Icon size={21} />
              <span>{name}</span>
            </button>
          ))}
        </div>

        {activeLink && (
          <div className="social-link-detail" aria-live="polite">
            <strong>{activeLink.name}</strong>
            <p>
              {activeLink.value ||
                (activeLink.name === "Instagram"
                  ? "Instagram profile link will be added soon."
                  : "This link will be added soon.")}
            </p>
            {activeLink.value && (
              <a
                href={
                  activeLink.name === "Contact"
                    ? `mailto:${activeLink.value}`
                    : activeLink.value
                }
                target={activeLink.name === "Contact" ? undefined : "_blank"}
                rel="noreferrer"
              >
                {activeLink.name === "Contact" ? "Send email" : "Open profile"}
                <ExternalLink size={14} />
              </a>
            )}
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="social-detail-close"
            >
              Close
            </button>
          </div>
        )}
      </section>

      <div className="intro-bottom">
        <span>FINTECH OPERATIONS</span>
        <span>CURIOUS BY NATURE · LEARNING BY DOING</span>
      </div>
    </main>
  );
}
