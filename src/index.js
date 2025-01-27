import { customElement, property, LitElement, html, css } from 'lit-element';
import foto from '../public/PORTAFOLIO/foto.jpeg';
import icoGithub from '../public/PORTAFOLIO/ico-github.png';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message = 'GitHub';

  static get styles() {
    return css`
      h1 {
        font-size: 3rem;
        color: #2973b2;
        text-align: center;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background: linear-gradient(315deg, #f2efe7 0%, #9acbd0 100%);
        font-size: 24px;
        color: #2973b2;
      }
      .photo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid #48a6a7;
        margin-bottom: 1rem;
      }
      .link {
        color: #48a6a7;
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .link:hover {
        color: #2973b2;
      }
      .github-icon {
        width: 24px;
        height: 24px;
      }
      p {
        color: #2973b2;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <img class="photo" src="${foto}" alt="Your Profile Photo" />
        <h1>KAREN BRIGITH GONZAGA RIVAS</h1>
        <p>
          Programadora apasionada por el desarrollo web. 
          <strong> Estudiante de Ingeniería en Computación.</strong>
        </p>
        <p>Lista para nuevos desafíos. 🚀</p>
        <a
          class="link"
          href="https://github.com/KBGR55?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="github-icon" src="${icoGithub}" alt="GitHub Icon" />
          ${this.message}
        </a>
      </div>
    `;
  }
}