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
        specs: [
          { label: "Motore", value: "4 tempi a benzina" },
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
        specs: [
          { label: "Motore", value: "Emak K 800 H (182 cc)" },
          { label: "Potenza", value: "5.7 HP" },
          { label: "Larghezza fresa", value: "85 cm (restringibile)" },
          { label: "Cambio", value: "1 Marcia AV + 1 RM" },
          { label: "Peso", value: "60 kg" }
        ]
      },
      {
        title: "Diesse DS83 — Loncin 196cc",
        detail: "Cambio Diesse, motore orizzontale Loncin G200F",
        img: "https://diesseagri.it/wp-content/uploads/2025/05/115-600x810.jpg",
        specs: [
          { label: "Motore", value: "Loncin G200F (196 cc)" },
          { label: "Potenza", value: "6.5 HP" },
          { label: "Cambio", value: "2 Marce AV + 1 RM ad ingranaggi" },
          { label: "Fresa", value: "95 cm con dischi laterali" }
        ]
      },
      {
        title: "Diesse DS11 — Loncin 6.5cv",
        detail: "1 marcia avanti + retromarcia, motore Loncin G200",
        img: "https://diesseagri.it/wp-content/uploads/2025/05/115-600x810.jpg",
        specs: [
          { label: "Motore", value: "Loncin G200 (196 cc)" },
          { label: "Cambio", value: "1 Marcia AV + 1 RM" },
          { label: "Fresa", value: "90 cm" },
          { label: "Trasmissione", value: "Ingranaggi in bagno d'olio" }
        ]
      },
      {
        title: "Pasbo 10cv — Loncin 14cv",
        detail: "Cambio Pasbo, montaggio su richiesta",
        img: "https://www.pezzellaagrigarden.it/wp-content/uploads/2020/11/G-83-KOHLER-OK-1.jpg",
        specs: [
          { label: "Motore", value: "Loncin Benzina 14 HP" },
          { label: "Frizione", value: "Conica a secco" },
          { label: "Cambio", value: "3 Marce AV + 1 RM" },
          { label: "Fresa", value: "105 cm" }
        ]
      },
      {
        title: "Diesse 83 — Lombardini 15LD225",
        detail: "10cv diesel, due marce + retromarcia",
        img: "https://diesseagri.it/wp-content/uploads/2025/05/115-600x810.jpg",
        specs: [
          { label: "Motore", value: "Lombardini 15LD225 Diesel" },
          { label: "Potenza", value: "10 HP" },
          { label: "Cambio", value: "2 Marce AV + 1 RM" },
          { label: "Avviamento", value: "A strappo autoavvolgente" }
        ]
      },
      {
        title: "Pasbo G94 Diesel",
        detail: "Loncin diesel 10cv, 3 marce, avviamento elettrico",
        img: "https://www.pezzellaagrigarden.it/wp-content/uploads/2021/06/G94-600x600.jpg",
        specs: [
          { label: "Motore", value: "Loncin Diesel 10 HP" },
          { label: "Avviamento", value: "Elettrico (con batteria)" },
          { label: "Cambio", value: "3 Marce AV + 1 RM" },
          { label: "Fresa", value: "105 - 115 cm" }
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
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi" },
          { label: "Cilindrata", value: "442 cc" },
          { label: "Potenza", value: "10.9 HP (8 kW)" },
          { label: "Albero", value: "Conico" }
        ]
      },
      {
        title: "Honda GX390",
        detail: "Benzina 4T, il classico professionale",
        img: "https://www.honda-engines-eu.com/files/images/1000x1000xffffff/gx390-600x600px.jpg",
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi OHV" },
          { label: "Cilindrata", value: "389 cc" },
          { label: "Potenza", value: "11.7 HP (8.7 kW) a 3600 rpm" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
      {
        title: "Loncin 270cc 4T benzina",
        detail: "9 HP, albero cilindrico",
        img: "https://cdn.manomano.com/loncin-g270f-tq-motore-a-scoppio-avviamento-manuale-9-hp-albero-cilindrico-254-mm-4-tempi-benzina-P-5179128-19286737_1.jpg",
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi" },
          { label: "Cilindrata", value: "270 cc" },
          { label: "Potenza", value: "9 HP" },
          { label: "Albero", value: "Cilindrico 25.4 mm" }
        ]
      },
      {
        title: "Motore di importazione 10cv",
        detail: "Diesel, controllo qualità e ricambi garantiti",
        img: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e5/e552dc49-69a2-45a5-bc48-dc4bd67228aa?rule=fullscreen-1x-auto",
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi" },
          { label: "Cilindrata", value: "406/418 cc" },
          { label: "Potenza", value: "10 HP" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
      {
        title: "Hatz 10cv diesel",
        detail: "Motorenfabrik Ruhstorf, qualità tedesca",
        img: "https://ormaquinarias.com.pe/wp-content/uploads/2025/03/motor-hatz-diesel-1B50E-frontal-560x560.jpg",
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi (Serie 1B)" },
          { label: "Potenza", value: "10.9 HP max" },
          { label: "Qualità", value: "Heavy Duty Industriale" },
          { label: "Costruzione", value: "Alluminio pressofuso" }
        ]
      },
      {
        title: "Acme Lombardini ACT340",
        detail: "11cv, 340cc benzina",
        img: "https://img.ricardostatic.ch/images/9623a174-bd53-434e-a9f4-a5b1bf984c6a/t_1800x1350/benzinmotor-acme-act-340-ohc-zu-aebi-hc44-bcs-lombardini",
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi OHC" },
          { label: "Cilindrata", value: "340 cc" },
          { label: "Potenza", value: "11 HP" },
          { label: "Albero", value: "Conico" }
        ]
      },
      {
        title: "Lombardini LGA280 10cv",
        detail: "Benzina, per motocoltivatori",
        img: "https://deltaservicedieselengines.com/203-thickbox_default/motore-lombardini-lga-280.jpg",
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi" },
          { label: "Cilindrata", value: "280 cc" },
          { label: "Potenza", value: "9 - 10 HP" },
          { label: "Distribuzione", value: "Valvole in testa (OHV)" }
        ]
      },
      {
        title: "Loncin 14cv diesel 186F",
        detail: "Monocilindrico raffreddato ad aria",
        img: "https://www.crossfer.de/WebRoot/SageSMB/Shops/crossfer/650C/0870/BC35/272E/3258/0A0C/05BC/A34B/Gallerie_04.jpg",
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi 186F" },
          { label: "Cilindrata", value: "406 cc" },
          { label: "Potenza Nominale", value: "10 HP (Classe 14HP)" },
          { label: "Iniezione", value: "Diretta" }
        ]
      },
      {
        title: "Total 5.5cv cilindrico",
        detail: "Benzina, entry level affidabile",
        img: "https://www.picclickimg.com/rHsAAeSw~MVo0rIj/55-HP-41-KW-Motore-a-benzina.webp",
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi" },
          { label: "Cilindrata", value: "163 cc" },
          { label: "Potenza", value: "5.5 HP" },
          { label: "Albero", value: "Cilindrico" }
        ]
      },
      {
        title: "Loncin 6.5cv",
        detail: "Alberi cilindrici e conici disponibili",
        img: "https://cdn.manomano.com/images/images_products/5179128/P/157820649_1.jpg",
        specs: [
          { label: "Tipo", value: "Benzina 4 Tempi G200F" },
          { label: "Cilindrata", value: "196 cc" },
          { label: "Potenza", value: "6.5 HP" },
          { label: "Coppia Max", value: "12.4 Nm" }
        ]
      },
      {
        title: "Lombardini 25LD 330",
        detail: "Diesel bicilindrico",
        img: "https://deltaservicedieselengines.com/64-large_default/motore-lombardini-25ld-3302.jpg",
        specs: [
          { label: "Tipo", value: "Diesel 4 Tempi Bicilindrico" },
          { label: "Cilindrata", value: "654 cc" },
          { label: "Potenza", value: "16.3 HP (12 kW)" },
          { label: "Raffreddamento", value: "Ad aria" }
        ]
      },
      {
        title: "Honda iGX440 STR",
        detail: "Benzina con centralina elettronica",
        img: "https://www.honda.sk/content/dam/local/slovakia/industrial/engines/images/iGX440%20large.png/_jcr_content/renditions/c2.png",
        specs: [
          { label: "Tipo", value: "Benzina Iniezione Elettronica (EFI)" },
          { label: "Cilindrata", value: "440 cc" },
          { label: "Potenza", value: "12.7 HP a 3600 rpm" },
          { label: "Tecnologia", value: "STR (Self Tuning Regulator)" }
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
        specs: [
          { label: "Larghezza lavoro", value: "50 cm" },
          { label: "Motore Consigliato", value: "Honda o Emak (fino a 5.8 HP)" },
          { label: "Gruppo di taglio", value: "Rotore con 26 martelli a 'Y'" },
          { label: "Trasmissione", value: "3 Marce AV + 1 RM" }
        ]
      },
      {
        title: "Bertolini 65 — Emak K1100H",
        price: 3599,
        listPrice: 4630,
        img: "https://www.fm2magni.com/memo/360-large_default/trinciatutto-bertolini-bts-65-emak.jpg",
        specs: [
          { label: "Larghezza lavoro", value: "65 cm" },
          { label: "Motore", value: "Emak K 1100 H (302 cc)" },
          { label: "Gruppo di taglio", value: "Rotore con 38 martelli a 'Y'" },
          { label: "Trasmissione", value: "3 Marce AV + 1 RM" }
        ]
      },
      {
        title: "Bertolini 65 — Honda GX340 OHV",
        price: 3999,
        listPrice: 5163,
        img: "https://www.fm2magni.com/memo/361-home_default/trinciatutto-bertolini-bts-65-honda.jpg",
        specs: [
          { label: "Larghezza lavoro", value: "65 cm" },
          { label: "Motore", value: "Honda GX 340 OHV (389 cc)" },
          { label: "Gruppo di taglio", value: "Rotore con 38 martelli a 'Y'" },
          { label: "Trasmissione", value: "3 Marce AV + 1 RM" }
        ]
      },
      {
        title: "Bertolini BTS 80 — Honda GX340",
        detail: "Con ruote",
        price: 4899,
        listPrice: 6250,
        img: "https://www.fm2magni.com/memo/362-large_default/trinciatutto-bertolini-bts-80.jpg",
        specs: [
          { label: "Larghezza lavoro", value: "80 cm" },
          { label: "Motore", value: "Honda GX 340 (389 cc)" },
          { label: "Gruppo di taglio", value: "Rotore con 46 martelli a 'Y'" },
          { label: "Sterzo", value: "A frizioni indipendenti e bloccaggio ruote" }
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
        specs: [
          { label: "Larghezza di taglio", value: "135 - 150 cm (con ali laterali)" },
          { label: "Motore", value: "Kawasaki FS600V Bicilindrico" },
          { label: "Trasmissione", value: "Idrostatica (Trazione 2WD)" },
          { label: "Caratteristica", value: "Taglio sottofila e interceppo" }
        ]
      },
      {
        title: "Orec RM882",
        price: 9990,
        listPrice: 11821.8,
        img: "https://www.duedistore.com/wp-content/uploads/2021/03/Orec-Rabbit-RM882-scaled-1.jpg",
        specs: [
          { label: "Larghezza di taglio", value: "88 cm" },
          { label: "Motore", value: "Kawasaki FS481V (603 cc)" },
          { label: "Trasmissione", value: "Idrostatica" },
          { label: "Bloccaggio differenziale", value: "Di serie" }
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
        specs: [
          { label: "Larghezza di lavoro", value: "80 cm" },
          { label: "Motore", value: "Honda GX340 (389 cc)" },
          { label: "Trazione", value: "Cingoli in gomma" },
          { label: "Gruppo di taglio", value: "Rotore con 46 flagelli" }
        ]
      },
      {
        title: "Orec HRC673",
        price: 6790,
        listPrice: 7747,
        img: "https://www.fiaba.net/wp-content/uploads/2019/03/Orec-trinciasarmenti-professionale-a-cingoli-HRC673-dsx-1536x1024.jpg",
        specs: [
          { label: "Larghezza di lavoro", value: "65 cm" },
          { label: "Motore", value: "Honda GX270 (270 cc)" },
          { label: "Trazione", value: "Cingoli in gomma" },
          { label: "Gruppo di taglio", value: "Rotore con 38 flagelli" }
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
        specs: [
          { label: "Cilindrata", value: "27.2 cc (Motore 2-MIX)" },
          { label: "Potenza", value: "1.2 HP" },
          { label: "Impugnatura", value: "Circolare (R)" },
          { label: "Peso", value: "4.8 kg" }
        ]
      },
      {
        title: "Stihl FS120",
        img: "https://www.memigavi.it/wp-content/uploads/2020/04/121.jpg",
        specs: [
          { label: "Cilindrata", value: "30.8 cc" },
          { label: "Potenza", value: "1.8 HP" },
          { label: "Impugnatura", value: "A manubrio" },
          { label: "Peso", value: "6.3 kg" }
        ]
      },
      {
        title: "Stihl FS220",
        img: "https://www.casadelcuscinettomasi.it/wp-content/uploads/2025/03/STIHL_FS_240R_Casa_del_cuscinetto_786621.jpg",
        specs: [
          { label: "Cilindrata", value: "35.2 cc" },
          { label: "Potenza", value: "2.3 HP" },
          { label: "Utilizzo", value: "Intensivo / Agricolo" },
          { label: "Peso", value: "7.7 kg" }
        ]
      },
      {
        title: "Kawasaki TJ45E — asta MGF DK5100L",
        detail: "Assemblato in officina",
        img: "https://newgardenstore.eu/61687-large_default/Motore-completo-2-tempi-decespugliatore-TJ45E-KAWASAKI-45cc-SOSTITUTIVO.jpg",
        specs: [
          { label: "Cilindrata", value: "45.4 cc (2 Tempi)" },
          { label: "Potenza", value: "1.9 HP" },
          { label: "Asta", value: "MGF DK5100L Antivibrante" },
          { label: "Coppia conica", value: "Rinforzata professionale" }
        ]
      },
      {
        title: "Kawasaki TJ53E — asta MGF DK5100L",
        detail: "Assemblato in officina",
        img: "https://www.bazargiusto.it/wp-content/uploads/2025/01/motore-completo-di-ricambio-per-decespugliatore-kawasaki-tj53e-1.jpg",
        specs: [
          { label: "Cilindrata", value: "53.2 cc (2 Tempi)" },
          { label: "Potenza", value: "2.7 HP" },
          { label: "Asta", value: "MGF Antivibrante 28 mm" },
          { label: "Peso", value: "8.5 kg" }
        ]
      },
      {
        title: "Kawasaki TJ53E — asta Honda MGF DH500V",
        detail: "Assemblato in officina",
        img: "https://www.fiaba.net/wp-content/uploads/2019/02/mgf-decespugliatore-kawasaki-honda-asta-interna-esterna.jpg",
        specs: [
          { label: "Cilindrata", value: "53.2 cc (2 Tempi)" },
          { label: "Potenza", value: "2.7 HP" },
          { label: "Asta", value: "Honda MGF DH500V Alta gamma" },
          { label: "Vibrazioni", value: "Ridotte al minimo" }
        ]
      },
      {
        title: "Honda GX50 — asta AMA KD3 450X",
        detail: "4 tempi, assemblato in officina",
        img: "https://www.agricolbio.it/shop/3362-large_default/decespugliatore-a-impugnatura-singola-con-motore-4-tempi-honda-gx50-ohc-da-479-cc-asta-28-mm.jpg",
        specs: [
          { label: "Motore", value: "Honda 4 Tempi OHC" },
          { label: "Cilindrata", value: "47.9 cc" },
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
        title: "Snapper MJ102 — B&S 7220",
        img: "https://www.centroverderovigo.com/wp-content/uploads/2025/01/snapper-trattorino-rpx102-tagliaerba-raccolta-ventrale-fdx1-000-768x596.jpg",
        specs: [
          { label: "Motore", value: "Briggs & Stratton Intek 7220 V-Twin" },
          { label: "Larghezza taglio", value: "102 cm (2 lame)" },
          { label: "Trasmissione", value: "Idrostatica" },
          { label: "Cesto raccolta", value: "300 litri" }
        ]
      },
      {
        title: "Alpina AT4 84 — Stiga ST350",
        img: "https://hidrotecnoshop.it/wp-content/uploads/2022/10/4691a6726a931ba787ab53bcc3b52ca31a889b6e_AT484A_2T2000404A22_full01.jpg.jpg",
        specs: [
          { label: "Motore", value: "Stiga ST 350 (352 cc)" },
          { label: "Larghezza taglio", value: "84 cm" },
          { label: "Trasmissione", value: "Meccanica (5 AV + 1 RM)" },
          { label: "Cesto raccolta", value: "200 litri" }
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
        specs: [
          { label: "Motore", value: "Loncin 196 cc (4 Tempi)" },
          { label: "Trazione", value: "Trazionato con 3 marce" },
          { label: "Apparato di taglio", value: "Testina a fili spessi" },
          { label: "Ruote", value: "Agricole pneumatiche" }
        ]
      },
      {
        title: "Honda GCVx200 KB60",
        img: "https://www.farmaciagricola.com/images/prodotti/ama/Rasaerba_TRX_531H_Honda_GCVx200/rasaerba_TRX_531_Honda_AMA.jpg",
        specs: [
          { label: "Motore", value: "Honda GCVx200 (201 cc)" },
          { label: "Larghezza lavoro", value: "60 cm" },
          { label: "Trazione", value: "Posteriore" },
          { label: "Sistema di taglio", value: "A doppio filo da 4mm" }
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
        specs: [
          { label: "Cilindrata", value: "31.8 cc" },
          { label: "Potenza", value: "1.9 HP" },
          { label: "Lunghezza barra", value: "30 - 35 cm" },
          { label: "Peso", value: "3.3 kg" }
        ]
      },
      { 
        title: "Stihl MS151", 
        img: "https://www.stihl.it/content/dam/stihl/media/pim/10964.jpg",
        specs: [
          { label: "Cilindrata", value: "23.6 cc" },
          { label: "Potenza", value: "1.5 HP" },
          { label: "Lunghezza barra", value: "25 cm (Carving)" },
          { label: "Peso", value: "2.6 kg (leggerissima)" }
        ]
      },
      {
        title: "Stihl MS194T",
        detail: "Da potatura",
        img: "https://www.faddagianni.it/5646-large_default/motosega-da-potatura-stihl-ms-194-t.jpg",
        specs: [
          { label: "Tipo", value: "Da potatura (impugnatura superiore)" },
          { label: "Cilindrata", value: "31.8 cc" },
          { label: "Potenza", value: "1.9 HP" },
          { label: "Peso", value: "3.3 kg" }
        ]
      },
      {
        title: "Stihl MS271",
        img: "https://www.stihl.it/content/dam/stihl/mam/modell-landscape/c244ac07adfd4a6eb2db8d11b04caf7d.jpg",
        specs: [
          { label: "Cilindrata", value: "50.2 cc" },
          { label: "Potenza", value: "3.5 HP" },
          { label: "Lunghezza barra", value: "40 - 45 cm" },
          { label: "Uso", value: "Agricoltura e giardinaggio" }
        ]
      },
      { 
        title: "Stihl MS311", 
        img: "https://www.giordano-cairo.com/6142/motosega-stihl-ms-311.jpg",
        specs: [
          { label: "Cilindrata", value: "59.0 cc" },
          { label: "Potenza", value: "4.2 HP" },
          { label: "Lunghezza barra", value: "45 - 50 cm" },
          { label: "Peso", value: "6.2 kg" }
        ]
      },
      { 
        title: "Stihl MS391", 
        img: "https://www.celanisrl.com/wp-content/uploads/2022/10/MS-391-1.jpg",
        specs: [
          { label: "Cilindrata", value: "64.1 cc" },
          { label: "Potenza", value: "4.5 HP" },
          { label: "Lunghezza barra", value: "45 - 50 cm" },
          { label: "Ideale per", value: "Abbattimento alberi" }
        ]
      },
      {
        title: "Motosega da taglio lama 25\" — GGP Italia",
        price: 450,
        img: "https://tradeshopitalia.com/60044-large_default/motosega-potatore-25cc-a-scoppio-benzina-lama-25-cm-per-potatura-professionale.jpg",
        specs: [
          { label: "Cilindrata", value: "25.4 cc" },
          { label: "Potenza", value: "1.2 HP" },
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
        specs: [
          { label: "Cilindrata", value: "27.2 cc" },
          { label: "Lunghezza lama", value: "60 cm" },
          { label: "Tipo lama", value: "Bilama per taglio fine (R)" },
          { label: "Peso", value: "4.7 kg" }
        ]
      },
      { 
        title: "Stihl HS82R", 
        img: "https://www.verdepro.it/public/prodotti/HS82R.jpg",
        specs: [
          { label: "Cilindrata", value: "22.7 cc" },
          { label: "Lunghezza lama", value: "60 - 75 cm" },
          { label: "Impugnatura", value: "Orientabile multifunzione" },
          { label: "Destinazione", value: "Uso professionale" }
        ]
      },
      {
        title: "Kawasaki TJ23V KA600D",
        detail: "Monolama",
        img: "https://www.metautensili.it/12842-thickbox_default/kawasaki-tagliasiepe-ka600d-tj23v.jpg",
        specs: [
          { label: "Motore", value: "Kawasaki TJ23V (22.5 cc)" },
          { label: "Lunghezza lama", value: "60 cm" },
          { label: "Configurazione", value: "Monolama" },
          { label: "Impugnatura", value: "Fissa" }
        ]
      },
      {
        title: "Kawasaki TJ23V KA750S",
        detail: "Bilama girevole 75cm",
        img: "https://www.agricolbio.it/shop/5950-large_default/tagliasiepi-a-scoppio-2-tempi-mod-mhd-750-tk-lama-75-cm-girevole-con-motore-kawasaki-serie-maori-professional-tosasiepi.jpg",
        specs: [
          { label: "Motore", value: "Kawasaki TJ23V (22.5 cc)" },
          { label: "Lunghezza lama", value: "75 cm" },
          { label: "Configurazione", value: "Bilama" },
          { label: "Impugnatura", value: "Girevole a 180°" }
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
        specs: [
          { label: "Cilindrata", value: "27.2 cc" },
          { label: "Portata aria", value: "730 m³/h" },
          { label: "Velocità aria", value: "71 m/s" },
          { label: "Peso", value: "4.1 kg" }
        ]
      },
      {
        title: "Maruyama GK300",
        img: "https://www.metautensili.it/12856-large_default/maruyama-soffiatore-gk300b.jpg",
        specs: [
          { label: "Cilindrata", value: "30.1 cc" },
          { label: "Portata aria", value: "13 m³/min" },
          { label: "Utilizzo", value: "Professionale" },
          { label: "Peso", value: "4.3 kg" }
        ]
      },
    ],
  },
];

export const formatPrice = (n) =>
  n == null
    ? "Su preventivo"
    : n.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
