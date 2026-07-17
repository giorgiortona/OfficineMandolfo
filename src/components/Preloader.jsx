import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import TractorLogo from "./TractorLogo.jsx";

// Animazione di caricamento: il trattore si disegna tratto per tratto,
// poi il nome si compone come sull'insegna (OFFICINE + pannello verde MANDOLFO).
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
      const strokes = root.current.querySelectorAll(".pl-logo path, .pl-logo circle");
      strokes.forEach((s) => {
        const len = s.getTotalLength();
        s.style.strokeDasharray = len;
        s.style.strokeDashoffset = len;
      });

      gsap
        .timeline({ onComplete: onDone, defaults: { ease: "power3.out" } })
        .to(strokes, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.07,
        })
        .from(".pl-logo", { x: -40, duration: 0.5, ease: "power2.out" }, 0)
        .from(".pl-officine", { y: 26, opacity: 0, duration: 0.5 }, "-=0.35")
        .from(
          ".pl-panel",
          { scaleX: 0, transformOrigin: "left center", duration: 0.45, ease: "power3.inOut" },
          "-=0.2"
        )
        .from(".pl-mandolfo", { opacity: 0, y: 12, duration: 0.35 }, "-=0.05")
        .to(".pl-sub", { opacity: 1, duration: 0.35 }, "-=0.1")
        .to(root.current, {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.inOut",
          delay: 0.4,
        });
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div className="preloader" ref={root}>
      <div className="pl-inner">
        <TractorLogo className="pl-logo" />
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
