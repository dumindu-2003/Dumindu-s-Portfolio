import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      whileHover={hover ? { y: -6, borderColor: 'rgba(0,229,255,0.35)' } : undefined}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}
