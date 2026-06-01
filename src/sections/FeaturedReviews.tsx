import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useStaggerReveal } from '../hooks/useScrollAnimation'

/*
  REPLACE: Swap gradient + accent for real images by adding:
    imageUrl: '/images/review-1.jpg'
  and rendering <img src={card.imageUrl} /> inside the card image area.
*/
const REVIEWS = [
  {
    category: 'Live Performance',
    categoryColor: '#8B5CF6',
    title: 'A Night of Pure Energy: The Setlist That Moved a Crowd',
    excerpt:
      'From the first note to the final encore, this performance redefined what a live show can be — raw, electric, and unforgettable.',
    date: 'May 28, 2026',
    gradient: 'linear-gradient(145deg, #120720 0%, #0D1535 60%, #091525 100%)',
    accent:   'rgba(139,92,246,0.35)',
    size:     'large',
  },
  {
    category: 'Artist Spotlight',
    categoryColor: '#38BDF8',
    title: 'Rising from the Underground: An Artist Redefining the Genre',
    excerpt:
      'Before the sold-out shows and streaming millions, there was a stage, a microphone, and a story worth telling.',
    date: 'May 22, 2026',
    gradient: 'linear-gradient(145deg, #091525 0%, #120720 60%, #0D1535 100%)',
    accent:   'rgba(56,189,248,0.3)',
    size:     'small',
  },
  {
    category: 'Concert Recap',
    categoryColor: '#8B5CF6',
    title: 'Festival Season: The Shows That Defined the Summer',
    excerpt:
      "Thousands of fans, dozens of artists, and moments that will last a lifetime — this summer's festival circuit delivered.",
    date: 'May 15, 2026',
    gradient: 'linear-gradient(145deg, #0A2018 0%, #101420 60%, #080A20 100%)',
    accent:   'rgba(139,92,246,0.25)',
    size:     'small',
  },
  {
    category: 'New Music Feature',
    categoryColor: '#38BDF8',
    title: 'Fresh Sounds: The Albums Shaping the Scene Right Now',
    excerpt:
      'From debut releases to long-awaited follow-ups, here are the recordings demanding your attention this season.',
    date: 'May 8, 2026',
    gradient: 'linear-gradient(145deg, #160A20 0%, #0A1530 60%, #050A18 100%)',
    accent:   'rgba(56,189,248,0.28)',
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
        large ? 'md:col-span-2 min-h-[400px]' : 'min-h-[320px]'
      }`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* REPLACE: Replace this div with <img src={card.imageUrl} alt={card.title} className="absolute inset-0 w-full h-full object-cover" /> */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: card.gradient }}
      >
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 90%, ${card.accent} 0%, transparent 70%)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px)',
          }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(0deg, rgba(5,5,6,0.97) 0%, rgba(5,5,6,0.5) 45%, transparent 100%)' }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ background: 'rgba(5,5,6,0.35)' }}
      >
        <span
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white"
          style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
        >
          Read Review <ArrowRight size={14} />
        </span>
      </motion.div>

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
            large ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
          }`}
        >
          {card.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">
          {card.excerpt}
        </p>

        <time className="text-xs text-muted/60 font-medium">{card.date}</time>
      </div>
    </motion.article>
  )
}

export default function FeaturedReviews() {
  const gridRef = useStaggerReveal<HTMLDivElement>('article', { stagger: 0.14 })

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
        {/* REPLACE: Update href to your reviews archive page */}
        <a
          href="#reviews"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-text transition-colors group"
        >
          View all reviews
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ReviewCard card={REVIEWS[0]} large />
        <div className="grid grid-cols-1 gap-5">
          {REVIEWS.slice(1).map(card => (
            <ReviewCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
