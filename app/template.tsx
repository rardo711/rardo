export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="route-curtain" aria-hidden>
        <span className="route-curtain-edge" />
      </div>
      {children}
    </>
  );
}
