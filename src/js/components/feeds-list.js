// import Sortable from 'sortablejs';
import Sortable from 'sortablejs/modular/sortable.core.esm.js';
import { styleSheets } from '../helpers/styles';
import {
  getFeeds, setFeeds, saveFeed, deleteFeed, setFeedsOptionsStatus, getFeedsOptionsStatus,
  setShowThumbs, getShowThumbs, setExpandArticles, getExpandArticles
} from '../helpers/storage.js';
import './export-feeds.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
    }

    .sort-handler {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      cursor: grab;
      margin-left: -1rem;
    }
  </style>

  <details id="editFeedsToggle">
    <summary>Edit feeds</summary>

    <div class="d-flex flex-wrap gap-2 gap-sm-4 my-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="showThumbsCheckbox">
        <label class="form-check-label" for="showThumbsCheckbox">
          Show thumbnails
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="expandArticlesCheckbox">
        <label class="form-check-label" for="expandArticlesCheckbox">
          Expand articles by default
        </label>
      </div>
    </div>

    <ul class="list-group mt-1" id="feedsList"></ul>

    <export-feeds class="mt-2"></export-feeds>
  </details>

  <div class="alert alert-info py-2 text-center rounded-0 position-fixed top-0 start-0 w-100 m-0 d-none" style="z-index: 1;" role="alert" id="reloadInfo">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="min-width: 16px;" fill="currentColor" class="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
    <span>
      <a href="" class="alert-link">Reload</a> the page to update feeds.
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

    this.editFeedsToggleEl = this.shadowRoot.getElementById('editFeedsToggle');
    this.feedsListEl = this.shadowRoot.getElementById('feedsList');
    this.reloadInfoEl = this.shadowRoot.getElementById('reloadInfo');
    this.showThumbsCheckbox = this.shadowRoot.getElementById('showThumbsCheckbox');
    this.expandArticlesCheckbox = this.shadowRoot.getElementById('expandArticlesCheckbox');

    this._hadnleFeedError = this._hadnleFeedError.bind(this);
    this._handleFeedsUpdatedEvent = this._handleFeedsUpdatedEvent.bind(this);
    this._handleShowThumbs = this._handleShowThumbs.bind(this);
    this._handleExpandArticles = this._handleExpandArticles.bind(this);
  }

  connectedCallback() {
    getFeeds().forEach((feed => this._addFeed(feed)));

    this._toggleFeedsVisibility();

    this.editFeedsToggleEl.open = ['open', null].includes(getFeedsOptionsStatus());

    this.editFeedsToggleEl.addEventListener('toggle', this._onEditFeedsToggle);
    this.feedsListEl.addEventListener('click', this._handleFeedActions);
    document.addEventListener('feed-error', this._hadnleFeedError);
    document.addEventListener('feeds-updated', this._handleFeedsUpdatedEvent);

    this.showThumbsCheckbox.checked = getShowThumbs();
    this.showThumbsCheckbox.addEventListener('change', this._handleShowThumbs);

    this.expandArticlesCheckbox.checked = getExpandArticles();
    this.expandArticlesCheckbox.addEventListener('change', this._handleExpandArticles);

    new Sortable(this.feedsListEl, {
      animation: 150,
      handle: '.sort-handler',
      onEnd: evt => {
        const feeds = Array.prototype.map.call(evt.to.querySelectorAll('li'), (el) => {
          return {
            url: el.getAttribute('data-feedurl'),
            active: el.hasAttribute('data-active')
          };
        });

        setFeeds(feeds);
      }
    });
  }

  disconnectedCallback() {
    this.editFeedsToggleEl.removeEventListener('toggle', this._onEditFeedsToggle);
    this.feedsListEl.removeEventListener('click', this._handleFeedActions);
    this.showThumbsCheckbox.removeEventListener('change', this._handleShowThumbs);
    this.expandArticlesCheckbox.removeEventListener('change', this._handleExpandArticles);
    document.removeEventListener('feed-error', this._hadnleFeedError);
    document.removeEventListener('feeds-updated', this._handleFeedsUpdatedEvent);
  }

  _hadnleFeedError(evt) {
    const feedListElement = this.shadowRoot.querySelectorAll('.list-group-item')[evt.detail.feedIndex];

    if (feedListElement) {
      feedListElement.innerHTML += /* html */`
        <div class="text-danger text-truncate ms-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="16" height="16"><title>Warning</title><path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/></svg>
          <small>Error fetching feed</small>
        </div>
      `;
    }
  }

  _handleFeedsUpdatedEvent(evt) {
    const exportFeedsEl = this.shadowRoot.querySelector('export-feeds');

    if (evt.detail.action === 'edit') {
      this._updateFeedStatus(evt.detail.feed);
    }

    if (evt.detail.action === 'delete') {
      exportFeedsEl.open = false;
      this._removeFeed(evt.detail.feed);
    }

    if (evt.detail.action === 'add') {
      exportFeedsEl.open = false;
      this._addFeed(evt.detail.feed);
    }

    this.reloadInfoEl.classList.remove('d-none');
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
      switchInput.setAttribute('aria-label', switchInput.checked ? 'Active' : 'Inactive');
      saveFeed({ url: feedUrl, active: switchInput.checked });
    } else if (deleteButton) {
      if (window.confirm(`Are you sure you want to delete feed "${feedUrl}"?`)) {
        deleteFeed(feedUrl);
      }
    }
  }

  _handleShowThumbs(evt) {
    setShowThumbs(evt.target.checked);
    this.reloadInfoEl.classList.remove('d-none');
  }

  _handleExpandArticles(evt) {
    setExpandArticles(evt.target.checked);
    this.reloadInfoEl.classList.remove('d-none');
  }

  _toggleFeedsVisibility() {
    const feeds = getFeeds();
    this.editFeedsToggleEl.classList.toggle('d-none', feeds.length === 0);
  }

  _addFeed(feed) {
    const textContainer = document.createElement('label');
    textContainer.className = 'text-truncate';
    textContainer.style.flex = '1';
    textContainer.textContent = feed.url;
    textContainer.htmlFor = feed.url;

    const switchInput = document.createElement('input');
    switchInput.id = feed.url;
    switchInput.className = 'form-check-input';
    switchInput.type = 'checkbox';
    switchInput.role = 'switch';
    switchInput.setAttribute('aria-label', feed.active ? 'Active' : 'Inactive');
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
    listItem.className = 'list-group-item';
    listItem.setAttribute('data-feedurl', feed.url);
    feed.active && listItem.setAttribute('data-active', '');

    const listItemContent = document.createElement('div');
    listItemContent.className = 'd-flex justify-content-between align-items-center gap-1';

    const sortHandler = document.createElement('div');
    sortHandler.className = 'sort-handler text-primary opacity-75';
    sortHandler.innerHTML = /* html */`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    `;

    listItemContent.appendChild(sortHandler);
    listItemContent.appendChild(textContainer);
    listItemContent.appendChild(optionsContainer);

    listItem.appendChild(listItemContent);

    this.feedsListEl.appendChild(listItem);

    this._toggleFeedsVisibility();
  }

  _updateFeedStatus(feed) {
    const listItem = this.feedsListEl.querySelector(`[data-feedurl="${feed.url}"]`);

    if (listItem) {
      const switchInput = listItem.querySelector('input[type="checkbox"]');
      switchInput && switchInput.toggleAttribute('checked', feed.active);
      listItem.toggleAttribute('data-active', feed.active);
    }
  }

  _removeFeed(feed) {
    const listItem = this.feedsListEl.querySelector(`[data-feedurl="${feed.url}"]`);
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
