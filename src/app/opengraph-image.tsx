import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dark Matter — We Build Websites That Convert";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Grid noise overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(196,161,255,0.12) 0%, transparent 60%), radial-gradient(circle at 75% 70%, rgba(255,107,157,0.08) 0%, transparent 50%)",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #c4a1ff, #ff6b9d, #4ecdc4)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "2px solid rgba(196,161,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "#c4a1ff",
            }}
          />
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#f0ece2",
            lineHeight: 1.05,
            textAlign: "center",
            letterSpacing: "-1px",
            maxWidth: 900,
          }}
        >
          Websites That Turn
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            fontStyle: "italic",
            background: "linear-gradient(135deg, #c4a1ff, #ff6b9d)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Visitors Into Clients
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.3em",
            color: "rgba(240,236,226,0.4)",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          DARK MATTER STUDIO
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 16,
            letterSpacing: "0.15em",
            color: "rgba(196,161,255,0.5)",
            fontFamily: "sans-serif",
          }}
        >
          www.darkmatterstudio.org
        </div>
      </div>
    ),
    { ...size }
  );
}
