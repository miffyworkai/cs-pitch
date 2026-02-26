import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

export default function SlideDeadline() {
  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 50% 50%, ${C.redDark}60 0%, transparent 60%),
        ${C.dark}
      `}
    >
      <div style={{ maxWidth: 800, padding: "0 40px", width: "100%", textAlign: "center" }}>
        <Stagger delay={0.1}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#F9A8A8",
            marginBottom: 28,
            border: `1px solid ${C.red}40`,
            padding: "8px 22px",
            borderRadius: 24,
            fontFamily: FONT_BODY,
          }}>
            <span style={{ fontSize: 14 }}>&#9888;</span>
            Urgent: 6 April 2026
          </div>
        </Stagger>

        <Stagger delay={0.3}>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 400,
            color: C.white,
            margin: "0 0 20px",
            lineHeight: 1.1,
            fontFamily: FONT_DISPLAY,
          }}>
            Joint & Several Liability
            <br />
            Is <span style={{ color: "#F9A8A8", fontStyle: "italic" }}>Weeks Away</span>
          </h2>
        </Stagger>

        <Stagger delay={0.55}>
          <p style={{
            fontSize: 18,
            color: `${C.cream}99`,
            lineHeight: 1.65,
            maxWidth: 580,
            margin: "0 auto",
            fontFamily: FONT_BODY,
            fontWeight: 300,
          }}>
            The Finance Act 2025 introduces strict, no-defence liability for care providers
            with umbrella companies in their supply chain.
          </p>
        </Stagger>
      </div>
    </Slide>
  );
}
