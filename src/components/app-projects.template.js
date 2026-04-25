import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

function projectCard(host, repo) {
  const t = getT(host.lang)
  return html`
    <div class="project-card reveal">
      <div class="project-header">
        ${icon('folder')}
        <span class="project-name">${repo.name}</span>
        ${repo.homepage ? html`<span class="project-live-badge">● Live</span>` : ''}
      </div>
      <p class="project-desc">${repo.description || t.projects.noDescription}</p>
      ${repo.topics.length
        ? html`
            <div class="project-topics">
              ${repo.topics.slice(0, 5).map((tp) => html`<span class="project-topic">#${tp}</span>`)}
            </div>
          `
        : ''}
      <div class="project-meta">
        ${repo.language
          ? html`
              <span class="project-lang">
                <span class="lang-dot" style="background:${host._langColor(repo.language)}; color:${host._langColor(repo.language)}"></span>
                ${repo.language}
              </span>
            `
          : ''}
        <span class="project-lang">${icon('star')} ${repo.stars}</span>
        <span class="project-lang">${icon('gitFork')} ${repo.forks}</span>
      </div>
      <div class="project-actions">
        <a class="project-btn" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
          ${icon('github')} ${t.projects.code}
        </a>
        ${repo.homepage
          ? html`
              <a class="project-btn live" href="${repo.homepage}" target="_blank" rel="noopener noreferrer">
                ${icon('externalLink')} ${t.projects.live}
              </a>
            `
          : ''}
      </div>
    </div>
  `
}

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <p class="section-label">${t.projects.label}</p>
        <h2 class="section-title">${t.projects.title}</h2>
        <div class="section-line"></div>
      </div>
      ${host.loading
        ? html`<div class="projects-loading"><span class="spinner"></span> ${t.projects.loading}</div>`
        : host.error
        ? html`<div class="projects-error">⚠ ${t.projects.error}: ${host.error}</div>`
        : host.repos.length === 0
        ? html`<div class="projects-loading">${t.projects.empty}</div>`
        : html`
            <div class="projects-grid">
              ${host.repos.map((r) => projectCard(host, r))}
            </div>
            <div class="projects-see-all">
              <a class="btn btn-outline" href="https://github.com/${host.user}" target="_blank" rel="noopener noreferrer">
                ${icon('github')} ${t.projects.seeAll}
              </a>
            </div>
          `}
    </section>
  `
}
