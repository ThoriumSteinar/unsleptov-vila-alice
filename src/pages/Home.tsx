import { useState } from 'react'
import { images, mapEmbed, menu, site } from '../data'

const features = [
  {
    title: 'Гриль',
    text: 'Шашлик зі свинячої шиї, реберця, скумбрія, мюнхенські ковбаски. До м’яса — аджика, часник і зелень.',
    image: images.shashlik,
    alt: 'Шашлик з цибулею, кропом і аджикою',
  },
  {
    title: 'Зала',
    text: 'Зруб, кам’яне вогнище і довгі столи. Увечері тут накривають і тиху вечерю, і великий стіл на свято.',
    image: images.feast,
    alt: 'Накритий стіл біля каміна в дерев’яній залі',
  },
  {
    title: 'Вода',
    text: 'Тераса виходить на Південний Буг. У спеку біля річки відчутно свіжіше, ніж у місті.',
    image: images.sunset,
    alt: 'Захід сонця над річкою біля ресторану',
  },
]

export function Home() {
  const [menuId, setMenuId] = useState<(typeof menu)[number]['id']>('grill')
  const active = menu.find((group) => group.id === menuId) ?? menu[0]

  return (
    <>
      <section id="top" className="hero">
        <img className="hero-bg" src={images.hall} alt="" fetchPriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Миколаїв · берег Бугу</p>
          <h1>Козачок</h1>
          <p className="hero-lead">Дерев’яна зала, гриль і тераса над водою.</p>
          <div className="hero-actions">
            <a className="btn btn-ember" href="#menu">
              Меню
            </a>
            <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="Коротко про заклад">
        <p>
          <span>Години</span>
          {site.hoursNote} {site.hours}
        </p>
        <p>
          <span>Адреса</span>
          вул. Лазурна, 4
        </p>
        <p>
          <span>Google</span>
          {site.rating}
        </p>
        <p>
          <span>За відгуками</span>
          600–800 ₴
        </p>
      </section>

      <section id="about" className="section about">
        <figure>
          <img src={images.exterior} alt="Дерев’яний зруб ресторану Козачок за світлим парканом" />
        </figure>
        <div className="about-copy">
          <p className="eyebrow">Зала</p>
          <h2>Колиба на Лазурній</h2>
          <p>
            Козачок стоїть біля самої води: зруб під темним дахом, стежка вздовж паркану і зала,
            де горить камін. Столи накривають синьою доріжкою або червоним раннером — як накрили
            того вечора.
          </p>
          <p>
            Сюди приходять на шашлик, на довгу вечерю і на свято. Порції щедрі, зала вміщує великий
            стіл. З собакою можна.
          </p>
        </div>
      </section>

      <section id="kitchen" className="section">
        <div className="section-intro">
          <p className="eyebrow">Кухня</p>
          <h2>Вогонь, дошки і річка поруч</h2>
        </div>
        <div className="feature-list">
          {features.map((item) => (
            <article key={item.title} className="feature">
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" aria-label="Фото закладу">
        <figure className="gallery-wide">
          <img src={images.hearth} alt="Камін у кам’яній стіні, свічки на полиці" />
        </figure>
        <figure>
          <img src={images.fish} alt="Скумбрія гриль з лимоном і соусом" />
        </figure>
        <figure>
          <img src={images.steak} alt="Стейк на грилі з аджикою" />
        </figure>
        <figure>
          <img src={images.board} alt="М’ясна дошка на дерев’яному крузі" />
        </figure>
        <figure>
          <img src={images.salad} alt="Салат із моцарелою, томатами і песто" />
        </figure>
        <figure className="gallery-wide">
          <img src={images.chan} alt="Дерев’яний чан на території, пара над водою" />
        </figure>
      </section>

      <section id="menu" className="menu-board">
        <div className="menu-head">
          <p className="eyebrow eyebrow-light">Меню</p>
          <h2>З картки в залі</h2>
          <p className="menu-note">
            Ціни з друкованого меню. Якщо позицію змінили — підкаже офіціант. Соуси до грилю є
            окремо: часниковий, домашня аджика, тартар.
          </p>
        </div>
        <div className="menu-tabs" role="tablist" aria-label="Розділи меню">
          {menu.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`tab-${group.id}`}
              aria-selected={group.id === active.id}
              aria-controls={`panel-${group.id}`}
              className={group.id === active.id ? 'is-on' : undefined}
              onClick={() => setMenuId(group.id)}
            >
              {group.title}
            </button>
          ))}
        </div>
        <ul
          className="menu-list"
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
        >
          {active.items.map((item) => (
            <li key={item.name}>
              <div>
                <p className="dish">{item.name}</p>
                <p className="dish-note">{item.note}</p>
              </div>
              <p className="price">
                {item.price}
                <span> ₴</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="river" className="river">
        <img src={images.sunset} alt="" />
        <div className="river-copy">
          <p className="eyebrow eyebrow-light">Вода</p>
          <h2>Стіл над Бугом</h2>
          <p>
            Тераса і берег — частина закладу, не окрема локація. Вдень тут світло з води, увечері
            небо сідає просто навпроти зали.
          </p>
        </div>
      </section>

      <section className="section feast-note">
        <figure>
          <img src={images.loaf} alt="Святковий коровай на столі в залі" />
        </figure>
        <div>
          <p className="eyebrow">Свята</p>
          <h2>Великий стіл домовляють заздалегідь</h2>
          <p>
            Дні народження й довгі застілля накривають у залі. Дату і кількість гостей краще
            назвати по телефону — кухня збереже місце біля каміна або на терасі.
          </p>
          <p>
            На території є дерев’яний чан. Коли його топлять, скажуть на місці.
          </p>
          <a className="btn btn-ember" href={`tel:${site.phoneTel}`}>
            Зателефонувати
          </a>
        </div>
      </section>

      <section id="contacts" className="section contacts">
        <div>
          <p className="eyebrow">Контакти</p>
          <h2>Як доїхати</h2>
          <dl>
            <div>
              <dt>Адреса</dt>
              <dd>{site.address}</dd>
            </div>
            <div>
              <dt>Години</dt>
              <dd>
                {site.hoursNote} {site.hours}
              </dd>
            </div>
            <div>
              <dt>Телефон</dt>
              <dd>
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Соцмережа</dt>
              <dd>
                <a href={site.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
          <a className="btn btn-navy" href={site.maps} target="_blank" rel="noreferrer">
            Відкрити в Google Картах
          </a>
        </div>
        <iframe
          title="Козачок на карті, вулиця Лазурна 4, Миколаїв"
          src={mapEmbed}
          loading="lazy"
        />
      </section>
    </>
  )
}
