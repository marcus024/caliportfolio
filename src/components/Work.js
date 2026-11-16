import { useEffect, useRef, useState } from 'react';
import { filters, projects } from '../data';
import { prefersReducedMotion } from '../hooks';
import Sheet from './Sheet';

/** Project index: hover a row and its screenshot follows the pointer. */
export default function Work() {
  const [filter, setFilter] = useState('all');
  const [hover, setHover] = useState(null);
  const [open, setOpen] = useState(null);
  const [img, setImg] = useState(0);
  const [showEarlier, setShowEarlier] = useState(false);
  const preview = useRef(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf;
    const pos = { x: 0, y: 0 };
    const loop = () => {
      pos.x += (target.current.x - pos.x) * 0.16;
      pos.y += (target.current.y - pos.y) * 0.16;
      if (preview.current) preview.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const list = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));
  const images = open ? open.gallery || [open.img] : [];
  const live = list.filter((p) => p.group === 'live');
  const earlier = list.filter((p) => p.group !== 'live');
  const renderRow = (p) => (
          <li key={p.id}>
            <button
              className="index-row"
              onPointerEnter={() => setHover(p)}
              onPointerLeave={() => setHover(null)}
              onFocus={() => setHover(null)}
              onClick={() => {
                setImg(0);
                setOpen(p);
              }}
              data-cursor="Open"
            >
              <span className="ix-name">{p.name}</span>
              <span className="ix-kind">{p.kind}</span>
              <span className="ix-year">{p.year}</span>
            </button>
          </li>
  );

  return (
    <section className="block" id="work" onPointerMove={(e) => (target.current = { x: e.clientX, y: e.clientY })}>
      <header className="block-head">
        <h2>Work</h2>
        <div className="tabs" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={filter === f.key ? 'on' : ''}
              onClick={() => setFilter(f.key)}
              data-cursor="Filter"
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      {live.length > 0 && (
        <>
          <p className="ix-group">Live products and client sites</p>
          <ul className="index">
            {live.map(renderRow)}
          </ul>
        </>
      )}
      {earlier.length > 0 && (
        <>
          <button className="ix-toggle" onClick={() => setShowEarlier((v) => !v)} aria-expanded={showEarlier} data-cursor={showEarlier ? 'Hide' : 'Show'}>
            {showEarlier ? 'Hide' : 'Show'} earlier projects · {earlier.length}
          </button>
          {showEarlier && (
            <ul className="index index-earlier">
              {earlier.map(renderRow)}
            </ul>
          )}
        </>
      )}

      <div className={`preview ${hover ? 'show' : ''} ${hover?.shape === 'phone' ? 'tall' : ''}`} ref={preview} aria-hidden="true">
        {hover && <img src={hover.img} alt="" key={hover.id} />}
      </div>

      <Sheet open={!!open} onClose={() => setOpen(null)} label={open?.name} wide>
        {open && (
          <>
            <div className={`sheet-media ${open.shape === 'phone' ? 'tall' : ''}`}>
              <img src={images[img]} alt={`${open.name} screenshot`} />
            </div>
            {images.length > 1 && (
              <div className="sheet-thumbs">
                {images.map((src, i) => (
                  <button key={src} className={i === img ? 'on' : ''} onClick={() => setImg(i)} aria-label={`Image ${i + 1}`}>
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
            <p className="sheet-tag">{open.kind} · {open.year}</p>
            <h3>{open.name}</h3>
            <p className="sheet-text">{open.summary}</p>
            <p className="sheet-stack">{open.stack.join(' / ')}</p>
            {open.links.length > 0 && (
              <div className="sheet-links">
                {open.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </Sheet>
    </section>
  );
}
