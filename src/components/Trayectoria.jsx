import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { TRAYECTORIA } from '../data/content.js';
import './Trayectoria.css';

export default function Trayectoria() {
  const [open, setOpen] = useState(1);
  const lineRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const track = trackRef.current;
    if (!line || !track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            line.style.height = `${track.offsetHeight - 12}px`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trayectoria" className="trayectoria">
      <div className="section-inner">
        <Reveal className="kicker">02 — Trayectoria</Reveal>
        <Reveal className="trayectoria__head">
          <h2 className="section-title" style={{ margin: 0 }}>
            Diez años
            <br />
            tratando con personas
          </h2>
          <p className="trayectoria__intro">
            Aulas, barras de bar, cajas de supermercado y llamadas comerciales. Ninguno de estos trabajos era
            programar, y en todos aprendí algo que uso programando. Toca una tarjeta para abrirla.
          </p>
        </Reveal>

        <div className="trayectoria__timeline">
          <div ref={lineRef} className="trayectoria__line" />
          <div className="trayectoria__track" />

          <div ref={trackRef} className="trayectoria__items">
            {TRAYECTORIA.map((item, i) => (
              <Reveal key={item.empresa} index={i} className="trayectoria__item">
                <span className={`trayectoria__dot trayectoria__dot--${item.color}`} />
                <div
                  className="trayectoria__card"
                  style={{ '--border-base': item.borderBase }}
                  onClick={() => setOpen((o) => (o === i ? null : i))}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpen((o) => (o === i ? null : i));
                    }
                  }}
                  aria-expanded={open === i}
                >
                  <div className="trayectoria__card-head">
                    <div className="trayectoria__card-head-left">
                      <span className="trayectoria__puesto">{item.puesto}</span>
                      <span className={`trayectoria__empresa trayectoria__empresa--${item.color}`}>
                        {item.empresa}
                      </span>
                      {item.actual && <span className="trayectoria__badge">Actual</span>}
                    </div>
                    <span className="trayectoria__fecha">{item.fecha}</span>
                  </div>
                  {open === i && <div className="trayectoria__detalle">{item.detalle}</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
