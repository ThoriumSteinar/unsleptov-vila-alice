import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { copy, locales, type Copy, type Lang } from './data'

const STORAGE_KEY = 'unsleptov-restaurant-lang'

type I18n = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Copy
}

const Ctx = createContext<I18n | null>(null)

function readStoredLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en' || saved === 'ru') return saved
  } catch {
    /* ignore */
  }
  return 'pt'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang())

  function setLang(next: Lang) {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = locales[lang]
    document.title = copy[lang].pageTitle
  }, [lang])

  return <Ctx.Provider value={{ lang, setLang, t: copy[lang] }}>{children}</Ctx.Provider>
}

export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n outside provider')
  return ctx
}
