import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { styleSheets } from '../helpers/styles.js';
import { getFeeds } from '../helpers/storage.js';

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

    dialog,
    dialog::backdrop {
      transition: transform 0.2s, opacity 0.2s, display 0.2s allow-discrete, overlay 0.2s allow-discrete;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
    }

    dialog[open]::backdrop {
      opacity: 1;
    }

    /* IS-OPEN STATE */
    dialog[open] {
      transform: translateY(0);
      opacity: 1;
    }

    /* EXIT STATE */
    dialog {
      transform: translateY(-50px);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      dialog[open] {
        transform: translateY(20px);
        opacity: 0;
      }

      dialog[open]::backdrop {
        opacity: 0;
      }
    }

    clipboard-copy::part(button) {
      background-color: transparent;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
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
  </style>

  <dialog class="shadow rounded" part="dialog">
    <div class="d-flex align-items-center justify-content-between px-3 pt-3" style="gap: 1.5rem;">
      <h2 class="h5 m-0">Export feeds</h2>

      <form method="dialog">
        <button type="submit" class="d-flex align-items-center justify-content-center btn btn-outline-primary p-0" style="width: 36px; height: 36px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
          <span class="visually-hidden">Close</span>
        </button>
      </form>
    </div>

    <div class="p-3">
      <div class="d-flex justify-content-end">
        <clipboard-copy feedback-duration="1500">
          <span slot="copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            Copy
          </span>
          <span slot="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            Copied
          </span>
        </clipboard-copy>

        <web-share class="${!isWebShareSupported() ? 'd-none' : ''}">
          <button slot="button" class="btn btn-sm btn-default d-flex align-items-center gap-1">
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
`;

class ExportFeeds extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.clipboardCopyEl = this.shadowRoot.querySelector('clipboard-copy');
    this.exportDialogEl = this.shadowRoot.querySelector('dialog');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name) {
    if (name === 'open') {
      if (this.open) {
        this.openExportfeedsModal();
      }
    }
  }

  connectedCallback() {
    this.exportDialogEl.addEventListener('click', this.onExportDialogClick);
    this.exportDialogEl.addEventListener('close', this.onExportDialogClose);
  }

  disconnectedCallback() {
    this.exportDialogEl.addEventListener('click', this.onExportDialogClick);
    this.exportDialogEl.removeEventListener('close', this.onExportDialogClose);
    clearTimeout(this._copyTimeout);
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

  async openExportfeedsModal() {
    const { value: feeds = [] } = await getFeeds();
    const feedsToExport = feeds.map(f => f.url).join('~');
    this.shadowRoot.getElementById('exportCode').innerHTML = feedsToExport;
    this.clipboardCopyEl.value = feedsToExport;
    this.shadowRoot.querySelector('web-share').shareText = feedsToExport;
    this.exportDialogEl.showModal();
  }

  closeExportfeedsModal() {
    this.exportDialogEl.close();
  }

  onExportDialogClose = () => {
    this.open = false;
  };

  onExportDialogClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.closeExportfeedsModal();
    }
  };
}

if (!window.customElements.get('export-feeds')) {
  window.customElements.define('export-feeds', ExportFeeds);
}
