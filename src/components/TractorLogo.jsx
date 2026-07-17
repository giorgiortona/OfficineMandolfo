// Logo Officine Mandolfo: rivisitazione a tratto del trattore dell'insegna.
// Solo stroke su currentColor, così si può animare il "disegno" (dashoffset)
// e ricolorare via CSS.
export default function TractorLogo({ className }) {
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
    </svg>
  );
}
