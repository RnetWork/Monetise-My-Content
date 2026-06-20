const yesItems = [
  'You have 5K–100K followers with genuine engagement, not bought numbers',
  'You post consistently and have a clear niche people trust you on',
  "You're earning little or nothing from an audience that clearly likes you",
  "You'd rather create than spend hours on pricing, pitching, and admin",
];

const noItems = [
  "You're under 5K followers and still finding your niche",
  "You already have a full monetization system that's working well",
  'You want someone else to write your content or post on your behalf',
  "You're looking for a quick one-time payout, not an ongoing partner",
];

export default function FitSection() {
  return (
    <section className="fit" id="fit">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Is this you?</span>
          <h2>Built for a very specific kind of creator</h2>
        </div>
        <div className="fit-grid">
          <div className="fit-card yes">
            <h3><span className="fit-dot" />This is a fit if</h3>
            <ul>
              {yesItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="fit-card no">
            <h3><span className="fit-dot" />Probably not yet if</h3>
            <ul>
              {noItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
