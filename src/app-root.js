import { LitElement, html, css } from 'lit-element'
import foto from '../public/foto.jpeg'

const i18n = {
  es: {
    nav: { inicio: 'Inicio', about: 'Sobre Mi', experience: 'Experiencia', skills: 'Habilidades', education: 'Educacion', contact: 'Contacto' },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      subtitle: 'Ingeniera en Computacion \u2022 Full Stack Developer',
      description: 'Desarrolladora full stack con experiencia en React, Next.js, Angular, Django, Node.js, Python y mas. Apasionada por crear soluciones tecnologicas de impacto.',
      cta: 'Contactame',
      statYears: 'Anos exp.',
      statTech: 'Tecnologias',
      statProjects: 'Proyectos',
    },
    about: {
      label: 'Conoceme',
      title: 'Sobre Mi',
      p1: 'Ingeniera en Ciencias de la Computacion con itinerario en Desarrollo de Software por la Universidad Nacional de Loja. Cuento con experiencia en proyectos academicos, de vinculacion y profesionales.',
      p2: 'Me caracterizo por mi responsabilidad, pensamiento logico, adaptabilidad y capacidad para trabajar en equipo. Siempre estoy en busqueda de nuevos desafios que me permitan crecer profesionalmente.',
      location: 'Ubicacion',
      phone: 'Telefono',
      languages: 'Idiomas',
      langValue: 'Espanol (Nativo), Ingles (Basico)',
      cardFullstack: 'Desarrollo frontend y backend con tecnologias modernas',
      cardMobile: 'Apps moviles con Flutter y React Native',
      cardQA: 'Pruebas funcionales, de regresion y gestion de calidad',
      cardManagement: 'Gestion',
      cardManagementDesc: 'Scrum, planificacion agil y coordinacion de proyectos',
    },
    experience: {
      label: 'Trayectoria',
      title: 'Experiencia Profesional',
      job1Role: 'Programadora Junior de Software',
      job1Date: 'Ene 2026 \u2013 Abr 2026',
      job1Company: 'Dataglov S.A.S. \u2022 Presencial, jornada completa',
      job1Desc: [
        'Desarrollo y mantenimiento de Sudial, plataforma de gestion de chatbots de WhatsApp, en backend y frontend.',
        'Implementacion de modulos completos, correccion de errores y optimizacion de funcionalidades.',
        'Desarrollo de aplicacion movil con React Native para agentes de atencion al cliente.',
      ],
      job2Role: 'Gestora de Proyectos | QA | Frontend Dev',
      job2Date: 'Sep 2025 \u2013 Ene 2026',
      job2Desc: [
        'Desarrollo frontend en Angular para ANA, sistema de gestion de inventarios, facturacion y firmas electronicas.',
        'Gestion y coordinacion de proyectos con Jira, planificacion agil y control de incidencias.',
        'Aseguramiento de calidad mediante pruebas funcionales y de regresion.',
      ],
      job3Role: 'Desarrolladora Junior \u2013 Node.js',
      job3Date: 'Feb 2024 \u2013 Ago 2025',
      job3Company: 'ARAnet \u2022 Pangui, Ecuador (Remoto)',
      job3Desc: [
        'Desarrollo y mantenimiento de sistema de gestion interna: registro de clientes, planes de internet, facturacion.',
        'Colaboracion en equipo remoto para implementacion de funcionalidades y mejoras.',
      ],
      job4Role: 'Desarrolladora Full Stack \u2013 Titulacion',
      job4Date: 'Mar 2024 \u2013 Ago 2025',
      job4Company: 'Universidad Nacional de Loja \u2022 Proyecto de Vinculacion',
      job4Desc: [
        'Desarrollo de aplicacion web para gestion sostenible del ruido vehicular en la ciudad de Loja.',
        'Backend en Jakarta EE y frontend en Flutter.',
      ],
      job5Role: 'Practicas Preprofesionales',
      job5Date: 'Nov 2023 \u2013 Ene 2024',
      job5Company: 'Direccion de TI \u2022 Universidad Nacional de Loja',
      job5Desc: [
        'Desarrollo del Visor Climatico de la Universidad Nacional de Loja con Django (backend y frontend).',
      ],
    },
    skills: {
      label: 'Competencias',
      title: 'Habilidades Tecnicas',
      languages: 'Lenguajes',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de Datos',
      tools: 'Herramientas',
      qa: 'QA / Testing',
      qaItems: ['Pruebas funcionales', 'Pruebas de regresion', 'Gestion de pruebas'],
      creativity: 'Creatividad',
      leadership: 'Liderazgo',
      problemSolving: 'Resolucion de problemas',
      teamwork: 'Trabajo en equipo',
      communication: 'Comunicacion efectiva',
      fastLearning: 'Aprendizaje rapido',
    },
    education: {
      label: 'Formacion',
      title: 'Educacion',
      degree: 'Ingenieria en Ciencias de la Computacion',
      school: 'Universidad Nacional de Loja',
      track: 'Itinerario: Desarrollo de Software',
      date: 'Abr 2021 \u2013 Oct 2025',
      certsLabel: 'Formacion complementaria',
      certsTitle: 'Certificaciones',
    },
    contact: {
      label: 'Hablemos',
      title: 'Contacto',
      phone: 'Telefono',
    },
    footer: 'Todos los derechos reservados.',
  },
  en: {
    nav: { inicio: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', education: 'Education', contact: 'Contact' },
    hero: {
      badge: 'Available for new projects',
      subtitle: 'Computer Science Engineer \u2022 Full Stack Developer',
      description: 'Full stack developer experienced in React, Next.js, Angular, Django, Node.js, Python and more. Passionate about building impactful tech solutions.',
      cta: 'Contact me',
      statYears: 'Years exp.',
      statTech: 'Technologies',
      statProjects: 'Projects',
    },
    about: {
      label: 'Get to know me',
      title: 'About Me',
      p1: 'Computer Science Engineer with a Software Development track from Universidad Nacional de Loja. Experienced in academic, outreach and professional projects.',
      p2: 'I stand out for my responsibility, logical thinking, adaptability and teamwork skills. I am always looking for new challenges that allow me to grow professionally.',
      location: 'Location',
      phone: 'Phone',
      languages: 'Languages',
      langValue: 'Spanish (Native), English (Basic)',
      cardFullstack: 'Frontend and backend development with modern technologies',
      cardMobile: 'Mobile apps with Flutter and React Native',
      cardQA: 'Functional testing, regression testing and quality management',
      cardManagement: 'Management',
      cardManagementDesc: 'Scrum, agile planning and project coordination',
    },
    experience: {
      label: 'Career path',
      title: 'Professional Experience',
      job1Role: 'Junior Software Developer',
      job1Date: 'Jan 2026 \u2013 Apr 2026',
      job1Company: 'Dataglov S.A.S. \u2022 On-site, full-time',
      job1Desc: [
        'Development and maintenance of Sudial, a WhatsApp chatbot management platform, working on backend and frontend.',
        'Implementation of complete modules, bug fixes and feature optimization.',
        'Mobile app development with React Native for customer service agents.',
      ],
      job2Role: 'Project Manager | QA | Frontend Dev',
      job2Date: 'Sep 2025 \u2013 Jan 2026',
      job2Desc: [
        'Frontend development in Angular for ANA, an inventory management, billing and electronic signature system.',
        'Project management and coordination with Jira, agile planning and issue tracking.',
        'Quality assurance through functional and regression testing.',
      ],
      job3Role: 'Junior Developer \u2013 Node.js',
      job3Date: 'Feb 2024 \u2013 Aug 2025',
      job3Company: 'ARAnet \u2022 Pangui, Ecuador (Remote)',
      job3Desc: [
        'Development and maintenance of an internal management system: client registration, internet plans, billing.',
        'Remote team collaboration for feature implementation and system improvements.',
      ],
      job4Role: 'Full Stack Developer \u2013 Thesis Project',
      job4Date: 'Mar 2024 \u2013 Aug 2025',
      job4Company: 'Universidad Nacional de Loja \u2022 Outreach Project',
      job4Desc: [
        'Web application development for sustainable vehicle noise management in Loja city.',
        'Backend in Jakarta EE and frontend in Flutter.',
      ],
      job5Role: 'Pre-professional Internship',
      job5Date: 'Nov 2023 \u2013 Jan 2024',
      job5Company: 'IT Department \u2022 Universidad Nacional de Loja',
      job5Desc: [
        'Development of the Climate Viewer for Universidad Nacional de Loja using Django (backend and frontend).',
      ],
    },
    skills: {
      label: 'Competencies',
      title: 'Technical Skills',
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      tools: 'Tools',
      qa: 'QA / Testing',
      qaItems: ['Functional testing', 'Regression testing', 'Test management'],
      creativity: 'Creativity',
      leadership: 'Leadership',
      problemSolving: 'Problem solving',
      teamwork: 'Teamwork',
      communication: 'Effective communication',
      fastLearning: 'Fast learner',
    },
    education: {
      label: 'Background',
      title: 'Education',
      degree: 'Computer Science Engineering',
      school: 'Universidad Nacional de Loja',
      track: 'Track: Software Development',
      date: 'Apr 2021 \u2013 Oct 2025',
      certsLabel: 'Continuing education',
      certsTitle: 'Certifications',
    },
    contact: {
      label: "Let's talk",
      title: 'Contact',
      phone: 'Phone',
    },
    footer: 'All rights reserved.',
  },
}

