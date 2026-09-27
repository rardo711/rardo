import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#faf6ee",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6a5d4b",
            marginBottom: 24,
          }}
        >
          Websites for small businesses
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 1.05,
            color: "#221a12",
            fontStyle: "normal",
          }}
        >
          Gerardo Castaneda
        </div>
        <div
          style={{
            marginTop: 32,
            width: 120,
            height: 8,
            backgroundColor: "#a34a1e",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#6a5d4b",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Built by hand in Glennville, Georgia.
        </div>
      </div>
    ),
    { ...size }
  );
}
