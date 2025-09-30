import React from "react";
import "../styles/home.css";
import "../styles/carousel.css";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

/* Imágenes del carousel */
import c1 from "../assets/carousel1.png";
import c2 from "../assets/carousel2.png";
import c3 from "../assets/carousel3.png";
import c4 from "../assets/carousel4.png";
import c5 from "../assets/carousel5.png";
import c6 from "../assets/carousel6.png";

/* Sección 2 */
import s2Photo from "../assets/duo1-fg.png";

/* Sección 3 */
import s3Photo from "../assets/duo2-fg.png";
import s3Bg from "../assets/bbono-big.png";

/* Sección 4 */
import boxImage from "../assets/box-image.png";
import price12 from "../assets/12-euro.png";
import price10 from "../assets/10-euro.png";
import price6 from "../assets/6-euro.png";

/* Sección 5 */
import s5Img1 from "../assets/s5-1.jpg";
import s5Img2 from "../assets/s5-2.jpg";
import s5Img3 from "../assets/s5-3.jpg";
import s5Img4 from "../assets/s5-4.jpg";
import s5Img5 from "../assets/s5-5.jpg";

export default function Home() {
  const items = [
    { id: 1, img: c1 },
    { id: 2, img: c2 },
    { id: 3, img: c3 },
    { id: 4, img: c4 },
    { id: 5, img: c5 },
    { id: 6, img: c6 },
  ];

  return (
    <main className="home" aria-label="Home">
      {/* === SECCIÓN 1: Carrusel === */}
      <section className="hero" aria-label="Carrusel">
        <div className="container--bleed">
          <Carousel items={items} interval={4000} />
        </div>
      </section>

      {/* === SECCIÓN 2 === */}
      <section className="section-two" aria-label="La nostra B-Box">
        <div className="s2-wrap">
          <div className="s2-header">
            <h2 className="s2-title">
              LA VITA È PIENA DI SORPRESE... COME LA NOSTRA B-BOX!
            </h2>
            <div className="s2-band" aria-hidden="true" />
          </div>

          <div className="s2-grid">
            <figure className="s2-polaroid">
              <img src={s2Photo} alt="Interior BBONO" className="s2-photo" />
            </figure>

            <div className="s2-textcol">
              <p className="s2-text">
                Un posto dedicato a una nuova forma di fare aperitivo. Un luogo
                che vuole riempirti di sapore e offrirti un’esperienza diversa:
                <br />
                da vivere qui con noi… o da portare dove desideri.
              </p>
              <a href="/contatti" className="btn btn--primary s2-cta">
                TROVACI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === SECCIÓN 3 === */}
      <section
        className="section-three"
        aria-label="Scopri la B-Box"
        style={{ "--bbox-watermark": `url(${s3Bg})` }}
      >
        <div className="s3-wrap">
          <div className="s3-grid">
            {/* Texto */}
            <div className="s3-textcol">
              <div className="s3-textbox">
                <h2 className="s3-title">COS’È UNA B-BOX?</h2>
                <div className="s3-watermark-wrapper">
                  <p>
                    La B-Box è il nostro modo speciale di vivere l’aperitivo.
                    Non un piatto qualsiasi, ma una scatola a sorpresa pronta a
                    stupirti ogni volta.
                  </p>
                  <p>
                    Dentro troverai{" "}
                    <strong>circa 9 finger food diversi</strong>, sempre freschi
                    e preparati al momento: piccoli assaggi pensati per farti
                    scoprire gusti nuovi e combinazioni originali.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <figure className="s3-polaroid">
              <img src={s3Photo} alt="Esperienza BBONO" className="s3-photo" />
            </figure>
          </div>
        </div>
      </section>

    <section className="section-four" aria-label="Prezzi Box">
      <div className="s4-wrap">
        {/* Logo Box */}
        <div className="s4-logo">
          <img src={boxImage} alt="Box logo" className="s4-box-image" />
        </div>

        {/* Precios */}
        <div className="s4-prices">
          {/* Columna Premium */}
          <div className="s4-price-card">
            <p className="s4-subtitle">MISTERY BOX + COCKTAIL</p>
            <p className="s4-price">12€</p>
            <p className="s4-label premium">Premium</p>
          </div>

          {/* Divider */}
          <div className="s4-divider" aria-hidden="true"></div>

          {/* Columna Classic */}
          <div className="s4-price-card">
            <p className="s4-subtitle">MISTERY BOX + COCKTAIL</p>
            <p className="s4-price">10€</p>
            <p className="s4-label classic">Classic</p>
          </div>

          {/* Divider */}
          <div className="s4-divider" aria-hidden="true"></div>

          {/* Columna Bimbi */}
          <div className="s4-price-card">
            <p className="s4-subtitle">BOX BIMBI + BEVANDA</p>
            <p className="s4-price">6€</p>
          </div>
        </div>

        {/* Texto explicativo */}
        <div className="s4-text">
          <p>
            Ogni B-Box è unica, perché il bello è non sapere mai esattamente
            cosa ti aspetta. Tu scegli il drink, noi pensiamo al resto.
          </p>
          <p className="s4-veg">Disponibile versione VEG 🌱</p>
          <Link to="/menu" className="btn btn--sec4">
            MENU
          </Link>
        </div>
      </div>
    </section>
      {/* === SECCIÓN 5 === */}
      <section className="section-five" aria-label="Take your Box">
        <div className="s5-wrap">
          <div className="s5-gallery">
            <img src={s5Img1} alt="Box 1" className="s5-img" />
            <img src={s5Img2} alt="Box 2" className="s5-img" />
            <img src={s5Img3} alt="Box 3" className="s5-img" />
            <img src={s5Img4} alt="Box 4" className="s5-img" />
            <img src={s5Img5} alt="Box 5" className="s5-img" />
          </div>

          <div className="s5-textblock">
            <h2 className="s5-title">TAKE YOUR BOX!</h2>
            <div className="s5-underline" aria-hidden="true" />
          </div>
        </div>
      </section>
    </main>
  );
}
