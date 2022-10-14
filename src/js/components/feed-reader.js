import '@georapbox/skeleton-placeholder-element/dist/skeleton-placeholder-defined.min.js';
import { styleSheets } from '../helpers/styles';
import { fetchFeed } from '../helpers/fetch-feeds.js';

const template = document.createElement('template');

let controller;

const renderModalTitleSkeleton = () => {
  return /* html */`
      <skeleton-placeholder style="--color: var(--skeleton-color); max-width: 250px; height: 26px;"></skeleton-placeholder>
    `;
};

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

            <h2 class="modal-title h4 text-truncate d-block" style="flex: 1;">
              ${renderModalTitleSkeleton()}
            </h2>
          </div>

          <div id="spinner" class="d-none">
            ${
              Array.from({ length: 5 }).map(() => {
                return /* html */`
                  <skeleton-placeholder class="mb-3" style="--color: var(--skeleton-color);">
                    <div class="p-3">
                      <skeleton-placeholder class="mb-2" style="--color: var(--skeleton-color); max-width: 500px; height: 26px; filter: brightness(80%);"></skeleton-placeholder>
                      <skeleton-placeholder class="mb-2" style="--color: var(--skeleton-color); max-width: 250px; height: 21px; filter: brightness(80%);"></skeleton-placeholder>
                      <skeleton-placeholder class="mb-2" style="--color: var(--skeleton-color); max-width: 250px; height: 21px; filter: brightness(80%);"></skeleton-placeholder>
                      <skeleton-placeholder class="mb-0" style="--color: var(--skeleton-color); max-width: 100px; height: 21px; filter: brightness(80%);"></skeleton-placeholder>
                    </div>
                  </skeleton-placeholder>
                `;
              }).join('')
            }
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

  static get observedAttributes() {
    return ['feed-url'];
  }

  attributeChangedCallback(name) {
    if (name === 'feed-url') {
      this.feedUrl ? this.openFeed(this.feedUrl) : this.closeFeed();
    }
  }

  connectedCallback() {
    this.feedUrl = new URLSearchParams(location.search).get('feed');
    window.addEventListener('popstate', this.onHistoryPopstate);
    this.dialogEl.addEventListener('close', this.onFeedClose);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.onHistoryPopstate);
    this.dialogEl.removeEventListener('close', this.onFeedClose);
  }

  get feedUrl() {
    return this.getAttribute('feed-url');
  }

  set feedUrl(value) {
    if (value) {
      this.setAttribute('feed-url', value);
    } else {
      this.removeAttribute('feed-url');
    }
  }

  onHistoryPopstate = () => {
    this.feedUrl = new URLSearchParams(location.search).get('feed');
  };

  openFeed(feedUrl) {
    document.body.classList.add('overflow-hidden');
    this.dialogEl.showModal();
    this.renderFeed(feedUrl);
  }

  closeFeed() {
    this.dialogEl.close();
  }

  onFeedClose = () => {
    controller && controller.abort();
    document.body.classList.remove('overflow-hidden');
    this.resetDialogContent();

    if (this.feedUrl) {
      if (window.history.length > 2) {
        history.back();
      } else {
        window.history.replaceState(null, '', '/');
      }
    }

    this.feedUrl = null;
  };

  resetDialogContent() {
    this.feedsViewer.querySelectorAll('.card').forEach(el => el.remove());
    this.modalTitle.innerHTML = renderModalTitleSkeleton();
    this.spinnerEl.classList.add('d-none');
    this.errorEl.classList.add('d-none');
  }

  async renderFeed(feedUrl) {
    this.spinnerEl.classList.remove('d-none');

    controller = new AbortController();

    try {
      const data = await fetchFeed(feedUrl, {
        signal: controller.signal
      });

      this.modalTitle.textContent = data.feed.title || feedUrl;

      data.items.forEach(item => {
        this.feedsViewer.insertAdjacentHTML('beforeend', this.feedsReaderTemplate(item));
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

  feedsReaderTemplate(item) {
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
