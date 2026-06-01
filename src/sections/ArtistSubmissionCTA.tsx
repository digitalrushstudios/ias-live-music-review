import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollAnimation'

export default function ArtistSubmissionCTA() {
  const cardRef = useScrollReveal<HTMLDivElement>({ y: 36, duration: 1 })

  return (
    <section
      id="submit"
      className="py-24 md:py-32 px-6"
      style={{ background: '#101014' }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-3xl border border-stroke p-10 md:p-16 text-center"
          style={{ background: '#050506' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(139,92,246,0.2) 0%, rgba(56,189,248,0.08) 50%, transparent 100%)',
            }}
          />
          <div
            className="absolute top-0 left-[20%] right-[20%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, #38BDF8, transparent)' }}
          />

          <div className="relative z-10">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase mb-8 border"
              style={{
                borderColor: 'rgba(139,92,246,0.35)',
                background: 'rgba(139,92,246,0.1)',
                color: '#8B5CF6',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: '#8B5CF6' }} />
              Now Accepting Submissions
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.08]">
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

            <ul className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {['Live Show', 'New Release', 'Artist Feature', 'Interview Request', 'Concert Recap'].map(tag => (
                <li
                  key={tag}
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full border"
                  style={{ borderColor: '#24242A', color: '#9B9BA3', background: 'rgba(255,255,255,0.03)' }}
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* REPLACE: Update href to your submission form URL */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-sm text-white transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
              >
                <Send size={15} />
                Submit for Review
              </motion.a>

              {/* REPLACE: Update href to your contact/info page */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
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
