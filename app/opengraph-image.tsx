import { ImageResponse } from "next/og";

export const alt = "Open Volume — Expand the space music can occupy.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A1A18",
          color: "#F8F5ED",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          OPEN VOLUME / MUSIC + CULTURE
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 960,
            fontSize: 86,
            lineHeight: 0.94,
            letterSpacing: -4,
          }}
        >
          Expand the space music can occupy.
        </div>

        <div style={{ display: "flex", fontSize: 20, opacity: 0.66 }}>
          Performances. Experiences. Collaborations. Physical / virtual / hybrid.
        </div>
      </div>
    ),
    size,
  );
}
