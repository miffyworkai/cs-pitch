import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";
import { IconBrain, IconShieldCheck, IconInvoice, IconDevices, IconGear, IconCreditCard, IconChart } from "../components/Icons";

export default function SlideSolutionPlatform() {
  const features = [
    { icon: <IconBrain size={26} color={C.plum} />, title: "AI-Powered Matching", desc: "Ranked shortlists in seconds. Skills, qualifications, location, availability — all analysed." },
    { icon: <IconShieldCheck size={26} color={C.plum} />, title: "Compliance Engine", desc: "CEST per engagement. Six-dimension traffic-light scoring. Auto-route to PAYE." },
    { icon: <IconInvoice size={26} color={C.plum} />, title: "Transparent Billing", desc: "Worker rate, platform fee, and VAT shown separately. Two VAT models — you choose." },
    { icon: <IconDevices size={26} color={C.plum} />, title: "Four Portals", desc: "Worker app, recruiter portal, provider portal, admin console." },
  ];

  return (
    <Slide bg={C.cream} style={{ justifyContent: "flex-start" }}>
      <div style={{ maxWidth: 1040, padding: "48px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.sage, fontFamily: FONT_BODY }}>
              Our Platform
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.sage}25` }} />
          </div>
        </Stagger>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* LEFT — Solution */}
          <div>
            <Stagger delay={0.15}>
              <h2 style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: C.plum,
                margin: "0 0 16px",
                lineHeight: 1.1,
                fontFamily: FONT_DISPLAY,
                letterSpacing: "-0.02em",
              }}>
                <span style={{ color: C.orchid }}>Direct.</span>{" "}
                <span style={{ color: C.sage }}>Compliant.</span>{" "}
                <span style={{ color: C.magenta, fontStyle: "italic" }}>Intelligent.</span>
              </h2>
            </Stagger>

            <Stagger delay={0.35}>
              <p style={{
                fontSize: 15,
                color: `${C.dark}88`,
                lineHeight: 1.65,
                margin: "0 0 28px",
                fontFamily: FONT_BODY,
                fontWeight: 300,
              }}>
                A workforce platform purpose-built for the April 2026 transition — replacing the
                agency-umbrella model with direct, compliant engagements.
              </p>
            </Stagger>

            <Stagger delay={0.55}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "No Umbrella", color: C.sage },
                  { label: "No Agency Markup", color: C.orchid },
                  { label: "No JSL Exposure", color: C.magenta },
                  { label: "Full Audit Trail", color: C.plum },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                    style={{
                      padding: "8px 18px",
                      borderRadius: 10,
                      border: `1px solid ${t.color}40`,
                      color: t.color,
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: FONT_BODY,
                      background: `${t.color}08`,
                      display: "inline-block",
                      alignSelf: "flex-start",
                    }}
                  >
                    {t.label}
                  </motion.div>
                ))}
              </div>
            </Stagger>

            <Stagger delay={0.9}>
              <p style={{
                fontSize: 12,
                color: `${C.dark}55`,
                marginTop: 20,
                fontFamily: FONT_BODY,
                fontStyle: "italic",
              }}>
                Currently onboarding pilot clients ahead of the JSL deadline.
              </p>
            </Stagger>
          </div>

          {/* RIGHT — Platform Features */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    style={{
                      background: C.white,
                      borderRadius: 14,
                      padding: "20px 16px",
                      border: `1px solid ${C.blush}`,
                      height: "100%",
                      boxShadow: `0 1px 6px ${C.plum}06`,
                    }}
                  >
                    <div style={{ marginBottom: 10, lineHeight: 1 }}>{f.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: C.dark, marginBottom: 6, fontFamily: FONT_BODY }}>{f.title}</div>
                    <div style={{ fontSize: 11, color: `${C.dark}77`, lineHeight: 1.55, fontFamily: FONT_BODY }}>{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Deep dives — full width below */}
        <div style={{ marginTop: 20 }}>
          <DeepDive title="How the compliance engine works" icon={<IconGear size={18} color={C.plum} />} color={C.plum}>
            <p><strong style={{ color: C.dark }}>CEST Integration:</strong> Every engagement is assessed using HMRC's own Check Employment Status for Tax tool. Results stored permanently.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Six-Dimension Scoring:</strong> Client concentration, substitution evidence, financial risk, control levels, business entity status, and CEST determination — combined into Green/Amber/Red traffic lights.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Auto-Routing:</strong> SE → business account. Ltd → company. Employment → independent payroll bureau with full PAYE.</p>
          </DeepDive>
          <DeepDive title="Two VAT models" icon={<IconChart size={18} color={C.plum} />} color={C.plum}>
            <p><strong style={{ color: C.dark }}>Model A — Standard VAT:</strong> 20% VAT on full charge. Reclaimable if VAT-registered.</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>Model B — VAT-Aligned Care Supply:</strong> No VAT on worker earnings. VAT only on platform fee. Saves ~£460K/yr for a 100-worker provider. Applicable to providers under the Nursing Agencies VAT Concession and VAT-exempt care providers.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
