import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { faqIntro, faqs } from '../data/content'
import './Faq.css'

export default function Faq() {
  const [open, setOpen] = useState(-1)

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">{faqIntro.eyebrow}</p>
          <h2 className="heading">{faqIntro.heading}</h2>
        </Reveal>

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i

            return (
              <Reveal
                as="div"
                className={`faqItem ${isOpen ? 'is-open' : ''}`}
                key={item.q}
                delay={i * 0.07}
              >
                <button
                  className="faqItem__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="sinhala">{item.q}</span>
                  <span className="faqItem__toggle" aria-hidden="true">
                    <Icon name={isOpen ? 'minus' : 'plus'} size={20} />
                  </span>
                </button>

                <div
                  className="faqItem__a"
                  id={`faq-panel-${i}`}
                  role="region"
                  hidden={!isOpen}
                >
                  {item.venue && (
                    <p className="faqItem__venue">
                      <Icon name="pin" size={15} />
                      <span className="sinhala">{item.venue}</span>
                    </p>
                  )}

                  {item.schedule && (
                    <ul className="schedule">
                      {item.schedule.map((row) => (
                        <li key={`${row.batch}-${row.day}`}>
                          <span className="schedule__batch">{row.batch}</span>
                          <span className="schedule__day sinhala">{row.day}</span>
                          <span className="schedule__time">{row.time}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.a && <p className="faqItem__text sinhala">{item.a}</p>}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
