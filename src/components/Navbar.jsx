import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#officina", label: "L'officina" },
  { href: "#catalogo", label: "Catalogo" },
  { href: "#configuratore", label: "Componi la tua macchina" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const whatsappUrl = `https://wa.me/393518027726?text=${encodeURIComponent(
    "Buongiorno! Vorrei richiedere un preventivo."
  )}`;

  return (
    <header
      className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="container nav-inner">
        <a
          href="#top"
          className="logo"
          aria-label="Officine Mandolfo — Macchine agricole"
          onClick={closeMenu}
        >
          <img
            className="logo-img"
            src="/images/logo.png"
            alt="Officine Mandolfo srl — Macchine agricole"
          />
        </a>
        <nav className="nav-links" aria-label="Navigazione principale">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            className="nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
          >
            <span className="nav-cta-full">Richiedi preventivo</span>
            <span className="nav-cta-short">Preventivo</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            ref={menuButton}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-intro" aria-hidden="true">
          <span>Officine Mandolfo</span>
          <p>Macchine agricole · Nardò</p>
        </div>
        <nav className="mobile-menu-links" aria-label="Navigazione mobile">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              <span className="mobile-menu-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mobile-menu-label">{link.label}</span>
              <span className="mobile-menu-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a
            className="mobile-menu-action primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
          >
            <span>WhatsApp</span>
            <small>Chiedi un preventivo →</small>
          </a>
          <a
            className="mobile-menu-action"
            href="tel:+390833578020"
            onClick={closeMenu}
          >
            <span>Chiama l'officina</span>
            <small>0833 578020</small>
          </a>
        </div>
        <p className="mobile-menu-meta">Via Einaudi 90 · 73048 Nardò (LE)</p>
      </div>
    </header>
  );
}
