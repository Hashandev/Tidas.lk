import Icon from './Icon'
import { Link } from 'react-router-dom'
import { brand, developer, footerLinks } from '../data/content'
import './Footer.css'

/* External links open in a new tab; in-page anchors stay put. */
const external = (href) => /^https?:\/\//.test(href)

const linkProps = (href) =>
  external(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}

/* A client-side route like /privacy-policy — not external, not a #hash.
   These go through <Link> so they don't trigger a full page reload. */
const isRoute = (href) => href.startsWith('/') && !href.includes('#')

function FooterLink({ href, children }) {
  if (isRoute(href)) return <Link to={href}>{children}</Link>
  return (
    <a href={href} {...linkProps(href)}>
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
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
                    <FooterLink href={link.href}>
                      {link.icon && <Icon name={link.icon} size={15} />}
                      {link.label}
                    </FooterLink>
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
