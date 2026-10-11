import { useEffect, useState } from "react";
import { cafe, hours } from "../data.js";

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const format12 = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}${m ? `:${String(m).padStart(2, "0")}` : ""} ${suffix}`;
};

function getStatus(now) {
  const today = hours.find((h) => h.index === now.getDay());
  const mins = now.getHours() * 60 + now.getMinutes();
  const isOpen = mins >= toMinutes(today.open) && mins < toMinutes(today.close);
  return { today, isOpen };
}

export default function Hours() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const { today, isOpen } = getStatus(now);

  return (
    <section id="hours" className="section">
      <div className="container visit">
        <div>
          <p className="eyebrow">Come say hi</p>
          <h2>Hours &amp; location</h2>

          <p className={`status ${isOpen ? "status--open" : "status--closed"}`}>
            <span className="status__dot" />
            {isOpen
              ? `Open now · until ${format12(today.close)}`
              : `Closed now · today ${format12(today.open)} – ${format12(today.close)}`}
          </p>

          <table className="hours__table">
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className={h.index === now.getDay() ? "is-today" : ""}>
                  <th scope="row">{h.day}</th>
                  <td>
                    {format12(h.open)} – {format12(h.close)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <address className="visit__contact">
            <p>{cafe.address}</p>
            <p>
              <a href={`tel:${cafe.phone.replace(/[^\d]/g, "")}`}>{cafe.phone}</a>
            </p>
            <p>
              <a href={`mailto:${cafe.email}`}>{cafe.email}</a>
            </p>
          </address>
        </div>

        <div className="map">
          <iframe
            title="Map showing the café location"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1300%2C51.5000%2C-0.0900%2C51.5200&layer=mapnik"
          />
          <p className="map__note">Swap the map link in Hours.jsx for your own location.</p>
        </div>
      </div>
    </section>
  );
}
