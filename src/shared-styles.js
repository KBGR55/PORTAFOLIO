import { css, unsafeCSS } from 'lit-element'

import animationsCss from './styles/animations.css?inline'
import sectionCss from './styles/section.css?inline'
import buttonsCss from './styles/buttons.css?inline'
import revealCss from './styles/reveal.css?inline'
import terminalCss from './styles/terminal.css?inline'
import cardIconCss from './styles/card-icon.css?inline'

export const sharedAnimations = css`${unsafeCSS(animationsCss)}`
export const sectionStyles = css`${unsafeCSS(sectionCss)}`
export const buttonStyles = css`${unsafeCSS(buttonsCss)}`
export const revealStyles = css`${unsafeCSS(revealCss)}`
export const terminalStyles = css`${unsafeCSS(terminalCss)}`
export const cardIconStyles = css`${unsafeCSS(cardIconCss)}`
