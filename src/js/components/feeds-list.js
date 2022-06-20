import { styleSheets } from '../helpers/styles';
import { getFeeds, saveFeed, deleteFeed, setFeedsOptionsStatus, getFeedsOptionsStatus } from '../helpers/storage.js';
import './export-feeds.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }
  </style>

  <details id="editFeedsToggle">
    <summary>Edit feeds</summary>

    <ul class="list-group mt-1" id="feedsList"></ul>

    <export-feeds class="mt-2"></export-feeds>
  </details>

  <div class="alert alert-info d-flex align-items-center mt-3 mb-1 d-none" role="alert" id="reloadInfo">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
    <span>
      There have been changes in the feeds list. <a href="/" class="alert-link">Reload</a>
    </span>
  </div>
`;

class FeedsList extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = styleSheets;

    this.$editFeedsToggleEl = this.shadowRoot.getElementById('editFeedsToggle');
    this.$feedsListEl = this.shadowRoot.getElementById('feedsList');
    this.$reloadInfoEl = this.shadowRoot.getElementById('reloadInfo');

    this._handleFeedsUpdatedEvent = this._handleFeedsUpdatedEvent.bind(this);
  }

  connectedCallback() {
    getFeeds().forEach((feed => this._addFeed(feed)));

    this._toggleFeedsVisibility();

    this.$editFeedsToggleEl.open = ['open', null].includes(getFeedsOptionsStatus());

    this.$editFeedsToggleEl.addEventListener('toggle', this._onEditFeedsToggle);
    this.$feedsListEl.addEventListener('click', this._handleFeedActions);
    document.addEventListener('feeds-updated', this._handleFeedsUpdatedEvent);
  }

  disconnectedCallback() {
    this.$editFeedsToggleEl.removeEventListener('toggle', this._onEditFeedsToggle);
    this.$feedsListEl.removeEventListener('click', this._handleFeedActions);
    document.removeEventListener('feeds-updated', this._handleFeedsUpdatedEvent);
  }

  _handleFeedsUpdatedEvent(evt) {
    const $exportFeedsEl = this.shadowRoot.querySelector('export-feeds');

    if (evt.detail.action === 'edit') {
      this._updateFeedStatus(evt.detail.feed);
    }

    if (evt.detail.action === 'delete') {
      $exportFeedsEl.open = false;
      this._removeFeed(evt.detail.feed);
    }

    if (evt.detail.action === 'add') {
      $exportFeedsEl.open = false;
      this._addFeed(evt.detail.feed);
    }

    this.$reloadInfoEl.classList.remove('d-none');
  }

  _handleFeedActions(evt) {
    const target = evt.target;
    const [switchInput, deleteButton] = [target.closest('input'), target.closest('button')];

    if (!switchInput && !deleteButton) {
      return;
    }

    const feedItem = target.closest('li');
    const feedUrl = feedItem.getAttribute('data-feedurl');

    if (switchInput) {
      saveFeed({ url: feedUrl, active: target.checked });
    } else if (deleteButton) {
      deleteFeed(feedUrl);
    }
  }

  _toggleFeedsVisibility() {
    const feeds = getFeeds();
    this.$editFeedsToggleEl.classList.toggle('d-none', feeds.length === 0);
  }

  _addFeed(feed) {
    const textContainer = document.createElement('span');
    textContainer.className = 'text-truncate';
    textContainer.textContent = feed.url;

    const switchInput = document.createElement('input');
    switchInput.className = 'form-check-input';
    switchInput.type = 'checkbox';
    switchInput.role = 'switch';
    switchInput.setAttribute('aria-label', 'Active');
    switchInput.toggleAttribute('checked', feed.active);

    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'form-check form-switch mb-0';
    checkboxContainer.appendChild(switchInput);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.title = 'Delete feed';
    deleteButton.className = 'btn btn-link text-danger p-1';
    deleteButton.style.lineHeight = '1';
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>';

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'd-flex align-items-center gap-1';
    optionsContainer.appendChild(checkboxContainer);
    optionsContainer.appendChild(deleteButton);

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.setAttribute('data-feedurl', feed.url);
    listItem.appendChild(textContainer);
    listItem.appendChild(optionsContainer);

    this.$feedsListEl.appendChild(listItem);

    this._toggleFeedsVisibility();
  }

  _updateFeedStatus(feed) {
    const listItem = this.$feedsListEl.querySelector(`[data-feedurl="${feed.url}"]`);

    if (listItem) {
      const switchInput = listItem.querySelector('input[type="checkbox"]');
      switchInput && switchInput.toggleAttribute('checked', feed.active);
    }
  }

  _removeFeed(feed) {
    const listItem = this.$feedsListEl.querySelector(`[data-feedurl="${feed.url}"]`);
    listItem && listItem.remove();
    this._toggleFeedsVisibility();
  }

  _onEditFeedsToggle(evt) {
    setFeedsOptionsStatus(evt.target.open ? 'open' : 'closed');
  }
}

if (!window.customElements.get('feeds-list')) {
  window.customElements.define('feeds-list', FeedsList);
}
