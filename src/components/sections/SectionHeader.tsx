export default function SectionHeader({ label }: { label: string }) {
  return (
    <>
      <h2 className="section-eyebrow">{label}</h2>
      <div className="scallop-divider" />
    </>
  );
}
