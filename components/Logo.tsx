type Props = {
  size?: number;
};

/** Decorative: the link around it carries the accessible name. */
export default function Logo({ size = 38 }: Props) {
  return (
    <img
      src="/gc-mark.png"
      alt=""
      width={Math.round(size * 1.43)}
      height={size}
      className="block object-contain"
    />
  );
}
