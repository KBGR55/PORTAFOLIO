import { html } from 'lit-element'
import { getT } from '../i18n.js'

const NAV_ITEMS = [
  { id: 'inicio', key: 'inicio' },
  { id: 'sobre-mi', key: 'about' },
  { id: 'experiencia', key: 'experience' },
  { id: 'proyectos', key: 'projects' },
  { id: 'habilidades', key: 'skills' },
  { id: 'educacion', key: 'education' },
  { id: 'contacto', key: 'contact' },
]

export function template(host) {
  const t = getT(host.lang)
  return html`
    <nav>
      <div class="nav-logo" @click="${() => host._emitNav('inicio')}">KG</div>
      <div class="nav-right">
        <ul class="nav-links ${host.menuOpen ? 'open' : ''}">
          ${NAV_ITEMS.map(
            (item) => html`
              <li>
                <a
                  class="${host.activeSection === item.id ? 'active' : ''}"
                  @click="${() => host._emitNav(item.id)}"
                >${t.nav[item.key]}</a>
              </li>
            `,
          )}
        </ul>
        <button class="lang-btn" @click="${() => host._toggleLang()}">
          ${host.lang === 'es' ? 'EN' : 'ES'}
        </button>
        <button
          class="hamburger ${host.menuOpen ? 'open' : ''}"
          @click="${() => (host.menuOpen = !host.menuOpen)}"
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `
}
