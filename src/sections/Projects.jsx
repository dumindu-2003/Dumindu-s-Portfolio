import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="orb top-20 left-0 h-64 w-64 bg-primary/15" />
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & academic builds"
          description="From campus platforms to mobile apps — practical projects that solve real problems."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group glass flex h-full flex-col overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                <div className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] tracking-wider text-muted uppercase backdrop-blur">
                  {project.year}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-medium text-primary">{project.subtitle}</p>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <FiGithub /> GitHub
                  </Button>
                  <Button
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="flex-1"
                  >
                    <FiExternalLink /> Live Demo
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
