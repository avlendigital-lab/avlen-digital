import { ContourLines } from '../components/ContourLines';
import type { Translation } from '../data/translations';

type ManifestoProps = {
  t: Translation;
};

export function Manifesto({ t }: ManifestoProps) {
  return (
    <section className="manifesto-section section-pad" aria-labelledby="manifesto-title">
      <ContourLines className="manifesto-contours" />
      <div className="section-inner manifesto-grid">
        <h2 id="manifesto-title" aria-label={t.manifesto.lead.join(' ')} data-reveal>
          {t.manifesto.lead.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p data-reveal>{t.manifesto.body}</p>
      </div>
    </section>
  );
}
