import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'
import { IconPot } from './Icons'

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

  const close = () => setOpen(false)

  return (
    <header className={open ? 'site-head is-open' : 'site-head'}>
      <div className="site-head-inner">
        <a className="logo-block" href="#top" onClick={close}>
          <IconPot />
          <span className="logo-script">Територія сімейного відпочинку Unsleptov у місті Гостиномир</span>
        </a>

        <nav className="site-nav" aria-label="Головна навігація">
          <a href="#top" onClick={close}>
            {t.nav.home}
          </a>
          <a href="#rules" onClick={close}>
            {t.nav.rules}
          </a>
          <span className="nav-dropdown">
            <button type="button" className="nav-drop-btn" aria-haspopup="true">
              {t.nav.order}
              <span aria-hidden="true"> ▾</span>
            </button>
            <span className="nav-drop-menu">
              <a href="#contacts" onClick={close}>
                {t.nav.orderHouse}
              </a>
              <a href="#contacts" onClick={close}>
                {t.nav.orderGazebo}
              </a>
            </span>
          </span>
          <a href="#contacts" onClick={close}>
            {t.nav.contacts}
          </a>
          <a href="#menu" onClick={close}>
            {t.nav.menu}
          </a>
        </nav>

        <button
          type="button"
          className="head-burger"
          aria-expanded={open}
          aria-label="Меню"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
