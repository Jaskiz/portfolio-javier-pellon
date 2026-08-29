import { useEffect, useState } from 'react';
import './Nav.css';

const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#stack', label: 'Stack' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Si el visitante gira el móvil a horizontal o cambia de ventana y deja de ser
  // estrecha, cerramos el menú para no dejarlo abierto en la vista de escritorio.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className="nav">
      <a href="#top" className="nav__brand">
        <span className="nav__brand-text">JAVIER PELLÓN</span>
        <span className="nav__brand-dot" />
      </a>

      <div className="nav__right">
        <div className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#freelance" className="nav__cta">
            Tu web/app
          </a>
        </div>

        <button
          type="button"
          className={`nav__burger${open ? ' is-open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
