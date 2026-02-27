import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";
import { IconPerson } from "../components/Icons";

export default function SlideRoadmap() {
  const steps = [
    { week: "This Week", title: "Introductory call", desc: "Understand the model. Review compliance documentation. Scope a pilot.", color: C.orchid },
    { week: "Week 1", title: "Legal due diligence", desc: "Share Legal Distinction Guide and Indemnity Policy with your solicitors.", color: C.plum },
    { week: "Weeks 2\u20134", title: "Pilot transition", desc: "Start with 5–10 workers on CareSyndicate. Run alongside existing agency.", color: C.magenta },
    { week: "Week 8", title: "Pilot review", desc: "Assess compliance improvements, operational impact, cost savings.", color: C.magenta },
    { week: "Before 6 Apr", title: "Scale to full coverage", desc: "Expand to full workforce. Ensure no umbrella remains in any supply chain.", color: C.sage },
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 50% 70%, ${C.plum}06 0%, transparent 50%),
        ${C.cream}
      `}
      style={{ justifyContent: "flex-start" }}
    >
      <div style={{ maxWidth: 800, padding: "60px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.orchid, fontFamily: FONT_BODY }}>
              Next Steps
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.orchid}30` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: C.plum, margin: "0 0 32px", lineHeight: 1.15, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em" }}>
            Transition <span style={{ color: C.orchid, fontStyle: "italic" }}>Roadmap</span>
          </h2>
        </Stagger>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "center",
                  background: C.white,
                  borderRadius: 14,
                  padding: "18px 24px",
                  border: `1px solid ${C.blush}`,
                  boxShadow: `0 1px 4px ${C.plum}04`,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: s.color,
                    background: `${s.color}10`,
                    padding: "6px 14px",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                    minWidth: 90,
                    textAlign: "center",
                    fontFamily: FONT_BODY,
                  }}
                >
                  {s.week}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: C.dark, fontFamily: FONT_BODY }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: `${C.dark}77`, marginTop: 3, lineHeight: 1.5, fontFamily: FONT_BODY }}>{s.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 16 }}>
          <DeepDive title="What your team needs to do" icon={<IconPerson size={18} color={C.plum} />} color={C.plum}>
            <p><strong style={{ color: C.dark }}>Training:</strong> Single 2-hour session for approvers. The End Client Portal is designed for simplicity — average interaction time is 2–3 minutes per worker per week.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Day-to-day:</strong> Induct workers, approve timesheets, pay one invoice. Your clinical processes don't change. Admin burden reduces significantly.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>CQC inspections:</strong> Audit packs generated on demand. Pre-written inspection responses provided.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
