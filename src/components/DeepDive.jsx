import { useState } from "react";
import { C, FONT_BODY } from "../theme";

// ─── EXPANDABLE CARD ───
export default function DeepDive({ title, icon, children, color = C.plum }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: open ? C.white : `${C.plum}04`,
        borderRadius: 14,
        border: `1px solid ${open ? color + "40" : C.blush}`,
        marginBottom: 10,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: open ? `0 4px 20px ${color}12` : "none",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 18px",
          fontSize: 14,
          fontWeight: 600,
          color: C.dark,
          textAlign: "left",
          fontFamily: FONT_BODY,
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span>
        <span style={{ flex: 1 }}>{title}</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: open ? color : `${C.plum}12`,
            color: open ? C.white : C.plum,
            fontSize: 15,
            fontWeight: 700,
            transition: "all 0.3s ease",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 1200 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            padding: "0 18px 18px",
            fontSize: 13,
            lineHeight: 1.7,
            color: `${C.dark}BB`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
