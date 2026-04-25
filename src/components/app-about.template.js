import { html } from 'lit-element'
import { getT } from '../i18n.js'
import { icon } from '../icons.js'

const INFO_ITEMS = [
  { iconName: 'mail', labelKey: null, label: 'Email', value: 'brigithgonzaga501@gmail.com' },
  { iconName: 'globe', labelKey: 'languages', valueKey: 'langValue' },
]

export function template(host) {
  const t = getT(host.lang)
  return html`
    <section>
      <div class="section-header">
        <h2 class="section-title">${t.about.title}</h2>
        <div class="section-line"></div>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <!-- Dev profile code card -->
          <div class="bio-code">
            <div class="bio-code-header">
              <span class="term-dot r"></span>
              <span class="term-dot y"></span>
              <span class="term-dot g"></span>
              <span class="bio-code-title">karen.profile.js</span>
            </div>
            <div class="bio-code-body">
              <span class="line"><span class="comment">${t.about.codeComment}</span></span>
              <span class="line"><span class="kw">const</span> <span class="var">karen</span> <span class="op">=</span> {</span>
              <span class="line indent"><span class="key">status</span>: <span class="str">'${t.about.profileStatus}'</span>,</span>
              <span class="line indent"><span class="key">role</span>: <span class="str">'${t.about.profileRole}'</span>,</span>
              <span class="line indent"><span class="key">location</span>: <span class="str">'Loja, EC'</span>,</span>
              <span class="line indent"><span class="key">loves</span>: [${t.about.profileLoves.map(
                (v, i) => html`<span class="str">${v}</span>${i < t.about.profileLoves.length - 1 ? ', ' : ''}`,
              )}],</span>
              <span class="line indent"><span class="key">coffeeMl</span>: <span class="num">Infinity</span>,</span>
              <span class="line">};</span>
            </div>
          </div>

          <p>${t.about.p1}</p>
          <p>${t.about.p2}</p>

          <div class="about-info">
            ${INFO_ITEMS.map(
              (item) => html`
                <div class="info-item">
                  <div class="info-icon">${icon(item.iconName)}</div>
                  <div class="info-text">
                    <span class="info-label">${item.label || t.about[item.labelKey]}</span>
                    <span class="info-value">${item.valueKey ? t.about[item.valueKey] : item.value}</span>
                  </div>
                </div>
              `,
            )}
          </div>
        </div>

        <div class="about-cards">
          <div class="about-card reveal" data-color="purple">
            <div class="about-card-icon">${icon('code')}</div>
            <h4>Full Stack</h4>
            <p>${t.about.cardFullstack}</p>
            <div class="about-card-shine"></div>
          </div>
          <div class="about-card reveal delay-1" data-color="blue">
            <div class="about-card-icon">${icon('smartphone')}</div>
            <h4>Mobile</h4>
            <p>${t.about.cardMobile}</p>
            <div class="about-card-shine"></div>
          </div>
          <div class="about-card reveal delay-2" data-color="green">
            <div class="about-card-icon">${icon('checkCircle')}</div>
            <h4>QA Testing</h4>
            <p>${t.about.cardQA}</p>
            <div class="about-card-shine"></div>
          </div>
          <div class="about-card reveal delay-3" data-color="orange">
            <div class="about-card-icon">${icon('clipboard')}</div>
            <h4>${t.about.cardManagement}</h4>
            <p>${t.about.cardManagementDesc}</p>
            <div class="about-card-shine"></div>
          </div>
        </div>
      </div>
    </section>
  `
}
