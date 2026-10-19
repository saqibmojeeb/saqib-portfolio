import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Brand() {
  return (
    <main className="brand-page">
      <div className="brand-frame">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to the room</Link>
        <p className="eyebrow">PERSONAL BRAND · ENTREPRENEURIAL INITIATIVE</p>
        <h1>TheNextChap</h1>
        <p className="brand-lede">A brand I created as a hands-on exercise in building something of my own.</p>
        <div className="brand-card">
          <div className="brand-mark" aria-hidden="true">TNC</div>
          <div>
            <h2>From idea to brand</h2>
            <p>TheNextChap is my T-shirt brand. Creating it gave me practical experience with brand identity, product presentation, catalogues, packaging, and building an online presence.</p>
            <p>I’m not actively updating it at the moment, but it remains an achievement I’m proud of: taking an idea and turning it into a real brand.</p>
            <a className="brand-external" href="https://www.thenextchap.com/" target="_blank" rel="noreferrer">Visit TheNextChap website <ExternalLink size={15} /></a>
          </div>
        </div>
        <p className="brand-note">No sales figures or business results are claimed here; this page focuses on the experience of creating the brand.</p>
      </div>
    </main>
  );
}
