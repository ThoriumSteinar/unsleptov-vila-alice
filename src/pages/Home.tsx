import { dailyMenu, images, locales, services, site } from '../data'
import { useI18n } from '../i18n'
import { openStatus } from '../lib/hours'
import { BookingCard } from '../components/BookingCard'
import { ContactForm } from '../components/ContactForm'
import { GalleryGrid } from '../components/GalleryGrid'

export function Home() {
  const { lang, t } = useI18n()
  const status = openStatus(new Date(), lang)
  const todayLabel = new Date().toLocaleDateString(locales[lang], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const menuItems = dailyMenu.map((item) =>
    item.name === 'Sobremesa do dia' ? { ...item, name: t.dailyDessert } : item,
  )

  return (
    <>
      <section id="top" className="hero">
        <img className="hero-photo" src={images.hero} alt={site.name} />
        <div className="hero-inner">
          <h1>{site.name}</h1>
          <p className="hero-tag">{t.tagline}</p>
          <p className="hero-status">
            {status.open
              ? t.heroOpen
              : t.heroClosed(status.dateLabel, status.hoursLabel)}
          </p>
          <a className="hero-cta" href="#booking">
            {t.nav.book}
          </a>
        </div>
      </section>

      <section id="menu" className="section menu-section">
        <header className="section-head split-title">
          <span>{t.menuTitle[0]}</span>
          <h2>{t.menuTitle[1]}</h2>
        </header>
        <a className="menu-download" href={site.menuPdf}>
          <span>{t.menuBtn}</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section id="about" className="section about-section">
        <h2 className="section-plain-title">{t.aboutTitle}</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lead">{site.name}</p>
            <p className="about-sub">{t.aboutLead}</p>
            {t.aboutBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <img src={images.about1} alt="" loading="lazy" />
        </div>
        <div className="about-grid is-reverse">
          <img src={images.about2} alt="" loading="lazy" />
          <div className="daily-menu">
            <h3>{t.dailyMenu}</h3>
            <p className="daily-date">{todayLabel}</p>
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.price} €</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="hours" className="section hours-section">
        <h2>{t.hoursTitle}</h2>
        <ul className="hours-list">
          {t.hoursRows.map((row) => (
            <li key={row.day}>
              <strong>{row.day}</strong>
              <span>{row.time}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="payment" className="section payment-section">
        <h2>{t.paymentTitle}</h2>
        <ul className="payment-list">
          {t.payments.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <GalleryGrid />

      <section id="services" className="section services-section">
        <img className="services-bg" src={images.hero} alt="" aria-hidden="true" />
        <div className="services-inner">
          <h2>{t.servicesTitle}</h2>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <span className="service-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <span>{t.serviceLabels[s.id]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>{t.contactTitle}</h2>
        <div className="contact-cards">
          <article>
            <span className="contact-icon" aria-hidden="true">
              📍
            </span>
            <h3>{t.contactFind}</h3>
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
          <article>
            <span className="contact-icon" aria-hidden="true">
              ✉
            </span>
            <h3>{t.contactWrite}</h3>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </article>
          <article>
            <span className="contact-icon" aria-hidden="true">
              📞
            </span>
            <h3>{t.contactCall}</h3>
            <p>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </p>
            <p className="contact-note">{t.contactCallNote}</p>
          </article>
        </div>
        <ContactForm />
      </section>

      <section id="booking" className="section booking-section">
        <img className="booking-bg" src={images.hero} alt="" aria-hidden="true" />
        <div className="booking-inner">
          <h2>{t.bookingTitle}</h2>
          <BookingCard />
          <p className="booking-phone">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            <span>{t.bookingPhoneNote}</span>
          </p>
        </div>
      </section>
    </>
  )
}
