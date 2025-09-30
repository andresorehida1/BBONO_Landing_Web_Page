import React from "react";
import "../styles/menu.css";
import { cocktailsPremium, cocktailsClassic, drinks } from "../data/menuData";
import BoxImage from "../assets/box-prices.png";
import DeliveryImage from "../assets/delivery.png";
import GlovoLogo from "../assets/glovo-logo.png";

export default function Menu() {
  return (
    <main className="menu-page">
      {/* ===== Título principal ===== */}
      <h1 className="menu-title">MENU</h1>
      <div className="menu-title-underline" />

      {/* ===== Imagen con precios de Boxes ===== */}
      <div className="menu-box">
        <img src={BoxImage} alt="Box Prices" className="box-image" />
      </div>

      {/* ===== Sección Cocktails en dos columnas ===== */}
      <div className="cocktails-grid">
        {/* Columna izquierda - Premium */}
        <div className="cocktail-col">
          <h2 className="cocktail-title">
            COCKTAIL <span className="price">7€</span>
          </h2>
          <div className="subheading-wrapper subheading-premium">
            <h3 className="cocktail-subtitle">★ Premium</h3>
          </div>
          <ul className="cocktail-list">
            {cocktailsPremium.map((c) => (
              <li key={c.name}>
                <div className="cocktail-name">{c.name}</div>
                <div className="cocktail-desc">{c.description}</div>
                {c.extra && <div className="cocktail-extra">{c.extra}</div>}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha - Classic */}
        <div className="cocktail-col cocktail-col-right">
          <h2 className="cocktail-title">
            COCKTAIL <span className="price">5€</span>
          </h2>
          <div className="subheading-wrapper subheading-classic">
            <h3 className="cocktail-subtitle">Classic</h3>
          </div>
          <ul className="cocktail-list">
            {cocktailsClassic.map((c) => (
              <li key={c.name}>
                <div className="cocktail-name">{c.name}</div>
                {c.description && (
                  <div className="cocktail-desc">{c.description}</div>
                )}
              </li>
            ))}
          </ul>

          {/* Bevande */}
          <h3 className="bevande-heading">BEVANDE</h3>
          <ul className="drinks-list">
            {drinks.map((d) => (
              <li key={d.name}>{d.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Recuadro Glovo ===== */}
      <div className="glovo-wrapper">
        <img src={DeliveryImage} alt="Delivery" className="delivery-image" />
        <div className="glovo-box">
          <img src={GlovoLogo} alt="Glovo" className="glovo-logo" />
          <p className="glovo-text">
            Il tuo preferito, ora anche a domicilio! Ordina con Glovo e gustalo
            dove vuoi
          </p>
        </div>
      </div>
    </main>
  );
}

