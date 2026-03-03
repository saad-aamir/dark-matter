"use client";

import { useEffect, useRef } from "react";

export default function GradientOrbs() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const orb3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (orb1.current)
        orb1.current.style.transform = `translate(${y * 0.05}px, ${y * 0.03}px)`;
      if (orb2.current)
        orb2.current.style.transform = `translate(${-y * 0.03}px, ${-y * 0.05}px)`;
      if (orb3.current)
        orb3.current.style.transform = `translate(${y * 0.02}px, ${y * 0.04}px)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={orb1}
        className="fixed rounded-full pointer-events-none z-0 w-[600px] h-[600px] -top-[200px] -right-[200px]"
        style={{
          filter: "blur(80px)",
          background:
            "radial-gradient(circle, rgba(196, 161, 255, 0.15), transparent 70%)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        ref={orb2}
        className="fixed rounded-full pointer-events-none z-0 w-[500px] h-[500px] -bottom-[150px] -left-[150px]"
        style={{
          filter: "blur(80px)",
          background:
            "radial-gradient(circle, rgba(255, 107, 157, 0.1), transparent 70%)",
          animation: "float 20s ease-in-out infinite",
          animationDelay: "-7s",
        }}
      />
      <div
        ref={orb3}
        className="fixed rounded-full pointer-events-none z-0 w-[400px] h-[400px] top-1/2 left-1/2"
        style={{
          filter: "blur(80px)",
          background:
            "radial-gradient(circle, rgba(78, 205, 196, 0.1), transparent 70%)",
          animation: "float 20s ease-in-out infinite",
          animationDelay: "-14s",
        }}
      />
    </>
  );
}
