const niches = [
  'Lifestyle', 'Fitness', 'Finance', 'Education',
  'Beauty', 'Food', 'Tech', 'Parenting',
];

export default function NicheStrip() {
  return (
    <div className="niche-strip">
      <div className="wrap niche-strip-inner">
        {niches.map((n) => (
          <span key={n} className="niche-pill">{n}</span>
        ))}
      </div>
    </div>
  );
}
