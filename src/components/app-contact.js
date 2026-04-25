import { LitElement, css, unsafeCSS } from 'lit-element'
import { sectionStyles, revealStyles } from '../shared-styles.js'
import { RevealMixin } from '../reveal-mixin.js'
import localCss from './app-contact.css?inline'
import { template } from './app-contact.template.js'

export class AppContact extends RevealMixin(LitElement) {
  static get properties() {
    return { lang: { type: String } }
  }

  constructor() {
    super()
    this.lang = 'es'
  }

  updated(changed) {
    if (changed.has('lang')) this._setupReveal()
  }

  static get styles() {
    return [sectionStyles, revealStyles, css`${unsafeCSS(localCss)}`]
  }

  render() {
    return template(this)
  }
}

customElements.define('app-contact', AppContact)
