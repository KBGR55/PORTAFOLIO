import { html } from 'lit-element'
import { getT } from '../i18n.js'
import fotoEs from '../../public/foto.jpeg'
import fotoEn from '../../public/foto-ondas.png'

export function template(host) {
  const t = getT(host.lang)
  const foto = host.lang === 'en' ? fotoEn : fotoEs
  return html`
    <div class="hero-bg"></div>
    <floating-snippets></floating-snippets>
    <section>
      <div class="hero-content">
        <div class="hero-intro">
          <div class="hero-header">
            <div class="hero-photo-wrapper">
              <div class="hero-photo-ring">
                <img class="hero-photo" src="${foto}" alt="Karen Brigith Gonzaga Rivas" />
              </div>
            </div>
            <div class="hero-name">
              <div class="hero-badge">
                <span class="dot"></span> ${t.hero.badge}
              </div>
              <h1 class="hero-title">
                Karen Brigith<br /><span class="purple">Gonzaga Rivas</span>
              </h1>
            </div>
          </div>
          <p class="hero-subtitle">
            <span class="typed-wrap">
              <span class="prefix">$</span>
              <span>${host.typedText}</span>
              <span class="typed-cursor ${host.cursorBlink ? '' : 'off'}"></span>
            </span>
          </p>
          <p class="hero-description">${t.hero.description}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="mailto:brigithgonzaga501@gmail.com">${t.hero.cta}</a>
            <a class="btn btn-outline" href="https://github.com/KBGR55" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div class="hero-cta">
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">+2</div>
              <div class="stat-label">${t.hero.statYears}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">+8</div>
              <div class="stat-label">${t.hero.statTech}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">+5</div>
              <div class="stat-label">${t.hero.statProjects}</div>
            </div>
          </div>
          <div class="terminal-slot">
            <app-terminal></app-terminal>
          </div>
        </div>
      </div>
    </section>
  `
}
