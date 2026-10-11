const values = [
  { icon: "🌱", title: "Sourced with care", text: "Direct-trade beans and local produce, always seasonal." },
  { icon: "🔥", title: "Roasted in-house", text: "Small batches, roasted weekly so every cup tastes fresh." },
  { icon: "🥖", title: "Baked every morning", text: "Our bakers start at 4am so the croissants are warm at 7." },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__text">
          <p className="eyebrow">Our story</p>
          <h2>A little corner for slow mornings</h2>
          <p>
            Ember &amp; Oak started with a simple idea: a café should feel like
            someone's living room. We built ours from reclaimed oak, warm light,
            and a coffee bar that smells like toasted sugar.
          </p>
          <p>
            Whether you're grabbing a quick espresso or settling in for the
            afternoon with a book, there's always a seat and a fresh pot waiting.
          </p>
        </div>

        <ul className="about__values">
          {values.map((v) => (
            <li key={v.title} className="card">
              <span className="card__icon" aria-hidden="true">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
