import Reveal from './Reveal.jsx';
import { FORMACION, SOBRE_MI_PARRAFOS } from '../data/content.js';
import './SobreMi.css';

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="section-inner">
        <Reveal className="kicker">01 — Sobre mí</Reveal>
        <Reveal as="h2" className="section-title">
          De la pizarra
          <br />
          al despliegue continuo
        </Reveal>

        <div className="sobre-mi__grid">
          <Reveal className="sobre-mi__photo-col">
            <div className="sobre-mi__photo-card">
              <img src="/assets/javier.png" alt="Retrato de Javier Pellón Valenzuela" />
              <div className="sobre-mi__photo-caption">Córdoba, 2026</div>
              <div className="sobre-mi__photo-corner" />
            </div>
            <div className="sobre-mi__tags">
              <span className="sobre-mi__tag sobre-mi__tag--infra">Explico lo que hago sin tecnicismos</span>
              <span className="sobre-mi__tag sobre-mi__tag--otros">Atención a cliente y público desde 2016</span>
              <span className="sobre-mi__tag sobre-mi__tag--data">Entrego documentado y probado</span>
            </div>
          </Reveal>

          <Reveal className="sobre-mi__text-col">
            {SOBRE_MI_PARRAFOS.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>

        <Reveal className="sobre-mi__formacion-kicker">Formación</Reveal>
        <div className="sobre-mi__formacion-grid">
          {FORMACION.map((f, i) => (
            <Reveal
              key={f.titulo}
              index={i}
              className={`sobre-mi__formacion-card sobre-mi__formacion-card--${f.etiquetaColor}`}
              style={{ '--hover-border': f.hoverColor }}
            >
              <div className="sobre-mi__formacion-head">
                <div className="sobre-mi__formacion-titulo">{f.titulo}</div>
                <span className="sobre-mi__formacion-badge">{f.etiqueta}</span>
              </div>
              <div className="sobre-mi__formacion-centro">{f.centro}</div>
              <div className="sobre-mi__formacion-nota">{f.nota}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
