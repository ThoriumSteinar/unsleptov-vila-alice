import { amenities, images, mapEmbed, mapLink, site } from '../data'
import { useI18n } from '../i18n'
import { BookingCard } from '../components/BookingCard'
import { ContactForm } from '../components/ContactForm'

function tel(n: string) {
  return `+38${n.replace(/\s/g, '')}`
}

export function Home() {
  const { t } = useI18n()
  const address = site.address

  return (
    <>
      <section id="top" className="hero">
        <img className="hero-photo" src={images.hero} alt={site.name} />
        <div className="hero-inner">
          <p className="hero-kicker">{site.short}</p>
          <h1>{site.name}</h1>
          <p className="hero-tag">{t.tagline}</p>
          <p className="hero-status">{t.heroNote}</p>
          <a className="hero-cta" href="#booking">
            {t.nav.book}
          </a>
        </div>
      </section>

      <section id="rooms" className="section rooms-section">
        <header className="section-head split-title">
          <span>{t.roomsLead}</span>
          <h2>{t.roomsTitle}</h2>
        </header>
        <p className="section-intro">{t.roomsName}</p>
        <p className="section-intro is-muted">{t.roomsBody}</p>
        <div className="room-grid">
          <figure className="is-wide">
            <img src={images.roomBed} alt={t.roomCaptions.bed} />
            <figcaption>{t.roomCaptions.bed}</figcaption>
          </figure>
          <figure>
            <img src={images.roomLiving} alt={t.roomCaptions.living} />
            <figcaption>{t.roomCaptions.living}</figcaption>
          </figure>
          <figure>
            <img src={images.roomBath} alt={t.roomCaptions.bath} />
            <figcaption>{t.roomCaptions.bath}</figcaption>
          </figure>
        </div>
      </section>

      <section id="park" className="section park-section">
        <header className="section-head split-title">
          <span>{t.parkLead}</span>
          <h2>{t.parkTitle}</h2>
        </header>
        <div className="video-frame">
          <video
            className="park-video"
            src={images.sunset}
            poster={images.parkPool}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="park-grid">
          <img src={images.parkPool} alt="" />
          <img src={images.parkGarden} alt="" />
          <img src={images.parkPoolSide} alt="" />
          <img src={images.parkCastle} alt="" />
        </div>
      </section>

      <section id="restaurant" className="section about-section">
        <h2 className="section-plain-title">{t.restaurantTitle}</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lead">{t.restaurantTitle}</p>
            <p className="about-sub">{t.restaurantLead}</p>
            <p>{t.restaurantHours}</p>
            <p>
              {t.contactRestaurant}:{' '}
              <a href={`tel:${tel(site.phoneRestaurant)}`}>{site.phoneRestaurant}</a>
            </p>
          </div>
          <img src={images.foodPlate} alt="" />
        </div>
      </section>

      <section id="rest" className="section services-section">
        <img className="services-bg" src={images.restBench} alt="" aria-hidden="true" />
        <div className="services-inner">
          <h2>{t.restTitle}</h2>
          <p className="services-lead">{t.restLead}</p>
          <ul>
            {amenities.map((s) => (
              <li key={s.id}>
                <span className="service-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <span>{t.amenityLabels[s.id]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="events" className="section events-section">
        <header className="section-head split-title">
          <span>{t.eventsLead}</span>
          <h2>{t.eventsTitle}</h2>
        </header>
        <div className="events-grid">
          <img src={images.eventsTower} alt="" />
          <img src={images.eventsShots} alt="" />
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>{t.contactTitle}</h2>
        <div className="arrival-row">
          <img src={images.arrivalGates} alt={t.contactFind} />
          <img src={images.arrivalDrive} alt="" />
        </div>
        <div className="contact-cards">
          <article>
            <span className="contact-icon" aria-hidden="true">
              📍
            </span>
            <h3>{t.contactFind}</h3>
            {address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="contact-note">{site.plusCode}</p>
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
              {t.contactHotel}:{' '}
              <a href={`tel:${tel(site.phoneHotel)}`}>{site.phoneHotel}</a>
            </p>
            <p>
              {t.contactRestaurant}:{' '}
              <a href={`tel:${tel(site.phoneRestaurant)}`}>{site.phoneRestaurant}</a>
            </p>
          </article>
        </div>
        <div className="map-wrap">
          <iframe title={t.contactFind} src={mapEmbed} loading="lazy" />
          <a className="map-link" href={mapLink} target="_blank" rel="noreferrer">
            {t.contactMap}
          </a>
        </div>
        <ContactForm />
      </section>

      <section id="booking" className="section booking-section">
        <img className="booking-bg" src={images.hero} alt="" aria-hidden="true" />
        <div className="booking-inner">
          <h2>{t.bookingTitle}</h2>
          <BookingCard />
          <p className="booking-phone">
            <a href={`tel:${tel(site.phoneHotel)}`}>{site.phoneHotel}</a>
            <span>{t.bookingPhoneNote}</span>
          </p>
        </div>
      </section>
    </>
  )
}
