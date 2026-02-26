import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

export default function SlideSolution() {
  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 40% 30%, ${C.sage}18 0%, transparent 50%),
        radial-gradient(ellipse at 70% 80%, ${C.plum}15 0%, transparent 40%),
        ${C.dark}
      `}
    >
      <div style={{ maxWidth: 800, padding: "0 40px", width: "100%", textAlign: "center" }}>
        <Stagger delay={0.1}>
          <div style={{
            display: "inline-block",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: C.sage,
            marginBottom: 28,
            border: `1px solid ${C.sage}35`,
            padding: "8px 22px",
            borderRadius: 24,
            fontFamily: FONT_BODY,
          }}>
            Our Platform
          </div>
        </Stagger>

        <Stagger delay={0.3}>
          <h2 style={{
            fontSize: "clamp(34px, 5vw, 58px)",
            fontWeight: 400,
            color: C.white,
            margin: "0 0 24px",
            lineHeight: 1.1,
            fontFamily: FONT_DISPLAY,
          }}>
            <span style={{ color: C.orchid }}>Direct.</span>{" "}
            <span style={{ color: C.sage }}>Compliant.</span>{" "}
            <span style={{ color: C.magenta, fontStyle: "italic" }}>Intelligent.</span>
          </h2>
        </Stagger>

        <Stagger delay={0.55}>
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: `${C.cream}99`,
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto 48px",
            fontFamily: FONT_BODY,
            fontWeight: 300,
          }}>
            An AI-native workforce platform that replaces the agency-umbrella model with direct,
            compliant engagements — cutting out the middleman while automating the compliance burden.
          </p>
        </Stagger>

        <Stagger delay={0.8}>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "No Umbrella", color: C.sage },
              { label: "No Agency Markup", color: C.orchid },
              { label: "No JSL Exposure", color: C.magenta },
              { label: "Full Audit Trail", color: C.plum },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + i * 0.1, duration: 0.5 }}
                style={{
                  padding: "10px 20px",
                  borderRadius: 30,
                  border: `1px solid ${t.color}50`,
                  color: t.color,
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: FONT_BODY,
                  background: `${t.color}10`,
                }}
              >
                {t.label}
              </motion.div>
            ))}
          </div>
        </Stagger>
      </div>
    </Slide>
  );
}
