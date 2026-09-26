import { advantages, images, mapEmbed, mapLink, services, site } from '../data'
import { useI18n } from '../i18n'
import { Social } from '../components/Social'

export function Home() {
  const { t } = useI18n()

  return (
    <>
      <section id="top" className="hero">
        <img className="hero-bg" src={images.hero} alt="" fetchPriority="high" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <h1>{t.heroTitle}</h1>
          <p className="hero-lead">{t.heroLead}</p>
          <div className="hero-buttons">
            <a className="btn-orange" href="#services">
              {t.heroCtaServices}
            </a>
            <a className="btn-orange btn-wide" href={`tel:${site.phoneTel}`}>
              {t.heroCtaCall}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section split">
        <figure className="split-media split-media-about">
          <img src={images.about} alt="Будиночок серед зелені на території відпочинку" />
        </figure>
        <div className="split-copy">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutBody}</p>
        </div>
      </section>

      <section id="services" className="section section-center">
        <h2>{t.servicesTitle}</h2>
        <p className="section-sub">{t.servicesLead}</p>
        <div className="cards">
          {services.map((item) => (
            <article key={item.id} className="card">
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="btn-orange" href={item.href}>
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="advantages" className="section section-center">
        <h2 className="advantages-heading">{t.advantagesTitle}</h2>
        {advantages.map((row) => (
          <div
            key={row.id}
            className={row.imageFirst ? 'split split-reverse split-tight' : 'split split-tight'}
          >
            {row.imageFirst ? (
              <>
                <figure className="split-media">
                  <img src={row.image} alt="" />
                </figure>
                <div className="split-copy">
                  <h3 className="caps-title">{row.title}</h3>
                  <p>{row.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="split-copy">
                  <h3 className="caps-title">{row.title}</h3>
                  <p>{row.text}</p>
                </div>
                <figure className="split-media">
                  <img src={row.image} alt="" />
                </figure>
              </>
            )}
          </div>
        ))}
      </section>

      <section id="restaurant" className="section split">
        <div className="split-copy">
          <h3 className="caps-title">{t.restaurantTitle}</h3>
          <p>{t.restaurantBody}</p>
        </div>
        <figure className="split-media">
          <img src={images.restaurant} alt="Стіл у ресторані" />
        </figure>
      </section>

      <section id="menu" className="section section-center menu-block">
        <h2>{t.menuTitle}</h2>
        <p className="section-sub">{t.menuLead}</p>
        <ul className="menu-list">
          {t.menuItems.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span>
              <span>{item.price} ₴</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="rules" className="section rules">
        <div className="rules-inner">
          <h2>{t.rulesTitle}</h2>
          <p>{t.rulesBody}</p>
        </div>
      </section>

      <section id="contacts" className="contacts">
        <div className="contacts-map">
          <iframe title={t.contactsTitle} src={mapEmbed} loading="lazy" />
          <a className="map-link" href={mapLink} target="_blank" rel="noreferrer">
            Відкрити на карті
          </a>
        </div>
        <div className="contacts-panel">
          <h2>{t.contactsTitle}</h2>
          <p>
            {t.contactsHoursTerritory} <strong>{site.territoryHours}</strong>
          </p>
          <p>
            {t.contactsHoursRestaurant} <strong>{site.restaurantHours}</strong>
          </p>
          <p>
            {t.contactsAddress} {site.address.join(', ')}
          </p>
          <p>
            <a className="accent" href={`tel:${site.phoneTel}`}>
              {site.phone}
            </a>
          </p>
          <p>
            <a className="accent" href={site.social.instagram} target="_blank" rel="noreferrer">
              @unsleptov
            </a>
          </p>
          <p>{t.contactsWait}</p>
          <Social variant="circles" />
          <p className="contacts-demo">{t.footerNote}</p>
        </div>
      </section>
    </>
  )
}
