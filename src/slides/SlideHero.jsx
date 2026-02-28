import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import AnimatedCounter from "../components/AnimatedCounter";

export default function SlideHero() {
  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 20% 50%, ${C.orchid}10 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, ${C.magenta}08 0%, transparent 50%),
        radial-gradient(ellipse at 50% 90%, ${C.plum}06 0%, transparent 40%),
        ${C.cream}
      `}
    >
      {/* Subtle grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div style={{ position: "relative", textAlign: "center", maxWidth: 800, padding: "0 40px" }}>
        <Stagger delay={0.4}>
          <h1
            style={{
              fontSize: "clamp(36px, 5.5vw, 64px)",
              fontWeight: 700,
              color: C.plum,
              margin: "0 0 24px",
              lineHeight: 1.1,
              fontFamily: FONT_DISPLAY,
              letterSpacing: "-0.02em",
            }}
          >
            The Care Sector's
            <br />
            <span style={{ color: C.magenta }}>Workforce Model</span> Is Broken
          </h1>
        </Stagger>

        <Stagger delay={0.7}>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: `${C.dark}99`,
              lineHeight: 1.65,
              maxWidth: 580,
              margin: "0 auto 48px",
              fontWeight: 300,
              fontFamily: FONT_BODY,
            }}
          >
            CareSyndicate replaces the broken agency-umbrella model with a direct,
            compliant, AI-native workforce platform — purpose-built for UK healthcare.
          </p>
        </Stagger>

        <Stagger delay={1.0}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 48,
              flexWrap: "wrap",
              padding: "32px 0 0",
              borderTop: `1px solid ${C.blush}`,
            }}
          >
            {[
              { val: "6.7", pre: "\u00A3", suf: "B", label: "UK Domiciliary Market" },
              { val: "111", suf: "K", label: "Unfilled Roles" },
              { val: "1.7", suf: "M", label: "Care Workforce" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    fontWeight: 700,
                    color: C.magenta,
                    fontFamily: FONT_BODY,
                    letterSpacing: "-1px",
                  }}
                >
                  <AnimatedCounter
                    value={s.val}
                    prefix={s.pre || ""}
                    suffix={s.suf}
                    delay={1.2 + i * 0.15}
                  />
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: `${C.dark}55`,
                    marginTop: 6,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    fontFamily: FONT_BODY,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Stagger>

        <Stagger delay={1.6}>
          <div
            style={{
              marginTop: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${C.red}10`,
              border: `1px solid ${C.red}30`,
              padding: "10px 20px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              color: C.red,
              fontFamily: FONT_BODY,
            }}
          >
            <span style={{ fontSize: 16 }}>&#9888;</span>
            JSL Deadline: 6 April 2026
          </div>
        </Stagger>
      </div>
    </Slide>
  );
}
