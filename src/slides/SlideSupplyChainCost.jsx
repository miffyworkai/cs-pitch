import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

export default function SlideSupplyChainCost() {
  const chainOld = ["Care Provider", "Agency", "Umbrella Co.", "Worker"];
  const chainNew = ["Care Provider", "Agency", "CareSyndicate", "Worker"];

  const stats = [
    { val: "£22–25/hr", label: "Blended rate charged", sub: "No cost breakdown provided" },
    { val: "£14–16/hr", label: "Worker take-home", sub: "After umbrella deductions" },
    { val: "15–30%", label: "Agency margin", sub: "Draining care budgets" },
    { val: "Zero", label: "Audit trail you control", sub: "Evidence held by agency" },
  ];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 50% 40%, ${C.orchid}08 0%, transparent 50%),
        ${C.cream}
      `}
      style={{ justifyContent: "flex-start" }}
    >
      <div style={{ maxWidth: 960, padding: "48px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.magenta, fontFamily: FONT_BODY }}>
              Before & After
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.magenta}25` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, color: C.plum, margin: "0 0 24px", lineHeight: 1.1, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em" }}>
            The Supply Chain &mdash; and Where the Money{" "}
            <span style={{ color: C.magenta, fontStyle: "italic" }}>Goes</span>
          </h2>
        </Stagger>

        {/* Supply chain comparison — side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
          {/* OLD chain */}
          <Stagger delay={0.3}>
            <div style={{
              background: `${C.red}06`,
              borderRadius: 14,
              padding: "20px 22px",
              border: `1px solid ${C.red}18`,
              height: "100%",
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.red, marginBottom: 14, fontFamily: FONT_BODY }}>
                Current Supply Chain
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
                {chainOld.map((s, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span
                      style={{
                        background: s === "Umbrella Co." ? `${C.magenta}15` : C.white,
                        padding: "7px 16px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        color: C.dark,
                        border: s === "Umbrella Co." ? `2px solid ${C.magenta}` : `1px solid ${C.blush}`,
                        fontFamily: FONT_BODY,
                        textAlign: "center",
                      }}
                    >
                      {s}
                    </span>
                    {i < chainOld.length - 1 && (
                      <span style={{ color: `${C.dark}33`, fontSize: 16 }}>&#8595;</span>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", fontSize: 11, color: `${C.dark}55`, marginTop: 12, fontFamily: FONT_BODY, lineHeight: 1.5 }}>
                Opaque &middot; Multi-layered &middot; JSL exposure
              </div>
            </div>
          </Stagger>

          {/* NEW chain */}
          <Stagger delay={0.6}>
            <div style={{
              background: `${C.sage}18`,
              borderRadius: 14,
              padding: "20px 22px",
              border: `1px solid ${C.sage}40`,
              height: "100%",
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.sage, marginBottom: 14, fontFamily: FONT_BODY }}>
                CareSyndicate Supply Chain
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
                {chainNew.map((s, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span
                      style={{
                        background: s === "CareSyndicate" ? `${C.sage}15` : C.white,
                        padding: "7px 16px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        color: C.dark,
                        border: s === "CareSyndicate" ? `2px solid ${C.sage}` : `1px solid ${C.blush}`,
                        fontFamily: FONT_BODY,
                        textAlign: "center",
                      }}
                    >
                      {s}
                    </span>
                    {i < chainNew.length - 1 && (
                      <span style={{ color: `${C.dark}33`, fontSize: 16 }}>&#8595;</span>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", fontSize: 11, color: `${C.dark}55`, marginTop: 12, fontFamily: FONT_BODY, lineHeight: 1.5 }}>
                Direct &middot; Transparent &middot; No JSL exposure
              </div>
            </div>
          </Stagger>
        </div>

        {/* Cost stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 16 }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "18px 14px",
                  background: C.white,
                  borderRadius: 12,
                  border: `1px solid ${C.blush}`,
                  boxShadow: `0 1px 6px ${C.plum}06`,
                }}
              >
                <div style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, color: C.plum, fontFamily: FONT_BODY }}>{s.val}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: C.dark, marginTop: 6, fontFamily: FONT_BODY }}>{s.label}</div>
                <div style={{ fontSize: 10, color: `${C.dark}55`, marginTop: 3, fontFamily: FONT_BODY }}>{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VAT callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            background: `linear-gradient(135deg, ${C.plum}, ${C.magenta})`,
            borderRadius: 14,
            padding: "18px 28px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: C.white, fontFamily: FONT_BODY }}>
            £229,000/year
          </div>
          <div style={{ fontSize: 13, fontWeight: 500, color: `${C.white}CC`, marginTop: 4, lineHeight: 1.6, fontFamily: FONT_BODY }}>
            Irrecoverable VAT for 50 agency workers at 20 hrs/week (at £22/hr blended rate).
          </div>
          <div style={{ fontSize: 11, fontStyle: "italic", color: `${C.white}88`, marginTop: 4, fontFamily: FONT_BODY }}>
            Applicable to providers under the Nursing Agencies VAT Concession and VAT-exempt care providers.
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
