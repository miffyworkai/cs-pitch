import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

const objections = [
  {
    q: "Our agency handles everything — why change?",
    a: "Agencies charge a 98% markup (£19.57/hr vs £9.90/hr for permanent staff). Their model IS the umbrella. You are paying for a supply chain that creates the very risk you are trying to avoid.",
  },
  {
    q: "Is this just another payroll company?",
    a: "No. CareSyndicate is a technology platform and introducer — not an employer, payroll bureau, or agency. We connect providers with workers directly and automate compliance. No umbrella, no PAYE operation, no supply chain liability.",
  },
  {
    q: "What if HMRC delays JSL?",
    a: "The 22% cost saving is permanent — it exists today, not just after April 2026. CQC readiness, transparency, and compliance automation have indefinite value regardless of JSL timing.",
  },
  {
    q: "Our workers won't want to change.",
    a: "Workers receive the full agreed rate: £18/hr vs £14–16/hr through an umbrella. Higher take-home, proper insurance, full transparency. The change benefits them most.",
  },
  {
    q: "We need to consult our solicitors.",
    a: "Encouraged. The legal position is documented against Finance Act 2025, HMRC ESM4015, and Employment Agencies Act 1973. We welcome independent review.",
  },
];

export default function SlideObjections() {
  return (
    <Slide bg={C.dark} style={{ justifyContent: "flex-start" }}>
      <div style={{ maxWidth: 880, padding: "60px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.orchid, fontFamily: FONT_BODY }}>
              Common Questions
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.orchid}30` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: C.white, margin: "0 0 8px", lineHeight: 1.15, fontFamily: FONT_DISPLAY }}>
            What Clients <span style={{ color: C.orchid, fontStyle: "italic" }}>Ask Us</span>
          </h2>
          <p style={{ fontSize: 14, color: `${C.cream}66`, marginBottom: 28, fontFamily: FONT_BODY }}>
            Data-backed responses to the questions we hear most often.
          </p>
        </Stagger>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "18px 22px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{
                fontSize: 14,
                fontWeight: 600,
                color: C.orchid,
                marginBottom: 8,
                fontFamily: FONT_BODY,
                fontStyle: "italic",
              }}>
                "{obj.q}"
              </div>
              <div style={{
                fontSize: 13,
                color: `${C.cream}BB`,
                lineHeight: 1.6,
                fontFamily: FONT_BODY,
              }}>
                {obj.a}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
