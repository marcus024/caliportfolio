import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks';

/** A dot that inverts whatever is under it and grows with a label over links. */
export default function Cursor() {
  const dot = useRef(null);
  const [label, setLabel] = useState('');
  const [enabled] = useState(
    () => window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion()
  );

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-cursor');
    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf;
    const move = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target.closest?.('[data-cursor], a, button');
      setLabel(el ? el.getAttribute('data-cursor') || ' ' : '');
    };
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const leave = () => setLabel('');
    window.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="cursor" ref={dot} aria-hidden="true">
      <span className={`cursor-dot ${label ? 'big' : ''}`}>
        <span className="cursor-label">{label.trim()}</span>
      </span>
    </div>
  );
}
