import { useState } from "react";
import { Link } from "react-router-dom"; // ⬅️ Importa Link
import SideNav from "./SideNav.jsx";

import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import instagramIcon from "../assets/instagram.png";
import whatsappIcon from "../assets/whatsapp.png";
import glovoIcon from "../assets/glovo-logo.png"; // ⬅️ Logo de Glovo

import "../styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Enlaces de contacto
  const IG_URL = "https://www.instagram.com/bbono.to/";
  const WA_URL =
    "https://wa.me/393518429507?text=Ciao%20Bbono!%20Vorrei%20prenotare%20o%20avere%20informazioni.";
  const GLOVO_URL = "https://glovoapp.com/it"; // ⬅️ Aquí pones el link oficial de Glovo cuando lo tengas

  return (
    <header className="site-header header-glass">
      <nav className="nav-grid" aria-label="Barra di navigazione">
        {/* IZQUIERDA: hamburguesa */}
        <div className="left-area">
          <button
            className="menu-btn"
            aria-label="Apri menu"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <img src={menuIcon} alt="Menù" className="menu-icon" />
          </button>
        </div>

        {/* CENTRO: LOGO con link a Home */}
        <div className="logo" aria-label="Logo">
          <Link to="/" aria-label="Vai alla Home">
            <img src={logo} alt="Bbono" className="logo-img" />
          </Link>
        </div>

        {/* DERECHA: REDES / CONTACTO */}
        <div className="right-area">
          {/* Instagram */}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Instagram"
            title="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>

          {/* WhatsApp */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
          </a>

          {/* Glovo */}
          <a
            href={GLOVO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Ordina con Glovo"
            title="Ordina con Glovo"
          >
            <img src={glovoIcon} alt="Glovo" className="social-icon" />
          </a>
        </div>
      </nav>

      <SideNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
