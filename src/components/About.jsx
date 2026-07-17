import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { categories } from "../data/catalog.js";
import SectionKicker from "./SectionKicker.jsx";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: categories.reduce((n, c) => n + c.items.length, 0),
    suffix: "",
    label: "Articoli a catalogo",
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
            <img
              className="main-img"
              src="/images/motori-banco.jpg"
              alt="Motori Loncin e Honda sul banco di lavoro"
            />
            <img
              className="poster"
              src="/images/stihl-vintage.jpg"
              alt="Poster Stihl d'epoca"
            />
          </div>
          <div className="about-text">
            <p>
              Da sempre lavoriamo con le mani sul motore. In officina trovi{" "}
              <strong>macchine complete dei migliori marchi</strong> — Stihl,
              Honda, Kawasaki, Bertolini, Orec — ma anche qualcosa che dai
              grandi rivenditori non trovi:{" "}
              <strong>macchine assemblate su richiesta</strong>.
            </p>
            <p>
              Scegli il telaio, scegli il motore, e la tua motozappa o il tuo
              decespugliatore lo mettiamo insieme noi, con{" "}
              <strong>controllo qualità e ricambi garantiti</strong> anche sui
              motori di importazione.
            </p>
            <p>
              E dopo la vendita non spariamo: assistenza, tagliandi e ricambi
              sono il nostro pane quotidiano.
            </p>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="num" data-value={s.value} data-suffix={s.suffix}>
                    0
                  </div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
