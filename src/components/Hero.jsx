import Icon from './Icon'
import { brand, hero } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">

      <div className="container hero__inner">
        <div className="hero__copy">
          {/* Decorative script watermark sitting behind the wordmark */}
          <span className="hero__watermark" aria-hidden="true">
            <span className="hero__wmSmart">Smart</span>
            <span className="hero__wmPhysics">Physics</span>
          </span>

          <h1 className="hero__title">
            {hero.title}
            <span>{hero.titleAccent}</span>
          </h1>
        </div>

        {/* Actions pulled out of hero__copy so CSS can reorder them
            independently on mobile (below the portrait). */}
        <div className="hero__actions">
          <a href="/#telegram" className="btn btn--ink">
            <Icon name="telegram" size={18} />
            Join Telegram
          </a>
          <a href={brand.lmsUrl} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            <Icon name="laptop" size={18} />
            Student Login
          </a>
        </div>

        <div className="hero__portrait">
          <div className="portrait">
            <div className="portrait__ground" aria-hidden="true" />

            <img
              className="portrait__img"
              src="/assets/photos/teacher-hero.png"
              alt={`${brand.name}, A/L Physics teacher`}
              width="636"
              height="1293"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="/#story" aria-label="Scroll to our story">
        <Icon name="arrowDown" size={16} />
      </a>
    </section>
  )
}
