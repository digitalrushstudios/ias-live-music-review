import { motion } from 'framer-motion'
import { ArrowRight, Send, Mic2, Music, Star, MessageCircle, Film } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollAnimation'

const TAGS = [
  { label: 'Live Show',          icon: Mic2 },
  { label: 'New Release',        icon: Music },
  { label: 'Artist Feature',     icon: Star },
  { label: 'Interview Request',  icon: MessageCircle },
  { label: 'Concert Recap',      icon: Film },
]

export default function ArtistSubmissionCTA() {
  const cardRef = useScrollReveal<HTMLDivElement>({ y: 36, duration: 1 })

  return (
    <section
      id="submit"
      className="py-24 md:py-32 px-6"
      style={{ background: '#0A0A0E' }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-3xl border border-stroke p-10 md:p-16 text-center"
          style={{ background: '#050506' }}
        >
          {/* Gradient glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 75% 65% at 50% 105%, rgba(139,92,246,0.22) 0%, rgba(56,189,248,0.08) 55%, transparent 100%)',
            }}
          />

          {/* Top gradient rule */}
          <div
            className="absolute top-0 left-[15%] right-[15%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, #38BDF8, transparent)' }}
          />

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-8 h-8 border-l border-t rounded-tl-lg" style={{ borderColor: 'rgba(139,92,246,0.25)' }} />
          <div className="absolute top-6 right-6 w-8 h-8 border-r border-t rounded-tr-lg" style={{ borderColor: 'rgba(56,189,248,0.25)' }} />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b rounded-bl-lg" style={{ borderColor: 'rgba(139,92,246,0.25)' }} />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b rounded-br-lg" style={{ borderColor: 'rgba(56,189,248,0.25)' }} />

          <div className="relative z-10">
            {/* Live badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase mb-8 border"
              style={{
                borderColor: 'rgba(139,92,246,0.4)',
                background: 'rgba(139,92,246,0.1)',
                color: '#8B5CF6',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: '#8B5CF6' }} />
              Now Accepting Submissions
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.06]">
              Want your music or live show
              <br />
              <span
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
                className="accent-gradient-text"
              >
                featured?
              </span>
            </h2>

            <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Submit your latest release, upcoming show, or artist story for potential
              coverage on iAS Live Music Review. We cover emerging artists, independent
              acts, and live performances across all genres.
            </p>

            {/* Tag pills with icons */}
            <ul className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
              {TAGS.map(tag => {
                const Icon = tag.icon
                return (
                  <li
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 hover:border-[#8B5CF6] hover:text-text hover:bg-white/5"
                    style={{ borderColor: '#24242A', color: '#9B9BA3', background: 'rgba(255,255,255,0.025)' }}
                  >
                    <Icon size={10} />
                    {tag.label}
                  </li>
                )
              })}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-sm text-white transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(139,92,246,0.55)]"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
              >
                <Send size={14} />
                Submit for Review
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-text transition-colors group"
              >
                Learn more
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
