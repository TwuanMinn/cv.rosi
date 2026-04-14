import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import Result from './components/Result'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <div className="grain-overlay" />
      
      {/* Soft Ambient Cursor Light */}
      <div 
        className="fixed pointer-events-none z-[9998] rounded-full blur-[120px] opacity-[0.14] w-[400px] h-[400px] bg-[#00513f] transition-opacity duration-500 ease-out will-change-transform"
        style={{ transform: `translate3d(${pos.x - 200}px, ${pos.y - 200}px, 0)` }} 
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
