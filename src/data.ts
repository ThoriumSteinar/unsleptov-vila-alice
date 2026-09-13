export type Lang = 'pt' | 'en' | 'ru'

const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const site = {
  name: 'UNSLEPTOV RESTAURANT & BAR',
  short: 'UNSLEPTOV',
  phone: '0161 555 2048',
  email: 'hello@unsleptov.com',
  address: ['18 Tariff Street,', 'Manchester', 'NQ, M1 2FF'],
  menuPdf: '#',
  social: {
    instagram: 'https://instagram.com/unsleptov',
    facebook: 'https://facebook.com/unsleptov',
  },
}

export const images = {
  hero: asset('hero.jpg'),
  about1: asset('about-1.jpg'),
  about2: asset('about-2.jpg'),
  gallery: [
    { src: asset('food-1.jpg'), alt: 'Bacalhau à Brás', wide: true },
    { src: asset('food-2.jpg'), alt: 'Peixe grelhado' },
    { src: asset('food-3.jpg'), alt: 'Carne na grelha' },
    { src: asset('food-4.jpg'), alt: 'Prato do dia' },
    { src: asset('food-5.jpg'), alt: 'Costeletas' },
  ],
}

export const dailyMenu = [
  { name: 'Sopa Juliana', price: '3.50' },
  { name: 'Bacalhau à Brás', price: '16.00' },
  { name: 'Mutete', price: '18.00' },
  { name: 'UNSLEPTOV ribeye', price: '22.00' },
  { name: 'Sobremesa do dia', price: '4.50' },
]

export const locales: Record<Lang, string> = {
  pt: 'pt-PT',
  en: 'en-GB',
  ru: 'ru-RU',
}

export const services = [
  { id: 'access', icon: '♿' },
  { id: 'ac', icon: '❄' },
  { id: 'outdoor', icon: '🪑' },
  { id: 'events', icon: '🥂' },
  { id: 'smoking', icon: '🚬' },
  { id: 'takeaway', icon: '🥡' },
  { id: 'wifi', icon: '📶' },
] as const

type BookingCopy = {
  partySize: string
  time: string
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
  returnBy: (time: string) => string
  partyLarge: string
  guestFallback: string
  weekdays: string[]
  prevMonth: string
  nextMonth: string
  done: (p: { name: string; party: number; guests: string; date: string; time: string; email: string }) => string
}

export type Copy = {
  pageTitle: string
  skip: string
  tagline: string
  nav: { menu: string; hours: string; payment: string; gallery: string; about: string; services: string; contact: string; book: string }
  heroClosed: (date: string, hours: string) => string
  heroOpen: string
  menuTitle: [string, string]
  menuBtn: string
  aboutTitle: string
  aboutLead: string
  aboutBody: string[]
  dailyMenu: string
  dailyDessert: string
  hoursTitle: string
  hoursRows: { day: string; time: string }[]
  paymentTitle: string
  payments: string[]
  galleryTitle: [string, string]
  galleryMore: string
  galleryLess: string
  servicesTitle: string
  serviceLabels: Record<(typeof services)[number]['id'], string>
  contactTitle: string
  contactFind: string
  contactWrite: string
  contactCall: string
  contactCallNote: string
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
  closedDay: string
  guests: (n: number) => string
}

