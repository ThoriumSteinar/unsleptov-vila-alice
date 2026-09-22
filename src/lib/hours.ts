import { schedule } from '../data'

const DAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}


function toMin(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

function rangeFor(weekday: number) {
  const row = schedule.find((item) => (item.days as readonly number[]).includes(weekday))
  if (!row) return { open: '08:00', close: '21:00' }
  return row
}

export function kyivClock(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Kyiv',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const read = (type: string) => parts.find((part) => part.type === type)?.value ?? ''
  const weekday = DAY_INDEX[read('weekday')] ?? 0
  const minutes = Number(read('hour')) * 60 + Number(read('minute'))
  return { weekday, minutes }
}

export function cafeStatus(date = new Date()) {
  const { weekday, minutes } = kyivClock(date)
  const today = rangeFor(weekday)
  const openMin = toMin(today.open)
  const closeMin = toMin(today.close)

  if (minutes >= openMin && minutes < closeMin) {
    return { open: true, text: `Сейчас открыто · до ${today.close}` }
  }

  if (minutes < openMin) {
    return { open: false, text: `Сейчас закрыто · откроемся в ${today.open}` }
  }

  const next = rangeFor((weekday + 1) % 7)
  return {
    open: false,
    text: `Сейчас закрыто · откроемся завтра в ${next.open}`,
  }
}
