import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    // Only show on fine pointer (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const onMove = (e: MouseEvent) => {
      if (!active) setActive(true)
      gsap.to(inner, {
        x: e.clientX, y: e.clientY,
        duration: 0.07, ease: 'none', overwrite: true,
      })
      gsap.to(outer, {
        x: e.clientX, y: e.clientY,
        duration: 0.48, ease: 'power3.out', overwrite: true,
      })
    }

    const onMouseLeave = () => setActive(false)
    const onMouseEnter = () => setActive(true)

    const enterHover = () => {
      gsap.to(outer, { scale: 2.2, opacity: 0.45, duration: 0.3, ease: 'power2.out' })
      gsap.to(inner, { scale: 0.3, duration: 0.2 })
    }
    const leaveHover = () => {
      gsap.to(outer, { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' })
      gsap.to(inner, { scale: 1, duration: 0.2 })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    function attachHoverListeners() {
      document.querySelectorAll('a, button, [role="button"], label').forEach(el => {
        el.removeEventListener('mouseenter', enterHover)
        el.removeEventListener('mouseleave', leaveHover)
        el.addEventListener('mouseenter', enterHover)
        el.addEventListener('mouseleave', leaveHover)
      })
    }
    attachHoverListeners()

    const obs = new MutationObserver(attachHoverListeners)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      obs.disconnect()
    }
  }, [active])

  return (
    <>
      {/* Outer ring — mix-blend-difference inverts color under cursor */}
      <div
        ref={outerRef}
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          width: 34, height: 34,
          borderRadius: '50%',
          border: '1.5px solid #fff',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          opacity: active ? 1 : 0,
          transition: 'opacity 0.25s',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          width: 5, height: 5,
          borderRadius: '50%',
          background: '#fff',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          opacity: active ? 1 : 0,
          transition: 'opacity 0.25s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
