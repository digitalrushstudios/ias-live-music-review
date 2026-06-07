import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ShoppingBag } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TICKER_ITEMS = [
  'iAS Merch', '✦', 'Wear the Movement', '✦',
  'Independent Artist Lifestyle', '✦', 'Represent iAS', '✦',
  'Limited Drops', '✦', 'Bronx Born. Culture Driven.', '✦',
]

const PRODUCTS = [
  {
    name: 'iAS Classic Tee',
    desc: 'Heavyweight cotton. Clean logo placement. Bronx made.',
    tag: 'Apparel',
    accentColor: '#8B5CF6',
    img: '/ias-live-music-review/assets/ias-shirts-mockup-sq.png',
    badge: 'Bestseller',
  },
  {
    name: 'iAS Snapback',
    desc: 'Structured 6-panel. Embroidered iAS icon. One size fits most.',
    tag: 'Headwear',
    accentColor: '#38BDF8',
    img: '/ias-live-music-review/assets/ias-hat-mockup-sq.png',
    badge: null,
  },
  {
    name: 'iAS Suit Set',
    desc: 'Clean two-piece. iAS branding. Built to stand out on any stage.',
    tag: 'Apparel',
    accentColor: '#8B5CF6',
    img: '/ias-live-music-review/assets/ias-suit-mockup-sq.png',
    badge: 'New',
  },
  {
    name: 'iAS Tote Bag',
    desc: 'Heavy canvas. Double handles. iAS statement print.',
    tag: 'Accessories',
    accentColor: '#38BDF8',
    img: '/ias-live-music-review/assets/ias-tote-mockup-sq.png',
    badge: null,
  },
]

