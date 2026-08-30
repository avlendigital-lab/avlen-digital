import { demoTemplates } from '../data/demoTemplates';
import type { DemoTemplate } from '../data/demoTemplates';
import type { Translation } from '../data/translations';

type SelectedWorkProps = {
  t: Translation;
};

type WorkProject = Translation['work']['projects'][number];
type WorkItem = {
  project: WorkProject;
  template: DemoTemplate;
};

function hasTemplate(item: { project: WorkProject; template?: DemoTemplate }): item is WorkItem {
  return Boolean(item.template);
}

export function SelectedWork({ t }: SelectedWorkProps) {
  const workItems = t.work.projects
    .map((project, index) => ({
      project,
      template: demoTemplates[index],
    }))
    .filter(hasTemplate);

  return (
    <section className="work-section section-pad" id="work" aria-labelledby="work-title">
      <div className="section-inner">
        <div className="section-heading work-heading" data-reveal>
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 id="work-title">{t.work.title}</h2>
          <p>{t.work.body}</p>
        </div>

        <div className="project-list">
          {workItems.map(({ project, template }) => {
            return (
              <a className="project-card" href={template.path} key={project.number} data-reveal>
                <div className={`project-visual project-visual--${template.slug}`}>
                  <img className="project-visual-photo" src={template.image.src} alt="" loading="lazy" />
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
            );
          })}
        </div>

        <TemplateRail t={t} />
      </div>
    </section>
  );
}

function TemplateRail({ t }: SelectedWorkProps) {
  const railItems = t.work.projects
    .map((project, index) => ({
      project,
      template: demoTemplates[index],
    }))
    .filter(hasTemplate);
  const duplicatedItems = [...railItems, ...railItems];

  return (
    <div className="template-rail" aria-labelledby="template-rail-title">
      <div className="template-rail__intro">
        <p className="eyebrow">{t.work.railEyebrow}</p>
        <h3 id="template-rail-title">{t.work.railTitle}</h3>
        <p>{t.work.railBody}</p>
      </div>

      <div className="template-rail__viewport">
        <div className="template-rail__track">
          {duplicatedItems.map(({ project, template }, index) => {
            const isDuplicate = index >= railItems.length;

            return (
              <a
                aria-hidden={isDuplicate ? 'true' : undefined}
                className={`template-rail-card template-rail-card--${template.slug}`}
                href={template.path}
                key={`${project.number}-${index}`}
                tabIndex={isDuplicate ? -1 : undefined}
              >
                <img src={template.image.src} alt="" loading="lazy" />
                <span>{project.number}</span>
                <div>
                  <p>{project.type}</p>
                  <h4>{project.title}</h4>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
