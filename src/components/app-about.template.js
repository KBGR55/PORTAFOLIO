import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <p class="section-label">${t.about.label}</p>
        <h2 class="section-title">${t.about.title}</h2>
        <div class="section-line"></div>
      </div>
      <div class="about-grid">
        <div class="about-text">
          <p>${t.about.p1}</p>
          <p>${t.about.p2}</p>
          <div class="about-info">
            <div class="info-item">
              <span class="info-label">${t.about.location}</span>
              <span class="info-value">Loja, Ecuador</span>
            </div>
            <div class="info-item">
              <span class="info-label">Email</span>
              <span class="info-value">brigithgonzaga501@gmail.com</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t.about.phone}</span>
              <span class="info-value">+593 98 073 5353</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t.about.languages}</span>
              <span class="info-value">${t.about.langValue}</span>
            </div>
          </div>
        </div>
        <div class="about-cards">
          <div class="about-card reveal">
            <div class="about-card-icon">${icon('code')}</div>
            <h4>Full Stack</h4>
            <p>${t.about.cardFullstack}</p>
          </div>
          <div class="about-card reveal delay-1">
            <div class="about-card-icon">${icon('smartphone')}</div>
            <h4>Mobile</h4>
            <p>${t.about.cardMobile}</p>
          </div>
          <div class="about-card reveal delay-2">
            <div class="about-card-icon">${icon('checkCircle')}</div>
            <h4>QA Testing</h4>
            <p>${t.about.cardQA}</p>
          </div>
          <div class="about-card reveal delay-3">
            <div class="about-card-icon">${icon('clipboard')}</div>
            <h4>${t.about.cardManagement}</h4>
            <p>${t.about.cardManagementDesc}</p>
          </div>
        </div>
      </div>
    </section>
  `
}
