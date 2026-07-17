// Configuratore "Componi la tua macchina" — combinazioni basate sul catalogo
// (motozappe "assemblate su richiesta" e decespugliatori motore+asta).

export const machineTypes = [
  {
    id: "motozappa",
    name: "Motozappa",
    possessive: "La tua",
    mine: "la mia",
    desc: "Telaio + cambio, motore e accessori",
    steps: [
      {
        id: "telaio",
        label: "Telaio e cambio",
        required: true,
        options: [
          { id: "ds83", name: "Diesse DS83", desc: "2 marce + retromarcia" },
          { id: "ds11", name: "Diesse DS11", desc: "1 marcia avanti + retromarcia" },
          { id: "pasbo-g", name: "Pasbo G (10cv)", desc: "Per motori fino a 14cv" },
          { id: "pasbo-g94", name: "Pasbo G94", desc: "3 marce + retro, predisposto avv. elettrico" },
          { id: "bertolini-155", name: "Bertolini 155", desc: "Compatta monoblocco", tag: "da 369 €" },
        ],
      },
      {
        id: "motore",
        label: "Motore",
        required: true,
        options: [
          { id: "loncin-65", name: "Loncin 6.5cv", desc: "Benzina — G200, il più richiesto" },
          { id: "loncin-270", name: "Loncin 270cc", desc: "Benzina — 9cv" },
          { id: "loncin-14d", name: "Loncin 14cv 186F", desc: "Diesel" },
          { id: "honda-gx390", name: "Honda GX390", desc: "Benzina — professionale" },
          { id: "honda-igx440", name: "Honda iGX440", desc: "Benzina — controllo elettronico" },
          { id: "lombardini-15ld225", name: "Lombardini 15LD225", desc: "Diesel — 10cv" },
          { id: "kohler-kd15", name: "Kohler KD15-440", desc: "Diesel — albero conico" },
          { id: "hatz-10", name: "Hatz 10cv", desc: "Diesel — qualità tedesca" },
          { id: "acme-act340", name: "Acme ACT340", desc: "Benzina — 11cv" },
          { id: "total-55", name: "Total 5.5cv", desc: "Benzina — economico" },
          { id: "import-10", name: "Importazione 10cv", desc: "Diesel — con ricambi garantiti" },
        ],
      },
      {
        id: "accessori",
        label: "Accessori",
        required: false,
        multi: true,
        options: [
          { id: "avv-elettrico", name: "Avviamento elettrico", desc: "Con batteria" },
          { id: "ruote", name: "Ruote di trasferimento", desc: "Per spostarla facilmente" },
          { id: "frese-larghe", name: "Frese allargate", desc: "Maggiore larghezza di lavoro" },
          { id: "assolcatore", name: "Assolcatore", desc: "Per la semina" },
        ],
      },
    ],
  },
  {
    id: "decespugliatore",
    name: "Decespugliatore",
    possessive: "Il tuo",
    mine: "il mio",
    desc: "Motore + asta + testina",
    steps: [
      {
        id: "motore",
        label: "Motore",
        required: true,
        options: [
          { id: "tj45e", name: "Kawasaki TJ45E", desc: "45cc, 2 tempi" },
          { id: "tj53e", name: "Kawasaki TJ53E", desc: "53cc, 2 tempi" },
          { id: "gx50", name: "Honda GX50", desc: "47.9cc, 4 tempi" },
          { id: "import-45", name: "Importazione 45cc", desc: "Con controllo qualità e ricambi" },
        ],
      },
      {
        id: "asta",
        label: "Asta",
        required: true,
        options: [
          { id: "mgf-dk5100l", name: "MGF DK5100L", desc: "Attacco Kawasaki" },
          { id: "mgf-dh500v", name: "MGF DH500V", desc: "Attacco Honda" },
          { id: "ama-kd3450", name: "AMA KD3 450", desc: "Asta robusta professionale" },
          { id: "ama-kd3450x", name: "AMA KD3 450X", desc: "Versione rinforzata" },
        ],
      },
      {
        id: "taglio",
        label: "Apparato di taglio",
        required: false,
        multi: true,
        options: [
          { id: "testina", name: "Testina a filo", desc: "Per erba e rifiniture" },
          { id: "lama3", name: "Lama 3 punte", desc: "Per rovi e arbusti" },
          { id: "disco", name: "Disco sega", desc: "Per fusti legnosi" },
          { id: "imbragatura", name: "Imbragatura pro", desc: "Comfort per uso prolungato" },
        ],
      },
    ],
  },
];
