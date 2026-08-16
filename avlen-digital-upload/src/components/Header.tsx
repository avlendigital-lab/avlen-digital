import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Language, Translation } from '../data/translations';

type HeaderProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  t: Translation;
};

const navItems = [
  { key: 'work', href: '#work' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
] as const;

export function Header({ language, setLanguage, t }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-wordmark" href="#main" onClick={closeMenu}>
          AVLEN
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? t.accessibility.closeMenu : t.accessibility.openMenu}
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-panel ${isOpen ? 'is-open' : ''}`} id="site-nav">
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} onClick={closeMenu}>
                {t.nav[item.key]}
              </a>
            ))}
          </div>

          <div className="language-toggle" aria-label={t.accessibility.languageSwitcher}>
            <button
              type="button"
              className={language === 'tr' ? 'is-active' : ''}
              aria-pressed={language === 'tr'}
              onClick={() => {
                setLanguage('tr');
                closeMenu();
              }}
            >
              TR
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              aria-pressed={language === 'en'}
              onClick={() => {
                setLanguage('en');
                closeMenu();
              }}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
