import { site } from '../data'
import { IconFacebook, IconInstagram } from './Icons'

export function Social({ className = 'social' }: { className?: string }) {
  return (
    <div className={className}>
      <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
        <IconFacebook />
      </a>
      <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <IconInstagram />
      </a>
    </div>
  )
}
