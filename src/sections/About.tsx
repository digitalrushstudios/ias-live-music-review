import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimation'

const PILLARS = [
  {
    label: 'Honest Feedback',
    desc: '"Like Love or Lose It": real-time reactions from live audiences and guests who tell artists the unfiltered truth about their music.',
  },
  {
    label: 'Artist-First Platform',
    desc: 'From music reviews and publication features to registration services and newsletter advertising, every offering is built around the independent artist.',
  },
  {
    label: 'Community & Culture',
    desc: 'Born in the Bronx, built for creatives everywhere. iAS connects artists with fans, industry insiders, and opportunities across media, TV, and digital.',
  },
  {
    label: 'Media Ecosystem',
    desc: 'iAS is growing into a full ecosystem: media, publishing, live experiences, education, and strategic exposure designed to help artists get organized, visible, and discovered.',
  },
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
              className="text-3xl md:text-4xl lg:text-[44px] leading-[1.16] font-light mb-8 pl-6 border-l-2"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                borderColor: 'rgba(139,92,246,0.5)',
              }}
            >
              "We're the people that help independent artists get
              <span
                style={{
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {' '}organized, visible,{' '}
              </span>
              and discovered."
            </blockquote>

            <div
              className="w-16 h-0.5 mb-8 rounded-full"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
            />

            <p className="text-muted text-base leading-relaxed mb-5">
              <strong className="text-text font-semibold">iAS Multi Media Group</strong> is a media
              ecosystem connecting independent artists, brands, and creatives with exposure, education,
              and opportunity. Hosted by <strong className="text-text font-semibold">Double V &amp; Lady Buggg</strong>,
              the iAS Live Music Review show gives indie artists a real stage, played live and reacted to in real
              time with honest feedback from guests, industry insiders, and a global audience.
            </p>

            <p className="text-muted text-base leading-relaxed mb-5">
              Founded by <strong className="text-text font-semibold">Joli Harris</strong> and operating
              under <strong className="text-text font-semibold">iCREEUPREE LLC</strong> out of the Bronx, NY.
              iAS has aired on Verizon &amp; Optimum TV, built a podcast audience on Apple Podcasts and Spotify,
              and published artists across its print and digital platforms.
            </p>

            <p className="text-muted text-base leading-relaxed">
              Over the next 3 to 5 years, iAS aims to become a full media ecosystem: publishing,
              live experiences, education, and strategic exposure for independent creators at every level.
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
                Accepting artist submissions: <span className="text-text font-semibold">open now</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
