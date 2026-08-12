import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { machineTypes } from "../data/configurator.js";
import SectionKicker from "./SectionKicker.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Configurator() {
  const root = useRef(null);
  const stepsRef = useRef(null);
  const [typeId, setTypeId] = useState(machineTypes[0].id);
  const [choices, setChoices] = useState({});

  const machine = useMemo(
    () => machineTypes.find((t) => t.id === typeId),
    [typeId]
  );

  const selectType = (id) => {
    setTypeId(id);
    setChoices({});
  };

  const pick = (step, option) => {
    setChoices((prev) => {
      if (step.multi) {
        const current = prev[step.id] || [];
        const next = current.includes(option.id)
          ? current.filter((x) => x !== option.id)
          : [...current, option.id];
        return { ...prev, [step.id]: next };
      }
      return { ...prev, [step.id]: option.id };
    });
  };

  const isSelected = (step, option) =>
    step.multi
      ? (choices[step.id] || []).includes(option.id)
      : choices[step.id] === option.id;

  const labelFor = (step) => {
    if (step.multi) {
      const ids = choices[step.id] || [];
      if (!ids.length) return null;
      return step.options
        .filter((o) => ids.includes(o.id))
        .map((o) => o.name)
        .join(", ");
    }
    const opt = step.options.find((o) => o.id === choices[step.id]);
    return opt ? opt.name : null;
  };

  const complete = machine.steps
    .filter((s) => s.required)
    .every((s) => choices[s.id]);

  const chosenOptions = (step) => {
    if (step.multi) {
      const ids = choices[step.id] || [];
      return step.options.filter((o) => ids.includes(o.id));
    }
    const opt = step.options.find((o) => o.id === choices[step.id]);
    return opt ? [opt] : [];
  };

  // Messaggio WhatsApp personalizzato: le parti scelte in lista puntata,
  // con i dettagli; i passi facoltativi senza scelte vengono omessi.
  const whatsappUrl = () => {
    const lines = [];
    machine.steps.forEach((step) => {
      const opts = chosenOptions(step);
      if (!opts.length) return;
      if (opts.length === 1) {
        const o = opts[0];
        lines.push(`• ${step.label}: ${o.name}${o.desc ? ` (${o.desc})` : ""}`);
      } else {
        lines.push(`• ${step.label}:`);
        opts.forEach((o) => lines.push(`    – ${o.name}`));
      }
    });
    const text =
      `Buongiorno! 👋\n` +
      `Ho composto ${machine.mine} ${machine.name} sul vostro sito e vorrei un preventivo.\n\n` +
      `*La mia configurazione:*\n${lines.join("\n")}\n\n` +
      `Resto in attesa, grazie!`;
    return `https://wa.me/393518027726?text=${encodeURIComponent(text)}`;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    }, stepsRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [typeId]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".config .section-head > *, .config-showcase, .config-type", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section config" id="configuratore" ref={root}>
      <div className="container">
        <div className="section-head">
          <SectionKicker>Su misura</SectionKicker>
          <h2>Componi la tua macchina</h2>
          <p>
            È la nostra specialità: scegli i componenti e noi la assembliamo in
            officina, collaudata e pronta al lavoro. Il prezzo te lo
            confermiamo con un preventivo senza impegno.
          </p>
        </div>

        <figure className="config-showcase">
          <img
            src="/images/spaccalegna.jpg"
            alt="Spaccalegna idraulico su carrello assemblato in officina"
          />
          <figcaption>
            <span className="tag">Assemblato da noi</span>
            Come questo spaccalegna idraulico su carrello: telaio, pompa e
            motore scelti pezzo per pezzo in officina.
          </figcaption>
        </figure>

        <div className="config-type">
          {machineTypes.map((t) => (
            <button
              key={t.id}
              className={`type-card ${t.id === typeId ? "active" : ""}`}
              onClick={() => selectType(t.id)}
            >
              <span className="type-name">{t.name}</span>
              <small>{t.desc}</small>
            </button>
          ))}
        </div>

        <div className="config-grid">
          <div ref={stepsRef} key={typeId}>
            {machine.steps.map((step, i) => (
              <div className="step" key={step.id}>
                <div className="step-title">
                  <span className="step-num">{i + 1}</span>
                  <h3>
                    {step.label}
                    {!step.required && (
                      <span style={{ color: "var(--muted)", fontSize: "0.75em" }}>
                        {" "}
                        · facoltativo{step.multi ? ", scelta multipla" : ""}
                      </span>
                    )}
                  </h3>
                </div>
                <div className="options">
                  {step.options.map((o) => (
                    <button
                      key={o.id}
                      className={`option ${isSelected(step, o) ? "selected" : ""}`}
                      onClick={() => pick(step, o)}
                    >
                      <span className="opt-name">{o.name}</span>
                      <span className="opt-desc">{o.desc}</span>
                      {o.tag && <span className="opt-tag">{o.tag}</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="summary">
            <h3>
              {machine.possessive} {machine.name}
            </h3>
            {machine.steps.map((s) => (
              <div className="summary-row" key={s.id}>
                <span className="k">{s.label}</span>
                <span className={`v ${labelFor(s) ? "" : "empty"}`}>
                  {labelFor(s) || "da scegliere"}
                </span>
              </div>
            ))}
            <p className="summary-note">
              Ti ricontattiamo con prezzo e tempi di assemblaggio. Nessun
              impegno.
            </p>
            {complete ? (
              <a
                className="btn btn-primary"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener"
              >
                Richiedi il preventivo →
              </a>
            ) : (
              <button className="btn btn-primary" disabled>
                Completa le scelte obbligatorie
              </button>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
