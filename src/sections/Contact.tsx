import { ButtonLink } from '../components/ButtonLink';
import { CONTACT, CONTACT_LINKS } from '../data/contact';
import type { Translation } from '../data/translations';

type ContactProps = {
  t: Translation;
};

export function Contact({ t }: ContactProps) {
  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-grid">
        <p className="eyebrow" data-reveal>
          {t.contact.eyebrow}
        </p>
        <div data-reveal>
          <h2 id="contact-title" aria-label={t.contact.heading.join(' ')}>
            {t.contact.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{t.contact.body}</p>
        </div>
        <div className="contact-actions" data-reveal>
          <ButtonLink href={CONTACT_LINKS.instagram} target="_blank" rel="noreferrer">
            {t.contact.instagram}
          </ButtonLink>
          <ButtonLink href={CONTACT_LINKS.email} variant="secondary">
            {t.contact.email}
          </ButtonLink>
          <p>
            {CONTACT.instagramHandle}
            <br />
            {CONTACT.email}
          </p>
        </div>
      </div>
    </section>
  );
}
