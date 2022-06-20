import { styleSheets } from '../helpers/styles';
import { getFeeds, saveFeed } from '../helpers/storage.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }
  </style>

  <form name="addFeedForm" autocomplete="off" class="d-flex">
    <div class="form-group" style="flex: 1;">
      <input type="url" name="feed-url" class="form-control" placeholder="Enter a feed URL in XML format" required>
    </div>
    <div class="ms-1">
      <input type="submit" value="Add feed" class="btn btn-primary">
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

    this.$form = this.shadowRoot.querySelector('form[name="addFeedForm"]');
  }

  connectedCallback() {
    this.$form.addEventListener('submit', this._handleFormSubmission);
  }

  disconnectedCallback() {
    this.$form.addEventListener('submit', this._handleFormSubmission);
  }

  _handleFormSubmission(evt) {
    evt.preventDefault();

    const input = evt.target['feed-url'];
    const { value } = input;

    value.split('~').forEach(v => {
      if (!getFeeds().find(f => f.url === v)) {
        saveFeed({ url: v, active: false }); // FIXME Change "active" to true
      }
    });

    input.value = '';
  }
}

if (!window.customElements.get('add-feed')) {
  window.customElements.define('add-feed', AddFeed);
}
