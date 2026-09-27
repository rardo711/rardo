type Props = {
  size?: number;
  ink?: string;
  accent?: string;
  label?: string;
};

export default function Logo({
  size = 40,
  ink = "#221a13",
  accent = "#a84d1d",
  label = "Gerardo Castaneda — Glennville, GA",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      role="img"
      aria-label={label}
      className="block"
    >
      <defs>
        <path id="gc-arc-top" d="M 60,200 A 140,140 0 0 1 340,200" fill="none" />
        <path id="gc-arc-bottom" d="M 44,200 A 156,156 0 0 0 356,200" fill="none" />
      </defs>
      <circle cx="200" cy="200" r="190" fill="none" stroke={ink} strokeWidth="7" />
      <circle cx="200" cy="200" r="172" fill="none" stroke={ink} strokeWidth="2" />
      <text
        fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
        fontWeight={600}
        fontSize={24}
        letterSpacing={4}
        fill={ink}
      >
        <textPath href="#gc-arc-top" startOffset="50%" textAnchor="middle">
          GERARDO CASTANEDA
        </textPath>
      </text>
      <text
        fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
        fontWeight={600}
        fontSize={24}
        letterSpacing={4}
        fill={ink}
      >
        <textPath href="#gc-arc-bottom" startOffset="50%" textAnchor="middle">
          GLENNVILLE, GA
        </textPath>
      </text>
      <g fill={accent}>
        <path d="M 52,191 l 9,9 -9,9 -9,-9 Z" />
        <path d="M 348,191 l 9,9 -9,9 -9,-9 Z" />
      </g>
      <text
        x="200"
        y="238"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
        fontWeight={600}
        fontSize={118}
      >
        <tspan fill={ink}>G</tspan>
        <tspan dx={-18} dy={0} fontSize={82} fill={accent}>
          C
        </tspan>
      </text>
    </svg>
  );
}
