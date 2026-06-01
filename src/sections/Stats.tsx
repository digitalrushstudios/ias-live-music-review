import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollAnimation'

/*
  REPLACE: Update these numbers as your real stats grow.
*/
const STATS = [
  { end: 500,  suffix: '+', label: 'Live Shows Covered',     note: 'and counting' },
  { end: 200,  suffix: '+', label: 'Artists Featured',        note: 'across all genres' },
  { end: 1200, suffix: '+', label: 'Music Stories Published', note: 'reviews, features & more' },
]

function AnimatedStat({ end, suffix }: { end: number; suffix: string }) {
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setN(end)
        clearInterval(timer)
      } else {
        setN(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const wrapRef = useScrollReveal<HTMLDivElement>({ y: 32, duration: 0.9 })

  return (
    <section
      className="py-24 md:py-32 border-y"
      style={{ borderColor: '#24242A', background: '#101014' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-muted mb-14">
          By the Numbers
        </p>

        <div
          ref={wrapRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {i > 0 && (
                <div
                  className="sm:hidden w-12 h-px mb-6"
                  style={{ background: 'linear-gradient(90deg, transparent, #24242A, transparent)' }}
                />
              )}
              <span
                className="text-6xl md:text-7xl font-black tracking-tight leading-none"
                style={{
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedStat end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="font-bold text-text text-base">{stat.label}</span>
              <span className="text-xs text-muted tracking-wide">{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
