import { site } from '../data'

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="foot-brand">
        <p className="logo">Козачок</p>
        <p>Ресторан на березі Південного Бугу</p>
      </div>
      <p>
        {site.address}
        <br />
        Щодня {site.hours}
      </p>
      <p>
        <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
        <br />
        <a href={site.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
      </p>
      <p className="foot-copy">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  )
}
