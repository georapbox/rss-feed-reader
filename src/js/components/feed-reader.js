import { styleSheets } from '../helpers/styles';
import { getFeeds } from '../helpers/storage.js';
import { fetchFeed } from '../helpers/fetch-feeds.js';

const template = document.createElement('template');

let controller;

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

    details[open] summary {
      padding-bottom: 0.5rem;
    }

    details:not([open]):not(.card details):last-child summary {
      margin-bottom: 1rem;
    }
  </style>

  <dialog class="w-100 h-100 mw-100 mh-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
          <div class="modal-header border-0 px-0 justify-content-start">
            <form method="dialog">
              <button type="submit" class="btn btn-default text-primary me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                <span class="visually-hidden">Back</span>
              </button>
            </form>

            <h2 class="modal-title h4 text-truncate"></h2>
          </div>

          <div id="spinner" class="d-none">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <div class="spinner-border" style="color: var(--primary-color); border-width: 0.2rem; width: 1.5rem; height: 1.5rem;" role="status"></div>
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

    this.spinnerEl = this.shadowRoot.getElementById('spinner');
    this.dialogEl = this.shadowRoot.querySelector('dialog');
    this.modalTitle = this.dialogEl.querySelector('.modal-title');
    this.feedsViewer = this.shadowRoot.getElementById('feedsViewer');
    this.errorEl = this.shadowRoot.getElementById('error');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  connectedCallback() {
    document.addEventListener('display-feed', this._onDialogOpen);
    this.dialogEl.addEventListener('close', this._onDialogClose);
  }

  disconnectedCallback() {
    document.removeEventListener('display-feed', this._onDialogOpen);
    this.dialogEl.removeEventListener('close', this._onDialogClose);
  }

  _onDialogClose = () => {
    controller && controller.abort();
    document.body.classList.remove('overflow-hidden');
    this._resetDialogContent();
  };

  _onDialogOpen = evt => {
    document.body.classList.add('overflow-hidden');
    this.dialogEl.showModal();
    this._renderFeed(evt.detail.feedUrl);
  };

  _resetDialogContent() {
    this.feedsViewer.querySelectorAll('.card').forEach(el => el.remove());
    this.modalTitle.textContent = '';
    this.spinnerEl.classList.add('d-none');
    this.errorEl.classList.add('d-none');
  }

  async _renderFeed(feedUrl) {
    const feeds = getFeeds();
    const feed = feeds.find(item => item.url === feedUrl);

    if (feed) {
      this.spinnerEl.classList.remove('d-none');

      controller = new AbortController();

      try {
        const data = await fetchFeed(feed.url, {
          signal: controller.signal
        });

        this.modalTitle.textContent = data.feed.title || feed.url;

        data.items.forEach(item => {
          this.feedsViewer.insertAdjacentHTML('beforeend', this._feedsReaderTemplate(item));
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
          this.modalTitle.textContent = '';
          this.errorEl.classList.remove('d-none');
        }
      } finally {
        this.spinnerEl.classList.add('d-none');
      }
    }
  }

  _feedsReaderTemplate(item) {
    const { link, title, description, author, pubDate } = item;
    let formattedDate = '';

    try {
      formattedDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium'
      }).format(new Date(pubDate));
    } catch {
      formattedDate = '-';
    }

    return /* html */`
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-block d-md-flex align-items-start flex-wrap">
            <div style="flex: 1;">
              <a href="${link}" target="_blank" rel="noreferrer noopener">
                <h5 class="card-title">${title}</h5>
              </a>

              <div class="mb-2">
                <p class="mb-0"><strong>Author:</strong> ${author || '-'}</p>
                <p class="mb-0"><strong>Published:</strong> ${formattedDate}</p>
              </div>
            </div>
          </div>

          <details>
            <summary>Article</summary>
            <div class="feed-description-viewer">
              ${description}
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
