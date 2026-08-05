import { useEffect, useState } from 'react'
import { navLinks } from '../data/personal'

export function useScrollSpy(offset = 120) {
  const [activeId, setActiveId] = useState(navLinks[0]?.id ?? 'home')

  useEffect(() => {
    const onScroll = () => {
      const positions = navLinks
        .map((link) => {
          const el = document.getElementById(link.id)
          if (!el) return null
          return { id: link.id, top: el.getBoundingClientRect().top }
        })
        .filter(Boolean)

      const current = positions
        .filter((p) => p.top <= offset)
        .sort((a, b) => b.top - a.top)[0]

      if (current) setActiveId(current.id)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return activeId
}
