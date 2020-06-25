
class PictureCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    
  }
}
if (!customElements.get('picture-card')) {
  customElements.define('picture-card', PictureCard);
}