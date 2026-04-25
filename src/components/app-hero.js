import { LitElement, css, unsafeCSS } from 'lit-element'
import { sharedAnimations, buttonStyles } from '../shared-styles.js'
import localCss from './app-hero.css?inline'
import { template } from './app-hero.template.js'
import './app-terminal.js'
import './floating-snippets.js'

const ROLES = [
  'Full Stack Developer',
  'React + Next.js',
  'Python + Django',
  'Node.js + TypeScript',
  'Mobile Developer',
  'QA Engineer',
]

export class AppHero extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
      typedText: { type: String },
      typedRole: { type: Number },
      cursorBlink: { type: Boolean },
    }
  }

  constructor() {
    super()
    this.lang = 'es'
    this.typedText = ''
    this.typedRole = 0
    this.cursorBlink = true
  }

  connectedCallback() {
    super.connectedCallback()
    this._startTyping()
    this._cursorTimer = setInterval(() => {
      this.cursorBlink = !this.cursorBlink
    }, 530)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this._typeTimer) clearTimeout(this._typeTimer)
    if (this._cursorTimer) clearInterval(this._cursorTimer)
  }

  _startTyping() {
    let charIdx = 0
    const tick = () => {
      const role = ROLES[this.typedRole]
      if (charIdx <= role.length) {
        this.typedText = role.slice(0, charIdx)
        charIdx += 1
        this._typeTimer = setTimeout(tick, 80)
      } else {
        this._typeTimer = setTimeout(() => {
          const erase = () => {
            if (this.typedText.length > 0) {
              this.typedText = this.typedText.slice(0, -1)
              this._typeTimer = setTimeout(erase, 35)
            } else {
              this.typedRole = (this.typedRole + 1) % ROLES.length
              charIdx = 0
              this._typeTimer = setTimeout(tick, 250)
            }
          }
          erase()
        }, 1600)
      }
    }
    tick()
  }

  static get styles() {
    return [sharedAnimations, buttonStyles, css`${unsafeCSS(localCss)}`]
  }

  render() {
    return template(this)
  }
}

customElements.define('app-hero', AppHero)
