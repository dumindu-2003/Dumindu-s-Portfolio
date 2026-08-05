import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks, personalInfo } from '../data/personal'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(140)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-bg/80 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main flex h-16 items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <button
          onClick={() => goTo('home')}
          className="group flex items-center gap-2 text-left"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,229,255,0.35)]">
            D
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            {personalInfo.shortName}
            <span className="text-primary">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeId === link.id ? 'text-primary' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(0,229,255,0.25)] transition hover:opacity-90 md:inline-flex"
          >
            Hire Me
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-main flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${
                      activeId === link.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted hover:bg-white/5 hover:text-text'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
