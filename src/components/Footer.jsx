import { cafe } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong className="footer__brand">{cafe.name}</strong>
          <p>{cafe.address}</p>
        </div>
        <div>
          <p>{cafe.phone}</p>
          <p>{cafe.instagram}</p>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {cafe.name}.</p>
      </div>
    </footer>
  );
}
