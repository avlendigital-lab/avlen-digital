import type { Translation } from '../data/translations';

type ServicesProps = {
  t: Translation;
};

export function Services({ t }: ServicesProps) {
  return (
    <section className="services-section section-pad" id="services" aria-labelledby="services-title">
      <div className="section-inner services-grid">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 id="services-title">{t.services.title}</h2>
        </div>

        <div className="service-list">
          {t.services.items.map((service) => (
            <article className="service-item" key={service.number} data-reveal>
              <p>{service.number}</p>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
