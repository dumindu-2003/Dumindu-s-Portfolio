import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Hero from '../sections/Hero'

const About = lazy(() => import('../sections/About'))
const Skills = lazy(() => import('../sections/Skills'))
const Projects = lazy(() => import('../sections/Projects'))
const Certifications = lazy(() => import('../sections/Certifications'))
const Education = lazy(() => import('../sections/Education'))
const Contact = lazy(() => import('../sections/Contact'))

function SectionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  )
}
