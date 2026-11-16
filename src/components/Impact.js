import { useState } from 'react';
import { impact } from '../data';
import { useReveal } from '../hooks';
import Sheet from './Sheet';

export default function Impact() {
  const ref = useReveal();
  const [open, setOpen] = useState(null);
  return (
    <section className="block" id="results">
      <header className="block-head">
        <h2>Results</h2>
        <span>What teams got · tap one</span>
      </header>
      <div className="metrics reveal" ref={ref}>
        {impact.map((m) => (
          <button key={m.id} className="metric" onClick={() => setOpen(m)} data-cursor="Read">
            <span className="metric-tag">{m.product}</span>
            <span className="metric-big">{m.metric.big}</span>
            <span className="metric-short">{m.short}</span>
          </button>
        ))}
      </div>
      <Sheet open={!!open} onClose={() => setOpen(null)} label={open?.title}>
        {open && (
          <>
            <p className="sheet-tag">{open.product}</p>
            <p className="sheet-big">{open.metric.big}</p>
            <p className="sheet-sub">{open.metric.label}</p>
            <h3>{open.title}</h3>
            <dl>
              <dt>Problem</dt>
              <dd>{open.problem}</dd>
              <dt>Built</dt>
              <dd>{open.built}</dd>
            </dl>
          </>
        )}
      </Sheet>
    </section>
  );
}
