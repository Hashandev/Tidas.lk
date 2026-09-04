import { useEffect, useRef } from 'react'

/**
 * A meshed gear train driven by scroll position rather than a timer —
 * the gears turn as the page moves and stop when it does.
 *
 * Four gears of different sizes. Meshed gears must turn in opposite
 * directions, and their angular speed is inversely proportional to tooth
 * count, so the whole train stays geometrically honest.
 */

/** Outer teeth plus an inner hole, drawn as one evenodd path. */
function gearPath(cx, cy, rOuter, rInner, rHole, teeth) {
  let d = ''
  const step = (Math.PI * 2) / teeth

  for (let i = 0; i < teeth; i++) {
    const a0 = i * step
    const pts = [
      [cx + rInner * Math.cos(a0), cy + rInner * Math.sin(a0)],
      [cx + rOuter * Math.cos(a0 + step * 0.3), cy + rOuter * Math.sin(a0 + step * 0.3)],
      [cx + rOuter * Math.cos(a0 + step * 0.5), cy + rOuter * Math.sin(a0 + step * 0.5)],
      [cx + rInner * Math.cos(a0 + step * 0.8), cy + rInner * Math.sin(a0 + step * 0.8)],
    ]
    pts.forEach(([x, y], idx) => {
      d += (i === 0 && idx === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' '
    })
  }
  d += 'Z '

  // Counter-wound circle — becomes the hub hole under fill-rule="evenodd"
  d += `M ${cx - rHole} ${cy} A ${rHole} ${rHole} 0 1 0 ${cx + rHole} ${cy} `
  d += `A ${rHole} ${rHole} 0 1 0 ${cx - rHole} ${cy} Z`
  return d
}

/* Centres are spaced so neighbouring teeth interleave. The first and third
   sit past the left edge, so they read as half gears once clipped.
   `dir` alternates — meshed gears cannot turn the same way. */
const GEARS = [
  { cx: 20, cy: 150, r: 115, teeth: 20, dir: 1, fill: '#16244F', opacity: 0.13 },
  { cx: 100, cy: 330, r: 80, teeth: 14, dir: -1, fill: '#223B72', opacity: 0.15 },
  { cx: 60, cy: 470, r: 62, teeth: 11, dir: 1, fill: '#3E8FD0', opacity: 0.17 },
  { cx: 45, cy: 580, r: 45, teeth: 8, dir: -1, fill: '#223B72', opacity: 0.14 },
]

// Degrees turned per pixel scrolled, before the tooth-count division
const SPIN_BASE = 2.2

export default function ScrollGears({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let queued = false

    const write = () => {
      el.style.setProperty('--scroll', String(Math.round(window.scrollY)))
      queued = false
    }

    const onScroll = () => {
      // Scroll fires far more often than the screen repaints
      if (!queued) {
        queued = true
        requestAnimationFrame(write)
      }
    }

    write()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <svg
      ref={ref}
      className={`gears ${className}`.trim()}
      viewBox="0 0 220 700"
      preserveAspectRatio="xMinYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {GEARS.map((g) => (
        <path
          key={`${g.cx}-${g.cy}`}
          className="gears__gear"
          d={gearPath(g.cx, g.cy, g.r, g.r * 0.82, g.r * 0.32, g.teeth)}
          fillRule="evenodd"
          fill={g.fill}
          opacity={g.opacity}
          style={{
            transformOrigin: `${g.cx}px ${g.cy}px`,
            // Smaller gears turn faster, in proportion to tooth count
            '--rate': ((SPIN_BASE / g.teeth) * g.dir).toFixed(4),
          }}
        />
      ))}
    </svg>
  )
}
