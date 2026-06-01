import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

interface Props {
  onComplete: () => void
}

const WORDS    = ['Live', 'Music', 'Review', 'Culture']
const DURATION = 2.9   // seconds for counter + progress bar

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount]         = useState(0)
  const [wordIdx, setWordIdx]     = useState(0)
  const [visible, setVisible]     = useState(true)
  const progressRef               = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP counter 0 to 100
    const obj = { n: 0 }
    gsap.to(obj, {
      n: 100,
      duration: DURATION,
      ease: 'power2.inOut',
      onUpdate() { setCount(Math.floor(obj.n)) },
      onComplete() {
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 950)
        }, 350)
      },
    })

    // GSAP progress bar
    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: DURATION,
          ease: 'power2.inOut',
          transformOrigin: 'left center',
        }
      )
    }

    // Rotating words
    const wordMs = (DURATION * 1000) / WORDS.length
    const timer  = setInterval(
      () => setWordIdx(i => (i + 1) % WORDS.length),
      wordMs
    )
    return () => clearInterval(timer)
  }, [onComplete])

  const padded = String(count).padStart(3, '0')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#050506' }}
        >
          {/* Ambient glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%', left: '50%',
              transform: 'translate(-50%, -60%)',
              width: '500px', height: '300px',
              background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden bg-stroke">
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
          <div className="relative z-10 flex flex-col items-center gap-5">
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.08em' }}
              animate={{ opacity: 1, letterSpacing: '0.35em' }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-[10px] font-semibold uppercase text-muted"
            >
              iCREEUPREE LLC
            </motion.span>

            {/* Logo wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  exit={{ y: -36,   opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
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
                WebkitTextStroke: '1px rgba(139,92,246,0.22)',
              }}
            >
              {padded}
            </span>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-7 text-[10px] tracking-[0.22em] text-muted uppercase select-none"
          >
            Live Music Review
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
