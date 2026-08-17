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
  const mainVisual = template.visuals.gallery[0] ?? template.visuals.services[0];

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

            <figure className="demo-visual" data-reveal>
              <img className="demo-visual-image" src={template.image.src} alt={c.imageAlt} />
              <div className="demo-device" aria-hidden="true">
                <span />
                <span />
                <span />
                <div />
              </div>
              <div className="demo-phone-card" aria-hidden="true">
                <span>{isTurkish ? 'Hızlı aksiyon' : 'Quick action'}</span>
                <strong>{c.primaryCta}</strong>
                <p>{c.services[0]}</p>
                <p>{c.services[1]}</p>
              </div>
              <div className="demo-orbit demo-orbit--one" aria-hidden="true" />
              <div className="demo-orbit demo-orbit--two" aria-hidden="true" />
              <div className="demo-shape demo-shape--one" aria-hidden="true" />
              <div className="demo-shape demo-shape--two" aria-hidden="true" />
              <strong className="demo-visual-title">{c.businessName}</strong>
              <figcaption className="demo-visual-caption">
                <span>{isTurkish ? 'Atmosfer karesi' : 'Atmosphere frame'}</span>
                {c.imageCaption}
              </figcaption>
            </figure>
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
            {c.services.map((service, index) => {
              const visual = template.visuals.services[index % template.visuals.services.length];

              return (
                <article key={service} data-reveal>
                  <img src={visual.src} alt={visual.alt[language]} loading="lazy" />
                  <div>
                    <span>0{index + 1}</span>
                    <h3>{service}</h3>
                    <p>{c.serviceDetails[index]}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="demo-editorial">
          <div className="demo-editorial-art" aria-hidden="true" data-reveal>
            <img src={mainVisual.src} alt="" loading="lazy" />
            <span className="demo-editorial-ring demo-editorial-ring--one" />
            <span className="demo-editorial-ring demo-editorial-ring--two" />
            <span className="demo-editorial-ring demo-editorial-ring--three" />
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
            {c.gallery.map((item, index) => {
              const visual = template.visuals.gallery[index % template.visuals.gallery.length];

              return (
                <article key={item} data-reveal>
                  <img src={visual.src} alt={visual.alt[language]} loading="lazy" />
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="demo-offers" id="demo-offers" aria-labelledby="demo-offers-title">
          <div data-reveal>
            <p className="demo-kicker">{isTurkish ? 'Satış alanı' : 'Conversion area'}</p>
            <h2 id="demo-offers-title">{c.offersTitle}</h2>
          </div>
          <div className="demo-offer-list">
            {c.offers.map((offer, index) => {
              const visual = template.visuals.offers[index % template.visuals.offers.length];

              return (
                <article key={offer.name} data-reveal>
                  <img src={visual.src} alt={visual.alt[language]} loading="lazy" />
                  <div>
                    <h3>{offer.name}</h3>
                    <p>{offer.detail}</p>
                  </div>
                </article>
              );
            })}
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
