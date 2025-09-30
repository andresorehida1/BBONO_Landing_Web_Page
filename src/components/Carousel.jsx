import React, { useEffect, useRef, useState, useCallback } from "react";
import "../styles/carousel.css";

/**
 * Carrusel que SIEMPRE muestra la imagen completa (sin recortes).
 * - La imagen define la altura (width:100vw; height:auto).
 * - Los dots van SUPERPUESTOS sobre la imagen (absolutos).
 */
export default function Carousel({ items = [], interval = 4000 }) {
  const scrollerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = items.length;

  // Desplazar al slide i (cada slide = ancho visible)
  const scrollToIndex = useCallback((i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slideW = el.clientWidth;
    el.scrollTo({ left: i * slideW, behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToIndex(index); }, [index, scrollToIndex]);

  // Recentrar al redimensionar
  useEffect(() => {
    const onResize = () => scrollToIndex(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index, scrollToIndex]);

  // Autoplay con pausa al ocultar pestaña
  useEffect(() => {
    if (count <= 1) return;
    let id;
    const start = () => { id = setInterval(() => setIndex(i => (i + 1) % count), interval); };
    const stop  = () => { if (id) clearInterval(id); id = null; };
    const onVis = () => (document.hidden ? stop() : start());
    start(); document.addEventListener("visibilitychange", onVis);
    return () => { stop(); document.removeEventListener("visibilitychange", onVis); };
  }, [count, interval]);

  if (count === 0) return null;

  return (
    <div className="c-wrap" aria-roledescription="carousel">
      <div className="c-scroller" ref={scrollerRef}>
        {items.map((it, i) => (
          <article className="c-item" key={it.id ?? i} aria-roledescription="slide">
            {it.img && (
              <img
                src={it.img}
                alt={it.title ?? `Slide ${i + 1}`}
                className="c-img"
                loading="eager"
                draggable={false}
              />
            )}
          </article>
        ))}
      </div>

      {count > 1 && (
        <div className="c-dots" role="tablist" aria-label="Selector de diapositivas">
          {items.map((_, i) => (
            <button
              key={i}
              className={`c-dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir al slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  );
}






