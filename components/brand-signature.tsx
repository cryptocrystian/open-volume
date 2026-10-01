import Link from "next/link";

type BrandSignatureProps = {
  href?: string;
  context?: "header" | "footer" | "inline";
};

/**
 * Production-logo integration point.
 *
 * The canonical Open Volume wordmark is outlined artwork and must not be
 * reconstructed with live type. Until the approved SVG masters are added to
 * /public/brand, this component intentionally renders a restrained text fallback.
 */
export function BrandSignature({
  href = "/",
  context = "inline",
}: BrandSignatureProps) {
  return (
    <Link
      href={href}
      className={`brand-signature brand-signature--${context}`}
      aria-label="Open Volume home"
      data-production-logo-pending="true"
    >
      <span>OPEN VOLUME</span>
    </Link>
  );
}
