// import Sortable from 'sortablejs';
import Sortable from 'sortablejs/modular/sortable.core.esm.js';
import { styleSheets } from '../helpers/styles';
import { getFeeds, setFeeds, deleteFeed } from '../helpers/storage.js';
import './export-feeds.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
      --list-item-height: 50px;
    }

    .sort-handler {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: var(--list-item-height);
      cursor: grab;
    }

    .delete-button {
      width: 45px;
      height: var(--list-item-height);
    }
  </style>


<div id="feedsContainer">
  <ul class="list-group" id="feedsList"></ul>
  <export-feeds class="mt-2"></export-feeds>
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

    this.feedsContainerEl = this.shadowRoot.getElementById('feedsContainer');
    this.feedsListEl = this.shadowRoot.getElementById('feedsList');

    this._handleFeedsUpdatedEvent = this._handleFeedsUpdatedEvent.bind(this);
  }

  connectedCallback() {
    getFeeds().forEach((feed => this._addFeed(feed)));

    this._toggleFeedsVisibility();

    this.feedsListEl.addEventListener('click', this._handleFeedActions);
    document.addEventListener('feeds-updated', this._handleFeedsUpdatedEvent);

    new Sortable(this.feedsListEl, {
      animation: 150,
      handle: '.sort-handler',
      onEnd: evt => {
        const feeds = Array.prototype.map.call(evt.to.querySelectorAll('li'), (el) => {
          return {
            url: el.getAttribute('data-feedurl')
          };
        });

        setFeeds(feeds);
      }
    });
  }

  disconnectedCallback() {
    this.feedsListEl.removeEventListener('click', this._handleFeedActions);
    document.removeEventListener('feeds-updated', this._handleFeedsUpdatedEvent);
  }

  _handleFeedsUpdatedEvent(evt) {
    const exportFeedsEl = this.shadowRoot.querySelector('export-feeds');

    if (evt.detail.action === 'delete') {
      exportFeedsEl.open = false;
      this._removeFeed(evt.detail.feed);
    }

    if (evt.detail.action === 'add') {
      exportFeedsEl.open = false;
      this._addFeed(evt.detail.feed);
    }
  }

  _handleFeedActions(evt) {
    const target = evt.target;
    const deleteButton = target.closest('button');
    const linkEl = target.closest('a');

    if (!linkEl && !deleteButton) {
      return;
    }

    const feedItem = target.closest('li');
    const feedUrl = feedItem.getAttribute('data-feedurl');

    if (deleteButton) {
      if (window.confirm(`Are you sure you want to delete feed "${feedUrl}"?`)) {
        deleteFeed(feedUrl);
      }
    }

    if (linkEl) {
      evt.preventDefault();

      document.dispatchEvent(new CustomEvent('display-feed', {
        bubbles: true,
        detail: {
          feedUrl: linkEl.getAttribute('data-url')
        }
      }));
    }
  }

  _addFeed(feed) {
    const link = document.createElement('a');
    link.className = 'text-decoration-none d-flex align-items-center h-100';
    link.style.flex = '1';
    link.style.minWidth = 0;
    link.style.color = 'inherit';
    link.href = feed.url;
    link.setAttribute('data-url', feed.url);

    const linkContent = document.createElement('div');
    linkContent.className = 'text-truncate';
    linkContent.textContent = feed.url;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.title = 'Delete feed';
    deleteButton.className = 'delete-button btn btn-link text-danger p-0';
    deleteButton.style.lineHeight = '1';
    deleteButton.innerHTML = /* html */`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `;

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item p-0 d-flex justify-content-between align-items-center';
    listItem.style.height = 'var(--list-item-height)';
    listItem.setAttribute('data-feedurl', feed.url);

    const sortHandler = document.createElement('div');
    sortHandler.className = 'sort-handler';
    sortHandler.innerHTML = /* html */`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    `;

    link.appendChild(linkContent);
    listItem.appendChild(sortHandler);
    listItem.appendChild(link);
    listItem.appendChild(deleteButton);

    this.feedsListEl.appendChild(listItem);

    this._toggleFeedsVisibility();
  }

  _removeFeed(feed) {
    const listItem = this.feedsListEl.querySelector(`[data-feedurl="${feed.url}"]`);
    listItem && listItem.remove();
    this._toggleFeedsVisibility();
  }

  _toggleFeedsVisibility() {
    const feeds = getFeeds();
    this.feedsContainerEl.classList.toggle('d-none', feeds.length === 0);
  }
}

if (!window.customElements.get('feeds-list')) {
  window.customElements.define('feeds-list', FeedsList);
}
