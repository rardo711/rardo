import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Share card, set in Fraunces with the GC mark. Brand tokens are copied from
 * app/globals.css (paper, ink, ink-soft, accent, line).
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
  const [fraunces, plex, mark] = await Promise.all([
    readFile(join(process.cwd(), "app/_fonts/Fraunces-SemiBold.ttf")),
    readFile(join(process.cwd(), "app/_fonts/PlexMono-Medium.ttf")),
    readFile(join(process.cwd(), "public/gc-mark.png")),
  ]);
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#faf6ec",
          padding: 88,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid #e4d8c0",
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={137} height={96} alt="" />
            <div
              style={{
                display: "flex",
                marginLeft: 32,
                fontFamily: "Plex",
                fontSize: 26,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#6b5d4c",
              }}
            >
              {eyebrow}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              fontFamily: "Fraunces",
              fontSize: title.length === 2 ? 128 : 112,
              lineHeight: 1,
              letterSpacing: -3,
              color: "#221a13",
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
              marginTop: 36,
              width: 120,
              height: 8,
              backgroundColor: "#a84d1d",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "Fraunces",
              fontSize: 34,
              lineHeight: 1.25,
              color: "#6b5d4c",
              maxWidth: 820,
            }}
          >
            {sub}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 88,
            bottom: 72,
            display: "flex",
            fontFamily: "Plex",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#6b5d4c",
          }}
        >
          Glennville, Georgia
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Plex", data: plex, weight: 500, style: "normal" },
      ],
    },
  );
}
