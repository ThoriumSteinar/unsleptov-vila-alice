import { images, mapEmbed, mapLink, menu, schedule, signatures, site, visitNotes } from '../data'
import { useI18n } from '../i18n'
import { cafeStatus } from '../lib/hours'

export function Home() {
  const { t } = useI18n()
  const status = cafeStatus()

  return (
    <>
      <section id="top" className="hero">
        <img className="hero-photo" src={images.hall} alt="Зал: деревянная стойка, витрина и тёплые лампы" fetchPriority="high" />
        <div className="hero-copy">
          <p className="hero-kicker">{t.kicker}</p>
          <h1>{site.name}</h1>
          <p className="hero-lead">{t.lead}</p>
          <p className="hero-aside">{t.aside}</p>
          <div className="hero-actions">
            <p className={status.open ? 'status is-open' : 'status'}>
              <span className="status-dot" aria-hidden="true" />
              {status.text}
            </p>
            <a className="hero-cta" href="#visit">
              {t.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="Сейчас">
        <p>{status.text}</p>
        <p>{site.address.join(', ')}</p>
        <p>{t.factsSockets}</p>
      </section>

      <section id="place" className="section">
        <div className="section-inner place-grid">
          <div>
            <p className="kicker">{t.placeKicker}</p>
            <h2>{t.placeTitle}</h2>
            <p className="prose">{t.placeBody}</p>
          </div>
          <figure className="frame is-tall">
            <img src={images.friends} alt="Компания за столом с чашками кофе" />
            <figcaption>{t.friendsCaption}</figcaption>
          </figure>
        </div>
      </section>

      <figure className="laptop-band">
        <img src={images.laptop} alt="Ноутбук и чашка у окна" />
        <figcaption>{t.laptopCaption}</figcaption>
      </figure>

      <section id="drinks" className="section">
        <div className="section-inner drinks-grid">
          <figure className="frame">
            <img src={images.tray} alt="Круассаны, холодный напиток и два капучино" />
          </figure>
          <div>
            <p className="kicker">{t.drinksKicker}</p>
            <h2>{t.drinksTitle}</h2>
            <ol className="signatures">
              {signatures.map((item) => (
                <li key={item.name}>
                  <span className="sig-name">{item.name}</span>
                  <span className="sig-note">{item.note}</span>
                  <span className="sig-price">{item.price} ₴</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <figure className="moment">
        <img src={images.cups} alt="Две чашки капучино над столом" />
        <figcaption>{t.cupsCaption}</figcaption>
      </figure>

      <section id="menu" className="section">
        <div className="section-inner">
          <p className="kicker">{t.menuKicker}</p>
          <h2>{t.menuTitle}</h2>
          <p className="prose menu-lead">{t.menuLead}</p>
          <div className="menu-grid">
            {menu.map((group) => (
              <article key={group.id}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>
                        <strong>{item.name}</strong>
                        <em>{item.note}</em>
                      </span>
                      <span className="price">{item.price} ₴</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="section visit">
        <div className="section-inner visit-grid">
          <figure className="frame is-tall">
            <img src={images.door} alt="Вход в кофейню с улицы" />
          </figure>
          <div>
            <p className="kicker">{t.visitKicker}</p>
            <h2>{t.visitTitle}</h2>
            <p className="prose">{t.visitBody}</p>
            <div className="visit-cards">
              <article>
                <h3>{t.hoursTitle}</h3>
                <ul className="hours">
                  {schedule.map((row) => (
                    <li key={row.label}>
                      <span>{row.label}</span>
                      <span>
                        {row.open}–{row.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>{t.addressTitle}</h3>
                {site.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </article>
              <article>
                <h3>{t.writeTitle}</h3>
                <p>
                  <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </article>
            </div>
            <ul className="notes">
              {visitNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-inner map-block">
          <h3>{t.mapTitle}</h3>
          <div className="map-wrap">
            <iframe title={t.mapTitle} src={mapEmbed} loading="lazy" />
          </div>
          <p className="map-actions">
            <a href={mapLink} target="_blank" rel="noreferrer">
              {t.mapLink}
            </a>
          </p>
          <p className="map-note">{t.mapNote}</p>
        </div>
      </section>
    </>
  )
}
