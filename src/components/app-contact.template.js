import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

const SOCIALS = [
  { iconName: 'linkedin', label: 'LinkedIn', value: '/in/kbgr55', href: 'https://linkedin.com/in/kbgr55' },
  { iconName: 'github', label: 'GitHub', value: '/KBGR55', href: 'https://github.com/KBGR55' },
]

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <h2 class="section-title">${t.contact.title}</h2>
        <div class="section-line"></div>
      </div>

      <div class="contact-wrap">
        <p class="contact-eyebrow">$ ./connect.sh</p>
        <p class="contact-lead">${t.contact.lead}</p>

        <a class="contact-email" href="mailto:brigithgonzaga501@gmail.com">
          <span class="contact-email-arrow">→</span>
          <span class="contact-email-text">brigithgonzaga501@gmail.com</span>
          <span class="contact-email-icon">${icon('mail')}</span>
        </a>

        <div class="contact-socials">
          ${SOCIALS.map(
            (s) => html`
              <a class="contact-social" href="${s.href}" target="_blank" rel="noopener noreferrer">
                <span class="contact-social-icon">${icon(s.iconName)}</span>
                <span class="contact-social-text">
                  <span class="contact-social-label">${s.label}</span>
                  <span class="contact-social-value">${s.value}</span>
                </span>
              </a>
            `,
          )}
        </div>
      </div>
    </section>
  `
}
