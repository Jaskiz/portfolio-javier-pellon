import { useEffect, useState } from 'react';
import './BackToTop.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // Un salto a #top solo sube hasta donde empieza esa sección, y como la cabecera
    // es sticky, se vuelve a pegar justo encima tapando el principio real de la página.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#top"
      onClick={handleClick}
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      aria-label="Volver arriba"
    >
      <span className="back-to-top__arrow">↑</span>
      <span className="back-to-top__text">
        <span className="back-to-top__label">Volver arriba</span>
        <span className="back-to-top__cmd">$ cd ~</span>
      </span>
      <span className="back-to-top__caret" />
    </a>
  );
}
