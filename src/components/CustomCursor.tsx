"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    let raf: number;
    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;
      cursor.style.left = cursorPos.current.x + "px";
      cursor.style.top = cursorPos.current.y + "px";
      raf = requestAnimationFrame(animate);
    };

    const hoverTargets = document.querySelectorAll(
      "a, button, .bento-card, .gallery-item, [data-magnetic]"
    );

    const addHover = () => cursor.classList.add("hovering");
    const removeHover = () => cursor.classList.remove("hovering");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 border-2 border-accent rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height,background] duration-300 ease-out [&.hovering]:w-[50px] [&.hovering]:h-[50px] [&.hovering]:bg-accent/10 [&.hovering]:border-accent2 hidden md:block"
      />
      <div
        ref={dotRef}
        className="fixed w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
