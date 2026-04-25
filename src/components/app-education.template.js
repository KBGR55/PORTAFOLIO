import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

const CERTS = [
  { name: 'Gestion Agil de Proyectos con Scrum', org: 'Udemy', date: 'Ago. 2025', year: 2025, color: '#a855f7' },
  { name: 'C++ Essentials 1', org: 'Cisco Networking Academy', date: 'Ago. 2025', year: 2025, color: '#00599c' },
  { name: 'GitHub Actions', org: 'Codigo Facilito', date: 'Jul. 2025', year: 2025, color: '#2088ff' },
  { name: 'Curso Profesional de Flutter', org: 'Codigo Facilito', date: 'Jul. 2025', year: 2025, color: '#02569b' },
  { name: 'Fundamentos de Python 1', org: 'Cisco Networking Academy', date: 'May. 2023', year: 2023, color: '#3776ab' },
]

function groupByYear(certs) {
  const groups = {}
  certs.forEach((c) => {
    if (!groups[c.year]) groups[c.year] = []
    groups[c.year].push(c)
  })
  return Object.entries(groups).sort((a, b) => Number(b[0]) - Number(a[0]))
}

export function template(host) {
  const t = getT(host.lang)
  const grouped = groupByYear(CERTS)

  return html`
    <section>
      <div class="section-header">
        <h2 class="section-title">${t.education.title}</h2>
        <div class="section-line"></div>
      </div>

      <!-- HERO EDU CARD -->
      <div class="edu-hero reveal">
        <div class="edu-hero-glow"></div>
        <div class="edu-hero-grid"></div>

        <div class="edu-hero-body">
          <div class="edu-hero-left">
            <div class="edu-icon-big">${icon('graduationCap')}</div>
          </div>
          <div class="edu-hero-right">
            <p class="edu-eyebrow">${t.education.eyebrow}</p>
            <h3 class="edu-title">${t.education.degree}</h3>
            <p class="edu-school">${t.education.school}</p>
            <p class="edu-track">${t.education.track}</p>

            <div class="edu-timeline">
              <span class="edu-date-pill">${t.education.dateStart}</span>
              <div class="edu-progress">
                <div class="edu-progress-fill"></div>
                <span class="edu-progress-cap"></span>
              </div>
              <span class="edu-date-pill">${t.education.dateEnd}</span>
            </div>

            <div class="edu-tags">
              <span class="edu-tag"><span class="dot ok"></span> ${t.education.tagStatus}</span>
              <span class="edu-tag">⏱ ${t.education.tagDuration}</span>
              <span class="edu-tag">${icon('code')} ${t.education.tagTrack}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CERTS HEADER -->
      <div class="section-header" style="margin-top: 4rem;">
        <h2 class="section-title">${t.education.certsTitle}</h2>
        <div class="section-line"></div>
      </div>

      <!-- CERTS GROUPED BY YEAR -->
      <div class="certs-timeline">
        ${grouped.map(
          ([year, items]) => html`
            <div class="cert-year-group">
              <div class="cert-year-label">
                <span class="cert-year">${year}</span>
                <span class="cert-year-count">${items.length}</span>
                <div class="cert-year-line"></div>
              </div>
              <div class="certs-row">
                ${items.map(
                  (c) => html`
                    <div class="cert-badge reveal" style="--c: ${c.color}">
                      <div class="cert-shine"></div>
                      <div class="cert-medal">${icon('award')}</div>
                      <div class="cert-info">
                        <h4>${c.name}</h4>
                        <div class="cert-meta">
                          <span class="cert-org">${c.org}</span>
                          <span class="cert-sep">•</span>
                          <span class="cert-date">${c.date}</span>
                        </div>
                      </div>
                    </div>
                  `,
                )}
              </div>
            </div>
          `,
        )}
      </div>
    </section>
  `
}