export class AppRoot extends LitElement {
  static get properties() {
    return {
      activeSection: { type: String },
      menuOpen: { type: Boolean },
      headerScrolled: { type: Boolean },
      lang: { type: String },
      typedText: { type: String },
      typedRole: { type: Number },
      cursorBlink: { type: Boolean },
      consoleLines: { type: Array },
      uptimeSec: { type: Number },
      cpuLoad: { type: Number },
    }
  }

  constructor() {
    super()
    this.activeSection = 'inicio'
    this.menuOpen = false
    this.headerScrolled = false
    this.lang = 'es'
    this.typedText = ''
    this.typedRole = 0
    this.cursorBlink = true
    this.consoleLines = []
    this.uptimeSec = 0
    this.cpuLoad = 42
    this._roles = [
      'Full Stack Developer',
      'React + Next.js',
      'Python + Django',
      'Node.js + TypeScript',
      'Mobile Developer',
      'QA Engineer',
    ]
    this._gitLog = [
      { hash: 'a3f2c91', msg: 'feat(portfolio): ship dark theme + animations', branch: 'main' },
      { hash: '8e1b774', msg: 'feat(sudial): WhatsApp bot management module', branch: 'develop' },
      { hash: '5d9a02c', msg: 'feat(ana): inventory + e-signature flow', branch: 'feature/ana' },
      { hash: '21fc4e8', msg: 'fix(api): retry policy on rate-limit 429s', branch: 'hotfix' },
      { hash: 'c70f156', msg: 'refactor: migrate legacy Node 16 -> 20', branch: 'main' },
      { hash: 'f02ab9d', msg: 'test: regression suite for billing module', branch: 'qa' },
    ]
  }

  get t() {
    return i18n[this.lang]
  }

  _toggleLang() {
    this.lang = this.lang === 'es' ? 'en' : 'es'
  }

  connectedCallback() {
    super.connectedCallback()
    this._boundScroll = this._handleScroll.bind(this)
    window.addEventListener('scroll', this._boundScroll)
    this._startTyping()
    this._startConsole()
    this._startStatusBar()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('scroll', this._boundScroll)
    if (this._typeTimer) clearTimeout(this._typeTimer)
    if (this._consoleTimer) clearTimeout(this._consoleTimer)
    if (this._cursorTimer) clearInterval(this._cursorTimer)
    if (this._statusTimer) clearInterval(this._statusTimer)
    if (this._revealObs) this._revealObs.disconnect()
  }

  firstUpdated() {
    this._setupReveal()
  }

  updated(changed) {
    if (changed.has('lang')) {
      this._setupReveal()
    }
  }

  _setupReveal() {
    if (this._revealObs) this._revealObs.disconnect()
    const targets = this.shadowRoot.querySelectorAll('.reveal')
    this._revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            this._revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    targets.forEach((el) => this._revealObs.observe(el))
  }

