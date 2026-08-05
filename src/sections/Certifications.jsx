import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="orb right-10 bottom-10 h-72 w-72 bg-secondary/20" />
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning & credentials"
          description="Professional courses and certifications that strengthen my engineering foundation."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2" />

          <div className="space-y-8">
            {certifications.map((cert, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={`${cert.title}-${cert.year}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className={`relative flex md:items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className="absolute top-6 left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-[0_0_12px_rgba(0,229,255,0.8)] md:left-1/2" />

                  <div
                    className={`ml-10 w-full md:ml-0 md:w-[calc(50%-1.75rem)] ${
                      isLeft ? 'md:mr-auto md:pr-2' : 'md:ml-auto md:pl-2'
                    }`}
                  >
                    <div className="glass rounded-2xl border border-white/10 p-5 transition hover:border-primary/30">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 text-primary">
                          <FiAward size={18} />
                          <span className="text-xs font-semibold tracking-wider uppercase">
                            {cert.year}
                          </span>
                        </div>
                        {cert.id && (
                          <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted">
                            ID: {cert.id}
                          </span>
                        )}
                      </div>
                      <h3 className="mb-1 text-base font-semibold text-text">{cert.title}</h3>
                      <p className="mb-2 text-xs text-primary">{cert.issuer}</p>
                      <p className="text-sm leading-relaxed text-muted">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