export const copy: Record<Lang, Copy> = {
  pt: {
    pageTitle: 'UNSLEPTOV RESTAURANT & BAR',
    skip: 'Saltar para o conteúdo',
    tagline: 'unsleptov — onde a grelha encontra a noite.',
    nav: {
      menu: 'Menu',
      hours: 'Horário',
      payment: 'Pagamentos',
      gallery: 'Galeria',
      about: 'Sobre nós',
      services: 'Serviços',
      contact: 'Contactos',
      book: 'Reservar',
    },
    heroClosed: (date, hours) =>
      `Lamentamos, estamos fechados. Reabrimos ${date} das ${hours}.`,
    heroOpen: 'Estamos abertos — reserve a sua mesa.',
    menuTitle: ['O nosso', 'menu'],
    menuBtn: 'Menu completo',
    aboutTitle: 'Sobre nós',
    aboutLead: 'Grill & Bar — demo portfolio',
    aboutBody: [
      'UNSLEPTOV RESTAURANT & BAR é uma demo de steak house: carnes na grelha, pratos para partilhar e um bar acolhedor no coração de Manchester.',
      'Layout inspirado em sites de restauração — nomes, morada e contactos são fictícios, criados para portfólio.',
    ],
    dailyMenu: 'Ementa do dia',
    dailyDessert: 'Sobremesa do dia',
    hoursTitle: 'O nosso horário',
    hoursRows: [
      { day: 'Segunda-feira', time: 'Fechado' },
      { day: 'Terça a sábado', time: '12:00 – 23:00' },
      { day: 'Domingo', time: '12:00 – 17:00' },
    ],
    paymentTitle: 'Formas de pagamento',
    payments: [
      'American Express',
      'Dinheiro',
      'Contactless',
      'Mastercard',
      'VISA',
      'Cartão de débito',
      'Apple Pay',
      'Maestro',
      'MB Way',
    ],
    galleryTitle: ['Galeria', 'Galeria'],
    galleryMore: 'Ver tudo',
    galleryLess: 'Ver menos',
    servicesTitle: 'Os nossos serviços',
    serviceLabels: {
      access: 'Acessibilidade',
      ac: 'Ar condicionado',
      outdoor: 'Esplanada',
      events: 'Eventos privados',
      smoking: 'Zona para fumadores',
      takeaway: 'Takeaway',
      wifi: 'Wi-Fi gratuito',
    },
    contactTitle: 'Tudo num relance',
    contactFind: 'Encontre-nos',
    contactWrite: 'Escreva-nos',
    contactCall: 'Ligue-nos',
    contactCallNote: 'Chamada para rede fixa nacional.',
    formTitle: 'Envie-nos uma mensagem',
    formName: 'Nome',
    formEmail: 'Email',
    formPhone: 'Telefone',
    formSubject: 'Assunto',
    formMessage: 'A sua mensagem',
    formSend: 'Enviar',
    formSent: 'Mensagem enviada. Entraremos em contacto em breve.',
    bookingTitle: 'Reservar mesa',
    bookingPhoneNote: 'Chamada para rede fixa nacional.',
    booking: {
      partySize: 'Número de pessoas',
      time: 'Hora',
      next: 'Seguinte',
      back: '← Voltar',
      confirm: 'Confirmar',
      fullName: 'Nome completo',
      email: 'Email',
      phone: 'Telefone',
      notes: 'Notas',
      held: 'Reserva registada',
      seeYou: 'Até à mesa',
      bookAnother: 'Nova reserva',
      returnBy: (time) => `A mesa deve ser libertada até às ${time}.`,
      partyLarge: 'Grupos de 9+ — ligue',
      guestFallback: 'Convidado',
      weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      prevMonth: 'Mês anterior',
      nextMonth: 'Mês seguinte',
      done: ({ name, party, guests, date, time, email }) =>
        `${name}, ${party} ${guests} em ${date} às ${time}. Confirmamos em ${email}. Para alterar, ligue ${site.phone}.`,
    },
    footerHome: 'Início',
    footerCredit: 'Site demo por unsleptov',
    closedDay: 'Fechado às segundas — escolha outro dia.',
    guests: (n) => (n === 1 ? 'convidado' : 'convidados'),
  },
  en: {
    pageTitle: 'UNSLEPTOV RESTAURANT & BAR',
    skip: 'Skip to content',
    tagline: 'unsleptov — where the grill meets the night.',
    nav: {
      menu: 'Menu',
      hours: 'Hours',
      payment: 'Payment',
      gallery: 'Gallery',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      book: 'Book',
    },
    heroClosed: (date, hours) => `Sorry, we're closed. We reopen ${date} from ${hours}.`,
    heroOpen: "We're open — book your table.",
    menuTitle: ['Our', 'menu'],
    menuBtn: 'Full menu',
    aboutTitle: 'About us',
    aboutLead: 'Grill & Bar — portfolio demo',
    aboutBody: [
      'UNSLEPTOV RESTAURANT & BAR is a steak-house demo: grilled cuts, sharing plates, and a warm bar in the heart of Manchester.',
      'Restaurant-style layout — all names, addresses, and contacts are fictional, built for portfolio only.',
    ],
    dailyMenu: 'Menu of the day',
    dailyDessert: 'Dessert of the day',
    hoursTitle: 'Opening hours',
    hoursRows: [
      { day: 'Monday', time: 'Closed' },
      { day: 'Tuesday – Saturday', time: '12:00 – 23:00' },
      { day: 'Sunday', time: '12:00 – 17:00' },
    ],
    paymentTitle: 'Payment methods',
    payments: [
      'American Express',
      'Cash',
      'Contactless',
      'Mastercard',
      'VISA',
      'Debit card',
      'Apple Pay',
      'Maestro',
      'MB Way',
    ],
    galleryTitle: ['Gallery', 'Gallery'],
    galleryMore: 'Show all',
    galleryLess: 'Show less',
    servicesTitle: 'Our services',
    serviceLabels: {
      access: 'Accessible',
      ac: 'Air conditioning',
      outdoor: 'Outdoor seating',
      events: 'Private events',
      smoking: 'Smoking area',
      takeaway: 'Takeaway',
      wifi: 'Free Wi-Fi',
    },
    contactTitle: 'Everything at a glance',
    contactFind: 'Find us',
    contactWrite: 'Write to us',
    contactCall: 'Call us',
    contactCallNote: 'Call to the national landline network.',
    formTitle: 'Send us a message',
    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formSubject: 'Subject',
    formMessage: 'Your message',
    formSend: 'Send',
    formSent: 'Message sent. We will get back to you soon.',
    bookingTitle: 'Make a reservation',
    bookingPhoneNote: 'Call to the national landline network.',
    booking: {
      partySize: 'Party size',
      time: 'Time',
      next: 'Next',
      back: '← Back',
      confirm: 'Confirm',
      fullName: 'Full name',
      email: 'Email',
      phone: 'Phone',
      notes: 'Notes',
      held: 'Reservation held',
      seeYou: 'See you at the table',
      bookAnother: 'Book another',
      returnBy: (time) => `Your table must be returned by ${time}.`,
      partyLarge: 'Parties of 9+ — call',
      guestFallback: 'Guest',
      weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
      done: ({ name, party, guests, date, time, email }) =>
        `${name}, ${party} ${guests} on ${date} at ${time}. We’ll confirm at ${email}. To change, call ${site.phone}.`,
    },
    footerHome: 'Home',
    footerCredit: 'Demo site by unsleptov',
    closedDay: 'Closed on Mondays — pick another day.',
    guests: (n) => (n === 1 ? 'guest' : 'guests'),
  },
  ru: {
    pageTitle: 'UNSLEPTOV RESTAURANT & BAR',
    skip: 'Перейти к содержимому',
    tagline: 'unsleptov — где гриль встречает ночь.',
    nav: {
      menu: 'Меню',
      hours: 'Часы работы',
      payment: 'Оплата',
      gallery: 'Галерея',
      about: 'О нас',
      services: 'Услуги',
      contact: 'Контакты',
      book: 'Бронь',
    },
    heroClosed: (date, hours) => `Извините, заведение закрыто. Мы откроемся ${date} с ${hours}.`,
    heroOpen: 'Мы открыты — забронируйте столик.',
    menuTitle: ['Наше', 'меню'],
    menuBtn: 'Полное меню',
    aboutTitle: 'О нас',
    aboutLead: 'Grill & Bar — демо для портфолио',
    aboutBody: [
      'UNSLEPTOV RESTAURANT & BAR — демо стейк-хауса: гриль, блюда на компанию и бар в центре Manchester.',
      'Макет в стиле ресторанных сайтов — все названия, адреса и контакты вымышленные, только для портфолио.',
    ],
    dailyMenu: 'Меню дня',
    dailyDessert: 'Десерт дня',
    hoursTitle: 'График работы',
    hoursRows: [
      { day: 'Понедельник', time: 'Закрыто' },
      { day: 'Вторник – суббота', time: '12:00 – 23:00' },
      { day: 'Воскресенье', time: '12:00 – 17:00' },
    ],
    paymentTitle: 'Способы оплаты',
    payments: [
      'American Express',
      'Наличные',
      'Бесконтактная оплата',
      'Mastercard',
      'VISA',
      'Дебетовая карта',
      'Apple Pay',
      'Maestro',
      'MB Way',
    ],
    galleryTitle: ['Галерея', 'Galeria'],
    galleryMore: 'Показать все',
    galleryLess: 'Свернуть',
    servicesTitle: 'Наши услуги',
    serviceLabels: {
      access: 'Доступность',
      ac: 'Кондиционер',
      outdoor: 'Терраса',
      events: 'Частные мероприятия',
      smoking: 'Зона для курения',
      takeaway: 'На вынос',
      wifi: 'Бесплатный Wi-Fi',
    },
    contactTitle: 'Всё с одного взгляда',
    contactFind: 'Найдите нас',
    contactWrite: 'Напишите нам',
    contactCall: 'Позвоните нам',
    contactCallNote: 'Звонок на городской номер внутри страны.',
    formTitle: 'Отправьте сообщение',
    formName: 'Имя',
    formEmail: 'Email',
    formPhone: 'Телефон',
    formSubject: 'Тема',
    formMessage: 'Ваше сообщение',
    formSend: 'Отправить',
    formSent: 'Сообщение отправлено. Мы скоро ответим.',
    bookingTitle: 'Забронировать столик',
    bookingPhoneNote: 'Звонок на городской номер внутри страны.',
    booking: {
      partySize: 'Количество гостей',
      time: 'Время',
      next: 'Далее',
      back: '← Назад',
      confirm: 'Подтвердить',
      fullName: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      notes: 'Комментарий',
      held: 'Бронь принята',
      seeYou: 'Ждём вас за столом',
      bookAnother: 'Забронировать ещё',
      returnBy: (time) => `Столик нужно освободить до ${time}.`,
      partyLarge: 'Группы от 9 человек — звоните',
      guestFallback: 'Гость',
      weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      prevMonth: 'Предыдущий месяц',
      nextMonth: 'Следующий месяц',
      done: ({ name, party, guests, date, time, email }) =>
        `${name}, ${party} ${guests}, ${date} в ${time}. Подтвердим на ${email}. Чтобы изменить — ${site.phone}.`,
    },
    footerHome: 'Главная',
    footerCredit: 'Демо-сайт от unsleptov',
    closedDay: 'По понедельникам закрыто — выберите другой день.',
    guests: (n) => {
      const mod10 = n % 10
      const mod100 = n % 100
      if (mod10 === 1 && mod100 !== 11) return 'гость'
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'гостя'
      return 'гостей'
    },
  },
}
