import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import GlovoLogo from "../assets/glovo-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const IG_URL = "https://www.instagram.com/bbono.to/";
  const WA_URL =
    "https://wa.me/393518429507?text=Ciao%20Bbono!%20Vorrei%20avere%20informazioni%20per%20un%20aperitivo.";
  const GLOVO_URL = "https://glovoapp.com/it"; // ⬅️ aquí pones el link oficial de Glovo

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-glass" role="contentinfo">
      <div className="footer-grid">
        {/* Col 1: Brand + redes + Glovo */}
        <div className="footer-col footer-brand">
          <div className="brand-wrap">
            <img
              src="/logo.svg"
              alt="Logo"
              className="footer-logo"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="footer-brand-text">BBONO</span>
          </div>
          <p className="footer-muted">Il Aperitivo Random, Ma Bbonissimo</p>

          <div className="socials">
            {/* Instagram */}
            <a
              href={IG_URL}
              aria-label="Instagram"
              className="icon-btn"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5-5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.25z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={WA_URL}
              aria-label="WhatsApp"
              className="icon-btn"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.29.2 11.86c0 2.09.55 4.14 1.6 5.96L0 24l6.37-1.66a11.83 11.83 0 0 0 5.7 1.45h.01c6.56 0 11.86-5.29 11.86-11.86a11.8 11.8 0 0 0-3.42-8.49zM12.08 21.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.78.98 1-3.68-.23-.38a9.87 9.87 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.86 9.86 0 0 1 6.98 2.9 9.83 9.83 0 0 1 2.89 6.98c0 5.45-4.44 9.9-9.84 9.9zm5.63-7.4c-.31-.16-1.83-.9-2.11-1.01-.28-.1-.48-.16-.68.16-.2.31-.79 1.01-.97 1.21-.18.2-.36.23-.66.08-.31-.16-1.3-.48-2.47-1.53-.91-.81-1.53-1.81-1.71-2.11-.18-.31-.02-.48.14-.63.14-.14.31-.36.45-.53.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.53-.08-.16-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.81.38-.28.31-1.07 1.05-1.07 2.55 0 1.5 1.1 2.95 1.25 3.16.16.2 2.18 3.33 5.28 4.67.74.32 1.32.51 1.77.65.74.24 1.42.21 1.95.13.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.35z" />
              </svg>
            </a>
          </div>

          {/* Delivery + Glovo */}
          <div className="delivery-footer">
            <h4 className="delivery-title">Delivery</h4>
            <a
              href={GLOVO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ordina con Glovo"
              title="Ordina con Glovo"
            >
              <img src={GlovoLogo} alt="Glovo" className="glovo-footer-logo" />
            </a>
          </div>
        </div>

        {/* Col 2: Contatti */}
        <div className="footer-col">
          <h3 className="footer-title">Contatti</h3>
          <ul className="footer-list">
            <li>
              📍{" "}
              <a
                href="https://maps.app.goo.gl/6zUZ9qE86CRTmXS76?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corso Unione Sovietica 413, Torino, TO (Italy)
              </a>
            </li>
            <li>
              📞 <a href="tel:+393518429507">+39 351 842 9507</a>
            </li>
            <li>
              ✉️ <a href="mailto:info@bbono.it">info@bbono.it</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Orari + Links */}
        <div className="footer-col">
          <h3 className="footer-title">Orari</h3>
          <ul className="footer-list">
            <li>Lun–Sab: 17:00–21:00</li>
          </ul>

          <h3 className="footer-title" style={{ marginTop: 12 }}>
            Links
          </h3>
          <nav className="footer-links" aria-label="Navegación del pie">
            <NavLink to="/" end className="footer-link">
              Home
            </NavLink>
            <NavLink to="/menu" className="footer-link">
              Menu
            </NavLink>
            <NavLink to="/contatti" className="footer-link">
              Contatti
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Franja legal */}
      <div className="footer-legal">
        <small>© {year} Bbono — Tutti i diritti riservati.</small>
        <div className="legal-actions">
          <a href="#" className="legal-link">
            Privacy
          </a>
          <a href="#" className="legal-link">
            Cookies
          </a>
          <button
            className="to-top"
            onClick={scrollTop}
            aria-label="Volver arriba"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

