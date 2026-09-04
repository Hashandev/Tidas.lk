import Icon from './Icon'
import Reveal from './Reveal'
import ScrollGears from './ScrollGears'
import { brand, story } from '../data/content'
import './ScrollGears.css'
import './Story.css'

export default function Story() {
  return (
    <section className="section story" id="story">
      <ScrollGears />

      <div className="container story__inner">
        {/* Left — biography */}
        <Reveal className="story__text">
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="heading">{story.heading}</h2>

          <div className="story__body">
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="sinhala">
                {p}
              </p>
            ))}
          </div>

          <ul className="story__facts">
            {story.facts.map((fact, i) => (
              // Own Reveal each, so they arrive one after another rather
              // than all together with the paragraphs above
              <Reveal as="li" key={fact.label} delay={0.25 + i * 0.11}>
                <span className="story__factIcon">
                  <Icon name={fact.icon} size={17} />
                </span>
                <div className="story__factBody">
                  <span className="sinhala">{fact.label}</span>
                  <strong className="sinhala">{fact.value}</strong>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        {/* Right — portrait */}
        <Reveal className="story__media" delay={0.12}>
          <img
            src={story.photo}
            alt={`${brand.name} — ${brand.subject} teacher`}
            width="1000"
            height="1500"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
