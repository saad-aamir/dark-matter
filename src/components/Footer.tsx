const links = ["Twitter", "Dribbble", "Instagram", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="py-12 px-[5vw] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 z-2 relative">
      <div className="font-serif text-2xl">Dark Matter.</div>
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            data-magnetic
            className="text-text/40 no-underline text-sm transition-colors duration-300 hover:text-accent"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
