/**
 * Septic Masters Red Man Mascot
 * A stylized technician/worker mascot in brand red (#BE2026)
 * Inspired by the mascot on the actual septic-masters.com website
 */
export function RedManMascot({ className = "", size = 220 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.55}
      viewBox="0 0 220 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Septic Masters technician mascot"
    >
      {/* Shadow under feet */}
      <ellipse cx="110" cy="334" rx="52" ry="6" fill="#000" opacity="0.12" />

      {/* === BODY / UNIFORM === */}
      {/* Torso - red uniform */}
      <rect x="72" y="138" width="76" height="100" rx="10" fill="#BE2026" />
      {/* Collar / neck area */}
      <rect x="97" y="136" width="26" height="16" rx="4" fill="#E8333A" />
      {/* Chest pocket */}
      <rect x="82" y="155" width="24" height="18" rx="4" fill="#A0181F" />
      <rect x="84" y="157" width="20" height="14" rx="3" fill="#BE2026" />
      {/* Pocket detail */}
      <rect x="90" y="160" width="8" height="2" rx="1" fill="#E8333A" />
      {/* Uniform logo patch */}
      <circle cx="130" cy="163" r="10" fill="#A0181F" />
      <text x="130" y="167" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">SM</text>

      {/* Belt */}
      <rect x="72" y="226" width="76" height="14" rx="3" fill="#1A1A1A" />
      {/* Belt buckle */}
      <rect x="102" y="228" width="16" height="10" rx="2" fill="#888" />
      <rect x="104" y="230" width="12" height="6" rx="1" fill="#BBB" />

      {/* === PANTS === */}
      {/* Left leg */}
      <rect x="72" y="238" width="34" height="82" rx="6" fill="#1A1A1A" />
      {/* Right leg */}
      <rect x="114" y="238" width="34" height="82" rx="6" fill="#1A1A1A" />
      {/* Leg seams */}
      <line x1="89" y1="240" x2="89" y2="316" stroke="#2A2A2A" strokeWidth="2" />
      <line x1="131" y1="240" x2="131" y2="316" stroke="#2A2A2A" strokeWidth="2" />

      {/* === BOOTS === */}
      {/* Left boot */}
      <rect x="68" y="310" width="42" height="22" rx="5" fill="#0D0D0D" />
      <rect x="65" y="324" width="48" height="10" rx="5" fill="#111" />
      {/* Right boot */}
      <rect x="110" y="310" width="42" height="22" rx="5" fill="#0D0D0D" />
      <rect x="107" y="324" width="48" height="10" rx="5" fill="#111" />

      {/* === LEFT ARM (holding wrench) === */}
      {/* Upper arm */}
      <rect x="42" y="142" width="32" height="16" rx="7" fill="#BE2026" transform="rotate(20 42 142)" />
      {/* Forearm */}
      <rect x="22" y="172" width="28" height="14" rx="6" fill="#BE2026" transform="rotate(-10 22 172)" />
      {/* Glove */}
      <ellipse cx="20" cy="196" rx="14" ry="11" fill="#D4A020" />
      {/* Wrench */}
      <rect x="5" y="190" width="6" height="32" rx="3" fill="#888" transform="rotate(-20 5 190)" />
      <ellipse cx="8" cy="189" rx="9" ry="7" fill="#999" transform="rotate(-20 8 189)" />
      <ellipse cx="8" cy="189" rx="5" ry="4" fill="#777" transform="rotate(-20 8 189)" />
      <ellipse cx="17" cy="214" rx="9" ry="7" fill="#999" transform="rotate(-20 17 214)" />
      <ellipse cx="17" cy="214" rx="5" ry="4" fill="#777" transform="rotate(-20 17 214)" />

      {/* === RIGHT ARM (pointing / waving) === */}
      {/* Upper arm */}
      <rect x="148" y="142" width="32" height="16" rx="7" fill="#BE2026" transform="rotate(-25 148 142)" />
      {/* Forearm */}
      <rect x="168" y="164" width="28" height="14" rx="6" fill="#BE2026" transform="rotate(10 168 164)" />
      {/* Glove */}
      <ellipse cx="200" cy="178" rx="14" ry="11" fill="#D4A020" transform="rotate(10 200 178)" />
      {/* Pointing fingers */}
      <rect x="205" y="165" width="5" height="20" rx="3" fill="#C8901A" transform="rotate(10 205 165)" />
      <rect x="212" y="168" width="5" height="16" rx="3" fill="#C8901A" transform="rotate(15 212 168)" />

      {/* === HEAD === */}
      {/* Neck */}
      <rect x="101" y="108" width="18" height="20" rx="5" fill="#D4956A" />
      {/* Head / face */}
      <ellipse cx="110" cy="90" rx="38" ry="40" fill="#D4956A" />
      {/* Ear left */}
      <ellipse cx="72" cy="90" rx="7" ry="9" fill="#C4855A" />
      <ellipse cx="73" cy="90" rx="4" ry="6" fill="#D4956A" />
      {/* Ear right */}
      <ellipse cx="148" cy="90" rx="7" ry="9" fill="#C4855A" />
      <ellipse cx="147" cy="90" rx="4" ry="6" fill="#D4956A" />

      {/* === FACE === */}
      {/* Eyes */}
      <ellipse cx="96" cy="84" rx="7" ry="8" fill="white" />
      <ellipse cx="124" cy="84" rx="7" ry="8" fill="white" />
      <ellipse cx="97" cy="85" rx="5" ry="6" fill="#1A3A6E" />
      <ellipse cx="125" cy="85" rx="5" ry="6" fill="#1A3A6E" />
      <ellipse cx="98" cy="84" rx="3" ry="4" fill="#0A0A0A" />
      <ellipse cx="126" cy="84" rx="3" ry="4" fill="#0A0A0A" />
      {/* Eye shine */}
      <ellipse cx="100" cy="82" rx="1.5" ry="2" fill="white" />
      <ellipse cx="128" cy="82" rx="1.5" ry="2" fill="white" />
      {/* Eyebrows */}
      <path d="M88 74 Q96 70 104 74" stroke="#2A1A0E" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M116 74 Q124 70 132 74" stroke="#2A1A0E" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Nose */}
      <ellipse cx="110" cy="96" rx="5" ry="4" fill="#C4855A" />
      {/* Smile */}
      <path d="M95 108 Q110 120 125 108" stroke="#2A1A0E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Teeth */}
      <path d="M99 110 Q110 120 121 110" fill="white" />
      {/* Cheeks */}
      <ellipse cx="87" cy="102" rx="8" ry="5" fill="#E07070" opacity="0.35" />
      <ellipse cx="133" cy="102" rx="8" ry="5" fill="#E07070" opacity="0.35" />

      {/* === HARD HAT === */}
      {/* Brim */}
      <ellipse cx="110" cy="56" rx="46" ry="8" fill="#BE2026" />
      {/* Crown */}
      <path d="M68 56 Q66 24 110 20 Q154 24 152 56 Z" fill="#BE2026" />
      {/* Hat band / stripe */}
      <path d="M68 56 Q68 50 110 48 Q152 50 152 56" fill="#A0181F" />
      {/* Hat logo */}
      <ellipse cx="110" cy="36" rx="14" ry="10" fill="#A0181F" />
      <text x="110" y="40" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">SM</text>
      {/* Hat highlight */}
      <path d="M85 30 Q100 22 120 28" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25" />

      {/* === TOOL BAG on hip === */}
      <rect x="148" y="210" width="26" height="30" rx="5" fill="#8B5E3C" />
      <rect x="150" y="212" width="22" height="8" rx="3" fill="#7A4F2E" />
      {/* Tool straps */}
      <line x1="155" y1="208" x2="155" y2="212" stroke="#4A3020" strokeWidth="2" />
      <line x1="169" y1="208" x2="169" y2="212" stroke="#4A3020" strokeWidth="2" />
      {/* Screwdriver in bag */}
      <rect x="158" y="200" width="4" height="16" rx="2" fill="#AAA" />
      <rect x="157" y="196" width="6" height="6" rx="1" fill="#E8B800" />
    </svg>
  );
}
