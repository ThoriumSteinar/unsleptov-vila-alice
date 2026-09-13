import { useState, type FormEvent } from 'react'
import { useI18n } from '../i18n'

export function ContactForm() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h3>{t.formTitle}</h3>
      <div className="form-row">
        <label>
          {t.formName}
          <input required name="name" autoComplete="name" />
        </label>
        <label>
          {t.formEmail}
          <input required type="email" name="email" autoComplete="email" />
        </label>
        <label>
          {t.formPhone}
          <input name="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        {t.formSubject}
        <input required name="subject" />
      </label>
      <label>
        {t.formMessage}
        <textarea
          required
          name="message"
          rows={5}
          maxLength={500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span className="char-count">{message.length} / 500</span>
      </label>
      <button type="submit">{t.formSend}</button>
      {sent ? <p className="form-ok">{t.formSent}</p> : null}
    </form>
  )
}
