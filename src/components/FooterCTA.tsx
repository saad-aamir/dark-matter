"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function FooterCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-[15vh] px-[5vw] text-center relative z-2" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-[0.75rem] tracking-[0.3em] uppercase text-accent mb-4"
      >
        Ready to Launch?
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="font-serif text-[clamp(3rem,10vw,10rem)] leading-none mb-8 inline-block"
      >
        <span className="stroke-text">Let&rsquo;s Build</span>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <MagneticButton href="mailto:saad@darkmatterstudio.org">
          saad@darkmatterstudio.org
        </MagneticButton>
      </motion.div>
    </section>
  );
}
