import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimation'

const PILLARS = [
  { label: 'Editorial Voice',  desc: 'Every review and feature is written with critical depth and cultural context.' },
  { label: 'Artist-First',     desc: 'Coverage that respects and amplifies the work of independent artists.' },
  { label: 'Community-Rooted', desc: 'Built for the fans, venues, and promoters who make live music happen.' },
  { label: 'Culture-Forward',  desc: 'We cover the full ecosystem — from underground clubs to major festivals.' },
]

export default function About() {
  const headRef    = useScrollReveal<HTMLDivElement>()
  const pillarsRef = useStaggerReveal<HTMLUListElement>('li', { stagger: 0.13 })

  return (
    <section
      id="artists"
      className="py-24 md:py-32 border-y"
      style={{ borderColor: '#24242A', background: '#101014' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: editorial statement */}
          <div ref={headRef}>
            <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-4">
              About iAS
            </span>

            <blockquote
              className="text-3xl md:text-4xl lg:text-[42px] leading-[1.18] font-light mb-8"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            >
              "Live music deserves to be
              <span
                style={{
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {' '}written about{' '}
              </span>
              the way it feels — loud, honest, and without compromise."
            </blockquote>

            <div
              className="w-16 h-0.5 mb-8 rounded-full"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
            />

            <p className="text-muted text-base leading-relaxed mb-5">
              iAS Live Music Review is a culture-driven media platform dedicated to
              the artists, fans, venues, and promoters who make live music move.
              Founded under <strong className="text-text font-semibold">iCREEUPREE LLC</strong>,
              we publish live performance reviews, artist spotlights, concert
              photography, in-depth interviews, and stories that capture the energy
              of a room that can never be replicated.
            </p>

            <p className="text-muted text-base leading-relaxed">
              From intimate club sets to festival stages, from debut shows to
              milestone performances — if it happened live, it deserves to be
              remembered.
            </p>
          </div>

          {/* Right: brand pillars */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-muted mb-8">
              What We Stand For
            </p>

            <ul ref={pillarsRef} className="space-y-6">
              {PILLARS.map((p, i) => (
                <li key={p.label} className="flex gap-5 items-start">
                  <span
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-text mb-1 text-sm tracking-wide">{p.label}</h3>
                    <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-sm"
              style={{ borderColor: '#24242A', background: 'rgba(139,92,246,0.07)' }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-slow"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
              />
              <span className="text-muted text-xs tracking-wide">
                Accepting artist submissions — <span className="text-text font-semibold">open now</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
