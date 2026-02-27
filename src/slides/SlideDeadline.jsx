import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";

export default function SlideDeadline() {
  const milestones = [
    { date: "Apr 2026", text: "JSL + Fair Work Agency launch", highlight: true },
    { date: "Apr 2026", text: "Day-one employment rights", highlight: true },
    { date: "Jan 2027", text: "Unfair dismissal qualifying period 2yr → 6mo", highlight: false },
    { date: "2027", text: "Zero-hours reforms — right to guaranteed hours (affects 43% of domiciliary care workers)", highlight: false },
    { date: "Apr 2028", text: "Fair Pay Agreement (£500m government backing)", highlight: false },
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 50% 50%, ${C.redDark}60 0%, transparent 60%),
        ${C.dark}
      `}
      style={{ justifyContent: "flex-start" }}
    >
      <div style={{ maxWidth: 860, padding: "60px 40px", width: "100%" }}>
        <Stagger delay={0.1}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#F9A8A8",
              border: `1px solid ${C.red}40`,
              padding: "8px 22px",
              borderRadius: 24,
              fontFamily: FONT_BODY,
            }}>
              <span style={{ fontSize: 14 }}>&#9888;</span>
              Urgent: 6 April 2026
            </div>
          </div>
        </Stagger>

        <Stagger delay={0.3}>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 400,
            color: C.white,
            margin: "0 0 16px",
            lineHeight: 1.1,
            fontFamily: FONT_DISPLAY,
            textAlign: "center",
          }}>
            Joint & Several Liability
            <br />
            Is <span style={{ color: "#F9A8A8", fontStyle: "italic" }}>Weeks Away</span>
          </h2>
        </Stagger>

        <Stagger delay={0.55}>
          <p style={{
            fontSize: 16,
            color: `${C.cream}99`,
            lineHeight: 1.65,
            maxWidth: 580,
            margin: "0 auto 32px",
            fontFamily: FONT_BODY,
            fontWeight: 300,
            textAlign: "center",
          }}>
            The Finance Act 2025 introduces strict, no-defence liability for care providers
            with umbrella companies in their supply chain.
          </p>
        </Stagger>

        {/* Regulatory timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: 12, marginBottom: 18,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#F9A8A8", fontFamily: FONT_BODY }}>
              Regulatory Timeline
            </div>
            <div style={{ flex: 1, height: 1, background: "rgba(249,168,168,0.2)" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "12px 16px",
                  background: m.highlight ? `rgba(217,68,68,0.12)` : "rgba(255,255,255,0.04)",
                  borderRadius: 12,
                  border: `1px solid ${m.highlight ? `${C.red}30` : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: m.highlight ? "#F9A8A8" : C.orchid,
                  fontFamily: FONT_BODY,
                  minWidth: 70,
                  flexShrink: 0,
                }}>
                  {m.date}
                </div>
                <div style={{
                  fontSize: 13,
                  color: `${C.cream}CC`,
                  lineHeight: 1.5,
                  fontFamily: FONT_BODY,
                }}>
                  {m.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div style={{ marginTop: 18 }}>
          <DeepDive title="Why value extends beyond JSL" icon="&#128161;" color={C.red}>
            <p>Even if HMRC delays JSL implementation, CareSyndicate's value proposition is independent of any single regulation:</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>Cost savings are permanent (22%):</strong> The agency-umbrella markup exists regardless of JSL. Removing it saves money from day one.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>CQC readiness is ongoing:</strong> Inspection-ready reporting, credential monitoring, and evidence packs are valuable today and every day.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>Compliance automation has indefinite value:</strong> CEST assessments, insurance monitoring, DBS checks, and audit trails protect providers against existing obligations — not just future ones.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
