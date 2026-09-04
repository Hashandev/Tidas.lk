import { useId } from 'react'

/**
 * Animated orbital motif that sits behind the hero figure.
 *
 * Three elliptical orbits at 60° to each other, each carrying a coloured
 * electron travelling the path via SVG animateMotion. Pure SVG/CSS — no
 * canvas, no JS loop — so it costs nothing to run and scales cleanly.
 */

// Ellipse as a path so <mpath> can reference it for the electron motion.
const ORBIT = 'M 25,200 a 175,68 0 1,0 350,0 a 175,68 0 1,0 -350,0'

const orbits = [
  { id: 'a', rotate: 0, dur: '22s', dir: 'normal', color: '#E0483C' },
  { id: 'b', rotate: 60, dur: '29s', dir: 'reverse', color: '#3E8FD0' },
  { id: 'c', rotate: 120, dur: '36s', dir: 'normal', color: '#2FAE7F' },
]

export default function PhysicsBackdrop({ className = '' }) {
  const pathId = useId()

  return (
    <svg
      className={`physics ${className}`.trim()}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path id={pathId} d={ORBIT} />
      </defs>

      {orbits.map(({ id, rotate, dur, dir, color }) => (
        <g key={id} transform={`rotate(${rotate} 200 200)`}>
          <use href={`#${pathId}`} className="physics__ring" />

          <circle r="7" className="physics__electron" style={{ '--electron': color }}>
            <animateMotion
              dur={dur}
              repeatCount="indefinite"
              keyPoints={dir === 'reverse' ? '1;0' : '0;1'}
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#${pathId}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </svg>
  )
}
