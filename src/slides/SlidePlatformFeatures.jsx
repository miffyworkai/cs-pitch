import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";

export default function SlidePlatformFeatures() {
  const features = [
    { icon: "\uD83E\uDD16", title: "AI-Powered Matching", desc: "Ranked shortlists in seconds with plain-English explanations. Skills, qualifications, location, availability — all analysed." },
    { icon: "\uD83D\uDEE1\uFE0F", title: "Compliance Engine", desc: "CEST per engagement. Six-dimension traffic-light scoring. Auto-route to PAYE. CQC and HMRC evidence packs on demand." },
    { icon: "\uD83D\uDCB0", title: "Transparent Billing", desc: "Worker rate, platform fee, and VAT shown separately on every invoice. Two VAT models — you choose." },
    { icon: "\uD83D\uDCF1", title: "Four Dedicated Portals", desc: "Worker app, recruiter portal, provider portal, admin console. Each role sees exactly what they need." },
  ];

  return (
    <Slide bg={C.dark} style={{ justifyContent: "flex-start" }}>
      <div style={{ maxWidth: 920, padding: "60px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.orchid, fontFamily: FONT_BODY }}>
              Platform
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.orchid}30` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: C.white, margin: "0 0 36px", lineHeight: 1.15, fontFamily: FONT_DISPLAY }}>
            Four Pillars of the Platform
          </h2>
        </Stagger>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 16,
                  padding: "28px 22px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  height: "100%",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.cream, marginBottom: 8, fontFamily: FONT_BODY }}>{f.title}</div>
                <div style={{ fontSize: 13, color: `${C.cream}77`, lineHeight: 1.6, fontFamily: FONT_BODY }}>{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <DeepDive title="How the compliance engine works" icon="&#9881;&#65039;" color={C.plum}>
            <p><strong style={{ color: C.cream }}>CEST Integration:</strong> Every engagement is assessed using HMRC's own Check Employment Status for Tax tool. Results stored permanently.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>Six-Dimension Scoring:</strong> Client concentration, substitution evidence, financial risk, control levels, business entity status, and CEST determination — combined into Green/Amber/Red traffic lights.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>Auto-Routing:</strong> SE → business account. Ltd → company. Employment → independent payroll bureau with full PAYE. No manual decision, no misclassification risk.</p>
          </DeepDive>
          <DeepDive title="Three payment routes explained" icon="&#128179;" color={C.plum}>
            <p><strong style={{ color: C.cream }}>Route 1 — Self-Employed:</strong> Worker holds own UTR, carries insurance, files self-assessment. Paid gross to business bank account.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>Route 2 — Limited Company:</strong> Worker operates through PSC. Payment to company account.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>Route 3 — PAYE:</strong> When CEST returns employment, auto-routed to independent payroll bureau. Full statutory compliance.</p>
          </DeepDive>
          <DeepDive title="Two VAT models" icon="&#128200;" color={C.plum}>
            <p><strong style={{ color: C.cream }}>Model A — Standard VAT:</strong> 20% VAT on full charge. Reclaimable if VAT-registered.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.cream }}>Model B — VAT-Aligned Care Supply:</strong> No VAT on worker earnings. VAT only on platform fee. Saves ~£600K/yr for a 100-worker provider.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
