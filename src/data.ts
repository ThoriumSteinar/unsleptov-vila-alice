const asset = (file: string) => `${import.meta.env.BASE_URL}images/kozachok/${file}`

export const site = {
  name: 'Козачок',
  city: 'Миколаїв',
  phone: '093 422 58 02',
  phoneTel: '+380934225802',
  address: 'вул. Лазурна, 4, Миколаїв, 54000',
  hours: '10:00–23:00',
  hoursNote: 'щодня',
  lat: 46.9559116,
  lng: 31.9375719,
  rating: '4,5',
  facebook: 'https://www.facebook.com/profile.php?id=100008114597502',
  maps: 'https://www.google.com/maps/search/?api=1&query=46.9559116%2C31.9375719',
}

export const images = {
  hall: asset('hall.jpg'),
  exterior: asset('exterior.jpg'),
  feast: asset('feast.jpg'),
  fish: asset('fish.jpg'),
  chan: asset('chan.jpg'),
  sunset: asset('sunset.jpg'),
  hearth: asset('hearth.jpg'),
  shashlik: asset('shashlik.jpg'),
  steak: asset('steak.jpg'),
  salad: asset('salad.jpg'),
  board: asset('board.jpg'),
  loaf: asset('loaf.jpg'),
}

export const menu = [
  {
    id: 'grill',
    title: 'Гриль',
    items: [
      { name: 'Шашличок зі свинини', note: 'шия, аджика, зелень і цибуля, 250 г', price: '220' },
      { name: 'Шашличок курячий', note: 'філе та часниковий соус, 250 г', price: '180' },
      { name: 'Стейк зі свинини', note: 'за 100 г', price: '260' },
      { name: 'Свинячі реберця', note: '300 г', price: '200' },
      { name: 'Люля-кебаб з яловичини', note: 'за 100 г', price: '200' },
      { name: 'Ковбаски «Мюнхенські»', note: '1 шт.', price: '200' },
      { name: 'Пікантні крильця', note: 'з соусом теріякі, 3 шт.', price: '120' },
      { name: 'Скумбрія гриль', note: 'з соусом тартар', price: '230' },
      { name: 'Овочі гриль', note: 'баклажан, помідор, перець, кабачок', price: '160' },
      { name: 'Печериці гриль', note: 'з часниковим соусом, 150 г', price: '80' },
    ],
  },
  {
    id: 'starters',
    title: 'Закуски',
    items: [
      { name: 'Погребок із домашніх солінь', note: 'капуста, бочковий огірок, помідор, 400 г', price: '170' },
      { name: 'Асорті із сала', note: 'шпик, мариноване сало, підчеревок, 350 г', price: '200' },
      { name: 'Закуска під чарочку', note: 'грінки, сало, бочковий огірок, 200 г', price: '100' },
      { name: 'Філе оселедця', note: 'з цибулею та запашною олією', price: '160' },
      { name: 'Дошка з елітних сирів', note: 'брі, камамбер, гауда, фета, 280 г', price: '300' },
      { name: 'М’ясна дошка', note: 'хамон, фует, бастурма, салямі, 250 г', price: '300' },
      { name: 'Маслини або оливки', note: '100 г', price: '90' },
      { name: 'Лаваш гарячий', note: 'з часниковим соусом', price: '60' },
      { name: 'Хлібна корзина', note: '10 шматків', price: '30' },
    ],
  },
  {
    id: 'salads',
    title: 'Салати',
    items: [
      { name: 'Селянський із запашною олією', note: 'помідор, огірок, зелень', price: '90' },
      { name: 'Грецький', note: 'помідор, огірок, перець, фета, 300 г', price: '170' },
      { name: 'Цезар із курочкою', note: '300 г', price: '250' },
      { name: 'Цезар із слабосолоною сьомгою', note: '300 г', price: '300' },
      { name: 'Примхи з моцарелою', note: 'помідор, моцарела, песто, 250 г', price: '180' },
      { name: 'Овочева поляна', note: '400 г', price: '160' },
    ],
  },
] as const

const pad = 0.012
export const mapEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${site.lng - pad}%2C${site.lat - pad}%2C${site.lng + pad}%2C${site.lat + pad}&layer=mapnik&marker=${site.lat}%2C${site.lng}`

export const copy = {
  pageTitle: 'Козачок — ресторан на березі Бугу, Миколаїв',
  skip: 'До змісту',
}
