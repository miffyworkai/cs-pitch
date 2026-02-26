import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

export default function SlideCostBreakdown() {
  const stats = [
    { val: "£22–25/hr", label: "Blended rate charged", sub: "No cost breakdown provided" },
    { val: "£14–16/hr", label: "Worker take-home", sub: "After umbrella deductions" },
    { val: "15–30%", label: "Agency margin", sub: "Draining care budgets" },
    { val: "Zero", label: "Audit trail you control", sub: "Evidence held by agency" },
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 60% 60%, ${C.deepPlum}50 0%, transparent 50%),
        ${C.dark}
      `}
    >
      <div style={{ maxWidth: 920, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.magenta, fontFamily: FONT_BODY }}>
              The True Cost
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.magenta}30` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 400, color: C.white, margin: "0 0 36px", lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
            Where the Money <span style={{ color: C.magenta, fontStyle: "italic" }}>Goes</span>
          </h2>
        </Stagger>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "28px 20px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 700, color: C.magenta, fontFamily: FONT_BODY }}>{s.val}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.cream, marginTop: 8, fontFamily: FONT_BODY }}>{s.label}</div>
                <div style={{ fontSize: 12, color: `${C.cream}55`, marginTop: 4, fontFamily: FONT_BODY }}>{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
