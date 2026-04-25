import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <p class="section-label">${t.contact.label}</p>
        <h2 class="section-title">${t.contact.title}</h2>
        <div class="section-line"></div>
      </div>
      <div class="contact-grid">
        <a class="contact-card reveal" href="mailto:brigithgonzaga501@gmail.com">
          <div class="contact-icon">${icon('mail')}</div>
          <span class="contact-label">Email</span>
          <span class="contact-value">brigithgonzaga501@gmail.com</span>
        </a>
        <a class="contact-card reveal" href="tel:+593980735353">
          <div class="contact-icon">${icon('phone')}</div>
          <span class="contact-label">${t.contact.phone}</span>
          <span class="contact-value">+593 98 073 5353</span>
        </a>
        <a class="contact-card reveal" href="https://linkedin.com/in/kbgr55" target="_blank" rel="noopener noreferrer">
          <div class="contact-icon">${icon('linkedin')}</div>
          <span class="contact-label">LinkedIn</span>
          <span class="contact-value">linkedin.com/in/kbgr55</span>
        </a>
        <a class="contact-card reveal" href="https://github.com/KBGR55" target="_blank" rel="noopener noreferrer">
          <div class="contact-icon">${icon('github')}</div>
          <span class="contact-label">GitHub</span>
          <span class="contact-value">github.com/KBGR55</span>
        </a>
      </div>
    </section>
  `
}
