import { styleSheets } from '../helpers/styles.js';
import { fetchFeed } from '../helpers/fetch-feeds.js';
import { getFeeds, saveFeed } from '../helpers/storage.js';

let controller;

const styles = /* css */ `
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

  #spinner,
  #error {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    text-align: center;
    color: var(--body-color);
  }

  #feedsReaderModal {
    --me-border-radius: 0;
    --body-max-width: 1200px;
  }

  @supports (color: rgb(from white r g b)) {
    #feedsReaderModal {
      --me-background-color: rgb(from var(--body-bg) r g b / 0.75);
    }
  }

  #feedsReaderModal::part(base) {
    backdrop-filter: blur(4px);
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
    position: relative;
    max-width: var(--body-max-width);
    margin: 0 auto;
    min-height: 100%;
  }

  #feedsViewer {
    padding: 0 1rem;
  }

  @media screen and (max-width: 1200px) {
    #feedsViewer {
      padding: 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    #feedsReaderModal::part(header) {
      border-color: var(--bs-gray-700);
    }
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>

  <modal-element fullscreen no-animations static-backdrop id="feedsReaderModal">
    <h2 slot="header" id="feedTitle" class="h5 mb-0 text-truncate">

    </h2>

    <div class="modal-body">
      <div id="spinner" class="d-none">
        <span class="spinner-border" aria-hidden="true"></span>
        <span role="status">Please wait...</span>
      </div>

      <div id="error" class="d-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
          <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
        </svg>
        There was an error while fetching the feed.
      </div>

      <div id="feedsViewer"></div>
    </div>
  </modal-element>
`;

class FeedReader extends HTMLElement {
  #spinnerEl = null;
  #dialogEl = null;
  #modalTitle = null;
  #feedsViewer = null;
  #errorEl = null;

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
    this.#modalTitle.innerHTML = '';
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

    return /* html */ `
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
