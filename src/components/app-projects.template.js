import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

function projectCard(host, repo) {
  const t = getT(host.lang)
  const langColor = host._langColor(repo.language)
  const styleVar = `--lang-color: ${langColor};`
  return html`
    <article class="project-card reveal" style="${styleVar}">
      <header class="card-top">
        <div class="folder-icon">${icon('folder')}</div>
        <div class="card-stats-top">
          <span class="stat"><span class="ico">${icon('star')}</span>${repo.stars}</span>
          <span class="stat"><span class="ico">${icon('gitFork')}</span>${repo.forks}</span>
        </div>
      </header>

      <div class="card-titlebar">
        <h3 class="card-title">${repo.name}</h3>
        ${repo.homepage ? html`<span class="live-tag"><span class="live-dot"></span> Live</span>` : ''}
      </div>

      <p class="card-desc">${repo.description}</p>

      <div class="card-foot">
        <span class="lang-chip">
          <span class="lang-dot"></span>
          ${repo.language || '—'}
        </span>
      </div>

      <div class="card-actions">
        <a class="btn-action ghost" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
          ${icon('github')} <span>${t.projects.code}</span>
        </a>
        ${repo.homepage
          ? html`
              <a class="btn-action filled" href="${repo.homepage}" target="_blank" rel="noopener noreferrer">
                ${icon('externalLink')} <span>${t.projects.live}</span>
              </a>
            `
          : ''}
      </div>
    </article>
  `
}

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
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
