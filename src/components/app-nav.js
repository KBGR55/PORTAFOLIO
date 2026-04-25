import { LitElement, css, unsafeCSS } from 'lit-element'
import styles from './app-nav.css?inline'
import { template } from './app-nav.template.js'

export class AppNav extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
      activeSection: { type: String, attribute: 'active-section' },
      scrolled: { type: Boolean, reflect: true },
      menuOpen: { type: Boolean },
    }
  }

  constructor() {
    super()
    this.lang = 'es'
    this.activeSection = 'inicio'
    this.scrolled = false
    this.menuOpen = false
  }

  static get styles() {
    return css`${unsafeCSS(styles)}`
  }

  _emitNav(id) {
    this.menuOpen = false
    this.dispatchEvent(
      new CustomEvent('nav-click', {
        detail: { id },
        bubbles: true,
        composed: true,
      }),
    )
  }

  _toggleLang() {
    this.dispatchEvent(
      new CustomEvent('lang-toggle', { bubbles: true, composed: true }),
    )
  }

  render() {
    return template(this)
  }
}

customElements.define('app-nav', AppNav)
