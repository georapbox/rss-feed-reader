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

    .feed-description-viewer img {
      max-width: 100%;
      height: auto;
    }
  </style>

  <div id="feedsViewer"></div>
`;

class FeedReader extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  connectedCallback() {
    const feedsViewer = this.shadowRoot.getElementById('feedsViewer');

    feedsViewer.innerHTML = '';

    getFeeds().forEach(async feed => {
      if (feed.active) {
        try {
          const data = await fetchFeed(feed.url);

          data.items.forEach(item => {
            feedsViewer.insertAdjacentHTML('beforeend', this._feedsReaderTemplate(data, item));
          });
        } catch (error) {
          // TODO Improve error handling
          console.error(error);
        }
      }
    });
  }

  _feedsReaderTemplate(data, item) {
    return /* html */`
      <div class="card mb-4">
        <div class="card-body">
          <div class="d-block d-md-flex align-items-start flex-wrap">
            <img src="${item.thumbnail}" alt="${item.title}" class="me-3 mb-3 rounded" width="150">

            <div style="flex: 1;">
              <a href="${item.link}" target="_blank" rel="noreferrer noopener" class="text-decoration-none">
                <h5 class="card-title">${item.title}</h5>
              </a>

              <p class="mb-0 "><strong>From:</strong> ${data.feed.title}</p>
              <p class="mb-0 "><strong>Author:</strong> ${item.author || '-'}</p>
              <p class=""><strong>Published Date:</strong> ${item.pubDate}</p>
            </div>
          </div>

          <div class="feed-description-viewer">
            ${item.description}
          </div>
        </div>
      </div>
    `;
  }
}

if (!window.customElements.get('feed-reader')) {
  window.customElements.define('feed-reader', FeedReader);
}
