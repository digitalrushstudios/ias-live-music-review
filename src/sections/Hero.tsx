import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TICKER = [
  'Independent Artist Spotlight', '✦', 'Like Love or Lose It', '✦',
  'Live Music Reviews', '✦', 'iAS Publication', '✦',
  'Artist Development', '✦', 'Music & Video Submissions', '✦',
  'Newsletter Features', '✦', 'Get Organized. Get Visible. Get Discovered.', '✦',
]

export default function Hero() {
  const heroRef       = useRef<HTMLElement>(null)
  const orb1Ref       = useRef<HTMLDivElement>(null)
  const orb2Ref       = useRef<HTMLDivElement>(null)
  const ctaRef        = useRef<HTMLDivElement>(null)
  const scrollIndRef  = useRef<HTMLDivElement>(null)
  const concertImgRef = useRef<HTMLDivElement>(null)
  const logoRef       = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo(logoRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }
    )
    .fromTo('.hero-word',
      { y: '110%', opacity: 0 },
      { y: '0%', opacity: 1, stagger: 0.1, duration: 1.0, ease: 'power4.out' },
      '-=0.5'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )

    if (scrollIndRef.current) {
      const dot = scrollIndRef.current.querySelector('.scroll-dot')
      gsap.fromTo(scrollIndRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 2.4 })
      if (dot) {
        gsap.to(dot, { y: 14, repeat: -1, yoyo: true, duration: 1.3, ease: 'power2.inOut', delay: 2.8 })
      }
    }
  }, [])

  // Scroll-fade concert photo
  useEffect(() => {
    if (!concertImgRef.current || !heroRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(concertImgRef.current, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  // Mouse parallax on orbs
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

      {/* Black background */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{ background: '#0a0a0a' }} />

        {/* Concert photo — visible on dark, fades on scroll */}
        <div ref={concertImgRef} className="absolute inset-0">
          <img
            src="/ias-live-music-review/assets/concert-hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.32, mixBlendMode: 'screen' }}
          />
        </div>

        {/* Purple/sky glow orbs */}
        <div
          ref={orb1Ref}
          className="absolute"
          style={{
            top: '-5%', left: '50%',
            transform: 'translateX(-50%)',
            width: '60%', height: '90%',
            background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.35) 0%, transparent 65%)',
            filter: 'blur(60px)',
            willChange: 'transform',
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute"
          style={{
            bottom: '0', left: '8%',
            width: '42%', height: '70%',
            background: 'radial-gradient(ellipse at bottom, rgba(56,189,248,0.22) 0%, transparent 65%)',
            filter: 'blur(64px)',
            willChange: 'transform',
          }}
        />
        {/* Fade to black at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(0deg, #0a0a0a 0%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-8 text-center max-w-5xl mx-auto w-full">

        {/* Logo with tagline — prominent center */}
        <div ref={logoRef} style={{ opacity: 0 }} className="mb-12">
          <img
            src="/ias-live-music-review/assets/ias-logo-tagline.png"
            alt="iAS — Independent Artist Spotlight"
            className="w-auto mx-auto"
            style={{ height: '90px', filter: 'invert(1)', userSelect: 'none' }}
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black leading-[1.04] tracking-tight mb-6 text-white">
          <span className="block">
            {line1.map((word, i) => (
              <span key={i} className="word inline-block overflow-hidden mr-[0.22em] last:mr-0">
                <span className="hero-word block">{word}</span>
              </span>
            ))}
          </span>
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
          <p className="text-base md:text-lg max-w-xl leading-relaxed mb-10 mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            The multimedia platform connecting independent artists with honest reviews,
            real exposure, and the tools to get organized, visible, and discovered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#reviews"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
            >
              Explore Reviews
            </motion.a>
            <motion.a
              href="#submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm border transition-all duration-300 text-white hover:border-[#8B5CF6]"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              Submit Your Music
            </motion.a>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-y overflow-hidden py-3" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #0a0a0a, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #0a0a0a, transparent)' }} />
        <div className="flex whitespace-nowrap select-none">
          <ul className="animate-marquee flex items-center gap-10 pr-10 list-none">
            {TICKER.map((t, i) => (
              <li key={i} className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: t === '✦' ? '#8B5CF6' : 'rgba(255,255,255,0.4)' }}>
                {t}
              </li>
            ))}
          </ul>
          <ul className="animate-marquee2 flex items-center gap-10 pr-10 list-none" aria-hidden>
            {TICKER.map((t, i) => (
              <li key={i} className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: t === '✦' ? '#8B5CF6' : 'rgba(255,255,255,0.4)' }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndRef}
        style={{ opacity: 0 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden
      >
        <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>Scroll</span>
        <div className="w-px h-10 relative overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
          <div className="scroll-dot absolute top-0 left-0 right-0 h-4 rounded-full"
            style={{ background: 'linear-gradient(180deg, #8B5CF6, #38BDF8)' }} />
        </div>
      </div>
    </section>
  )
}
