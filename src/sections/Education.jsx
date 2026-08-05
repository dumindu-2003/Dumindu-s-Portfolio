import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/certifications'

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-main">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
          description="Building a strong foundation in information technology and software engineering."
        />

        <div className="mx-auto grid max-w-4xl gap-5">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              className="glass group relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-7"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-80" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                    {item.status}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-text md:text-xl">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-secondary">{item.institution}</p>
                </div>
                <div className="shrink-0 space-y-2 text-sm text-muted">
                  <p className="flex items-center gap-2">
                    <FiCalendar className="text-primary" />
                    {item.period}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiMapPin className="text-primary" />
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
