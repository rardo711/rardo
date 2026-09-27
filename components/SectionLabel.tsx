export default function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-accent">
      <span className="mr-3 text-ink-soft">{index}</span>
      {children}
    </p>
  );
}
