"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({
  href,
  children,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const onClick = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = el.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <a
      ref={ref}
      href={href}
      data-magnetic
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`inline-flex items-center gap-3 px-10 py-4 border border-accent/30 rounded-full bg-transparent text-text font-sans text-base tracking-wide relative overflow-hidden transition-[border-color,color] duration-400 ease-out hover:before:opacity-100 before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent before:to-accent2 before:opacity-0 before:transition-opacity before:duration-400 before:rounded-full group ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-400 group-hover:translate-x-1.5">
        &rarr;
      </span>
    </a>
  );
}
