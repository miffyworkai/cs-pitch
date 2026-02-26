import { motion } from "motion/react";

// ─── STAGGER CHILDREN ───
export default function Stagger({ children, delay = 0 }) {
  return (
    <>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {child}
            </motion.div>
          ))
        : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.div>
          )}
    </>
  );
}
