"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    icon: "\u25C7",
    title: "Custom Web Design",
    desc: "No templates, no shortcuts. Every site we build is designed from scratch to reflect your brand, engage your audience, and outshine your competition.",
    span: "col-span-12 md:col-span-7 row-span-2",
    hasBlob: true,
  },
  {
    icon: "\u25CA",
    title: "Web Development",
    desc: "Lightning-fast, responsive, and built with modern frameworks. From Next.js to headless CMS — we pick the right stack for your goals.",
    span: "col-span-12 md:col-span-5",
  },
  {
    icon: "\u25CB",
    title: "Personal Portfolios",
    desc: "Stand out from the crowd. We design stunning portfolio sites that showcase your work, tell your story, and land you opportunities.",
    span: "col-span-12 md:col-span-5",
  },
  {
    icon: "\u25B3",
    title: "SEO & Performance",
    desc: "Built to rank. Optimized to load fast.",
    span: "col-span-12 md:col-span-4",
  },
  {
    icon: "\u25A1",
    title: "UI/UX Design",
    desc: "Intuitive interfaces your users will love.",
    span: "col-span-12 md:col-span-4",
  },
  {
    icon: "\u2726",
    title: "Ongoing Support",
    desc: "We don\u2019t disappear after launch day.",
    span: "col-span-12 md:col-span-4",
  },
];

function TiltCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-5px)`;
    el.style.setProperty(
      "--mouse-x",
      ((e.clientX - rect.left) / rect.width) * 100 + "%"
    );
    el.style.setProperty(
      "--mouse-y",
      ((e.clientY - rect.top) / rect.height) * 100 + "%"
    );
  };

  const onMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1000px) rotateY(0) rotateX(0) translateY(0)";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: delay * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`bento-card rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-lg p-10 relative overflow-hidden transition-[border-color] duration-500 ease-out hover:border-accent/20 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(196,161,255,0.06),transparent_60%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-[10vh] px-[5vw] min-h-screen z-2 relative" id="services">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-[0.75rem] tracking-[0.3em] uppercase text-accent mb-4"
      >
        Our Services
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-16 max-w-[800px]"
      >
        Everything you need to{" "}
        <em className="font-serif italic text-accent">dominate</em> online.
      </motion.h2>

      <div className="grid grid-cols-12 auto-rows-[minmax(200px,auto)] gap-6">
        {cards.map((card, i) => (
          <TiltCard key={card.title} className={card.span} delay={i}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 flex items-center justify-center mb-6 text-xl">
              {card.icon}
            </div>
            <h3 className="font-serif text-3xl mb-3">{card.title}</h3>
            <p className="font-light text-[0.95rem] leading-relaxed text-text/50">
              {card.desc}
            </p>
            {card.hasBlob && (
              <div className="absolute -right-[50px] -bottom-[50px] w-[350px] h-[350px] opacity-60">
                <div className="morph-blob" />
              </div>
            )}
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
