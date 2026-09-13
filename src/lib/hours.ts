export type DayHours = { open: string; close: string } | null

/** Sun=0 … Sat=6 — Monday closed, Tue–Sat 12–23, Sun 12–17 */
const WEEK: DayHours[] = [
  { open: '12:00', close: '17:00' },
  null,
  { open: '12:00', close: '23:00' },
  { open: '12:00', close: '23:00' },
  { open: '12:00', close: '23:00' },
  { open: '12:00', close: '23:00' },
  { open: '12:00', close: '23:00' },
]

export function hoursFor(date: Date): DayHours {
  return WEEK[date.getDay()]
}

export function isClosed(date: Date): boolean {
  return hoursFor(date) === null
}

export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

export function fromMinutes(total: number): string {
  const h = Math.floor(total / 60)
  const m = total % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function slotsFor(date: Date): string[] {
  const hours = hoursFor(date)
  if (!hours) return []
  const start = toMinutes(hours.open)
  const last = toMinutes(hours.close) - 90
  const out: string[] = []
  for (let t = start; t <= last; t += 30) out.push(fromMinutes(t))
  return out
}

export function addMinutes(hhmm: string, extra: number): string {
  return fromMinutes(toMinutes(hhmm) + extra)
}

export function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function isOpenNow(at = new Date()): boolean {
  const hours = hoursFor(at)
  if (!hours) return false
  const now = at.getHours() * 60 + at.getMinutes()
  return now >= toMinutes(hours.open) && now < toMinutes(hours.close)
}

export function nextOpenDay(from = new Date()): Date {
  const d = startOfDay(from)
  for (let i = 0; i < 14; i += 1) {
    const slots = slotsFor(d)
    if (slots.length) {
      if (sameDay(d, from)) {
        const now = from.getHours() * 60 + from.getMinutes()
        if (slots.some((s) => toMinutes(s) > now + 30)) return d
      } else {
        return d
      }
    }
    d.setDate(d.getDate() + 1)
  }
  return startOfDay(from)
}

export function defaultSlot(date: Date): string {
  const slots = slotsFor(date)
  if (!slots.length) return '12:00'
  const prefer = slots.find((s) => s === '13:00') ?? slots.find((s) => toMinutes(s) >= 12 * 60)
  if (sameDay(date, new Date())) {
    const now = new Date().getHours() * 60 + new Date().getMinutes() + 30
    return slots.find((s) => toMinutes(s) >= now) ?? slots[slots.length - 1]
  }
  return prefer ?? slots[0]
}

export function openStatus(at = new Date(), lang: 'pt' | 'en' | 'ru' = 'pt') {
  const open = isOpenNow(at)
  const next = nextOpenDay(at)
  const hours = hoursFor(next)
  const locale = lang === 'pt' ? 'pt-PT' : lang === 'ru' ? 'ru-RU' : 'en-GB'
  const dateLabel = next.toLocaleDateString(locale, { day: 'numeric', month: 'short' })
  const hoursLabel = hours ? `${hours.open} às ${hours.close}` : ''
  const hoursLabelEn = hours ? `${hours.open} to ${hours.close}` : ''
  const hoursLabelRu = hours ? `${hours.open} до ${hours.close}` : ''
  return {
    open,
    next,
    dateLabel,
    hoursLabel: lang === 'en' ? hoursLabelEn : lang === 'ru' ? hoursLabelRu : hoursLabel,
  }
}
