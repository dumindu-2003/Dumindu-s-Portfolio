import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function useCountUp(end, duration = 1600, startOnView = true) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 })
  const started = useRef(false)

  useEffect(() => {
    if (startOnView && !inView) return
    if (started.current) return
    started.current = true

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) frame = requestAnimationFrame(tick)
      else setCount(end)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end, duration, inView, startOnView])

  return { ref, count }
}
