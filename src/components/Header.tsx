import { useEffect, useState } from 'react'
import { site } from '../data'
import { useI18n } from '../i18n'
import { Social } from './Social'

export function Header() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const links = [
    { href: '#place', label: t.nav.place },
    { href: '#drinks', label: t.nav.drinks },
    { href: '#menu', label: t.nav.menu },
    { href: '#visit', label: t.nav.visit },
  ]

  return (
    <header className={open ? 'top is-open' : 'top'}>
      <a className="brand" href="#top" aria-label={site.name}>
        {site.name}
      </a>

      <nav className="nav" aria-label="Разделы">
        {links.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="top-end">
        <a className="btn-route" href="#visit" onClick={() => setOpen(false)}>
          {t.nav.route}
        </a>
        <Social />
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-label="Меню"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
