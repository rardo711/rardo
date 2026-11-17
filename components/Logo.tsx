type Props = {
  size?: number;
  className?: string;
};

/**
 * Crisp inline vector GC monogram — replaces the low-res raster PNG.
 * Uses `currentColor` so it adapts cleanly across light paper and dark coal surfaces.
 */
export default function Logo({ size = 34, className = "" }: Props) {
  const width = Math.round(size * 1.42);
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 142 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`block shrink-0 ${className}`.trim()}
    >
      {/* Outer G circular arc + angled horizontal crossbar */}
      <path
        d="M74.5 23.5C66.8 14.5 55.3 9 42.5 9C19.6 9 1 27.6 1 50.5C1 73.4 19.6 92 42.5 92C64.2 92 81.9 75.5 83.8 54.3L84 47.5H44.5L37.5 57.5H72.2C69.1 71.2 57 81.2 42.5 81.2C25.5 81.2 11.8 67.5 11.8 50.5C11.8 33.5 25.5 19.8 42.5 19.8C52.4 19.8 61.2 24.5 66.8 31.8L74.5 23.5Z"
        fill="currentColor"
      />
      {/* Interlocking C upper and lower arcs */}
      <path
        d="M78.5 32.2C84.2 21.2 95.7 13.8 109 13.8C120.3 13.8 130.4 19.2 136.7 27.6L129.8 33.5C125.1 27 117.5 22.8 109 22.8C99 22.8 90.3 28.5 86.1 36.8L78.5 32.2Z"
        fill="currentColor"
      />
      <path
        d="M84.8 75.8C91.1 83.4 100.5 88.2 111 88.2C121.8 88.2 131.5 83.2 137.7 75.3L130.8 69.5C126.2 75.4 119 79.2 111 79.2C102.9 79.2 95.6 75.4 91 69.5L84.8 75.8Z"
        fill="currentColor"
      />
      {/* Architectural registration tick */}
      <circle cx="137" cy="50.5" r="2.2" fill="#a84d1d" />
    </svg>
  );
}
