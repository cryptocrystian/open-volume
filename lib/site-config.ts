const normalizeUrl = (value: string | undefined, fallback: string) => {
  const raw = value?.trim();
  if (!raw) return fallback;
  return raw.replace(/\/$/, "");
};

export const siteConfig = {
  name: "Open Volume",
  shortName: "Open Volume",
  description:
    "Open Volume is a music and culture platform creating original performances, experiences and collaborations across physical, virtual and hybrid spaces.",
  brandLine: "Expand the space music can occupy.",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL, "https://openvolume.world"),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@openvolume.com",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim() || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL?.trim() || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
  },
} as const;

export const socialLinks = Object.entries(siteConfig.socials)
  .filter(([, href]) => Boolean(href))
  .map(([label, href]) => ({
    label: label.charAt(0).toUpperCase() + label.slice(1),
    href,
  }));
