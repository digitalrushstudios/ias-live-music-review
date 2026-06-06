import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

interface Props {
  onComplete: () => void
}

const WORDS    = ['Live', 'Music', 'Review', 'Culture']
const DURATION = 2.7

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount]     = useState(0)
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const progressRef           = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obj = { n: 0 }
    gsap.to(obj, {
      n: 100,
      duration: DURATION,
      ease: 'power2.inOut',
      onUpdate() { setCount(Math.floor(obj.n)) },
      onComplete() {
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 1000)
        }, 280)
      },
    })

    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: DURATION, ease: 'power2.inOut', transformOrigin: 'left center' }
      )
    }

    const wordMs = (DURATION * 1000) / WORDS.length
    const timer  = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), wordMs)
    return () => clearInterval(timer)
  }, [onComplete])

  const padded = String(count).padStart(3, '0')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#050506' }}
        >
          {/* Noise texture on loader too */}
          <div className="noise-overlay" aria-hidden />

          {/* Ambient glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '40%', left: '50%',
              transform: 'translate(-50%, -60%)',
              width: '600px', height: '360px',
              background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.2) 0%, transparent 65%)',
              filter: 'blur(50px)',
            }}
          />

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden" style={{ background: '#16161C' }}>
            <div
              ref={progressRef}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                transformOrigin: 'left center',
                transform: 'scaleX(0)',
              }}
            />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.06em' }}
              animate={{ opacity: 1, letterSpacing: '0.38em' }}
              transition={{ duration: 1.1, delay: 0.1 }}
              className="text-[10px] font-semibold uppercase text-muted"
            >
              iAS Multi Media Group
            </motion.span>

            {/* iAS wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="text-[96px] md:text-[128px] font-black leading-none tracking-tight select-none"
                style={{
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                iAS
              </span>
            </motion.div>

            {/* Rotating word */}
            <div className="h-10 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ y: 38, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -38, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-2xl md:text-3xl text-muted"
                  style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
                >
                  {WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Ghost counter */}
          <div className="absolute bottom-14 select-none" aria-hidden>
            <span
              className="text-[80px] md:text-[108px] font-black tabular-nums leading-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(139,92,246,0.2)',
              }}
            >
              {padded}
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.28 }}
            transition={{ delay: 0.85 }}
            className="absolute bottom-7 text-[10px] tracking-[0.24em] text-muted uppercase select-none"
          >
            Live Music Review
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
