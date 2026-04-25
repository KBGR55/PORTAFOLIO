/**
 * Mixin: observe `.reveal` nodes inside the component shadow root and add
 * `.in-view` once they intersect the viewport. Call `_setupReveal()` in
 * `firstUpdated()` and re-call after content updates.
 */
export const RevealMixin = (Base) =>
  class extends Base {
    firstUpdated() {
      super.firstUpdated && super.firstUpdated()
      this._setupReveal()
    }

    disconnectedCallback() {
      super.disconnectedCallback()
      if (this._revealObs) this._revealObs.disconnect()
    }

    _setupReveal() {
      if (this._revealObs) this._revealObs.disconnect()
      const root = this.shadowRoot || this
      const targets = root.querySelectorAll('.reveal:not(.in-view)')
      if (!targets.length) return
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
  }
