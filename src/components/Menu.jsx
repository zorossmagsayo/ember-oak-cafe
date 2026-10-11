import { useState } from "react";
import { menu } from "../data.js";

const categories = Object.keys(menu);

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="section section--dark">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">What we serve</p>
          <h2>The menu</h2>
        </div>

        <div className="tabs" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={`tab ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="menu__list" role="tabpanel" key={active}>
          {menu[active].map((item) => (
            <li key={item.name} className="menu__item">
              <div className="menu__row">
                <h3>
                  {item.name}
                  {item.tag && <span className="badge">{item.tag}</span>}
                </h3>
                <span className="menu__dots" aria-hidden="true" />
                <span className="menu__price">${item.price.toFixed(2)}</span>
              </div>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>

        <p className="menu__note">
          Oat, almond, and soy milk available. Please tell us about any allergies.
        </p>
      </div>
    </section>
  );
}
