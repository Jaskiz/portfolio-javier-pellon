import { useSpotlight } from '../hooks/useSpotlight.js';
import Terminal from './Terminal.jsx';
import './Hero.css';

export default function Hero() {
  const spotlightRef = useSpotlight();

  return (
    <section id="top" className="hero">
      <div className="hero__grid-base" aria-hidden="true" />
      <div ref={spotlightRef} className="hero__grid-spotlight" aria-hidden="true" />
      <div className="hero__circle-solid" aria-hidden="true" />
      <div className="hero__circle-dashed" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Córdoba · disponible para empleo y para proyectos freelance
        </div>

        <h1 className="hero__title">
          Javier Pellón<span className="hero__title-dot">.</span>
        </h1>

        <div className="hero__pills">
          <span className="hero__pill hero__pill--spring">Desarrollador Full-Stack</span>
          <span className="hero__pill hero__pill--front">Java · Spring Boot</span>
          <span className="hero__pill hero__pill--api">React · React Native</span>
        </div>

        <div className="hero__columns">
          <div className="hero__col-left">
            <p className="hero__lead">
              Diseño y construyo la aplicación que tu negocio necesita: reservas, tienda online, panel de gestión o app
              móvil. Después la audito, la documento y te explico cómo funciona.
            </p>
            <div className="hero__actions">
              <a href="#freelance" className="hero__btn hero__btn--primary">
                Quiero algo así para mi negocio →
              </a>
              <a href="#proyecto" className="hero__btn hero__btn--secondary">
                Ver el proyecto destacado
              </a>
            </div>
          </div>
          <Terminal />
        </div>

        <div className="hero__facts">
          <span>App propia en producción, auditada de principio a fin</span>
          <span>Tres cursos de prácticas docentes antes del primer commit</span>
          <span>Del modelo de datos a la última pantalla</span>
        </div>
      </div>
    </section>
  );
}
