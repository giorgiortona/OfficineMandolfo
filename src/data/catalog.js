// Catalogo estratto da Catalogo_Attrezzature_Foto.html — 53 articoli, 11 categorie.
// I prezzi mancanti sono "su preventivo". Le immagini puntano ai siti di rivenditori/produttori.

export const categories = [
  {
    id: "motozappe",
    label: "Motozappe Complete",
    tagline: "Assemblate su richiesta",
    items: [
      {
        title: "Obistica GK2 / GK90HS",
        detail: "Con motore Honda o motore Total",
        img: null,
        description:
          "Motozappa da 90 cm di fresa che assembliamo noi in officina, scegliendo la motorizzazione insieme a te: il 4 tempi Honda se cerchi affidabilità a lungo termine e vuoi il ricambio garantito ovunque, il Total se conta di più il prezzo e la macchina lavora poche settimane l'anno. Il telaio è lo stesso, cambia il motore e cambia la spesa. Una marcia avanti più retromarcia, trasmissione a catena e cinghia: schema semplice, poche cose che si rompono e riparabili in giornata. Passa in officina e vediamo insieme che terreno devi lavorare.",
        features: [
          "Assemblata in officina con la motorizzazione che scegli",
          "Motore Honda 4 tempi oppure Total, a parità di telaio",
          "Trasmissione a catena e cinghia",
          "Fresa da 90 cm",
          "Ricambi e assistenza direttamente da noi",
        ],
        specs: [
          { label: "Motore", value: "4 tempi a benzina (Honda o Total)" },
          { label: "Larghezza fresa", value: "90 cm" },
          { label: "Cambio", value: "1 Marcia AV + 1 RM" },
          { label: "Trasmissione", value: "A catena/cinghia" }
        ]
      },
      {
        title: "Bertolini 155 (Emak)",
        detail: "Motozappa compatta per orto e giardino",
        price: 369,
        img: "https://www.faddagianni.it/8791-large_default/motozappa-bertolini-155.jpg",
        description:
          "Motozappa Bertolini 155 con motore a benzina Emak K 300 H OHV da 80 cm³ e 2,4 HP, avviamento autoavvolgente. È la macchina pensata per chi deve preparare l'orto e le aiuole prima della semina: leggera (27 kg), maneggevole e semplice da usare. La fresa da 46 cm è riducibile a 32 e 22 cm togliendo gli elementi laterali (tre per lato), così da lavorare anche fra le file già seminate. Trasmissione a catena con frizione a cinghia e tenditore, stegole regolabili verticalmente su tre posizioni e ruotino di trasferimento posteriore per spostarla senza fatica.",
        features: [
          "Fresa riducibile a 32 e 22 cm (tre elementi per lato)",
          "Trasmissione a catena",
          "Frizione a cinghia con tenditore",
          "Regolatore di velocità con sistema on-off",
          "Stegole regolabili verticalmente (3 posizioni)",
          "Sperone integrato e ruotino anteriore",
          "Ruotino di trasferimento posteriore",
        ],
        specs: [
          { label: "Motore", value: "Emak K 300 H OHV (80 cm³)" },
          { label: "Potenza", value: "2,4 HP" },
          { label: "Avviamento", value: "Autoavvolgente" },
          { label: "Larghezza fresa", value: "46 cm, riducibile a 32-22 cm" },
          { label: "Cambio", value: "1 Marcia AV" },
          { label: "Trasmissione", value: "A catena" },
          { label: "Peso", value: "27 kg" }
        ]
      },
      {
        title: "Diesse DS83 — Loncin 196cc",
        detail: "Cambio Diesse, motore orizzontale Loncin G200F",
        img: "https://diesseagri.it/wp-content/uploads/2025/05/115-600x810.jpg",
        description:
          "Motozappa Diesse DS 83 EN con motore a benzina Loncin G200F da 5,6 HP / 4,1 kW e avviamento a strappo con autoavvolgente. Frizione conica a bagno d'olio e cambio a 2 velocità più una retromarcia ad ingranaggi in bagno d'olio. Completa di presa di forza, stegola di guida registrabile e dispositivo di sicurezza antinfortunistico. Fresa a 6 elementi più dischi da 95 cm, con larghezza di lavoro regolabile da 70 a 120 cm.",
        features: [
          "Frizione conica a bagno d'olio",
          "Cambio 2 velocità + 1 retromarcia ad ingranaggi in bagno d'olio",
          "Presa di forza",
          "Stegola di guida registrabile",
          "Dispositivo di sicurezza antinfortunistico",
          "Fresa a 6 elementi più dischi laterali",
        ],
        specs: [
          { label: "Motore", value: "Loncin G200F benzina (196 cc)" },
          { label: "Potenza", value: "5,6 HP / 4,1 kW" },
          { label: "Avviamento", value: "A strappo con autoavvolgente" },
          { label: "Frizione", value: "Conica a bagno d'olio" },
          { label: "Cambio", value: "2 Marce AV + 1 RM ad ingranaggi in bagno d'olio" },
          { label: "Fresa", value: "6 elementi più dischi (95 cm)" },
          { label: "Larghezza di lavoro", value: "Da 70 a 120 cm" },
          { label: "Peso", value: "83 kg circa" }
        ]
      },
      {
        title: "Diesse DS11 — Loncin 6.5cv",
        detail: "1 marcia avanti + retromarcia, motore Loncin G200",
        img: "https://diesseagri.it/wp-content/uploads/2025/05/115-600x810.jpg",
        description:
          "Motozappa Diesse DS 11 EN con motore a benzina Loncin G200F da 5,6 HP / 4,1 kW e avviamento a strappo con autoavvolgente. Frizione conica a bagno d'olio e cambio a 2 velocità (1 marcia avanti più 1 retromarcia) con ingranaggi in bagno d'olio. Stegola di guida registrabile e dispositivo di sicurezza antinfortunistico. Fresa a 6 elementi più dischi.",
        features: [
          "Frizione conica a bagno d'olio",
          "Ingranaggi in bagno d'olio",
          "Stegola di guida registrabile",
          "Dispositivo di sicurezza antinfortunistico",
          "Fresa a 6 elementi più dischi laterali",
        ],
        specs: [
          { label: "Motore", value: "Loncin G200F benzina (196 cc)" },
          { label: "Potenza", value: "5,6 HP / 4,1 kW" },
          { label: "Avviamento", value: "A strappo con autoavvolgente" },
          { label: "Frizione", value: "Conica a bagno d'olio" },
          { label: "Cambio", value: "1 Marcia AV + 1 RM" },
          { label: "Fresa", value: "90 cm, 6 elementi più dischi" },
          { label: "Trasmissione", value: "Ingranaggi in bagno d'olio" }
        ]
      },
      {
        title: "Pasbo 10cv — Loncin 14cv",
        detail: "Cambio Pasbo, montaggio su richiesta",
        img: "/images/motozappa_red.png",
        description:
          "Motozappa costruita sul cambio Pasbo, azienda salentina che dal 1959 produce motozappe professionali nei suoi stabilimenti in provincia di Lecce — roba di casa nostra, con i ricambi a un'ora di strada. Trasmissione a ingranaggi in bagno d'olio con 3 marce avanti più retromarcia e frizione conica a secco: è il gruppo che regge il lavoro pesante, quello che gli assemblati economici non fanno. Fresa da 105 cm a 6 elementi per lato più dischi laterali. Il montaggio è su richiesta: scegli tu la motorizzazione — qui è abbinato a un Loncin benzina di classe 14 CV — e la macchina la componiamo in officina.",
        features: [
          "Cambio Pasbo, produzione italiana dal 1959",
          "Trasmissione a ingranaggi in bagno d'olio",
          "Frizione conica a secco",
          "3 marce avanti più retromarcia",
          "Fresa a 6 elementi per lato più dischi laterali",
          "Montaggio e scelta della motorizzazione su richiesta",
        ],
        specs: [
          { label: "Motore", value: "Loncin Benzina, classe 14 CV" },
          { label: "Cambio", value: "3 Marce AV + 1 RM" },
          { label: "Trasmissione", value: "Ingranaggi in bagno d'olio" },
          { label: "Frizione", value: "Conica a secco" },
          { label: "Fresa", value: "105 cm, 6 elementi per lato più dischi" }
        ]
      },
      {
        title: "Diesse 83 — Lombardini 15LD225",
        detail: "10cv diesel, due marce + retromarcia",
        img: "https://diesseagri.it/wp-content/uploads/2025/05/115-600x810.jpg",
        description:
          "Motozappa Diesse DS 83 EN in versione diesel, con motore Lombardini 15LD225 da 10 HP e avviamento a strappo con autoavvolgente. Stesso telaio e stessa trasmissione della versione a benzina: frizione conica a bagno d'olio, cambio a 2 velocità più una retromarcia ad ingranaggi in bagno d'olio, presa di forza, stegola di guida registrabile e dispositivo di sicurezza antinfortunistico. Fresa a 6 elementi più dischi da 95 cm, con larghezza di lavoro regolabile da 70 a 120 cm.",
        features: [
          "Frizione conica a bagno d'olio",
          "Cambio 2 velocità + 1 retromarcia ad ingranaggi in bagno d'olio",
          "Presa di forza",
          "Stegola di guida registrabile",
          "Dispositivo di sicurezza antinfortunistico",
          "Fresa a 6 elementi più dischi laterali",
        ],
        specs: [
          { label: "Motore", value: "Lombardini 15LD225 Diesel" },
          { label: "Potenza", value: "10 HP" },
          { label: "Avviamento", value: "A strappo autoavvolgente" },
          { label: "Frizione", value: "Conica a bagno d'olio" },
          { label: "Cambio", value: "2 Marce AV + 1 RM ad ingranaggi in bagno d'olio" },
          { label: "Fresa", value: "6 elementi più dischi (95 cm)" },
          { label: "Larghezza di lavoro", value: "Da 70 a 120 cm" }
        ]
      },
      {
        title: "Pasbo G94 Diesel",
        detail: "Loncin diesel 10cv, 3 marce, avviamento elettrico",
        img: "/images/motozappa_orange.png",
        description:
          "La Pasbo G94 è il modello di punta della casa salentina: cambio a 3 marce avanti più retromarcia con ingranaggi in bagno d'olio e frizione conica, fresa a 6 elementi per lato con dischi che porta la larghezza di lavoro a 105-115 cm. Qui è motorizzata con il Loncin diesel da 10 CV con avviamento elettrico a batteria: gasolio significa consumi più bassi e meno calore nelle giornate lunghe, e la chiave significa non dover più tirare la fune con un motore freddo. È la macchina per chi ha terreno vero da lavorare, non l'orto dietro casa.",
        features: [
          "Cambio Pasbo a 3 marce avanti più retromarcia",
          "Trasmissione a ingranaggi in bagno d'olio",
          "Frizione conica",
          "Fresa a 6 elementi per lato più dischi (ø 360-420 mm)",
          "Avviamento elettrico con batteria",
          "Motore diesel: consumi ridotti nel lavoro prolungato",
        ],
        specs: [
          { label: "Motore", value: "Loncin Diesel 10 CV" },
          { label: "Avviamento", value: "Elettrico (con batteria)" },
          { label: "Cambio", value: "3 Marce AV + 1 RM" },
          { label: "Trasmissione", value: "Ingranaggi in bagno d'olio" },
          { label: "Frizione", value: "Conica" },
          { label: "Fresa", value: "105 - 115 cm con dischi" }
        ]
      },
    ],
  },
  {
    id: "motori",
    label: "Motori",
    tagline: "Per motozappa e macchine assemblate",
    items: [
      {
        title: "Kohler (Lombardini) KD15-440",
        detail: "Diesel, albero conico",
        img: "https://www.imbriano.it/10318-large_default/motore-lombardini-15ld440-diesel-conico-kd15-440-kohler.jpg",
        description:
          "Monocilindrico diesel raffreddato ad aria da 441 cm³, erede diretto del Lombardini 15LD440 e aggiornato da Kohler alla normativa Stage V con consumi e emissioni più bassi. Eroga 7,4 kW / 10,1 CV a 3600 giri con una coppia di 24,5 Nm già a 2200 giri: è la spinta ai bassi regimi che serve alla motozappa quando la fresa entra nel duro. Iniezione diretta, lubrificazione forzata e basamento in alluminio con canna in ghisa. Il sistema di adescamento automatico del gasolio e la decompressione automatica rendono l'avviamento a strappo alla portata di tutti, e il filtro aria va sostituito ogni 500 ore.",
        features: [
          "Iniezione diretta",
          "Adescamento automatico del gasolio",
          "Decompressione automatica per l'avviamento",
          "Lubrificazione forzata",
          "Basamento in alluminio con canna in ghisa",
          "Conforme Stage V",
          "Disponibile anche con avviamento elettrico",
        ],
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi monocilindrico" },
          { label: "Cilindrata", value: "441 cm³" },
          { label: "Alesaggio x corsa", value: "86 x 76 mm" },
          { label: "Potenza", value: "7,4 kW / 10,1 CV a 3600 giri" },
          { label: "Coppia max", value: "24,5 Nm a 2200 giri" },
          { label: "Raffreddamento", value: "Ad aria" },
          { label: "Albero", value: "Conico" },
          { label: "Peso", value: "45 kg a secco" }
        ]
      },
      {
        title: "Honda GX390",
        detail: "Benzina 4T, il classico professionale",
        img: "https://www.honda-engines-eu.com/files/images/1000x1000xffffff/gx390-600x600px.jpg",
        description:
          "Il monocilindrico che ha fatto scuola: 389 cm³ OHV con cilindro inclinato di 25°, albero orizzontale e raffreddamento ad aria. Eroga 8,7 kW / 11,7 CV a 3600 giri con 26,5 Nm di coppia a 2500, ed è la motorizzazione che si mette dove non ci si può permettere che il motore si fermi. L'architettura a valvole in testa gli dà una combustione efficiente, quindi consumi contenuti di carburante e olio, meno vibrazioni e meno rumore. L'accensione è digitale CDI ad anticipo variabile e la decompressione automatica alleggerisce lo strappo. Peso a secco 31,7 kg.",
        features: [
          "Distribuzione a valvole in testa (OHV)",
          "Cilindro inclinato a 25°",
          "Accensione digitale CDI ad anticipo variabile",
          "Sistema di decompressione automatica",
          "Impugnatura autoavvolgente morbida",
          "Avviamento elettrico disponibile a richiesta",
        ],
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi OHV" },
          { label: "Cilindrata", value: "389 cm³" },
          { label: "Alesaggio x corsa", value: "88 x 64 mm" },
          { label: "Potenza", value: "8,7 kW / 11,7 CV a 3600 giri" },
          { label: "Coppia max", value: "26,5 Nm a 2500 giri" },
          { label: "Serbatoio", value: "6,1 litri" },
          { label: "Raffreddamento", value: "Ad aria" },
          { label: "Peso", value: "31,7 kg a secco" }
        ]
      },
      {
        title: "Loncin 270cc 4T benzina",
        detail: "9 HP, albero cilindrico",
        img: "https://cdn.manomano.com/loncin-g270f-tq-motore-a-scoppio-avviamento-manuale-9-hp-albero-cilindrico-254-mm-4-tempi-benzina-P-5179128-19286737_1.jpg",
        description:
          "Loncin G270F: monocilindrico a benzina 4 tempi raffreddato ad aria da 270 cm³, 6 kW / 9 CV a 3600 giri e 17,7 Nm di coppia a 2500. È il taglio di cilindrata giusto per rimotorizzare motozappe medio-grandi, motopompe, betoniere e generatori senza spendere quanto un motore giapponese. Questa versione ha l'albero cilindrico da 25,4 mm (1\"), ma lo stesso motore è disponibile anche con albero conico da 23 mm e in versione flangiata: portaci la macchina e verifichiamo in officina quale attacco ti serve.",
        features: [
          "Monocilindrico 4 tempi raffreddato ad aria",
          "Avviamento a strappo autoavvolgente",
          "Disponibile con albero cilindrico, conico o flangiato",
          "Serbatoio da 6 litri",
        ],
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi (Loncin G270F)" },
          { label: "Cilindrata", value: "270 cm³" },
          { label: "Alesaggio x corsa", value: "77 x 58 mm" },
          { label: "Potenza", value: "6 kW / 9 CV a 3600 giri" },
          { label: "Coppia max", value: "17,7 Nm a 2500 giri" },
          { label: "Albero", value: "Cilindrico 25,4 mm" },
          { label: "Serbatoio", value: "6 litri" }
        ]
      },
      {
        title: "Motore di importazione 10cv",
        detail: "Diesel, controllo qualità e ricambi garantiti",
        img: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e5/e552dc49-69a2-45a5-bc48-dc4bd67228aa?rule=fullscreen-1x-auto",
        description:
          "Monocilindrico diesel raffreddato ad aria della famiglia 186F, 406/418 cm³ per 10 CV con iniezione diretta e avviamento a strappo autoavvolgente. È il motore che rimette in strada una motozappa o un motocoltivatore quando sostituire l'originale non ha più senso economicamente: costa una frazione di un europeo o giapponese di pari potenza e sugli attacchi è quasi sempre intercambiabile. La differenza la fa chi te lo vende: ogni motore che esce da qui passa il nostro controllo, e i ricambi li teniamo a magazzino — filtri, iniettore, guarnizioni, kit cilindro — perché il problema di questi motori non è la resa, è trovare i pezzi dopo.",
        features: [
          "Iniezione diretta",
          "Avviamento a strappo autoavvolgente",
          "Attacchi compatibili con la maggior parte delle macchine in commercio",
          "Controllo qualità in officina prima della consegna",
          "Ricambi disponibili a magazzino",
        ],
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi monocilindrico (186F)" },
          { label: "Cilindrata", value: "406 / 418 cm³" },
          { label: "Potenza", value: "10 CV" },
          { label: "Alimentazione", value: "Iniezione diretta" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
      {
        title: "Hatz 10cv diesel",
        detail: "Motorenfabrik Ruhstorf, qualità tedesca",
        img: "https://ormaquinarias.com.pe/wp-content/uploads/2025/03/motor-hatz-diesel-1B50E-frontal-560x560.jpg",
        description:
          "Serie 1B di Hatz, la Motorenfabrik di Ruhstorf che dal 1880 costruisce diesel industriali: monocilindrici raffreddati ad aria pensati per il lavoro continuo, non per l'hobbista. Nel taglio da 10 CV il riferimento è il 1B50, 517 cm³ per 7,9 kW a 3600 giri, mentre il 1B40 da 462 cm³ ne eroga 7,3. Costruzione in alluminio pressofuso, iniezione diretta e componentistica dimensionata per durare: è il motore che si sceglie quando la macchina deve lavorare tutti i giorni per anni e il fermo macchina costa più del motore stesso. Disponibile anche con avviamento elettrico (versione E).",
        features: [
          "Costruzione heavy duty per servizio continuo",
          "Basamento in alluminio pressofuso",
          "Iniezione diretta",
          "Raffreddamento ad aria",
          "Versione con avviamento elettrico disponibile",
        ],
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi monocilindrico (Serie 1B)" },
          { label: "Cilindrata", value: "517 cm³ (1B50) — 462 cm³ (1B40)" },
          { label: "Potenza", value: "7,9 kW / 10,7 CV a 3600 giri (1B50)" },
          { label: "Raffreddamento", value: "Ad aria" },
          { label: "Costruzione", value: "Alluminio pressofuso" },
          { label: "Peso", value: "51,2 kg (1B50)" },
          { label: "Qualità", value: "Heavy Duty Industriale" }
        ]
      },
      {
        title: "Acme Lombardini ACT340",
        detail: "11cv, 340cc benzina",
        img: "https://img.ricardostatic.ch/images/9623a174-bd53-434e-a9f4-a5b1bf984c6a/t_1800x1350/benzinmotor-acme-act-340-ohc-zu-aebi-hc44-bcs-lombardini",
        description:
          "Monocilindrico a benzina Acme ACT 340 OHC da 338 cm³, 8,1 kW / 11 CV a 3600 giri, con distribuzione monoalbero in testa e raffreddamento ad aria forzata. È il motore che si trova su molti motocoltivatori e motofalciatrici italiane — BCS, Aebi e simili — e l'albero conico lo rende il ricambio naturale su quelle macchine senza dover adattare nulla. Accensione elettronica, serbatoio da 6,5 litri e appena 30 kg a secco. Va alimentato con benzina senza piombo da 91 ottani o superiore.",
        features: [
          "Distribuzione monoalbero in testa (OHC)",
          "Raffreddamento ad aria forzata",
          "Accensione elettronica",
          "Albero conico per motocoltivatori e motofalciatrici",
          "Serbatoio da 6,5 litri",
        ],
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi OHC" },
          { label: "Cilindrata", value: "338 cm³" },
          { label: "Alesaggio x corsa", value: "82 x 64 mm" },
          { label: "Potenza", value: "8,1 kW / 11 CV a 3600 giri" },
          { label: "Albero", value: "Conico" },
          { label: "Serbatoio", value: "6,5 litri" },
          { label: "Peso", value: "30 kg a secco" }
        ]
      },
      {
        title: "Lombardini LGA280 10cv",
        detail: "Benzina, per motocoltivatori",
        img: "https://deltaservicedieselengines.com/203-thickbox_default/motore-lombardini-lga-280.jpg",
        description:
          "Monocilindrico a benzina Lombardini LGA 280 da 275 cm³, 6,6 kW / 9 CV a 3600 giri e 19,2 Nm di coppia a 2600. Raffreddato ad aria, con distribuzione monoalbero in testa comandata da cinghia dentata: una soluzione più silenziosa e regolare delle classiche aste e bilancieri. È il motore di riferimento sui motocoltivatori italiani, con cono da 23 mm che lo rende sostituibile senza modifiche. Disponibile con avviamento a strappo o elettrico.",
        features: [
          "Distribuzione monoalbero in testa a cinghia dentata",
          "Raffreddamento ad aria",
          "Cono da 23 mm per motocoltivatori",
          "Avviamento a strappo o elettrico",
        ],
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi OHC" },
          { label: "Cilindrata", value: "275 cm³" },
          { label: "Potenza", value: "6,6 kW / 9 CV a 3600 giri" },
          { label: "Coppia max", value: "19,2 Nm a 2600 giri" },
          { label: "Albero", value: "Conico 23 mm" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
      {
        title: "Loncin 14cv diesel 186F",
        detail: "Monocilindrico raffreddato ad aria",
        img: "https://www.crossfer.de/WebRoot/SageSMB/Shops/crossfer/650C/0870/BC35/272E/3258/0A0C/05BC/A34B/Gallerie_04.jpg",
        description:
          "Monocilindrico diesel Loncin della serie 186F, raffreddato ad aria, con iniezione diretta e avviamento a strappo autoavvolgente. Sul mercato italiano viene chiamato \"14 cavalli\" per convenzione commerciale, ma la potenza effettiva è di circa 10 CV: è la cilindrata giusta per motozappe pesanti, motocoltivatori e macchine operatrici che devono girare a lungo con consumi bassi. Il gasolio, a parità di lavoro, costa meno della benzina e il motore scalda di meno sotto sforzo prolungato.",
        features: [
          "Iniezione diretta",
          "Avviamento a strappo autoavvolgente",
          "Raffreddamento ad aria",
          "Consumi contenuti nel lavoro prolungato",
        ],
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi monocilindrico (186F)" },
          { label: "Cilindrata", value: "406 cm³" },
          { label: "Potenza nominale", value: "10 CV (classe commerciale 14 CV)" },
          { label: "Iniezione", value: "Diretta" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
      {
        title: "Total 5.5cv cilindrico",
        detail: "Benzina, entry level affidabile",
        img: "https://www.picclickimg.com/rHsAAeSw~MVo0rIj/55-HP-41-KW-Motore-a-benzina.webp",
        description:
          "Monocilindrico a benzina 4 tempi da 163 cm³ e 5,5 CV con albero cilindrico: il motore entry level per rimotorizzare motozappe leggere, motopompe, betoniere e piccoli generatori. Riprende l'architettura e le quote dei 160 cc più diffusi, quindi nella maggior parte dei casi si monta al posto dell'originale senza adattamenti. Non è un motore da lavoro continuo, ma per l'uso stagionale sull'orto o in cantiere fa il suo mestiere a una frazione del costo, e i ricambi li teniamo in officina.",
        features: [
          "Monocilindrico 4 tempi raffreddato ad aria",
          "Albero cilindrico standard, intercambiabile sui 160 cc più diffusi",
          "Avviamento a strappo autoavvolgente",
          "Ricambi disponibili in officina",
        ],
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi" },
          { label: "Cilindrata", value: "163 cm³" },
          { label: "Potenza", value: "5,5 CV" },
          { label: "Albero", value: "Cilindrico" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
      {
        title: "Loncin 6.5cv",
        detail: "Alberi cilindrici e conici disponibili",
        img: "https://cdn.manomano.com/images/images_products/5179128/P/157820649_1.jpg",
        description:
          "Loncin G200F, il monocilindrico a benzina da 196 cm³ più diffuso sulle macchine da giardino e agricoltura leggera. Eroga 4,1 kW a 3600 giri — i \"6,5 CV\" sono la denominazione commerciale Loncin — con 12,4 Nm di coppia a 2500. Lo teniamo sia con albero cilindrico che conico, così copre praticamente ogni sostituzione: motozappe, motopompe, betoniere, generatori. È il motore che montiamo più spesso sulle macchine che assembliamo in officina, perché costa poco, parte sempre e i ricambi si trovano.",
        features: [
          "Monocilindrico 4 tempi raffreddato ad aria",
          "Disponibile con albero cilindrico o conico",
          "Avviamento a strappo autoavvolgente",
          "Ricambi sempre disponibili",
        ],
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi (Loncin G200F)" },
          { label: "Cilindrata", value: "196 cm³" },
          { label: "Potenza", value: "4,1 kW a 3600 giri (6,5 CV nominali)" },
          { label: "Coppia max", value: "12,4 Nm a 2500 giri" },
          { label: "Albero", value: "Cilindrico o conico" }
        ]
      },
      {
        title: "Lombardini 25LD 330",
        detail: "Diesel bicilindrico",
        img: "https://deltaservicedieselengines.com/64-large_default/motore-lombardini-25ld-3302.jpg",
        description:
          "Lombardini 25LD 330-2: diesel bicilindrico da 654 cm³ raffreddato ad aria, con iniezione diretta. Eroga 11,2 kW / 15,2 CV a 3600 giri in servizio intermittente e circa 10 kW / 13,6 CV in continuo. Il doppio cilindro cambia il modo in cui la macchina lavora: coppia più regolare, molte meno vibrazioni e rumorosità inferiore rispetto a un monocilindrico di pari potenza — differenza che si sente dopo la prima ora di lavoro. Basamento in alluminio pressofuso con teste indipendenti e cilindri in ghisa rialesabili singolarmente, regolatore centrifugo a masse e correttore di coppia. Il motore per motocoltivatori pesanti, dumper, motopompe e gruppi elettrogeni.",
        features: [
          "Bicilindrico: coppia regolare e vibrazioni ridotte",
          "Iniezione diretta",
          "Teste in lega di alluminio indipendenti",
          "Cilindri in ghisa rialesabili singolarmente",
          "Regolatore di giri centrifugo a masse e correttore di coppia",
          "Lubrificazione forzata con filtro a flusso totale",
          "Avviamento elettrico",
        ],
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi Bicilindrico" },
          { label: "Cilindrata", value: "654 cm³" },
          { label: "Alesaggio x corsa", value: "80 x 65 mm" },
          { label: "Potenza", value: "11,2 kW / 15,2 CV a 3600 giri" },
          { label: "Potenza in continuo", value: "10 kW / 13,6 CV" },
          { label: "Raffreddamento", value: "Ad aria forzata" },
          { label: "Peso", value: "60 kg" }
        ]
      },
      {
        title: "Honda iGX440 STR",
        detail: "Benzina con centralina elettronica",
        img: "https://www.honda.sk/content/dam/local/slovakia/industrial/engines/images/iGX440%20large.png/_jcr_content/renditions/c2.png",
        description:
          "Il primo monocilindrico general purpose al mondo con controllo elettronico del regime: 438 cm³ OHV per 9,5 kW / 12,7 CV a 3600 giri, gestiti da una centralina con regolatore STR (Self Tuning Regulator). Al posto del classico regolatore meccanico, l'ECU legge in continuo apertura farfalla e giri motore e corregge elettronicamente la farfalla per tenere il regime costante al variare del carico — la macchina non cala quando il lavoro si fa duro. Il sistema non richiede batteria. Valvola carburante e starter sono automatici: si preme e parte, senza rubinetti né aria da regolare. Accensione digitale CDI.",
        features: [
          "Regolatore elettronico STR (Self Tuning Regulator)",
          "Regime costante al variare del carico",
          "Non richiede batteria",
          "Valvola carburante automatica",
          "Starter (aria) automatico",
          "Accensione digitale CDI",
        ],
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi OHV" },
          { label: "Cilindrata", value: "438 cm³" },
          { label: "Potenza", value: "9,5 kW / 12,7 CV a 3600 giri" },
          { label: "Alimentazione", value: "Carburatore con regolatore elettronico" },
          { label: "Tecnologia", value: "STR (Self Tuning Regulator)" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
    ],
  },
  {
    id: "trincia-martelli",
    label: "Trincia a Martelli",
    tagline: "Trinciatutto professionali",
    items: [
      {
        title: "Bertolini BTS 50",
        price: 2699,
        listPrice: 3654,
        img: "https://www.fm2magni.com/memo/444-home_default/trinciatutto-bertolini-bts-50-.jpg",
        description:
          "Trinciatutto Bertolini BTS 50 con motore Emak K 800 H da 182 cm³ e 5,7 HP ad avviamento autoavvolgente. È il modello compatto della gamma, pensato tanto per il privato con terreno impegnativo quanto per il manutentore del verde: 50 cm di larghezza di lavoro e un rotore con 26 coltelli a \"Y\" che tritura erba alta, tralci, rami e vegetazione bassa. L'altezza di taglio si regola da 20 a 80 mm con una manovella, senza attrezzi. Cambio a 3 marce avanti più retromarcia con ingranaggi in bagno d'olio, frizione a cinghia con tendicinghia e frizioni di sterzo indipendenti per girare stretto anche in spazi angusti. Ruote generose che gli permettono di lavorare su ogni terreno.",
        features: [
          "Rotore con 26 coltelli a \"Y\"",
          "Altezza di taglio 20-80 mm regolabile con manovella",
          "Cambio a ingranaggi in bagno d'olio",
          "Frizione a cinghia con tendicinghia",
          "Frizioni di sterzo indipendenti",
          "Stegola regolabile in altezza e lateralmente",
          "Ruote anteriori pivotanti",
        ],
        specs: [
          { label: "Larghezza lavoro", value: "50 cm" },
          { label: "Motore", value: "Emak K 800 H (182 cm³)" },
          { label: "Potenza", value: "5,7 HP" },
          { label: "Altezza di taglio", value: "20 - 80 mm" },
          { label: "Gruppo di taglio", value: "Rotore con 26 martelli a 'Y'" },
          { label: "Trasmissione", value: "3 Marce AV + 1 RM, ingranaggi in bagno d'olio" },
          { label: "Velocità", value: "1,2 - 3,4 km/h" },
          { label: "Ruote", value: "Posteriori 4.00-8\", anteriori pivotanti" },
          { label: "Peso", value: "135 kg" }
        ]
      },
      {
        title: "Bertolini 65 — Emak K1100H",
        price: 3599,
        listPrice: 4630,
        img: "https://www.fm2magni.com/memo/360-large_default/trinciatutto-bertolini-bts-65-emak.jpg",
        description:
          "Trinciatutto Bertolini BTS 65 con motore Emak K 1100 H da 302 cm³ e 8,4 HP. Macchina da lavoro intensivo per agricoltori e professionisti del verde: 65 cm di larghezza di lavoro e rotore con 38 coltelli a \"Y\" che affrontano erba, tralci, rami, vegetazione bassa, sterpaglie e stoppie, in frutteto come in vigneto. Altezza di taglio regolabile da 20 a 80 mm. Cambio a 3 marce avanti più retromarcia con ingranaggi in bagno d'olio, frizioni di sterzo indipendenti e freno di servizio automatico; le ruote anteriori pivotanti si possono bloccare per tenere la traiettoria dritta sui lunghi tratti.",
        features: [
          "Rotore con 38 coltelli a \"Y\"",
          "Altezza di taglio 20-80 mm",
          "Cambio a ingranaggi in bagno d'olio",
          "Frizioni di sterzo indipendenti",
          "Freno di servizio automatico",
          "Ruote anteriori pivotanti con bloccaggio",
          "Stegole regolabili in altezza e lateralmente",
        ],
        specs: [
          { label: "Larghezza lavoro", value: "65 cm" },
          { label: "Motore", value: "Emak K 1100 H (302 cm³)" },
          { label: "Potenza", value: "8,4 HP" },
          { label: "Altezza di taglio", value: "20 - 80 mm" },
          { label: "Gruppo di taglio", value: "Rotore con 38 martelli a 'Y'" },
          { label: "Trasmissione", value: "3 Marce AV + 1 RM, ingranaggi in bagno d'olio" },
          { label: "Velocità", value: "3,4 km/h AV — 1,4 km/h RM" },
          { label: "Ruote", value: "Posteriori 16/6.50-8\"" },
          { label: "Peso", value: "173,5 kg" }
        ]
      },
      {
        title: "Bertolini 65 — Honda GX340 OHV",
        price: 3999,
        listPrice: 5163,
        img: "https://www.fm2magni.com/memo/361-home_default/trinciatutto-bertolini-bts-65-honda.jpg",
        description:
          "Trinciatutto Bertolini BTS 65 nella motorizzazione più potente, con Honda GX 340 OHV da 10,7 HP: stesso telaio della versione Emak ma con la riserva di coppia che serve quando si lavora tutto il giorno su sterpaglia fitta o in salita. Larghezza di lavoro 65 cm e rotore con 38 coltelli a \"Y\" per erba, tralci, rami e stoppie; altezza di taglio regolabile da 20 a 80 mm. Cambio a 3 marce avanti più retromarcia in bagno d'olio, frizioni di sterzo indipendenti e freno di servizio automatico.",
        features: [
          "Rotore con 38 coltelli a \"Y\"",
          "Altezza di taglio 20-80 mm",
          "Cambio a ingranaggi in bagno d'olio",
          "Frizioni di sterzo indipendenti",
          "Freno di servizio automatico",
          "Ruote anteriori pivotanti con bloccaggio",
        ],
        specs: [
          { label: "Larghezza lavoro", value: "65 cm" },
          { label: "Motore", value: "Honda GX 340 OHV (337 cm³)" },
          { label: "Potenza", value: "8,0 kW / 10,7 HP" },
          { label: "Altezza di taglio", value: "20 - 80 mm" },
          { label: "Gruppo di taglio", value: "Rotore con 38 martelli a 'Y'" },
          { label: "Trasmissione", value: "3 Marce AV + 1 RM, ingranaggi in bagno d'olio" },
          { label: "Velocità", value: "3,4 km/h AV — 1,4 km/h RM" },
          { label: "Ruote", value: "Posteriori 16/6.50-8\"" },
          { label: "Peso", value: "173,5 kg" }
        ]
      },
      {
        title: "Bertolini BTS 80 — Honda GX340",
        detail: "Con ruote",
        price: 4899,
        listPrice: 6250,
        img: "https://www.fm2magni.com/memo/362-large_default/trinciatutto-bertolini-bts-80.jpg",
        description:
          "Il modello più grande della gamma trinciatutto Bertolini: 80 cm di larghezza di lavoro e un rotore con 46 coltelli a \"Y\", mosso dal motore Honda GX 340 OHV da 10,7 HP. È costruito per condizioni estreme e per il lavoro in pendenza, dove serve capacità di trinciatura e una macchina che non si ferma. Altezza di taglio regolabile da 20 a 80 mm, cambio a 3 marce avanti più retromarcia con ingranaggi in bagno d'olio. Lo sterzo a frizioni indipendenti con bloccaggio ruote e le ruote anteriori pivotanti comandate a leva rendono manovrabile una macchina da 175 kg.",
        features: [
          "Rotore con 46 coltelli a \"Y\"",
          "Altezza di taglio 20-80 mm",
          "Cambio a ingranaggi in bagno d'olio",
          "Sterzo a frizioni indipendenti con bloccaggio ruote",
          "Ruote anteriori pivotanti con comando a leva",
          "Stegole regolabili in altezza e lateralmente",
        ],
        specs: [
          { label: "Larghezza lavoro", value: "80 cm" },
          { label: "Motore", value: "Honda GX 340 OHV (337 cm³)" },
          { label: "Potenza", value: "8,0 kW / 10,7 HP" },
          { label: "Altezza di taglio", value: "20 - 80 mm" },
          { label: "Gruppo di taglio", value: "Rotore con 46 martelli a 'Y'" },
          { label: "Trasmissione", value: "3 Marce AV + 1 RM, ingranaggi in bagno d'olio" },
          { label: "Sterzo", value: "A frizioni indipendenti e bloccaggio ruote" },
          { label: "Velocità", value: "Fino a 3,4 km/h" },
          { label: "Ruote", value: "Posteriori 16/6.50-8\"" },
          { label: "Peso", value: "175 kg" }
        ]
      },
    ],
  },
  {
    id: "trincia-lama",
    label: "Trincia a Lama",
    tagline: "Rabbit Mower",
    items: [
      {
        title: "Orec RMK151",
        price: 14899,
        listPrice: 17287.4,
        img: "https://www.radmoretucker.co.uk/wp-content/uploads/2024/03/Orec-RMK151-Rabbit-Ride-On-Brushcutter-Mower-700x700.jpg",
        description:
          "Trattorino falciatutto Orec Rabbit RMK151, una macchina unica nel suo genere: monta un'appendice alare mobile interfilare che si estende lateralmente e permette di falciare attorno a ostacoli e alberi senza danneggiare i tronchi, oppure di lavorare fra i filari di vigneti e frutteti e sotto i pannelli fotovoltaici. Il piatto centrale porta due lame flottanti, mentre l'ala aggiunge due lame fisse e una testina a 4 fili di nylon per rifinire a ridosso del ceppo: la larghezza di taglio passa così da 135 cm ad ala chiusa a 150 cm ad ala aperta. Motore Kawasaki FS651V OHV bicilindrico a V da 726 cc con avviamento elettrico e filtro aria a doppio stadio, trasmissione idrostatica Orec con bloccaggio differenziale di serie e velocità regolabile in continuo fino a 10 km/h.",
        features: [
          "Ala interfilare mobile per il taglio sottofila e interceppo",
          "Piatto centrale con 2 lame flottanti",
          "Ala con 2 lame fisse e testina a 4 fili di nylon",
          "Trasmissione idrostatica Orec a variazione continua",
          "Bloccaggio differenziale di serie",
          "Regolazione altezza di taglio con pistone a gas",
          "Freni a nastro esterni posteriori",
          "Volante regolabile in inclinazione e su 3 posizioni in altezza",
        ],
        specs: [
          { label: "Larghezza di taglio", value: "135 cm (ala chiusa) - 150 cm (ala aperta)" },
          { label: "Motore", value: "Kawasaki FS651V OHV V-Twin (726 cc)" },
          { label: "Avviamento", value: "Elettrico" },
          { label: "Trasmissione", value: "Idrostatica a variazione continua" },
          { label: "Velocità", value: "0-10 km/h AV — 0-7 km/h RM" },
          { label: "Altezza di taglio", value: "50 - 90 mm" },
          { label: "Ruote", value: "Ant. 3.50-7 Tractor — Post. 16x7.00-8 Tractor" },
          { label: "Serbatoio", value: "12 litri" },
          { label: "Peso", value: "315 kg" },
          { label: "Caratteristica", value: "Taglio sottofila e interceppo" }
        ]
      },
      {
        title: "Orec RM882",
        price: 9990,
        listPrice: 11821.8,
        img: "https://www.duedistore.com/wp-content/uploads/2021/03/Orec-Rabbit-RM882-scaled-1.jpg",
        description:
          "Trattorino falciatutto Orec Rabbit RM882 con motore Kawasaki FS481V OHV da 603 cc ad avviamento elettrico e trasmissione idrostatica con bloccaggio differenziale inseribile. Le due lame flottanti in acciaio triturano arbusti fino a 30 mm di spessore su una larghezza di taglio di 88 cm, con altezza regolabile da 50 a 110 mm assistita da pistone a gas. Il piatto è in acciaio COR-TEN anticorrosione da 3,5 mm con ampio ingresso anteriore, così l'erba alta entra senza intasare. Baricentro ribassato e assale anteriore tubolare da 38 mm danno stabilità in pendenza e sui terreni sconnessi, permettendo di tagliare vicino all'ostacolo mantenendo sempre l'aderenza.",
        features: [
          "2 lame flottanti in acciaio, triturano arbusti fino a 30 mm",
          "Piatto in acciaio COR-TEN anticorrosione da 3,5 mm",
          "Ampio ingresso anteriore per l'erba alta",
          "Trasmissione idrostatica a variazione continua",
          "Bloccaggio differenziale inseribile",
          "Regolazione altezza di taglio con pistone a gas",
          "Assale anteriore tubolare da 38 mm",
        ],
        specs: [
          { label: "Larghezza di taglio", value: "88 cm" },
          { label: "Motore", value: "Kawasaki FS481V OHV (603 cc)" },
          { label: "Avviamento", value: "Elettrico" },
          { label: "Trasmissione", value: "Idrostatica a variazione continua" },
          { label: "Velocità", value: "0-10 km/h AV — 0-7 km/h RM" },
          { label: "Altezza di taglio", value: "50 - 110 mm" },
          { label: "Bloccaggio differenziale", value: "Di serie" },
          { label: "Ruote", value: "Ant. 3.50-7 Tractor — Post. 16x7.00-8 Tractor" },
          { label: "Serbatoio", value: "12 litri" },
          { label: "Peso", value: "295 kg" }
        ]
      },
    ],
  },
  {
    id: "trinciasarmenti",
    label: "Trinciasarmenti a Cingoli",
    tagline: "Per i terreni più difficili",
    items: [
      {
        title: "Orec HRC813",
        price: 7790,
        listPrice: 8857.2,
        img: "https://www.fiaba.net/wp-content/uploads/2019/03/Orec-trinciasarmenti-professionale-a-cingoli-HRC813-fsx-1200x800.jpg",
        description:
          "Trinciasarmenti professionale a cingoli Orec HRC813, il modello da 80 cm della serie Bull. Il rotore con 46 flagelli gira a 3.075 giri/min con taglio in risalita e affronta erba alta, sarmenti, rovi e sterpaglia dove una macchina su ruote non fa presa. I cingoli triangolari in gomma con frizioni di sterzo bloccabili gli permettono di lavorare su pendenze fino a 25° senza rovinare il terreno. Motore Honda GX340 OHV nella versione HIE, studiata per il funzionamento a forte inclinazione, con avviamento autoavvolgente. Cambio meccanico a 3 marce avanti più retromarcia, altezza di taglio da 50 a 110 mm e stegola regolabile su 4 altezze e 5 posizioni orizzontali.",
        features: [
          "Rotore con 46 flagelli a 3.075 giri/min, taglio in risalita",
          "Cingoli triangolari in gomma",
          "Frizioni di sterzo indipendenti bloccabili",
          "Motore Honda HIE per il lavoro a forte inclinazione",
          "Pendenza massima di lavoro 25°",
          "Protezioni a bandelle d'acciaio",
          "Stegola regolabile su 4 altezze e 5 posizioni orizzontali",
        ],
        specs: [
          { label: "Larghezza di lavoro", value: "80 cm" },
          { label: "Motore", value: "Honda GX340 OHV HIE (337 cm³)" },
          { label: "Potenza", value: "8,0 kW / 10,7 HP" },
          { label: "Trazione", value: "Cingoli in gomma" },
          { label: "Gruppo di taglio", value: "Rotore con 46 flagelli" },
          { label: "Altezza di taglio", value: "50 - 110 mm" },
          { label: "Trasmissione", value: "Meccanica, 3 Marce AV + 1 RM" },
          { label: "Velocità", value: "0,90 / 1,88 / 3,32 km/h AV — 0,90 km/h RM" },
          { label: "Pendenza max", value: "25°" },
          { label: "Peso", value: "190 kg" }
        ]
      },
      {
        title: "Orec HRC673",
        price: 6790,
        listPrice: 7747,
        img: "https://www.fiaba.net/wp-content/uploads/2019/03/Orec-trinciasarmenti-professionale-a-cingoli-HRC673-dsx-1536x1024.jpg",
        description:
          "Trinciasarmenti professionale a cingoli Orec HRC673, la versione da 65 cm della serie Bull: più stretta della HRC813, passa dove gli spazi sono ridotti — fra i filari, lungo le scarpate, nei fondi chiusi. Rotore con 38 flagelli a 3.075 giri/min per erba alta, sarmenti e sterpaglia, con altezza di taglio regolabile da 50 a 110 mm. Motore Honda GX270 OHV in versione HIE per il funzionamento a forte inclinazione e avviamento autoavvolgente. Cingoli triangolari bloccabili e frizioni di sterzo indipendenti la rendono sicura fino a 25° di pendenza; telaio in acciaio e protezioni a bandelle a difesa dell'operatore.",
        features: [
          "Rotore con 38 flagelli a 3.075 giri/min",
          "Cingoli triangolari in gomma bloccabili",
          "Frizioni di sterzo indipendenti",
          "Motore Honda HIE per il lavoro a forte inclinazione",
          "Pendenza massima di lavoro 25°",
          "Telaio in acciaio e protezioni a bandelle",
          "Freno che si inserisce al disinnesto della frizione",
        ],
        specs: [
          { label: "Larghezza di lavoro", value: "65 cm" },
          { label: "Motore", value: "Honda GX270 OHV HIE (270 cm³)" },
          { label: "Potenza", value: "8,45 HP" },
          { label: "Trazione", value: "Cingoli in gomma" },
          { label: "Gruppo di taglio", value: "Rotore con 38 flagelli" },
          { label: "Altezza di taglio", value: "50 - 110 mm" },
          { label: "Trasmissione", value: "Meccanica, 3 Marce AV + 1 RM" },
          { label: "Velocità", value: "0,95 / 1,99 / 3,50 km/h AV — 0,95 km/h RM" },
          { label: "Pendenza max", value: "25°" },
          { label: "Serbatoio", value: "5,3 litri" },
          { label: "Peso", value: "170 kg" }
        ]
      },
    ],
  },
  {
    id: "decespugliatori",
    label: "Decespugliatori",
    tagline: "Anche assemblati motore + asta",
    items: [
      {
        title: "Obistica 45cc — asta AMA KD3 450",
        detail: "Motore di importazione, controllo qualità e ricambi",
        img: "https://www.faddagianni.it/5278-large_default/decespugliatore-ama-kawasaki-kd3-450.jpg",
        description:
          "Decespugliatore assemblato in officina con motore Obistica a 2 tempi da 45 cm³ e asta rigida AMA KD3 450 da 28 mm. È una soluzione concreta per lo sfalcio di erba alta, bordi, fossi e vegetazione più consistente, pensata per chi cerca una macchina semplice da mantenere senza sostenere il costo di una motorizzazione di marca. L'impugnatura singola facilita il lavoro negli spazi stretti e sui terreni irregolari; prima della consegna controlliamo l'assemblaggio e restiamo il riferimento per manutenzione e ricambi.",
        features: [
          "Assemblato e controllato nella nostra officina",
          "Motore monocilindrico 2 tempi da 45 cm³",
          "Asta rigida AMA da 28 mm",
          "Impugnatura singola per una buona libertà di movimento",
          "Assistenza e ricambi disponibili tramite l'officina",
        ],
        specs: [
          { label: "Cilindrata", value: "45 cc (2 Tempi)" },
          { label: "Asta", value: "AMA KD3 450 (diametro 28 mm)" },
          { label: "Impugnatura", value: "Singola" },
          { label: "Peso stimato", value: "7.5 kg" }
        ]
      },
      {
        title: "Stihl FS70RC",
        img: "https://www.spaziverdistore.it/3694-large_default/decespugliatore-stihl-fs-70-rc-e-a-scoppio.jpg",
        description:
          "Decespugliatore Stihl FS 70 RC-E con motore 2-MIX da 27,2 cm³ e 0,90 kW / 1,22 CV, efficiente e a basse emissioni (conforme Stage V). L'impugnatura circolare con limitatore di passo garantisce la massima libertà di movimento nei lavori in spazi ristretti, mentre l'impugnatura multifunzione a una mano è utilizzabile sia da destrorsi che da mancini. L'avviamento è facilitato dal sistema ErgoStart, che riduce lo sforzo di tiraggio, e dalla pompa carburante manuale. Peso di soli 4,8 kg senza carburante e utensile di taglio.",
        features: [
          "Motore STIHL 2-MIX conforme Stage V",
          "Sistema di avviamento ErgoStart a tiraggio ridotto",
          "Impugnatura multifunzione a una mano per destrorsi e mancini",
          "Impugnatura circolare con limitatore di passo",
          "Pompa carburante manuale",
          "Cinghia di trasporto singola inclusa",
        ],
        specs: [
          { label: "Modello", value: "FS 70 RC-E" },
          { label: "Cilindrata", value: "27,2 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "0,90 kW / 1,22 CV" },
          { label: "Impugnatura", value: "Circolare (R) con limitatore di passo" },
          { label: "Avviamento", value: "ErgoStart + pompa carburante manuale" },
          { label: "Peso", value: "4,8 kg senza carburante e utensile" }
        ]
      },
      {
        title: "Stihl FS120",
        img: "https://www.memigavi.it/wp-content/uploads/2020/04/121.jpg",
        description:
          "Decespugliatore Stihl FS 120 con motore 2-MIX da 30,8 cm³ e 1,30 kW / 1,80 CV, pensato per falciare superfici ampie con erba tenace. L'impugnatura a manubrio e la doppia tracolla imbottita di serie distribuiscono il peso e permettono di lavorare a lungo senza affaticarsi; il sistema antivibrante STIHL protegge muscoli e articolazioni. L'avviamento ElastoStart e la pompa carburante manuale ammorbidiscono lo strappo, mentre il compensatore mantiene costanti prestazioni e consumi anche con il filtro dell'aria sporco.",
        features: [
          "Motore STIHL 2-MIX conforme Stage V",
          "Sistema antivibrante STIHL",
          "Avviamento ElastoStart",
          "Pompa carburante manuale",
          "Compensatore per intervalli di manutenzione più lunghi",
          "Impugnatura multifunzione a una mano",
          "Doppia tracolla imbottita di serie",
        ],
        specs: [
          { label: "Cilindrata", value: "30,8 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "1,30 kW / 1,80 CV" },
          { label: "Impugnatura", value: "A manubrio" },
          { label: "Avviamento", value: "ElastoStart + pompa carburante manuale" },
          { label: "Peso", value: "6,4 kg senza carburante, utensile e protezione" }
        ]
      },
      {
        title: "Stihl FS220",
        img: "https://www.casadelcuscinettomasi.it/wp-content/uploads/2025/03/STIHL_FS_240R_Casa_del_cuscinetto_786621.jpg",
        description:
          "Decespugliatore Stihl FS 220 a due tempi da 35,2 cm³ e 1,7 kW / 2,3 CV: la macchina della gamma dedicata all'uso intensivo e agricolo, per sfoltire vegetazione resistente, sterpaglia e terreni incolti dove i modelli hobbistici non arrivano. Impugnatura a manubrio e sistema antivibrante per reggere lunghe giornate di lavoro. Serbatoio da 0,58 litri e peso di 7,7 kg a vuoto.",
        features: [
          "Impugnatura a manubrio per lavori prolungati",
          "Sistema antivibrante STIHL",
          "Tracolla doppia consigliata per l'uso con disco",
        ],
        specs: [
          { label: "Cilindrata", value: "35,2 cm³ (2 Tempi)" },
          { label: "Potenza", value: "1,7 kW / 2,3 CV" },
          { label: "Impugnatura", value: "A manubrio" },
          { label: "Serbatoio", value: "0,58 l" },
          { label: "Utilizzo", value: "Intensivo / Agricolo" },
          { label: "Peso", value: "7,7 kg" }
        ]
      },
      {
        title: "Kawasaki TJ45E — asta MGF DK5100L",
        detail: "Assemblato in officina",
        img: "https://newgardenstore.eu/61687-large_default/Motore-completo-2-tempi-decespugliatore-TJ45E-KAWASAKI-45cc-SOSTITUTIVO.jpg",
        description:
          "Decespugliatore professionale assemblato in officina attorno al Kawasaki TJ45E: monocilindrico 2 tempi da 45,4 cm³, capace di 1,42 kW / 1,90 HP a 7.500 giri e 2,18 Nm di coppia a 5.000 giri. La potenza viene abbinata all'asta MGF DK5100L da 28 mm, con trasmissione antivibrante e coppia conica rinforzata, per affrontare erba alta, sterpaglie e lavori prolungati. Il carburatore a membrana consente di lavorare in diverse inclinazioni e l'avviamento Kawasaki KAR riduce lo sforzo necessario alla messa in moto.",
        features: [
          "Motore Kawasaki TJ45E professionale",
          "Avviamento facilitato Kawasaki KAR",
          "Carburatore a membrana e frizione centrifuga",
          "Asta MGF DK5100L da 28 mm con sistema antivibrante",
          "Coppia conica rinforzata per impieghi gravosi",
          "Assemblaggio e assistenza nella nostra officina",
        ],
        specs: [
          { label: "Cilindrata", value: "45.4 cc (2 Tempi)" },
          { label: "Potenza max", value: "1,42 kW / 1,90 HP a 7.500 giri/min" },
          { label: "Coppia max", value: "2,18 Nm a 5.000 giri/min" },
          { label: "Serbatoio", value: "0,9 litri" },
          { label: "Asta", value: "MGF DK5100L antivibrante (28 mm)" },
          { label: "Coppia conica", value: "Rinforzata professionale" }
        ]
      },
      {
        title: "Kawasaki TJ53E — asta MGF DK6000L",
        detail: "Assemblato in officina",
        img: "https://www.bazargiusto.it/wp-content/uploads/2025/01/motore-completo-di-ricambio-per-decespugliatore-kawasaki-tj53e-1.jpg",
        description:
          "La configurazione più potente della gamma MGF con motore Kawasaki: il DK6000L monta il TJ53E da 53,2 cm³, capace di 2 kW / 2,68 HP a 8.500 giri e 3 Nm di coppia a 5.000 giri. L'asta rigida MGF da 28 mm, con sei boccole autolubrificanti e sistema antivibrante, rende l'insieme più controllabile nelle sessioni lunghe su erba fitta, sterpaglie e rovi. Il carburatore a membrana, la frizione centrifuga e l'avviamento Kawasaki KAR completano una macchina destinata allo sfalcio intensivo.",
        features: [
          "Motore Kawasaki TJ53E, il più potente della serie TJ",
          "Volano bilanciato dinamicamente e pistone alleggerito",
          "Avviamento facilitato Kawasaki KAR",
          "Carburatore a membrana e frizione centrifuga",
          "Asta MGF DK6000L da 28 mm con sei boccole autolubrificanti",
          "Testina filo Batti e Vai e bretella doppia in dotazione",
          "Assemblaggio e assistenza nella nostra officina",
        ],
        specs: [
          { label: "Cilindrata", value: "53.2 cc (2 Tempi)" },
          { label: "Potenza max", value: "2,0 kW / 2,68 HP a 8.500 giri/min" },
          { label: "Coppia max", value: "3,0 Nm a 5.000 giri/min" },
          { label: "Serbatoio", value: "1,1 litri" },
          { label: "Asta", value: "MGF DK6000L antivibrante (28 mm)" },
          { label: "Passo", value: "10 x 1,25 FSx" },
          { label: "Peso a secco", value: "8,95 kg" }
        ]
      },
      {
        title: "Kawasaki TJ53E — asta Honda MGF DH500V",
        detail: "Assemblato in officina",
        img: "https://www.fiaba.net/wp-content/uploads/2019/02/mgf-decespugliatore-kawasaki-honda-asta-interna-esterna.jpg",
        description:
          "Assemblato professionale che unisce la spinta del Kawasaki TJ53E da 53,2 cm³ all'asta di alta gamma MGF DH500V. Il motore sviluppa 2 kW / 2,68 HP a 8.500 giri e una coppia massima di 3 Nm, per lavorare con decisione su erba tenace, sottobosco e rovi. L'asta DH500V è scelta per la qualità della trasmissione e per il contenimento delle vibrazioni: una configurazione rivolta a chi usa il decespugliatore a lungo e vuole maggiore comfort senza rinunciare alla potenza del TJ53E.",
        features: [
          "Motore Kawasaki TJ53E da 53,2 cm³",
          "Volano bilanciato per ridurre le vibrazioni",
          "Avviamento facilitato Kawasaki KAR",
          "Carburatore a membrana e frizione centrifuga",
          "Asta MGF DH500V di alta gamma",
          "Configurazione assemblata e assistita in officina",
        ],
        specs: [
          { label: "Cilindrata", value: "53.2 cc (2 Tempi)" },
          { label: "Potenza max", value: "2,0 kW / 2,68 HP a 8.500 giri/min" },
          { label: "Coppia max", value: "3,0 Nm a 5.000 giri/min" },
          { label: "Serbatoio", value: "1,1 litri" },
          { label: "Asta", value: "Honda MGF DH500V Alta gamma" },
          { label: "Vibrazioni", value: "Ridotte al minimo" }
        ]
      },
      {
        title: "Honda GX50 — asta AMA KD3 450X",
        detail: "4 tempi, assemblato in officina",
        img: "https://www.agricolbio.it/shop/3362-large_default/decespugliatore-a-impugnatura-singola-con-motore-4-tempi-honda-gx50-ohc-da-479-cc-asta-28-mm.jpg",
        description:
          "Decespugliatore assemblato con Honda GX50, monocilindrico OHC a benzina da 47,9 cm³ e 1,47 kW / 2 HP: offre la coppia di un motore di cilindrata importante senza richiedere la preparazione della miscela. Il GX50 può lavorare inclinato in qualsiasi posizione, caratteristica essenziale su scarpate e fossi, ed è abbinato a un'asta AMA da 28 mm. La distribuzione con cinghia a bagno d'olio contribuisce a contenere rumore e ingombri; consumi ridotti, avviamento autoavvolgente e risposta pronta ne fanno una scelta indicata per chi preferisce la regolarità del 4 tempi.",
        features: [
          "Motore Honda GX50 OHC a 4 tempi",
          "Funzionamento a benzina: non richiede miscela",
          "Utilizzabile inclinato a 360° in ogni posizione",
          "Avviamento a strappo autoavvolgente",
          "Asta rigida AMA da 28 mm",
          "Assemblaggio e assistenza nella nostra officina",
        ],
        specs: [
          { label: "Motore", value: "Honda 4 Tempi OHC" },
          { label: "Cilindrata", value: "47.9 cc" },
          { label: "Potenza netta", value: "1,47 kW / 2,0 HP a 7.000 giri/min" },
          { label: "Coppia max", value: "2,2 Nm a 5.000 giri/min" },
          { label: "Serbatoio", value: "0,63 litri" },
          { label: "Asta", value: "AMA 28 mm" },
          { label: "Vantaggi", value: "Bassi consumi, no miscela" }
        ]
      },
    ],
  },
  {
    id: "trattorini",
    label: "Trattorini per Prato",
    tagline: "Comfort e potenza di taglio",
    items: [
      {
        title: "Snapper RPX102 — B&S 7220",
        img: "https://www.centroverderovigo.com/wp-content/uploads/2025/01/snapper-trattorino-rpx102-tagliaerba-raccolta-ventrale-fdx1-000-768x596.jpg",
        description:
          "Trattorino rasaerba Snapper RPX102 con motore Briggs & Stratton 7220 EXi V-Twin, piatto a due lame da 102 cm e capiente cesto posteriore da 300 litri. La trasmissione idrostatica Tuff Torq K46 permette di variare la velocità in modo continuo senza cambiare marcia, rendendo più fluide le manovre attorno ad alberi e aiuole. Le sei altezze di taglio da 30 a 90 mm coprono dalla rifinitura ordinaria all'erba più sviluppata; l'innesto elettrico delle lame e il sedile con schienale medio completano una macchina pensata per prati ampi e sessioni di lavoro prolungate.",
        features: [
          "Motore bicilindrico Briggs & Stratton 7220 EXi V-Twin",
          "Trasmissione idrostatica Tuff Torq K46",
          "Piatto da 102 cm con due lame e quattro ruote antiscalpo",
          "Innesto elettrico delle lame",
          "Cesto posteriore da 300 litri",
          "Attacco di traino e tappo mulching inclusi",
          "Attacco rapido per il lavaggio del piatto",
        ],
        specs: [
          { label: "Motore", value: "Briggs & Stratton 7220 EXi V-Twin" },
          { label: "Larghezza taglio", value: "102 cm (2 lame)" },
          { label: "Altezza di taglio", value: "30 - 90 mm (6 posizioni)" },
          { label: "Trasmissione", value: "Idrostatica Tuff Torq K46, 2WD" },
          { label: "Velocità", value: "0 - 8 km/h AV, 0 - 5 km/h RM" },
          { label: "Cesto raccolta", value: "300 litri" },
          { label: "Serbatoio", value: "8 litri" },
          { label: "Peso", value: "255 kg" }
        ]
      },
      {
        title: "Alpina AT4 84 — Stiga ST350",
        img: "https://hidrotecnoshop.it/wp-content/uploads/2022/10/4691a6726a931ba787ab53bcc3b52ca31a889b6e_AT484A_2T2000404A22_full01.jpg.jpg",
        description:
          "Trattorino Alpina AT4 84 A con motore monocilindrico STIGA ST 350 da 352 cm³ e 5,8 kW, adatto alla manutenzione di prati fino a circa 3.000 m². Il piatto da 84 cm con due lame raccoglie nel cesto posteriore da 200 litri, ma consente anche lo scarico posteriore e il taglio mulching. Il cambio meccanico a cinque marce avanti più retromarcia è semplice e robusto; l'altezza si regola in sette posizioni da 25 a 80 mm e le lame si inseriscono tramite frizione elettromagnetica premendo un pulsante.",
        features: [
          "Tre sistemi di taglio: raccolta, scarico posteriore e mulching",
          "Piatto a due lame da 84 cm",
          "Innesto elettromagnetico delle lame",
          "Sette altezze di taglio selezionabili",
          "Trazione posteriore e assale anteriore oscillante",
          "Ruote antiscalpo, fari e paraurti anteriore",
          "Kit mulching incluso",
        ],
        specs: [
          { label: "Motore", value: "STIGA ST 350 monocilindrico (352 cc)" },
          { label: "Potenza", value: "5,8 kW a 2.400 giri/min" },
          { label: "Superficie indicativa", value: "Fino a 3.000 m²" },
          { label: "Larghezza taglio", value: "84 cm (2 lame)" },
          { label: "Altezza di taglio", value: "25 - 80 mm (7 posizioni)" },
          { label: "Trasmissione", value: "Meccanica (5 AV + 1 RM)" },
          { label: "Cesto raccolta", value: "200 litri" },
          { label: "Serbatoio", value: "6 litri" },
          { label: "Peso", value: "175 kg" }
        ]
      },
    ],
  },
  {
    id: "trincia-filo",
    label: "Trincia a Filo Trainato",
    tagline: "Erba alta senza fatica",
    items: [
      {
        title: "Loncin 196cc, 3 marce, trazionato",
        detail: "Disponibile con motore Loncin o Honda, regolazione altezza",
        img: "https://media.adeo.com/marketplace/MKP/89180268/18fc0880077123597a3a3b1c16bfc8c8.jpeg",
        description:
          "Decespugliatore a ruote KB60 con motore a benzina 4 tempi Loncin da 196 cc e avviamento con autoavvolgente. 3 velocità in avanti, cambio e trasmissione meccanica, ruote Tractor 3.50×8. Rotore con frizione a tendicinghia e freno automatico, larghezza di lavoro 60 cm. Regolazione rapida dell'altezza di taglio e stegola di guida orientabile in ogni posizione.",
        features: [
          "Cambio e trasmissione meccanica, 3 velocità in avanti",
          "Rotore con frizione a tendicinghia e freno automatico",
          "Regolazione rapida dell'altezza di taglio",
          "Stegola di guida orientabile in ogni posizione",
          "Ruote Tractor 3.50×8",
        ],
        specs: [
          { label: "Motore", value: "Loncin 196 cc (4 Tempi)" },
          { label: "Avviamento", value: "Con autoavvolgente" },
          { label: "Trazione", value: "Trazionato, 3 velocità in avanti" },
          { label: "Trasmissione", value: "Cambio e trasmissione meccanica" },
          { label: "Larghezza di lavoro", value: "60 cm" },
          { label: "Apparato di taglio", value: "Rotore con frizione a tendicinghia e freno automatico" },
          { label: "Ruote", value: "Tractor 3.50×8" },
          { label: "Peso", value: "60 kg circa" }
        ]
      },
      {
        title: "Honda GCVx200 KB60",
        img: "https://www.farmaciagricola.com/images/prodotti/ama/Rasaerba_TRX_531H_Honda_GCVx200/rasaerba_TRX_531_Honda_AMA.jpg",
        description:
          "Decespugliatore a ruote KB60 nella versione con motore a benzina 4 tempi Honda GCVx200 da 201 cc. Rotore con frizione a tendicinghia e freno automatico, larghezza di lavoro 60 cm, ruote Tractor 3.50×8. Regolazione rapida dell'altezza di taglio e stegola di guida orientabile in ogni posizione: la macchina giusta per l'erba alta e i terreni incolti, senza fatica.",
        features: [
          "Rotore con frizione a tendicinghia e freno automatico",
          "Regolazione rapida dell'altezza di taglio",
          "Stegola di guida orientabile in ogni posizione",
          "Ruote Tractor 3.50×8",
        ],
        specs: [
          { label: "Motore", value: "Honda GCVx200 (201 cc)" },
          { label: "Larghezza lavoro", value: "60 cm" },
          { label: "Trazione", value: "Posteriore" },
          { label: "Apparato di taglio", value: "Rotore con frizione a tendicinghia e freno automatico" },
          { label: "Sistema di taglio", value: "A doppio filo da 4mm" },
          { label: "Ruote", value: "Tractor 3.50×8" }
        ]
      },
    ],
  },
  {
    id: "motoseghe",
    label: "Motoseghe",
    tagline: "Potatura e taglio professionale",
    items: [
      {
        title: "Stihl MS194",
        img: "https://www.stihl.it/content/dam/stihl/media/pim/10980.jpg",
        description:
          "Motosega Stihl MS 194 C-E leggerissima, con motore 2-MIX da 31,8 cm³ e 1,40 kW / 1,90 CV. Pensata per la cura degli alberi, il diradamento dei boschi e il taglio della legna da ardere: pesa 3,6 kg senza spranga e catena, quindi si maneggia a lungo senza affaticare. L'avviamento è comodo grazie a STIHL ErgoStart e alla pompa carburante manuale, mentre la tensione laterale della catena permette di registrarla dal carter senza smontare nulla. Catena PM3 da 3/8\" per un taglio pulito e consumi contenuti.",
        features: [
          "Motore STIHL 2-MIX",
          "Sistema STIHL ErgoStart",
          "Pompa carburante manuale",
          "Tensione laterale della catena",
          "Filtro aria HD2 a lunga durata",
          "Compensatore per prestazioni costanti",
          "Tappo serbatoio olio/carburante senza attrezzi",
        ],
        specs: [
          { label: "Modello", value: "MS 194 C-E" },
          { label: "Cilindrata", value: "31,8 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "1,40 kW / 1,90 CV" },
          { label: "Lunghezza barra", value: "30 cm" },
          { label: "Catena", value: "3/8\" PM3" },
          { label: "Peso", value: "3,6 kg senza spranga e catena" }
        ]
      },
      {
        title: "Stihl MS151",
        img: "https://www.stihl.it/content/dam/stihl/media/pim/10964.jpg",
        description:
          "Motosega Stihl MS 151 C-E: con 23,6 cm³ e appena 2,8 kg senza spranga e catena è una delle più leggere della gamma a miscela, ideale quando il peso conta più della potenza bruta — taglio a misura della legna da ardere, cura degli alberi, giardinaggio e manutenzione del verde. La catena 1/4\"P consente un taglio fine e preciso. Avviamento semplice con STIHL ErgoStart e pompa carburante manuale, filtro HD2 e tensione laterale della catena per la manutenzione quotidiana.",
        features: [
          "Motore STIHL 2-MIX",
          "Sistema STIHL ErgoStart",
          "Pompa carburante manuale",
          "Filtro aria HD2",
          "Tensione laterale della catena",
        ],
        specs: [
          { label: "Modello", value: "MS 151 C-E" },
          { label: "Cilindrata", value: "23,6 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "1,10 kW / 1,50 CV" },
          { label: "Lunghezza barra", value: "25 / 30 cm" },
          { label: "Catena", value: "1/4\"P — taglio fine" },
          { label: "Peso", value: "2,8 kg senza spranga e catena" }
        ]
      },
      {
        title: "Stihl MS194T",
        detail: "Da potatura",
        img: "https://www.faddagianni.it/5646-large_default/motosega-da-potatura-stihl-ms-194-t.jpg",
        description:
          "Motosega professionale da potatura Stihl MS 194 T, con impugnatura superiore per il lavoro in pianta. Motore 2-MIX da 31,8 cm³ e 1,40 kW / 1,90 CV, peso di 3,3 kg senza spranga e catena: è la macchina di riferimento per la cura della chioma, la rimozione del legno morto e il taglio di polloni e ricacci. Catena 1/4\" PM3, sistema antivibrante, lubrificazione STIHL Ematic e tensione laterale della catena. Attrezzo destinato a operatori formati per il tree climbing: l'uso senza adeguata formazione comporta seri rischi di infortunio.",
        features: [
          "Impugnatura superiore per lavoro in pianta",
          "Motore STIHL 2-MIX conforme Stage V",
          "Sistema antivibrante STIHL",
          "Lubrificazione STIHL Ematic",
          "Tensione laterale della catena",
          "Pompa carburante manuale e compensatore",
          "Tappi serbatoio a baionetta senza attrezzi",
        ],
        specs: [
          { label: "Tipo", value: "Da potatura (impugnatura superiore)" },
          { label: "Cilindrata", value: "31,8 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "1,40 kW / 1,90 CV" },
          { label: "Lunghezza barra", value: "30 cm" },
          { label: "Catena", value: "1/4\" PM3" },
          { label: "Peso", value: "3,3 kg senza spranga e catena" }
        ]
      },
      {
        title: "Stihl MS271",
        img: "https://www.stihl.it/content/dam/stihl/mam/modell-landscape/c244ac07adfd4a6eb2db8d11b04caf7d.jpg",
        description:
          "Motosega Stihl MS 271 con motore 2-MIX da 50,2 cm³ e 2,60 kW / 3,50 CV: una macchina versatile e robusta per piccole e medie utenze forestali, agricoltura, manutenzione del verde ed edilizia, particolarmente indicata per la lavorazione della legna da ardere. Il filtro aria a lunga durata HD2 con preseparazione allunga gli intervalli di manutenzione e il compensatore mantiene costanti potenza e consumi anche quando il filtro si sporca. Tensione laterale della catena e tappi a baionetta permettono di intervenire senza attrezzi. Peso 5,6 kg senza spranga e catena.",
        features: [
          "Motore STIHL 2-MIX",
          "Filtro aria a lunga durata HD2 con preseparazione",
          "Compensatore per potenza e consumi costanti",
          "Tensione laterale della catena, senza attrezzi",
          "Tappi serbatoio a baionetta senza attrezzi",
          "Sistema antivibrante STIHL",
        ],
        specs: [
          { label: "Cilindrata", value: "50,2 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "2,60 kW / 3,50 CV" },
          { label: "Lunghezza barra", value: "40 cm" },
          { label: "Catena", value: ".325\" RM3 Pro" },
          { label: "Peso", value: "5,6 kg senza spranga e catena" },
          { label: "Uso", value: "Agricoltura, verde ed edilizia" }
        ]
      },
      {
        title: "Stihl MS311",
        img: "https://www.giordano-cairo.com/6142/motosega-stihl-ms-311.jpg",
        description:
          "Motosega Stihl MS 311 con motore 2-MIX da 59 cm³ e 3,10 kW / 4,20 CV, la scelta giusta per chi si fa la legna da ardere in quantità medie e per l'uso in agricoltura e orticoltura. La valvola di decompressione manuale riduce sensibilmente lo sforzo necessario allo strappo, il comando monoleva tiene la mano destra sempre sull'impugnatura e la pompa dell'olio regolabile consente di adattare il flusso al tipo di legno, riducendone il consumo fino al 50%. Filtro aria a lunga durata e tensione laterale della catena per una manutenzione rapida.",
        features: [
          "Motore STIHL 2-MIX conforme Stage V",
          "Valvola di decompressione manuale",
          "Comando monoleva",
          "Pompa dell'olio regolabile (fino a -50% di consumo)",
          "Sistema di filtraggio aria a lunga durata",
          "Tensione laterale della catena, senza attrezzi",
        ],
        specs: [
          { label: "Cilindrata", value: "59 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "3,10 kW / 4,20 CV" },
          { label: "Lunghezza barra", value: "45 - 50 cm" },
          { label: "Peso", value: "6,3 kg senza spranga e catena" },
          { label: "Uso", value: "Legna da ardere in quantità medie" }
        ]
      },
      {
        title: "Stihl MS391",
        img: "https://www.celanisrl.com/wp-content/uploads/2022/10/MS-391-1.jpg",
        description:
          "Motosega Stihl MS 391 con motore 2-MIX da 64,1 cm³ e 3,30 kW / 4,50 CV: unisce un'elevata capacità di taglio a un rapporto peso/potenza di 1,9 kg/kW fra i migliori della categoria. È la macchina per agricoltori, artigiani e manutentori del verde, con impieghi che vanno dal taglio della legna da ardere alla cura del paesaggio fino al legname da costruzione. Valvola di decompressione per un avviamento senza sforzo, pompa dell'olio regolabile fino al 50% in meno e sistema STIHL Ematic per una lubrificazione mirata di barra e catena.",
        features: [
          "Motore STIHL 2-MIX",
          "Valvola di decompressione",
          "Pompa dell'olio regolabile (fino a -50% di consumo)",
          "Sistema STIHL Ematic per la lubrificazione",
          "Tensione laterale della catena, senza attrezzi",
          "Filtro aria a lunga durata disponibile",
        ],
        specs: [
          { label: "Cilindrata", value: "64,1 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "3,30 kW / 4,50 CV" },
          { label: "Rapporto peso/potenza", value: "1,9 kg/kW" },
          { label: "Lunghezza barra", value: "45 - 50 cm" },
          { label: "Peso", value: "6,3 kg senza spranga e catena" },
          { label: "Ideale per", value: "Abbattimento alberi e legname" }
        ]
      },
      {
        title: "Motosega da potatura GGP Italia — barra 25 cm",
        price: 450,
        img: "https://tradeshopitalia.com/60044-large_default/motosega-potatore-25cc-a-scoppio-benzina-lama-25-cm-per-potatura-professionale.jpg",
        description:
          "Motosega compatta da potatura GGP Italia con motore monocilindrico a 2 tempi da 25,4 cm³ e barra da 25 cm. La potenza di 0,9 kW / 1,2 HP è dimensionata per la manutenzione di alberi da frutto, ulivi, arbusti e per il taglio di rami di piccolo e medio diametro. La barra corta rende la macchina più agile tra i rami e facilita i tagli controllati; l'avviamento manuale e la lubrificazione automatica della catena mantengono l'impostazione semplice e pratica per i lavori periodici in giardino e campagna.",
        features: [
          "Formato compatto specifico per la potatura",
          "Motore monocilindrico 2 tempi",
          "Barra corta da 25 cm per tagli controllati",
          "Avviamento manuale a strappo",
          "Lubrificazione automatica della catena",
          "Indicata per alberi da frutto, ulivi e manutenzione del verde",
        ],
        specs: [
          { label: "Motore", value: "2 tempi monocilindrico" },
          { label: "Cilindrata", value: "25,4 cc" },
          { label: "Potenza", value: "0,9 kW / 1,2 HP" },
          { label: "Lunghezza barra", value: "25 cm (10\")" },
          { label: "Utilizzo", value: "Potatura leggera" }
        ]
      },
    ],
  },
  {
    id: "tagliasiepi",
    label: "Tagliasiepi",
    tagline: "Siepi perfette, mono e bilama",
    items: [
      {
        title: "Stihl HS45R",
        img: "https://www.agricolbio.it/shop/10966-large_default/tagliasiepi-a-scoppio-stihl-hs-45-lama-60-cm.jpg",
        description:
          "Tagliasiepi Stihl HS 45 con lama da 60 cm, il modello base della gamma a miscela: leggero e maneggevole, è ideale per arbusti e per la cura di siepi alte fino al petto. La lama a doppio taglio, con distanza fra i denti di 30 mm, lavora sia in verticale che in orizzontale ed è pensata per un taglio pulito e regolare. L'avviamento è uniforme grazie a STIHL ElastoStart, che smorza le forze di strappo, mentre la pompa carburante manuale riduce il numero di tiri necessari. Il sistema antivibrante protegge muscoli e articolazioni durante i lavori più lunghi.",
        features: [
          "Motore STIHL 2-MIX conforme Stage V",
          "Lama di taglio su entrambi i lati",
          "Avviamento ElastoStart",
          "Pompa carburante manuale",
          "Sistema di accensione elettronica",
          "Gancio per il fissaggio a parete",
        ],
        specs: [
          { label: "Modello", value: "HS 45, lama 60 cm" },
          { label: "Cilindrata", value: "27,2 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "0,75 kW / 1 CV" },
          { label: "Lunghezza lama", value: "60 cm (disponibile anche 45 cm)" },
          { label: "Tipo lama", value: "Bilama, distanza fra i denti 30 mm" },
          { label: "Frequenza di corsa", value: "3.800 / 4.000 giri/min" },
          { label: "Peso", value: "5,1 kg con coltello (4,8 kg con lama da 45 cm)" }
        ]
      },
      {
        title: "Stihl HS82R",
        img: "https://www.verdepro.it/public/prodotti/HS82R.jpg",
        description:
          "Tagliasiepi professionale Stihl HS 82 R con motore 2-MIX da 22,7 cm³, progettato specificamente per la potatura. Il cambio è regolato per una bassa velocità delle lame: ne derivano elevate forze di taglio che, unite alla geometria delle lame e all'ampia distanza fra i denti (38 mm), permettono di affrontare rami e ramoscelli robusti con avanzamento costante. Le lame a doppio taglio consentono di rifinire siepi in verticale e in orizzontale, mentre l'impugnatura multifunzione girevole si adatta a destrorsi e mancini. La scelta di giardinieri, manutentori del verde e amministrazioni comunali.",
        features: [
          "Motore STIHL 2-MIX",
          "Cambio a bassa velocità per elevate forze di taglio",
          "Lama di taglio su entrambi i lati",
          "Impugnatura multifunzione girevole",
          "Sistema di accensione elettronica",
          "Pompa carburante manuale",
        ],
        specs: [
          { label: "Cilindrata", value: "22,7 cm³ (Motore 2-MIX)" },
          { label: "Potenza", value: "0,70 kW / 1 CV" },
          { label: "Lunghezza lama", value: "60 / 75 cm" },
          { label: "Tipo lama", value: "Bilama da potatura, denti a 38 mm" },
          { label: "Frequenza di corsa", value: "3.200 giri/min" },
          { label: "Impugnatura", value: "Orientabile multifunzione" },
          { label: "Peso", value: "5,3 kg (60 cm) / 5,6 kg (75 cm)" },
          { label: "Destinazione", value: "Uso professionale" }
        ]
      },
      {
        title: "Kawasaki TJ23V KA600D",
        detail: "Bilama girevole 60 cm",
        img: "https://www.metautensili.it/12842-thickbox_default/kawasaki-tagliasiepe-ka600d-tj23v.jpg",
        description:
          "Tagliasiepi KA600D con motore Kawasaki TJ23V a 2 tempi da 22,5 cm³ e lama bilaterale da 60 cm. I denti con passo da 35 mm e le lame in acciaio cromato sono adatti alla rifinitura di siepi ornamentali e alla potatura di vegetazione consistente. L'impugnatura girevole permette di mantenere polsi e braccia in una posizione più naturale nei tagli verticali e orizzontali. Il motore eroga 0,63 kW / 0,84 HP e adotta carburatore a membrana, accensione elettronica e avviamento facilitato Kawasaki KAR.",
        features: [
          "Motore Kawasaki TJ23V a 2 tempi",
          "Lama bilaterale in acciaio cromato",
          "Impugnatura girevole per tagli verticali e orizzontali",
          "Avviamento facilitato Kawasaki KAR",
          "Carburatore a membrana e accensione elettronica",
          "Configurazione equilibrata per uso regolare e professionale",
        ],
        specs: [
          { label: "Motore", value: "Kawasaki TJ23V (22.5 cc)" },
          { label: "Potenza", value: "0,63 kW / 0,84 HP a 8.000 giri/min" },
          { label: "Lunghezza lama", value: "60 cm" },
          { label: "Configurazione", value: "Bilama, passo denti 35 mm" },
          { label: "Impugnatura", value: "Girevole" },
          { label: "Serbatoio", value: "0,4 litri" },
          { label: "Peso", value: "5,0 kg" }
        ]
      },
      {
        title: "Kawasaki TJ23V KA750S",
        detail: "Monolama 75 cm",
        img: null,
        description:
          "Tagliasiepi KA750S con lunga lama singola da 75 cm e motore Kawasaki TJ23V da 22,5 cm³. La configurazione monolama favorisce passate ampie e lineari sulle superfici estese, risultando particolarmente pratica per pareggiare il fianco e la sommità di siepi lunghe. Il TJ23V sviluppa 0,63 kW / 0,84 HP ed è un 2 tempi compatto con carburatore a membrana, accensione elettronica e sistema di avviamento Kawasaki KAR, progettato per offrire regolarità e contenere l'affaticamento nel lavoro continuativo.",
        features: [
          "Motore Kawasaki TJ23V a 2 tempi",
          "Lama singola da 75 cm per passate lunghe e uniformi",
          "Lame in acciaio cromato",
          "Avviamento facilitato Kawasaki KAR",
          "Carburatore a membrana e accensione elettronica",
          "Indicato per siepi lunghe e superfici estese",
        ],
        specs: [
          { label: "Motore", value: "Kawasaki TJ23V (22.5 cc)" },
          { label: "Potenza", value: "0,63 kW / 0,84 HP a 8.000 giri/min" },
          { label: "Lunghezza lama", value: "75 cm" },
          { label: "Configurazione", value: "Monolama" },
          { label: "Impugnatura", value: "Fissa" },
          { label: "Serbatoio", value: "0,4 litri" }
        ]
      },
    ],
  },
  {
    id: "soffiatori",
    label: "Soffiatori",
    tagline: "Pulizia rapida di viali e cortili",
    items: [
      {
        title: "Stihl BG56",
        img: "https://www.oggiverde.it/images/stories/virtuemart/product/STIHL_BG_Laterale.jpg",
        description:
          "Soffiatore a scoppio Stihl BG 56, maneggevole e semplice da usare, con motore 2-MIX da 27,2 cm³ che riduce emissioni, consumi e costi di esercizio. Con l'ugello rotondo raggiunge 71 m/s e 700 m³/h, con una forza di soffiaggio di 13 N: abbastanza per rimuovere rapidamente foglie ed erba tagliata da vialetti, cortili e piazzali. Si comanda con una sola mano tramite l'impugnatura ergonomica, con il pulsante di arresto direttamente sul dispositivo, e pesa 4,1 kg a serbatoio vuoto. Con il kit di aspirazione opzionale diventa aspiratore e trituratore di foglie.",
        features: [
          "Motore STIHL 2-MIX",
          "Impugnatura ergonomica con comando a una mano",
          "Pulsante di arresto sul dispositivo",
          "Pompa carburante manuale",
          "Kit di aspirazione opzionale (aspiratore e trituratore)",
          "Kit per la pulizia delle grondaie disponibile",
        ],
        specs: [
          { label: "Cilindrata", value: "27,2 cm³ (Motore 2-MIX)" },
          { label: "Portata aria (ugello rotondo)", value: "700 m³/h" },
          { label: "Portata aria (ugello piatto)", value: "560 m³/h" },
          { label: "Velocità aria", value: "71 m/s (ugello rotondo)" },
          { label: "Forza di soffiaggio", value: "13 N" },
          { label: "Peso", value: "4,1 kg senza carburante" }
        ]
      },
      {
        title: "Maruyama GK300B",
        img: "https://www.metautensili.it/12856-large_default/maruyama-soffiatore-gk300b.jpg",
        description:
          "Soffiatore portatile professionale Maruyama GK300B con motore a 2 tempi da 30,1 cm³ e 1 kW / 1,36 HP. Muove fino a 13 m³ d'aria al minuto e raggiunge una velocità massima di 72,1 m/s, sufficiente per liberare rapidamente vialetti, cortili e aree verdi da foglie, erba tagliata e piccoli residui. Il peso di 4,3 kg e la configurazione manuale bilanciata lo rendono agile negli spostamenti; la costruzione Maruyama privilegia durata e continuità di rendimento per l'impiego frequente.",
        features: [
          "Motore Maruyama 2 tempi da 30,1 cm³",
          "Elevata portata d'aria in un corpo portatile",
          "Comando dell'acceleratore regolabile",
          "Design bilanciato per facilitare il lavoro continuativo",
          "Costruzione destinata all'uso professionale",
          "Adatto a foglie, erba tagliata e pulizia di vialetti",
        ],
        specs: [
          { label: "Motore", value: "Maruyama 2 tempi" },
          { label: "Cilindrata", value: "30,1 cc" },
          { label: "Potenza max", value: "1,0 kW / 1,36 HP" },
          { label: "Portata aria", value: "13 m³/min" },
          { label: "Velocità aria", value: "72,1 m/s" },
          { label: "Utilizzo", value: "Professionale" },
          { label: "Peso", value: "4,3 kg" }
        ]
      },
    ],
  },
  {
    id: "atomizzatori",
    label: "Atomizzatori",
    tagline: "Trattamenti professionali",
    items: [
      {
        title: "Kasei 3WFB-30E",
        detail: "Atomizzatore a zaino a scoppio",
        img: "/images/kasei_3wfb.jpeg",
        description:
          "L’atomizzatore Kasei 3WFB-30 a scoppio è molto potente, adatto a tutti i tipi di trattamento professionali nella funzione di nebulizzatore con una pompa supplementare che ne aumenta l’efficienza. Accessorio opzionale: kit polveri.",
        features: [
          "Pompa spinta liquidi integrata",
          "Funzione nebulizzatore professionale",
          "Kit polveri opzionale",
        ],
        specs: [
          { label: "Motore", value: "A scoppio" },
          { label: "Modello", value: "3WFB-30E" }
        ]
      }
    ],
  },
];

export const formatPrice = (n) =>
  n == null
    ? "Su preventivo"
    : n.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
