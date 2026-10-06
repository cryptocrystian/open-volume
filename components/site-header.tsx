"use client";

import Link from "next/link";
import { useRef } from "react";
import { BrandSignature } from "@/components/brand-signature";

const nav = [
  ["Experiences", "/experiences"],
  ["Stories", "/stories"],
  ["About", "/about"],
  ["Partners", "/partners"],
];

export function SiteHeader() {
  const mobileNavRef = useRef<HTMLDetailsElement>(null);

  const closeMobileNav = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false;
    }
  };

  return (
    <header className="site-header">
      <BrandSignature context="header" />

      <nav className="site-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <Link href="/join" className="nav-cta desktop-join">
        Join
      </Link>

      <details className="mobile-nav" ref={mobileNavRef}>
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={closeMobileNav}>
              {label}
            </Link>
          ))}
          <Link href="/join" onClick={closeMobileNav}>Join</Link>
        </nav>
      </details>
    </header>
  );
}
