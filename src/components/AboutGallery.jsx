import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

// Tutte le foto dell'officina: scorrono in un mazzo animato.
const SHOTS = [
  { src: "/images/motozappe.jpeg", label: "Motozappe e macchine in officina" },
  { src: "/images/officina-showroom.jpg", label: "Trattorini pronti in showroom" },
  { src: "/images/officina-lavoro.jpg", label: "Motozappa con motore Loncin sul banco" },
  { src: "/images/motozappe officina.jpeg", label: "Ricambi e attrezzatura a scaffale" },
  { src: "/images/officina-parete.jpg", label: "Decespugliatori e motozappe a parete" },
  { src: "/images/motori-banco.jpg", label: "Motori pronti per l'assemblaggio" },
  { src: "/images/decespugliatori-parete.jpg", label: "Decespugliatori appesi a parete" },
  { src: "/images/motoseghe-scaffale.jpg", label: "Motoseghe pronte all'uso" },
  { src: "/images/spaccalegna.jpg", label: "Spaccalegna per la legna da ardere" },
  { src: "/images/generatore-kipor.jpg", label: "Generatori di corrente Kipor" },
  { src: "/images/oli-scaffale.jpg", label: "Oli, miscele e lubrificanti" },
  { src: "/images/showroom-fronte.jpg", label: "L'ingresso dell'officina" },
  { src: "/images/stihl-vintage.jpg", label: "Stihl, dagli anni d'oro a oggi" },
];

const AUTOPLAY = 4.2; // secondi per foto

// Posizione di ogni carta in base alla profondità nel mazzo.
const DEPTHS = [
  { x: 0, y: 0, rotate: 0, scale: 1, brightness: 1, opacity: 1, z: 50 },
  { x: 30, y: -18, rotate: 2.6, scale: 0.945, brightness: 0.8, opacity: 1, z: 40 },
  { x: 54, y: -32, rotate: 5, scale: 0.9, brightness: 0.62, opacity: 1, z: 30 },
  { x: 72, y: -42, rotate: 6.8, scale: 0.87, brightness: 0.5, opacity: 0.45, z: 20 },
];
const BACK = { x: 72, y: -42, rotate: 6.8, scale: 0.87, brightness: 0.5, opacity: 0, z: 10 };

const depthAt = (i, active) => DEPTHS[(i - active + SHOTS.length) % SHOTS.length] ?? BACK;

const poseOf = (d) => ({
  x: d.x,
  y: d.y,
  rotate: d.rotate,
  scale: d.scale,
  opacity: d.opacity,
  filter: `brightness(${d.brightness})`,
});

const pad = (n) => String(n).padStart(2, "0");

export default function AboutGallery() {
  const [active, setActive] = useState(0);
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const root = useRef(null);
  const cards = useRef([]);
  const caption = useRef(null);
  const bar = useRef(null);
  const timer = useRef(null);
  const previous = useRef(0);
  const mounted = useRef(false);
  const hovering = useRef(false);
  const onScreen = useRef(true);

  const go = useCallback((i) => setActive(((i % SHOTS.length) + SHOTS.length) % SHOTS.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % SHOTS.length), []);

  // Ricompone il mazzo ogni volta che cambia la foto in primo piano.
  useLayoutEffect(() => {
    const first = !mounted.current;
    const from = previous.current;
    mounted.current = true;
    previous.current = active;

    cards.current.forEach((el, i) => {
      if (!el) return;
      const d = depthAt(i, active);
      const pose = poseOf(d);

      if (first || reduced) {
        gsap.set(el, { ...pose, zIndex: d.z });
        return;
      }

      // La carta uscente scivola via, poi rientra in fondo al mazzo.
      if (i === from && from !== active) {
        gsap.killTweensOf(el);
        gsap.set(el, { zIndex: 60 });
        gsap
          .timeline()
          .to(el, {
            x: -110,
            y: 26,
            rotate: -7,
            scale: 0.94,
            opacity: 0,
            duration: 0.55,
            ease: "power3.in",
          })
          .set(el, { ...pose, zIndex: d.z, opacity: 0 })
          .to(el, { opacity: pose.opacity, duration: 0.45, ease: "power2.out" });
        return;
      }

      gsap.to(el, { ...pose, duration: 0.7, ease: "power3.out", overwrite: "auto" });
      gsap.set(el, { zIndex: d.z });
    });

    if (!first && !reduced && caption.current) {
      gsap.fromTo(
        caption.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [active, reduced]);

  // Le carte in cima al mazzo (e le prossime) devono essere già caricate.
  useEffect(() => {
    for (let d = 0; d <= 5; d += 1) {
      const img = cards.current[(active + d) % SHOTS.length]?.querySelector("img");
      if (img && img.loading === "lazy") img.loading = "eager";
    }
  }, [active]);

  // Avanzamento automatico, con la barra che fa da conto alla rovescia.
  useEffect(() => {
    if (reduced) return undefined;
    const tween = gsap.fromTo(
      bar.current,
      { scaleX: 0 },
      { scaleX: 1, duration: AUTOPLAY, ease: "none", onComplete: next }
    );
    timer.current = tween;
    if (hovering.current || !onScreen.current) tween.pause();
    return () => tween.kill();
  }, [active, reduced, next]);

  // Niente autoplay quando la sezione è fuori schermo.
  useEffect(() => {
    const el = root.current;
    if (!el || reduced) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen.current = entry.isIntersecting;
        if (!timer.current) return;
        if (entry.isIntersecting && !hovering.current) timer.current.play();
        else timer.current.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const hold = (state) => () => {
    hovering.current = state;
    if (!timer.current) return;
    if (state) timer.current.pause();
    else if (onScreen.current) timer.current.play();
  };

  return (
    <div
      className="about-gallery"
      ref={root}
      onMouseEnter={hold(true)}
      onMouseLeave={hold(false)}
      onFocus={hold(true)}
      onBlur={hold(false)}
    >
      <div
        className="ag-deck"
        role="group"
        aria-roledescription="carosello"
        aria-label="Foto dell'officina"
      >
        {SHOTS.map((s, i) => (
          <figure
            className="ag-card"
            key={s.src}
            ref={(el) => {
              cards.current[i] = el;
            }}
            aria-hidden={i !== active}
          >
            <img
              src={s.src}
              alt={s.label}
              loading={i < 4 ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
            />
          </figure>
        ))}
        <button type="button" className="ag-next" onClick={next} aria-label="Foto successiva">
          →
        </button>
      </div>

      <div className="ag-meta">
        <span className="ag-count">
          <b>{pad(active + 1)}</b> / {pad(SHOTS.length)}
        </span>
        <p className="ag-caption" ref={caption} aria-live="polite">
          {SHOTS[active].label}
        </p>
      </div>

      <div className="ag-progress">
        <span ref={bar} />
      </div>

      <div className="ag-dots">
        {SHOTS.map((s, i) => (
          <button
            type="button"
            key={s.src}
            className={i === active ? "is-active" : ""}
            onClick={() => go(i)}
            aria-label={s.label}
            aria-current={i === active}
          />
        ))}
      </div>
    </div>
  );
}
