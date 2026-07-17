import React, { useEffect, useState } from "react";

export default function LegalModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("privacy");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: '30px' }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
          <button 
            style={{ 
              background: 'none', border: 'none', fontSize: '1.2rem', fontWeight: 700,
              color: tab === 'privacy' ? 'var(--accent)' : 'var(--muted)',
              borderBottom: tab === 'privacy' ? '2px solid var(--accent)' : 'none',
              paddingBottom: '5px',
              transition: 'all 0.2s'
            }} 
            onClick={() => setTab('privacy')}
          >
            Privacy Policy
          </button>
          <button 
            style={{ 
              background: 'none', border: 'none', fontSize: '1.2rem', fontWeight: 700,
              color: tab === 'cookie' ? 'var(--accent)' : 'var(--muted)',
              borderBottom: tab === 'cookie' ? '2px solid var(--accent)' : 'none',
              paddingBottom: '5px',
              transition: 'all 0.2s'
            }} 
            onClick={() => setTab('cookie')}
          >
            Cookie Policy
          </button>
        </div>
        
        <div className="modal-body" style={{ padding: 0, textAlign: 'left', lineHeight: 1.7 }}>
          {tab === "privacy" && (
            <div>
              <p>In ottemperanza agli obblighi previsti dal Regolamento (UE) 2016/679 (GDPR), la presente informativa descrive le modalità di gestione del sito web in riferimento al trattamento dei dati personali degli utenti che lo consultano.</p>
              <br/>
              <h4>1. Titolare del Trattamento</h4>
              <p>Il Titolare del trattamento è Officine Mandolfo srl, con sede legale in Via Einaudi 90, 73048 Nardò (LE) - P.IVA 03914420751, indirizzo email: mandolfomacchineagricole@virgilio.it.</p>
              <br/>
              <h4>2. Tipologia dei dati trattati</h4>
              <p><strong>Dati di navigazione:</strong> I sistemi informatici preposti al funzionamento di questo sito acquisiscono, nel normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet.</p>
              <p><strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati o messaggi tramite WhatsApp comporta la successiva acquisizione dell'indirizzo e/o numero di telefono del mittente, necessario per rispondere alle richieste.</p>
              <br/>
              <h4>3. Finalità del trattamento</h4>
              <p>I dati forniti verranno trattati al solo scopo di riscontrare le specifiche richieste dell'utente e per la normale erogazione dei servizi del sito web. Non effettuiamo profilazione né cessione di dati a terzi a fini di marketing.</p>
              <br/>
              <h4>4. Diritti dell'interessato</h4>
              <p>Gli utenti hanno il diritto in qualunque momento di ottenere la conferma dell'esistenza o meno dei dati, conoscerne il contenuto e l'origine, verificarne l'esattezza o chiederne l'integrazione, l'aggiornamento o la rettifica, la cancellazione o la limitazione del trattamento (Artt. 15 e ss. del GDPR), scrivendo ai contatti del Titolare.</p>
            </div>
          )}
          
          {tab === "cookie" && (
            <div>
              <p>Questo sito web utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento del sito e a garantire all'utente una normale navigazione.</p>
              <br/>
              <h4>1. Cosa sono i Cookie?</h4>
              <p>I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall'utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.</p>
              <br/>
              <h4>2. Cookie utilizzati da questo sito</h4>
              <p>Questo sito utilizza <strong>esclusivamente cookie tecnici di sessione e/o navigazione</strong>, per i quali, ai sensi della normativa vigente, non è richiesto il preventivo consenso dell'utente. Essi non vengono utilizzati per scopi ulteriori e sono installati direttamente dal titolare o gestore del sito web.</p>
              <br/>
              <h4>3. Cookie di terze parti</h4>
              <p>Non utilizziamo cookie di profilazione di prima parte. Eventuali link esterni (come ad esempio pulsanti verso WhatsApp o mappe di Google) potrebbero installare cookie di terze parti secondo le rispettive policy, sulle quali il Titolare non ha controllo.</p>
              <br/>
              <h4>4. Gestione dei Cookie</h4>
              <p>L'utente può gestire le preferenze relative ai cookie direttamente all'interno del proprio browser e impedire, ad esempio, che terze parti possano installarne. Eliminando i cookie è possibile che alcune funzionalità del sito web vengano ridotte o non siano più disponibili.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
