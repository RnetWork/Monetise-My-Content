const steps = [
  {
    tag: 'Step 1',
    title: 'The audit',
    body: "We dig into your audience, your engagement, and your current income — and show you, in plain numbers, what you're realistically leaving on the table.",
  },
  {
    tag: 'Step 2',
    title: 'Your revenue plan',
    body: "A monetization plan built around your niche and how you actually create — not a template. We tell you exactly which offers fit you and which don't.",
  },
  {
    tag: 'Step 3',
    title: 'We build it, behind the scenes',
    body: "We set up the offers, run the brand outreach, handle pricing and negotiation, and put the systems in place — quietly, in the background, while you keep posting.",
  },
  {
    tag: 'Step 4',
    title: 'We grow it with you',
    body: "Monthly check-ins to review what's working, adjust what's not, and scale your income alongside your audience — with no extra work added to your plate.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">How it works</span>
          <h2>We run the business side. You stay the creator.</h2>
          <p>
            No courses to build, no DMs to chase. We embed ourselves as the team
            behind your monetization, start to finish.
          </p>
        </div>
        <div className="how-list">
          {steps.map((s) => (
            <div key={s.tag} className="how-row">
              <div className="how-tag">{s.tag}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
