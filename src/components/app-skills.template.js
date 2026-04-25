import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

const TECH_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  Java: '#f89820',
  Dart: '#00b4ab',
  React: '#61dafb',
  'Next.js': '#ffffff',
  Angular: '#dd0031',
  Flutter: '#02569b',
  'React Native': '#61dafb',
  'Tailwind CSS': '#06b6d4',
  HTML5: '#e34c26',
  CSS3: '#1572b6',
  Pyramid: '#ce3e2a',
  Cornice: '#cc3333',
  SQLAlchemy: '#d71f00',
  'Node.js': '#3c873a',
  Django: '#0c4b33',
  'Jakarta EE': '#f7941d',
  PostgreSQL: '#336791',
  Redis: '#dc382c',
  MySQL: '#4479a1',
  Git: '#f05032',
  GitHub: '#ffffff',
  GitLab: '#fc6d26',
  Jira: '#0052cc',
  Scrum: '#a855f7',
  'VS Code': '#007acc',
  PyCharm: '#21d789',
  DataGrip: '#ff318c',
  'Claude Code': '#d97757',
}

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

function pill(name) {
  const color = TECH_COLORS[name] || '#a855f7'
  return html`<span class="skill-pill" style="--c: ${color}">${name}</span>`
}

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <h2 class="section-title">${t.skills.title}</h2>
        <div class="section-line"></div>
      </div>

      <div class="skills-list">
        ${SKILL_CATEGORIES.map((cat, idx) => {
          const items = cat.items || t.skills[`${cat.titleKey}Items`]
          return html`
            <div class="skill-row reveal">
              <div class="skill-row-head">
                <div class="row-num">${String(idx + 1).padStart(2, '0')}</div>
                <div class="row-icon">${icon(cat.iconName)}</div>
                <h3 class="skill-row-title">${t.skills[cat.titleKey]}</h3>
                <span class="row-count">${items.length} ${items.length === 1 ? 'item' : 'items'}</span>
              </div>
              <div class="skill-pills">
                ${items.map((s) => pill(s))}
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
