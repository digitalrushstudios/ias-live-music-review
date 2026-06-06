import { motion } from 'framer-motion'
import { Mic2, BookOpen, Newspaper, Radio, ArrowUpRight } from 'lucide-react'
import { useStaggerReveal } from '../hooks/useScrollAnimation'

const CATEGORIES = [
  {
    num:   '01',
    icon:  Mic2,
    label: 'Music & Video Reviews',
    desc:  '"Like Love or Lose It": submit your music or video and get it played live on the iAS show. Hosts Double V & Lady Buggg react in real time alongside guests and a live audience.',
    color: '#8B5CF6',
    href:  'https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform',
  },
  {
    num:   '02',
    icon:  BookOpen,
    label: 'iAS Publication',
    desc:  'Get featured in the iAS Publication, a print and digital platform that promotes and markets independent artists, bringing attention to your music, brand, and story.',
    color: '#38BDF8',
    href:  'https://form.jotform.com/240573943157158',
  },
  {
    num:   '03',
    icon:  Newspaper,
    label: 'Newsletter Advertising',
    desc:  'Reach the iAS audience directly through newsletter ad placements. Put your music, release, or brand in front of a community that actively supports independent artists.',
    color: '#8B5CF6',
    href:  'https://mailchi.mp/8cdeb371d69c/ias-music-home-of-the-ias-live-music-review',
  },
  {
    num:   '04',
    icon:  Radio,
    label: 'Registration Services',
    desc:  'Artist registration and onboarding support to get you set up on the iAS platform so you can access submissions, features, and exposure opportunities the right way.',
    color: '#38BDF8',
    href:  'https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform',
  },
]

export default function CoverageCategories() {
  const gridRef = useStaggerReveal<HTMLDivElement>('article', { stagger: 0.11 })

  return (
    <section id="interviews" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-4">
          What We Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Our{' '}
          <span
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            className="accent-gradient-text"
          >
            Services
          </span>
        </h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon
          return (
            <motion.article
              key={cat.label}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col gap-5 p-7 rounded-2xl border border-stroke overflow-hidden group cursor-pointer"
              style={{ background: '#ffffff' }}
              onClick={() => window.open(cat.href, '_blank', 'noopener,noreferrer')}
            >
              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 90% 70% at 50% 120%, ${cat.color}1A 0%, transparent 70%)` }}
              />

              {/* Top row: icon + number */}
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cat.color}1A`, color: cat.color }}
                >
                  <Icon size={22} />
                </div>
                <span
                  className="text-[28px] font-black leading-none tabular-nums"
                  style={{ color: 'transparent', WebkitTextStroke: `1px ${cat.color}35` }}
                >
                  {cat.num}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-text text-base leading-snug">{cat.label}</h3>
                  <ArrowUpRight
                    size={14}
                    className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-text transition-all duration-200 shrink-0 ml-2"
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed">{cat.desc}</p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
