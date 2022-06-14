import { styleSheets } from '../helpers/styles';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }
  </style>

  <footer class="mt-4 mb-5">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          Licensed under the <a href="https://georapbox.mit-license.org/@2022" target="_blank" rel="noreferrer noopener">MIT License</a>
        </div>
      </div>
    </div>
  </footer>
`;

class SiteFooter extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }
}

if (!window.customElements.get('site-footer')) {
  window.customElements.define('site-footer', SiteFooter);
}
