import { useEffect, useState } from "react";
import { gallery } from "../data.js";

function Tile({ item, onOpen }) {
  const style = item.image
    ? { backgroundImage: `url(${item.image})` }
    : { backgroundImage: `linear-gradient(135deg, ${item.from}, ${item.to})` };

  return (
    <button
      className={`gallery__tile ${item.span ? `gallery__tile--${item.span}` : ""}`}
      style={style}
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.label}`}
    >
      {!item.image && <span className="gallery__emoji" aria-hidden="true">{item.emoji}</span>}
      <span className="gallery__label">{item.label}</span>
    </button>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Inside the café</p>
          <h2>A peek at the place</h2>
        </div>

        <div className="gallery">
          {gallery.map((g) => (
            <Tile key={g.id} item={g} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div
            className="lightbox__content"
            style={
              selected.image
                ? { backgroundImage: `url(${selected.image})` }
                : { backgroundImage: `linear-gradient(135deg, ${selected.from}, ${selected.to})` }
            }
            onClick={(e) => e.stopPropagation()}
          >
            {!selected.image && <span className="lightbox__emoji">{selected.emoji}</span>}
            <p>{selected.label}</p>
            <button className="lightbox__close" onClick={() => setSelected(null)} aria-label="Close">
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
