import { motion } from "motion/react";
import { C, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

export default function SlideSupplyChain() {
  const chainOld = ["Care Provider", "Agency", "Umbrella Co.", "Worker"];
  const chainNew = ["Care Provider", "CareSyndicate", "Worker"];

  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 50% 40%, ${C.orchid}08 0%, transparent 50%),
        ${C.cream}
      `}
    >
      <div style={{ maxWidth: 920, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.magenta, fontFamily: FONT_BODY }}>
              Before & After
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.magenta}25` }} />
          </div>
        </Stagger>

        {/* OLD chain */}
        <Stagger delay={0.2}>
          <div style={{
            background: `${C.red}06`,
            borderRadius: 18,
            padding: "28px 32px",
            marginBottom: 24,
            border: `1px solid ${C.red}18`,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.red, marginBottom: 20, fontFamily: FONT_BODY }}>
              Current Supply Chain
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              {chainOld.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span
                    style={{
                      background: s === "Umbrella Co." ? `${C.magenta}15` : C.white,
                      padding: "10px 20px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 600,
                      color: C.dark,
                      border: s === "Umbrella Co." ? `2px solid ${C.magenta}` : `1px solid ${C.blush}`,
                      fontFamily: FONT_BODY,
                    }}
                  >
                    {s}
                  </span>
                  {i < chainOld.length - 1 && (
                    <span style={{ color: `${C.dark}33`, fontSize: 22 }}>&#8594;</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: 12, color: `${C.dark}55`, marginTop: 16, fontFamily: FONT_BODY }}>
              Opaque &middot; Multi-layered &middot; Hard to audit &middot; JSL exposure from April 2026
            </div>
          </div>
        </Stagger>

        {/* NEW chain */}
        <Stagger delay={0.8}>
          <div style={{
            background: `${C.sage}08`,
            borderRadius: 18,
            padding: "28px 32px",
            border: `1px solid ${C.sage}25`,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.sage, marginBottom: 20, fontFamily: FONT_BODY }}>
              The CareSyndicate Supply Chain
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              {chainNew.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.2, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span
                    style={{
                      background: s === "CareSyndicate" ? `${C.sage}15` : C.white,
                      padding: "10px 20px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 600,
                      color: C.dark,
                      border: s === "CareSyndicate" ? `2px solid ${C.sage}` : `1px solid ${C.blush}`,
                      fontFamily: FONT_BODY,
                    }}
                  >
                    {s === "CareSyndicate" ? "CareSyndicate (Introducer)" : s}
                  </span>
                  {i < chainNew.length - 1 && (
                    <span style={{ color: `${C.dark}33`, fontSize: 22 }}>&#8594;</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: 12, color: `${C.dark}55`, marginTop: 16, fontFamily: FONT_BODY }}>
              Direct &middot; Transparent &middot; Fully auditable &middot; No umbrella &middot; No JSL exposure
            </div>
          </div>
        </Stagger>
      </div>
    </Slide>
  );
}
