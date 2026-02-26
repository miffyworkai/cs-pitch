import { useState } from "react";
import { motion } from "motion/react";
import { C } from "../theme";

// ─── RISK CARD ───
export default function RiskCard({ icon, risk, exposure, elimination }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: flipped
          ? `linear-gradient(135deg, ${C.sage}, #5A7E65)`
          : "rgba(255,255,255,0.05)",
        borderRadius: 14,
        padding: "18px 20px",
        cursor: "pointer",
        border: `1px solid ${flipped ? C.sage + "60" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.35s ease",
        minHeight: 140,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      {!flipped ? (
        <>
          <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.cream, marginBottom: 4 }}>{risk}</div>
          <div style={{ fontSize: 11, color: "rgba(255,248,240,0.55)", lineHeight: 1.5 }}>{exposure}</div>
          <div style={{ fontSize: 10, color: C.orchid, marginTop: 8, fontWeight: 500 }}>
            Click to see elimination →
          </div>
        </>
      ) : (
        <>
          <div style={{ fontSize: 18, marginBottom: 6 }}>&#10003;</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.white, marginBottom: 4 }}>
            Eliminated
          </div>
          <div style={{ fontSize: 12, color: "#E8F5EC", lineHeight: 1.55 }}>{elimination}</div>
        </>
      )}
    </motion.div>
  );
}
