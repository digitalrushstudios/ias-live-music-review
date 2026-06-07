import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MESSAGES = [
  {
    lines: ['Independent music.', 'Real reactions.'],
    sub: 'Your music deserves to be heard — by real people, in real time, with real feedback.',
  },
  {
    lines: ['Your art is', 'your legacy.'],
    sub: '"The most courageous act is still to think for yourself. Aloud." — Coco Chanel',
  },
  {
    lines: ['Get organized.', 'Get discovered.'],
    sub: 'iAS connects independent artists with exposure, education, and opportunity.',
    accent: true,
  },
]

export default function Statement() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const pinRef      = useRef<HTMLDivElement>(null)
  const panelsRef   = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !pinRef.current) return

    const ctx = gsap.context(() => {
      // Pin the inner viewport for the full scroll distance
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinRef.current,
        pinSpacing: false,
      })

      const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[]

      panels.forEach((panel, i) => {
        const words = panel.querySelectorAll('.stmt-word')
        const sub   = panel.querySelector('.stmt-sub')

        if (i === 0) {
          // First panel starts visible
          gsap.set(panel, { opacity: 1 })
          gsap.set(words, { y: 0, opacity: 1 })
          gsap.set(sub, { opacity: 1 })
        } else {
          gsap.set(panel, { opacity: 0 })
          gsap.set(words, { y: 60, opacity: 0 })
          gsap.set(sub, { opacity: 0 })
        }
      })

      // Transitions between panels
      panels.forEach((_unused, i) => {
        if (i === panels.length - 1) return

        const totalSegments = panels.length - 1
        const segmentSize   = 1 / totalSegments
        const start = i * segmentSize
        const end   = (i + 1) * segmentSize

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${start * 100}% top`,
            end:   `${end * 100}% top`,
            scrub: 0.8,
          },
        })

        const currentWords = panels[i].querySelectorAll('.stmt-word')
        const currentSub   = panels[i].querySelector('.stmt-sub')
        const nextWords    = panels[i + 1].querySelectorAll('.stmt-word')
        const nextSub      = panels[i + 1].querySelector('.stmt-sub')

        // Fade out current
        tl.to(panels[i], { opacity: 0, duration: 0.4 }, 0)
        tl.to(currentWords, { y: -40, opacity: 0, stagger: 0.05, duration: 0.4 }, 0)
        tl.to(currentSub, { opacity: 0, duration: 0.3 }, 0)

        // Fade in next
        tl.to(panels[i + 1], { opacity: 1, duration: 0.4 }, 0.3)
        tl.fromTo(nextWords, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.5 }, 0.35)
        tl.to(nextSub, { opacity: 1, duration: 0.4 }, 0.55)
      })

      // Animated progress bar
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    /* Outer section sets the total scroll height — 3× viewport per message */
    <div
      ref={sectionRef}
      style={{ height: `${MESSAGES.length * 100}vh`, background: '#0a0a0a' }}
    >
      {/* Pinned viewport */}
      <div
        ref={pinRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '200px 200px',
          }}
        />

        {/* Radial accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 70%)' }}
        />

        {/* Scroll progress bar — top */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            ref={progressRef}
            className="h-full origin-left"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)', transform: 'scaleX(0)' }}
          />
        </div>

        {/* Message panels — stacked, switched via opacity */}
        <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-10 text-center">
          {MESSAGES.map((msg, i) => (
            <div
              key={i}
              ref={(el) => { panelsRef.current[i] = el }}
              className="absolute inset-x-0 px-6 flex flex-col items-center justify-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              {/* Large headline */}
              <div className="mb-6 md:mb-8">
                {msg.lines.map((line, li) => (
                  <div key={li} className="overflow-hidden">
                    <span
                      className={`stmt-word block text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-black leading-[0.95] tracking-tight ${
                        li === msg.lines.length - 1 && msg.accent ? 'accent-gradient-text' : ''
                      }`}
                      style={
                        li === msg.lines.length - 1 && msg.accent
                          ? {}
                          : {
                              color: li === 0 ? '#ffffff' : 'rgba(255,255,255,0.35)',
                              fontFamily: li === 1 ? "'Instrument Serif', serif" : undefined,
                              fontStyle: li === 1 ? 'italic' : undefined,
                            }
                      }
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtitle */}
              <p
                className="stmt-sub text-sm md:text-base max-w-md leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.38)' }}
              >
                {msg.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'rgba(255,255,255,0.2)' }}
          aria-hidden
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 relative overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div
              className="absolute top-0 left-0 right-0 h-3 rounded-full animate-bounce"
              style={{ background: 'linear-gradient(180deg, #8B5CF6, #38BDF8)', animationDuration: '1.4s' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
