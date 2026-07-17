import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Showroom() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".band-bg",
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.from(".band blockquote", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="band" ref={root}>
      <div
        className="band-bg"
        style={{ backgroundImage: "url(/images/officina-lavoro.jpg)" }}
      />
      <blockquote>
        «Vieni a trovarci in officina: <em>le macchine</em> si scelgono{" "}
        <em>toccandole</em>.»
      </blockquote>
    </section>
  );
}
