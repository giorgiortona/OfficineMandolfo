import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  { src: "/images/officina-parete.jpg", pos: "center" },
  { src: "/images/showroom-fronte.jpg", pos: "center 40%" },
  { src: "/images/motori-banco.jpg", pos: "center 60%" },
  { src: "/images/generatore-kipor.jpg", pos: "center 45%" },
  { src: "/images/motoseghe-scaffale.jpg", pos: "center 45%" },
  { src: "/images/decespugliatori-parete.jpg", pos: "center 38%" },
  { src: "/images/oli-scaffale.jpg", pos: "center" },
];

const SLIDE_SECONDS = 5;

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    let play;
    const ctx = gsap.context(() => {
      // Slideshow: dissolvenza incrociata + lento zoom (Ken Burns).
      const slides = gsap.utils.toArray(".hero-slide");
      slides.forEach((el, i) => gsap.set(el, { opacity: i === 0 ? 1 : 0 }));
      if (slides.length > 1) {
        const show = gsap.timeline({ repeat: -1 });
        slides.forEach((el, i) => {
          show
            .to(el, { opacity: 1, duration: 1.2, ease: "power2.inOut" }, i * SLIDE_SECONDS)
            .fromTo(
              el,
              { scale: 1 },
              { scale: 1.09, duration: SLIDE_SECONDS + 1.4, ease: "none" },
              i * SLIDE_SECONDS
            )
            .to(
              el,
              { opacity: 0, duration: 1.2, ease: "power2.inOut" },
              (i + 1) * SLIDE_SECONDS
            );
        });
        // sul riavvolgimento la prima slide deve già essere visibile
        show.to(slides[0], { opacity: 1, duration: 1.2, ease: "power2.inOut" }, slides.length * SLIDE_SECONDS);
      }

      // L'intro parte quando il preloader ha finito di comporre il logo.
      const tl = gsap.timeline({ paused: true });
      tl.from(".hero h1 .line > span", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        clearProps: "transform",
      }).from(
        ".hero-kicker, .hero-sub, .hero-actions",
        {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          clearProps: "transform,opacity",
        },
        "-=0.6"
      );

      play = () => tl.play();
      if (window.__introDone) play();
      else window.addEventListener("preloader:done", play, { once: true });

      gsap.to(".hero-slides", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => {
      window.removeEventListener("preloader:done", play);
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-slides">
        {SLIDES.map((s) => (
          <div
            key={s.src}
            className="hero-slide"
            style={{ backgroundImage: `url(${s.src})`, backgroundPosition: s.pos }}
          />
        ))}
      </div>
      <div className="container hero-content">
        <div className="hero-kicker">Vendita · Assistenza · Assemblaggio</div>
        <h1>
          <span className="line">
            <span>Macchine che</span>
          </span>
          <span className="line">
            <span>
              lavorano <em>sodo</em>,
            </span>
          </span>
          <span className="line">
            <span>come te.</span>
          </span>
        </h1>
        <p className="hero-sub">
          Motozappe, decespugliatori, motoseghe e trattorini dei migliori
          marchi. E se la macchina che cerchi non esiste, la assembliamo noi —
          su misura per il tuo terreno.
        </p>
        <div className="hero-actions">
          <a href="#configuratore" className="btn btn-primary">
            Componi la tua macchina →
          </a>
          <a href="#catalogo" className="btn btn-ghost">
            Sfoglia il catalogo
          </a>
        </div>
      </div>
      <div className="hero-scroll">scorri</div>
    </section>
  );
}
