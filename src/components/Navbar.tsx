import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Reviews',    href: '#reviews' },
  { label: 'Artists',   href: '#artists' },
  { label: 'Interviews',href: '#interviews' },
  { label: 'Events',    href: '#events' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-stroke' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <motion.img
              whileHover={{ scale: 1.04 }}
              src={scrolled ? '/ias-live-music-review/assets/ias-logo.png' : '/ias-live-music-review/assets/ias-logo-tagline-white.png'}
              alt="iAS"
              style={{
                height: scrolled ? '32px' : '28px',
                width: 'auto',
                transition: 'height 0.4s ease',
                userSelect: 'none',
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm transition-colors duration-200 tracking-wide py-1 group"
                  style={{ color: isActive ? (scrolled ? '#0a0a0a' : '#ffffff') : (scrolled ? '#6b6b6b' : 'rgba(255,255,255,0.6)') }}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300 ease-out"
                    style={{
                      background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)',
                      width: isActive ? '100%' : '0%',
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)', opacity: isActive ? 0 : 1 }}
                  />
                </a>
              )
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#submit"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-full border hover:border-[#8B5CF6] transition-all duration-300 hover:bg-white/10 group"
              style={{ borderColor: scrolled ? '#e2e2e0' : 'rgba(255,255,255,0.25)', color: scrolled ? '#0a0a0a' : '#ffffff' }}
            >
              Submit
              <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>

            <button
              className="md:hidden p-2 text-muted hover:text-text transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: '#ffffff' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, #38BDF8, transparent)' }} />

            <div className="flex-1 flex flex-col justify-center px-8 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: 'power3.out' }}
                  className="flex items-center justify-between py-5 border-b text-3xl font-black tracking-tight text-muted hover:text-text transition-colors group"
                  style={{ borderColor: '#e2e2e0' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={22} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8B5CF6]" />
                </motion.a>
              ))}

              <motion.a
                href="#submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="mt-8 text-base font-bold text-center py-4 rounded-full text-white"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
                onClick={() => setMenuOpen(false)}
              >
                Submit Your Music
              </motion.a>
            </div>

            <div className="px-8 pb-10">
              <p className="text-xs text-muted tracking-[0.2em] uppercase">iAS Live Music Review</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
