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
        src="/brand/identity-v1.1/OV_Horizontal_Bone_v1.1.svg"
        alt="Open Volume"
        width="2120"
        height="390"
        style={{ display: "block", width, height: "auto", maxWidth: "100%" }}
      />
    </Link>
  );
}
