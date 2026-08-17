import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories, formatPrice } from "../data/catalog.js";
import SectionKicker from "./SectionKicker.jsx";
import ProductModal from "./ProductModal.jsx";
import TractorLogo from "./TractorLogo.jsx";

gsap.registerPlugin(ScrollTrigger);

function Thumb({ item }) {
  const [broken, setBroken] = useState(false);
  if (!item.img || broken) {
    return (
      <div
        className="product-thumb product-thumb-placeholder"
        role="img"
        aria-label={`Immagine segnaposto per ${item.title}`}
      >
        <TractorLogo className="product-placeholder-tractor" />
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

// Testo cercabile di un articolo: titolo, sottotitolo, descrizione, categoria,
// specifiche e dotazione. Senza accenti e in minuscolo per ricerche "morbide".
const normalize = (s) =>
  (s ?? "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");

const searchIndex = (item) =>
  normalize(
    [
      item.title,
      item.detail,
      item.description,
      item.category,
      ...(item.specs ?? []).map((s) => `${s.label} ${s.value}`),
      ...(item.features ?? []),
    ]
      .filter(Boolean)
      .join(" ")
  );

export default function Catalog() {
  const root = useRef(null);
  const grid = useRef(null);
  const [active, setActive] = useState("motozappe");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const searching = query.trim() !== "";

  const items = useMemo(() => {
    // Con una ricerca attiva si cerca in tutto il catalogo, non solo
    // nella categoria selezionata.
    const cats =
      active === "all" || searching
        ? categories
        : categories.filter((c) => c.id === active);
    const all = cats.flatMap((c) =>
      c.items.map((it) => ({ ...it, category: c.label }))
    );

    if (!searching) return all;

    // Tutte le parole digitate devono comparire nell'articolo.
    const tokens = normalize(query).split(/\s+/).filter(Boolean);
    return all.filter((it) => {
      const haystack = searchIndex(it);
      return tokens.every((t) => haystack.includes(t));
    });
  }, [active, query, searching]);

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
            {searching ? (
              <>
                {items.length}{" "}
                {items.length === 1 ? "articolo trovato" : "articoli trovati"} in
                tutto il catalogo per «{query.trim()}».
              </>
            ) : (
              <>
                {items.length} articoli in{" "}
                {active === "all" ? categories.length : 1}{" "}
                {active === "all" ? "categorie" : "categoria"}. I prezzi indicati sono già scontati
                rispetto al listino; per il resto, chiedici un preventivo.
              </>
            )}
          </p>
        </div>

        <div className="cat-search">
          <svg
            className="cat-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <input
            type="search"
            className="cat-search-input"
            placeholder="Cerca un articolo, un motore, una misura…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Cerca nel catalogo"
          />
          {searching && (
            <button
              type="button"
              className="cat-search-clear"
              onClick={() => setQuery("")}
              aria-label="Cancella la ricerca"
            >
              ✕
            </button>
          )}
        </div>

        <div className="cat-filters">
          <button
            className={`chip ${active === "all" && !searching ? "active" : ""}`}
            onClick={() => {
              setActive("all");
              setQuery("");
            }}
          >
            Tutti
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`chip ${active === c.id && !searching ? "active" : ""}`}
              onClick={() => {
                setActive(c.id);
                setQuery("");
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {searching && items.length === 0 && (
          <p className="cat-empty">
            Nessun articolo corrisponde a «{query.trim()}». Prova con un altro
            termine oppure{" "}
            <button
              type="button"
              className="cat-empty-reset"
              onClick={() => setQuery("")}
            >
              sfoglia il catalogo
            </button>
            : se cerchi qualcosa che non vedi, chiedicelo — spesso lo troviamo o
            lo assembliamo noi.
          </p>
        )}

        <div className="cat-grid" ref={grid}>
          {items.map((item, i) => (
            <article 
              className="product" 
              key={`${active}|${query}|${i}`}
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
