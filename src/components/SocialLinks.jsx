import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { personalInfo } from '../data/personal'

const links = [
  { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  { href: personalInfo.github, icon: FaGithub, label: 'GitHub' },
  { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, label: 'Email' },
  { href: `tel:${personalInfo.phones[0].replace(/\s/g, '')}`, icon: FaPhoneAlt, label: 'Phone' },
]

export default function SocialLinks({ className = '', size = 18 }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}
