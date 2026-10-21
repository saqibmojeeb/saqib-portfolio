
import { Link } from "react-router-dom";

const visions = [
  {
    number: "01",
    title: "Health & Fitness",
    description: "Feel stronger, stay consistent, and build a healthy body and mind.",
    affirmation: "My health is my foundation.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Wealth & Finance",
    description: "Build long-term wealth, invest wisely, and work towards financial independence.",
    affirmation: "Make money a tool for freedom.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Career & Business",
    description: "Keep growing professionally and build a successful, sustainable business.",
    affirmation: "Keep learning. Keep building.",
    icon: "✎",
  },
  {
    number: "04",
    title: "Family & Relationships",
    description: "Make time for family, strengthen relationships, and create meaningful memories.",
    affirmation: "Success means having people to share it with.",
    icon: "♡",
  },
  {
    number: "05",
    title: "Travel & Lifestyle",
    description: "Explore new places and create the freedom to live life on my own terms.",
    affirmation: "Collect experiences, not just things.",
    icon: "⌁",
  },
  {
    number: "06",
    title: "Personal Growth",
    description: "Stay curious, disciplined, mentally clear, and open to becoming better.",
    affirmation: "Become a little better every day.",
    icon: "✧",
  },
];

export default function Vision() {
  return (
    <main className="vision-page">
      <div className="vision-board">
        <header className="vision-header">
          <Link to="/" className="vision-back">
            ← Back to my room
          </Link>
          <span className="vision-year">MY FUTURE SELF · 2036</span>
        </header>

        <section className="vision-intro">
          <p className="vision-eyebrow">A NOTE TO MY FUTURE SELF</p>
          <h1>My 2036 <span>Vision</span></h1>
          <p className="vision-subtitle">
            The life I’m building, one decision at a time.
          </p>
          <blockquote>
            “Build a life your future self will be proud of.”
          </blockquote>
        </section>

        <section className="vision-grid">
          {visions.map((vision) => (
            <article className="vision-card" key={vision.number}>
              <div className="vision-card-top">
                <span className="vision-icon">{vision.icon}</span>
                <span className="vision-number">{vision.number} / 06</span>
              </div>
              <h2>{vision.title}</h2>
              <p>{vision.description}</p>
              <div className="vision-affirmation">
                {vision.affirmation}
              </div>
            </article>
          ))}
        </section>

        <footer className="vision-footer">
          <span>2036 · TEN YEARS OF PROGRESS</span>
          <span>Dream with intention. Build with discipline.</span>
        </footer>
      </div>
    </main>
  );
}
