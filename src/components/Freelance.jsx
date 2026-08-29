import Reveal from './Reveal.jsx';
import { FREELANCE_SERVICIOS } from '../data/content.js';
import './Freelance.css';

export default function Freelance() {
  return (
    <section id="freelance" className="freelance">
      <div className="freelance__dots" aria-hidden="true" />
      <div className="section-inner freelance__inner">
        <Reveal className="kicker">06 — Freelance</Reveal>
        <Reveal as="h2" className="section-title">
          ¿Tu negocio sigue
          <br />
          funcionando por WhatsApp?
        </Reveal>
        <Reveal as="p" className="freelance__lead">
          Trabajo con negocios pequeños de Córdoba y de donde haga falta. Monto la web, la tienda o el sistema de
          reservas, te enseño a manejarlo sin tecnicismos y te lo dejo documentado por escrito. Presupuesto cerrado
          antes de empezar y sin plantillas recicladas.
        </Reveal>

        <div className="freelance__grid">
          {FREELANCE_SERVICIOS.map((s, i) => (
            <Reveal key={s.titulo} index={i} className={`freelance__card freelance__card--${s.color}`}>
              <div className="freelance__numero">{s.numero}</div>
              <div className="freelance__titulo">{s.titulo}</div>
              <div className="freelance__texto">{s.texto}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
