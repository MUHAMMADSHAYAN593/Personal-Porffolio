export default function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
    >
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb--primary" />
      <div className="ambient-orb ambient-orb--secondary" />
      <div className="ambient-orb ambient-orb--center" />
    </div>
  );
}
