import React, { useEffect, useState } from "react";

export default function LegalModal({
  isOpen,
  initialTab = "privacy",
  isMapEnabled,
  onEnableMap,
  onRevokeMapConsent,
  onClose,
}) {
  const [tab, setTab] = useState("privacy");

  useEffect(() => {
    if (isOpen) {
      setTab(initialTab);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Privacy e Cookie Policy"
    >
      <div className="modal-content legal-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Chiudi informativa">✕</button>
        <div className="legal-tabs">
          <button 
            className={tab === 'privacy' ? 'active' : ''}
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
            className={tab === 'cookie' ? 'active' : ''}
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
        
        <div className="modal-body legal-body">
          {tab === "privacy" && (
            <div>
              <p>
                Ai sensi del Regolamento (UE) 2016/679 (“GDPR”), questa
                informativa descrive il trattamento dei dati personali degli
                utenti che consultano il sito officinemandolfo.it. Ultimo
                aggiornamento: 25 agosto 2026.
              </p>
              <br/>
              <h4>1. Titolare del Trattamento</h4>
              <p>
                Il Titolare del trattamento è Officine Mandolfo srl, con sede
                in Via Einaudi 90, 73048 Nardò (LE), P.IVA 03914420751. Email:
                mandolfomacchineagricole@virgilio.it.
              </p>
              <br/>
              <h4>2. Dati trattati</h4>
              <p>
                <strong>Dati di navigazione:</strong> i sistemi che permettono
                il funzionamento del sito e il fornitore di hosting possono
                acquisire indirizzo IP, data e ora della richiesta, pagina
                richiesta, esito della risposta e informazioni tecniche sul
                browser e sul dispositivo. Questi dati sono trattati per
                erogare e proteggere il sito e diagnosticare malfunzionamenti.
              </p>
              <p>
                <strong>Dati forniti volontariamente:</strong> l’invio di email,
                telefonate o messaggi WhatsApp comporta il trattamento dei dati
                comunicati dall’utente, come recapito, contenuto della richiesta
                ed eventuali informazioni necessarie a fornire una risposta o
                un preventivo.
              </p>
              <br/>
              <h4>3. Finalità e basi giuridiche</h4>
              <p>
                I dati di navigazione sono trattati per consentire la
                consultazione e la sicurezza del sito, sulla base della
                necessità di erogare il servizio richiesto e del legittimo
                interesse del Titolare alla sicurezza dei sistemi. I dati
                comunicati dall’utente sono trattati per rispondere alle
                richieste e adottare eventuali misure precontrattuali. Il sito
                non effettua profilazione propria né cede dati per finalità di
                marketing.
              </p>
              <br/>
              <h4>4. Google Maps e servizi esterni</h4>
              <p>
                La mappa interattiva di Google Maps è disattivata per
                impostazione predefinita. Solo dopo il consenso il browser si
                collega a Google e può trasmettere dati quali indirizzo IP,
                informazioni tecniche, data e ora e dominio di provenienza. La
                base giuridica è il consenso, revocabile in qualsiasi momento.
              </p>
              <p>
                I collegamenti a Google Maps, WhatsApp e Instagram non
                stabiliscono una connessione con tali servizi finché l’utente
                non li seleziona. Una volta aperto il servizio esterno, si
                applicano le condizioni e le informative del relativo gestore.
              </p>
              <br/>
              <h4>5. Destinatari, conservazione e trasferimenti</h4>
              <p>
                I dati possono essere trattati da fornitori tecnici e di
                hosting nominati, ove necessario, responsabili del trattamento.
                Google può ricevere dati soltanto dopo l’attivazione della
                mappa. I dati delle richieste sono conservati per il tempo
                necessario a rispondere e adempiere agli eventuali obblighi di
                legge; i log tecnici sono conservati secondo i tempi stabiliti
                dal fornitore di hosting e per esigenze di sicurezza.
              </p>
              <p>
                Alcuni fornitori possono trattare dati anche fuori dallo Spazio
                Economico Europeo, applicando i meccanismi di trasferimento
                previsti dal GDPR e descritti nelle rispettive informative.
              </p>
              <br/>
              <h4>6. Diritti dell’interessato</h4>
              <p>
                L’utente può esercitare i diritti previsti dagli artt. 15-22
                GDPR, inclusi accesso, rettifica, cancellazione, limitazione,
                opposizione e portabilità ove applicabile, scrivendo al
                Titolare. Può inoltre proporre reclamo al Garante per la
                protezione dei dati personali tramite il sito{" "}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                  garanteprivacy.it
                </a>.
              </p>
            </div>
          )}
          
          {tab === "cookie" && (
            <div>
              <p>
                Per impostazione predefinita il sito non attiva cookie o
                strumenti di tracciamento non tecnici. Google Maps viene
                caricato esclusivamente dopo una scelta esplicita dell’utente.
                Ultimo aggiornamento: 25 agosto 2026.
              </p>
              <br/>
              <h4>1. Cosa sono cookie e tecnologie analoghe?</h4>
              <p>
                I cookie sono piccole informazioni memorizzate dal browser sul
                dispositivo dell’utente. Tecnologie analoghe, come il local
                storage, possono memorizzare preferenze o altre informazioni
                nel browser.
              </p>
              <br/>
              <h4>2. Preferenza tecnica per Google Maps</h4>
              <p>
                Se l’utente attiva la mappa, il sito salva nel local storage la
                preferenza tecnica <code>officine-mandolfo:google-maps-consent</code>.
                Contiene esclusivamente lo stato del consenso, la versione
                dell’informativa, la data della scelta e la scadenza. La
                preferenza dura al massimo 180 giorni, non identifica l’utente
                e non è utilizzata per profilazione o pubblicità.
              </p>
              <br/>
              <h4>3. Google Maps</h4>
              <p>
                Il sito integra, come funzionalità opzionale, Google Maps,
                servizio fornito agli utenti dello Spazio Economico Europeo da
                Google Ireland Limited. Prima del consenso la mappa non è
                presente e non viene effettuata alcuna richiesta a Google per
                caricarla.
              </p>
              <p>
                Dopo la selezione di “Carica Google Maps”, il browser si collega
                ai server di Google. Possono essere trasmessi indirizzo IP,
                informazioni sul browser e sul dispositivo, data e ora della
                richiesta e dominio di provenienza. Google può inoltre leggere
                o installare cookie e usare tecnologie analoghe per fornire,
                proteggere, misurare e personalizzare i propri servizi, in base
                alle impostazioni dell’utente. Tipologie e durata possono
                variare e sono descritte direttamente da Google.
              </p>
              <p>
                L’attivazione si basa sul consenso ai sensi dell’art. 6, par. 1,
                lett. a), GDPR e dell’art. 122 del Codice Privacy. Per maggiori
                informazioni consulta la{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy di Google
                </a>{" "}
                e la pagina{" "}
                <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                  Come Google utilizza i cookie
                </a>.
              </p>
              <br/>
              <h4>4. Gestione e revoca del consenso</h4>
              <p>
                La revoca impedisce i successivi caricamenti della mappa e
                cancella la preferenza salvata dal sito, senza pregiudicare i
                trattamenti già effettuati da Google. I cookie eventualmente
                creati sul dominio di Google possono essere rimossi attraverso
                le impostazioni del browser o i controlli privacy di Google.
              </p>
              <div className="consent-control">
                <p aria-live="polite">
                  Stato attuale:{" "}
                  <strong>{isMapEnabled ? "consenso prestato" : "mappa disattivata"}</strong>
                </p>
                <button
                  type="button"
                  className="btn"
                  onClick={isMapEnabled ? onRevokeMapConsent : onEnableMap}
                >
                  {isMapEnabled
                    ? "Revoca consenso Google Maps"
                    : "Acconsenti e carica Google Maps"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
