import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/sidenav.css"; // Asegúrate de que la ruta sea correcta

export default function SideNav({ open, onClose }) {
  const panelRef = useRef(null);

  // Link directo a Google Maps (tu enlace)
  const GMAPS_LINK = "https://maps.app.goo.gl/6zUZ9qE86CRTmXS76?g_st=ipc";

  // Bloquea scroll al abrir
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    if (open) body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [open]);

  // Focus inicial
  useEffect(() => {
    if (open && panelRef.current) {
      const first = panelRef.current.querySelector("a, button");
      first && first.focus();
    }
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`offcanvas ${open ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sidenav-title"
    >
      <button className="offcanvas-backdrop" onClick={onClose} aria-label="Cerrar menú" />

      <aside className="offcanvas-panel" ref={panelRef}>
        <div className="offcanvas-head">
          <h2 id="sidenav-title">Esplora</h2>
          <button className="offcanvas-close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>

        <nav className="offcanvas-nav" aria-label="Navegación lateral">
          <NavLink to="/" end className="off-link" onClick={onClose}>
            Home
          </NavLink>

          <NavLink to="/menu" className="off-link" onClick={onClose}>
            Menu
          </NavLink>

          <NavLink to="/contatti" className="off-link" onClick={onClose}>
            Contatti
          </NavLink>

          {/* Externo: abre Google Maps */}
          <a
            href={GMAPS_LINK}
            className="off-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            Dove siamo
          </a>
        </nav>
      </aside>
    </div>
  );
}

