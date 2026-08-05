import { motion } from 'framer-motion'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-3.5 text-base',
}

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-secondary text-slate-950 font-semibold shadow-[0_0_28px_rgba(0,229,255,0.25)] hover:shadow-[0_0_36px_rgba(124,58,237,0.35)]',
  secondary:
    'glass text-text border border-white/10 hover:border-primary/40 hover:text-primary',
  ghost: 'text-muted hover:text-primary bg-transparent',
}

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  download,
  target,
  rel,
  disabled,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${sizes[size]} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: disabled ? undefined : { y: -2, scale: 1.02 },
    whileTap: disabled ? undefined : { scale: 0.98 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
