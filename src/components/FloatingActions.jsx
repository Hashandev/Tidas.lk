import Icon from './Icon'
import { brand } from '../data/content'
import { useScrollState } from '../hooks/useScrollState'
import './FloatingActions.css'

export default function FloatingActions() {
  const shown = useScrollState(600)

  return (
    <div className={`floaties ${shown ? 'is-shown' : ''}`}>
      <button
        className="floaty floaty--top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <Icon name="arrowDown" size={18} style={{ transform: 'rotate(180deg)' }} />
      </button>

      <a
        className="floaty floaty--wa"
        href={brand.whatsappUrl}
        aria-label="Message us on WhatsApp"
      >
        <Icon name="whatsapp" size={22} />
        <span className="floaty__pulse" aria-hidden="true" />
      </a>
    </div>
  )
}
