import Navbar from './components/navbar'
import Welcome from './components/welcome'

export default function Home() {
  return (
    <div className="min-h-screen bg-hero-radial text-white font-display">
      <Navbar />
      <main className="px-6">
        <Welcome />
      </main>
    </div>
  )
}
