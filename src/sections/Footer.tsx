import { motion } from 'framer-motion'
import { Mail, Instagram, Youtube, Facebook, Music2, ArrowUpRight } from 'lucide-react'

const FOOTER_NAV = [
  {
    heading: 'Content',
    links: [
      { label: 'Live Reviews',      href: '#reviews' },
      { label: 'Artist Spotlights', href: '#artists' },
      { label: 'Interviews',        href: '#interviews' },
      { label: 'Concert Recaps',    href: '#reviews' },
      { label: 'New Music',         href: '#reviews' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'About iAS',    href: '#artists' },
      { label: 'Submit Music', href: '#submit' },
      { label: 'Gallery',      href: '#events' },
      { label: 'Events',       href: '#events' },
      { label: 'Contact',      href: '#contact' },
    ],
  },
]

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/iaslivemusicreview' },
  { label: 'YouTube',   icon: Youtube,   href: 'https://youtube.com/@iASmusicreview' },
  { label: 'TikTok',    icon: Music2,    href: 'https://tiktok.com/@iaslivemusicreview' },
  { label: 'Facebook',  icon: Facebook,  href: 'https://facebook.com/iaslivemusicreview' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t" style={{ borderColor: '#24242A', background: '#050506' }}>

      {/* Final CTA strip */}
      <div
        className="relative overflow-hidden py-24 md:py-32 px-6 text-center border-b"
        style={{ borderColor: '#24242A' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 105%, rgba(139,92,246,0.16) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-muted mb-5">
            iAS Live Music Review
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight mb-6 leading-[1.05]">
            Bring your sound
            <br />
            <span
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
              className="accent-gradient-text"
            >
              to the spotlight.
            </span>
          </h2>

          <p className="text-muted text-base mb-10 leading-relaxed">
            Submit your music, show, or story — and let iAS amplify what you are building.
          </p>

          <motion.a
            href="#submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-sm text-white hover:shadow-[0_0_44px_rgba(139,92,246,0.55)] transition-shadow duration-300"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)' }}
          >
            Submit for Review
            <ArrowUpRight size={14} />
          </motion.a>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)' }}
              >
                <span className="text-white text-[11px] font-black">iAS</span>
              </div>
              <span className="font-bold text-sm">
                iAS <span className="text-muted font-light">Live</span>
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              Culture-driven media for live music. Reviews, spotlights, photography,
              and stories that keep the scene alive.
            </p>

            <a
              href="mailto:hello@iaslivemusicreview.com"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors group mb-5"
            >
              <Mail size={13} className="shrink-0" />
              <span className="group-hover:underline">hello@iaslivemusicreview.com</span>
            </a>

            <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: '#38BDF8' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#38BDF8' }} />
              Accepting submissions
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map(col => (
            <div key={col.heading}>
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted mb-5">Follow Us</p>

            {/* Icon button row */}
            <div className="flex flex-wrap gap-2 mb-5">
              {SOCIALS.map(s => {
                const Icon = s.icon
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text hover:border-[#8B5CF6] transition-all duration-300 hover:bg-white/5"
                  >
                    <Icon size={15} />
                  </motion.a>
                )
              })}
            </div>

            {/* Labels below icons */}
            <ul className="space-y-1.5">
              {SOCIALS.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted/50 hover:text-muted transition-colors"
                  >
                    @ias{s.label.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: '#24242A' }}
        >
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} iCREEUPREE LLC — iAS Live Music Review. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted hover:text-text transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted hover:text-text transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
