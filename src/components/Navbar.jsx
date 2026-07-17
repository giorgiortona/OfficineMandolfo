import { useEffect, useState } from "react";

const links = [
  { href: "#officina", label: "L'officina" },
  { href: "#catalogo", label: "Catalogo" },
  { href: "#configuratore", label: "Componi la tua macchina" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Officine Mandolfo — Macchine agricole">
          <img
            className="logo-img"
            src="/images/logo.png"
            alt="Officine Mandolfo srl — Macchine agricole"
          />
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`https://wa.me/393518027726?text=${encodeURIComponent(
            "Buongiorno! Vorrei richiedere un preventivo."
          )}`}
          target="_blank"
          rel="noopener"
        >
          <button className="nav-cta">Richiedi preventivo</button>
        </a>
      </div>
    </header>
  );
}
