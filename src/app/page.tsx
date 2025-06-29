import AboutMe from './components/aboutme'
import Contact from './components/contact'
import CTFWriteUps from './components/ctfWriteUps'
import Navbar from './components/navbar'
import ProjectCarousel from './components/projectCarousel'
import Socials from './components/socials'
import Welcome from './components/welcome'

export default function Home() {
  return (
    <div className="min-h-screen bg-hero-radial text-white font-display">
      <Navbar />
      <main className="px-6">
        <Welcome />
        <AboutMe />
        <ProjectCarousel />
        <CTFWriteUps />
        <Socials />
        <Contact />
      </main>
    </div>
  )
}
