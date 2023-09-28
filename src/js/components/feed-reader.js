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
          <div class="d-flex justify-content-between pt-4 pb-3" style="gap: 1.5rem;">
            <h2 id="feedTitle" class="h5 mb-0" style="flex: 1;">
              ${renderModalTitleSkeleton()}
            </h2>

            <form method="dialog">
              <button type="submit" class="d-flex align-items-center justify-content-center btn btn-outline-primary p-0" style="width: 36px; height: 36px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <span class="visually-hidden">Close</span>
              </button>
            </form>
          </div>

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
      </div>
    </div>
  </dialog>
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
    this.#dialogEl = this.shadowRoot.querySelector('dialog');
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
    this.#dialogEl.addEventListener('close', this.#handleFeedClose);
  }

  disconnectedCallback() {
    this.#dialogEl.removeEventListener('close', this.#handleFeedClose);
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
    document.body.classList.add('overflow-hidden');
    this.#dialogEl.showModal();
    this.#renderFeed(feedUrl);
  }

  #closeFeed() {
    this.#dialogEl.close();
  }

  #handleFeedClose = () => {
    controller && controller.abort();
    document.body.classList.remove('overflow-hidden');
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
