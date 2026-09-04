import Icon from './Icon'
import { brand, developer, footerLinks } from '../data/content'
import './Footer.css'

/* External links open in a new tab; in-page anchors stay put. */
const external = (href) => /^https?:\/\//.test(href)

const linkProps = (href) =>
  external(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              {brand.siteName}
            </a>

            <p className="footer__blurb">
              {brand.tagline}. A/L Physics for the 2027 and 2028 batches — join the
              Telegram channels for timetables, tutes and announcements.
            </p>

            <div className="footer__contact">
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>
                <Icon name="phone" size={15} />
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`}>
                <Icon name="mail" size={15} />
                {brand.email}
              </a>
            </div>
          </div>

          {footerLinks.map((col) => (
            <nav className="footer__col" key={col.title} aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} {...linkProps(link.href)}>
                      {link.icon && <Icon name={link.icon} size={15} />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <p className="footer__credit">
            Developed by{' '}
            <a href={developer.url} target="_blank" rel="noopener noreferrer">
              {developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
