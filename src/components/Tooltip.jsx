import { useState } from "react";
import { C, FONT_BODY } from "../theme";

// ─── TOOLTIP ───
export default function Tooltip({ children, content }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: rect.left + rect.width / 2, y: rect.top });
    setShow(true);
  };

  return (
    <span
      onMouseEnter={handleEnter}
      onMouseLeave={() => setShow(false)}
      style={{
        borderBottom: `1.5px dashed ${C.magenta}`,
        cursor: "help",
        color: C.magenta,
        fontWeight: 500,
        position: "relative",
      }}
    >
      {children}
      {show && (
        <span
          style={{
            position: "fixed",
            left: Math.min(pos.x, window.innerWidth - 360),
            top: pos.y - 12,
            transform: "translateX(-50%) translateY(-100%)",
            background: C.dark,
            color: C.cream,
            padding: "14px 18px",
            borderRadius: 12,
            fontSize: 13,
            lineHeight: 1.6,
            maxWidth: 340,
            zIndex: 9999,
            boxShadow: "0 12px 40px rgba(26,15,43,0.25)",
            fontWeight: 400,
            fontFamily: FONT_BODY,
            pointerEvents: "none",
            border: `1px solid ${C.deepPlum}`,
          }}
        >
          {content}
          <span
            style={{
              position: "absolute",
              bottom: -6,
              left: "50%",
              transform: "translateX(-50%) rotate(45deg)",
              width: 12,
              height: 12,
              background: C.dark,
              borderRight: `1px solid ${C.deepPlum}`,
              borderBottom: `1px solid ${C.deepPlum}`,
            }}
          />
        </span>
      )}
    </span>
  );
}
