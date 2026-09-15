import { site } from '../data'
import { IconInstagram, IconTelegram } from './Icons'

export function Social({ className = 'social' }: { className?: string }) {
  return (
    <div className={className}>
      <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <IconInstagram />
      </a>
      <a href={site.social.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
        <IconTelegram />
      </a>
    </div>
  )
}
