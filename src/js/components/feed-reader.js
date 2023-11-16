import '@georapbox/skeleton-placeholder-element/dist/skeleton-placeholder-defined.js';
import { styleSheets } from '../helpers/styles.js';
import { fetchFeed } from '../helpers/fetch-feeds.js';
import { getFeeds, saveFeed } from '../helpers/storage.js';

const template = document.createElement('template');

let controller;

const renderModalTitleSkeleton = () => {
  return /* html */`
    <skeleton-placeholder style="--color: var(--skeleton-color); height: 26px;"></skeleton-placeholder>
  `;
};

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }

    img[src=""] {
      display: none !important;
    }

    .thumbnail {
      display: block;
      object-fit: cover;
      min-width: 90px;
      width: 90px;
    }

    @media (min-width: 500px) {
      .thumbnail {
        min-width: 120px;
        width: 120px;
      }
    }

    .feed-description-viewer img,
    .feed-description-viewer video {
      max-width: 100%;
      height: auto;
    }

    details summary {
      transition: margin 0.1s ease-out;
    }

    details[open] summary {
      margin-bottom: 0.75rem;
    }

    details:not([open]):not(.card details):last-child summary {
      margin-bottom: 1rem;
    }

    #feedsReaderModal {
      --me-border-radius: 0;
      --body-max-width: 1200px;
    }

    #feedsReaderModal::part(header) {
      gap: 1rem;
      width: 100%;
      max-width: var(--body-max-width);
      margin: 0 auto;
      justify-content: space-between;
    }

    #feedsReaderModal::part(title) {
      min-width: 0;
    }

    #feedsReaderModal .modal-body {
      max-width: var(--body-max-width);
      margin: 0 auto;
    }

    #feedsViewer,
    #spinner {
      padding: 0 1rem;
    }

    @media screen and (max-width: 1200px) {
      #feedsViewer,
      #spinner {
        padding: 0;
      }
    }

    @media (prefers-color-scheme: dark) {
      #feedsReaderModal::part(header) {
        border-color: var(--bs-gray-700);
      }
    }
  </style>

  <modal-element fullscreen no-animations static-backdrop id="feedsReaderModal">
    <h2 slot="header" id="feedTitle" class="h5 mb-0 text-truncate">
      ${renderModalTitleSkeleton()}
    </h2>

    <div class="modal-body">
      <div id="spinner" class="d-none">
        ${
          Array.from({ length: 6 }).map(() => {
            return /* html */`
              <skeleton-placeholder class="mb-3" style="--color: var(--skeleton-color);">
                <div class="p-3 d-flex justify-content-between gap-3">
                  <div class="w-100">
                    <skeleton-placeholder effect="fade" class="mb-2" style="--color: var(--skeleton-color); max-width: 500px; height: 26px; filter: brightness(80%);"></skeleton-placeholder>
                    <skeleton-placeholder effect="fade" class="mb-2" style="--color: var(--skeleton-color); max-width: 250px; height: 21px; filter: brightness(80%);"></skeleton-placeholder>
                    <skeleton-placeholder effect="fade" class="mb-0" style="--color: var(--skeleton-color); max-width: 120px; height: 21px; filter: brightness(80%);"></skeleton-placeholder>
                  </div>
                  <skeleton-placeholder effect="fade" class="mb-0" style="--color: var(--skeleton-color); width: 120px; height: 70px; filter: brightness(80%);"></skeleton-placeholder>
                </div>
              </skeleton-placeholder>
            `;
          }).join('')
        }
      </div>

      <div id="error" class="alert alert-danger d-none">Error fetching feed.</div>

      <div id="feedsViewer"></div>
    </div>
  </modal-element>
`;

class FeedReader extends HTMLElement {
  #spinnerEl;
  #dialogEl;
  #modalTitle;
  #feedsViewer;
  #errorEl;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.#spinnerEl = this.shadowRoot.getElementById('spinner');
    this.#dialogEl = this.shadowRoot.querySelector('modal-element');
    this.#modalTitle = this.#dialogEl.querySelector('#feedTitle');
    this.#feedsViewer = this.shadowRoot.getElementById('feedsViewer');
    this.#errorEl = this.shadowRoot.getElementById('error');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  static get observedAttributes() {
    return ['feed-url'];
  }

  attributeChangedCallback(name) {
    if (name === 'feed-url') {
      this.feedUrl ? this.#openFeed(this.feedUrl) : this.#closeFeed();
    }
  }

  connectedCallback() {
    this.#dialogEl.addEventListener('me-close', this.#handleFeedClose);
  }

  disconnectedCallback() {
    this.#dialogEl.removeEventListener('me-close', this.#handleFeedClose);
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

  #openFeed(feedUrl) {
    this.#dialogEl.open = true;
    this.#renderFeed(feedUrl);
  }

  #closeFeed() {
    this.#dialogEl.open = false;
  }

  #handleFeedClose = () => {
    controller && controller.abort();
    this.#resetDialogContent();
    this.feedUrl = null;
  };

  #resetDialogContent() {
    this.#feedsViewer.querySelectorAll('.card').forEach(el => el.remove());
    this.#modalTitle.innerHTML = renderModalTitleSkeleton();
    this.#spinnerEl.classList.add('d-none');
    this.#errorEl.classList.add('d-none');
  }

  async #renderFeed(feedUrl) {
    this.#spinnerEl.classList.remove('d-none');

    controller = new AbortController();

    try {
      const data = await fetchFeed(feedUrl, {
        signal: controller.signal
      });

      const { value: feeds = [] } = await getFeeds();
      const currentFeed = feeds.find(feed => feed.url === feedUrl);

      // Now that feed's title is available, save it to storage.
      if (currentFeed && !currentFeed.title) {
        await saveFeed({
          url: feedUrl,
          title: data.feed.title || ''
        });
      }

      this.#modalTitle.textContent = data.feed.title || feedUrl;

      data.items.forEach(item => {
        this.#feedsViewer.insertAdjacentHTML('beforeend', this.#feedsReaderTemplate(item));
      });
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error(error);
        this.#modalTitle.textContent = '';
        this.#errorEl.classList.remove('d-none');
      }
    } finally {
      this.#spinnerEl.classList.add('d-none');
    }
  }

  #feedsReaderTemplate(item) {
    const { link, title, description, author, pubDate, thumbnail } = item;
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
          <a href="${link}" target="_blank" rel="noreferrer noopener" class="d-flex justify-content-between gap-3 text-decoration-none" style="color: inherit;">
            <div style="min-width: 0;">
              <h5 class="card-title h6">${title}</h5>
              <p class="text-muted text-truncate"><small>${formattedDate} ${author ? `&bull; ${author}` : ''}</small></p>
            </div>

            <img src="${thumbnail}" alt="${title}" width="120" height="70" class="thumbnail rounded" loading="lazy" />
          </a>

          <details>
            <summary>Read more...</summary>
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
