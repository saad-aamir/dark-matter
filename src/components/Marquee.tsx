"use client";

const items = ["ATTRACT", "ENGAGE", "CONVERT", "GROW"];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="py-[5vh] overflow-hidden border-y border-white/5 z-2 relative">
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-serif text-[clamp(3rem,8vw,7rem)] whitespace-nowrap px-8 text-text/[0.08] transition-colors duration-400 hover:text-accent italic"
          >
            {item}{" "}
            <span className="inline-block w-3 h-3 rounded-full bg-accent mx-8 align-middle" />
          </span>
        ))}
      </div>
    </section>
  );
}
