import { styleSheets } from '../helpers/styles';
import { getFeeds } from '../helpers/storage.js';
import { fetchFeed } from '../helpers/fetch-feeds.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }

    img[src=""] {
      display: none;
    }

    .feed-description-viewer img,
    .feed-description-viewer video {
      max-width: 100%;
      height: auto;
    }

    summary {
      padding-top: 0.5rem;
    }

    details[open] summary {
      padding-bottom: 0.5rem;
    }

    details:not([open]):not(.card details):last-child summary {
      margin-bottom: 1rem;
    }

    dialog,
    .modal-header,
    .modal-body {
      background-color: var(--body-bg);
    }
  </style>

  <dialog class="w-100 h-100 mw-100 mh-100 p-0 border-0">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="modal-header border-0 px-0">
            <h2 class="modal-title h4"></h2>

            <button type="button" id="closeDialog" class="btn bg-transparent" style="color: inherit;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </button>
          </div>

          <div id="spinner" class="d-none">
            <div id="spinner" class="d-flex align-items-center justify-content-center gap-2">
              <div class="spinner-grow" style="color: var(--primary-color);" role="status"></div>
              <span class="fs-5">Loading...</span>
            </div>
          </div>

          <div id="error" class="alert alert-danger d-none">Error fetching feed.</div>

          <div id="feedsViewer"></div>
        </div>
      </div>
    </div>
  </dialog>
`;

class FeedReader extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this._loading = false;

    this.spinnerEl = this.shadowRoot.getElementById('spinner');
    this.dialog = this.shadowRoot.querySelector('dialog');
    this.dialogTitle = this.dialog.querySelector('.modal-title');
    this.feedsViewer = this.shadowRoot.getElementById('feedsViewer');
    this.errorEl = this.shadowRoot.getElementById('error');
    this.closeDialogBtn = this.shadowRoot.getElementById('closeDialog');

    this._onDialogOpen = this._onDialogOpen.bind(this);
    this._onDialogClose = this._onDialogClose.bind(this);
    this._onDialogCancel = this._onDialogCancel.bind(this);
    this._closeDialog = this._closeDialog.bind(this);

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  connectedCallback() {
    document.addEventListener('display-feed', this._onDialogOpen);
    this.dialog.addEventListener('cancel', this._onDialogCancel);
    this.dialog.addEventListener('close', this._onDialogClose);
    this.closeDialogBtn.addEventListener('click', this._closeDialog);
  }

  disconnectedCallback() {
    document.removeEventListener('display-feed', this._onDialogOpen);
    this.dialog.removeEventListener('cancel', this._onDialogCancel);
    this.dialog.removeEventListener('close', this._onDialogClose);
    this.closeDialogBtn.removeEventListener('click', this._closeDialog);
  }

  _closeDialog() {
    if (this._loading) {
      return;
    }

    this.dialog.close();
  }

  _onDialogCancel(evt) {
    if (this._loading) {
      evt.preventDefault();
    }
  }

  _onDialogClose() {
    document.body.classList.remove('overflow-hidden');
    this._resetDialogContent();
  }

  _onDialogOpen(evt) {
    document.body.classList.add('overflow-hidden');
    this.dialog.showModal();
    this._renderFeed(evt.detail.feedUrl);
  }

  _resetDialogContent() {
    this.feedsViewer.querySelectorAll('.card').forEach(el => el.remove());
    this.dialogTitle.textContent = '';
    this.spinnerEl.classList.add('d-none');
    this.errorEl.classList.add('d-none');
  }

  async _renderFeed(feedUrl) {
    const feeds = getFeeds();
    const feed = feeds.find(item => item.url === feedUrl);

    if (feed) {
      this._loading = true;

      this.spinnerEl.classList.remove('d-none');

      try {
        const data = await fetchFeed(feed.url);

        this.dialogTitle.textContent = data.feed.title || feed.url;

        data.items.forEach(item => {
          this.feedsViewer.insertAdjacentHTML('beforeend', this._feedsReaderTemplate(data, item));
        });
      } catch (error) {
        console.error(error);
        this.dialogTitle.textContent = '';
        this.errorEl.classList.remove('d-none');
      } finally {
        this.spinnerEl.classList.add('d-none');
        this._loading = false;
      }
    }
  }

  _feedsReaderTemplate(data, item) {
    return /* html */`
      <div class="card mb-4">
        <div class="card-body">
          <div class="d-block d-md-flex align-items-start flex-wrap">
            <div style="flex: 1;">
              <a href="${item.link}" target="_blank" rel="noreferrer noopener" class="text-decoration-none">
                <h5 class="card-title">${item.title}</h5>
              </a>

              <div style="font-size: 0.9375rem;">
                <p class="mb-0"><strong>From:</strong> ${data.feed.title}</p>
                <p class="mb-0"><strong>Author:</strong> ${item.author || '-'}</p>
                <p><strong>Published:</strong> ${item.pubDate}</p>
              </div>
            </div>
          </div>

          <details>
            <summary>Article</summary>
            <div class="feed-description-viewer">
              ${item.description}
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

if (!window.customElements.get('feed-reader')) {
  window.customElements.define('feed-reader', FeedReader);
}
