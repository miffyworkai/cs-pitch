import { useState, useEffect } from "react";

// ─── ANIMATED COUNTER ───
export default function AnimatedCounter({ value, prefix = "", suffix = "", duration = 1.8, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const numericVal = parseFloat(value.toString().replace(/[^0-9.]/g, ""));
  const isDecimal = value.toString().includes(".");

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const dur = duration * 1000;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / dur, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(eased * numericVal);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, numericVal, duration]);

  const formatted = isDecimal ? display.toFixed(1) : Math.round(display).toLocaleString();
  return <span>{prefix}{formatted}{suffix}</span>;
}
