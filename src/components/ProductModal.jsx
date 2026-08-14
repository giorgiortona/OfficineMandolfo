import { useEffect } from "react";
import { formatPrice } from "../data/catalog.js";

export default function ProductModal({ product, onClose }) {
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
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Chiudi scheda prodotto">
          ✕
        </button>
        {product && (
          <>
            <div className="modal-header">
              {product.img ? (
                <img src={product.img} alt={product.title} className="modal-img" />
              ) : (
                <div className="modal-img" style={{ display: 'grid', placeItems: 'center', color: '#8a938c', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>foto in arrivo</div>
              )}
              <div className="modal-title-area">
                <span className="modal-cat">{product.category}</span>
                <h3 className="modal-title">{product.title}</h3>
                <div className="modal-price">
                  {formatPrice(product.price)}
                </div>
              </div>
            </div>
            <div className="modal-body">
              {product.detail && <p>{product.detail}</p>}

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
                        <span className="spec-value">{spec.value}</span>
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
                      <li key={i}>{f}</li>
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
