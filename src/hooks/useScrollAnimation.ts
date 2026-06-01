import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  y?: number
  x?: number
  opacity?: number
  duration?: number
  ease?: string
  delay?: number
  start?: string
}

/** Fade-up reveal a single element when it scrolls into view. */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 48,
      x = 0,
      opacity = 0,
      duration = 0.9,
      ease = 'power3.out',
      delay = 0,
      start = 'top 82%',
    } = options

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return ref
}

interface StaggerOptions extends RevealOptions {
  stagger?: number
}

/** Staggered reveal for a list of children inside a container. */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  childSelector: string,
  options: StaggerOptions = {}
) {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.8,
      ease = 'power3.out',
      stagger = 0.12,
      delay = 0,
      start = 'top 78%',
    } = options

    const ctx = gsap.context(() => {
      const targets = container.querySelectorAll(childSelector)
      if (!targets.length) return

      gsap.fromTo(
        targets,
        { opacity, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          ease,
          delay,
          stagger,
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        }
      )
    }, container)

    return () => ctx.revert()
  }, [childSelector])

  return containerRef
}
