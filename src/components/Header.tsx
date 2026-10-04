import { useEffect, useState } from 'react'
import { site } from '../data'

const links = [
  { href: '#about', label: 'Зала' },
  { href: '#kitchen', label: 'Кухня' },
  { href: '#menu', label: 'Меню' },
  { href: '#river', label: 'Вода' },
  { href: '#contacts', label: 'Контакти' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    function onScroll() {
      setSolid(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={open ? 'site-head is-open' : solid ? 'site-head is-solid' : 'site-head'}>
      <div className="site-head-inner">
        <a className="logo" href="#top" onClick={close}>
          Козачок
        </a>

        <nav className="site-nav" aria-label="Розділи сторінки">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="head-phone" href={`tel:${site.phoneTel}`}>
          {site.phone}
        </a>

        <button
          type="button"
          className="head-burger"
          aria-expanded={open}
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
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
