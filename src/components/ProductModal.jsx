import { useEffect, useState } from "react";
import { formatPrice } from "../data/catalog.js";
import TractorLogo from "./TractorLogo.jsx";

function ProductGallery({ product }) {
  const images = product.images?.length
    ? product.images
    : product.img
      ? [product.img]
      : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [broken, setBroken] = useState(false);
  const hasMultipleImages = images.length > 1;

  const showImage = (index) => {
    setBroken(false);
    setActiveIndex((index + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div
        className="modal-gallery"
        role="img"
        aria-label={`Immagine segnaposto per ${product.title}`}
      >
        <div className="modal-img modal-img-placeholder">
          <TractorLogo className="modal-placeholder-tractor" />
        </div>
      </div>
    );
  }

  return (
    <div className={`modal-gallery ${hasMultipleImages ? "multiple" : ""}`}>
      <div
        className="modal-gallery-stage"
        tabIndex={hasMultipleImages ? 0 : undefined}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") showImage(activeIndex - 1);
          if (event.key === "ArrowRight") showImage(activeIndex + 1);
        }}
      >
        {broken ? (
          <div
            className="modal-img modal-img-placeholder"
            role="img"
            aria-label={`Immagine segnaposto per ${product.title}`}
          >
            <TractorLogo className="modal-placeholder-tractor" />
          </div>
        ) : (
          <img
            src={images[activeIndex]}
            alt={`${product.title} — foto ${activeIndex + 1} di ${images.length}`}
            className="modal-img"
            onError={() => setBroken(true)}
          />
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="modal-gallery-arrow previous"
              onClick={() => showImage(activeIndex - 1)}
              aria-label="Foto precedente"
            >
              ‹
            </button>
            <button
              type="button"
              className="modal-gallery-arrow next"
              onClick={() => showImage(activeIndex + 1)}
              aria-label="Foto successiva"
            >
              ›
            </button>
            <span className="modal-gallery-counter" aria-live="polite">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="modal-gallery-thumbnails" aria-label="Seleziona una foto">
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              className={index === activeIndex ? "active" : ""}
              onClick={() => showImage(index)}
              aria-label={`Vai alla foto ${index + 1} di ${images.length}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductModal({ product, onClose }) {
  const hasGallery = Boolean(product);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  return (
    <div
      className={`modal-overlay ${product ? "open" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product ? `Scheda prodotto: ${product.title}` : "Scheda prodotto"}
    >
      <div
        className={`modal-content ${hasGallery ? "has-gallery" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Chiudi scheda prodotto">
          ✕
        </button>
        {product && (
          <>
            <div className={`modal-header ${hasGallery ? "with-gallery" : ""}`}>
              <ProductGallery key={product.title} product={product} />
              <div className="modal-title-area">
                <span className="modal-cat">{product.category}</span>
                <h3 className="modal-title">{product.title}</h3>
                <div className="modal-price">
                  {formatPrice(product.price)}
                </div>
              </div>
            </div>
            <div className="modal-body">
              {product.detail && (
                <p>
                  {product.detailHighlight ? (
                    <>
                      <strong>{product.detailHighlight}</strong>
                      {product.detail.slice(product.detailHighlight.length)}
                    </>
                  ) : (
                    product.detail
                  )}
                </p>
              )}

              {product.description && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Descrizione</h4>
                  <p className="modal-description">{product.description}</p>
                </div>
              )}

              {product.specs && product.specs.length > 0 ? (
                <div className="modal-section">
                  <h4 className="modal-section-title">Scheda tecnica</h4>
                  <ul className="specs-list">
                    {product.specs.map((spec, i) => (
                      <li key={i}>
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">
                          {spec.emphasis ? <strong>{spec.value}</strong> : spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>Nessuna specifica aggiuntiva disponibile.</p>
              )}

              {product.features && product.features.length > 0 && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Dotazione e caratteristiche</h4>
                  <ul className="features-list">
                    {product.features.map((f, i) => (
                      <li key={i}>
                        {product.highlightedFeatures?.includes(f) ? <strong>{f}</strong> : f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
