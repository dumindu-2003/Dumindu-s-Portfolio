import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { skillCategories } from '../data/skills'
import { getIcon } from '../utils/icons'
import techBg from '../assets/illustrations/tech-bg.webp'

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <img src={techBg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools & technologies I work with"
          description="A versatile stack spanning frontend, backend, mobile, databases, and design."
        />

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: catIndex * 0.05 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-text">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill, i) => {
                  const Icon = getIcon(skill.icon)
                  return (
                    <GlassCard key={skill.name} className="!p-4 group">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="flex flex-col items-center gap-3 text-center"
                      >
                        <span
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:scale-110 group-hover:border-primary/30"
                          style={{ color: skill.color }}
                        >
                          <Icon size={26} />
                        </span>
                        <span className="text-sm font-medium text-text">{skill.name}</span>
                      </motion.div>
                    </GlassCard>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
