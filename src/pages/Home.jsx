import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PhysicsBackdrop from '../components/PhysicsBackdrop'
import Story from '../components/Story'
import Testimonials from '../components/Testimonials'
import Telegram from '../components/Telegram'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import FloatingActions from '../components/FloatingActions'
import '../components/PhysicsBackdrop.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero and Story share one band so a single set of orbits can run
            across the boundary between them rather than stopping at it.
            The backdrop is rendered last so it paints above both section
            backgrounds, while their content sits above it via z-index. */}
        <div className="topBand">
          <Hero />
          <Story />
          <PhysicsBackdrop className="physics--page" />
        </div>
        <Testimonials />
        <Telegram />
        <Faq />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
