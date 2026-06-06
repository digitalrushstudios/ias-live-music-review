import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { useStaggerReveal } from '../hooks/useScrollAnimation'

const REVIEWS = [
  {
    num: '01',
    category: 'Live Performance',
    categoryColor: '#8B5CF6',
    title: 'A Night of Pure Energy: The Setlist That Moved a Crowd',
    excerpt:
      'From the first note to the final encore, this performance redefined what a live show can be — raw, electric, and unforgettable.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    gradient: 'linear-gradient(145deg, #120720 0%, #0D1535 60%, #091525 100%)',
    accent:   'rgba(139,92,246,0.4)',
    size:     'large',
  },
  {
    num: '02',
    category: 'Artist Spotlight',
    categoryColor: '#38BDF8',
    title: 'Rising from the Underground: An Artist Redefining the Genre',
    excerpt:
      'Before the sold-out shows and streaming millions, there was a stage, a microphone, and a story worth telling.',
    date: 'May 22, 2026',
    readTime: '4 min read',
    gradient: 'linear-gradient(145deg, #091525 0%, #120720 60%, #0D1535 100%)',
    accent:   'rgba(56,189,248,0.35)',
    size:     'small',
  },
  {
    num: '03',
    category: 'Concert Recap',
    categoryColor: '#8B5CF6',
    title: 'Festival Season: The Shows That Defined the Summer',
    excerpt:
      "Thousands of fans, dozens of artists, and moments that will last a lifetime — this summer's festival circuit delivered.",
    date: 'May 15, 2026',
    readTime: '5 min read',
    gradient: 'linear-gradient(145deg, #0A2018 0%, #101420 60%, #080A20 100%)',
    accent:   'rgba(139,92,246,0.28)',
    size:     'small',
  },
  {
    num: '04',
    category: 'New Music Feature',
    categoryColor: '#38BDF8',
    title: 'Fresh Sounds: The Albums Shaping the Scene Right Now',
    excerpt:
      'From debut releases to long-awaited follow-ups, here are the recordings demanding your attention this season.',
    date: 'May 8, 2026',
    readTime: '3 min read',
    gradient: 'linear-gradient(145deg, #160A20 0%, #0A1530 60%, #050A18 100%)',
    accent:   'rgba(56,189,248,0.3)',
    size:     'small',
  },
]

interface CardProps {
  card: (typeof REVIEWS)[number]
  large?: boolean
}

function ReviewCard({ card, large = false }: CardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className={`relative overflow-hidden rounded-2xl border border-stroke group cursor-pointer ${
        large ? 'min-h-[460px]' : 'min-h-[220px]'
      }`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
    >
      {/* Background gradient (replace with <img> when real photos available) */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: card.gradient }}
      >
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 60% 55% at 50% 90%, ${card.accent} 0%, transparent 70%)` }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px)',
          }}
        />
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(0deg, rgba(5,5,6,0.97) 0%, rgba(5,5,6,0.45) 50%, transparent 100%)' }}
      />

      {/* Issue number — top right editorial stamp */}
      <div className="absolute top-5 right-5">
        <span
          className="text-[11px] font-black tabular-nums"
          style={{
            color: 'transparent',
            WebkitTextStroke: `1px ${card.categoryColor}50`,
          }}
        >
          {card.num}
        </span>
      </div>

      {/* Hover CTA overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.22 }}
        style={{ background: 'rgba(5,5,6,0.3)' }}
      >
        <span
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white"
          style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
        >
          Read Review <ArrowRight size={14} />
        </span>
      </motion.div>

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span
          className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase mb-3 px-2.5 py-1 rounded-full border"
          style={{
            color: card.categoryColor,
            borderColor: `${card.categoryColor}40`,
            background: `${card.categoryColor}12`,
          }}
        >
          {card.category}
        </span>

        <h3
          className={`font-bold leading-snug text-text mb-2 ${
            large ? 'text-xl md:text-2xl' : 'text-base'
          }`}
        >
          {card.title}
        </h3>

        {large && (
          <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">{card.excerpt}</p>
        )}

        <div className="flex items-center gap-3 text-xs text-muted/60">
          <time>{card.date}</time>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={10} />
            {card.readTime}
          </span>
        </div>
      </div>

      {/* Inset glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${card.accent}` }}
      />
    </motion.article>
  )
}

export default function FeaturedReviews() {
  const gridRef = useStaggerReveal<HTMLDivElement>('article', { stagger: 0.12 })

  return (
    <section id="reviews" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <div>
          <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-3">
            Featured
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Latest{' '}
            <span
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
              className="accent-gradient-text"
            >
              Reviews
            </span>
          </h2>
        </div>
        <a
          href="#reviews"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-text transition-colors group"
        >
          View all reviews
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Editorial grid: large card left, 3 small cards stacked right */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ReviewCard card={REVIEWS[0]} large />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {REVIEWS.slice(1).map(card => (
            <ReviewCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
