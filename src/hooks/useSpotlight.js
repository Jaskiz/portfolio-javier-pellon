import { useEffect, useRef } from 'react';

// Hace que la rejilla de puntos violeta del hero siga al puntero y, si no hay movimiento
// durante 2.2s, derive sola con un recorrido suave. Así el efecto también se ve en móvil,
// donde no existe un puntero. No usar Framer Motion aquí: necesita el rAF continuo de la deriva.
export function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let lastMove = 0;
    let rafId;
    const t0 = performance.now();

    const paint = (x, y, r) => {
      const mask = `radial-gradient(${r}px ${r}px at ${x}px ${y}px, #000 0%, rgba(0,0,0,.4) 45%, transparent 72%)`;
      el.style.maskImage = mask;
      el.style.webkitMaskImage = mask;
    };

    const onMove = (clientX, clientY) => {
      const rect = el.getBoundingClientRect();
      lastMove = performance.now();
      paint(clientX - rect.left, clientY - rect.top, 240);
    };

    const handleMouseMove = (e) => onMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const drift = () => {
      rafId = requestAnimationFrame(drift);
      if (performance.now() - lastMove < 2200) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width) return;
      const t = (performance.now() - t0) / 1000;
      paint(
        rect.width * (0.5 + 0.34 * Math.sin(t * 0.21) * Math.cos(t * 0.09)),
        rect.height * (0.5 + 0.32 * Math.sin(t * 0.15 + 1.1)),
        300
      );
    };
    rafId = requestAnimationFrame(drift);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return ref;
}
