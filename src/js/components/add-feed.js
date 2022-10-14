import { styleSheets } from '../helpers/styles';
import { getFeeds, saveFeed } from '../helpers/storage.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      --input-height: 42px;

      display: block;
    }
  </style>

  <form name="addFeedForm" autocomplete="off" class="d-flex">
    <div class="form-group" style="flex: 1;">
      <input type="text" name="feed-url" class="form-control" style="height: var(--input-height);" placeholder="Enter a feed URL in XML format" autocapitalize="off" autocorrect="off" required>
    </div>
    <div class="ms-2">
      <input type="submit" value="Add feed" class="btn btn-primary" style="height: var(--input-height);">
    </div>
  </form>

  <em style="font-size: 0.75rem;">Add multiple URLs separated with tilde (~).</em>
`;

class AddFeed extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = styleSheets;

    this.formEl = this.shadowRoot.querySelector('form[name="addFeedForm"]');
  }

  connectedCallback() {
    this.formEl.addEventListener('submit', this.onFormSubmission);
  }

  disconnectedCallback() {
    this.formEl.addEventListener('submit', this.onFormSubmission);
  }

  onFormSubmission(evt) {
    evt.preventDefault();

    const input = evt.target['feed-url'];
    const { value } = input;

    value.split('~').forEach(url => {
      const urlExists = Boolean(getFeeds().find(feed => feed.url === url));
      let isValidUrl = true;

      try {
        new URL(url);
      } catch {
        isValidUrl = false;
      }

      if (!urlExists && isValidUrl) {
        saveFeed({ url });
      }
    });

    input.value = '';
  }
}

if (!window.customElements.get('add-feed')) {
  window.customElements.define('add-feed', AddFeed);
}
