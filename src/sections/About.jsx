import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'
import GlassCard from '../components/GlassCard'
import { personalInfo, stats } from '../data/personal'
import profileAbout from '../assets/images/profile-about.webp'
import workspaceSetup from '../assets/illustrations/workspace-setup.webp'

const highlights = [
  {
    title: 'Education',
    text: 'BSc (Hons) Information Technology at SLIIT — currently a 2nd year undergraduate.',
  },
  {
    title: 'Experience',
    text: 'Hands-on academic and professional projects across web, mobile, and backend systems.',
  },
  {
    title: 'Passion',
    text: 'Clean code, UI/UX craft, emerging AI/ML applications, and solving real-world problems.',
  },
  {
    title: 'Goals',
    text: 'Securing a software engineering internship to grow as a full-stack developer.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="orb top-1/3 -right-24 h-72 w-72 bg-secondary/20" />
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting digital experiences with purpose"
          description="A motivated IT undergraduate building modern software with curiosity and craft."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glow-border relative overflow-hidden rounded-3xl">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-card m-[3px]">
                <img
                  src={profileAbout}
                  alt={`${personalInfo.name} outdoors`}
                  className="h-[420px] w-full object-cover object-[center_20%] sm:h-[480px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-bg/80 via-transparent to-primary/10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
              {personalInfo.objective}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-muted sm:text-base">
              {personalInfo.aboutExtended}
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <GlassCard key={item.title} className="!p-4" hover={false}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <h3 className="mb-1 text-sm font-semibold text-primary">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-muted">{item.text}</p>
                  </motion.div>
                </GlassCard>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={workspaceSetup}
                alt="Modern developer workspace"
                className="h-28 w-full object-cover opacity-60 sm:h-32"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
              <div className="absolute inset-0 flex items-center px-5">
                <p className="max-w-xs text-xs text-muted sm:text-sm">
                  Based in {personalInfo.location} · Open to remote & on-site internships
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="!py-6" hover={false}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
