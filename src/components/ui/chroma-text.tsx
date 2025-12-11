"use client";
import { motion } from "motion/react";
export const Chromatext = ({ word }: { word: string }) => {
  return (
    <motion.span
      initial={{
        backgroundPosition: "100% center",
      }}
      animate={{
        backgroundPosition: "0% center",
        opacity: 1,
      }}
      transition={{
        delay: 1,
        duration: 0.7,
        repeat: Infinity,
        repeatDelay: 3,
      }}
      style={{
        backgroundImage:
          "linear-gradient(90deg,#0000 33.33%,rgb(255 116 251) 40%,rgb(255 64 64) 45%,#ffb005 50%,#e1e1fe 55%,rgb(0 112 255) 60%,#0000 66.67%,#0000)",
        backgroundSize: "300% auto",
        height: "100px",
      }}
      className="bg-clip-text"
    >
      {word}
    </motion.span>
  );
};
