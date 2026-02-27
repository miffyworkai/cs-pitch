import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import Tooltip from "../components/Tooltip";
import { IconPeople, IconCurrency, IconClipboardCheck, IconRefresh } from "../components/Icons";

export default function SlideCrisis() {
  const crisisCards = [
    {
      icon: <IconPeople size={28} color={C.magenta} />,
      title: "Workforce Collapse",
      stat: "3\u00D7",
      desc: "more vacancies than other sectors. Home care vacancy rates exceed 10%. Visa route closed July 2025.",
      tip: "Adult social care has 111,000 vacant posts. The Health & Care Worker visa route was closed to new applicants in July 2025, collapsing international recruitment by 91%.",
    },
    {
      icon: <span style={{ fontSize: 28, fontWeight: 700, color: C.magenta }}>£</span>,
      title: "Funding Squeeze",
      stat: "Direct Link",
      desc: "CQC found lower per-hour funding leads to higher A&E admissions. Providers handing contracts back.",
      tip: "The CQC's 2024/25 State of Care report established a direct link between hourly pay rates in home care and emergency hospital admissions in those areas.",
    },
    {
      icon: <IconClipboardCheck size={28} color={C.magenta} />,
      title: "Compliance Overload",
      stat: "5 Frameworks",
      desc: "CQC, HMRC IR35, JSL, local authority, NHS contracts — overlapping audit requirements.",
      tip: "Providers must satisfy CQC Regulations 17-19, HMRC employment status rules, the new JSL provisions, local authority commissioning standards, and NHS contract monitoring — simultaneously.",
    },
    {
      icon: <IconRefresh size={28} color={C.magenta} />,
      title: "Care Continuity Crisis",
      stat: "Revolving Door",
      desc: "Constant staff churn undermines safety, trust and outcomes — especially for complex needs.",
      tip: "Low take-home pay (£14-16/hr after umbrella deductions from a £22-25/hr charge) drives high turnover. Service users see different carers constantly, eroding the continuity that CQC inspections measure.",
    },
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 70% 30%, ${C.magenta}06 0%, transparent 50%),
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
              The Problem
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.magenta}25` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 700,
              color: C.plum,
              margin: "0 0 12px",
              lineHeight: 1.1,
              fontFamily: FONT_DISPLAY,
              letterSpacing: "-0.02em",
            }}
          >
            A Sector in <span style={{ color: C.magenta, fontStyle: "italic" }}>Crisis</span>
          </h2>
        </Stagger>

        <Stagger delay={0.3}>
          <p
            style={{
              fontSize: 17,
              color: `${C.dark}88`,
              margin: "0 0 40px",
              lineHeight: 1.6,
              maxWidth: 600,
              fontFamily: FONT_BODY,
            }}
          >
            UK care providers face compounding pressures that the current staffing model cannot solve.
            These aren't future risks — they're happening now.
          </p>
        </Stagger>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {crisisCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "24px 22px",
                  border: `1px solid ${C.blush}`,
                  height: "100%",
                  boxShadow: `0 1px 6px ${C.plum}06`,
                }}
              >
                <div style={{ marginBottom: 12, lineHeight: 1 }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.dark, marginBottom: 6, fontFamily: FONT_BODY }}>
                  {c.title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 700,
                    color: C.magenta,
                    marginBottom: 10,
                    fontFamily: FONT_BODY,
                  }}
                >
                  {c.stat}
                </div>
                <div style={{ fontSize: 13, color: `${C.dark}77`, lineHeight: 1.55, fontFamily: FONT_BODY }}>
                  <Tooltip content={c.tip}>{c.desc}</Tooltip>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
