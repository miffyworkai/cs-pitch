import { useState } from "react";
import { motion } from "motion/react";
import { C } from "../theme";

// ─── RISK CARD ───
export default function RiskCard({ icon, risk, exposure, elimination }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.button
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      aria-pressed={flipped}
      aria-label={`${risk}: ${flipped ? "Eliminated — " + elimination : exposure}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: flipped
          ? `linear-gradient(135deg, ${C.sage}, #5A7E65)`
          : C.white,
        borderRadius: 12,
        padding: "14px 16px",
        cursor: "pointer",
        border: `1px solid ${flipped ? C.sage + "60" : C.blush}`,
        transition: "all 0.35s ease",
        minHeight: 110,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: flipped ? "none" : `0 1px 6px ${C.plum}08`,
        width: "100%",
        textAlign: "left",
        fontFamily: "inherit",
      }}
    >
      {!flipped ? (
        <>
          <div style={{ fontSize: 22, marginBottom: 8, lineHeight: 1 }}>{icon}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.dark, marginBottom: 4 }}>{risk}</div>
          <div style={{ fontSize: 11, color: `${C.dark}77`, lineHeight: 1.5 }}>{exposure}</div>
          <div style={{ fontSize: 10, color: C.magenta, marginTop: 8, fontWeight: 500 }}>
            Click to see elimination →
          </div>
        </>
      ) : (
        <>
          <div style={{ fontSize: 18, marginBottom: 6, color: C.white }}>&#10003;</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.white, marginBottom: 4 }}>
            Eliminated
          </div>
          <div style={{ fontSize: 12, color: "#E8F5EC", lineHeight: 1.55 }}>{elimination}</div>
        </>
      )}
    </motion.button>
  );
}
