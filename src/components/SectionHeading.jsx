import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      className={`mb-12 flex max-w-2xl flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
      {description && (
        <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      )}
    </motion.div>
  )
}
