import Reveal from './Reveal.jsx';
import PhoneCarousel from './PhoneCarousel.jsx';
import { PROYECTO_DETALLE, PROYECTO_TAGS } from '../data/content.js';
import './ProyectoDestacado.css';

export default function ProyectoDestacado() {
  return (
    <section id="proyecto" className="proyecto">
      <div className="proyecto__circle" aria-hidden="true" />
      <div className="section-inner proyecto__inner">
        <Reveal className="kicker">03 — Proyecto destacado</Reveal>
        <Reveal as="h2" className="section-title">
          App de entrenamiento
          <br />
          en el gimnasio
        </Reveal>

        <div className="proyecto__grid">
          <Reveal>
            <PhoneCarousel />
          </Reveal>

          <Reveal className="proyecto__detalle">
            <p className="proyecto__lead">
              Proyecto personal de principio a fin: una API en Java 21 con Spring Boot y una app móvil en React
              Native para planificar entrenamientos, registrar series y no perder la constancia. Modelo de datos,
              endpoints, interfaz, sistema visual, despliegue y auditoría: todo mío.
            </p>

            <div className="proyecto__cards">
              {PROYECTO_DETALLE.map((d) => (
                <div
                  key={d.kicker}
                  className={`proyecto__card proyecto__card--${d.color}`}
                  style={{ '--hover-border': d.hoverColor, '--border-base': d.borderBase }}
                >
                  <div className="proyecto__card-kicker">{d.kicker}</div>
                  <div className="proyecto__card-text">{d.texto}</div>
                </div>
              ))}
            </div>

            <div className="proyecto__tags">
              {PROYECTO_TAGS.map((t) => (
                <span key={t} className="proyecto__tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
