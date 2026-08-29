import { useEffect, useState } from 'react';
import { APP_SCREENS } from '../data/content.js';
import './PhoneCarousel.css';

const SCREEN_WIDTH = 320;
const FRAME_WIDTH = 344;
const FRAME_HEIGHT = 760;

export default function PhoneCarousel() {
  const [screen, setScreen] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onResize = () => {
      const avail = Math.max(240, window.innerWidth * 0.9 - 24);
      setScale(Math.min(1, avail / FRAME_WIDTH));
    };
    onResize();
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const marginBottom = scale < 1 ? Math.round(-FRAME_HEIGHT * (1 - scale)) : 0;

  return (
    <div className="phone-carousel">
      <div
        className="phone-carousel__frame"
        style={{ transform: `scale(${scale.toFixed(3)})`, marginBottom: `${marginBottom}px` }}
      >
        <div className="phone-carousel__screen">
          <div className="phone-carousel__viewport">
            <div
              className="phone-carousel__track"
              style={{ transform: `translateX(${-SCREEN_WIDTH * screen}px)` }}
            >
              {APP_SCREENS.map((s) => (
                <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="phone-carousel__controls">
        <button
          type="button"
          className="phone-carousel__arrow"
          aria-label="Pantalla anterior"
          onClick={() => setScreen((s) => (s + APP_SCREENS.length - 1) % APP_SCREENS.length)}
        >
          ←
        </button>
        {APP_SCREENS.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            className={`phone-carousel__tab${screen === i ? ' is-active' : ''}`}
            onClick={() => setScreen(i)}
          >
            {s.tab}
          </button>
        ))}
        <button
          type="button"
          className="phone-carousel__arrow"
          aria-label="Pantalla siguiente"
          onClick={() => setScreen((s) => (s + 1) % APP_SCREENS.length)}
        >
          →
        </button>
      </div>
      <div className="phone-carousel__caption">Capturas reales de la app · toca para navegar</div>
    </div>
  );
}
