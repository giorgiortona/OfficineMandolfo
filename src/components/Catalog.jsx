import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories, formatPrice } from "../data/catalog.js";
import SectionKicker from "./SectionKicker.jsx";
import ProductModal from "./ProductModal.jsx";

gsap.registerPlugin(ScrollTrigger);

function Thumb({ item }) {
  const [broken, setBroken] = useState(false);
  if (!item.img || broken) {
    return (
      <div className="product-thumb">
        <span className="noimg">foto in arrivo</span>
      </div>
    );
  }
  return (
    <div className="product-thumb">
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

export default function Catalog() {
  const root = useRef(null);
  const grid = useRef(null);
  const [active, setActive] = useState("motozappe");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const items = useMemo(() => {
    const cats =
      active === "all" ? categories : categories.filter((c) => c.id === active);
    return cats.flatMap((c) =>
      c.items.map((it) => ({ ...it, category: c.label }))
    );
  }, [active]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product",
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.045,
          ease: "power3.out",
          overwrite: true,
          clearProps: "transform,opacity",
        }
      );
    }, grid);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [items]);

  return (
    <section className="section" id="catalogo" ref={root}>
      <div className="container">
        <div className="section-head">
          <SectionKicker>Catalogo</SectionKicker>
          <h2>Attrezzature per ogni lavoro</h2>
          <p>
            {items.length} articoli in{" "}
            {active === "all" ? categories.length : 1}{" "}
            {active === "all" ? "categorie" : "categoria"}. I prezzi indicati sono già scontati
            rispetto al listino; per il resto, chiedici un preventivo.
          </p>
        </div>

        <div className="cat-filters">
          <button
            className={`chip ${active === "all" ? "active" : ""}`}
            onClick={() => setActive("all")}
          >
            Tutti
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`chip ${active === c.id ? "active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="cat-grid" ref={grid}>
          {items.map((item, i) => (
            <article 
              className="product" 
              key={active + i}
              onClick={() => setSelectedProduct(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProduct(item);
                }
              }}
              role="button"
              tabIndex="0"
              aria-label={`Apri la scheda di ${item.title}`}
            >
              <Thumb item={item} />
              <div className="product-body">
                <span className="product-cat">{item.category}</span>
                <h3 className="product-title">{item.title}</h3>
                {item.detail && <p className="product-detail">{item.detail}</p>}
                <div className="product-price">
                  <span className={`net ${item.price == null ? "quote" : ""}`}>
                    {formatPrice(item.price)}
                  </span>
                  {item.listPrice && (
                    <span className="list">{formatPrice(item.listPrice)}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
