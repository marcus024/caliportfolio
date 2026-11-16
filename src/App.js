import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import Automations from './components/Automations';
import Experience from './components/Experience';
import Work from './components/Work';
import Process from './components/Process';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import './App.css';

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Services />
        <Impact />
        <Work />
        <Automations />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Cursor />
    </>
  );
}
