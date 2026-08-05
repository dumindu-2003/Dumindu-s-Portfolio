import { useCountUp } from '../hooks/useCountUp'

export default function AnimatedCounter({ value, suffix = '', label }) {
  const { ref, count } = useCountUp(value)

  return (
    <div ref={ref} className="text-center">
      <p className="gradient-text text-3xl font-bold sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs tracking-wide text-muted uppercase sm:text-sm">{label}</p>
    </div>
  )
}
