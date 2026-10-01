import Link from "next/link";

const nav = [
  ["Experiences", "/experiences"],
  ["Stories", "/stories"],
  ["About", "/about"],
  ["Partners", "/partners"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-name" aria-label="Open Volume home">
        OPEN VOLUME
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <Link href="/join" className="nav-cta">
        Join
      </Link>
    </header>
  );
}
