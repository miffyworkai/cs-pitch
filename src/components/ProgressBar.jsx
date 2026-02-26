import { motion } from "motion/react";
import { C } from "../theme";

// ─── PROGRESS BAR ───
export default function ProgressBar({ current, total }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "rgba(255,255,255,0.06)",
        zIndex: 1000,
      }}
    >
      <motion.div
        animate={{ width: `${((current + 1) / total) * 100}%` }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          height: "100%",
          background: `linear-gradient(90deg, ${C.magenta}, ${C.orchid})`,
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}
