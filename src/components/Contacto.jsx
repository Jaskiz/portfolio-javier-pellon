import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { CONTACTO } from '../data/content.js';
import './Contacto.css';

export default function Contacto() {
  const [copied, setCopied] = useState(false);

  // Copia el email aparte del mailto: si el visitante no tiene cliente de correo
  // configurado, el mailto: le deja la pestaña en blanco y así puede pegarlo donde quiera.
  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(CONTACTO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="section-inner">
        <Reveal className="kicker">07 — Contacto</Reveal>
        <Reveal as="h2" className="contacto__title">
          Hablemos<span className="contacto__title-dot">.</span>
        </Reveal>
        <Reveal as="p" className="contacto__lead">
          Cuéntame en dos líneas qué necesitas y te digo si puedo ayudarte, cuánto costaría y cuánto tardaría. Si
          vienes de una empresa, el CV completo está a un clic.
        </Reveal>

        <Reveal className="contacto__cards">
          <a href={`mailto:${CONTACTO.email}`} className="contacto__card contacto__card--email">
            <span className="contacto__card-label">Email</span>
            <span className="contacto__card-value">{CONTACTO.email}</span>
            <button type="button" className="contacto__copy-btn" onClick={handleCopyEmail}>
              {copied ? '✓ Copiado' : 'Copiar email'}
            </button>
          </a>
          <a
            href={CONTACTO.linkedinHref}
            target="_blank"
            rel="noopener"
            className="contacto__card contacto__card--linkedin"
          >
            <span className="contacto__card-label">LinkedIn</span>
            <span className="contacto__card-value">{CONTACTO.linkedin}</span>
          </a>
          <a href={CONTACTO.telefonoHref} className="contacto__card contacto__card--telefono">
            <span className="contacto__card-label">Teléfono</span>
            <span className="contacto__card-value">{CONTACTO.telefono}</span>
          </a>
        </Reveal>

        <Reveal className="contacto__actions">
          <a href={`mailto:${CONTACTO.email}`} className="contacto__btn contacto__btn--primary">
            Escríbeme →
          </a>
          <a href={CONTACTO.cvHref} download={CONTACTO.cvNombre} className="contacto__btn contacto__btn--secondary">
            ↓ Descargar CV (PDF)
          </a>
        </Reveal>

        <div className="contacto__footer">
          <span>Javier Pellón Valenzuela · Córdoba, Andalucía</span>
          <span>Diseñado y construido por mí · 2026</span>
        </div>
      </div>
    </section>
  );
}
