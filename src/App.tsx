import { useState } from 'react'
import LoadingScreen from './sections/LoadingScreen'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import FeaturedReviews from './sections/FeaturedReviews'
import About from './sections/About'
import CoverageCategories from './sections/CoverageCategories'
import ArtistSubmissionCTA from './sections/ArtistSubmissionCTA'
import Gallery from './sections/Gallery'
import Stats from './sections/Stats'
import Footer from './sections/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <CustomCursor />
      {/* Grain noise overlay adds premium tactile texture to the whole page */}
      <div className="noise-overlay" aria-hidden />

      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div
        className="min-h-screen bg-bg text-text overflow-x-hidden"
        style={{
          opacity: loaded ? 1 : 0,
          transition: loaded ? 'opacity 0.8s ease' : 'none',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <FeaturedReviews />
          <About />
          <CoverageCategories />
          <ArtistSubmissionCTA />
          <Gallery />
          <Stats />
        </main>
        <Footer />
      </div>
    </>
  )
}
