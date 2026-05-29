import { ImageResponse } from "next/og";

export const alt = "St. Luke's Medical Laboratory — Ja-Ela, Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #051a0c 0%, #0a2e16 55%, #103a1d 100%)",
          fontFamily: "sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(88,179,48,0.18)",
            filter: "blur(8px)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#7fd35a",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#58b330",
              display: "flex",
            }}
          />
          Ja-Ela, Sri Lanka
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>St. Luke&apos;s Medical</span>
            <span style={{ color: "#7fd35a" }}>Laboratory</span>
          </div>
          <div
            style={{
              fontSize: 34,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 980,
              lineHeight: 1.3,
            }}
          >
            Blood tests, ECG &amp; home visits — 24-hour reports across Ja-Ela,
            Kandana, Welisara, Ragama &amp; Wattala.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 24,
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", color: "rgba(255,255,255,0.7)" }}>
            stlukesmedilab.com
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            +94 71 123 1954
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
