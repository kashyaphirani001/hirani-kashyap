import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades + slides its children in when they enter the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)", ...offsets[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
