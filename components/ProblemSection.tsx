const problems = [
  {
    num: '01',
    title: 'Monetizing feels like a second job',
    body: "You're posting consistently and growing — but figuring out how to actually charge for it eats the hours you don't have.",
  },
  {
    num: '02',
    title: 'Creators with less are earning more',
    body: "You've seen smaller accounts in your niche pulling in real income. You know the gap exists. You just can't see exactly where it is.",
  },
  {
    num: '03',
    title: "The generic advice doesn't fit",
    body: '"Launch a course." "Just do more brand deals." That\'s not your audience or your style — and you shouldn\'t have to become a different creator to get paid.',
  },
];

export default function ProblemSection() {
  return (
    <section className="problem">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Sound familiar?</span>
          <h2>You&apos;re not under-performing. You&apos;re under-supported.</h2>
          <p>
            You&apos;re big enough that brand deals trickle in, but too small for an agency
            to call you back. So you&apos;re doing content, deals, pricing, and admin —
            alone, on top of everything else.
          </p>
        </div>
        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.num} className="problem-card">
              <span className="num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
