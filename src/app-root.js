import { LitElement, html, css } from 'lit-element'
import './components/code-rain.js'
import './components/app-nav.js'
import './components/app-hero.js'
import './components/app-about.js'
import './components/app-experience.js'
import './components/app-projects.js'
import './components/app-skills.js'
import './components/app-education.js'
import './components/app-contact.js'
import './components/app-footer.js'
import './components/status-bar.js'

const SECTION_IDS = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'habilidades', 'educacion', 'contacto']

export class AppRoot extends LitElement {
  static get properties() {
    return {
      activeSection: { type: String },
      headerScrolled: { type: Boolean },
      lang: { type: String },
    }
  }

  constructor() {
    super()
    this.activeSection = 'inicio'
    this.headerScrolled = false
    this.lang = 'es'
  }

  connectedCallback() {
    super.connectedCallback()
    this._boundScroll = this._handleScroll.bind(this)
    window.addEventListener('scroll', this._boundScroll, { passive: true })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('scroll', this._boundScroll)
  }

  _handleScroll() {
    this.headerScrolled = window.scrollY > 50
    let current = SECTION_IDS[0]
    for (const id of SECTION_IDS) {
      const el = this.shadowRoot.getElementById(id)
      if (!el) continue
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      if (window.scrollY >= top) current = id
    }
    this.activeSection = current
  }

  _onNavClick(e) {
    const id = e.detail.id
    const el = this.shadowRoot.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  _onLangToggle() {
    this.lang = this.lang === 'es' ? 'en' : 'es'
  }

  static get styles() {
    return css`
      :host { display: block; }
    `
  }

  render() {
    return html`
      <code-rain></code-rain>
      <app-nav
        lang="${this.lang}"
        active-section="${this.activeSection}"
        ?scrolled="${this.headerScrolled}"
        @nav-click="${this._onNavClick}"
        @lang-toggle="${this._onLangToggle}"
      ></app-nav>

      <app-hero id="inicio" lang="${this.lang}"></app-hero>
      <app-about id="sobre-mi" lang="${this.lang}"></app-about>
      <app-experience id="experiencia" lang="${this.lang}"></app-experience>
      <app-projects id="proyectos" lang="${this.lang}"></app-projects>
      <app-skills id="habilidades" lang="${this.lang}"></app-skills>
      <app-education id="educacion" lang="${this.lang}"></app-education>
      <app-contact id="contacto" lang="${this.lang}"></app-contact>
      <app-footer lang="${this.lang}"></app-footer>

      <status-bar></status-bar>
    `
  }
}

customElements.define('app-root', AppRoot)
