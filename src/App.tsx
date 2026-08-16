import { Header } from './components/Header';
import { Footer } from './sections/Footer';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { IntroStatement } from './sections/IntroStatement';
import { Manifesto } from './sections/Manifesto';
import { SelectedWork } from './sections/SelectedWork';
import { Services } from './sections/Services';
import { translations } from './data/translations';
import { useLanguage } from './hooks/useLanguage';
import { useReveal } from './hooks/useReveal';

export function App() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        {t.accessibility.skipToContent}
      </a>
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main id="main">
        <Hero t={t} />
        <IntroStatement t={t} />
        <SelectedWork t={t} />
        <Services t={t} />
        <Manifesto t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
