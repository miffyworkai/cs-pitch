import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";
import { IconLightbulb, IconPin } from "../components/Icons";

export default function SlideDeadlineJSL() {
  const milestones = [
    { date: "Apr 2026", text: "JSL + Fair Work Agency launch", highlight: true },
    { date: "Apr 2026", text: "Day-one employment rights", highlight: true },
    { date: "Jan 2027", text: "Unfair dismissal qualifying period 2yr → 6mo", highlight: false },
    { date: "2027", text: "Zero-hours reforms — right to guaranteed hours (affects 43% of domiciliary care workers)", highlight: false },
    { date: "Apr 2028", text: "Fair Pay Agreement (£500m government backing)", highlight: false },
  ];

  const jslSteps = [
    "Umbrella company deducts PAYE/NI but fails to remit to HMRC",
    "HMRC identifies the shortfall, pursues the umbrella",
    "If umbrella can't pay → HMRC issues JSL notice to the agency",
    "If agency can't pay → HMRC pursues the care provider",
    "Strict liability — no statutory defence, even with due diligence",
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 30% 50%, ${C.red}06 0%, transparent 60%),
        ${C.cream}
      `}
      style={{ justifyContent: "flex-start" }}
    >
      <div style={{ maxWidth: 1040, padding: "48px 40px", width: "100%" }}>
        <Stagger delay={0.1}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: C.red,
              border: `1px solid ${C.red}30`,
              padding: "8px 22px",
              borderRadius: 24,
              fontFamily: FONT_BODY,
            }}>
              <span style={{ fontSize: 14 }}>&#9888;</span>
              Urgent: 6 April 2026
            </div>
          </div>
        </Stagger>

        <Stagger delay={0.25}>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 42px)",
            fontWeight: 700,
            color: C.plum,
            margin: "0 0 24px",
            lineHeight: 1.1,
            fontFamily: FONT_DISPLAY,
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}>
            Joint & Several Liability Is{" "}
            <span style={{ color: C.red, fontStyle: "italic" }}>Weeks Away</span>
          </h2>
        </Stagger>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* LEFT — Deadline + Timeline */}
          <div>
            <Stagger delay={0.4}>
              <p style={{
                fontSize: 14,
                color: `${C.dark}88`,
                lineHeight: 1.65,
                margin: "0 0 20px",
                fontFamily: FONT_BODY,
                fontWeight: 300,
              }}>
                The Finance Bill 2025-26 introduces strict, no-defence liability for care
                providers with umbrella companies in their supply chain.
              </p>
            </Stagger>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.red, fontFamily: FONT_BODY }}>
                  Regulatory Timeline
                </div>
                <div style={{ flex: 1, height: 1, background: `${C.red}18` }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 14px",
                      background: m.highlight ? `${C.red}06` : C.white,
                      borderRadius: 10,
                      border: `1px solid ${m.highlight ? `${C.red}20` : C.blush}`,
                    }}
                  >
                    <div style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: m.highlight ? C.red : C.plum,
                      fontFamily: FONT_BODY,
                      minWidth: 64,
                      flexShrink: 0,
                    }}>
                      {m.date}
                    </div>
                    <div style={{
                      fontSize: 12,
                      color: `${C.dark}CC`,
                      lineHeight: 1.45,
                      fontFamily: FONT_BODY,
                    }}>
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — JSL Flow + Elimination */}
          <div>
            <div
              style={{
                background: `${C.red}05`,
                borderRadius: 14,
                padding: "20px 22px",
                marginBottom: 16,
                border: `1px solid ${C.red}15`,
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.red, marginBottom: 12, fontFamily: FONT_BODY }}>
                How Liability Flows
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {jslSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                    style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, lineHeight: 1.45, color: `${C.dark}CC`, fontFamily: FONT_BODY }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: i === 4 ? C.magenta : `${C.plum}10`,
                        border: i === 4 ? "none" : `1px solid ${C.blush}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 700,
                        flexShrink: 0,
                        color: i === 4 ? C.white : C.plum,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{
                background: `${C.sage}08`,
                border: `1.5px solid ${C.sage}35`,
                borderRadius: 12,
                padding: "16px 20px",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: C.sage, marginBottom: 10, fontFamily: FONT_BODY }}>
                &#10003; CareSyndicate eliminates all four JSL triggers
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 11, color: `${C.dark}BB`, lineHeight: 1.45, fontFamily: FONT_BODY }}>
                <div><strong style={{ color: C.dark }}>No umbrella</strong> employs anyone</div>
                <div><strong style={{ color: C.dark }}>No umbrella</strong> operates PAYE</div>
                <div><strong style={{ color: C.dark }}>No umbrella</strong> in supply chain</div>
                <div><strong style={{ color: C.dark }}>No employment business</strong> supplies workers</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Deep dives */}
        <div style={{ marginTop: 16 }}>
          <DeepDive title="Why value extends beyond JSL" icon={<IconLightbulb size={18} color={C.red} />} color={C.red}>
            <p>Even if HMRC delays JSL implementation, CareSyndicate's value proposition is independent of any single regulation:</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Cost savings are permanent (22%):</strong> The agency-umbrella markup exists regardless of JSL. Removing it saves money from day one.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>CQC readiness is ongoing:</strong> Inspection-ready reporting, credential monitoring, and evidence packs are valuable today and every day.</p>
          </DeepDive>
          <DeepDive title="Key JSL facts your board needs to know" icon={<IconPin size={18} color={C.red} />} color={C.red}>
            <p><strong style={{ color: C.dark }}>Effective date:</strong> 6 April 2026 — no grandfather clause.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Scope:</strong> PAYE and Class 1 NICs in umbrella-agency-client supply chains.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Defence:</strong> None. Strict liability applies regardless of due diligence.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Legislation:</strong> Finance Bill 2025-26, Clause 24 — new Chapter 11 ITEPA 2003.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>CareSyndicate's classification:</strong> Introducer and payment collection agent — not an employment business. JSL trigger conditions structurally cannot be satisfied.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
