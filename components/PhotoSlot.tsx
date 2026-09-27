export default function PhotoSlot({
  ratio = "4 / 3",
  subject,
}: {
  ratio?: string;
  subject: string;
}) {
  return (
    <figure
      className="flex w-full flex-col items-center justify-center border border-dashed border-ink-soft/50 bg-wash px-6 py-10 text-center"
      style={{ aspectRatio: ratio }}
      aria-label={`Photo placeholder: ${subject}`}
    >
      <p className="font-tech text-[11px] uppercase tracking-[0.24em] text-ink-soft">
        Photograph
      </p>
      <p className="mt-3 max-w-xs font-display text-xl italic text-ink">
        {subject}
      </p>
      <p className="mt-3 font-tech text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        Your photo goes here
      </p>
    </figure>
  );
}
