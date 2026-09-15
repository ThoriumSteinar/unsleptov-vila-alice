import { useEffect, useState } from 'react'
import { site } from '../data'
import { useI18n } from '../i18n'
import { Social } from './Social'

export function Header() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#rooms', label: t.nav.rooms },
    { href: '#park', label: t.nav.park },
    { href: '#restaurant', label: t.nav.restaurant },
    { href: '#rest', label: t.nav.rest },
    { href: '#events', label: t.nav.events },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={open ? 'top is-open' : 'top'}>
      <a className="brand" href="#top" aria-label={site.name}>
        <span className="brand-mark">FS</span>
        <span className="brand-name">{site.short}</span>
      </a>

      <nav className="nav" aria-label="Основна навігація">
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
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
