import Link from "next/link";
import { BrandSignature } from "@/components/brand-signature";
import { siteConfig, socialLinks } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <BrandSignature context="footer" />
        <p className="footer-taxonomy">Music / Culture / Experiences / People / Places / Ideas</p>
        <p className="footer-muted">{siteConfig.brandLine}</p>
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
          {socialLinks.length ? (
            socialLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))
          ) : (
            <span className="footer-muted">Social profiles launching soon</span>
          )}
        </div>

        <div>
          <span className="footer-label">Contact</span>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