export default function Merch() {
  const sectionRef   = useRef<HTMLElement>(null)
  const videoRef     = useRef<HTMLDivElement>(null)
  const headlineRef  = useRef<HTMLDivElement>(null)
  const cardsRef     = useRef<HTMLDivElement>(null)
  const videoElRef   = useRef<HTMLVideoElement>(null)

  // Parallax on video container as you scroll through section
  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  // Headline word stagger reveal
  useEffect(() => {
    if (!headlineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current!.querySelectorAll('.merch-word'),
        { y: '105%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          stagger: 0.08,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  // Cards stagger slide-up
  useEffect(() => {
    if (!cardsRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current!.querySelectorAll('.merch-card'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="merch" className="overflow-hidden" style={{ background: '#0a0a0a' }}>

      {/* ── 16:9 Video Hero ─────────────────────────────────────────── */}
      <div
        ref={videoRef}
        className="relative w-full"
        style={{ aspectRatio: '16 / 9', maxHeight: '90vh' }}
      >
        <video
          ref={videoElRef}
          src="/ias-live-music-review/assets/shirt-mockup-video-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 20%' }}
        />

        {/* Gradient: clear in upper half so subjects' faces show, heavy at bottom for text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.0) 30%, rgba(10,10,10,0.0) 50%, rgba(10,10,10,0.92) 100%)' }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.10) 0%, transparent 70%)' }}
        />

        {/* Top label */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8">
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
            iAS Multi Media Group
          </span>
        </div>

        {/* Bottom copy — pushed down by the gradient so text never covers faces */}
        <div ref={headlineRef} className="absolute bottom-0 left-0 right-0 p-6 md:p-14">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-3 md:mb-4" style={{ color: '#8B5CF6' }}>
            The Collection
          </p>
          <h2 className="overflow-hidden mb-1 md:mb-2">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-black leading-[1.0] tracking-tight text-white">
              {['Wear', 'the'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                  <span className="merch-word block">{w}</span>
                </span>
              ))}
            </span>
          </h2>
          <h2 className="overflow-hidden mb-6 md:mb-8">
            <span
              className="block text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-black leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            >
              {['Movement.'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <span
                    className="merch-word block"
                    style={{
                      background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {w}
                  </span>
                </span>
              ))}
            </span>
          </h2>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-sm text-white hover:shadow-[0_0_44px_rgba(139,92,246,0.55)] transition-shadow duration-300"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
          >
            <ShoppingBag size={14} />
            Get Notified
          </motion.a>
        </div>
      </div>

      {/* ── Ticker ─────────────────────────────────────────────────── */}
      <div className="border-y overflow-hidden py-3.5" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #0a0a0a, transparent)' }} />
        <div className="flex whitespace-nowrap select-none">
          <ul className="animate-marquee flex items-center gap-10 pr-10 list-none">
            {TICKER_ITEMS.map((t, i) => (
              <li key={i} className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: t === '✦' ? '#8B5CF6' : 'rgba(255,255,255,0.35)' }}>
                {t}
              </li>
            ))}
          </ul>
          <ul className="animate-marquee2 flex items-center gap-10 pr-10 list-none" aria-hidden>
            {TICKER_ITEMS.map((t, i) => (
              <li key={i} className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: t === '✦' ? '#8B5CF6' : 'rgba(255,255,255,0.35)' }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Lifestyle Editorial Photo ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 md:pt-16">
        {/* Mobile: 4/3 so the couch subject is visible; desktop: 21/9 cinematic */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: '4/3' }}
        >
          <style>{`@media(min-width:768px){#merch-lifestyle{aspect-ratio:21/9!important;}}`}</style>
          <img
            src="/ias-live-music-review/assets/ias-couch-mockup.png"
            alt="iAS Merch lifestyle — hoodie in the studio"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.65) 100%)' }}
          />
          {/* On md+ switch to left-side overlay; on mobile, bottom overlay */}
          <div className="absolute left-0 bottom-0 right-0 md:top-0 flex flex-col justify-end md:justify-center p-6 md:p-12">
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-2 md:mb-3" style={{ color: '#8B5CF6' }}>
              iAS Lifestyle
            </p>
            <p className="text-white font-black text-xl md:text-3xl tracking-tight leading-tight max-w-xs">
              Wear it in<br />
              <span className="accent-gradient-text" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}>
                the studio.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Product Grid ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-16">
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              iAS Merch
            </span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              The{' '}
              <span
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
                className="accent-gradient-text"
              >
                Lineup
              </span>
            </h3>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Merch drops coming soon. Get notified and be first to represent the movement.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.name}
              className="merch-card group flex flex-col cursor-pointer"
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              {/* 1:1 photo — clean, no overlay text */}
              <div
                className="relative rounded-2xl overflow-hidden border mb-4"
                style={{ aspectRatio: '1/1', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle top badge only — doesn't cover the photo */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {p.badge && (
                    <span
                      className="text-[9px] font-black tracking-[0.14em] uppercase px-2.5 py-1 rounded-full text-white"
                      style={{ background: p.accentColor }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                {/* Hover glow border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${p.accentColor}55` }}
                />
              </div>

              {/* Text below photo */}
              <div className="px-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[9px] font-bold tracking-[0.22em] uppercase"
                    style={{ color: p.accentColor }}
                  >
                    {p.tag}
                  </span>
                  <div
                    className="inline-flex items-center gap-1 text-[10px] font-semibold opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: p.accentColor }}
                  >
                    Notify Me <ArrowUpRight size={11} />
                  </div>
                </div>
                <h4 className="text-base font-black tracking-tight text-white mb-1">{p.name}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 md:p-8 rounded-2xl border"
          style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.07)' }}
        >
          <div>
            <p className="text-white font-black text-xl tracking-tight mb-1">Be first to shop the drop.</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Submit your info and we'll notify you when iAS merch is available.
            </p>
          </div>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white hover:shadow-[0_0_36px_rgba(139,92,246,0.5)] transition-shadow duration-300"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
          >
            <ShoppingBag size={13} />
            Get Notified
          </motion.a>
        </div>
      </div>
    </section>
  )
}
