import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { sharedAnimations } from '../shared-styles.js'
import localCss from './status-bar.css?inline'

const ROLES = [
  'Full Stack Developer',
  'React + Next.js',
  'Python + Django',
  'Node.js + TypeScript',
  'Mobile Developer',
  'QA Engineer',
]

export class StatusBar extends LitElement {
  static get properties() {
    return {
      uptimeSec: { type: Number },
      cpuLoad: { type: Number },
      roleIdx: { type: Number },
    }
  }

  constructor() {
    super()
    this.uptimeSec = 0
    this.cpuLoad = 42
    this.roleIdx = 0
  }

  connectedCallback() {
    super.connectedCallback()
    this._timer = setInterval(() => {
      this.uptimeSec += 1
      this.cpuLoad = 30 + Math.floor(Math.random() * 45)
    }, 1000)
    this._roleTimer = setInterval(() => {
      this.roleIdx = (this.roleIdx + 1) % ROLES.length
    }, 4000)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this._timer) clearInterval(this._timer)
    if (this._roleTimer) clearInterval(this._roleTimer)
  }

  _fmtUptime() {
    const m = Math.floor(this.uptimeSec / 60)
    const s = this.uptimeSec % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  static get styles() {
    return [sharedAnimations, css`${unsafeCSS(localCss)}`]
  }

  render() {
    return html`
      <div class="status-left">
        <span class="status-item"><span class="status-dot"></span> main</span>
        <span class="status-item">⎇ ${ROLES[this.roleIdx]}</span>
        <span class="status-item hide-sm">UTF-8</span>
        <span class="status-item hide-sm">LF</span>
      </div>
      <div class="status-right">
        <span class="status-item">CPU ${this.cpuLoad}%</span>
        <span class="status-item">⏱ ${this._fmtUptime()}</span>
        <span class="status-item hide-sm">v1.0.0</span>
        <span class="status-item">🟢 Online</span>
      </div>
    `
  }
}

customElements.define('status-bar', StatusBar)
