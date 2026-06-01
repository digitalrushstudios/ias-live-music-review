import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const TICKER = [
  'Live Music Reviews', '✦', 'Artist Spotlights', '✦',
  'Concert Photography', '✦', 'Emerging Artists', '✦',
  'Music Culture', '✦', 'Venue Features', '✦',
  'Industry Interviews', '✦', 'New Music Features', '✦',
]

export default function Hero() {
  const eyebrowRef   = useRef<HTMLDivElement>(null)
  const headlineRef  = useRef<HTMLHeadingElement>(null)
  const subRef       = useRef<HTMLParagraphElement>(null)
  const ctaRef       = useRef<HTMLDivElement>(null)
  const scrollIndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP hero entrance timeline
    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 22, letterSpacing: '0.05em' },
      { opacity: 1, y: 0, letterSpacing: '0.28em', duration: 1.1, ease: 'power3.out' }
    )
    .fromTo(
      headlineRef.current,
      { opacity: 0, y: 64, skewY: 1.5 },
      { opacity: 1, y: 0, skewY: 0, duration: 1.3, ease: 'power4.out' },
      '-=0.65'
    )
    .fromTo(
      subRef.current,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )

    // GSAP scroll indicator
    if (scrollIndRef.current) {
      const dot = scrollIndRef.current.querySelector('.scroll-dot')
      gsap.fromTo(
        scrollIndRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.7, delay: 2.4, ease: 'power2.out' }
      )
      if (dot) {
        gsap.to(dot, {
          y: 14,
          repeat: -1,
          yoyo: true,
          duration: 1.3,
          ease: 'power2.inOut',
          delay: 2.8,
        })
      }
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/*
        HERO BACKGROUND
        REPLACE: Swap the gradient divs below with a real video or image.
        For video: <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src="/hero-video.mp4" />
        For image: <img src="/hero-bg.jpg" className="absolute inset-0 w-full h-full object-cover" alt="" />
        Then keep only the overlay divs beneath.
      */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{ background: '#03030A' }} />

        {/* Center-top purple beam */}
        <div
          className="absolute"
          style={{
            top: '-5%', left: '50%',
            transform: 'translateX(-50%)',
            width: '55%', height: '85%',
            background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.28) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Left-stage blue light */}
        <div
          className="absolute"
          style={{
            bottom: '0', left: '12%',
            width: '35%', height: '65%',
            background: 'radial-gradient(ellipse at bottom, rgba(56,189,248,0.22) 0%, transparent 65%)',
            filter: 'blur(55px)',
          }}
        />

        {/* Right-stage purple light */}
        <div
          className="absolute"
          style={{
            bottom: '0', right: '8%',
            width: '30%', height: '60%',
            background: 'radial-gradient(ellipse at bottom, rgba(139,92,246,0.18) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Floor reflection */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[28%]"
          style={{
            background: 'linear-gradient(0deg, rgba(56,189,248,0.06) 0%, rgba(139,92,246,0.03) 50%, transparent 100%)',
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(3,3,10,0.88) 100%)' }}
        />

        {/* Page transition to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-36"
          style={{ background: 'linear-gradient(0deg, #050506 0%, transparent 100%)' }}
        />
      </div>

      {/* Hero Copy */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-8 text-center max-w-5xl mx-auto w-full">

        {/* Eyebrow */}
        <div ref={eyebrowRef} style={{ opacity: 0 }} className="mb-7">
          <span className="inline-flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase text-muted">
            <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }} />
            iAS LIVE MUSIC REVIEW
            <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #38BDF8, #8B5CF6)' }} />
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          style={{ opacity: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black leading-[1.04] tracking-tight mb-6"
        >
          Where Live Music
          <br />
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Gets Remembered
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          style={{ opacity: 0, color: '#9B9BA3' }}
          className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          Reviews, artist stories, concert coverage, and culture-driven media built
          for the artists and fans who keep live music alive.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          style={{ opacity: 0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#reviews"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(139,92,246,0.45)]"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
          >
            Explore Reviews
          </motion.a>

          {/* REPLACE: Update href to your submission form URL */}
          <motion.a
            href="#submit"
            whileHover={{ scale: 1.04, borderColor: '#8B5CF6' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm border transition-all duration-300 hover:bg-white/5"
            style={{ borderColor: '#24242A', color: '#F5F5F5' }}
          >
            Submit Your Music
          </motion.a>
        </div>
      </div>

      {/* Ticker Marquee */}
      <div
        className="relative z-10 border-y overflow-hidden py-3"
        style={{ borderColor: 'rgba(36,36,42,0.6)' }}
      >
        <div className="flex whitespace-nowrap select-none">
          <ul className="animate-marquee flex items-center gap-10 pr-10 list-none">
            {TICKER.map((t, i) => (
              <li
                key={i}
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: t === '✦' ? '#8B5CF6' : '#9B9BA3' }}
              >
                {t}
              </li>
            ))}
          </ul>
          <ul className="animate-marquee2 flex items-center gap-10 pr-10 list-none" aria-hidden>
            {TICKER.map((t, i) => (
              <li
                key={i}
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: t === '✦' ? '#8B5CF6' : '#9B9BA3' }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndRef}
        style={{ opacity: 0 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden
      >
        <span className="text-[9px] tracking-[0.28em] uppercase text-muted">Scroll</span>
        <div
          className="w-px h-10 relative overflow-hidden rounded-full"
          style={{ background: '#24242A' }}
        >
          <div
            className="scroll-dot absolute top-0 left-0 right-0 h-4 rounded-full"
            style={{ background: 'linear-gradient(180deg, #8B5CF6, #38BDF8)' }}
          />
        </div>
      </div>
    </section>
  )
}
