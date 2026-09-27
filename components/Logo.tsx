type Props = {
  size?: number;
  gFill?: string;
  cFill?: string;
  label?: string;
};

export default function Logo({
  size = 36,
  gFill = "#221a13",
  cFill = "#a84d1d",
  label = "GC — Gerardo Castaneda",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 124 100"
      role="img"
      aria-label={label}
      className="block"
    >
      <text
        x="8"
        y="82"
        fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
        fontWeight={600}
        fontSize={86}
      >
        <tspan fill={gFill}>G</tspan>
        <tspan dx={-9} dy={0} fontSize={60} fill={cFill}>
          C
        </tspan>
      </text>
    </svg>
  );
}
