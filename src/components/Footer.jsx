import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { navLinks, personalInfo } from '../data/personal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-bg-soft/80">
      <div className="container-main section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-sm font-bold text-slate-950">
                D
              </span>
              <span className="font-semibold">
                {personalInfo.shortName}
                <span className="text-primary">.</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Information Technology Undergraduate · Full-Stack Developer · Software Engineer
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
              Social
            </h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition hover:border-primary/40 hover:text-primary"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition hover:border-primary/40 hover:text-primary"
              >
                <FaGithub />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition hover:border-primary/40 hover:text-primary"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p>Designed for internship & software engineering opportunities.</p>
        </div>
      </div>
    </footer>
  )
}
