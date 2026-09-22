const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const site = {
  name: 'unsleptov',
  city: 'Киев',
  phone: '044 555 2048',
  phoneTel: '+380445552048',
  email: 'hello@unsleptov.com',
  address: ['ул. Тарифная, 18', 'Подол, Киев'],
  lat: 50.4672,
  lng: 30.5168,
  social: {
    instagram: 'https://www.instagram.com/unsleptov',
  },
}

export const images = {
  hall: asset('cafe-hall.png'),
  friends: asset('cafe-friends.png'),
  laptop: asset('cafe-laptop.jpg'),
  door: asset('cafe-door.jpg'),
  tray: asset('cafe-tray.jpg'),
  cups: asset('cafe-cups.png'),
}

export const schedule = [
  { label: 'Пн–Чт', days: [1, 2, 3, 4], open: '08:00', close: '21:00' },
  { label: 'Пт–Сб', days: [5, 6], open: '08:00', close: '22:00' },
  { label: 'Вс', days: [0], open: '09:00', close: '21:00' },
] as const

export const signatures = [
  {
    name: 'Капучино',
    note: 'Плотная пенка, к долгому разговору.',
    price: '80',
  },
  {
    name: 'Фильтр дня',
    note: 'Светлый, пока на стойке это зерно.',
    price: '75',
  },
  {
    name: 'Какао с карамелью',
    note: 'Холодный, со сливками.',
    price: '95',
  },
  {
    name: 'Круассан',
    note: 'С маслом, с утра у витрины.',
    price: '65',
  },
] as const

export const menu = [
  {
    id: 'coffee',
    title: 'Кофе',
    items: [
      { name: 'Эспрессо', note: 'Короткий', price: '55' },
      { name: 'Американо', note: 'Длинный', price: '65' },
      { name: 'Капучино', note: 'Молоко и пенка', price: '80' },
      { name: 'Флэт уайт', note: 'Плотнее капучино', price: '85' },
      { name: 'Фильтр дня', note: 'Зерно этой недели', price: '75' },
      { name: 'Раф', note: 'Сливки и ваниль', price: '90' },
    ],
  },
  {
    id: 'other',
    title: 'Не кофе',
    items: [
      { name: 'Какао с карамелью', note: 'Холодный, со сливками', price: '95' },
      { name: 'Какао', note: 'Горячий', price: '70' },
      { name: 'Чай', note: 'Чёрный или травяной', price: '60' },
      { name: 'Лимонад', note: 'Домашний', price: '70' },
    ],
  },
  {
    id: 'food',
    title: 'К столу',
    items: [
      { name: 'Круассан', note: 'С маслом', price: '65' },
      { name: 'Миндальный круассан', note: 'С витрины', price: '85' },
      { name: 'Песочное печенье', note: 'К фильтру', price: '40' },
    ],
  },
] as const

export const visitNotes = [
  'Столы на двоих и на компанию',
  'С ноутбуком можно, розетка у окна',
  'Wi‑Fi спрашивают у стойки',
  'Выпечка с открытия',
  'Бронь не нужна',
] as const

const pad = 0.012
export const mapEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${site.lng - pad}%2C${site.lat - pad}%2C${site.lng + pad}%2C${site.lat + pad}&layer=mapnik&marker=${site.lat}%2C${site.lng}`

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('ул. Тарифная 18, Киев')}`

export const copy = {
  pageTitle: 'unsleptov — кофейня в Киеве',
  skip: 'К содержанию',
  kicker: 'Кофейня в Киеве',
  lead: 'Зайти с друзьями, взять кофе и посидеть.',
  aside: 'Стол у окна остаётся для тех, кто открыл ноутбук.',
  cta: 'Как добраться',
  nav: {
    place: 'Зал',
    drinks: 'Напитки',
    menu: 'Меню',
    visit: 'Найти',
    route: 'Маршрут',
  },
  factsSockets: 'Розетки у окна',
  placeKicker: 'Зал',
  placeTitle: 'Зайти и остаться',
  placeBody:
    'Небольшой зал со стойкой и витриной. Днём сюда заходят компанией, ближе к вечеру кто-то остаётся с ноутбуком. Выпечка стоит с утра, зерно меняется по сезону.',
  friendsCaption: 'Здесь нормально сидеть вчетвером и не спешить.',
  laptopCaption: 'У окна есть розетка. Чашка рядом не мешает.',
  drinksKicker: 'Напитки',
  drinksTitle: 'Что здесь заказывают',
  cupsCaption: 'Иногда хватает двух чашек.',
  menuKicker: 'Меню',
  menuTitle: 'На стойке',
  menuLead: 'Цены в гривнах. Список короткий: то, что реально стоит у витрины.',
  visitKicker: 'Как найти',
  visitTitle: 'Дверь со стороны улицы',
  visitBody:
    'Стеклянная дверь и растения у входа. Заходите без брони: если вас четверо, удобнее до семи.',
  hoursTitle: 'Часы',
  addressTitle: 'Адрес',
  writeTitle: 'Написать',
  mapTitle: 'Карта',
  mapLink: 'Открыть карту',
  mapNote: 'Адрес, телефон, почта и метка на карте вымышлены: это учебный макет.',
  footerNote:
    'Учебный проект. Название, адрес, телефон и почта вымышлены и не относятся к реальной кофейне.',
}
