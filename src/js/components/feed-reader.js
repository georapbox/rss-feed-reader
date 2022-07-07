import { styleSheets } from '../helpers/styles';
import { getFeeds, getShowThumbs } from '../helpers/storage.js';
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

    getFeeds().forEach(async feed => {
      if (feed.active) {
        feedsViewer.innerHTML += /* html */`
          <skeleton-placeholder effect="fade" class="my-2" style="max-width: 300px; height: 22px;"></skeleton-placeholder>
          <skeleton-placeholder effect="fade" class="mb-4" style="height: 80px;"></skeleton-placeholder>
        `;

        try {
          const data = await fetchFeed(feed.url);

          const details = document.createElement('details');
          details.open = true;

          const summary = document.createElement('summary');
          summary.textContent = data.feed.title || feed.url;

          details.appendChild(summary);

          data.items.forEach(item => {
            details.insertAdjacentHTML('beforeend', this._feedsReaderTemplate(data, item));
          });

          feedsViewer.appendChild(details);
        } catch (error) {
          // TODO Improve error handling
          console.error(error);
        } finally {
          [...feedsViewer.querySelectorAll('skeleton-placeholder')].forEach(el => el.remove());
        }
      }
    });
  }

  _feedsReaderTemplate(data, item) {
    const thumbnail = getShowThumbs() ? `<img src="${item.thumbnail}" alt="${item.title}" class="me-3 mb-3 rounded" width="150">` : '';

    return /* html */`
      <div class="card mb-4">
        <div class="card-body">
          <div class="d-block d-md-flex align-items-start flex-wrap">
            ${thumbnail}

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
