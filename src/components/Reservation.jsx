import { useMemo, useState } from "react";
import { reservationTimes } from "../data.js";

const todayISO = () => {
  const d = new Date();
  const off = d.getTimezoneOffset() * 60000;
  return new Date(d - off).toISOString().slice(0, 10);
};

const initial = { name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.phone && v.phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number.";
  if (!v.date) e.date = "Pick a date.";
  else if (v.date < todayISO()) e.date = "Date can't be in the past.";
  if (!v.time) e.time = "Pick a time.";
  return e;
}

const formatTime = (t) => {
  const [h] = t.split(":").map(Number);
  return `${h % 12 === 0 ? 12 : h % 12}:00 ${h >= 12 ? "PM" : "AM"}`;
};

export default function Reservation() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [booking, setBooking] = useState(null);
  const min = useMemo(todayISO, []);

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Front-end only: no server. A real site would POST `values` to an API here.
      setBooking(values);
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setBooking(null);
  };

  return (
    <section id="reserve" className="section section--dark">
      <div className="container reserve">
        <div className="reserve__intro">
          <p className="eyebrow">Book a table</p>
          <h2>Save your seat</h2>
          <p>
            Reservations are held for 15 minutes. For parties of 9 or more,
            please call us and we'll sort something out.
          </p>
        </div>

        {booking ? (
          <div className="reserve__success" role="status">
            <div className="reserve__check" aria-hidden="true">✓</div>
            <h3>You're all set, {booking.name.split(" ")[0]}!</h3>
            <p>
              Table for <strong>{booking.guests}</strong> on{" "}
              <strong>
                {new Date(booking.date + "T00:00").toLocaleDateString(undefined, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </strong>{" "}
              at <strong>{formatTime(booking.time)}</strong>.
            </p>
            <p className="muted">A confirmation would be sent to {booking.email}.</p>
            <button className="btn btn--ghost" onClick={reset}>
              Make another reservation
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="form__grid">
              <label className={errors.name ? "has-error" : ""}>
                Name
                <input value={values.name} onChange={set("name")} autoComplete="name" />
                {errors.name && <span className="form__error">{errors.name}</span>}
              </label>

              <label className={errors.email ? "has-error" : ""}>
                Email
                <input type="email" value={values.email} onChange={set("email")} autoComplete="email" />
                {errors.email && <span className="form__error">{errors.email}</span>}
              </label>

              <label className={errors.phone ? "has-error" : ""}>
                Phone <span className="muted">(optional)</span>
                <input type="tel" value={values.phone} onChange={set("phone")} autoComplete="tel" />
                {errors.phone && <span className="form__error">{errors.phone}</span>}
              </label>

              <label>
                Guests
                <select value={values.guests} onChange={set("guests")}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </label>

              <label className={errors.date ? "has-error" : ""}>
                Date
                <input type="date" min={min} value={values.date} onChange={set("date")} />
                {errors.date && <span className="form__error">{errors.date}</span>}
              </label>

              <label className={errors.time ? "has-error" : ""}>
                Time
                <select value={values.time} onChange={set("time")}>
                  <option value="">Select a time</option>
                  {reservationTimes.map((t) => (
                    <option key={t} value={t}>
                      {formatTime(t)}
                    </option>
                  ))}
                </select>
                {errors.time && <span className="form__error">{errors.time}</span>}
              </label>
            </div>

            <label>
              Special requests <span className="muted">(optional)</span>
              <textarea rows="3" value={values.notes} onChange={set("notes")} placeholder="Allergies, celebrations, high chair…" />
            </label>

            <button type="submit" className="btn btn--full">
              Reserve table
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
