import { useEffect, useState } from "react";
import { testimonials } from "../data.js";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="section section--tint">
      <div className="container testimonials">
        <p className="eyebrow">Kind words</p>
        <blockquote key={i} className="testimonials__quote">
          “{t.quote}”
          <footer>— {t.name}</footer>
        </blockquote>
        <div className="testimonials__dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={idx === i ? "is-active" : ""}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
