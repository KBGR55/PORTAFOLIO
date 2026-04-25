import { LitElement, html, css, unsafeCSS } from 'lit-element'
import styles from './floating-snippets.css?inline'

const SNIPS = [
  { txt: '{ stack: "fullstack" }', top: '12%', left: '6%', dur: 11 },
  { txt: 'await ship()', top: '70%', left: '4%', dur: 9 },
  { txt: '<Component />', top: '20%', left: '85%', dur: 13 },
  { txt: 'return success;', top: '65%', left: '88%', dur: 10 },
  { txt: '// TODO: deploy', top: '40%', left: '92%', dur: 14 },
]

export class FloatingSnippets extends LitElement {
  static get styles() {
    return css`${unsafeCSS(styles)}`
  }

  render() {
    return html`
      ${SNIPS.map(
        (s) => html`
          <div
            class="float-snip"
            style="top:${s.top}; left:${s.left}; animation-duration:${s.dur}s;"
          >
            ${s.txt}
          </div>
        `,
      )}
    `
  }
}

customElements.define('floating-snippets', FloatingSnippets)
