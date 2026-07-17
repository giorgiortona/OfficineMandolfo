import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TractorLogo from "./TractorLogo.jsx";

gsap.registerPlugin(ScrollTrigger);

// Etichetta di sezione: il trattorino "arriva" trainando la linea,
// e il nome della sezione si compone accanto.
export default function SectionKicker({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
          defaults: { ease: "power2.out" },
        })
        .from(".kicker-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.5,
          clearProps: "transform",
        })
        .from(
          ".kicker-tractor",
          {
            x: -38,
            opacity: 0,
            rotate: -5,
            duration: 0.6,
            ease: "back.out(1.6)",
            clearProps: "transform,opacity",
          },
          "-=0.25"
        )
        .from(
          ".kicker-text",
          { opacity: 0, x: -12, duration: 0.4, clearProps: "transform,opacity" },
          "-=0.3"
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <span className="kicker" ref={ref}>
      <span className="kicker-line" />
      <TractorLogo className="kicker-tractor" />
      <span className="kicker-text">{children}</span>
    </span>
  );
}
