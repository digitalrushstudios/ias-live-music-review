import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-stroke' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        {/* REPLACE: Swap the placeholder below with your actual <img src="..." /> logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)' }}
          >
            <span className="text-white text-[10px] font-black tracking-tight">iAS</span>
          </div>
          <span className="font-bold text-sm tracking-wide hidden sm:block">
            iAS <span className="text-muted font-light">Live</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted hover:text-text transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          {/* REPLACE: Update href to your actual submission form or Typeform URL */}
          <a
            href="#submit"
            className="hidden md:inline-flex items-center text-sm font-semibold px-5 py-2 rounded-full border border-stroke hover:border-[#8B5CF6] transition-all duration-300 hover:bg-white/5"
          >
            Submit
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-b border-stroke"
          >
            <nav className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted hover:text-text py-3 border-b border-stroke/40 last:border-0 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* REPLACE: Update href to your submission form URL */}
              <a
                href="#submit"
                className="mt-3 text-sm font-bold text-center py-3.5 rounded-full text-white"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
                onClick={() => setMenuOpen(false)}
              >
                Submit Your Music
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
