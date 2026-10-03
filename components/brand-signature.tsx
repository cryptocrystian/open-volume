import Link from "next/link";

type BrandSignatureProps = {
  context?: "header" | "footer";
};

export function BrandSignature({ context = "header" }: BrandSignatureProps) {
  const width = context === "header" ? 188 : 220;

  return (
    <Link
      href="/"
      className={`brand-signature brand-signature--${context}`}
      aria-label="Open Volume home"
    >
      <img
        src="/brand/open-volume-horizontal-bone.png"
        alt="Open Volume"
        width="1267"
        height="127"
        style={{ display: "block", width, height: "auto", maxWidth: "100%" }}
      />
    </Link>
  );
}
