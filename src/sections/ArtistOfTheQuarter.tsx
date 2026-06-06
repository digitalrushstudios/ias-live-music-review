import { motion } from 'framer-motion'

export default function ArtistOfTheQuarter() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#8B5CF6] font-semibold">
            Artist of the Quarter
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
            Spotlight: Ceasar Rio
          </h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8]" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#38BDF8] opacity-30" />
            <img
              src="/ias-live-music-review/assets/ceasar-rio1.jpg"
              alt="Ceasar Rio — Artist of the Quarter"
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
              style={{ maxHeight: '560px', objectPosition: 'top' }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'linear-gradient(135deg,#8B5CF6,#38BDF8)', color: '#fff' }}>
              Q2 2026 Featured Artist
            </div>

            <h3 className="text-3xl font-bold text-[#0a0a0a]">Ceasar Rio</h3>

            <p className="text-[#6b6b6b] leading-relaxed text-lg">
              Ceasar Rio is an independent artist whose raw authenticity and commanding stage presence
              have captured the attention of the iAS community. Known for delivering high-energy
              performances and music that speaks from lived experience, Ceasar Rio embodies exactly
              what iAS Live Music Review celebrates — artists who tell the truth through their craft.
            </p>

            <p className="text-[#6b6b6b] leading-relaxed">
              This quarter, Ceasar Rio stood out among a strong field of submissions, earning the
              Artist of the Quarter distinction through both the quality of the music and the
              connection made with a live audience. iAS is proud to spotlight this rising voice in
              independent music.
            </p>

            <div className="pt-4 border-t border-[#e2e2e0]">
              <p className="text-xs uppercase tracking-widest text-[#6b6b6b]">
                Selected by iAS Live Music Review Panel · Q2 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
