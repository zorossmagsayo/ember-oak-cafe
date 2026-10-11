import { cafe } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">Neighborhood café · Est. 2019</p>
        <h1>{cafe.tagline}</h1>
        <p className="hero__lead">
          Small-batch coffee, pastries baked before sunrise, and plates made with
          ingredients from farms down the road. Pull up a chair.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn">
            See the menu
          </a>
          <a href="#reserve" className="btn btn--ghost">
            Reserve a table
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        ↓
      </div>
    </section>
  );
}
