import { useEffect, useState } from 'react';
import { clients, profile } from '../data';

const fmtTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: false });

function useClock() {
  const [now, setNow] = useState(() => fmtTime.format(new Date()));
  useEffect(() => {
    const t = setInterval(() => setNow(fmtTime.format(new Date())), 10000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export default function Hero() {
  const time = useClock();
  return (
    <section className="hero">
      <p className="hero-who">
        <b>{profile.name}</b>
        <span>Full-stack and AWS developer for businesses in Australia and the Philippines</span>
      </p>
      <h1 className="hero-title" aria-label="I automate the busywork.">
        <span className="line"><span>I automate</span></span>
        <span className="line"><span>the busywork.</span></span>
      </h1>
      <div className="hero-meta">
        <span>Product &amp; technology lead</span>
        <span>Nexbit Tech PH</span>
        <span>Philippines {time}</span>
        <a href="#contact" data-cursor="Talk">Start a project →</a>
      </div>
      <figure className="clients">
        <figcaption>Worked with</figcaption>
        <ul>
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </figure>
    </section>
  );
}
