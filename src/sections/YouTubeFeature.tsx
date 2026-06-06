import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollAnimation'

export default function YouTubeFeature() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 32, duration: 0.9 })

  return (
    <section className="py-20 md:py-28 px-6 border-b" style={{ borderColor: '#e2e2e0', background: '#f5f5f3' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Video embed */}
          <div ref={ref} className="w-full lg:w-[58%] shrink-0">
            <div
              className="relative rounded-2xl overflow-hidden border border-stroke"
              style={{ aspectRatio: '16/9' }}
            >
              <iframe
                src="https://www.youtube.com/embed/YAcwC7HoCmI?rel=0&modestbranding=1"
                title="iAS Live Music Review Show"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="flex-1">
            <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-4">
              Watch the Show
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.08] mb-5">
              See{' '}
              <span
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
                className="accent-gradient-text"
              >
                iAS Live
              </span>
              {' '}in action
            </h2>

            <p className="text-muted text-base leading-relaxed mb-4">
              Double V and Lady Buggg play your submission on air and the audience reacts in real time.
              No filters, no politics. Just honest feedback from real people who love music.
            </p>

            <p className="text-muted text-sm leading-relaxed mb-8">
              The show airs live across YouTube, Verizon Fios, Optimum TV, and social media,
              reaching fans, industry insiders, and creatives across every platform iAS touches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://www.youtube.com/@IASMusic"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
              >
                <Play size={13} fill="white" />
                Watch on YouTube
              </motion.a>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-text transition-colors group"
              >
                Submit your music
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
