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
        radial-gradient(ellipse at 50% 40%, ${C.deepPlum}60 0%, transparent 50%),
        ${C.dark}
      `}
    >
      <div style={{ maxWidth: 920, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.magenta, fontFamily: FONT_BODY }}>
              Before & After
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.magenta}30` }} />
          </div>
        </Stagger>

        {/* OLD chain */}
        <Stagger delay={0.2}>
          <div style={{
            background: `linear-gradient(135deg, rgba(107,32,64,0.3), rgba(45,31,61,0.5))`,
            borderRadius: 18,
            padding: "28px 32px",
            marginBottom: 24,
            border: `1px solid ${C.red}25`,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#F9A8A8", marginBottom: 20, fontFamily: FONT_BODY }}>
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
                      background: s === "Umbrella Co." ? `${C.magenta}40` : "rgba(255,255,255,0.08)",
                      padding: "10px 20px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 600,
                      color: C.cream,
                      border: s === "Umbrella Co." ? `2px solid ${C.magenta}` : "1px solid rgba(255,255,255,0.1)",
                      fontFamily: FONT_BODY,
                    }}
                  >
                    {s}
                  </span>
                  {i < chainOld.length - 1 && (
                    <span style={{ color: `${C.cream}44`, fontSize: 22 }}>&#8594;</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: 12, color: `${C.cream}55`, marginTop: 16, fontFamily: FONT_BODY }}>
              Opaque &middot; Multi-layered &middot; Hard to audit &middot; JSL exposure from April 2026
            </div>
          </div>
        </Stagger>

        {/* NEW chain */}
        <Stagger delay={0.8}>
          <div style={{
            background: `linear-gradient(135deg, ${C.sage}25, rgba(90,126,101,0.15))`,
            borderRadius: 18,
            padding: "28px 32px",
            border: `1px solid ${C.sage}35`,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#A8D8B0", marginBottom: 20, fontFamily: FONT_BODY }}>
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
                      background: s === "CareSyndicate" ? `${C.sage}40` : "rgba(255,255,255,0.08)",
                      padding: "10px 20px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 600,
                      color: C.cream,
                      border: s === "CareSyndicate" ? `2px solid ${C.sage}` : "1px solid rgba(255,255,255,0.1)",
                      fontFamily: FONT_BODY,
                    }}
                  >
                    {s === "CareSyndicate" ? "CareSyndicate (Introducer)" : s}
                  </span>
                  {i < chainNew.length - 1 && (
                    <span style={{ color: `${C.cream}44`, fontSize: 22 }}>&#8594;</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: 12, color: `${C.cream}55`, marginTop: 16, fontFamily: FONT_BODY }}>
              Direct &middot; Transparent &middot; Fully auditable &middot; No umbrella &middot; No JSL exposure
            </div>
          </div>
        </Stagger>
      </div>
    </Slide>
  );
}
