"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";
import CountUp from "./CountUp";

export default function WaveSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let waveTime = 0;
    let waveMouseX = 0.5;
    let waveMouseY = 0.5;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      waveMouseX = (e.clientX - rect.left) / rect.width;
      waveMouseY = (e.clientY - rect.top) / rect.height;
    };
    section.addEventListener("mousemove", onMouseMove);

    let raf: number;
    const waves = [
      { amplitude: 40, frequency: 0.008, speed: 1.0, color: "rgba(196, 161, 255, 0.04)", yOffset: 0.5 },
      { amplitude: 30, frequency: 0.012, speed: 1.3, color: "rgba(255, 107, 157, 0.03)", yOffset: 0.55 },
      { amplitude: 50, frequency: 0.006, speed: 0.7, color: "rgba(78, 205, 196, 0.03)", yOffset: 0.45 },
      { amplitude: 25, frequency: 0.015, speed: 1.6, color: "rgba(196, 161, 255, 0.02)", yOffset: 0.6 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waveTime += 0.008;

      for (const wave of waves) {
        ctx.beginPath();
        const mouseInfluence = (waveMouseX - 0.5) * 30;
        const mouseAmplitude = wave.amplitude + (waveMouseY - 0.5) * 20;

        for (let x = 0; x <= canvas.width; x++) {
          const y =
            canvas.height * wave.yOffset +
            Math.sin(x * wave.frequency + waveTime * wave.speed) * mouseAmplitude +
            Math.sin(x * wave.frequency * 0.5 + waveTime * wave.speed * 0.7) * (mouseAmplitude * 0.5) +
            mouseInfluence;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const stats = [
    { target: 20, label: "Websites Launched", suffix: "+" },
    { target: 15, label: "Happy Clients", suffix: "+" },
    { target: 100, label: "Client Retention", suffix: "%" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-[15vh] px-[5vw] min-h-screen flex flex-col justify-center items-center text-center relative z-2"
      id="about"
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-1" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-[0.75rem] tracking-[0.3em] uppercase text-accent mb-4"
      >
        Why Dark Matter
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-6 max-w-[700px]"
      >
        We don&rsquo;t just build websites. We build <em className="italic gradient-text">growth engines.</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-[500px] font-light leading-[1.8] text-text/50 mb-12"
      >
        We&rsquo;re a team of designers and developers obsessed with performance,
        aesthetics, and results. Your website is your hardest-working employee &mdash;
        we make sure it earns its keep.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <MagneticButton href="#contact">Get a Free Quote</MagneticButton>
      </motion.div>

      <div className="flex gap-20 justify-center flex-wrap mt-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * (i + 1), duration: 0.8 }}
            className="text-center"
          >
            <CountUp target={stat.target} suffix={stat.suffix} />
            <div className="text-[0.8rem] tracking-[0.2em] uppercase text-text/40 mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
