import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollAnimation'

const GALLERY_ITEMS = [
  { alt: 'Stage lights from the crowd',         label: 'Stage Lights',      gradient: 'linear-gradient(145deg, #0A0018 0%, #1A0535 50%, #0A0A28 100%)', glow: 'rgba(139,92,246,0.55)', tall: true },
  { alt: 'Artist performing under blue spotlight', label: 'Artist Spotlight', gradient: 'linear-gradient(145deg, #00101E 0%, #001830 60%, #000A18 100%)', glow: 'rgba(56,189,248,0.5)',  tall: false },
  { alt: 'Crowd energy at concert',              label: 'Crowd Energy',      gradient: 'linear-gradient(145deg, #100A1E 0%, #201030 60%, #0A0818 100%)', glow: 'rgba(139,92,246,0.45)', tall: false },
  { alt: 'Venue atmosphere and lighting rig',    label: 'Venue Vibes',       gradient: 'linear-gradient(145deg, #001018 0%, #001525 60%, #000818 100%)', glow: 'rgba(56,189,248,0.4)',  tall: true },
  { alt: 'Behind the scenes backstage',          label: 'Backstage',         gradient: 'linear-gradient(145deg, #180820 0%, #200A28 60%, #100618 100%)', glow: 'rgba(139,92,246,0.4)',  tall: false },
  { alt: 'Artist close-up mid-performance',      label: 'In the Moment',     gradient: 'linear-gradient(145deg, #000E20 0%, #00122A 60%, #000810 100%)', glow: 'rgba(56,189,248,0.45)', tall: true },
  { alt: 'Festival crowd from stage',            label: 'Festival Stage',    gradient: 'linear-gradient(145deg, #0A0520 0%, #140A30 60%, #080318 100%)', glow: 'rgba(139,92,246,0.5)',  tall: false },
]

export default function Gallery() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const headerRef  = useScrollReveal<HTMLDivElement>({ y: 24 })

  return (
    <section id="events" className="py-24 md:py-32 overflow-hidden" style={{ background: '#f5f5f3' }}>
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-3">
              Visual Archive
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Concert{' '}
              <span
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
                className="accent-gradient-text"
              >
                Gallery
              </span>
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed">
            Moments from stages, crowds, and the spaces between.{' '}
            <span className="text-muted/50">Drag to explore →</span>
          </p>
        </div>
      </div>

      {/* Horizontal drag scroll track */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #f5f5f3, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #f5f5f3, transparent)' }}
        />

        <motion.div
          ref={trackRef}
          className="flex gap-3 px-6 md:px-14"
          drag="x"
          dragConstraints={{ right: 0, left: -(GALLERY_ITEMS.length * 280) }}
          dragElastic={0.12}
          style={{ width: 'max-content' }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shrink-0 group"
              style={{
                width: item.tall ? 260 : 220,
                height: item.tall ? 380 : 280,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Background gradient placeholder */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: item.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${item.glow} 0%, transparent 70%)` }}
                />
              </div>

              {/* Bottom overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(0deg, rgba(5,5,6,0.9) 0%, transparent 55%)' }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                  style={{ color: '#9B9BA3', display: 'block' }}
                >
                  {item.label}
                </span>
              </div>

              {/* Inset glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${item.glow}` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
