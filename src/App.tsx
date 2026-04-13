import Nav from './components/Nav'
import Hero from './components/Hero'
import ExperienceTimeline from './components/ExperienceTimeline'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <Hero />
        <ExperienceTimeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
