import { useState } from 'react';
import { profile, stack } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <>
      <section className="tools" aria-label="Tools">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
      <section className="contact" id="contact">
        <p className="contact-kicker">Have a website to build or manual work to remove? Let's talk.</p>
        <button className="contact-mail" onClick={copy} data-cursor={copied ? 'Copied' : 'Copy'}>
          {profile.email}
        </button>
        <p className="contact-hint" role="status">{copied ? 'Copied to clipboard' : 'Click to copy'}</p>
        <div className="contact-links">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
              {s.label}
            </a>
          ))}
        </div>
        <footer className="foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" data-cursor="Top">Top ↑</a>
        </footer>
      </section>
    </>
  );
}
