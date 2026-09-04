import BouncingBall from './BouncingBall'
import Icon from './Icon'
import Reveal from './Reveal'
import { telegramChannels, telegramIntro } from '../data/content'
import './Telegram.css'

export default function Telegram() {
  return (
    <section className="section tg" id="telegram">
      <BouncingBall className="tg__physics" />

      <div className="container">
        <Reveal className="section-head section-head--center">
          <h2 className="heading">{telegramIntro.heading}</h2>
          <p className="lede">{telegramIntro.lede}</p>
        </Reveal>

        <div className="tg__grid">
          {telegramChannels.map((c, i) => (
            <Reveal as="article" className="tgCard" key={c.url} delay={i * 0.09}>
              <span className="tgCard__tile">
                <Icon name="telegram" size={34} />
              </span>

              <h3 className="tgCard__title">
                {c.pre && <span>{c.pre}</span>}
                <em>{c.accent}</em>
                <span>{c.post}</span>
              </h3>

              <a
                className="tgCard__join"
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
