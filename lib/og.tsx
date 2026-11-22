import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Share card, set in Fraunces and Public Sans with the GC mark. Brand tokens
 * are copied from app/globals.css (paper, ink, ink-soft, accent, line).
 *
 * Layout note: the mark and the name sit inside the central 630×630 so that
 * square crops (iMessage, WhatsApp, Slack) still read.
 */
export async function renderOg({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: [string] | [string, string];
  sub: string;
}) {
  const [fraunces, publicSans] = await Promise.all([
    readFile(join(process.cwd(), "app/_fonts/Fraunces-SemiBold.ttf")),
    readFile(join(process.cwd(), "app/_fonts/PublicSans-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#f6efe3",
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid #dfd1ba",
            borderRadius: 16,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg width="128" height="90" viewBox="0 0 142 100" fill="none">
              <path
                d="M74.5 23.5C66.8 14.5 55.3 9 42.5 9C19.6 9 1 27.6 1 50.5C1 73.4 19.6 92 42.5 92C64.2 92 81.9 75.5 83.8 54.3L84 47.5H44.5L37.5 57.5H72.2C69.1 71.2 57 81.2 42.5 81.2C25.5 81.2 11.8 67.5 11.8 50.5C11.8 33.5 25.5 19.8 42.5 19.8C52.4 19.8 61.2 24.5 66.8 31.8L74.5 23.5Z"
                fill="#2f3e2b"
              />
              <path
                d="M78.5 32.2C84.2 21.2 95.7 13.8 109 13.8C120.3 13.8 130.4 19.2 136.7 27.6L129.8 33.5C125.1 27 117.5 22.8 109 22.8C99 22.8 90.3 28.5 86.1 36.8L78.5 32.2Z"
                fill="#2f3e2b"
              />
              <path
                d="M84.8 75.8C91.1 83.4 100.5 88.2 111 88.2C121.8 88.2 131.5 83.2 137.7 75.3L130.8 69.5C126.2 75.4 119 79.2 111 79.2C102.9 79.2 95.6 75.4 91 69.5L84.8 75.8Z"
                fill="#2f3e2b"
              />
              <circle cx="137" cy="50.5" r="2.2" fill="#7e843a" />
            </svg>
            <div
              style={{
                display: "flex",
                marginLeft: 28,
                fontFamily: "PublicSans",
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: 3.2,
                textTransform: "uppercase",
                color: "#58412f",
              }}
            >
              {eyebrow}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 32,
              fontFamily: "Fraunces",
              fontSize: title.length === 2 ? 120 : 108,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#2f3e2b",
            }}
          >
            {title.map((line) => (
              <div key={line} style={{ display: "flex" }}>
                {line}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              width: 112,
              height: 5,
              borderRadius: 3,
              backgroundColor: "#7e843a",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginTop: 22,
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "PublicSans",
                fontSize: 27,
                fontWeight: 500,
                lineHeight: 1.38,
                letterSpacing: -0.2,
                color: "#58412f",
                maxWidth: 700,
              }}
            >
              {sub}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "PublicSans",
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: 3.2,
                textTransform: "uppercase",
                color: "#58412f",
              }}
            >
              Glennville, Georgia
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "PublicSans", data: publicSans, weight: 500, style: "normal" },
      ],
    },
  );
}
