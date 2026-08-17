import type { Translation } from '../data/translations';

type ProcessProps = {
  t: Translation;
};

export function Process({ t }: ProcessProps) {
  return (
    <section className="process-section section-pad" aria-labelledby="process-title">
      <div className="section-inner process-grid">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 id="process-title">{t.process.title}</h2>
        </div>

        <div className="process-list">
          {t.process.steps.map((step) => (
            <article key={step.number} data-reveal>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
