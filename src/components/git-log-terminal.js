import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { sharedAnimations, terminalStyles, revealStyles } from '../shared-styles.js'
import { RevealMixin } from '../reveal-mixin.js'
import localCss from './git-log-terminal.css?inline'

const COMMITS = [
  { hash: 'a3f2c91', msg: 'feat(portfolio): ship dark theme + animations', branch: 'main' },
  { hash: '8e1b774', msg: 'feat(sudial): WhatsApp bot management module', branch: 'develop' },
  { hash: '5d9a02c', msg: 'feat(ana): inventory + e-signature flow', branch: 'feature/ana' },
  { hash: '21fc4e8', msg: 'fix(api): retry policy on rate-limit 429s', branch: 'hotfix' },
  { hash: 'c70f156', msg: 'refactor: migrate legacy Node 16 -> 20', branch: 'main' },
  { hash: 'f02ab9d', msg: 'test: regression suite for billing module', branch: 'qa' },
]

export class GitLogTerminal extends RevealMixin(LitElement) {
  static get properties() {
    return { cursorBlink: { type: Boolean } }
  }

  constructor() {
    super()
    this.cursorBlink = true
  }

  connectedCallback() {
    super.connectedCallback()
    this._cursorTimer = setInterval(() => {
      this.cursorBlink = !this.cursorBlink
    }, 530)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this._cursorTimer) clearInterval(this._cursorTimer)
  }

  static get styles() {
    return [sharedAnimations, terminalStyles, revealStyles, css`${unsafeCSS(localCss)}`]
  }

  render() {
    return html`
      <div class="terminal reveal">
        <div class="terminal-bar">
          <span class="term-dot r"></span>
          <span class="term-dot y"></span>
          <span class="term-dot g"></span>
          <span class="terminal-title">git log --oneline --graph</span>
        </div>
        <div class="terminal-body">
          <span class="term-line cmd">git log --oneline --decorate</span>
          ${COMMITS.map(
            (g, i) => html`
              <div class="gitlog-line" style="animation-delay:${i * 0.08}s">
                <span class="hash">${g.hash}</span>
                <span class="branch">${g.branch}</span>
                <span class="msg">${g.msg}</span>
              </div>
            `,
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

customElements.define('git-log-terminal', GitLogTerminal)
