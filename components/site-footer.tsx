import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">OPEN VOLUME</p>
        <p className="footer-taxonomy">Music / Culture / Experiences / People / Places / Ideas</p>
      </div>
      <div className="footer-links">
        <div>
          <Link href="/experiences">Experiences</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/join">Join</Link>
        </div>
        <div>
          <a href="#" aria-label="Instagram placeholder">Instagram</a>
          <a href="#" aria-label="YouTube placeholder">YouTube</a>
          <a href="#" aria-label="TikTok placeholder">TikTok</a>
          <a href="#" aria-label="LinkedIn placeholder">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
