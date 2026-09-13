import { useState } from 'react'
import { images } from '../data'
import { useI18n } from '../i18n'

export function GalleryGrid() {
  const { t } = useI18n()
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? images.gallery : images.gallery.slice(0, 3)

  return (
    <section id="gallery" className="section gallery-section">
      <header className="section-head split-title">
        <span>{t.galleryTitle[0]}</span>
        <h2>{t.galleryTitle[1]}</h2>
      </header>
      <div className={expanded ? 'gallery-grid is-full' : 'gallery-grid'}>
        {visible.map((shot) => (
          <figure key={shot.src} className={shot.wide ? 'is-wide' : ''}>
            <img src={shot.src} alt={shot.alt} loading="lazy" />
          </figure>
        ))}
      </div>
      {images.gallery.length > 3 ? (
        <button type="button" className="btn-wide" onClick={() => setExpanded((v) => !v)}>
          {expanded ? t.galleryLess : t.galleryMore}
        </button>
      ) : null}
    </section>
  )
}
