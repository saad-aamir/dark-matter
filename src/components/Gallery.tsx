"use client";

import { useRef } from "react";
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

  return (
    <section ref={sectionRef} className="py-[10vh] z-2 relative" id="work">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-[0.75rem] tracking-[0.3em] uppercase text-accent mb-4 px-[5vw]"
      >
        Our Work
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-16 px-[5vw]"
      >
        Websites that speak for themselves.
      </motion.h2>

      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        className="flex gap-8 px-[5vw] overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
    </section>
  );
}
