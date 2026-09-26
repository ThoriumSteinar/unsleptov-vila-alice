const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const site = {
  name: 'Unsleptov',
  shortName: 'UNSLEPTOV',
  city: 'Гостиномир',
  phone: '044 555 2048',
  phoneTel: '+380445552048',
  email: 'hello@unsleptov.com',
  address: ['вул. Берегова, 18', 'м. Гостиномир'],
  territoryHours: '10:00–22:00',
  restaurantHours: '11:00–21:00',
  lat: 49.0139,
  lng: 33.6952,
  social: {
    instagram: 'https://www.instagram.com/unsleptov',
    facebook: 'https://www.facebook.com/unsleptov',
  },
}

export const images = {
  hero: asset('hero-pool.jpg'),
  about: asset('about-cottage.jpg'),
  serviceHouse: asset('room-living.png'),
  serviceGazebo: asset('rest-bench.jpg'),
  serviceExtra: asset('park-pool-side.jpg'),
  serviceRestaurant: asset('food-plate.jpg'),
  advNature: asset('park-garden.jpg'),
  advPlayground: asset('park-pool.jpg'),
  advBeach: asset('beach-lounge.jpg'),
  restaurant: asset('cafe-hall.png'),
}

export const services = [
  {
    id: 'houses',
    title: 'ОРЕНДА БУДИНОЧКІВ',
    text: 'Оренда будиночків для комфортного перебування на природі.',
    cta: 'Замовити будиночок',
    href: '#contacts',
    image: images.serviceHouse,
  },
  {
    id: 'gazebo',
    title: 'ОРЕНДА АЛЬТАНОК',
    text: 'Оренда альтанок для приємного відпочинку під затишним дахом.',
    cta: 'Замовити альтанку',
    href: '#contacts',
    image: images.serviceGazebo,
  },
  {
    id: 'extra',
    title: 'СУПУТНІ ПОСЛУГИ',
    text: 'Перелік додаткових послуг для вашого зручного відпочинку.',
    cta: 'Перелік послуг',
    href: '#services',
    image: images.serviceExtra,
  },
  {
    id: 'restaurant',
    title: 'РЕСТОРАН UNSLEPTOV',
    text: 'Ресторан зі смачними стравами для задоволення гастрономічних бажань.',
    cta: 'Переглянути меню',
    href: '#menu',
    image: images.serviceRestaurant,
  },
] as const

export const advantages = [
  {
    id: 'nature',
    title: 'ВІДПОЧИНОК НА ПРИРОДІ — ЗАПАС ЕНЕРГІЇ ТА ГАРМОНІЇ',
    text: 'Насолоджуйтесь природним спокоєм на зеленій території. Альтанки та будиночки — для пікніків і відпочинку в колі близьких.',
    image: images.advNature,
    imageFirst: false,
  },
  {
    id: 'playground',
    title: 'ДИТЯЧИЙ МАЙДАНЧИК — РАДІСТЬ ДЛЯ ДІТЕЙ',
    text: 'На території сімейного відпочинку Unsleptov ми приділили особливу увагу маленьким гостям: безпечний майданчик, де діти граються, а батьки відпочивають поруч.',
    image: images.advPlayground,
    imageFirst: true,
  },
  {
    id: 'beach',
    title: 'ПЛЯЖ ТА ЗОНА ВІДПОЧИНКУ БІЛЯ ВОДИ',
    text: 'Шезлонги, тінь від дерев і простір біля води — щоб провести день без метушні. Зимою частина зон працює в обмеженому режимі.',
    image: images.advBeach,
    imageFirst: false,
  },
] as const

const pad = 0.012
export const mapEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${site.lng - pad}%2C${site.lat - pad}%2C${site.lng + pad}%2C${site.lat + pad}&layer=mapnik&marker=${site.lat}%2C${site.lng}`

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.address.join(', ')} (демо)`)}`

export const copy = {
  pageTitle: 'Unsleptov — територія сімейного відпочинку',
  skip: 'До змісту',
  nav: {
    home: 'Головна',
    rules: 'Правила',
    order: 'Замовити',
    contacts: 'Контакти',
    menu: 'Меню',
    orderHouse: 'Будиночок',
    orderGazebo: 'Альтанку',
  },
  heroTitle: 'Територія сімейного відпочинку «Unsleptov»',
  heroLead:
    'Чудове місце відпочинку для всієї родини на березі річки Струмок у місті Гостиномир',
  heroCtaServices: 'Перелік послуг',
  heroCtaCall: 'Зателефонувати та зробити замовлення',
  aboutTitle: 'Про нас',
  aboutBody:
    'Територія сімейного відпочинку Unsleptov розташована в м. Гостиномир на березі річки Струмок. Тут можна орендувати будиночки або альтанки для святкувань, відпочити на пляжі з шезлонгами, дати дітям погратися на майданчику та пообідати в ресторані на території. Номерів готелю немає — лише денний відпочинок; взимку частина будиночків опалюється.',
  servicesTitle: 'Наші послуги',
  servicesLead: 'Перелік послуг на території сімейного відпочинку «Unsleptov»',
  advantagesTitle: 'Переваги відпочинку у нас',
  restaurantTitle: 'РЕСТОРАН НА ТЕРИТОРІЇ БАЗИ',
  restaurantBody:
    'На території сімейного відпочинку Unsleptov працює ресторан — для банкетів або невимушеної трапези на природі. Меню — демонстраційне, без прив’язки до реального закладу.',
  menuTitle: 'Меню (демо)',
  menuLead: 'Уривок меню для портфоліо. Ціни умовні.',
  menuItems: [
    { name: 'Борщ з пампушками', price: '120' },
    { name: 'М’ясо на мангалі', price: '280' },
    { name: 'Салат сезонний', price: '95' },
    { name: 'Компот домашній', price: '45' },
  ],
  contactsTitle: 'Контакти',
  contactsHoursTerritory: 'Нагадуємо, що час роботи території сімейного відпочинку:',
  contactsHoursRestaurant: 'Ресторан:',
  contactsAddress: 'Адреса:',
  contactsWait: 'Чекаємо Вас у гості!',
  rulesTitle: 'Правила відвідування',
  rulesBody:
    'Дбайте про чистоту на території, не палить у недозволених місцях, дотримуйтесь тиші після 22:00. Домашніх тварин — ли за попередньою домовленістю. Усі контакти та адреса нижче — вигадані для навчального макету.',
  footerNote:
    'Портфоліо unsleptov. Назва, адреса, телефон, соцмережі та карта — вигадані; сайт не представляє реальний заклад.',
  photoCredit: 'Фото: Unsplash, Pexels (ліцензії для демо-макету).',
  footerRights: 'All Rights Reserved',
}
