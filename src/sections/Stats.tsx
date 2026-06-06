import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const STATS = [
  { end: 500,  suffix: '+', label: 'Live Shows Covered',     sub: 'and counting' },
  { end: 200,  suffix: '+', label: 'Artists Featured',        sub: 'across all genres' },
  { end: 1200, suffix: '+', label: 'Music Stories Published', sub: 'reviews, features & more' },
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
  return (
    <section
      className="py-24 md:py-32 border-y"
      style={{ borderColor: '#24242A', background: '#0A0A0E' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-muted mb-16 text-center">
          By the Numbers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-10 sm:py-0 sm:px-10 first:pt-0 last:pb-0"
              style={{ borderColor: '#24242A' }}
            >
              {/* Huge gradient number */}
              <span
                className="text-[80px] md:text-[104px] lg:text-[120px] font-black tracking-tight leading-none mb-3"
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
