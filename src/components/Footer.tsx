import { site } from '../data'
import { useI18n } from '../i18n'
import { Social } from './Social'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="foot">
      <Social />
      <nav className="foot-links" aria-label="Підвал">
        <a href="#top">{t.footerHome}</a>
        <a href="#contact">{t.nav.contact}</a>
        <a href="#booking">{t.nav.book}</a>
      </nav>
      <p className="foot-copy">
        © {new Date().getFullYear()} {site.name}. {t.footerCredit}.
      </p>
    </footer>
  )
}
