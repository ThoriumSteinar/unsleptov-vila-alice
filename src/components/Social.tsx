import { site } from '../data'
import { IconFacebook, IconInstagram, IconPhone } from './Icons'

type Props = {
  className?: string
  variant?: 'inline' | 'circles'
}

export function Social({ className = 'social', variant = 'inline' }: Props) {
  if (variant === 'circles') {
    return (
      <div className="social-circles">
        <a
          className="social-fb"
          href={site.social.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <IconFacebook />
        </a>
        <a
          className="social-ig"
          href={site.social.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <IconInstagram />
        </a>
        <a className="social-call" href={`tel:${site.phoneTel}`} aria-label="Телефон">
          <IconPhone />
        </a>
      </div>
    )
  }

  return (
    <div className={className}>
      <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <IconInstagram />
      </a>
    </div>
  )
}
