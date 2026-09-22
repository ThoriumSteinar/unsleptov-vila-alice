import { site } from '../data'
import { useI18n } from '../i18n'
import { Social } from './Social'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="foot">
      <div className="foot-inner">
        <a className="foot-brand" href="#top">
          {site.name}
        </a>
        <Social />
        <p>
          {site.address.join(', ')}
          <br />
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
          {' · '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="foot-note">{t.footerNote}</p>
        <p className="foot-copy">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
