import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import { policies, policyList } from '../data/policies'
import './PolicyPage.css'

export default function PolicyPage() {
  const { slug } = useParams()
  const policy = policies[slug]

  // Land at the top of the document, and name the tab after it
  useEffect(() => {
    window.scrollTo(0, 0)
    if (policy) document.title = `${policy.title} — tidas.lk`
    return () => {
      document.title = 'Tidas Nikeshala — A/L Physics | Smart Physics'
    }
  }, [policy])

  if (!policy) return <Navigate to="/" replace />

  return (
    <>
      <Navbar />

      <main className="policy">
        <div className="container policy__inner">
          <Link to="/" className="policy__back">
            <Icon name="arrowRight" size={16} style={{ transform: 'rotate(180deg)' }} />
            Back to home
          </Link>

          <header className="policy__head">
            <p className="eyebrow">Legal</p>
            <h1 className="heading">{policy.title}</h1>
            <p className="policy__updated">Last updated {policy.updated}</p>
            <p className="lede">{policy.intro}</p>
          </header>

          <nav className="policy__switch" aria-label="Other policies">
            {policyList.map((p) => (
              <Link
                key={p.slug}
                to={`/${p.slug}`}
                className={p.slug === slug ? 'is-current' : ''}
                aria-current={p.slug === slug ? 'page' : undefined}
              >
                {p.title}
              </Link>
            ))}
          </nav>

          <article className="policy__body">
            {policy.sections.map((s, i) => (
              <section key={s.heading} className="policy__section">
                <h2>
                  <span className="policy__num">{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </h2>

                {s.body?.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}

                {s.list && (
                  <ul>
                    {s.list.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}

                {s.after?.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </>
  )
}
