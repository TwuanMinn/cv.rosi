import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import Result from './components/Result'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let x = -1000, y = -1000, rafId = 0, pending = false;
    const el = cursorRef.current;
    if (!el) return;

    const render = () => {
      pending = false;
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
    };
    const handleMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!pending) {
        pending = true;
        rafId = requestAnimationFrame(render);
      }
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="grain-overlay" />

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="cursor-light fixed pointer-events-none z-[9998] rounded-full blur-[120px] opacity-[0.14] w-[400px] h-[400px] bg-[#00513f] transition-opacity duration-500 ease-out will-change-transform"
        style={{ transform: 'translate3d(-1000px, -1000px, 0)' }}
      />

      <Nav />
      <main className="pt-24">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Result />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
