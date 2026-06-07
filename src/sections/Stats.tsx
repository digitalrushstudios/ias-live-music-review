import { useEffect, useState, useRef } from 'react'
import type { CSSProperties } from 'react'
import { useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { end: 500,  suffix: '+', label: 'Artists Reviewed',         sub: 'on the live iAS show' },
  { end: 1000, suffix: '+', label: 'Submissions Received',     sub: 'music & video across all genres' },
  { end: 8,    suffix: '+', label: 'Platforms Reached',        sub: 'TV, podcast, social & digital' },
]

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps    = 60
    const inc      = end / steps
    let cur = 0
    const timer = setInterval(() => {
      cur += inc
      if (cur >= end) { setN(end); clearInterval(timer) }
      else setN(Math.floor(cur))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref} className="tabular-nums">{n.toLocaleString()}{suffix}</span>
}

export default function Stats() {
  const lineRef  = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1, duration: 1.2, ease: 'power3.inOut',
            scrollTrigger: { trigger: lineRef.current, start: 'top 85%' },
          }
        )
      }
      if (labelRef.current) {
        const chars = labelRef.current.querySelectorAll('.stat-char')
        gsap.fromTo(
          chars,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.03, duration: 0.5, ease: 'power3.out',
            scrollTrigger: { trigger: labelRef.current, start: 'top 88%' },
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  const label = 'By the Numbers'

  return (
    <section
      className="py-24 md:py-32 border-y"
      style={{ borderColor: '#e2e2e0', background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Animated line draw */}
        <div className="flex items-center gap-6 mb-8 justify-center">
          <div
            ref={lineRef}
            className="h-px flex-1 max-w-xs origin-left"
            style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, #38BDF8, transparent)' }}
          />
          <p ref={labelRef} className="text-[10px] font-semibold tracking-[0.32em] uppercase text-muted shrink-0">
            {label.split('').map((ch, i) => (
              <span key={i} className="stat-char inline-block">{ch === ' ' ? ' ' : ch}</span>
            ))}
          </p>
          <div
            className="h-px flex-1 max-w-xs origin-right"
            style={{ background: 'linear-gradient(270deg, transparent, #8B5CF6, #38BDF8, transparent)' }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': 1, borderColor: '#e2e2e0' } as CSSProperties}>
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-8 sm:py-0 sm:px-10 first:pt-0 last:pb-0"
              style={{ borderColor: '#e2e2e0' }}
            >
              {/* Huge gradient number */}
              <span
                className="text-[60px] sm:text-[80px] md:text-[104px] lg:text-[120px] font-black tracking-tight leading-none mb-3"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedNumber end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="font-bold text-text text-base mb-1.5">{stat.label}</span>
              <span className="text-xs text-muted tracking-wide">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
