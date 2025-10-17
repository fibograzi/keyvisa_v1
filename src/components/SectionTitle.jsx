export default function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="section py-12">
      <div className="max-w-3xl">
        {eyebrow && <div className="uppercase tracking-widest text-xs text-black/50 mb-2">{eyebrow}</div>}
        <h2 className="font-heading text-3xl sm:text-4xl leading-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-black/70">{subtitle}</p>}
      </div>
    </div>
  );
}
