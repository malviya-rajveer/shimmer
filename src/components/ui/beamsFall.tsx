"use client";
import { motion } from "motion/react";

const beamsFall = [
  {
    translateX: 0,
    delay: 0,
  },
  {
    translateX: 5,
    delay: 0.5,
  },
  {
    translateX: 10,
    delay: 2.3,
  },
  {
    translateX: 15,
    delay: 0.6,
  },
  {
    translateX: 20,
    delay: 0.8,
  },
  {
    translateX: 30,
    delay: 0,
  },
  {
    translateX: 40,
    delay: 0.3,
  },
  {
    translateX: 37,
    delay: 0.5,
  },
  {
    translateX: 0,
    delay: 1,
  },
  {
    translateX: 5,
    delay: 2,
  },
  {
    translateX: 10,
    delay: 1.5,
  },
  {
    translateX: 15,
    delay: 1,
  },
  {
    translateX: 20,
    delay: 2.4,
  },
  {
    translateX: 30,
    delay: 3,
  },
  {
    translateX: 40,
    delay: 2.6,
  },
  {
    translateX: 37,
    delay: 0.7,
  },
];
export const BeamsFall = () => {
  return (
    <div>
      {beamsFall.map((beams, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{
              translateY: -30,
              translateX: beams.translateX,
              opacity: 0,
            }}
            animate={{
              translateY: 510,
              opacity: [0, 1, 1, 1, 1, 1, 1, 0.5, 0.7, 0],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              delay: beams.delay,
              repeat: Infinity,
              repeatDelay: 0.4,
            }}
            className="xl-above:hidden break-1440:block absolute -left-11 h-10 w-[1.5px] rounded-full bg-linear-to-b from-transparent via-neutral-100 to-white 2xl:block"
          ></motion.div>
        );
      })}
    </div>
  );
};
