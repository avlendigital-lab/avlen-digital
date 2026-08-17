import { CONTACT_LINKS } from '../data/contact';
import type { Translation } from '../data/translations';

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-contour" aria-hidden="true" />
      <div className="section-inner footer-grid">
        <div>
          <p>{t.footer.studio}</p>
          <p>{t.footer.line}</p>
        </div>
        <p>{t.footer.location}</p>
        <a href={CONTACT_LINKS.instagram} target="_blank" rel="noreferrer">
          {t.footer.instagram}
        </a>
        <p>© {year}</p>
      </div>
    </footer>
  );
}
