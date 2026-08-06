import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { categories } from "../data/catalog.js";
import AboutGallery from "./AboutGallery.jsx";
import SectionKicker from "./SectionKicker.jsx";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: categories.reduce((n, c) => n + c.items.length, 0),
    suffix: "",
    label: "Articoli a catalogo",
    href: "#catalogo",
  },
  { value: 16, suffix: "", label: "Marchi trattati" },
  { value: 100, suffix: "%", label: "Assemblaggi su misura" },
];

export default function About() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-media", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".about-text > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.utils.toArray(".stat .num").forEach((el) => {
        const target = Number(el.dataset.value);
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v) + suffix;
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="officina" ref={root}>
      <div className="container">
        <div className="section-head">
          <SectionKicker>L'officina</SectionKicker>
          <h2>Non solo vendita. Qui le macchine le costruiamo.</h2>
        </div>
        <div className="about-grid">
          <div className="about-media">
            <AboutGallery />
          </div>
          <div className="about-text">
            <p>
              Da sempre lavoriamo con le mani sui motori per offrire soluzioni
              concrete a chi lavora la terra. In officina non proponiamo
              soltanto attrezzature pronte all'uso, ma ci dedichiamo a qualcosa
              che fa davvero la differenza:{" "}
              <strong>progettiamo e assembliamo macchine su misura</strong>{" "}
              per rispondere alle tue reali esigenze.
            </p>
            <p>
              Puoi selezionare il telaio e abbinare il motore più adatto al tuo
              lavoro. Costruiamo la tua motozappa o il tuo decespugliatore pezzo
              dopo pezzo, garantendo un rigoroso <strong>controllo qualità</strong> e
              la piena disponibilità dei <strong>ricambi</strong>, assicurando
              massima affidabilità anche sulle componenti di importazione.
            </p>
            <p>
              Il nostro supporto non termina con l'acquisto. La vera forza
              della nostra officina è l'<strong>assistenza tecnica continua</strong>:
              riparazioni, manutenzioni e fornitura rapida di ricambi sono il
              nostro impegno quotidiano per non lasciarti mai fermo.
            </p>
            <div className="stats">
              {stats.map((s) => {
                const Wrapper = s.href ? "a" : "div";
                return (
                  <Wrapper
                    className="stat"
                    key={s.label}
                    {...(s.href ? { href: s.href } : {})}
                  >
                    <div className="num" data-value={s.value} data-suffix={s.suffix}>
                      {s.value}
                    </div>
                    <div className="lbl">{s.label}</div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
