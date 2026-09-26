import { useI18n } from '../i18n'
import { IconPot } from './Icons'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="site-foot">
      <IconPot className="foot-logo" />
      <p className="foot-copy">
        © {new Date().getFullYear()} {t.footerRights}
      </p>
      <p className="foot-demo">{t.footerNote}</p>
      <p className="foot-photo">{t.photoCredit}</p>
    </footer>
  )
}
