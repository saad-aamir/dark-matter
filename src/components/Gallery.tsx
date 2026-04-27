"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projects = [
  { title: "Apex Fitness", tag: "Business Landing Page", image: "/apex-fitness.png", url: "https://apex-fitness-kohl.vercel.app" },
  { title: "Solara Finance", tag: "SaaS Marketing Page", image: "/solara-fitness.png", url: "https://solara-finance-nine.vercel.app" },
  { title: "Noma Studio", tag: "Photographer Portfolio", image: "/noma-studio.png", url: "https://noma-studio.vercel.app" },
  { title: "Sussex Light Photography", tag: "Photographer Portfolio", image: "/sussex-light-photography.png", url: "https://www.sussexlightphotography.com" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
      if (el.scrollLeft > 4) setHasInteracted(true);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - (trackRef.current?.offsetLeft || 0);
    scrollLeft.current = trackRef.current?.scrollLeft || 0;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    hasDragged.current = true;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onClickCard = (e: React.MouseEvent, url: string) => {
    if (hasDragged.current) {
      e.preventDefault();
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".gallery-item");
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-[10vh] z-2 relative overflow-hidden" id="work">
      <div className="flex items-end justify-between gap-6 px-[5vw] mb-16 flex-wrap">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[0.75rem] tracking-[0.3em] uppercase text-accent mb-4"
          >
            Our Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1]"
          >
            Websites that speak for themselves.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-4 pb-2"
        >
          <div className="hidden md:flex items-center gap-2 text-[0.7rem] tracking-[0.25em] uppercase text-text/50">
            <span>Drag</span>
            <motion.div
              animate={hasInteracted ? {} : { x: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-0.5 text-accent"
            >
              <span className="text-base">&rarr;</span>
            </motion.div>
            <span>to explore</span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollByCard(-1)}
              className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-text/70 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
            >
              &larr;
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollByCard(1)}
              className="w-11 h-11 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md flex items-center justify-center text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
            >
              &rarr;
            </button>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-8 px-[5vw] pr-[20vw] overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => onClickCard(e, project.url)}
              className="gallery-item flex-none w-[clamp(300px,35vw,500px)] h-[clamp(350px,40vw,550px)] rounded-2xl overflow-hidden relative snap-center group transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 300px, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent via-transparent via-60% flex flex-col justify-end p-8">
                <span className="text-[0.75rem] tracking-[0.2em] uppercase text-accent">
                  {project.tag}
                </span>
                <h3 className="font-serif text-3xl mt-2">{project.title}</h3>
                <span className="text-[0.8rem] text-text/40 mt-2 group-hover:text-text/70 transition-colors duration-300">
                  View project &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute top-0 right-0 h-full w-[15vw] bg-gradient-to-l from-bg via-bg/60 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 px-[5vw] flex items-center gap-6"
      >
        <div className="relative h-[2px] flex-1 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent2 rounded-full transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(progress * 100, 8)}%` }}
          />
        </div>
        <span className="text-[0.7rem] tracking-[0.25em] uppercase text-text/40 tabular-nums">
          {String(Math.min(Math.round(progress * (projects.length - 1)) + 1, projects.length)).padStart(2, "0")}
          <span className="text-text/20"> / {String(projects.length).padStart(2, "0")}</span>
        </span>
      </motion.div>
    </section>
  );
}
