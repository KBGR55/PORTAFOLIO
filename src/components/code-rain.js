import { LitElement, html, css, unsafeCSS } from 'lit-element'
import styles from './code-rain.css?inline'

const SAMPLES = [
  'const dev = "Karen";', 'function() { }', '<App />', 'await fetch()',
  'git push', 'npm run', 'docker up', 'export default',
  'return <div/>', 'useState()', '0xDEADBEEF', '() => {}',
  'SELECT *', 'POST /api', 'try { } catch', 'import React',
  'while(true)', 'class Dev {}',
]

export class CodeRain extends LitElement {
  static get properties() {
    return { columns: { type: Number } }
  }

  constructor() {
    super()
    this.columns = 18
  }

  static get styles() {
    return css`${unsafeCSS(styles)}`
  }

  render() {
    const drops = []
    for (let i = 0; i < this.columns; i += 1) {
      const left = (i / this.columns) * 100 + Math.random() * 4
      const dur = 8 + Math.random() * 10
      const delay = -Math.random() * dur
      const text = SAMPLES[i % SAMPLES.length]
      drops.push(html`
        <span style="left:${left}%; animation-duration:${dur}s; animation-delay:${delay}s;">${text}</span>
      `)
    }
    return html`${drops}`
  }
}

customElements.define('code-rain', CodeRain)
