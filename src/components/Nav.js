import { useEffect, useState } from 'react';
import { profile } from '../data';
import { useActiveSection } from '../hooks';

const LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'results', label: 'Results' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];
const IDS = LINKS.map((l) => l.id);

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Nav() {
  const active = useActiveSection(IDS);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  return (
    <header className="nav">
      <a href="#top" className="nav-name" data-cursor="Top">
        {profile.name}
      </a>
      <nav className="nav-links" aria-label="Main">
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} data-cursor="Go">
            {l.label}
          </a>
        ))}
      </nav>
      <button
        className="invert-btn"
        onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        aria-label={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        data-cursor="Invert"
      >
        <span />
      </button>
    </header>
  );
}
