// Logo Officine Mandolfo: rivisitazione a tratto del trattore dell'insegna.
// Solo stroke su currentColor, così si può animare il "disegno" (dashoffset)
// e ricolorare via CSS.
// Con `animated` aggiunge raggi nelle ruote (per farle girare) e i fumi di
// scarico: serve solo al preloader, il marchio nelle altre sezioni resta pulito.
export default function TractorLogo({ className, animated = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* ruota posteriore */}
      <circle cx="27" cy="45" r="13.5" />
      <circle cx="27" cy="45" r="5" />
      {/* ruota anteriore */}
      <circle cx="75" cy="50" r="9" />
      <circle cx="75" cy="50" r="3" />
      {/* parafango sopra la ruota posteriore */}
      <path d="M13.5 45 A13.5 13.5 0 0 1 40.5 45" />
      {/* cofano fino alla ruota anteriore */}
      <path d="M40.5 43 V31 H59 L67 41 H75" />
      {/* telaio */}
      <path d="M40.5 49 H65" />
      {/* marmitta */}
      <path d="M47 31 V17 M44 17 H50" />
      {/* volante */}
      <path d="M34 31 L29 22 M25 22 H33" />
      {/* sedile */}
      <path d="M16 29 V23 M16 29 H24" />

      {animated && (
        <>
          {/* ruota posteriore: raggi + tassellatura, girano insieme */}
          <g className="tl-spokes tl-spokes-rear" strokeWidth="2.4">
            <path d="M33.5 45 H38.4" />
            <path d="M30.25 50.63 L32.7 54.87" />
            <path d="M23.75 50.63 L21.3 54.87" />
            <path d="M20.5 45 H15.6" />
            <path d="M23.75 39.37 L21.3 35.13" />
            <path d="M30.25 39.37 L32.7 35.13" />
            <circle
              className="tl-fx tl-tread"
              cx="27"
              cy="45"
              r="9.6"
              strokeWidth="2.6"
              strokeDasharray="3.2 4.34"
              opacity="0"
            />
          </g>
          <g className="tl-spokes tl-spokes-front" strokeWidth="2.2">
            <path d="M75 45.5 V42.5" />
            <path d="M75 54.5 V57.5" />
            <path d="M70.5 50 H67.5" />
            <path d="M79.5 50 H82.5" />
          </g>
          {/* fumo dal tubo di scarico */}
          <g className="tl-fx" fill="currentColor" stroke="none">
            <circle className="tl-puff" cx="47" cy="13" r="3" opacity="0" />
            <circle className="tl-puff" cx="47" cy="13" r="2.4" opacity="0" />
            <circle className="tl-puff" cx="47" cy="13" r="2" opacity="0" />
          </g>
          {/* terra sollevata dalla ruota posteriore */}
          <g className="tl-fx tl-dirt" stroke="none">
            <circle className="tl-dust" cx="21" cy="57" r="4.6" opacity="0" />
            <circle className="tl-dust" cx="16.5" cy="58" r="6" opacity="0" />
            <circle className="tl-dust" cx="24.5" cy="56.5" r="3.4" opacity="0" />
            <circle className="tl-clod" cx="24" cy="57.5" r="1.5" opacity="0" />
            <circle className="tl-clod" cx="21" cy="58" r="1.1" opacity="0" />
            <circle className="tl-clod" cx="26" cy="58.5" r="1.8" opacity="0" />
            <circle className="tl-clod" cx="22.5" cy="56.5" r="0.9" opacity="0" />
            <circle className="tl-clod" cx="25" cy="59" r="1.3" opacity="0" />
          </g>
        </>
      )}
    </svg>
  );
}
