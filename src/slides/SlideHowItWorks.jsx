import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

export default function SlideHowItWorks() {
  const steps = [
    { num: "1", title: "Induct workers to care plans", desc: "Same as today. Your clinical processes don't change.", time: "As needed" },
    { num: "2", title: "Approve timesheets", desc: "Workers submit via app. One-click approve. Avg 2–3 minutes per worker per week.", time: "Weekly" },
    { num: "3", title: "Pay one invoice", desc: "All workers, all routes, all compliance — one consolidated invoice, one payment.", time: "Per period" },
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 30% 50%, ${C.sage}08 0%, transparent 50%),
        ${C.cream}
      `}
    >
      <div style={{ maxWidth: 800, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.sage, fontFamily: FONT_BODY }}>
              Operations
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.sage}25` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: C.plum, margin: "0 0 12px", lineHeight: 1.1, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em" }}>
            Simpler, Not <span style={{ color: C.sage, fontStyle: "italic" }}>More Complex</span>
          </h2>
        </Stagger>

        <Stagger delay={0.3}>
          <p style={{ fontSize: 17, color: `${C.dark}88`, margin: "0 0 36px", lineHeight: 1.6, maxWidth: 580, fontFamily: FONT_BODY }}>
            Your team's operational involvement reduces to three actions.
            Everything else is automated.
          </p>
        </Stagger>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  background: C.white,
                  borderRadius: 16,
                  padding: "24px 28px",
                  border: `1px solid ${C.blush}`,
                  boxShadow: `0 1px 6px ${C.plum}06`,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.plum}, ${C.magenta})`,
                    color: C.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 20,
                    flexShrink: 0,
                    fontFamily: FONT_BODY,
                  }}
                >
                  {step.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: C.dark, fontFamily: FONT_BODY }}>{step.title}</div>
                  <div style={{ fontSize: 14, color: `${C.dark}77`, marginTop: 4, lineHeight: 1.5, fontFamily: FONT_BODY }}>{step.desc}</div>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: C.sage,
                    background: `${C.sage}10`,
                    padding: "6px 14px",
                    borderRadius: 14,
                    whiteSpace: "nowrap",
                    fontFamily: FONT_BODY,
                  }}
                >
                  {step.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
