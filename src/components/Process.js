import { process } from '../data';
import { useReveal } from '../hooks';

export default function Process() {
  const ref = useReveal();
  return (
    <section className="block" id="process">
      <header className="block-head">
        <h2>How we'd work</h2>
        <span>Three steps</span>
      </header>
      <ol className="offers offers-3 reveal" ref={ref}>
        {process.map((s, i) => (
          <li key={s.title} className="offer">
            <span className="offer-n">0{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
