const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`
const video = (file: string) => `${import.meta.env.BASE_URL}video/${file}`

export const site = {
  name: "Family's Star. Park Hotel",
  short: "Family's Star",
  phoneHotel: '067 405 45 45',
  phoneRestaurant: '097 202 45 45',
  phone: '067 405 45 45',
  email: 'galina.taraban@gmail.com',
  website: 'https://familys.com.ua',
  address: ['вул. Гайдамацька, 28А', 'смт Новомиколаївка', 'Верхньодніпровськ, 51600'],
  plusCode: 'J9G9+Q5',
  lat: 48.6393973,
  lng: 34.3679922,
  social: {
    instagram: 'https://www.instagram.com/familystar.vdn/',
    telegram: 'https://t.me/familysstar_bot',
  },
}

export const images = {
  hero: asset('hero.jpg'),
  roomBed: asset('room-bed.jpg'),
  roomLiving: asset('room-living.png'),
  roomBath: asset('room-bath.png'),
  parkPool: asset('park-pool.jpg'),
  parkGarden: asset('park-garden.jpg'),
  parkPoolSide: asset('park-pool-side.jpg'),
  parkCastle: asset('park-castle.jpg'),
  restBench: asset('rest-bench.jpg'),
  foodPlate: asset('food-plate.jpg'),
  eventsTower: asset('events-tower.jpg'),
  eventsShots: asset('events-shots.jpg'),
  arrivalGates: asset('arrival-gates.jpg'),
  arrivalDrive: asset('arrival-drive.jpg'),
  sunset: video('sunset-pool.mp4'),
}

export const mapEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${site.lng - 0.04}%2C${site.lat - 0.025}%2C${site.lng + 0.04}%2C${site.lat + 0.025}&layer=mapnik&marker=${site.lat}%2C${site.lng}`

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${site.lat},${site.lng}`

export const locale = 'uk-UA'

export const amenities = [
  { id: 'pool', icon: '◇' },
  { id: 'park', icon: '❀' },
  { id: 'lake', icon: '≈' },
  { id: 'restaurant', icon: '◉' },
  { id: 'events', icon: '✦' },
  { id: 'family', icon: '○' },
  { id: 'parking', icon: 'P' },
  { id: 'wifi', icon: '📶' },
] as const

type BookingCopy = {
  checkIn: string
  nights: string
  guestsLabel: string
  next: string
  back: string
  confirm: string
  fullName: string
  email: string
  phone: string
  notes: string
  held: string
  seeYou: string
  bookAnother: string
  nightsCount: (n: number) => string
  guestFallback: string
  weekdays: string[]
  prevMonth: string
  nextMonth: string
  done: (p: {
    name: string
    guests: string
    party: number
    date: string
    nights: string
    phone: string
  }) => string
}

export type Copy = {
  pageTitle: string
  skip: string
  tagline: string
  heroNote: string
  nav: {
    rooms: string
    park: string
    restaurant: string
    rest: string
    events: string
    contact: string
    book: string
  }
  roomsTitle: string
  roomsLead: string
  roomsName: string
  roomsBody: string
  roomCaptions: { bed: string; living: string; bath: string }
  parkTitle: string
  parkLead: string
  restaurantTitle: string
  restaurantLead: string
  restaurantHours: string
  restTitle: string
  restLead: string
  amenityLabels: Record<(typeof amenities)[number]['id'], string>
  eventsTitle: string
  eventsLead: string
  contactTitle: string
  contactFind: string
  contactWrite: string
  contactCall: string
  contactHotel: string
  contactRestaurant: string
  contactMap: string
  formTitle: string
  formName: string
  formEmail: string
  formPhone: string
  formSubject: string
  formMessage: string
  formSend: string
  formSent: string
  bookingTitle: string
  bookingPhoneNote: string
  booking: BookingCopy
  footerHome: string
  footerCredit: string
  guests: (n: number) => string
}

const booking: BookingCopy = {
  checkIn: 'Заїзд',
  nights: 'Ночей',
  guestsLabel: 'Гостей',
  next: 'Далі',
  back: '← Назад',
  confirm: 'Надіслати заявку',
  fullName: "Ім'я",
  email: 'Email',
  phone: 'Телефон',
  notes: 'Побажання',
  held: 'Заявку прийнято',
  seeYou: 'Чекаємо вас на Дніпрі',
  bookAnother: 'Нова заявка',
  nightsCount: (n) => (n === 1 ? '1 ніч' : n < 5 ? `${n} ночі` : `${n} ночей`),
  guestFallback: 'Гість',
  weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
  prevMonth: 'Попередній місяць',
  nextMonth: 'Наступний місяць',
  done: ({ name, party, guests, date, nights, phone }) =>
    `${name}, ${party} ${guests}, заїзд ${date}, ${nights}. Підтвердимо за телефоном ${phone}.`,
}

export const copy: Copy = {
  pageTitle: "Family's Star. Park Hotel",
  skip: 'Перейти до змісту',
  tagline: 'Парк-готель на березі Дніпра',
  heroNote: '60 км від Дніпра · 3 км від Верхньодніпровська',
  nav: {
    rooms: 'Номери',
    park: 'Територія',
    restaurant: 'Ресторан',
    rest: 'Відпочинок',
    events: 'Свята',
    contact: 'Контакти',
    book: 'Бронь',
  },
  roomsTitle: 'Номери',
  roomsLead: 'Сімейний двокімнатний номер',
  roomsName: 'Спальня, вітальня з балконом і власна ванна. Сніданок можна узгодити при бронюванні.',
  roomsBody: 'Вид у сад і до води. Два, троє чи четверо гостей — напишіть, підберемо розміщення.',
  roomCaptions: { bed: 'Спальня', living: 'Вітальня з балконом', bath: 'Ванна кімната' },
  parkTitle: 'Територія',
  parkLead: 'Парк, басейн і захід сонця над водосховищем.',
  restaurantTitle: 'Ресторан',
  restaurantLead: 'Кухня в залі та банкети на терасі біля води.',
  restaurantHours: 'Ресторан: 10:00 – 21:30',
  restTitle: 'Відпочинок',
  restLead: 'Лавка до озера, сад і тиша за містом.',
  amenityLabels: {
    pool: 'Басейн',
    park: 'Парк',
    lake: 'Вид на Дніпро',
    restaurant: 'Ресторан',
    events: 'Свята',
    family: 'Для сімей',
    parking: 'Паркінг',
    wifi: 'Wi-Fi',
  },
  eventsTitle: 'Свята',
  eventsLead: 'Весілля, дні народження, корпоративи на терасі з видом на воду.',
  contactTitle: 'Як нас знайти',
  contactFind: 'Адреса',
  contactWrite: 'Написати',
  contactCall: 'Зателефонувати',
  contactHotel: 'Готель',
  contactRestaurant: 'Ресторан',
  contactMap: 'Відкрити в Google Maps',
  formTitle: 'Напишіть нам',
  formName: "Ім'я",
  formEmail: 'Email',
  formPhone: 'Телефон',
  formSubject: 'Тема',
  formMessage: 'Повідомлення',
  formSend: 'Надіслати',
  formSent: 'Повідомлення надіслано. Ми зателефонуємо.',
  bookingTitle: 'Забронювати номер',
  bookingPhoneNote: 'Або одразу зателефонуйте — так швидше.',
  booking,
  footerHome: 'На початок',
  footerCredit: 'Парк-готель Family’s Star',
  guests: (n) => {
    const mod10 = n % 10
    const mod100 = n % 100
    if (mod10 === 1 && mod100 !== 11) return 'гість'
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'гості'
    return 'гостей'
  },
}
