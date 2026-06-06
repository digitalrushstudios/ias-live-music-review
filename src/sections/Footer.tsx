import { motion } from 'framer-motion'
import { Mail, Instagram, Youtube, Facebook, Music2, ArrowUpRight } from 'lucide-react'

const FOOTER_NAV = [
  {
    heading: 'Services',
    links: [
      { label: 'Music & Video Reviews', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform' },
      { label: 'iAS Publication',       href: 'https://form.jotform.com/240573943157158' },
      { label: 'Newsletter Advertising',href: 'https://mailchi.mp/8cdeb371d69c/ias-music-home-of-the-ias-live-music-review' },
      { label: 'Registration Services', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform' },
      { label: 'Nominate an Artist',    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'About iAS',      href: '#artists' },
      { label: 'Watch the Show', href: 'https://www.youtube.com/@IASMusic' },
      { label: 'iAS Newsletter', href: 'https://www.canva.com/design/DAHAXYmgz0g/AP9SkGUgXXYj8kS5fUYEIg/view?utm_content=DAHAXYmgz0g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h985dde617b#13' },
      { label: 'iAS Podcast',    href: 'https://open.spotify.com/show/2daiojFZPhHF9dRaC1GlNt' },
      { label: 'Contact',        href: '#contact' },
    ],
  },
]

const SOCIALS = [
  { label: 'Instagram', handle: '@iasmusic',          icon: Instagram, href: 'https://instagram.com/iasmusic' },
  { label: 'YouTube',   handle: '@iasmusic',          icon: Youtube,   href: 'https://youtube.com/c/IASMusic' },
  { label: 'TikTok',    handle: '@iaslivemusicreview',icon: Music2,    href: 'https://tiktok.com/@iaslivemusicreview' },
  { label: 'Facebook',  handle: '@IASMusic',          icon: Facebook,  href: 'https://facebook.com/IASMusic' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t" style={{ borderColor: '#1f1f1f', background: '#0a0a0a' }}>

      {/* Final CTA strip */}
      <div
        className="relative overflow-hidden py-24 md:py-32 px-6 text-center border-b"
        style={{ borderColor: '#1f1f1f' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 105%, rgba(139,92,246,0.16) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-muted mb-5">
            iAS Live Music Review
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight mb-6 leading-[1.05]" style={{ color: '#ffffff' }}>
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
            Submit your music or video for a live review and let iAS help you get
            organized, visible, and discovered across every platform we reach.
          </p>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiV6NbCe9DsPoL6SN2swO3NVxz5RGvmctZ6mMYAn7C7141zA/viewform"
            target="_blank"
            rel="noopener noreferrer"
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
              The media ecosystem connecting independent artists, brands, and creatives
              with exposure, education, and opportunity. Hosted by Double V &amp; Lady Buggg.
            </p>

            <a
              href="mailto:iaslivemusicreview@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors group mb-5"
            >
              <Mail size={13} className="shrink-0" />
              <span className="group-hover:underline">iaslivemusicreview@gmail.com</span>
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
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted hover:text-text transition-colors"
                    >
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
                    {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: '#1f1f1f' }}
        >
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} iAS Multi Media Group — Powered by iCREEUPREE LLC. All rights reserved.
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
