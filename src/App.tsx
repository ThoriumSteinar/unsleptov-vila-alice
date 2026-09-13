import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { I18nProvider, useI18n } from './i18n'
import { Home } from './pages/Home'

function Shell() {
  const { t } = useI18n()

  return (
    <div className="shell">
      <a className="skip" href="#top">
        {t.skip}
      </a>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Shell />
    </I18nProvider>
  )
}
