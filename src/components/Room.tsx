import { Link } from "react-router-dom";

export default function Room() {
  return (
    <main className="room-page">
      <div className="room-shell">
        <div className="room-topline">
          <span className="pixel-dot" />
          <span>SAQIB'S SPACE</span>
          <span className="topline-spacer" />
          <span className="room-status">EXPLORE THE ROOM</span>
        </div>

        <section className="room-scene room-scene-reference" aria-label="Interactive portfolio room">
          <Link to="/fitness" className="room-hotspot hotspot-fitness" aria-label="Open fitness gallery: boxer and punching bag" title="Fitness" />
          <Link to="/work" className="room-hotspot hotspot-work" aria-label="Open work experience: bookshelf" title="Work experience" />
          <Link to="/travel" className="room-hotspot hotspot-travel" aria-label="Open travel gallery: travel photo frame" title="Travel" />
          <Link to="/home" className="room-hotspot hotspot-home" aria-label="Open profile and social links on the laptop" title="Saqib Mojeeb — Home" />
          <Link to="/currency" className="room-hotspot hotspot-currency" aria-label="Open currency collection" title="Currency collection" />
          <Link to="/brand" className="room-hotspot hotspot-brand" aria-label="Open TheNextChap brand from the coffee mug" title="TheNextChap" />
          <Link to="/vision" className="room-hotspot hotspot-diary" aria-label="Open my 2036 vision board" title="My 2036 Vision" />
        </section>

        <div className="room-caption">
          <span>SELECT AN OBJECT TO EXPLORE</span>
          <span>01 / 07</span>
        </div>
        <div className="room-footer">
          <span>BUILT FROM CURIOSITY</span>
          <span>FINTECH · PRODUCT · DATA</span>
        </div>
      </div>
    </main>
  );
}
