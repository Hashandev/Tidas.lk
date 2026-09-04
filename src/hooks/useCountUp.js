import { useEffect, useState } from 'react'

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Counts from 0 to `target` once `active` becomes true.
 * Returns the current value, already locale-formatted.
 */
export function useCountUp(target, active, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    if (prefersReducedMotion()) {
      setValue(target)
      return
    }

    let frame
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(easeOutCubic(progress) * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value.toLocaleString()
}
