import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { getT } from '../i18n.js'
import styles from './app-footer.css?inline'

export class AppFooter extends LitElement {
  static get properties() {
    return { lang: { type: String } }
  }

  constructor() {
    super()
    this.lang = 'es'
  }

  static get styles() {
    return css`${unsafeCSS(styles)}`
  }

  render() {
    const t = getT(this.lang)
    return html`
      <footer>
        <p>&copy; 2026 Karen Brigith Gonzaga Rivas. ${t.footer}</p>
      </footer>
    `
  }
}

customElements.define('app-footer', AppFooter)
