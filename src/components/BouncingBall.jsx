import { useEffect, useRef } from 'react'

/**
 * Bouncing-ball physics running as a section backdrop.
 *
 * Balls fall under gravity, bounce off the floor and side walls, and
 * collide with each other as elastic bodies — momentum is exchanged along
 * the contact normal, weighted by mass, with an overlap correction so they
 * never sink into one another. Collisions are fully elastic and no ball is
 * ever removed — the same set keeps going indefinitely.
 *
 * Sized to its parent, paused when off-screen, and reduced to a static
 * frame when the visitor asks for less motion.
 */

const GRAVITY = 330 // px/s²

/* Fully elastic throughout. Balls are never removed, so the system has to
   conserve its energy — anything below 1 bleeds it away and they would all
   end up dead on the floor. */
const FLOOR_BOUNCE = 1
const WALL_BOUNCE = 1
const BALL_BOUNCE = 1

const TIME_SCALE = 0.62 // slows the whole simulation
const FLOOR_INSET = 26 // floor sits this far above the bottom edge

const BALL_COUNT = 13
const RADIUS = [8, 20]
const DRIFT = [-70, 70] // initial horizontal velocity

/* Discrete integration still leaks a little energy over time. A ball that
   has gone flat on the floor gets a gentle kick — never deleted. */
const REVIVE_SPEED = 34

const TINTS = [
  '22, 36, 79', // deep navy
  '34, 59, 114', // royal navy
  '45, 123, 191', // accent blue
]

const rand = ([min, max]) => min + Math.random() * (max - min)
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default function BouncingBall({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const host = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let frame = null
    let last = null
    let balls = []

    const spawn = () => {
      const r = rand(RADIUS)
      return {
        r,
        // Mass scales with area, so big balls shove small ones convincingly
        m: r * r,
        tint: pick(TINTS),
        x: rand([r, Math.max(r, width - r)]),
        y: rand([r, Math.max(r, height * 0.5)]),
        vx: rand(DRIFT),
        vy: rand([0, 60]),
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = host.offsetWidth
      height = host.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (!balls.length) balls = Array.from({ length: BALL_COUNT }, () => spawn())
    }

    /** Elastic impulse between two overlapping balls. */
    const collide = (a, b) => {
      const dx = b.x - a.x
      const dy = b.y - a.y
      const dist = Math.hypot(dx, dy) || 0.0001
      const overlap = a.r + b.r - dist
      if (overlap <= 0) return

      // Contact normal, pointing a → b
      const nx = dx / dist
      const ny = dy / dist

      // Push apart in inverse proportion to mass, so neither sinks in
      const totalInv = 1 / a.m + 1 / b.m
      const push = overlap / totalInv
      a.x -= (nx * push) / a.m
      a.y -= (ny * push) / a.m
      b.x += (nx * push) / b.m
      b.y += (ny * push) / b.m

      // Only resolve if they are actually closing on each other
      const vrel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny
      if (vrel > 0) return

      const impulse = (-(1 + BALL_BOUNCE) * vrel) / totalInv
      a.vx -= (impulse / a.m) * nx
      a.vy -= (impulse / a.m) * ny
      b.vx += (impulse / b.m) * nx
      b.vy += (impulse / b.m) * ny
    }

    const step = (dt) => {
      const floor = height - FLOOR_INSET

      for (const b of balls) {
        b.vy += GRAVITY * dt
        b.x += b.vx * dt
        b.y += b.vy * dt

        // Side walls
        if (b.x - b.r < 0) {
          b.x = b.r
          b.vx = Math.abs(b.vx) * WALL_BOUNCE
        } else if (b.x + b.r > width) {
          b.x = width - b.r
          b.vx = -Math.abs(b.vx) * WALL_BOUNCE
        }

        // Floor — no friction, or the horizontal drift would decay away
        if (b.y + b.r > floor) {
          b.y = floor - b.r
          b.vy = -Math.abs(b.vy) * FLOOR_BOUNCE
        }
      }

      // Pairwise collisions — 13 balls is 78 pairs, trivial per frame
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) collide(balls[i], balls[j])
      }

      // Nothing is ever removed. A ball that has gone flat on the floor is
      // nudged back into play instead, so the same balls keep going.
      for (const b of balls) {
        if (b.y + b.r > floor - 2 && Math.hypot(b.vx, b.vy) < REVIVE_SPEED) {
          b.vy = -rand([130, 220])
          b.vx += rand([-45, 45])
        }
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (const b of balls) {
        // Soft contact shadow, tightening as the ball nears the floor
        const floor = height - FLOOR_INSET
        const gap = Math.max(0, floor - (b.y + b.r))
        const near = Math.max(0, 1 - gap / 220)
        if (near > 0.02) {
          ctx.beginPath()
          ctx.ellipse(b.x, floor - 2, b.r * (0.5 + near * 0.5), b.r * 0.2, 0, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(22, 36, 79, ${near * 0.1})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${b.tint}, 0.5)`
        ctx.fill()

        // Rim, then highlight — reads as a sphere rather than a flat disc
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${b.tint}, 0.32)`
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.34, b.r * 0.33, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.fill()
      }
    }

    const loop = (t) => {
      if (last === null) last = t
      const rawMs = Math.min(t - last, 33)
      last = t

      const dt = (rawMs / 1000) * TIME_SCALE
      step(dt)
      render()
      frame = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduced) {
      const floor = height - FLOOR_INSET
      balls.forEach((b, i) => {
        b.y = floor - b.r
        b.x = (width / (BALL_COUNT + 1)) * (i + 1)
      })
      render()
      return () => window.removeEventListener('resize', resize)
    }

    // Only burn frames while the section is actually on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && frame === null) {
          last = null
          frame = requestAnimationFrame(loop)
        } else if (!entry.isIntersecting && frame !== null) {
          cancelAnimationFrame(frame)
          frame = null
        }
      },
      { threshold: 0 },
    )
    observer.observe(host)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
