import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import TractorLogo from "./TractorLogo.jsx";

// Animazione di caricamento: il trattore si disegna tratto per tratto,
// poi il nome si compone come sull'insegna (OFFICINE + pannello verde MANDOLFO).
// Infine il trattore si accende e parte via, portandosi dietro il sipario.
export default function Preloader({ onDone }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    // Nel pannello anteprima (tab hidden) i ticker sono sospesi: saltiamo
    // l'animazione per non lasciare il sito coperto dall'overlay.
    // ?intro=force la esegue comunque (utile per testarla).
    if (document.hidden && !location.search.includes("intro=force")) {
      onDone();
      return;
    }

    const ctx = gsap.context(() => {
      // Si disegnano solo i tratti del mezzo: tassellatura, fumo e terra (.tl-fx)
      // hanno una vita loro.
      const strokes = [
        ...root.current.querySelectorAll(".pl-logo path, .pl-logo circle"),
      ].filter((el) => !el.closest(".tl-fx"));
      strokes.forEach((s) => {
        const len = s.getTotalLength();
        s.style.strokeDasharray = len;
        s.style.strokeDashoffset = len;
      });

      gsap.set(".pl-ground", { scaleX: 0 });

      // Motore acceso: ruote che girano, fumo dallo scarico e terra sollevata
      // dalla ruota posteriore, in loop finché il trattore non è uscito di scena.
      const engine = [
        gsap.to(".tl-spokes-rear", {
          rotation: 360,
          svgOrigin: "27 45",
          duration: 0.9,
          repeat: -1,
          ease: "none",
          paused: true,
        }),
        gsap.to(".tl-spokes-front", {
          rotation: 360,
          svgOrigin: "75 50",
          duration: 0.55,
          repeat: -1,
          ease: "none",
          paused: true,
        }),
        gsap.fromTo(
          ".tl-puff",
          { opacity: 0.5, y: 0, scale: 0.4, transformOrigin: "50% 50%" },
          {
            opacity: 0,
            y: -20,
            scale: 1.9,
            duration: 0.85,
            ease: "power1.out",
            stagger: { each: 0.22, repeat: -1 },
            paused: true,
          }
        ),
        // zolle scagliate all'indietro dal battistrada
        gsap.to(".tl-clod", {
          keyframes: [
            { opacity: 0.9, x: 0, y: 0, duration: 0.001 },
            {
              x: () => -5 - Math.random() * 7,
              y: () => -6 - Math.random() * 7,
              duration: 0.24,
              ease: "power2.out",
            },
            { x: () => -20 - Math.random() * 14, y: 5, opacity: 0, duration: 0.5, ease: "power1.in" },
          ],
          stagger: { each: 0.11, repeat: -1 },
          paused: true,
        }),
        // polverone che resta indietro
        gsap.fromTo(
          ".tl-dust",
          { opacity: 0.3, scale: 0.3, x: 0, y: 0, transformOrigin: "50% 50%" },
          {
            opacity: 0,
            scale: 1.5,
            x: -16,
            y: -5,
            duration: 1.1,
            ease: "power1.out",
            stagger: { each: 0.28, repeat: -1 },
            paused: true,
          }
        ),
      ];

      gsap
        .timeline({ onComplete: onDone, defaults: { ease: "power3.out" } })
        .to(strokes, {
          strokeDashoffset: 0,
          duration: 0.85,
          ease: "power2.inOut",
          stagger: { amount: 0.55 },
        })
        .from(".pl-logo", { x: -40, duration: 0.5, ease: "power2.out" }, 0)
        .to(".pl-ground", { scaleX: 1, duration: 0.7, ease: "power2.out" }, 0.3)
        .to(".tl-tread", { opacity: 1, duration: 0.4 }, 0.65)
        .from(".pl-officine", { y: 26, opacity: 0, duration: 0.5 }, "-=0.35")
        .from(
          ".pl-panel",
          { scaleX: 0, transformOrigin: "left center", duration: 0.45, ease: "power3.inOut" },
          "-=0.2"
        )
        .from(".pl-mandolfo", { opacity: 0, y: 12, duration: 0.35 }, "-=0.05")
        .to(".pl-sub", { opacity: 1, duration: 0.35 }, "-=0.1")

        // --- il trattore si accende e parte ---
        .addLabel("via", "+=0.1")
        .add(() => engine.forEach((t) => t.play()), "via")
        // vibrazione della messa in moto
        .to(
          ".pl-logo",
          { y: "+=2", rotation: 0.7, duration: 0.05, repeat: 7, yoyo: true, ease: "none" },
          "via"
        )
        // impennata leggera in accelerazione, poi si rimette in piano
        .to(".pl-logo", { rotation: -3, duration: 0.3, ease: "power2.out" }, "via+=0.35")
        .to(".pl-logo", { rotation: 0, duration: 0.5, ease: "power1.inOut" }, "via+=0.7")
        // sobbalzi sullo sterrato
        .to(
          ".pl-logo",
          { y: "-=3", duration: 0.16, repeat: 4, yoyo: true, ease: "sine.inOut" },
          "via+=0.35"
        )
        // e via, fuori dallo schermo
        .to(
          ".pl-logo",
          {
            x: () => window.innerWidth * 0.75,
            duration: 0.8,
            ease: "power2.in",
          },
          "via+=0.35"
        )
        .to(
          ".pl-word, .pl-sub",
          { opacity: 0, y: -14, duration: 0.45, ease: "power2.in" },
          "via+=0.7"
        )
        .to(".pl-ground", { opacity: 0, duration: 0.4, ease: "power2.in" }, "via+=0.8")
        // il sipario segue il trattore e scopre il sito
        .to(
          root.current,
          { xPercent: 105, duration: 0.75, ease: "power4.inOut" },
          "via+=0.95"
        );
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div className="preloader" ref={root}>
      <div className="pl-inner">
        <div className="pl-stage">
          <TractorLogo className="pl-logo" animated />
          <span className="pl-ground" />
        </div>
        <div className="pl-word">
          <span className="pl-officine">Officine</span>
          <span className="pl-panel">
            <span className="pl-mandolfo">Mandolfo</span>
          </span>
        </div>
        <div className="pl-sub">MACCHINE AGRICOLE · NARDÒ</div>
      </div>
    </div>
  );
}