  _startTyping() {
    let charIdx = 0
    const tick = () => {
      const role = this._roles[this.typedRole]
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
              this.typedRole = (this.typedRole + 1) % this._roles.length
              charIdx = 0
              this._typeTimer = setTimeout(tick, 250)
            }
          }
          erase()
        }, 1600)
      }
    }
    tick()
    this._cursorTimer = setInterval(() => {
      this.cursorBlink = !this.cursorBlink
    }, 530)
  }

  _startConsole() {
    const seq = [
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
    let i = 0
    const push = () => {
      this.consoleLines = [...this.consoleLines, seq[i % seq.length]].slice(-9)
      i += 1
      this._consoleTimer = setTimeout(push, 1100)
    }
    push()
  }

  _startStatusBar() {
    this._statusTimer = setInterval(() => {
      this.uptimeSec += 1
      this.cpuLoad = 30 + Math.floor(Math.random() * 45)
    }, 1000)
  }

  _fmtUptime() {
    const m = Math.floor(this.uptimeSec / 60)
    const s = this.uptimeSec % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  _handleScroll() {
    this.headerScrolled = window.scrollY > 50
    const sections = this.shadowRoot.querySelectorAll('section[id]')
    let current = 'inicio'
    sections.forEach((section) => {
      const top = section.offsetTop - 100
      if (window.scrollY >= top) {
        current = section.getAttribute('id')
      }
    })
    this.activeSection = current
  }

  _toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  _closeMenu() {
    this.menuOpen = false
  }

  _scrollTo(id) {
    this._closeMenu()
    const el = this.shadowRoot.querySelector(`#${id}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --purple-50: #faf5ff;
        --purple-100: #f3e8ff;
        --purple-200: #e9d5ff;
        --purple-300: #d8b4fe;
        --purple-400: #c084fc;
        --purple-500: #a855f7;
        --purple-600: #9333ea;
        --purple-700: #7c3aed;
        --purple-800: #6d28d9;
        --purple-900: #5b21b6;
        --black-900: #0a0a0f;
        --black-800: #111118;
        --black-700: #1a1a2e;
        --black-600: #24243e;
        --black-500: #2e2e4a;
        --gray-100: #f1f5f9;
        --gray-200: #e2e8f0;
        --gray-300: #cbd5e1;
        --gray-400: #94a3b8;
        --gray-500: #64748b;
        --text-primary: #f1f5f9;
        --text-secondary: #cbd5e1;
        --text-muted: #94a3b8;
        --glow-sm: 0 0 15px rgba(139, 92, 246, 0.15);
        --glow-md: 0 0 30px rgba(139, 92, 246, 0.2);
        --glow-lg: 0 0 60px rgba(139, 92, 246, 0.15);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* ===================== NAV ===================== */
      nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: var(--transition);
        background: transparent;
      }

      nav.scrolled {
        background: rgba(10, 10, 15, 0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(139, 92, 246, 0.15);
        padding: 0.7rem 2rem;
      }

      .nav-logo {
        font-size: 1.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--purple-400), var(--purple-600));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: -0.5px;
        cursor: pointer;
      }

      .nav-right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .nav-links {
        display: flex;
        gap: 0.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .nav-links a {
        color: var(--gray-300);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: var(--transition);
        cursor: pointer;
      }

      .nav-links a:hover,
      .nav-links a.active {
        color: var(--purple-400);
        background: rgba(139, 92, 246, 0.1);
      }

      .lang-btn {
        background: rgba(139, 92, 246, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.25);
        color: var(--purple-400);
        font-size: 0.8rem;
        font-weight: 700;
        padding: 5px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: var(--transition);
        font-family: inherit;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .lang-btn:hover {
        background: rgba(139, 92, 246, 0.2);
        border-color: var(--purple-400);
      }

      .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        background: none;
        border: none;
        padding: 5px;
        z-index: 1001;
      }

      .hamburger span {
        width: 25px;
        height: 2px;
        background: var(--purple-400);
        transition: var(--transition);
        border-radius: 2px;
        display: block;
      }

      .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
      .hamburger.open span:nth-child(2) { opacity: 0; }
      .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

      /* ===================== REVEAL ANIMATIONS ===================== */
      .reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal.in-view { opacity: 1; transform: none; }
      .reveal.delay-1 { transition-delay: 0.08s; }
      .reveal.delay-2 { transition-delay: 0.16s; }
      .reveal.delay-3 { transition-delay: 0.24s; }
      .reveal.delay-4 { transition-delay: 0.32s; }
      .reveal.delay-5 { transition-delay: 0.40s; }

      /* ===================== CODE RAIN (matrix) ===================== */
      .code-rain {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
        opacity: 0.18;
      }

      .code-rain span {
        position: absolute;
        top: -10%;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 13px;
        color: var(--purple-400);
        white-space: nowrap;
        text-shadow: 0 0 8px rgba(139, 92, 246, 0.7);
        animation: rainDrop linear infinite;
        writing-mode: vertical-rl;
        letter-spacing: 2px;
      }

      @keyframes rainDrop {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(110vh); opacity: 0; }
      }

      /* ===================== FLOATING CODE SNIPPETS ===================== */
      .floating-snippets {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }

      .float-snip {
        position: absolute;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 12px;
        color: rgba(168, 85, 247, 0.35);
        background: rgba(139, 92, 246, 0.05);
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid rgba(139, 92, 246, 0.12);
        backdrop-filter: blur(4px);
        animation: floatY 12s ease-in-out infinite;
        white-space: nowrap;
      }

      @keyframes floatY {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
        50% { transform: translateY(-25px) translateX(10px); opacity: 0.8; }
      }

      /* ===================== TERMINAL / CONSOLES ===================== */
      .terminal {
        background: rgba(10, 10, 15, 0.92);
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 12px;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.15);
        backdrop-filter: blur(10px);
        overflow: hidden;
        font-size: 0.78rem;
        max-width: 100%;
      }

      .terminal-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: linear-gradient(180deg, rgba(36, 36, 62, 0.9), rgba(26, 26, 46, 0.9));
        border-bottom: 1px solid rgba(139, 92, 246, 0.18);
      }

      .term-dot {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        display: inline-block;
      }
      .term-dot.r { background: #ff5f57; }
      .term-dot.y { background: #febc2e; }
      .term-dot.g { background: #28c840; }

      .terminal-title {
        margin-left: 8px;
        color: var(--text-muted);
        font-size: 0.72rem;
        letter-spacing: 0.5px;
        flex: 1;
        text-align: center;
        padding-right: 50px;
      }

      .terminal-body {
        padding: 14px 16px;
        color: #d1d5db;
        line-height: 1.65;
        min-height: 200px;
        max-height: 240px;
        overflow: hidden;
      }

      .term-line { display: block; animation: termIn 0.25s ease; }
      .term-line.cmd::before { content: '$ '; color: #22c55e; font-weight: 700; }
      .term-line.cmd { color: #f1f5f9; }
      .term-line.out { color: #94a3b8; }
      .term-line.info { color: var(--purple-300); }
      .term-line.ok { color: #4ade80; }
      .term-line.json { color: #fbbf24; }

      @keyframes termIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: none; }
      }

      .term-prompt {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 4px;
      }

      .term-prompt .arrow { color: var(--purple-400); font-weight: 700; }
      .term-prompt .branch { color: #4ade80; }
      .term-prompt .cursor {
        display: inline-block;
        width: 8px;
        height: 14px;
        background: var(--purple-400);
        margin-left: 2px;
        vertical-align: middle;
      }
      .term-prompt .cursor.off { opacity: 0; }

      /* ===================== TYPED TEXT ===================== */
      .typed-wrap {
        display: inline-flex;
        align-items: center;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        color: var(--purple-300);
      }
      .typed-wrap .prefix { color: #22c55e; margin-right: 6px; }
      .typed-cursor {
        display: inline-block;
        width: 9px;
        height: 1.05rem;
        background: var(--purple-400);
        margin-left: 3px;
        vertical-align: middle;
        box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
      }
      .typed-cursor.off { opacity: 0; }

      /* ===================== GIT LOG TERMINAL ===================== */
      .gitlog-terminal {
        margin-top: 3rem;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
      }

      .gitlog-line {
        display: flex;
        gap: 10px;
        align-items: baseline;
        padding: 3px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        animation: termIn 0.4s ease both;
      }
      .gitlog-line .hash { color: #fbbf24; font-weight: 700; }
      .gitlog-line .branch {
        color: #4ade80;
        background: rgba(34, 197, 94, 0.1);
        padding: 1px 8px;
        border-radius: 4px;
        font-size: 0.7rem;
      }
      .gitlog-line .msg { color: #cbd5e1; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }

      /* ===================== STATUS BAR ===================== */
      .status-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 26px;
        background: linear-gradient(90deg, var(--purple-700), var(--purple-600));
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 14px;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 0.72rem;
        z-index: 999;
        box-shadow: 0 -4px 20px rgba(139, 92, 246, 0.3);
      }

      .status-left, .status-right { display: flex; gap: 14px; align-items: center; }

      .status-item {
        display: flex;
        align-items: center;
        gap: 5px;
        opacity: 0.95;
      }

      .status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 6px #22c55e;
        animation: blink 1.6s ease-in-out infinite;
      }

      /* offset content for status bar */
      footer { padding-bottom: 3.5rem; }

      /* ===================== HERO ===================== */
      #inicio {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        padding: 6rem 2rem 4rem;
        max-width: 100%;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.18), transparent),
          radial-gradient(ellipse 60% 40% at 80% 50%, rgba(109, 40, 217, 0.1), transparent),
          radial-gradient(ellipse 60% 40% at 20% 80%, rgba(139, 92, 246, 0.06), transparent);
      }

      .hero-grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px);
        background-size: 60px 60px;
      }

      .hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 4rem;
        max-width: 1100px;
        width: 100%;
      }

      .hero-photo-wrapper { flex-shrink: 0; position: relative; }

      .hero-photo-ring {
        width: 280px;
        height: 280px;
        border-radius: 50%;
        padding: 4px;
        background: linear-gradient(135deg, var(--purple-500), var(--purple-800), var(--purple-500));
        box-shadow: var(--glow-lg);
        animation: ringPulse 4s ease-in-out infinite;
      }

      @keyframes ringPulse {
        0%, 100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.2); }
        50% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.35); }
      }

      .hero-photo {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--black-900);
        display: block;
      }

      .hero-text { flex: 1; }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        background: rgba(139, 92, 246, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.25);
        border-radius: 50px;
        font-size: 0.85rem;
        color: var(--purple-300);
        margin-bottom: 1.5rem;
        font-weight: 500;
      }

      .hero-badge .dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        animation: blink 2s ease-in-out infinite;
        display: inline-block;
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }

      .hero-title {
        font-size: 3.2rem;
        font-weight: 900;
        line-height: 1.1;
        margin: 0 0 0.5rem 0;
        color: var(--text-primary);
        letter-spacing: -1px;
      }

      .hero-title .purple {
        background: linear-gradient(135deg, var(--purple-400), var(--purple-600));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-subtitle {
        font-size: 1.3rem;
        color: var(--purple-400);
        font-weight: 600;
        margin: 0 0 1.2rem 0;
      }

      .hero-description {
        font-size: 1.05rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin: 0 0 2rem 0;
        max-width: 520px;
      }

      .hero-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 28px;
        border-radius: 12px;
        font-size: 0.95rem;
        font-weight: 600;
        text-decoration: none;
        transition: var(--transition);
        cursor: pointer;
        border: none;
        font-family: inherit;
      }

      .btn-primary {
        background: linear-gradient(135deg, var(--purple-700), var(--purple-600));
        color: white;
        box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.45);
      }

      .btn-outline {
        background: transparent;
        color: var(--purple-400);
        border: 1.5px solid rgba(139, 92, 246, 0.4);
      }

      .btn-outline:hover {
        background: rgba(139, 92, 246, 0.1);
        border-color: var(--purple-400);
        transform: translateY(-2px);
      }

      .hero-stats {
        display: flex;
        gap: 2.5rem;
        margin-top: 2.5rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(139, 92, 246, 0.12);
      }

      .stat-item { text-align: center; }

      .stat-number {
        font-size: 1.8rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--purple-400), var(--purple-300));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .stat-label {
        font-size: 0.78rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
      }

      /* ===================== SECTIONS ===================== */
      section {
        padding: 5rem 2rem;
        max-width: 1100px;
        margin: 0 auto;
      }

      .section-header {
        text-align: center;
        margin-bottom: 3.5rem;
      }

      .section-label {
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: var(--purple-400);
        margin: 0 0 0.8rem 0;
      }

      .section-title {
        font-size: 2.4rem;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.5px;
        margin: 0;
      }

      .section-line {
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, var(--purple-600), var(--purple-400));
        margin: 1rem auto 0;
        border-radius: 3px;
      }

      /* ===================== ABOUT ===================== */
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
      }

      .about-text p {
        color: var(--text-secondary);
        line-height: 1.8;
        margin: 0 0 1.2rem 0;
        font-size: 1.02rem;
      }

      .about-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
        margin-top: 1.5rem;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .info-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--purple-400);
        font-weight: 600;
      }

      .info-value {
        color: var(--text-primary);
        font-weight: 500;
        font-size: 0.92rem;
      }

      .about-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .about-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 1.5rem;
        transition: var(--transition);
      }

      .about-card:hover {
        border-color: rgba(139, 92, 246, 0.35);
        transform: translateY(-4px);
        box-shadow: var(--glow-sm);
      }

      .about-card-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 10px;
        padding: 8px;
      }

      .about-card-icon svg,
      .skill-category-icon svg,
      .edu-icon svg,
      .cert-icon svg,
      .contact-icon svg,
      .soft-skill svg {
        width: 100%;
        height: 100%;
        stroke: var(--purple-400);
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .about-card h4 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 0.4rem 0;
      }

      .about-card p {
        font-size: 0.85rem;
        color: var(--text-muted);
        line-height: 1.5;
        margin: 0;
      }

      /* ===================== EXPERIENCE ===================== */
      .timeline {
        position: relative;
        padding-left: 2rem;
      }

      .timeline::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, var(--purple-600), var(--purple-900), transparent);
      }

      .timeline-item {
        position: relative;
        margin-bottom: 2.5rem;
        padding-left: 2rem;
      }

      .timeline-item::before {
        content: '';
        position: absolute;
        left: -2.35rem;
        top: 8px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--purple-600);
        border: 3px solid var(--black-900);
        box-shadow: 0 0 12px rgba(139, 92, 246, 0.5);
      }

      .timeline-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 1.8rem;
        transition: var(--transition);
      }

      .timeline-card:hover {
        border-color: rgba(139, 92, 246, 0.3);
        box-shadow: var(--glow-sm);
      }

      .timeline-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .timeline-role {
        font-size: 1.12rem;
        font-weight: 700;
        color: var(--text-primary);
      }

      .timeline-date {
        font-size: 0.8rem;
        color: var(--purple-400);
        font-weight: 600;
        padding: 4px 14px;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 20px;
        white-space: nowrap;
      }

      .timeline-company {
        font-size: 0.9rem;
        color: var(--purple-300);
        font-weight: 500;
        margin-bottom: 0.8rem;
        font-style: italic;
      }

      .timeline-desc {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .timeline-desc li {
        position: relative;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
        line-height: 1.65;
      }

      .timeline-desc li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 5px;
        height: 5px;
        background: var(--purple-500);
        border-radius: 50%;
      }

      .timeline-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 1rem;
      }

      .tech-pill {
        font-size: 0.73rem;
        padding: 4px 10px;
        background: rgba(139, 92, 246, 0.1);
        color: var(--purple-300);
        border-radius: 6px;
        border: 1px solid rgba(139, 92, 246, 0.15);
        font-weight: 500;
      }

      /* ===================== SKILLS ===================== */
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }

      .skill-category {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 1.8rem;
        transition: var(--transition);
      }

      .skill-category:hover {
        border-color: rgba(139, 92, 246, 0.35);
        box-shadow: var(--glow-sm);
        transform: translateY(-3px);
      }

      .skill-category-icon {
        width: 38px;
        height: 38px;
        margin-bottom: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 10px;
        padding: 8px;
      }

      .skill-category h3 {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 1rem 0;
      }

      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .skill-tag {
        font-size: 0.82rem;
        padding: 6px 12px;
        background: rgba(139, 92, 246, 0.08);
        color: var(--text-secondary);
        border-radius: 8px;
        border: 1px solid rgba(139, 92, 246, 0.12);
        font-weight: 500;
        transition: var(--transition);
      }

      .skill-tag:hover {
        background: rgba(139, 92, 246, 0.18);
        color: var(--purple-300);
        border-color: rgba(139, 92, 246, 0.3);
      }

      /* ===================== SOFT SKILLS ===================== */
      .soft-skill svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }

      .soft-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-top: 3rem;
      }

      .soft-skill {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.12);
        border-radius: 50px;
        font-size: 0.9rem;
        color: var(--text-secondary);
        font-weight: 500;
        transition: var(--transition);
      }

      .soft-skill:hover {
        border-color: rgba(139, 92, 246, 0.35);
        color: var(--purple-300);
        transform: translateY(-2px);
        box-shadow: var(--glow-sm);
      }

      /* ===================== EDUCATION ===================== */
      .edu-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        transition: var(--transition);
      }

      .edu-card:hover {
        border-color: rgba(139, 92, 246, 0.3);
        box-shadow: var(--glow-sm);
      }

      .edu-icon {
        width: 52px;
        height: 52px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 14px;
        padding: 12px;
      }

      .edu-info h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 0.3rem 0;
      }

      .edu-school {
        font-size: 1rem;
        color: var(--purple-300);
        font-weight: 500;
        margin: 0 0 0.3rem 0;
      }

      .edu-detail {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin: 0;
      }

      .edu-date-badge {
        margin-left: auto;
        flex-shrink: 0;
        font-size: 0.82rem;
        color: var(--purple-400);
        font-weight: 600;
        padding: 6px 14px;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 20px;
        white-space: nowrap;
      }

      /* ===================== CERTIFICATIONS ===================== */
      .certs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
      }

      .cert-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 14px;
        padding: 1.3rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: var(--transition);
      }

      .cert-card:hover {
        border-color: rgba(139, 92, 246, 0.3);
        box-shadow: var(--glow-sm);
        transform: translateY(-2px);
      }

      .cert-icon {
        width: 36px;
        height: 36px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 8px;
        padding: 7px;
      }

      .cert-info h4 {
        font-size: 0.92rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 2px 0;
      }

      .cert-info p {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin: 0;
      }

      /* ===================== CONTACT ===================== */
      #contacto { padding-bottom: 3rem; }

      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.2rem;
      }

      .contact-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 14px;
        padding: 1.8rem 1.5rem;
        text-align: center;
        text-decoration: none;
        transition: var(--transition);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.7rem;
      }

      .contact-card:hover {
        border-color: rgba(139, 92, 246, 0.4);
        transform: translateY(-5px);
        box-shadow: var(--glow-md);
      }

      .contact-icon {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 12px;
        padding: 9px;
      }

      .contact-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--purple-400);
        font-weight: 600;
      }

      .contact-value {
        font-size: 0.9rem;
        color: var(--text-primary);
        font-weight: 500;
        word-break: break-all;
      }

      /* ===================== FOOTER ===================== */
      footer {
        text-align: center;
        padding: 2.5rem 2rem;
        border-top: 1px solid rgba(139, 92, 246, 0.1);
      }

      footer p {
        color: var(--text-muted);
        font-size: 0.85rem;
        margin: 0;
      }

      /* ===================== RESPONSIVE ===================== */
      @media (max-width: 900px) {
        .hero-content {
          flex-direction: column;
          text-align: center;
        }
        .hero-title { font-size: 2.5rem; }
        .hero-description { margin-left: auto; margin-right: auto; }
        .hero-actions { justify-content: center; }
        .hero-stats { justify-content: center; }
        .about-grid { grid-template-columns: 1fr; }
        .skills-grid { grid-template-columns: 1fr 1fr; }
        .section-title { font-size: 2rem; }
        .edu-card { flex-direction: column; text-align: center; }
        .edu-date-badge { margin-left: 0; }
      }

      @media (max-width: 640px) {
        nav { padding: 0.8rem 1.2rem; }

        .nav-links {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 15, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          z-index: 999;
          margin: 0;
          padding: 0;
        }

        .nav-links.open { display: flex; }

        .nav-links a { font-size: 1.2rem; padding: 0.8rem 2rem; }

        .hamburger { display: flex; }

        .hero-title { font-size: 2rem; }
        .hero-photo-ring { width: 210px; height: 210px; }
        .hero-stats { gap: 1.5rem; }

        .skills-grid { grid-template-columns: 1fr; }
        .about-cards { grid-template-columns: 1fr; }
        .certs-grid { grid-template-columns: 1fr; }
        .about-info { grid-template-columns: 1fr; }
        .contact-grid { grid-template-columns: 1fr; }

        section { padding: 3.5rem 1.2rem; }
      }
    `
  }

  _icon(name) {
    const icons = {
      code: html`<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      smartphone: html`<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
      search: html`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      clipboard: html`<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
      terminal: html`<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
      layers: html`<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      server: html`<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      database: html`<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      tool: html`<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      checkCircle: html`<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      zap: html`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      lightbulb: html`<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>`,
      puzzle: html`<svg viewBox="0 0 24 24"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.98.98 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.98.98 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z"/></svg>`,
      users: html`<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      messageCircle: html`<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
      graduationCap: html`<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></svg>`,
      award: html`<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
      mail: html`<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      phone: html`<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      linkedin: html`<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
      github: html`<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      rocket: html`<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    }
    return icons[name] || html``
  }

  _navItem(id, label) {
    return html`
      <li>
        <a
          class="${this.activeSection === id ? 'active' : ''}"
          @click="${() => this._scrollTo(id)}"
        >${label}</a>
      </li>
    `
  }

  _techPills(techs) {
    return techs.map((t) => html`<span class="tech-pill">${t}</span>`)
  }

  _skillTags(skills) {
    return skills.map((s) => html`<span class="skill-tag">${s}</span>`)
  }

  _timelineItem(role, date, company, descList, techs) {
    return html`
      <div class="timeline-item reveal">
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-role">${role}</span>
            <span class="timeline-date">${date}</span>
          </div>
          <div class="timeline-company">${company}</div>
          <ul class="timeline-desc">
            ${descList.map((d) => html`<li>${d}</li>`)}
          </ul>
          <div class="timeline-tech">
            ${this._techPills(techs)}
          </div>
        </div>
      </div>
    `
  }

  _renderCodeRain() {
    const cols = 18
    const samples = [
      'const dev = "Karen";', 'function() { }', '<App />', 'await fetch()',
      'git push', 'npm run', 'docker up', 'export default',
      'return <div/>', 'useState()', '0xDEADBEEF', '() => {}',
      'SELECT *', 'POST /api', 'try { } catch', 'import React',
      'while(true)', 'class Dev {}',
    ]
    const drops = []
    for (let i = 0; i < cols; i += 1) {
      const left = (i / cols) * 100 + Math.random() * 4
      const dur = 8 + Math.random() * 10
      const delay = -Math.random() * dur
      const text = samples[i % samples.length]
      drops.push(html`<span style="left:${left}%; animation-duration:${dur}s; animation-delay:${delay}s;">${text}</span>`)
    }
    return html`<div class="code-rain">${drops}</div>`
  }

  _renderFloatingSnippets() {
    const snips = [
      { txt: '{ stack: "fullstack" }', top: '12%', left: '6%', dur: 11 },
      { txt: 'await ship()', top: '70%', left: '4%', dur: 9 },
      { txt: '<Component />', top: '20%', left: '85%', dur: 13 },
      { txt: 'return success;', top: '65%', left: '88%', dur: 10 },
      { txt: '// TODO: deploy', top: '40%', left: '92%', dur: 14 },
    ]
    return html`
      <div class="floating-snippets">
        ${snips.map(
          (s) => html`<div class="float-snip" style="top:${s.top}; left:${s.left}; animation-duration:${s.dur}s;">${s.txt}</div>`,
        )}
      </div>
    `
  }

  _renderTerminal() {
    return html`
      <div class="terminal">
        <div class="terminal-bar">
          <span class="term-dot r"></span>
          <span class="term-dot y"></span>
          <span class="term-dot g"></span>
          <span class="terminal-title">karen@dev: ~/portfolio</span>
        </div>
        <div class="terminal-body">
          ${this.consoleLines.map(
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

  _renderGitLog() {
    return html`
      <div class="terminal gitlog-terminal reveal">
        <div class="terminal-bar">
          <span class="term-dot r"></span>
          <span class="term-dot y"></span>
          <span class="term-dot g"></span>
          <span class="terminal-title">git log --oneline --graph</span>
        </div>
        <div class="terminal-body" style="max-height: none;">
          <span class="term-line cmd">git log --oneline --decorate</span>
          ${this._gitLog.map(
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

  _renderStatusBar() {
    return html`
      <div class="status-bar">
        <div class="status-left">
          <span class="status-item"><span class="status-dot"></span> main</span>
          <span class="status-item">⎇ ${this._roles[this.typedRole]}</span>
          <span class="status-item">UTF-8</span>
          <span class="status-item">LF</span>
        </div>
        <div class="status-right">
          <span class="status-item">CPU ${this.cpuLoad}%</span>
          <span class="status-item">⏱ ${this._fmtUptime()}</span>
          <span class="status-item">v1.0.0</span>
          <span class="status-item">🟢 Online</span>
        </div>
      </div>
    `
  }

  render() {
    const t = this.t
    return html`
      ${this._renderCodeRain()}
      <!-- NAVIGATION -->
      <nav class="${this.headerScrolled ? 'scrolled' : ''}">
        <div class="nav-logo" @click="${() => this._scrollTo('inicio')}">KG</div>
        <div class="nav-right">
          <ul class="nav-links ${this.menuOpen ? 'open' : ''}">
            ${this._navItem('inicio', t.nav.inicio)}
            ${this._navItem('sobre-mi', t.nav.about)}
            ${this._navItem('experiencia', t.nav.experience)}
            ${this._navItem('habilidades', t.nav.skills)}
            ${this._navItem('educacion', t.nav.education)}
            ${this._navItem('contacto', t.nav.contact)}
          </ul>
          <button class="lang-btn" @click="${this._toggleLang}">
            ${this.lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            class="hamburger ${this.menuOpen ? 'open' : ''}"
            @click="${this._toggleMenu}"
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <!-- ==================== HERO ==================== -->
      <section id="inicio">
        <div class="hero-bg"></div>
        <div class="hero-grid"></div>
        ${this._renderFloatingSnippets()}
        <div class="hero-content">
          <div class="hero-photo-wrapper">
            <div class="hero-photo-ring">
              <img class="hero-photo" src="${foto}" alt="Karen Brigith Gonzaga Rivas" />
            </div>
          </div>
          <div class="hero-text">
            <div class="hero-badge">
              <span class="dot"></span> ${t.hero.badge}
            </div>
            <h1 class="hero-title">
              Karen Brigith<br /><span class="purple">Gonzaga Rivas</span>
            </h1>
            <p class="hero-subtitle">
              <span class="typed-wrap">
                <span class="prefix">$</span>
                <span>${this.typedText}</span>
                <span class="typed-cursor ${this.cursorBlink ? '' : 'off'}"></span>
              </span>
            </p>
            <p class="hero-description">${t.hero.description}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="mailto:brigithgonzaga501@gmail.com">${t.hero.cta}</a>
              <a class="btn btn-outline" href="https://github.com/KBGR55" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
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
            <div style="margin-top: 2rem;">
              ${this._renderTerminal()}
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== SOBRE MI ==================== -->
      <section id="sobre-mi">
        <div class="section-header">
          <p class="section-label">${t.about.label}</p>
          <h2 class="section-title">${t.about.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="about-grid">
          <div class="about-text">
            <p>${t.about.p1}</p>
            <p>${t.about.p2}</p>
            <div class="about-info">
              <div class="info-item">
                <span class="info-label">${t.about.location}</span>
                <span class="info-value">Loja, Ecuador</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email</span>
                <span class="info-value">brigithgonzaga501@gmail.com</span>
              </div>
              <div class="info-item">
                <span class="info-label">${t.about.phone}</span>
                <span class="info-value">+593 98 073 5353</span>
              </div>
              <div class="info-item">
                <span class="info-label">${t.about.languages}</span>
                <span class="info-value">${t.about.langValue}</span>
              </div>
            </div>
          </div>
          <div class="about-cards">
            <div class="about-card reveal">
              <div class="about-card-icon">${this._icon('code')}</div>
              <h4>Full Stack</h4>
              <p>${t.about.cardFullstack}</p>
            </div>
            <div class="about-card reveal delay-1">
              <div class="about-card-icon">${this._icon('smartphone')}</div>
              <h4>Mobile</h4>
              <p>${t.about.cardMobile}</p>
            </div>
            <div class="about-card reveal delay-2">
              <div class="about-card-icon">${this._icon('checkCircle')}</div>
              <h4>QA Testing</h4>
              <p>${t.about.cardQA}</p>
            </div>
            <div class="about-card reveal delay-3">
              <div class="about-card-icon">${this._icon('clipboard')}</div>
              <h4>${t.about.cardManagement}</h4>
              <p>${t.about.cardManagementDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== EXPERIENCIA ==================== -->
      <section id="experiencia">
        <div class="section-header">
          <p class="section-label">${t.experience.label}</p>
          <h2 class="section-title">${t.experience.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="timeline">
          ${this._timelineItem(t.experience.job1Role, t.experience.job1Date, t.experience.job1Company, t.experience.job1Desc, ['Python', 'Pyramid', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'React Native'])}
          ${this._timelineItem(t.experience.job2Role, t.experience.job2Date, 'ISBEN SOLUTION', t.experience.job2Desc, ['Angular', 'Jira', 'Scrum', 'QA Testing'])}
          ${this._timelineItem(t.experience.job3Role, t.experience.job3Date, t.experience.job3Company, t.experience.job3Desc, ['Node.js', 'JavaScript'])}
          ${this._timelineItem(t.experience.job4Role, t.experience.job4Date, t.experience.job4Company, t.experience.job4Desc, ['Jakarta EE', 'Flutter', 'Dart', 'Java'])}
          ${this._timelineItem(t.experience.job5Role, t.experience.job5Date, t.experience.job5Company, t.experience.job5Desc, ['Django', 'Python'])}
        </div>
        ${this._renderGitLog()}
      </section>

      <!-- ==================== HABILIDADES ==================== -->
      <section id="habilidades">
        <div class="section-header">
          <p class="section-label">${t.skills.label}</p>
          <h2 class="section-title">${t.skills.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-grid">
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon('terminal')}</div>
            <h3>${t.skills.languages}</h3>
            <div class="skill-tags">
              ${this._skillTags(['JavaScript', 'TypeScript', 'Python', 'Java', 'Dart'])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon('layers')}</div>
            <h3>${t.skills.frontend}</h3>
            <div class="skill-tags">
              ${this._skillTags(['React', 'Next.js', 'Angular', 'Flutter', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon('server')}</div>
            <h3>${t.skills.backend}</h3>
            <div class="skill-tags">
              ${this._skillTags(['Pyramid', 'Cornice', 'SQLAlchemy', 'Node.js', 'Django', 'Jakarta EE'])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon('database')}</div>
            <h3>${t.skills.databases}</h3>
            <div class="skill-tags">
              ${this._skillTags(['PostgreSQL', 'Redis', 'MySQL'])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon('tool')}</div>
            <h3>${t.skills.tools}</h3>
            <div class="skill-tags">
              ${this._skillTags(['Git', 'GitHub', 'GitLab', 'Jira', 'Scrum', 'VS Code', 'PyCharm', 'DataGrip', 'Claude Code'])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon('search')}</div>
            <h3>${t.skills.qa}</h3>
            <div class="skill-tags">
              ${this._skillTags(t.skills.qaItems)}
            </div>
          </div>
        </div>

        <div class="soft-skills">
          <div class="soft-skill">${this._icon('zap')} ${t.skills.creativity}</div>
          <div class="soft-skill">${this._icon('lightbulb')} ${t.skills.leadership}</div>
          <div class="soft-skill">${this._icon('puzzle')} ${t.skills.problemSolving}</div>
          <div class="soft-skill">${this._icon('users')} ${t.skills.teamwork}</div>
          <div class="soft-skill">${this._icon('messageCircle')} ${t.skills.communication}</div>
          <div class="soft-skill">${this._icon('rocket')} ${t.skills.fastLearning}</div>
        </div>
      </section>

      <!-- ==================== EDUCACION ==================== -->
      <section id="educacion">
        <div class="section-header">
          <p class="section-label">${t.education.label}</p>
          <h2 class="section-title">${t.education.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="edu-card">
          <div class="edu-icon">${this._icon('graduationCap')}</div>
          <div class="edu-info">
            <h3>${t.education.degree}</h3>
            <p class="edu-school">${t.education.school}</p>
            <p class="edu-detail">${t.education.track}</p>
          </div>
          <span class="edu-date-badge">${t.education.date}</span>
        </div>

        <div class="section-header" style="margin-top: 4rem;">
          <p class="section-label">${t.education.certsLabel}</p>
          <h2 class="section-title">${t.education.certsTitle}</h2>
          <div class="section-line"></div>
        </div>
        <div class="certs-grid">
          ${[
            { name: 'Gestion Agil de Proyectos con Scrum', org: 'Udemy', date: 'Ago. 2025' },
            { name: 'C++ Essentials 1', org: 'Cisco Networking Academy', date: 'Ago. 2025' },
            { name: 'GitHub Actions', org: 'Codigo Facilito', date: 'Jul. 2025' },
            { name: 'Curso Profesional de Flutter', org: 'Codigo Facilito', date: 'Jul. 2025' },
            { name: 'Fundamentos de Python 1', org: 'Cisco Networking Academy', date: 'May. 2023' },
          ].map(
            (c) => html`
              <div class="cert-card reveal">
                <div class="cert-icon">${this._icon('award')}</div>
                <div class="cert-info">
                  <h4>${c.name}</h4>
                  <p>${c.org} \u2022 ${c.date}</p>
                </div>
              </div>
            `,
          )}
        </div>
      </section>

      <!-- ==================== CONTACTO ==================== -->
      <section id="contacto">
        <div class="section-header">
          <p class="section-label">${t.contact.label}</p>
          <h2 class="section-title">${t.contact.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="contact-grid">
          <a class="contact-card reveal" href="mailto:brigithgonzaga501@gmail.com">
            <div class="contact-icon">${this._icon('mail')}</div>
            <span class="contact-label">Email</span>
            <span class="contact-value">brigithgonzaga501@gmail.com</span>
          </a>
          <a class="contact-card reveal" href="tel:+593980735353">
            <div class="contact-icon">${this._icon('phone')}</div>
            <span class="contact-label">${t.contact.phone}</span>
            <span class="contact-value">+593 98 073 5353</span>
          </a>
          <a class="contact-card reveal" href="https://linkedin.com/in/kbgr55" target="_blank" rel="noopener noreferrer">
            <div class="contact-icon">${this._icon('linkedin')}</div>
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value">linkedin.com/in/kbgr55</span>
          </a>
          <a class="contact-card reveal" href="https://github.com/KBGR55" target="_blank" rel="noopener noreferrer">
            <div class="contact-icon">${this._icon('github')}</div>
            <span class="contact-label">GitHub</span>
            <span class="contact-value">github.com/KBGR55</span>
          </a>
        </div>
      </section>

      <!-- FOOTER -->
      <footer>
        <p>&copy; 2026 Karen Brigith Gonzaga Rivas. ${t.footer}</p>
      </footer>

      ${this._renderStatusBar()}
    `
  }
}

customElements.define('app-root', AppRoot)
