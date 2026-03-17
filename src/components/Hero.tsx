"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative px-[5vw] z-2">
      <h1 className="font-serif text-[clamp(4rem,12vw,12rem)] leading-[0.9] text-center">
        <span className="block overflow-hidden">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={lineVariants}
          >
            Websites That Turn
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={lineVariants}
          >
            <em className="italic gradient-text">Visitors Into Clients</em>
          </motion.span>
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 text-[clamp(1rem,2vw,1.3rem)] font-light tracking-[0.1em] uppercase shimmer"
      >
        Attract &middot; Engage &middot; Convert
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 flex gap-6 flex-wrap justify-center"
      >
        <MagneticButton href="#work">See Our Work</MagneticButton>
        <MagneticButton href="#contact">Get a Free Homepage Concept</MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-[0.7rem] tracking-[0.3em] uppercase text-text/30">
          Scroll
        </span>
        <div
          className="w-px h-[60px] bg-gradient-to-b from-accent to-transparent"
          style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
