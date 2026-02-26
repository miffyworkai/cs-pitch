import { motion } from "motion/react";
import { C, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";

export default function SlideJSLDefence() {
  const jslSteps = [
    "Umbrella company deducts PAYE/NI but fails to remit to HMRC",
    "HMRC identifies the shortfall, pursues the umbrella",
    "If umbrella can't pay \u2192 HMRC issues JSL notice to the agency",
    "If agency can't pay \u2192 HMRC pursues the care provider",
    "Strict liability \u2014 no statutory defence, even with due diligence",
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 40% 60%, ${C.redDark}40 0%, transparent 50%),
        ${C.dark}
      `}
      style={{ justifyContent: "flex-start" }}
    >
      <div style={{ maxWidth: 860, padding: "60px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#F9A8A8", fontFamily: FONT_BODY }}>
              How Liability Flows Under JSL
            </div>
            <div style={{ flex: 1, height: 1, background: "rgba(249,168,168,0.2)" }} />
          </div>
        </Stagger>

        <div
          style={{
            background: `linear-gradient(135deg, rgba(61,21,32,0.6), rgba(107,32,64,0.3))`,
            borderRadius: 18,
            padding: "28px 32px",
            marginBottom: 24,
            border: `1px solid ${C.red}20`,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {jslSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 14, lineHeight: 1.5, color: `${C.cream}CC`, fontFamily: FONT_BODY }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: i === 4 ? C.magenta : "rgba(255,255,255,0.08)",
                    border: i === 4 ? "none" : "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                    color: C.white,
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            background: `${C.sage}12`,
            border: `1.5px solid ${C.sage}50`,
            borderRadius: 16,
            padding: "22px 28px",
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, color: C.sage, marginBottom: 12, fontFamily: FONT_BODY }}>
            &#10003; CareSyndicate eliminates all four JSL trigger conditions
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, fontSize: 13, color: `${C.cream}BB`, lineHeight: 1.5, fontFamily: FONT_BODY }}>
            <div><strong style={{ color: C.cream }}>No umbrella</strong> employs anyone</div>
            <div><strong style={{ color: C.cream }}>No umbrella</strong> operates PAYE</div>
            <div><strong style={{ color: C.cream }}>No umbrella</strong> in supply chain</div>
            <div><strong style={{ color: C.cream }}>No employment business</strong> supplies workers</div>
          </div>
        </motion.div>

        <div style={{ marginTop: 16 }}>
          <DeepDive title="Key JSL facts your board needs to know" icon="&#128204;" color={C.red}>
            <p><strong style={{ color: C.cream }}>Effective date:</strong> 6 April 2026 — no grandfather clause.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.cream }}>Scope:</strong> All umbrella-agency-client supply chains where PAYE is operated.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.cream }}>Defence:</strong> None. Strict liability applies regardless of due diligence.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.cream }}>Enforcement:</strong> HMRC can issue Real Time Information notices and pursue through normal debt recovery.</p>
            <p style={{ marginTop: 10 }}><strong style={{ color: C.cream }}>The only way to eliminate JSL risk is to remove the umbrella company from your supply chain entirely.</strong></p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
