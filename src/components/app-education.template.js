import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

const CERTS = [
  { name: 'Gestion Agil de Proyectos con Scrum', org: 'Udemy', date: 'Ago. 2025' },
  { name: 'C++ Essentials 1', org: 'Cisco Networking Academy', date: 'Ago. 2025' },
  { name: 'GitHub Actions', org: 'Codigo Facilito', date: 'Jul. 2025' },
  { name: 'Curso Profesional de Flutter', org: 'Codigo Facilito', date: 'Jul. 2025' },
  { name: 'Fundamentos de Python 1', org: 'Cisco Networking Academy', date: 'May. 2023' },
]

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <p class="section-label">${t.education.label}</p>
        <h2 class="section-title">${t.education.title}</h2>
        <div class="section-line"></div>
      </div>
      <div class="edu-card">
        <div class="edu-icon">${icon('graduationCap')}</div>
        <div class="edu-info">
          <h3>${t.education.degree}</h3>
          <p class="edu-school">${t.education.school}</p>
          <p class="edu-detail">${t.education.track}</p>
        </div>
        <span class="edu-date-badge">${t.education.date}</span>
      </div>

      <div class="section-header" style="margin-top: 4rem;">
        <p class="section-label">${t.education.certsLabel}</p>
        <h2 class="section-title">${t.education.certsTitle}</h2>
        <div class="section-line"></div>
      </div>
      <div class="certs-grid">
        ${CERTS.map(
          (c) => html`
            <div class="cert-card reveal">
              <div class="cert-icon">${icon('award')}</div>
              <div class="cert-info">
                <h4>${c.name}</h4>
                <p>${c.org} • ${c.date}</p>
              </div>
            </div>
          `,
        )}
      </div>
    </section>
  `
}
