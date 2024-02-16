import { styleSheets } from '../helpers/styles.js';
import { getFeeds, saveFeed } from '../helpers/storage.js';
import { canParseURL } from '../utils/canParseURL.js';

const styles = /* css */`
  :host {
    --input-height: 42px;
    display: block;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>${styles}</style>

  <form name="addFeedForm" autocomplete="off" class="d-flex">
    <div class="form-group" style="flex: 1;">
      <input type="url" name="feed-url" class="form-control" style="height: var(--input-height);" placeholder="Enter a feed URL in XML format" autocapitalize="off" autocorrect="off" required>
    </div>
    <div class="ms-2">
      <input type="submit" value="Add feed" class="btn btn-primary" style="height: var(--input-height);">
    </div>
  </form>
`;

class AddFeed extends HTMLElement {
  #formEl;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = styleSheets;

    this.#formEl = this.shadowRoot.querySelector('form[name="addFeedForm"]');
  }

  connectedCallback() {
    this.#formEl.addEventListener('submit', this.#handleFormSubmission);
  }

  disconnectedCallback() {
    this.#formEl.addEventListener('submit', this.#handleFormSubmission);
  }

  async #handleFormSubmission(evt) {
    evt.preventDefault();

    const input = evt.target['feed-url'];
    const url = input.value.trim();
    const { value: feeds = [] } = await getFeeds();
    const urlExists = Boolean(feeds.find(feed => feed.url === url));
    const isValidURL = canParseURL(url);

    if (!urlExists && isValidURL) {
      await saveFeed({
        url,
        title: '' // Title is not available at this point; it will be fetched later.
      });
    }

    input.value = '';
  }
}

if (!window.customElements.get('add-feed')) {
  window.customElements.define('add-feed', AddFeed);
}
