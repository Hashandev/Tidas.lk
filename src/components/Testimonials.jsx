import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { reviewPhotos, testimonialsIntro } from '../data/content'
import './Testimonials.css'

const FLOW_SPEED = 30 // px per second of continuous drift

/* The track holds two identical passes of the photos. Once the first pass
   has scrolled by, scrollLeft is rolled back by exactly one pass — the
   content either side is identical, so the seam is invisible and the
   slider reads as an endless circle. */
const LOOP = [...reviewPhotos, ...reviewPhotos]

export default function Testimonials() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState(null) // index, or null when closed

  /* Exact distance between a card and its clone. Measured from layout
     rather than scrollWidth/2 — flex gaps don't split evenly across the
     two passes, and being a few pixels out shows as a jolt at every wrap. */
  const loopPeriod = () => {
    const cards = trackRef.current?.querySelectorAll('.review')
    if (!cards || cards.length <= reviewPhotos.length) return 0
    return cards[reviewPhotos.length].offsetLeft - cards[0].offsetLeft
  }

  /* Roll the scroll position back into the first pass. */
  const normalise = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const w = loopPeriod()
    if (!w) return
    if (track.scrollLeft >= w) track.scrollLeft -= w
    else if (track.scrollLeft < 0) track.scrollLeft += w
  }, [])

  /* Scale and turn each card by its distance from centre — the coverflow
     arc — and pick out whichever is nearest the middle. */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let queued = false

    const arc = () => {
      const box = track.getBoundingClientRect()
      const mid = box.left + box.width / 2
      const reach = box.width / 2 || 1

      let nearest = 0
      let nearestDist = Infinity

      track.querySelectorAll('.review').forEach((card, i) => {
        const r = card.getBoundingClientRect()
        const offset = (r.left + r.width / 2 - mid) / reach // -1 … 1
        const dist = Math.min(Math.abs(offset), 1)

        card.style.setProperty('--offset', offset.toFixed(3))
        card.style.setProperty('--dist', dist.toFixed(3))

        if (dist < nearestDist) {
          nearestDist = dist
          nearest = i
        }
      })

      // Clones share a dot with their original
      setActive(nearest % reviewPhotos.length)
    }

    const sync = () => {
      normalise()
      if (!queued) {
        queued = true
        requestAnimationFrame(() => {
          arc()
          queued = false
        })
      }
    }

    sync()
    track.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      track.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [normalise])

  /* ---------- Continuous autoplay ---------- */
  useEffect(() => {
    if (paused || lightbox !== null) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let frame
    let last = null

    const drift = (t) => {
      const track = trackRef.current
      if (track) {
        if (last !== null) {
          const dt = Math.min(t - last, 50) / 1000
          track.scrollLeft += FLOW_SPEED * dt
          normalise()
        }
        last = t
      }
      frame = requestAnimationFrame(drift)
    }

    frame = requestAnimationFrame(drift)
    return () => cancelAnimationFrame(frame)
  }, [paused, lightbox, normalise])

  const nudge = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.review')
    const step = card ? card.offsetWidth + 18 : track.clientWidth * 0.6
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const jumpTo = (i) => {
    const card = trackRef.current?.querySelectorAll('.review')[i]
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  /* ---------- Lightbox ---------- */
  const closeBox = useCallback(() => setLightbox(null), [])

  const stepBox = useCallback((dir) => {
    setLightbox((i) => (i === null ? i : (i + dir + reviewPhotos.length) % reviewPhotos.length))
  }, [])

  useEffect(() => {
    if (lightbox === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') closeBox()
      if (e.key === 'ArrowRight') stepBox(1)
      if (e.key === 'ArrowLeft') stepBox(-1)
    }

    document.body.classList.add('no-scroll')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, closeBox, stepBox])

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <Reveal className="testimonials__head">
          <h2 className="heading">{testimonialsIntro.heading}</h2>
        </Reveal>
      </div>

      {/* Hovering or focusing anywhere in the rail halts the flow */}
      <div
        className="testimonials__rail"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <button className="rail__arrow rail__arrow--prev" onClick={() => nudge(-1)} aria-label="Previous reviews">
          <Icon name="arrowRight" size={22} style={{ transform: 'rotate(180deg)' }} />
        </button>

        <ul className="testimonials__track" ref={trackRef}>
          {LOOP.map((src, i) => {
            const real = i % reviewPhotos.length
            return (
              <li className="review" key={i}>
                <button
                  className="review__btn"
                  onClick={() => setLightbox(real)}
                  aria-label={`Open student review ${real + 1} of ${reviewPhotos.length}`}
                  // The second pass is a visual duplicate — hide it from readers
                  aria-hidden={i >= reviewPhotos.length}
                  tabIndex={i >= reviewPhotos.length ? -1 : 0}
                >
                  <img src={src} alt={`Student review ${real + 1}`} loading="lazy" />
                  <span className="review__zoom" aria-hidden="true">
                    <Icon name="spark" size={16} />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <button className="rail__arrow rail__arrow--next" onClick={() => nudge(1)} aria-label="Next reviews">
          <Icon name="arrowRight" size={22} />
        </button>
      </div>

      {/* Dots */}
      <div className="container">
        <div className="testimonials__dots" role="tablist" aria-label="Review slides">
          {reviewPhotos.map((src, i) => (
            <button
              key={src}
              className={`testimonials__dot ${i === active ? 'is-active' : ''}`}
              onClick={() => jumpTo(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-selected={i === active}
              role="tab"
            />
          ))}
        </div>
      </div>

      {/* ---------- Lightbox ---------- */}
      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Student review">
          <button className="lightbox__scrim" onClick={closeBox} aria-label="Close" />

          <button className="lightbox__close" onClick={closeBox} aria-label="Close">
            <Icon name="close" size={22} />
          </button>

          <button
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={() => stepBox(-1)}
            aria-label="Previous review"
          >
            <Icon name="arrowRight" size={22} style={{ transform: 'rotate(180deg)' }} />
          </button>

          <figure className="lightbox__figure">
            <img src={reviewPhotos[lightbox]} alt={`Student review ${lightbox + 1}`} />
            <figcaption>
              {lightbox + 1} / {reviewPhotos.length}
            </figcaption>
          </figure>

          <button
            className="lightbox__arrow lightbox__arrow--next"
            onClick={() => stepBox(1)}
            aria-label="Next review"
          >
            <Icon name="arrowRight" size={22} />
          </button>
        </div>
      )}
    </section>
  )
}
