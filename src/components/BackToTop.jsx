import { useEffect, useState } from 'react';
import './BackToTop.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
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
