import React from "react";
import "../styles/contatti.css";

/**
 * Reemplaza estos enlaces con tu ubicación real
 * - GMAPS_LINK: abre Google Maps en nueva pestaña
 * - MAPS_EMBED_SRC: iframe embebido (puedes generar el "Embed map" desde Google Maps)
 */
const GMAPS_LINK = "https://maps.app.goo.gl/6zUZ9qE86CRTmXS76?g_st=ipc";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.0694558229284!2d7.633996177041437!3d45.02338317107022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478813dfcf8717cb%3A0xabae84fc31605cbb!2sBBONO!5e1!3m2!1ses!2sit!4v1757360062654!5m2!1ses!2sit";

export default function Contatti() {
  return (
    <main className="contatti-page" aria-label="Contatti">
      {/* Botón Google Maps */}
      <div className="gmaps-cta">
        <a
          className="gmaps-btn"
          href={GMAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="gmaps-logo" aria-hidden="true">
            {/* Logo estilo Google Maps (SVG inline) */}
            <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
              <path fill="#34A853" d="M12 22s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z"/>
              <circle cx="12" cy="10" r="3.2" fill="#EA4335"/>
              <path fill="#FBBC05" d="M12 3a7 7 0 00-7 7c0 1.37.46 2.92 1.24 4.49L9 9.5l3-4.5z"/>
              <path fill="#4285F4" d="M19 10a7 7 0 00-7-7v7l4.76 5.5C18.54 12.92 19 11.37 19 10z"/>
            </svg>
          </span>
          <span className="gmaps-text">Scopri su Google Maps</span>
        </a>
      </div>

      {/* Mapa embebido */}
      <section className="map-wrap" aria-label="Mappa">
        <div className="map-frame">
          <iframe
            title="Google Map"
            src={MAPS_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* Datos de contacto */}
      <section className="contact-info" aria-label="Informazioni di contatto">
        <h1 className="contact-title">CONTATTI</h1>

        <address className="contact-block">
          <p className="contact-line contact-address">
            Corso Unione Sovietica 413, 10135 Torino (TO)
          </p>
          <p className="contact-line">
            Tel:{" "}
            <a className="contact-link" href="tel:+39000000000">
              +39 351 842 9507
            </a>
          </p>
          <p className="contact-line">
            Email:{" "}
            <a className="contact-link" href="mailto:info@bbono.it">
              info@bbono.it
            </a>
          </p>
        </address>
      </section>
    </main>
  );
}

