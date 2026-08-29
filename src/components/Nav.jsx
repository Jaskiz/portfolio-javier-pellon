import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__brand">
        <span className="nav__brand-text">JAVIER PELLÓN</span>
        <span className="nav__brand-dot" />
      </a>
      <div className="nav__links">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#trayectoria">Trayectoria</a>
        <a href="#proyecto">Proyecto</a>
        <a href="#stack">Stack</a>
        <a href="#freelance" className="nav__cta">
          Tu web/app
        </a>
      </div>
    </nav>
  );
}
