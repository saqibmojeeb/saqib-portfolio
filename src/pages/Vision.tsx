
import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <main className="vision-page">
      <header className="vision-page-header">
        <Link to="/" className="vision-home-link">
          ← Home
        </Link>
        <h1>
          My <span>2036</span> Vision
        </h1>
        <p>A healthier, wealthier, more fulfilled me</p>
      </header>

      <section className="vision-image-container">
        <img
          src="/images/vision/vision-board-2036.png"
          alt="My 2036 vision board showing health, wealth, career, family, travel, and personal growth goals"
        />
      </section>
    </main>
  );
}
