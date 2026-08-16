import type { Translation } from '../data/translations';

type AboutProps = {
  t: Translation;
};

export function About({ t }: AboutProps) {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="section-inner about-grid">
        <div data-reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title">{t.about.title}</h2>
        </div>

        <div className="about-copy" data-reveal>
          {t.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="about-aside" data-reveal>
          <img src="/avlen-mark.png" alt={t.accessibility.decorativeMark} />
          <p>{t.about.aside}</p>
        </aside>
      </div>
    </section>
  );
}
