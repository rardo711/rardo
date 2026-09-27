type Props = {
  size?: number;
  label?: string;
};

export default function Logo({
  size = 38,
  label = "GC — Gerardo Castaneda",
}: Props) {
  return (
    <img
      src="/gc-mark.png"
      alt={label}
      width={Math.round(size * 1.43)}
      height={size}
      className="block object-contain"
    />
  );
}
