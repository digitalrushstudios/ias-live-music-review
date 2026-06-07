import { useState } from 'react'
import LoadingScreen from './sections/LoadingScreen'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import Hero from './sections/Hero'
import Statement from './sections/Statement'
import YouTubeFeature from './sections/YouTubeFeature'
import FeaturedReviews from './sections/FeaturedReviews'
import About from './sections/About'
import Services from './sections/Services'
import ArtistOfTheQuarter from './sections/ArtistOfTheQuarter'
import ArtistSubmissionCTA from './sections/ArtistSubmissionCTA'
import Merch from './sections/Merch'
import Stats from './sections/Stats'
import Footer from './sections/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" aria-hidden />

      <LoadingScreen onComplete={() => setLoaded(true)} />

      <SmoothScroll>
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
            <Statement />
            <YouTubeFeature />
            <FeaturedReviews />
            <About />
            <Services />
            <ArtistOfTheQuarter />
            <ArtistSubmissionCTA />
            <Merch />
            <Stats />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  )
}
