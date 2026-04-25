import { LitElement, css, unsafeCSS } from 'lit-element'
import { sectionStyles, revealStyles } from '../shared-styles.js'
import { RevealMixin } from '../reveal-mixin.js'
import localCss from './app-education.css?inline'
import { template } from './app-education.template.js'

export class AppEducation extends RevealMixin(LitElement) {
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

customElements.define('app-education', AppEducation)
