import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const TICKER = [
  'Independent Artist Spotlight', '✦', 'Like Love or Lose It', '✦',
  'Live Music Reviews', '✦', 'iAS Publication', '✦',
  'Artist Development', '✦', 'Music & Video Submissions', '✦',
  'Newsletter Features', '✦', 'Get Organized. Get Visible. Get Discovered.', '✦',
]

export default function Hero() {
  const heroRef      = useRef<HTMLElement>(null)
  const orb1Ref      = useRef<HTMLDivElement>(null)
  const orb2Ref      = useRef<HTMLDivElement>(null)
  const eyebrowRef   = useRef<HTMLDivElement>(null)
  const ctaRef       = useRef<HTMLDivElement>(null)
  const scrollIndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Word-by-word reveal for headline
    const tl = gsap.timeline({ delay: 0.15 })

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    )
    .fromTo(
      '.hero-word',
      { y: '110%', opacity: 0 },
      { y: '0%', opacity: 1, stagger: 0.1, duration: 1.0, ease: 'power4.out' },
      '-=0.4'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )

    if (scrollIndRef.current) {
      const dot = scrollIndRef.current.querySelector('.scroll-dot')
      gsap.fromTo(scrollIndRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 2.2 })
      if (dot) {
        gsap.to(dot, { y: 14, repeat: -1, yoyo: true, duration: 1.3, ease: 'power2.inOut', delay: 2.6 })
      }
    }
  }, [])

  // Mouse parallax on background orbs
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const xR = (e.clientX / innerWidth - 0.5) * 2
      const yR = (e.clientY / innerHeight - 0.5) * 2
      gsap.to(orb1Ref.current, { x: xR * 22, y: yR * 14, duration: 1.8, ease: 'power2.out' })
      gsap.to(orb2Ref.current, { x: xR * -16, y: yR * -10, duration: 2.2, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const line1 = ['Where', 'Live', 'Music']
  const line2 = ['Gets', 'Remembered']

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{ background: '#ffffff' }} />

        <div
          ref={orb1Ref}
          className="absolute"
          style={{
            top: '-5%', left: '50%',
            transform: 'translateX(-50%)',
            width: '60%', height: '90%',
            background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.30) 0%, transparent 65%)',
            filter: 'blur(52px)',
            willChange: 'transform',
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute"
          style={{
            bottom: '0', left: '8%',
            width: '42%', height: '70%',
            background: 'radial-gradient(ellipse at bottom, rgba(56,189,248,0.24) 0%, transparent 65%)',
            filter: 'blur(58px)',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '0', right: '5%',
            width: '32%', height: '60%',
            background: 'radial-gradient(ellipse at bottom, rgba(139,92,246,0.18) 0%, transparent 60%)',
            filter: 'blur(64px)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(255,255,255,0.6) 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(0deg, #ffffff 0%, transparent 100%)' }}
        />
      </div>

      {/* Hero Copy */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-8 text-center max-w-5xl mx-auto w-full">

        {/* Eyebrow */}
        <div ref={eyebrowRef} style={{ opacity: 0 }} className="mb-7">
          <span className="inline-flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase text-muted tracking-[0.28em]">
            <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }} />
            iAS LIVE MUSIC REVIEW
            <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #38BDF8, #8B5CF6)' }} />
          </span>
        </div>

        {/* Headline — word-by-word reveal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black leading-[1.04] tracking-tight mb-6">
          {/* Line 1 */}
          <span className="block">
            {line1.map((word, i) => (
              <span key={i} className="word inline-block overflow-hidden mr-[0.22em] last:mr-0">
                <span className="hero-word block">{word}</span>
              </span>
            ))}
          </span>
          {/* Line 2 — gradient italic */}
          <span className="block" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}>
            {line2.map((word, i) => (
              <span key={i} className="word inline-block overflow-hidden mr-[0.22em] last:mr-0">
                <span
                  className="hero-word block"
                  style={{
                    background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* Sub + CTAs */}
        <div ref={ctaRef} style={{ opacity: 0 }}>
          <p
            className="text-base md:text-lg max-w-xl leading-relaxed mb-10 mx-auto"
            style={{ color: '#9B9BA3' }}
          >
            The multimedia platform connecting independent artists with honest reviews,
            real exposure, and the tools to get organized, visible, and discovered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#reviews"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
            >
              Explore Reviews
            </motion.a>
            <motion.a
              href="#submit"
              whileHover={{ scale: 1.04, borderColor: '#8B5CF6' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm border transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: '#e2e2e0', color: '#0a0a0a' }}
            >
              Submit Your Music
            </motion.a>
          </div>
        </div>
      </div>

      {/* Ticker Marquee with gradient fade edges */}
      <div className="relative z-10 border-y overflow-hidden py-3" style={{ borderColor: '#e2e2e0' }}>
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #ffffff, transparent)' }} />
        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #ffffff, transparent)' }} />

        <div className="flex whitespace-nowrap select-none">
          <ul className="animate-marquee flex items-center gap-10 pr-10 list-none">
            {TICKER.map((t, i) => (
              <li
                key={i}
                className="text-[10px] font-semibold tracking-[0.22em] uppercase"
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
                className="text-[10px] font-semibold tracking-[0.22em] uppercase"
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
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden rounded-full" style={{ background: '#e2e2e0' }}>
          <div
            className="scroll-dot absolute top-0 left-0 right-0 h-4 rounded-full"
            style={{ background: 'linear-gradient(180deg, #8B5CF6, #38BDF8)' }}
          />
        </div>
      </div>
    </section>
  )
}
