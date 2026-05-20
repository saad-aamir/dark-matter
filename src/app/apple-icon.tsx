import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0a0a0f",
          borderRadius: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "2px solid rgba(196,161,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
        {/* Wordmark */}
        <div
          style={{
            fontSize: 18,
            color: "#f0ece2",
            fontFamily: "Georgia, serif",
            letterSpacing: "3px",
          }}
        >
          DM
        </div>
      </div>
    ),
    { ...size }
  );
}
