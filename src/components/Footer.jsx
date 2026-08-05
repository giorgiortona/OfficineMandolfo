import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionKicker from "./SectionKicker.jsx";
import LegalModal from "./LegalModal.jsx";

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const cards = [
  {
    ico: <MapPinIcon />,
    title: "Dove siamo",
    text: "Via Einaudi, 90 — 73048 Nardò (LE)",
    href: "https://maps.google.com/?q=Via+Einaudi+90,+73048+Nardò+LE",
  },
  {
    ico: <PhoneIcon />,
    title: "Telefono",
    text: "0833 578020",
    href: "tel:+390833578020",
  },
  {
    ico: <WhatsAppIcon />,
    title: "WhatsApp",
    text: "+39 351 802 7726 — scrivici per un preventivo",
    href: `https://wa.me/393518027726?text=${encodeURIComponent(
      "Buongiorno! Vorrei richiedere un preventivo."
    )}`,
  },
  {
    ico: <EmailIcon />,
    title: "Email",
    text: "mandolfomacchineagricole@virgilio.it",
    href: "mailto:mandolfomacchineagricole@virgilio.it",
  },
];

export default function Footer() {
  const root = useRef(null);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="section" id="contatti" ref={root}>
        <div className="container">
          <div className="section-head">
            <SectionKicker>Contatti</SectionKicker>
            <h2>Passa in officina</h2>
          </div>
          <div className="contact-grid">
            {cards.map((c) =>
              c.href ? (
                <a
                  className="contact-card"
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener" : undefined}
                >
                  {c.ico && <div className="ico">{c.ico}</div>}
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </a>
              ) : (
                <div className="contact-card" key={c.title}>
                  {c.ico && <div className="ico">{c.ico}</div>}
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <footer>
        <div className="container footer-inner">
          <img
            className="footer-logo"
            src="/images/logo.png"
            alt="Officine Mandolfo srl — Macchine agricole"
          />
          <span>
            © {new Date().getFullYear()} Officine Mandolfo srl — Macchine
            agricole · Via Einaudi 90, 73048 Nardò (LE) · P.IVA 03914420751
          </span>
          <span>
            Le immagini di catalogo provengono dai siti dei produttori e
            rivenditori originali.
          </span>
          <span style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setIsLegalOpen(true)}
              style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0 }}
            >
              Privacy & Cookie Policy
            </button>
            <span>·</span>
            <span>created by <a href="https://www.instagram.com/dimana.digitalcreations/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Dimana.DigitalCreations</a></span>
          </span>
        </div>
      </footer>
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </>
  );
}
