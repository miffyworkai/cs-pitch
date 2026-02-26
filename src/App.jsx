import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { C, FONT_BODY } from "./theme";
import ProgressBar from "./components/ProgressBar";
import { SLIDES, SLIDE_LABELS } from "./slides";

export default function App() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalSlides = SLIDES.length;
  const transitioning = useRef(false);

  const goTo = useCallback(
    (n) => {
      if (transitioning.current) return;
      if (n < 0 || n >= totalSlides) return;
      transitioning.current = true;
      setDirection(n > slide ? 1 : -1);
      setSlide(n);
      setTimeout(() => {
        transitioning.current = false;
      }, 600);
    },
    [slide, totalSlides]
  );

  const next = useCallback(() => goTo(slide + 1), [goTo, slide]);
  const prev = useCallback(() => goTo(slide - 1), [goTo, slide]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(totalSlides - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, goTo, totalSlides]);

  // Touch navigation
  const touchStart = useRef(null);
  useEffect(() => {
    const onTouchStart = (e) => {
      touchStart.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) {
        diff > 0 ? next() : prev();
      }
      touchStart.current = null;
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-40%" : "40%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const CurrentSlide = SLIDES[slide].component;

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", background: C.dark }}>
      <ProgressBar current={slide} total={totalSlides} />

      {/* Slide number */}
      <div
        style={{
          position: "fixed",
          bottom: 28,
          right: 32,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontFamily: FONT_BODY,
        }}
      >
        <span style={{ fontSize: 12, color: "rgba(255,248,240,0.35)", fontWeight: 500 }}>
          {String(slide + 1).padStart(2, "0")} / {totalSlides}
        </span>
      </div>

      {/* Nav dots */}
      <div
        style={{
          position: "fixed",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {SLIDE_LABELS.map((label, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={label}
            style={{
              width: i === slide ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: i === slide
                ? C.magenta
                : i < slide
                ? C.orchid + "60"
                : "rgba(255,255,255,0.12)",
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <div
        style={{
          position: "fixed",
          bottom: 28,
          left: 32,
          zIndex: 1000,
          display: "flex",
          gap: 8,
        }}
      >
        <button
          onClick={prev}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: slide === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
            color: slide === 0 ? "rgba(255,255,255,0.15)" : C.cream,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontFamily: FONT_BODY,
            transition: "all 0.2s",
            pointerEvents: slide === 0 ? "none" : "auto",
          }}
        >
          &#8592;
        </button>
        <button
          onClick={next}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: slide === totalSlides - 1 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
            color: slide === totalSlides - 1 ? "rgba(255,255,255,0.15)" : C.cream,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontFamily: FONT_BODY,
            transition: "all 0.2s",
            pointerEvents: slide === totalSlides - 1 ? "none" : "auto",
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Keyboard hint */}
      {slide === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          style={{
            position: "fixed",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            color: "rgba(255,248,240,0.3)",
            fontFamily: FONT_BODY,
          }}
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 24,
            height: 22,
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.15)",
            fontSize: 10,
          }}>&#8592;</span>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 24,
            height: 22,
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.15)",
            fontSize: 10,
          }}>&#8594;</span>
          <span>to navigate</span>
        </motion.div>
      )}
    </div>
  );
}
