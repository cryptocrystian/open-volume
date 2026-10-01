import Link from "next/link";
import { BrandSignature } from "@/components/brand-signature";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <BrandSignature context="footer" />
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
          <span className="footer-label">Channels</span>
          <span className="footer-muted">Profile links pending launch</span>
        </div>
      </div>
    </footer>
  );
}
