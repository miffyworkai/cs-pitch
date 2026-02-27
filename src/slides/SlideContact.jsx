import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";

export default function SlideContact() {
  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 30% 40%, ${C.orchid}10 0%, transparent 60%),
        radial-gradient(ellipse at 70% 70%, ${C.magenta}08 0%, transparent 40%),
        ${C.cream}
      `}
    >
      {/* Subtle grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div style={{ position: "relative", textAlign: "center", maxWidth: 700, padding: "0 40px" }}>
        <Stagger delay={0.2}>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            color: C.plum,
            margin: "0 0 16px",
            lineHeight: 1.05,
            fontFamily: FONT_DISPLAY,
            letterSpacing: "-0.02em",
          }}>
            CareSyndicate
          </h2>
        </Stagger>

        <Stagger delay={0.4}>
          <p style={{
            fontSize: 20,
            color: `${C.dark}77`,
            margin: "0 0 48px",
            fontWeight: 300,
            fontFamily: FONT_BODY,
            letterSpacing: 2,
          }}>
            Direct. Compliant. Intelligent.
          </p>
        </Stagger>

        <Stagger delay={0.7}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${C.magenta}, ${C.plum})`,
              color: C.white,
              padding: "16px 44px",
              borderRadius: 14,
              fontSize: 17,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT_BODY,
              boxShadow: `0 8px 32px ${C.magenta}25`,
            }}
          >
            hello@syndicate.care
          </motion.div>
        </Stagger>

        <Stagger delay={1.0}>
          <div style={{
            marginTop: 48,
            fontSize: 12,
            color: `${C.dark}33`,
            fontFamily: FONT_BODY,
          }}>
            &copy; 2026 Care Syndicate Ltd. All rights reserved.
          </div>
        </Stagger>
      </div>
    </Slide>
  );
}
