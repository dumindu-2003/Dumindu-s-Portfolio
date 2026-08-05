import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiMail, FiChevronDown } from 'react-icons/fi'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import { personalInfo } from '../data/personal'
import profileHero from '../assets/images/profile-hero.webp'
import futuristicBg from '../assets/illustrations/futuristic-bg.webp'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={futuristicBg}
          alt=""
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-bg" />
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="orb top-20 -left-20 h-72 w-72 bg-primary/25" />
        <div className="orb right-0 bottom-10 h-80 w-80 bg-secondary/30" />
      </div>

      <div className="container-main relative z-10 grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-10 lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Open to Internships
          </motion.span>

          <p className="mb-2 text-lg text-muted sm:text-xl">Hi, I&apos;m</p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="mb-3 min-h-[2rem] text-lg font-semibold text-text sm:text-xl">
            <TypeAnimation
              sequence={[
                'Information Technology Undergraduate',
                2200,
                'Full Stack Developer',
                2200,
                'Software Engineer',
                2200,
              ]}
              wrapper="span"
              speed={48}
              repeat={Infinity}
              className="text-primary"
            />
          </div>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            {personalInfo.tagline}
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <Button
              href="/Dumindu_Akhila_CV.pdf"
              download="Dumindu_Akhila_CV.pdf"
              variant="primary"
            >
              <FiDownload />
              Download CV
            </Button>
            <Button href="#contact" variant="secondary">
              <FiMail />
              Contact Me
            </Button>
          </div>

          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px]">
            <div className="glow-border relative z-10 h-full overflow-hidden rounded-[1.75rem]">
              <div className="absolute inset-[3px] overflow-hidden rounded-[1.55rem] bg-card">
                <img
                  src={profileHero}
                  alt={`${personalInfo.name} — professional portrait`}
                  className="h-full w-full object-cover object-[center_15%] scale-[1.02]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm font-semibold text-white">{personalInfo.shortName}</p>
                  <p className="text-xs text-primary">Full Stack Developer</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute -bottom-4 -left-4 z-20 hidden rounded-2xl px-4 py-3 sm:block"
            >
              <p className="text-xs text-muted">Building with</p>
              <p className="text-sm font-semibold text-primary">React · Spring · MERN</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span>Scroll</span>
        <FiChevronDown size={18} className="text-primary" />
      </motion.a>
    </section>
  )
}
