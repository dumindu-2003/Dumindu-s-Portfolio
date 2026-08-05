import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { personalInfo } from '../data/personal'
import { sendContactEmail } from '../utils/emailjs'
import contactIllustration from '../assets/illustrations/contact-illustration.webp'
import profileAbout from '../assets/images/profile-about.webp'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await sendContactEmail(form)
      setStatus({
        type: 'success',
        message: 'Message sent successfully! Check your inbox for the first-time activation email if this is the first message.',
      })
      setForm(initialForm)
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const contactItems = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phones[0],
      href: `tel:${personalInfo.phones[0].replace(/\s/g, '')}`,
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'dumindu-liyanaarachchi',
      href: personalInfo.linkedin,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb -left-20 top-10 h-72 w-72 bg-primary/20" />
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Open to software engineering internships and collaborative opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src={contactIllustration}
                alt="Contact illustration"
                className="h-48 w-full object-cover opacity-80 sm:h-56"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <img
                  src={profileAbout}
                  alt=""
                  className="h-14 w-14 rounded-full border-2 border-primary/50 object-cover object-top"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold">{personalInfo.shortName}</p>
                  <p className="text-xs text-primary">Usually replies within 24h</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="glass flex h-full items-start gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-primary/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{label}</p>
                      <p className="truncate text-sm font-medium text-text">{value}</p>
                    </div>
                  </div>
                )

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl border border-white/10 p-6 sm:p-8"
          >
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm outline-none transition focus:border-primary/50"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm outline-none transition focus:border-primary/50"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mb-5 block text-sm">
              <span className="mb-1.5 block text-muted">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                className="w-full resize-none rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm outline-none transition focus:border-primary/50"
                placeholder="Tell me about the role or project..."
              />
            </label>

            {status.message && (
              <p
                className={`mb-4 text-sm ${
                  status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {status.message}
              </p>
            )}

            <Button type="submit" disabled={loading} className="w-full">
              <FiSend />
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
