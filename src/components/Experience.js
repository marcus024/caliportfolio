import { experience } from '../data';
const year = (d) => (d === 'Now' ? 'Now' : d.slice(-4));
const span = (from, to) => (from === to ? from : `${from} – ${to}`);

function yearsOf(roles) {
  const start = year(roles[roles.length - 1].from);
  const end = year(roles[0].to);
  return start === end ? start : `${start} — ${end}`;
}

export default function Experience() {
  return (
    <section className="block" id="experience">
      <header className="block-head">
        <h2>Experience</h2>
        <span>Since 2021</span>
      </header>

      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org} className={`job ${e.roles.some((r) => r.now) ? 'is-now' : ''}`}>
            <span className="job-years">{yearsOf(e.roles)}</span>
            <div className="job-main">
              <h3 className="job-org">{e.org}</h3>
              <ul className="job-roles">
                {e.roles.map((r) => (
                  <li key={r.title}>
                    <span>{r.title}</span>
                    <span>{span(r.from, r.to)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="job-where">{e.where}</span>
          </li>
        ))}
      </ol>

    </section>
  );
}
