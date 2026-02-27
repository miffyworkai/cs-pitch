import { C } from "../theme";

// ─── SLIDE WRAPPER ───
export default function Slide({ children, bg, style: extraStyle = {} }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "auto",
        background: bg || C.cream,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        ...extraStyle,
      }}
      className="hide-scrollbar"
    >
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      {children}
    </div>
  );
}
