import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { copy, type Copy } from './data'

type I18n = { t: Copy }

const Ctx = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = 'uk'
    document.title = copy.pageTitle
  }, [])

  return <Ctx.Provider value={{ t: copy }}>{children}</Ctx.Provider>
}

export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n outside provider')
  return ctx
}
