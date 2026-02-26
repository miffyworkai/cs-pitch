import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import RiskCard from "../components/RiskCard";

export default function SlideRiskMap1() {
  const risks = [
    { icon: "\u2696\uFE0F", risk: "Joint & Several Liability", exposure: "Strict liability from 6 April 2026 if umbrella in chain", elimination: "No umbrella in supply chain. JSL trigger conditions cannot be satisfied. Zero exposure." },
    { icon: "\uD83C\uDFF7\uFE0F", risk: "Status Misclassification", exposure: "Blanket classification. No per-engagement CEST. HMRC can pursue provider.", elimination: "CEST per engagement. Results stored permanently. Employment results auto-route to PAYE." },
    { icon: "\uD83D\uDD0D", risk: "Opaque Supply Chain", exposure: "Can't see how workers are classified, paid, or insured.", elimination: "Direct, transparent chain. Every payment, classification, credential visible in your portal." },
    { icon: "\uD83D\uDCC1", risk: "No Audit Evidence", exposure: "Must request from agency. Often delayed or incomplete.", elimination: "CRM generates full audit packs on demand. CEST, payslips, credentials — permanently stored." },
    { icon: "\uD83D\uDEE1\uFE0F", risk: "Insurance Gaps", exposure: "Verification varies. Expired policies may go unnoticed.", elimination: "£6M PL + £2M PI mandatory. CRM monitors renewals. Expired workers blocked automatically." },
    { icon: "\uD83D\uDD10", risk: "DBS Compliance", exposure: "Agency holds records. Real-time visibility limited.", elimination: "Enhanced DBS on Update Service required. Real-time checks. Non-compliant workers blocked." },
  ];

  return (
    <Slide bg={C.dark}>
      <div style={{ maxWidth: 920, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.sage, fontFamily: FONT_BODY }}>
              Risk Elimination
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.sage}30` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: C.white, margin: "0 0 8px", lineHeight: 1.15, fontFamily: FONT_DISPLAY }}>
            12 Risks Identified. <span style={{ color: C.sage, fontStyle: "italic" }}>12 Eliminated.</span>
          </h2>
          <p style={{ fontSize: 14, color: `${C.cream}66`, marginBottom: 28, fontFamily: FONT_BODY }}>
            Click any card to see how CareSyndicate structurally eliminates each risk.
          </p>
        </Stagger>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {risks.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
            >
              <RiskCard {...r} />
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
