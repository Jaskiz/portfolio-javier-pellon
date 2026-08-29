import Reveal from './Reveal.jsx';
import { OTROS_PROYECTOS } from '../data/content.js';
import './OtrosProyectos.css';

export default function OtrosProyectos() {
  return (
    <section id="proyectos" className="otros-proyectos">
      <div className="section-inner">
        <Reveal className="kicker">04 — Otros proyectos</Reveal>
        <Reveal as="h2" className="section-title" style={{ marginBottom: 44 }}>
          Lo demás que he construido
        </Reveal>

        <div className="otros-proyectos__grid">
          {OTROS_PROYECTOS.map((p, i) => (
            <Reveal key={p.titulo} index={i} className={`otros-proyectos__card otros-proyectos__card--${p.color}`}>
              <div className="otros-proyectos__glow" aria-hidden="true" />
              <div className="otros-proyectos__top">
                <span className={`otros-proyectos__badge otros-proyectos__badge--${p.color}`}>{p.etiqueta}</span>
                <span className="otros-proyectos__numero">{p.numero}</span>
              </div>
              <div className="otros-proyectos__titulo">{p.titulo}</div>
              <div className="otros-proyectos__texto">{p.texto}</div>
              <div className="otros-proyectos__footer">
                <div className="otros-proyectos__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="otros-proyectos__tag">
                      {t}
                    </span>
                  ))}
                </div>
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noopener" className="otros-proyectos__repo">
                    Ver código →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
