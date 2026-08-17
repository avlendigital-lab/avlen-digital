import { useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { DemoTemplate } from '../data/demoTemplates';
import type { Language } from '../data/translations';

type TemplateDemoProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  template: DemoTemplate;
};

export function TemplateDemo({ language, setLanguage, template }: TemplateDemoProps) {
  const c = template.content[language];
  const isTurkish = language === 'tr';
  const navTargets = ['#demo-services', '#demo-process', '#demo-offers'];

  useEffect(() => {
    document.title = `${c.businessName} — AVLEN Concept Demo`;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = c.subhead;
    }
  }, [c.businessName, c.subhead]);

  return (
    <div className={`template-demo template-demo--${template.slug}`}>
      <header className="demo-topbar">
        <a href="/#work">← {isTurkish ? 'AVLEN’e dön' : 'Back to AVLEN'}</a>
        <span>{template.avlenLabel[language]}</span>
        <div className="demo-language" aria-label={isTurkish ? 'Dil seçimi' : 'Language selection'}>
          <button
            className={language === 'tr' ? 'is-active' : ''}
            type="button"
            onClick={() => setLanguage('tr')}
          >
            TR
          </button>
          <span>/</span>
          <button
            className={language === 'en' ? 'is-active' : ''}
            type="button"
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </header>

      <main className="demo-main">
        <section className="demo-hero" aria-labelledby="demo-title">
          <nav className="demo-nav" aria-label={`${c.businessName} navigation`}>
            <a href="#demo-title" className="demo-brand">
              {c.businessName}
            </a>
            <div>
              {c.nav.map((item, index) => (
                <a href={navTargets[index] ?? '#demo-offers'} key={item}>
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <div className="demo-hero-grid">
            <div className="demo-hero-copy" data-reveal>
              <p>{c.badge}</p>
              <h1 id="demo-title" aria-label={c.headline.join(' ')}>
                {c.headline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p>{c.subhead}</p>
              <div className="demo-actions">
                <a href="#demo-offers">{c.primaryCta}</a>
                <a href="#demo-services">{c.secondaryCta}</a>
              </div>
              <p className="demo-concept-note">{c.conceptNote}</p>
            </div>

            <div className="demo-visual" aria-hidden="true" data-reveal>
              <div className="demo-device">
                <span />
                <span />
                <span />
                <div />
              </div>
              <div className="demo-orbit demo-orbit--one" />
              <div className="demo-orbit demo-orbit--two" />
              <div className="demo-shape demo-shape--one" />
              <div className="demo-shape demo-shape--two" />
              <strong>{c.businessName}</strong>
            </div>
          </div>
        </section>

        <section className="demo-signal" aria-label={c.metricLabel}>
          <div data-reveal>
            <p>{c.metric}</p>
            <p>{c.metricLabel}</p>
          </div>
          <div className="demo-proof-points" data-reveal>
            {c.proofPoints.map((point) => (
              <article key={`${point.value}-${point.label}`}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-services" id="demo-services" aria-labelledby="demo-services-title">
          <div data-reveal>
            <p className="demo-kicker">{isTurkish ? 'Site bölümü' : 'Site section'}</p>
            <h2 id="demo-services-title">{c.servicesTitle}</h2>
          </div>
          <div className="demo-service-list">
            {c.services.map((service, index) => (
              <article key={service} data-reveal>
                <span>0{index + 1}</span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-editorial">
          <div className="demo-editorial-art" aria-hidden="true" data-reveal>
            <span />
            <span />
            <span />
          </div>
          <div data-reveal>
            <p className="demo-kicker">{isTurkish ? 'Tasarım yaklaşımı' : 'Design approach'}</p>
            <h2>{c.featureTitle}</h2>
            <p>{c.featureBody}</p>
          </div>
        </section>

        <section className="demo-gallery" aria-labelledby="demo-gallery-title">
          <div data-reveal>
            <p className="demo-kicker">{isTurkish ? 'Atmosfer' : 'Atmosphere'}</p>
            <h2 id="demo-gallery-title">{c.galleryTitle}</h2>
          </div>
          <div className="demo-gallery-grid">
            {c.gallery.map((item, index) => (
              <article key={item} data-reveal>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-offers" id="demo-offers" aria-labelledby="demo-offers-title">
          <div data-reveal>
            <p className="demo-kicker">{isTurkish ? 'Satış alanı' : 'Conversion area'}</p>
            <h2 id="demo-offers-title">{c.offersTitle}</h2>
          </div>
          <div className="demo-offer-list">
            {c.offers.map((offer) => (
              <article key={offer.name} data-reveal>
                <h3>{offer.name}</h3>
                <p>{offer.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-process" id="demo-process" aria-labelledby="demo-process-title">
          <div data-reveal>
            <p className="demo-kicker">{isTurkish ? 'Akış' : 'Flow'}</p>
            <h2 id="demo-process-title">{c.processTitle}</h2>
          </div>
          <div className="demo-process-list">
            {c.process.map((step) => (
              <article key={step.step} data-reveal>
                <span>{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-quote" aria-label={isTurkish ? 'Konsept yorumu' : 'Concept note'}>
          <blockquote data-reveal>{c.quote}</blockquote>
        </section>

        <section className="demo-final">
          <div data-reveal>
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaBody}</p>
          </div>
          <a href="/#contact" data-reveal>
            {isTurkish ? 'Benzer bir site iste' : 'Request a similar site'} →
          </a>
        </section>
      </main>
    </div>
  );
}
