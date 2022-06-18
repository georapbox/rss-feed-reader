import '@georapbox/clipboard-copy-element/dist/clipboard-copy-defined.js';
import { styleSheets } from '../helpers/styles';
import { getFeeds } from '../helpers/storage';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    .modal {
      background-color: rgba(0, 0, 0, 0.5);
    }
  </style>

  <button type="button" class="btn btn-sm btn-primary" id="exportButton">Export</button>

  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Export feeds</h5>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <div class="d-flex justify-content-end">
            <clipboard-copy>
              <button class="btn btn-sm" slot="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="16" height="16"><title>Copy</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg> Copy
              </button>
            </clipboard-copy>
          </div>

          <div className="form-group">
            <pre></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    this._handleModalClose = this._handleModalClose.bind(this);
  }

  connectedCallback() {
    this.shadowRoot.getElementById('exportButton').addEventListener('click', this._handleTriggerExport);
    this.shadowRoot.querySelector('[aria-label="Close"]').addEventListener('click', this._handleModalClose);
  }

  disconnectedCallback() {
    this.shadowRoot.getElementById('exportButton').removeEventListener('click', this._handleTriggerExport);
    this.shadowRoot.querySelector('[aria-label="Close"]').removeEventListener('click', this._handleModalClose);
  }

  _handleTriggerExport() {
    const feedsToExport = JSON.stringify(getFeeds(), null, 2);

    this.shadowRoot.querySelector('pre').innerHTML = feedsToExport;

    this.shadowRoot.querySelector('clipboard-copy').value = feedsToExport;

    this.shadowRoot.querySelector('.modal').classList.add('d-block');
  }

  _handleModalClose() {
    this.shadowRoot.querySelector('.modal').classList.remove('d-block');
  }
}

if (!window.customElements.get('export-feeds')) {
  window.customElements.define('export-feeds', ExportFeeds);
}
