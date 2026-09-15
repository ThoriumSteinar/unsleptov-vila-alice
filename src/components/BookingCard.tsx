import { useMemo, useState, type FormEvent } from 'react'
import { locale, site } from '../data'
import { useI18n } from '../i18n'
import { sameDay, startOfDay } from '../lib/hours'
import { IconArrow, IconCal, IconGuest } from './Icons'

function monthMatrix(year: number, month: number): (Date | null)[][] {
  const first = new Date(year, month, 1)
  const startPad = (first.getDay() + 6) % 7
  const days = new Date(year, month + 1, 0).getDate()
  const cells: (Date | null)[] = Array.from({ length: startPad }, () => null)
  for (let d = 1; d <= days; d += 1) cells.push(new Date(year, month, d))
  while (cells.length % 7) cells.push(null)
  const rows: (Date | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
  return rows
}

export function BookingCard() {
  const { t } = useI18n()
  const b = t.booking
  const today = startOfDay(new Date())
  const [step, setStep] = useState<'book' | 'details' | 'done'>('book')
  const [date, setDate] = useState(() => today)
  const [cursor, setCursor] = useState(() => ({ y: today.getFullYear(), m: today.getMonth() }))
  const [party, setParty] = useState(2)
  const [nights, setNights] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  const fmtLong = (d: Date) =>
    d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

  const grid = useMemo(() => monthMatrix(cursor.y, cursor.m), [cursor])
  const monthLabel = new Date(cursor.y, cursor.m, 1).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  })

  function pickDate(d: Date) {
    if (d < today) return
    setDate(d)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setStep('done')
  }

  if (step === 'done') {
    return (
      <div className="book">
        <p className="book-kicker">{b.held}</p>
        <h2 className="book-done-title">{b.seeYou}</h2>
        <p className="book-done-copy">
          {b.done({
            name: name || b.guestFallback,
            party,
            guests: t.guests(party),
            date: fmtLong(date),
            nights: b.nightsCount(nights),
            phone: site.phoneHotel,
          })}
        </p>
        <button
          type="button"
          className="book-next"
          onClick={() => {
            setStep('book')
            setName('')
            setEmail('')
            setPhone('')
            setNote('')
          }}
        >
          {b.bookAnother}
        </button>
      </div>
    )
  }

  if (step === 'details') {
    return (
      <form className="book" onSubmit={onSubmit}>
        <button type="button" className="book-back" onClick={() => setStep('book')}>
          {b.back}
        </button>
        <p className="book-summary">
          <span>
            <IconCal /> {fmtLong(date)}
          </span>
          <span>
            <IconGuest /> {party}
          </span>
          <span>{b.nightsCount(nights)}</span>
        </p>
        <label className="book-field">
          <span>{b.fullName}</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} name="name" />
        </label>
        <label className="book-field">
          <span>{b.email}</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </label>
        <label className="book-field">
          <span>{b.phone}</span>
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} name="tel" />
        </label>
        <label className="book-field">
          <span>{b.notes}</span>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} name="note" />
        </label>
        <button className="book-next" type="submit">
          {b.confirm} <IconArrow />
        </button>
      </form>
    )
  }

  return (
    <div className="book">
      <p className="book-summary">
        <span>
          <IconCal /> {fmtLong(date)}
        </span>
        <span>
          <IconGuest /> {party}
        </span>
        <span>{b.nightsCount(nights)}</span>
      </p>

      <label className="book-field">
        <span>{b.guestsLabel}</span>
        <span className="book-select">
          <select value={party} onChange={(e) => setParty(Number(e.target.value))}>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <IconGuest />
        </span>
      </label>

      <label className="book-field">
        <span>{b.nights}</span>
        <span className="book-select">
          <select value={nights} onChange={(e) => setNights(Number(e.target.value))}>
            {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {b.nightsCount(n)}
              </option>
            ))}
          </select>
        </span>
      </label>

      <div className="cal">
        <div className="cal-head">
          <button
            type="button"
            aria-label={b.prevMonth}
            onClick={() =>
              setCursor((c) => (c.m === 0 ? { y: c.y - 1, m: 11 } : { y: c.y, m: c.m - 1 }))
            }
          >
            ‹
          </button>
          <p>{monthLabel}</p>
          <button
            type="button"
            aria-label={b.nextMonth}
            onClick={() =>
              setCursor((c) => (c.m === 11 ? { y: c.y + 1, m: 0 } : { y: c.y, m: c.m + 1 }))
            }
          >
            ›
          </button>
        </div>
        <div className="cal-week">
          {b.weekdays.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="cal-grid">
          {grid.flat().map((cell, i) => {
            if (!cell) return <span key={`e-${i}`} />
            const past = cell < today
            const selected = sameDay(cell, date)
            return (
              <button
                key={cell.toISOString()}
                type="button"
                disabled={past}
                className={selected ? 'is-selected' : ''}
                onClick={() => pickDate(cell)}
              >
                {cell.getDate()}
              </button>
            )
          })}
        </div>
      </div>

      <p className="book-return">{b.checkIn}</p>

      <button className="book-next" type="button" onClick={() => setStep('details')}>
        {b.next} <IconArrow />
      </button>
    </div>
  )
}
