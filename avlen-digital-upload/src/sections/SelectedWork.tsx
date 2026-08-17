import type { Translation } from '../data/translations';

type SelectedWorkProps = {
  t: Translation;
};

const visualClasses = ['project-visual--barber', 'project-visual--detailing', 'project-visual--cafe'] as const;
const demoLinks = ['/templates/barber', '/templates/detailing', '/templates/cafe'] as const;

export function SelectedWork({ t }: SelectedWorkProps) {
  return (
    <section className="work-section section-pad" id="work" aria-labelledby="work-title">
      <div className="section-inner">
        <div className="section-heading work-heading" data-reveal>
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 id="work-title">{t.work.title}</h2>
          <p>{t.work.body}</p>
        </div>

        <div className="project-list">
          {t.work.projects.map((project, index) => (
            <a className="project-card" href={demoLinks[index]} key={project.number} data-reveal>
              <div className={`project-visual ${visualClasses[index]}`}>
                <div className="browser-frame">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-line visual-line--one" />
                <div className="visual-line visual-line--two" />
                <div className="visual-block visual-block--one" />
                <div className="visual-block visual-block--two" />
                <p>{project.type}</p>
              </div>

              <div className="project-copy">
                <p className="project-number">{project.number}</p>
                <div>
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.note}</p>
                  <div className="project-scope" aria-label={`${t.work.scopeLabel}: ${project.scope.join(', ')}`}>
                    <span>{t.work.scopeLabel}</span>
                    <ul>
                      {project.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="project-demo-text">{t.work.demoCta}</span>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
