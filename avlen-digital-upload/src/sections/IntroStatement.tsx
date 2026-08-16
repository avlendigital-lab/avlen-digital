import type { Translation } from '../data/translations';

type IntroStatementProps = {
  t: Translation;
};

export function IntroStatement({ t }: IntroStatementProps) {
  return (
    <section className="intro-section section-pad" aria-labelledby="intro-title">
      <div className="section-inner intro-grid">
        <p className="eyebrow" data-reveal>
          {t.intro.label}
        </p>
        <div data-reveal>
          <h2 id="intro-title">{t.intro.statement}</h2>
          <p>{t.intro.body}</p>
        </div>
      </div>
    </section>
  );
}
