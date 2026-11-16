import { automations } from '../data';
import { useReveal } from '../hooks';

export default function Automations() {
  const ref = useReveal();
  return (
    <section className="block" id="automations">
      <header className="block-head">
        <h2>Automations</h2>
        <span>Work that now does itself</span>
      </header>
      <ul className="rules reveal" ref={ref}>
        {automations.map((a) => (
          <li key={a.action} className="rule">
            <span className="rule-when">{a.trigger}</span>
            <span className="rule-then">{a.action}</span>
            <span className="rule-where">{a.product}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
