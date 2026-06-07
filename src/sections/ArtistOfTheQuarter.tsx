import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Award } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollAnimation'

export default function ArtistOfTheQuarter() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 28, duration: 0.95 })

  return (
    <section
      id="artist-quarter"
      className="py-24 md:py-32 px-6 border-y"
      style={{ borderColor: '#e2e2e0', background: '#f5f5f3' }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-3">
              Community Vote
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight flex flex-wrap items-center gap-2 sm:gap-3">
              Artist of the{' '}
              <span
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
                className="accent-gradient-text"
              >
                Quarter
              </span>
            </h2>
          </div>
          <motion.a
            href="https://form.jotform.com/240574986902164"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white shrink-0 hover:shadow-[0_0_36px_rgba(139,92,246,0.5)] transition-shadow duration-300"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
          >
            <Award size={14} />
            Cast Your Vote
          </motion.a>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Photo */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-stroke"
              style={{ aspectRatio: '4/5', maxHeight: '560px' }}
            >
              <img
                src="/ias-live-music-review/assets/ceasar-rio1.jpg"
                alt="CEASAR RIO"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.style.background = 'linear-gradient(145deg, #120720 0%, #0D1535 100%)'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'absolute inset-0 flex items-center justify-center'
                    placeholder.innerHTML = '<span style="font-size:80px;opacity:0.15">CR</span>'
                    parent.appendChild(placeholder)
                  }
                }}
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(0deg, rgba(13,13,17,0.95) 0%, rgba(13,13,17,0.2) 50%, transparent 100%)' }}
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2" style={{ color: '#8B5CF6' }}>
                  Hip Hop / Soul / Funk
                </p>
                <h3 className="text-3xl font-black text-white tracking-tight">CEASAR RIO</h3>
                <p className="text-sm text-muted mt-1">Cleveland, Ohio</p>
              </div>
            </div>

            {/* Gold badge */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 text-center"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                borderColor: '#f5f5f3',
              }}
            >
              <span className="text-white text-[9px] font-bold tracking-wide uppercase leading-tight">Artist</span>
              <span className="text-white text-[9px] font-bold tracking-wide uppercase leading-tight">of the</span>
              <span className="text-white text-[9px] font-bold tracking-wide uppercase leading-tight">Quarter</span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase mb-7 border"
              style={{ borderColor: 'rgba(139,92,246,0.4)', background: 'rgba(139,92,246,0.08)', color: '#8B5CF6' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#8B5CF6' }} />
              Featured Artist
            </div>

            <h3
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3"
              style={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #6b6b6b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              CEASAR RIO
            </h3>

            <p className="text-muted text-sm uppercase tracking-[0.2em] font-semibold mb-6">
              Hip Hop / Soul / Funk — Cleveland, OH
            </p>

            <p className="text-base text-muted leading-relaxed mb-4">
              Ceasar Rio is an independent artist blending the raw energy of Hip Hop with the warmth of Soul and groove of Funk.
              Representing Cleveland, Ohio, he brings a distinct voice that crosses genre lines and connects with listeners on every level.
            </p>

            <p className="text-base text-muted leading-relaxed mb-8">
              iAS is proud to spotlight Ceasar Rio as our Artist of the Quarter. Show your support by watching his feature
              and casting your vote to help him earn the recognition he deserves.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.youtube.com/watch?v=YAcwC7HoCmI"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(139,92,246,0.45)]"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
              >
                <Play size={13} fill="white" />
                Watch Feature
              </motion.a>

              <motion.a
                href="https://form.jotform.com/240574986902164"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, borderColor: '#8B5CF6' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border transition-all duration-300 hover:bg-white/5"
                style={{ borderColor: '#e2e2e0', color: '#0a0a0a' }}
              >
                <Award size={14} />
                Vote for Ceasar
                <ArrowUpRight size={13} />
              </motion.a>
            </div>

            <div
              className="mt-10 p-5 rounded-xl border"
              style={{ borderColor: '#e2e2e0', background: 'rgba(0,0,0,0.03)' }}
            >
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-2">Want to be featured?</p>
              <p className="text-sm text-muted leading-relaxed">
                Submit your music or nominate an artist for the next Artist of the Quarter spotlight.
                Every quarter iAS highlights an independent artist pushing the culture forward.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-3 transition-colors hover:text-text"
                style={{ color: '#8B5CF6' }}
              >
                Nominate an Artist <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
