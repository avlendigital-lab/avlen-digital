import type { PointerEvent } from 'react';
import { ButtonLink } from '../components/ButtonLink';
import { ContourLines } from '../components/ContourLines';
import type { Translation } from '../data/translations';

type HeroProps = {
  t: Translation;
};

export function Hero({ t }: HeroProps) {
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty('--pointer-x', `${x * 18}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${y * 18}px`);
  };

  const onPointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--pointer-x', '0px');
    event.currentTarget.style.setProperty('--pointer-y', '0px');
  };

  return (
    <section
      className="hero-section"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-labelledby="hero-title"
    >
      <ContourLines className="hero-contours" />
      <div className="hero-mark" aria-hidden="true">
        <img src="/avlen-mark.png" alt="" />
      </div>

      <div className="section-inner hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title" aria-label={t.hero.headline.join(' ')}>
            {t.hero.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
        </div>

        <div className="hero-aside">
          <p>{t.hero.support}</p>
          <div className="hero-actions">
            <ButtonLink href="#contact">{t.hero.primaryCta}</ButtonLink>
            <ButtonLink href="#work" variant="secondary">
              {t.hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <p className="hero-side-note">
          {t.hero.sideNote}
        </p>
      </div>
    </section>
  );
}
