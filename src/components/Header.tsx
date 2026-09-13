import { useEffect, useState } from 'react'
import { site, type Lang } from '../data'
import { useI18n } from '../i18n'
import { Social } from './Social'

const langs: { code: Lang; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

export function Header() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#menu', label: t.nav.menu },
    { href: '#hours', label: t.nav.hours },
    { href: '#payment', label: t.nav.payment },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={open ? 'top is-open' : 'top'}>
      <a className="brand" href="#top" aria-label={site.name}>
        <span className="brand-mark">U</span>
        <span className="brand-name">{site.short}</span>
      </a>

      <nav className="nav" aria-label="Primary">
        {links.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="top-end">
        <a className="btn-book" href="#booking">
          {t.nav.book}
        </a>
        <Social />
        <div className="lang-switch" role="group" aria-label="Language">
          {langs.map((l) => (
            <button
              key={l.code}
              type="button"
              className={l.code === lang ? 'is-on' : ''}
              aria-pressed={l.code === lang}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
