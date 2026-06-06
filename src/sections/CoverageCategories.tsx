import { motion } from 'framer-motion'
import { Mic2, MessageSquare, Camera, Newspaper, ArrowUpRight } from 'lucide-react'
import { useStaggerReveal } from '../hooks/useScrollAnimation'

const CATEGORIES = [
  {
    num:   '01',
    icon:  Mic2,
    label: 'Live Reviews',
    desc:  'In-depth, honest critiques of live performances from club gigs to festival headliners. Rated on energy, setlist, stage presence, and crowd connection.',
    color: '#8B5CF6',
  },
  {
    num:   '02',
    icon:  MessageSquare,
    label: 'Artist Interviews',
    desc:  'Conversations with independent artists, emerging acts, and established performers about their process, journey, and the reality of life on the road.',
    color: '#38BDF8',
  },
  {
    num:   '03',
    icon:  Camera,
    label: 'Concert Photography',
    desc:  "Visual storytelling from the pit and the crowd. Photography that captures the light, sweat, and emotion words alone can't hold.",
    color: '#8B5CF6',
  },
  {
    num:   '04',
    icon:  Newspaper,
    label: 'Music News & Culture',
    desc:  "Commentary, features, and cultural analysis on the stories shaping live music — from venue closures to streaming's impact on touring.",
    color: '#38BDF8',
  },
]

export default function CoverageCategories() {
  const gridRef = useStaggerReveal<HTMLDivElement>('article', { stagger: 0.11 })

  return (
    <section id="interviews" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-4">
          What We Cover
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Coverage{' '}
          <span
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            className="accent-gradient-text"
          >
            Categories
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
              style={{ background: '#101014' }}
            >
              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 90% 70% at 50% 120%, ${cat.color}1A 0%, transparent 70%)` }}
              />

              {/* Top row: number + icon */}
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cat.color}1A`, color: cat.color }}
                >
                  <Icon size={22} />
                </div>
                <span
                  className="text-[28px] font-black leading-none tabular-nums"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: `1px ${cat.color}35`,
                  }}
                >
                  {cat.num}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-text text-base">{cat.label}</h3>
                  <ArrowUpRight
                    size={14}
                    className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-text transition-all duration-200 shrink-0"
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
