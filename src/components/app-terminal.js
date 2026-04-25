import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { sharedAnimations, terminalStyles } from '../shared-styles.js'
import localCss from './app-terminal.css?inline'

const SEQUENCE = [
  { type: 'cmd', text: 'npm run dev' },
  { type: 'out', text: '> portafolio@1.0.0 dev' },
  { type: 'out', text: '> vite' },
  { type: 'info', text: 'VITE v5.0.0  ready in 312 ms' },
  { type: 'ok', text: '→ Local:   http://localhost:5173/' },
  { type: 'ok', text: '→ Network: ready' },
  { type: 'cmd', text: 'git status' },
  { type: 'out', text: 'On branch main' },
  { type: 'out', text: 'nothing to commit, working tree clean' },
  { type: 'cmd', text: 'curl /api/portfolio.json' },
  { type: 'json', text: '{ "name": "Karen Gonzaga", "stack": ["React","Node","Python"] }' },
  { type: 'cmd', text: 'docker ps' },
  { type: 'ok', text: 'CONTAINER  STATUS         IMAGE' },
  { type: 'out', text: 'a1b2c3d4   Up 2 hours     portfolio:latest' },
]

export class AppTerminal extends LitElement {
  static get properties() {
    return {
      lines: { type: Array },
      cursorBlink: { type: Boolean },
    }
  }

  constructor() {
    super()
    this.lines = []
    this.cursorBlink = true
  }

  connectedCallback() {
    super.connectedCallback()
    this._startConsole()
    this._cursorTimer = setInterval(() => {
      this.cursorBlink = !this.cursorBlink
    }, 530)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this._consoleTimer) clearTimeout(this._consoleTimer)
    if (this._cursorTimer) clearInterval(this._cursorTimer)
  }

  _startConsole() {
    let i = 0
    const push = () => {
      this.lines = [...this.lines, SEQUENCE[i % SEQUENCE.length]].slice(-9)
      i += 1
      this._consoleTimer = setTimeout(push, 1100)
    }
    push()
  }

  static get styles() {
    return [sharedAnimations, terminalStyles, css`${unsafeCSS(localCss)}`]
  }

  render() {
    return html`
      <div class="terminal">
        <div class="terminal-bar">
          <span class="term-dot r"></span>
          <span class="term-dot y"></span>
          <span class="term-dot g"></span>
          <span class="terminal-title">karen@dev: ~/portfolio</span>
        </div>
        <div class="terminal-body">
          ${this.lines.map(
            (l) => html`<span class="term-line ${l.type}">${l.text}</span>`,
          )}
          <div class="term-prompt">
            <span class="branch">main</span>
            <span class="arrow">❯</span>
            <span class="cursor ${this.cursorBlink ? '' : 'off'}"></span>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('app-terminal', AppTerminal)
