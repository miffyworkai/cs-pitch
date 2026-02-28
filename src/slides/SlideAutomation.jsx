import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";
import { IconSparkle, IconClipboardCheck } from "../components/Icons";

export default function SlideAutomation() {
  const autoItems = [
    "CEST assessments per engagement",
    "Payment routing (SE/Ltd/PAYE)",
    "Insurance upload, verify & monitor",
    "DBS Update Service checks",
    "Substitution workflow & logging",
    "Decline tracking with timestamps",
    "Client dependency monitoring",
    "Credential expiry alerts (30/14 day)",
    "CQC evidence pack generation",
    "HMRC audit trail maintenance",
  ];

  return (
    <Slide bg={C.cream}>
      <div style={{ maxWidth: 860, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.sage, fontFamily: FONT_BODY }}>
              Automation
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.sage}25` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: C.plum, margin: "0 0 36px", lineHeight: 1.15, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em" }}>
            What the CRM Handles <span style={{ color: C.sage, fontStyle: "italic" }}>Automatically</span>
          </h2>
        </Stagger>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 28px", marginBottom: 28 }}>
          {autoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 0",
                fontSize: 14,
                color: `${C.dark}CC`,
                fontFamily: FONT_BODY,
              }}
            >
              <span style={{ color: C.sage, fontSize: 16, flexShrink: 0 }}>&#10003;</span>
              {item}
            </motion.div>
          ))}
        </div>

        <DeepDive title="AI features integrated into the platform" icon={<IconSparkle size={18} color={C.sage} />} color={C.sage}>
          <p><strong style={{ color: C.dark }}>AI Matching Engine:</strong> Skills, location, availability, compliance status, ratings — ranked shortlists with explanations.</p>
          <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>AI Assistant:</strong> Chat or voice. Ask natural-language questions about your workforce data: spend, compliance, expiring credentials.</p>
          <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>CQC Report Generation:</strong> AI-generated inspection-ready compliance reports covering all five CQC domains. Minutes instead of days.</p>
          <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Predictive Alerts:</strong> Identifies workers approaching credential expiry, declining fill rates, or emerging dependency patterns before they become problems.</p>
        </DeepDive>
        <DeepDive title="CQC inspection readiness — built in, not bolted on" icon={<IconClipboardCheck size={18} color={C.sage} />} color={C.sage}>
          <p>Reports cover <strong style={{ color: C.dark }}>all 5 CQC domains</strong> — Safe, Effective, Caring, Responsive, and Well-led — generated in <strong style={{ color: C.dark }}>minutes, not days</strong>.</p>
          <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Evidence types:</strong> Credential verification logs, insurance monitoring history, DBS status checks, substitution audit trails, decline rate tracking.</p>
          <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Traffic-light compliance scoring:</strong> Green (&lt;30% client dependency), Amber (30–60%), Red (&gt;60%) — giving instant visibility of risk concentration.</p>
          <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Predictive alerts</strong> flag issues before they surface in inspections. Pre-written inspection responses for workforce governance questions are included.</p>
        </DeepDive>
      </div>
    </Slide>
  );
}
