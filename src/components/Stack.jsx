import { useEffect, useMemo, useState } from 'react';
import Reveal from './Reveal.jsx';
import { CATS, CAT_LEGEND, SKILLS } from '../data/content.js';
import './Stack.css';

const NARROW_BREAKPOINT = 760;

// Posiciones en % para la constelación de escritorio (con líneas y núcleo).
function layoutWide() {
  const r0 = SKILLS.filter((s) => s.ring === 0);
  const r1 = SKILLS.filter((s) => s.ring === 1);
  const place = (arr, rx, ry, offset) =>
    arr.map((s, i) => {
      const a = (i / arr.length) * Math.PI * 2 + offset;
      return { ...s, x: 50 + Math.cos(a) * rx, y: 50 + Math.sin(a) * ry };
    });
  return place(r0, 20, 22, -Math.PI / 2).concat(place(r1, 44, 43, -Math.PI / 2 + Math.PI / r1.length));
}

// En móvil se agrupan por familia (misma info que la leyenda) en vez de una columna suelta.
const GROUPED_SKILLS = CAT_LEGEND.map((l) => ({ ...l, items: SKILLS.filter((s) => s.cat === l.cat) }));

export default function Stack() {
  const [vw, setVw] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1280));
  const [active, setActive] = useState(null); // nombre de la tecnología activa, o null

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!e.target.closest('.stack__box')) setActive(null);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const narrow = vw < NARROW_BREAKPOINT;
  const placed = useMemo(() => layoutWide(), []);

  return (
    <section id="stack" className="stack">
      <div className="section-inner">
        <Reveal className="kicker">05 — Stack</Reveal>
        <Reveal className="stack__head">
          <h2 className="section-title" style={{ margin: 0 }}>
            Mi constelación
          </h2>
          <p className="stack__intro">Organizado por familias: backend, frontend, datos e infraestructura.</p>
        </Reveal>

        <Reveal className={`stack__box${narrow ? ' stack__box--mobile' : ''}`} style={narrow ? undefined : { height: '600px' }}>
          {narrow ? (
            <div className="stack__groups">
              {GROUPED_SKILLS.map((group) => (
                <div key={group.cat} className="stack__group">
                  <div className="stack__group-label">
                    <span className="stack__legend-dot" style={{ background: CATS[group.cat].dot }} />
                    {group.label}
                  </div>
                  <div className="stack__group-pills">
                    {group.items.map((s) => {
                      const c = CATS[s.cat];
                      const on = active === s.name;
                      return (
                        <button
                          key={s.name}
                          type="button"
                          className="stack__pill stack__pill--flow"
                          style={{
                            borderColor: on ? c.dot : 'rgba(255,255,255,.09)',
                            boxShadow: on ? `0 0 26px -4px ${c.dot}` : 'none',
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActive(s.name);
                          }}
                        >
                          <span className="stack__pill-dot" style={{ background: c.dot }} />
                          <span style={{ color: on ? 'var(--text-heading)' : c.fg }}>{s.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="stack__svg">
                <g>
                  {placed.map((s) => {
                    const c = CATS[s.cat];
                    const activeCat = active ? SKILLS.find((sk) => sk.name === active)?.cat : null;
                    const same = activeCat !== null && s.cat === activeCat;
                    const opacity = active === null ? 0.18 : same ? 0.85 : 0.06;
                    return (
                      <line
                        key={s.name}
                        x1={50}
                        y1={50}
                        x2={s.x}
                        y2={s.y}
                        stroke={c.line}
                        strokeWidth="0.18"
                        strokeOpacity={opacity}
                      />
                    );
                  })}
                </g>
              </svg>

              <div className="stack__hub">
                <div className="stack__hub-title">
                  Full
                  <br />
                  Stack
                </div>
                <div className="stack__hub-count">{SKILLS.length} TECNOLOGÍAS</div>
              </div>

              {placed.map((s) => {
                const c = CATS[s.cat];
                const on = active === s.name;
                return (
                  <div
                    key={s.name}
                    className="stack__pill"
                    style={{
                      left: `${s.x}%`,
                      top: `${s.y}%`,
                      transform: `translate(-50%,-50%)${on ? ' scale(1.1)' : ''}`,
                      borderColor: on ? c.dot : 'rgba(255,255,255,.09)',
                      boxShadow: on ? `0 0 26px -4px ${c.dot}` : 'none',
                    }}
                    onMouseEnter={() => setActive(s.name)}
                    onMouseLeave={() => setActive(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(s.name);
                    }}
                  >
                    <span className="stack__pill-dot" style={{ background: c.dot }} />
                    <span style={{ color: on ? 'var(--text-heading)' : c.fg }}>{s.name}</span>
                  </div>
                );
              })}
            </>
          )}
        </Reveal>

        <div className="stack__legend">
          {CAT_LEGEND.map((l) => (
            <span key={l.cat} className="stack__legend-item">
              <span className="stack__legend-dot" style={{ background: CATS[l.cat].dot }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
