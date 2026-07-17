import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const brands = [
  "Stihl", "Honda", "Kawasaki", "Loncin", "Bertolini", "Orec",
  "Diesse", "Snapper", "Alpina", "Kohler · Lombardini", "Emak",
  "Maruyama", "MGF", "Hatz", "Pasbo", "AMA",
];

export default function Marquee() {
  const track = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // due copie identiche: trasliamo di -50% e ripartiamo, loop invisibile
      gsap.to(track.current, {
        xPercent: -50,
        duration: 38,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const items = [...brands, ...brands];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={track}>
        {items.map((b, i) => (
          <span className="marquee-item" key={i}>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
