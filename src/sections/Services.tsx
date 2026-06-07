import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mic2, BookOpen, Newspaper, Radio, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    num: '01',
    icon: Mic2,
    label: 'Music & Video Reviews',
    tag: 'Live Show',
    desc: '"Like Love or Lose It" — submit your music or video and get it played live on the iAS show. Hosts Double V & Lady Buggg react in real time alongside guests and a live audience. Your art gets an honest, unfiltered response from real people.',
    detail: 'Aired on Verizon & Optimum TV. Available on Apple Podcasts and Spotify.',
    accentColor: '#8B5CF6',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform',
    cta: 'Submit Your Music',
  },
  {
    num: '02',
    icon: BookOpen,
    label: 'iAS Publication',
    tag: 'Print & Digital',
    desc: 'Get featured in the iAS Publication — a print and digital platform that promotes and markets independent artists. Your music, brand, and story reach an engaged audience that actively looks for new talent.',
    detail: 'Distributed digitally and across iAS media platforms.',
    accentColor: '#38BDF8',
    href: 'https://form.jotform.com/240573943157158',
    cta: 'Apply for Feature',
  },
  {
    num: '03',
    icon: Newspaper,
    label: 'Newsletter Advertising',
    tag: 'Direct Audience',
    desc: 'Put your music, release, or brand directly in front of the iAS newsletter audience — a community that actively supports independent artists. High-visibility ad placements that drive real attention to your work.',
    detail: 'Thousands of subscribers who are already tuned in to new music.',
    accentColor: '#8B5CF6',
    href: 'https://mailchi.mp/8cdeb371d69c/ias-music-home-of-the-ias-live-music-review',
    cta: 'Advertise Now',
  },
  {
    num: '04',
    icon: Radio,
    label: 'Registration Services',
    tag: 'Artist Onboarding',
    desc: 'Artist registration and onboarding support to get you fully set up on the iAS platform. Access submissions, features, and exposure opportunities the right way — organized, documented, and ready to grow.',
    detail: 'Get structured, get visible, get discovered — starting on day one.',
    accentColor: '#38BDF8',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform',
    cta: 'Register as an Artist',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([])
  const headRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]

      // Animate section heading in
      if (headRef.current) {
        gsap.fromTo(
          headRef.current.querySelectorAll('.svc-head-word'),
          { y: '100%', opacity: 0 },
          {
            y: '0%', opacity: 1, stagger: 0.07, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 80%' },
          }
        )
      }

      // Each service item animates in from below on scroll
      items.forEach((item) => {
        const content  = item.querySelector('.svc-content')
        const icon     = item.querySelector('.svc-icon')
        const bar      = item.querySelector('.svc-bar')
        const cta      = item.querySelector('.svc-cta')

        gsap.fromTo(
          [icon, content],
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 78%', once: true },
          }
        )

        if (bar) {
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: 1, duration: 0.9, ease: 'power3.inOut',
              scrollTrigger: { trigger: item, start: 'top 78%', once: true },
            }
          )
        }

        if (cta) {
          gsap.fromTo(
            cta,
            { y: 16, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 78%', once: true },
            }
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="interviews"
      className="py-24 md:py-32 border-y"
      style={{ borderColor: '#e2e2e0', background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div ref={headRef} className="mb-20 overflow-hidden">
          <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-4">
            What We Offer
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0]">
            {['Our', 'Services'].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.18em]">
                <span
                  className="svc-head-word block"
                  style={
                    i === 1
                      ? {
                          fontFamily: "'Instrument Serif', serif",
                          fontStyle: 'italic',
                          background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }
                      : {}
                  }
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* Service items */}
        <div className="space-y-0">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.num}
                ref={(el) => { itemRefs.current[i] = el }}
                className="group relative border-b"
                style={{ borderColor: '#e2e2e0' }}
              >
                {/* Animated top bar */}
                <div
                  className="svc-bar absolute top-0 left-0 h-px origin-left"
                  style={{
                    background: `linear-gradient(90deg, ${svc.accentColor}, transparent)`,
                    right: 0,
                    transform: 'scaleX(0)',
                  }}
                />

                <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-16 items-start">

                  {/* Left: number + icon */}
                  <div className="svc-icon flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3 lg:w-24">
                    <span
                      className="text-[56px] lg:text-[72px] font-black leading-none tabular-nums transition-colors duration-300"
                      style={{ color: 'transparent', WebkitTextStroke: `1.5px ${svc.accentColor}40` }}
                    >
                      {svc.num}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${svc.accentColor}15`, color: svc.accentColor }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Center: content */}
                  <div className="svc-content">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[9px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full border"
                        style={{ color: svc.accentColor, borderColor: `${svc.accentColor}40`, background: `${svc.accentColor}0d` }}
                      >
                        {svc.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-text mb-4 transition-colors duration-300 group-hover:text-[#0a0a0a]">
                      {svc.label}
                    </h3>

                    <p className="text-muted text-base leading-relaxed mb-3 max-w-xl">
                      {svc.desc}
                    </p>

                    <p className="text-sm text-muted/60 leading-relaxed max-w-md italic">
                      {svc.detail}
                    </p>
                  </div>

                  {/* Right: CTA */}
                  <div className="svc-cta lg:pt-4">
                    <motion.a
                      href={svc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border transition-all duration-300 whitespace-nowrap group/btn"
                      style={{ borderColor: '#e2e2e0', color: '#0a0a0a' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = svc.accentColor
                        e.currentTarget.style.color = svc.accentColor
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e2e2e0'
                        e.currentTarget.style.color = '#0a0a0a'
                      }}
                    >
                      {svc.cta}
                      <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Counter strip */}
        <div className="mt-16 flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-muted">
            {SERVICES.length} Services Available
          </span>
          <div className="flex items-center gap-1.5">
            {SERVICES.map((svc) => (
              <div
                key={svc.num}
                className="w-8 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${svc.accentColor}, ${svc.accentColor}40)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
