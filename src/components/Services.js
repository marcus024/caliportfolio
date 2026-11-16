import { services } from '../data';
import { useReveal } from '../hooks';

export default function Services() {
  const ref = useReveal();
  return (
    <section className="block" id="services">
      <header className="block-head">
        <h2>Services</h2>
        <span>What I can build for you</span>
      </header>
      <ul className="offers reveal" ref={ref}>
        {services.map((s, i) => (
          <li key={s.title} className="offer">
            <span className="offer-n">0{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.line}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
