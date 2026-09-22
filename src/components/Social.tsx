import { site } from '../data'
import { IconInstagram } from './Icons'

export function Social({ className = 'social' }: { className?: string }) {
  return (
    <div className={className}>
      <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <IconInstagram />
      </a>
    </div>
  )
}
