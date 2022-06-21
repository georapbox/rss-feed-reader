import { styleSheets } from '../helpers/styles';
import { getFeeds } from '../helpers/storage';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }

    #exportCode {
      flex: 1;
      overflow-x: auto;
      white-space: nowrap;
    }
  </style>

  <details>
    <summary class="btn btn-sm btn-primary d-inline-flex align-items-center gap-1" id="exportButton">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><title>Download</title><path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 272l80 80 80-80M256 48v288"/></svg>
      Export feeds
    </summary>

    <div class="card mt-2">
      <div class="card-body d-md-flex align-items-center p-2 gap-1">
        <code id="exportCode" class="d-block"></code>

        <clipboard-copy>
          <button class="btn btn-sm btn-default" slot="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><title>Copy</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <span class="label">Copy</span>
          </button>
        </clipboard-copy>

        <web-share>
          <button class="btn btn-sm btn-default" slot="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><title>Share Social</title><circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"/></svg>
            <span class="label">Share</span>
          </button>
        </web-share>
      </div>
    </div>
  </details>
`;

class ExportFeeds extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = styleSheets;

    this._handleTriggerExport = this._handleTriggerExport.bind(this);
  }

  static get observedAttributes() {
    return ['open'];
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(value) {
    if (value) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  attributeChangedCallback(name) {
    if (name === 'open') {
      this.shadowRoot.querySelector('details').toggleAttribute('open', this.open);
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('details').addEventListener('toggle', this._handleTriggerExport);
    this.shadowRoot.querySelector('clipboard-copy').addEventListener('clipboard-copy:success', this._handleCopy);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('details').removeEventListener('toggle', this._handleTriggerExport);
    this.shadowRoot.querySelector('clipboard-copy').removeEventListener('clipboard-copy:success', this._handleCopy);
  }

  _handleTriggerExport(evt) {
    this.open = evt.target.open;

    if (this.open) {
      const feedsToExport = getFeeds().map(f => f.url).join('~');
      this.shadowRoot.getElementById('exportCode').innerHTML = feedsToExport;
      this.shadowRoot.querySelector('clipboard-copy').value = feedsToExport;
      this.shadowRoot.querySelector('web-share').shareText = feedsToExport;
    }
  }

  _handleCopy(evt) {
    const labelEl = evt.target.querySelector('.label');

    labelEl.textContent = 'Copied';

    setTimeout(() => {
      labelEl.textContent = 'Copy';
    }, 1000);
  }
}

if (!window.customElements.get('export-feeds')) {
  window.customElements.define('export-feeds', ExportFeeds);
}
