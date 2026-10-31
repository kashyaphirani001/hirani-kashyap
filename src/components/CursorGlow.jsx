import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft violet glow + a small dot that smoothly follow the cursor.
 * Hidden on touch devices.
 */
export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const glowX = useSpring(x, { stiffness: 80, damping: 18 });
  const glowY = useSpring(y, { stiffness: 80, damping: 18 });
  const dotX = useSpring(x, { stiffness: 500, damping: 30 });
  const dotY = useSpring(y, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[420px] w-[420px] rounded-full bg-brand-500/15 blur-[90px]" />
      </motion.div>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-2 w-2 rounded-full bg-brand-300 shadow-[0_0_12px_3px_rgba(167,139,250,0.8)]" />
      </motion.div>
    </div>
  );
}
