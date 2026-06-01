import { motion } from 'framer-motion'
import { useStaggerReveal } from '../hooks/useScrollAnimation'

/*
  REPLACE: Each gallery item uses a CSS gradient as a placeholder.
  To use real photos:
    1. Add images to /public/gallery/ (e.g., gallery-1.jpg)
    2. Set imageUrl: '/gallery/gallery-1.jpg' on each item
    3. Replace the gradient div with:
       <img src={item.imageUrl} alt={item.alt} className="absolute inset-0 w-full h-full object-cover" />
*/
const GALLERY_ITEMS = [
  {
    alt:    'Stage lights from the crowd',
    label:  'Stage Lights',
    gradient: 'linear-gradient(145deg, #0A0018 0%, #1A0535 50%, #0A0A28 100%)',
    glow:   'rgba(139,92,246,0.5)',
    span:   'col-span-1 row-span-2',
  },
  {
    alt:    'Artist performing under blue spotlight',
    label:  'Artist Spotlight',
    gradient: 'linear-gradient(145deg, #00101E 0%, #001830 60%, #000A18 100%)',
    glow:   'rgba(56,189,248,0.45)',
    span:   'col-span-2 row-span-1',
  },
  {
    alt:    'Crowd energy at concert',
    label:  'Crowd Energy',
    gradient: 'linear-gradient(145deg, #100A1E 0%, #201030 60%, #0A0818 100%)',
    glow:   'rgba(139,92,246,0.4)',
    span:   'col-span-1 row-span-1',
  },
  {
    alt:    'Venue atmosphere and lighting rig',
    label:  'Venue Atmosphere',
    gradient: 'linear-gradient(145deg, #001018 0%, #001525 60%, #000818 100%)',
    glow:   'rgba(56,189,248,0.35)',
    span:   'col-span-1 row-span-1',
  },
  {
    alt:    'Behind the scenes backstage',
    label:  'Backstage',
    gradient: 'linear-gradient(145deg, #180820 0%, #200A28 60%, #100618 100%)',
    glow:   'rgba(139,92,246,0.3)',
    span:   'col-span-1 row-span-2',
  },
  {
    alt:    'Artist close-up mid-performance',
    label:  'In the Moment',
    gradient: 'linear-gradient(145deg, #000E20 0%, #00122A 60%, #000810 100%)',
    glow:   'rgba(56,189,248,0.4)',
    span:   'col-span-2 row-span-1',
  },
  {
    alt:    'Festival crowd from stage',
    label:  'Festival Stage',
    gradient: 'linear-gradient(145deg, #0A0520 0%, #140A30 60%, #080318 100%)',
    glow:   'rgba(139,92,246,0.45)',
    span:   'col-span-1 row-span-1',
  },
  {
    alt:    'Smoke and light beams',
    label:  'Light & Smoke',
    gradient: 'linear-gradient(145deg, #001020 0%, #001828 60%, #000A18 100%)',
    glow:   'rgba(56,189,248,0.35)',
    span:   'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  const gridRef = useStaggerReveal<HTMLDivElement>('.gallery-item', { stagger: 0.07, y: 30, start: 'top 80%' })

  return (
    <section id="events" className="py-24 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
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
          Moments from stages, crowds, and the spaces between — captured by the iAS team.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            className={`gallery-item relative overflow-hidden rounded-2xl cursor-pointer group ${item.span}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* REPLACE: gradient background -> real <img> tag here */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              style={{ background: item.gradient }}
            >
              <div
                className="absolute inset-0"
                style={{ background: `radial-gradient(ellipse 50% 40% at 50% 100%, ${item.glow} 0%, transparent 70%)` }}
              />
            </div>
            <div
              className="absolute inset-0 flex items-end p-4"
              style={{ background: 'linear-gradient(0deg, rgba(5,5,6,0.85) 0%, transparent 60%)' }}
            >
              <span
                className="text-[10px] font-semibold tracking-[0.16em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: '#9B9BA3' }}
              >
                {item.label}
              </span>
            </div>
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: `inset 0 0 0 1px ${item.glow}` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
