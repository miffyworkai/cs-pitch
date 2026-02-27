import { motion } from "motion/react";
import { C, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";
import { IconPin } from "../components/Icons";

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
        radial-gradient(ellipse at 40% 60%, ${C.red}05 0%, transparent 50%),
        ${C.cream}
      `}
      style={{ justifyContent: "flex-start" }}
    >
      <div style={{ maxWidth: 860, padding: "60px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.red, fontFamily: FONT_BODY }}>
              How Liability Flows Under JSL
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.red}18` }} />
          </div>
        </Stagger>

        <div
          style={{
            background: `${C.red}05`,
            borderRadius: 18,
            padding: "28px 32px",
            marginBottom: 24,
            border: `1px solid ${C.red}15`,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {jslSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 14, lineHeight: 1.5, color: `${C.dark}CC`, fontFamily: FONT_BODY }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: i === 4 ? C.magenta : `${C.plum}10`,
                    border: i === 4 ? "none" : `1px solid ${C.blush}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            background: `${C.sage}08`,
            border: `1.5px solid ${C.sage}35`,
            borderRadius: 16,
            padding: "22px 28px",
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, color: C.sage, marginBottom: 12, fontFamily: FONT_BODY }}>
            &#10003; CareSyndicate eliminates all four JSL trigger conditions
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, fontSize: 13, color: `${C.dark}BB`, lineHeight: 1.5, fontFamily: FONT_BODY }}>
            <div><strong style={{ color: C.dark }}>No umbrella</strong> employs anyone</div>
            <div><strong style={{ color: C.dark }}>No umbrella</strong> operates PAYE</div>
            <div><strong style={{ color: C.dark }}>No umbrella</strong> in supply chain</div>
            <div><strong style={{ color: C.dark }}>No employment business</strong> supplies workers</div>
          </div>
        </motion.div>

        <div style={{ marginTop: 16 }}>
          <DeepDive title="Key JSL facts your board needs to know" icon={<IconPin size={18} color={C.red} />} color={C.red}>
            <p><strong style={{ color: C.dark }}>Effective date:</strong> 6 April 2026 — no grandfather clause.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Scope:</strong> All umbrella-agency-client supply chains where PAYE is operated.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Defence:</strong> None. Strict liability applies regardless of due diligence.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Enforcement:</strong> HMRC can issue Real Time Information notices and pursue through normal debt recovery.</p>
            <p style={{ marginTop: 12, borderTop: `1px solid ${C.blush}`, paddingTop: 12 }}><strong style={{ color: C.dark }}>Statutory references:</strong></p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Finance Act 2025, Schedule 1</strong> — the specific legislation introducing JSL for umbrella company supply chains.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>HMRC ESM4015</strong> — care workers engaged as genuine self-employed through an introduction platform are not "supplied" by that platform.</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Employment Agencies Act 1973</strong> — distinguishes introducers (lighter obligations) from employment businesses (deemed employer duties).</p>
            <p style={{ marginTop: 6 }}><strong style={{ color: C.dark }}>Conduct Regulations 2003</strong> — introducer obligations are "significantly lighter" than employment business obligations.</p>
            <p style={{ marginTop: 10 }}><strong style={{ color: C.dark }}>CareSyndicate's classification:</strong> Introducer and payment collection agent — not an employment business. This is why JSL trigger conditions structurally cannot be satisfied.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
