type Props = {
  size?: number;
  ring?: string;
  gFill?: string;
  cFill?: string;
  dotFill?: string;
  label?: string;
};

export default function Logo({
  size = 38,
  ring = "#221a13",
  gFill = "#221a13",
  cFill = "#a84d1d",
  dotFill = "#a84d1d",
  label = "GC — Gerardo Castaneda",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={label}
      className="block"
    >
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke={ring}
        strokeWidth="5"
      />
      <circle cx="100" cy="12" r="8" fill={dotFill} />
      <text
        x="100"
        y="123"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
        fontWeight={600}
        fontSize={72}
      >
        <tspan fill={gFill}>G</tspan>
        <tspan dx={-8} dy={0} fontSize={50} fill={cFill}>
          C
        </tspan>
      </text>
    </svg>
  );
}
