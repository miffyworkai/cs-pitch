import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import { IconShieldCheck, IconPeople, IconScales, IconFileText, IconClipboardCheck } from "../components/Icons";

export default function SlideComplianceBurden() {
  const frameworks = [
    {
      icon: <IconShieldCheck size={26} color={C.magenta} />,
      title: "CQC Regulation 17",
      subtitle: "Good Governance",
      demands: "Effective internal audit covering workforce. Records for every person delivering care — including self-employed workers.",
    },
    {
      icon: <IconPeople size={26} color={C.magenta} />,
      title: "CQC Regulations 18 & 19",
      subtitle: "Staffing & Fit Persons",
      demands: "Every worker verified as fit and proper. CQC defines \"employed\" broadly — all workers fall in scope, regardless of tax status.",
    },
    {
      icon: <IconScales size={26} color={C.magenta} />,
      title: "HMRC Reasonable Care",
      subtitle: "IR35 / Off-Payroll Rules",
      demands: "Per-engagement status assessment. If you get it wrong, the tax liability shifts to you. No blanket classifications accepted.",
    },
    {
      icon: <IconFileText size={26} color={C.magenta} />,
      title: "LA & NHS Commissioning",
      subtitle: "Contract Monitoring",
      demands: "Commissioners require evidence of compliant workforce arrangements, appropriate remuneration, and safe recruitment.",
    },
    {
      icon: <IconClipboardCheck size={26} color={C.magenta} />,
      title: "NHS Heritage Standards",
      subtitle: "Framework-Level Audit",
      demands: "Providers with NHS backgrounds carry framework-level audit rigour into social care — transparent rates, documented classifications.",
    },
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 60% 25%, ${C.magenta}08 0%, transparent 55%),
        ${C.cream}
      `}
    >
      <div style={{ maxWidth: 920, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: C.magenta,
                fontFamily: FONT_BODY,
              }}
            >
              Compliance Burden
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.magenta}25` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: C.plum,
              margin: "0 0 8px",
              lineHeight: 1.1,
              fontFamily: FONT_DISPLAY,
              letterSpacing: "-0.02em",
            }}
          >
            Five Frameworks. <span style={{ color: C.magenta, fontStyle: "italic" }}>Zero Margin for Error.</span>
          </h2>
        </Stagger>

        <Stagger delay={0.3}>
          <p
            style={{
              fontSize: 15,
              color: `${C.dark}88`,
              margin: "0 0 28px",
              lineHeight: 1.6,
              maxWidth: 640,
              fontFamily: FONT_BODY,
            }}
          >
            No single regulation demands everything — but five overlapping frameworks create a cumulative governance expectation
            that most providers cannot satisfy with their current agency model.
          </p>
        </Stagger>

        {/* Top row: 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 14 }}>
          {frameworks.slice(0, 3).map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  background: C.white,
                  borderRadius: 14,
                  padding: "20px 18px",
                  border: `1px solid ${C.blush}`,
                  height: "100%",
                  boxShadow: `0 1px 6px ${C.plum}06`,
                }}
              >
                <div style={{ marginBottom: 10, lineHeight: 1 }}>{f.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 2, fontFamily: FONT_BODY }}>{f.title}</div>
                <div style={{ fontSize: 11, fontWeight: 500, color: C.magenta, marginBottom: 8, fontFamily: FONT_BODY }}>{f.subtitle}</div>
                <div style={{ fontSize: 12, color: `${C.dark}77`, lineHeight: 1.55, fontFamily: FONT_BODY }}>{f.demands}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 2 cards, centred */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, maxWidth: 614, margin: "0 auto" }}>
          {frameworks.slice(3).map((f, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  background: C.white,
                  borderRadius: 14,
                  padding: "20px 18px",
                  border: `1px solid ${C.blush}`,
                  height: "100%",
                  boxShadow: `0 1px 6px ${C.plum}06`,
                }}
              >
                <div style={{ marginBottom: 10, lineHeight: 1 }}>{f.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 2, fontFamily: FONT_BODY }}>{f.title}</div>
                <div style={{ fontSize: 11, fontWeight: 500, color: C.magenta, marginBottom: 8, fontFamily: FONT_BODY }}>{f.subtitle}</div>
                <div style={{ fontSize: 12, color: `${C.dark}77`, lineHeight: 1.55, fontFamily: FONT_BODY }}>{f.demands}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{
            marginTop: 20,
            background: `${C.magenta}08`,
            border: `1.5px solid ${C.magenta}25`,
            borderRadius: 12,
            padding: "14px 24px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: C.magenta, fontFamily: FONT_BODY }}>
            With an agency-umbrella model, providers carry the burden but have no visibility.
          </span>
          <span style={{ fontSize: 12, color: `${C.dark}66`, marginLeft: 10, fontFamily: FONT_BODY }}>
            Evidence is scattered, audits are manual, and liability is yours.
          </span>
        </motion.div>
      </div>
    </Slide>
  );
}
