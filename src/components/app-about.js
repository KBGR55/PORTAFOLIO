import { LitElement, css, unsafeCSS } from 'lit-element'
import { sectionStyles, revealStyles, cardIconStyles } from '../shared-styles.js'
import { RevealMixin } from '../reveal-mixin.js'
import localCss from './app-about.css?inline'
import { template } from './app-about.template.js'

export class AppAbout extends RevealMixin(LitElement) {
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
    return [sectionStyles, revealStyles, cardIconStyles, css`${unsafeCSS(localCss)}`]
  }

  render() {
    return template(this)
  }
}

customElements.define('app-about', AppAbout)
