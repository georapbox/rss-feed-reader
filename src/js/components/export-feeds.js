import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { styleSheets } from '../helpers/styles';
import { getFeeds } from '../helpers/storage';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }

    #exportCode {
      overflow-y: auto;
      max-width: 500px;
      white-space: nowrap;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(3px);
    }
  </style>

  <dialog class="shadow rounded" part="dialog">
    <div class="modal-header">
      <h2 class="modal-title h5">Export feeds</h2>

      <form method="dialog">
        <button class="btn btn-default">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </form>
    </div>

    <div class="modal-body">
      <div class="d-flex justify-content-end">
        <clipboard-copy>
          <button class="btn btn-sm btn-default" slot="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><title>Copy</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <span class="label">Copy</span>
          </button>
        </clipboard-copy>

        <web-share class="${!isWebShareSupported() ? 'd-none' : ''}">
          <button class="btn btn-sm btn-default" slot="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><title>Share Social</title><circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"/></svg>
            <span class="label">Share</span>
          </button>
        </web-share>
      </div>

      <div class="card mt-2">
        <div class="card-body">
          <code id="exportCode" class="d-block hide-scrollbars"></code>
        </div>
      </div>
    </div>
  </dialog>

  <button type="button" id="exportBtn" class="btn btn-sm btn-default d-inline-flex align-items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18">
      <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 272l80 80 80-80M256 48v288"/>
    </svg>
    Export
  </button>
`;

class ExportFeeds extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.exportBtn = this.shadowRoot.getElementById('exportBtn');
    this.clipboardCopyEl = this.shadowRoot.querySelector('clipboard-copy');
    this.dialogEl = this.shadowRoot.querySelector('dialog');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  connectedCallback() {
    this.exportBtn.addEventListener('click', this._handleTriggerExport);
    this.clipboardCopyEl.addEventListener('clipboard-copy:success', this._handleCopy);
    this.dialogEl.addEventListener('click', this._handleDialogClick);
  }

  disconnectedCallback() {
    this.exportBtn.removeEventListener('click', this._handleTriggerExport);
    this.clipboardCopyEl.removeEventListener('clipboard-copy:success', this._handleCopy);
    this.dialogEl.addEventListener('click', this._handleDialogClick);
    clearTimeout(this._copyTimeout);
  }

  _handleTriggerExport = () => {
    const feedsToExport = getFeeds().map(f => f.url).join('~');
    this.shadowRoot.getElementById('exportCode').innerHTML = feedsToExport;
    this.shadowRoot.querySelector('clipboard-copy').value = feedsToExport;
    this.shadowRoot.querySelector('web-share').shareText = feedsToExport;
    this.dialogEl.showModal();
  };

  _handleCopy = evt => {
    const labelEl = evt.target.querySelector('.label');

    labelEl.textContent = 'Copied';

    this._copyTimeout = setTimeout(() => {
      labelEl.textContent = 'Copy';
    }, 1000);
  };

  _handleDialogClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.dialogEl.close();
    }
  };
}

if (!window.customElements.get('export-feeds')) {
  window.customElements.define('export-feeds', ExportFeeds);
}
