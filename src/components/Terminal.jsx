import { useEffect, useRef, useState } from 'react';
import { CMDS } from '../data/content.js';
import './Terminal.css';

const CHAR_DELAY_MS = 46;
const OUTPUT_DELAY_MS = 180;
const INITIAL_DELAY_MS = 900;

export default function Terminal() {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState('');
  const [out, setOut] = useState([]);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach((id) => {
      clearInterval(id);
      clearTimeout(id);
    });
    timers.current = [];
  };

  const runCmd = (i, initialDelay) => {
    clearTimers();
    setActive(i);
    setTyped('');
    setOut([]);
    const full = CMDS[i].label;

    const start = () => {
      let n = 0;
      const typer = setInterval(() => {
        n++;
        setTyped(full.slice(0, n));
        if (n >= full.length) {
          clearInterval(typer);
          const outTimer = setTimeout(() => setOut(CMDS[i].out), OUTPUT_DELAY_MS);
          timers.current.push(outTimer);
        }
      }, CHAR_DELAY_MS);
      timers.current.push(typer);
    };

    if (initialDelay) {
      const starter = setTimeout(start, initialDelay);
      timers.current.push(starter);
    } else {
      start();
    }
  };

  useEffect(() => {
    runCmd(0, INITIAL_DELAY_MS);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="terminal">
      <div className="terminal__titlebar">
        <span className="terminal__dot" style={{ background: '#FB7185' }} />
        <span className="terminal__dot" style={{ background: '#FDBA74' }} />
        <span className="terminal__dot" style={{ background: '#34D399' }} />
        <span className="terminal__title">javier@portfolio — bash</span>
      </div>
      <div className="terminal__body">
        <div className="terminal__line">
          <span className="terminal__prompt">➜</span>
          <span className="terminal__path"> ~</span>
          <span className="terminal__typed"> {typed}</span>
          <span className="terminal__caret" />
        </div>
        <div className="terminal__out">
          {out.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
      <div className="terminal__buttons">
        {CMDS.map((c, i) => (
          <button
            key={c.key}
            type="button"
            className={`terminal__btn${active === i ? ' is-active' : ''}`}
            onClick={() => runCmd(i)}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
