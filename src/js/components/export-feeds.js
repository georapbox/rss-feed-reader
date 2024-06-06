import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { styleSheets } from '../helpers/styles.js';
import { stringifyJSON } from '../utils/stringify-json.js';

const styles = /* css */`
  :host {
    display: block;
    max-width: 500px;
  }

  #exportCode {
    display: block;
    overflow-y: auto;
    max-height: 200px;
    font-size: 0.75rem;
  }

  clipboard-copy::part(button) {
    background-color: transparent;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    color: currentColor;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  }

  clipboard-copy::part(button):focus {
    outline: 0;
    box-shadow: rgba(13,110,253,.25) 0px 0px 0px 0.25rem;
  }

  clipboard-copy span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>${styles}</style>

  <div class="d-flex justify-content-end">
    <clipboard-copy feedback-duration="1500">
      <span slot="copy">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copy
      </span>
      <span slot="success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copied
      </span>
    </clipboard-copy>

    <web-share class="${!isWebShareSupported() ? 'd-none' : ''}">
      <button slot="button" class="btn btn-sm btn-default d-flex align-items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18" aria-hidden="true">
          <circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          <circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          <circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"/>
        </svg>
        <span class="label">Share</span>
      </button>
    </web-share>
  </div>

  <div class="card mt-2 mb-3">
    <div class="card-body">
      <pre class="m-0"><code id="exportCode"></code></pre>
    </div>
  </div>

  <button type="button" class="btn btn-primary d-inline-flex align-items-center justify-content-center gap-1 w-100" id="downloadButton">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>
    Download
  </button>
`;

class ExportFeeds extends HTMLElement {
  #feeds = [];
  #exportCodeEl = null;
  #clipboardCopyEl = null;
  #webShareEl = null;
  #downloadButton = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.#exportCodeEl = this.shadowRoot.getElementById('exportCode');
    this.#clipboardCopyEl = this.shadowRoot.querySelector('clipboard-copy');
    this.#webShareEl = this.shadowRoot.querySelector('web-share');
    this.#downloadButton = this.shadowRoot.getElementById('downloadButton');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  static get observedAttributes() {
    return ['visible'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'visible' && oldValue !== newValue) {
      const feedsToExport = stringifyJSON(this.feeds, 2);
      this.#exportCodeEl.textContent = feedsToExport;
      this.#clipboardCopyEl.value = feedsToExport;
      this.#webShareEl.shareText = feedsToExport;
    }
  }

  connectedCallback() {
    this.#downloadButton.addEventListener('click', this.#handleDownloadButtonClick);
  }

  disconnectedCallback() {
    this.#downloadButton.removeEventListener('click', this.#handleDownloadButtonClick);
  }

  get feeds() {
    return this.#feeds;
  }

  set feeds(value) {
    this.#feeds = value || [];
  }

  get visible() {
    return this.hasAttribute('visible');
  }

  set visible(value) {
    this.toggleAttribute('visible', !!value);
  }

  #exportFeeds(feeds) {
    const data = stringifyJSON(feeds, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `rss-feeds-export.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  #handleDownloadButtonClick = () => {
    this.#exportFeeds(this.feeds);
  };
}

if (!window.customElements.get('export-feeds')) {
  window.customElements.define('export-feeds', ExportFeeds);
}
