import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

const SKILL_CATEGORIES = [
  { iconName: 'terminal', titleKey: 'languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Dart'] },
  { iconName: 'layers', titleKey: 'frontend', items: ['React', 'Next.js', 'Angular', 'Flutter', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { iconName: 'server', titleKey: 'backend', items: ['Pyramid', 'Cornice', 'SQLAlchemy', 'Node.js', 'Django', 'Jakarta EE'] },
  { iconName: 'database', titleKey: 'databases', items: ['PostgreSQL', 'Redis', 'MySQL'] },
  { iconName: 'tool', titleKey: 'tools', items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Scrum', 'VS Code', 'PyCharm', 'DataGrip', 'Claude Code'] },
  { iconName: 'search', titleKey: 'qa', items: null },
]

const SOFT_SKILLS = [
  { iconName: 'zap', key: 'creativity' },
  { iconName: 'lightbulb', key: 'leadership' },
  { iconName: 'puzzle', key: 'problemSolving' },
  { iconName: 'users', key: 'teamwork' },
  { iconName: 'messageCircle', key: 'communication' },
  { iconName: 'rocket', key: 'fastLearning' },
]

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <p class="section-label">${t.skills.label}</p>
        <h2 class="section-title">${t.skills.title}</h2>
        <div class="section-line"></div>
      </div>
      <div class="skills-grid">
        ${SKILL_CATEGORIES.map((cat) => {
          const items = cat.items || t.skills[`${cat.titleKey}Items`]
          return html`
            <div class="skill-category reveal">
              <div class="skill-category-icon">${icon(cat.iconName)}</div>
              <h3>${t.skills[cat.titleKey]}</h3>
              <div class="skill-tags">
                ${items.map((s) => html`<span class="skill-tag">${s}</span>`)}
              </div>
            </div>
          `
        })}
      </div>
      <div class="soft-skills">
        ${SOFT_SKILLS.map(
          (s) => html`<div class="soft-skill">${icon(s.iconName)} ${t.skills[s.key]}</div>`,
        )}
      </div>
    </section>
  `
}
