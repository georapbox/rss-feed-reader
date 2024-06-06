import Sortable from 'sortablejs/modular/sortable.core.esm.js';
import { styleSheets } from '../helpers/styles.js';
import { getFeeds, setFeeds, deleteFeed } from '../helpers/storage.js';
import { debounce } from '../utils/debounce.js';
import './import-feeds.js';
import './export-feeds.js';

const styles = /* css */`
  :host {
    display: block;
    --list-item-height: 64px;
  }

  .actions-container {
    display: flex;
    position: sticky;
    top: 0;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
    z-index: 1;
    background-color: var(--body-bg);
  }

  .sort-handler {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: var(--list-item-height);
    cursor: grab;
  }

  .sort-handler[hidden]~.link {
    padding-inline: 1rem;
  }

  .delete-button {
    width: 45px;
    height: var(--list-item-height);
  }

  .link-content {
    line-height: 1.2;
  }

  #noFeedsDisclaimer {
    max-width: 550px;
    margin: 2rem auto 0 auto;
  }

  #importDialog {
    --me-body-spacing: 0;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>${styles}</style>

  <div id="feedsContainer" class="d-none">
    <div class="actions-container">
      <div class="input-group me-2 position-relative">
        <span class="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>

        <label for="searchInput" class="visually-hidden">Search feeds...</label>
        <input type="text" id="searchInput" class="form-control rounded-end" placeholder="Search feeds..." autocapitalize="off" autocomplete="off" style="padding-right: 38px;" />

        <button type="button" class="btn btn-default btn-sm h-100 position-absolute top-0 end-0 d-flex align-items-center justify-content-center d-none" id="searchClearBtn" style="width: 38px; z-index: 5;" aria-label="Clear search">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </div>

      <div class="btn-group">
        <button type="button" id="editBtn" class="reorder-button btn btn-outline-primary btn-sm d-flex align-items-center gap-1" aria-label="Edit feeds">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" aria-hidden="true">
            <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" fill="currentColor"/>
          </svg>
          <span class="d-none d-sm-block">Edit</span>
        </button>

        <button type="button" id="importBtn" class="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1" aria-label="Import feeds">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" width="20" height="20" style="transform: rotate(180deg);" aria-hidden="true">
            <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 272l80 80 80-80M256 48v288"/>
          </svg>
          <span class="d-none d-sm-block">Import</span>
        </button>

        <button type="button" id="exportBtn" class="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1" aria-label="Export feeds">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" width="20" height="20" aria-hidden="true">
            <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 272l80 80 80-80M256 48v288"/>
          </svg>
          <span class="d-none d-sm-block">Export</span>
        </button>
      </div>
    </div>

    <ul class="list-group" id="feedsList"></ul>
  </div>

  <div id="noFeedsDisclaimer" class="text-center d-none">
    <p>
      There are no feeds to display. Add a feed by entering a feed URL in the input above or by importing feeds using the button below.
    </p>

    <p>
      <button type="button" id="importAltBtn" class="btn btn-outline-primary d-inline-flex align-items-center justify-content-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" width="18" height="18" style="transform: rotate(180deg);" aria-hidden="true">
          <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 272l80 80 80-80M256 48v288"/>
        </svg>
        Import feeds
      </button>
    </p>
  </div>

  <modal-element id="importDialog">
    <h2 slot="header" class="h5 m-0">Import feeds</h2>
    <import-feeds></import-feeds>
  </modal-element>

  <modal-element id="exportDialog">
    <h2 slot="header" class="h5 m-0">Export feeds</h2>
    <export-feeds></export-feeds>
  </modal-element>
`;

class FeedsList extends HTMLElement {
  #isEditable = false;
  #feedsContainerEl = null;
  #feedsListEl = null;
  #editBtn = null;
  #importBtn = null;
  #importAltBtn = null;
  #exportBtn = null;
  #searchInput = null;
  #searchClearBtn = null;
  #importDialog = null;
  #exportDialog = null;
  #importFeedsEl = null;
  #exportFeedsEl = null;
  #noFeedsDisclaimerEl = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = styleSheets;

    this.#feedsContainerEl = this.shadowRoot.getElementById('feedsContainer');
    this.#feedsListEl = this.shadowRoot.getElementById('feedsList');
    this.#editBtn = this.shadowRoot.getElementById('editBtn');
    this.#importBtn = this.shadowRoot.getElementById('importBtn');
    this.#importAltBtn = this.shadowRoot.getElementById('importAltBtn');
    this.#exportBtn = this.shadowRoot.getElementById('exportBtn');
    this.#searchInput = this.shadowRoot.getElementById('searchInput');
    this.#searchClearBtn = this.shadowRoot.getElementById('searchClearBtn');
    this.#importDialog = this.shadowRoot.getElementById('importDialog');
    this.#exportDialog = this.shadowRoot.getElementById('exportDialog');
    this.#importFeedsEl = this.shadowRoot.querySelector('import-feeds');
    this.#exportFeedsEl = this.shadowRoot.querySelector('export-feeds');
    this.#noFeedsDisclaimerEl = this.shadowRoot.getElementById('noFeedsDisclaimer');
  }

  async connectedCallback() {
    const { value: feeds = [] } = await getFeeds();

    feeds.forEach((feed => this.#addFeed(feed)));

    this.#toggleFeedsVisibility();

    this.#feedsListEl.addEventListener('click', this.#handleActionsClick);
    this.#editBtn.addEventListener('click', this.#handleEditRequest);
    this.#importAltBtn.addEventListener('click', this.#handleImportRequest);
    this.#importBtn.addEventListener('click', this.#handleImportRequest);
    this.#exportBtn.addEventListener('click', this.#handleExportRequest);
    this.#searchInput.addEventListener('input', this.#handleSearchInputDebounced);
    this.#searchClearBtn.addEventListener('click', this.#handleSearchClear);
    this.#importDialog.addEventListener('me-open', this.#handleImportDialogOpen);
    this.#exportDialog.addEventListener('me-open', this.#handleExportDialogOpen);
    this.#exportDialog.addEventListener('me-close', this.#handleExportDialogClose);
    this.addEventListener('feeds-imported', this.#handleFeedsImported);
    document.addEventListener('feeds-updated', this.#handleFeedsUpdateSuccess);

    new Sortable(this.#feedsListEl, {
      animation: 150,
      handle: '.sort-handler',
      onEnd: async evt => {
        const feeds = Array.prototype.map.call(evt.to.querySelectorAll('li'), (el) => {
          return {
            url: el.getAttribute('data-url'),
            title: el.getAttribute('data-title') || ''
          };
        });

        await setFeeds(feeds, false);
      }
    });
  }

  disconnectedCallback() {
    this.#feedsListEl.removeEventListener('click', this.#handleActionsClick);
    this.#editBtn.removeEventListener('click', this.#handleEditRequest);
    this.#importBtn.removeEventListener('click', this.#handleImportRequest);
    this.#importAltBtn.removeEventListener('click', this.#handleImportRequest);
    this.#exportBtn.removeEventListener('click', this.#handleExportRequest);
    this.#searchInput.removeEventListener('input', this.#handleSearchInputDebounced);
    this.#searchClearBtn.removeEventListener('click', this.#handleSearchClear);
    this.#importDialog.removeEventListener('me-open', this.#handleImportDialogOpen);
    this.#exportDialog.removeEventListener('me-open', this.#handleExportDialogOpen);
    this.#exportDialog.removeEventListener('me-close', this.#handleExportDialogClose);
    this.removeEventListener('feeds-imported', this.#handleFeedsImported);
    document.removeEventListener('feeds-updated', this.#handleFeedsUpdateSuccess);
  }

  #searchFeeds = (searchValue = '') => {
    const feedEls = this.#feedsListEl.querySelectorAll(`[data-url]`);

    if (feedEls.length === 0) {
      return;
    }

    feedEls.forEach(el => {
      const url = (el.getAttribute('data-url') || '').toLowerCase();
      const title = (el.getAttribute('data-title') || '').toLowerCase();
      const searchQuery = searchValue.trim().toLowerCase();
      el.hidden = !(url.includes(searchQuery) || title.includes(searchQuery));
    });
  };

  #debounceSearchFeeds = debounce(this.#searchFeeds, 250);

  #handleSearchInputDebounced = evt => {
    const value = evt.target.value;
    this.#searchClearBtn.classList.toggle('d-none', !value);
    return this.#debounceSearchFeeds(value);
  };

  #handleSearchClear = () => {
    this.#searchInput.value = '';
    this.#searchInput.dispatchEvent(new Event('input'));
  };

  #handleEditRequest = evt => {
    this.#isEditable = !this.#isEditable;

    evt.currentTarget.classList.toggle('active');

    this.shadowRoot.querySelectorAll('.sort-handler, .delete-button').forEach(el => {
      el.hidden = !el.hidden;
    });
  };

  #handleImportRequest = () => {
    this.#importDialog.open = true;
  };

  #handleExportRequest = () => {
    this.#exportDialog.open = true;
  };

  #handleImportDialogOpen = () => {
    try {
      this.#importFeedsEl.shadowRoot.querySelector('a-tab-group').selectTabByIndex(0);
      this.#importFeedsEl.shadowRoot.querySelector('textarea').value = '';
    } catch {
      // Fail silently
    }
  };

  #handleExportDialogOpen = async () => {
    const { value: feeds = [] } = await getFeeds();
    this.#exportFeedsEl.feeds = feeds;
    this.#exportFeedsEl.setAttribute('visible', '');
  };

  #handleExportDialogClose = () => {
    this.#exportFeedsEl.removeAttribute('visible');
  };

  #handleFeedsImported = () => {
    this.#importDialog.open = false;
  };

  #handleFeedsUpdateSuccess = evt => {
    if (evt.detail.action === 'delete') {
      this.#removeFeed(evt.detail.feed);
    }

    if (evt.detail.action === 'create') {
      this.#addFeed(evt.detail.feed);

      if (this.#searchInput.value) {
        this.#searchInput.value = '';
        this.#searchFeeds('');
      }
    }

    if (evt.detail.action === 'update') {
      const { url, title } = evt.detail.feed;
      const feedEl = this.#feedsListEl.querySelector(`[data-url="${url}"]`);

      if (feedEl) {
        const linkContent = feedEl.querySelector('.link-content');

        feedEl.setAttribute('data-title', title || '');

        if (linkContent) {
          linkContent.innerHTML = title ? `${title}<br><small class="text-muted">${url}</small>` : url;
        }
      }
    }
  };

  #handleActionsClick = evt => {
    const target = evt.target;
    const deleteBtn = target.closest('button.delete-button');
    const linkEl = target.closest('a.link');

    if (!linkEl && !deleteBtn) {
      return;
    }

    const feedItem = target.closest('li');
    const feedUrl = feedItem.getAttribute('data-url');

    if (deleteBtn) {
      if (window.confirm(`Are you sure you want to delete feed "${feedUrl}"?`)) {
        deleteFeed(feedUrl);
      }
    }

    if (linkEl) {
      evt.preventDefault();
      document.querySelector('feed-reader').feedUrl = feedUrl;
    }
  };

  #addFeed(feed) {
    const { url, title } = feed;

    const link = document.createElement('a');
    link.className = 'link text-decoration-none d-flex align-items-center h-100';
    link.style.flex = '1';
    link.style.minWidth = 0;
    link.style.color = 'inherit';
    link.href = url;

    const linkContent = document.createElement('div');
    linkContent.className = 'text-truncate link-content';
    linkContent.innerHTML = title ? `${title}<br><small class="text-muted">${url}</small>` : url;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.hidden = !this.#isEditable;
    deleteButton.className = 'delete-button btn btn-default text-danger p-0';
    deleteButton.style.lineHeight = '1';
    deleteButton.setAttribute('aria-label', 'Delete feed');
    deleteButton.innerHTML = /* html */`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `;

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item p-0 d-flex justify-content-between align-items-center';
    listItem.style.height = 'var(--list-item-height)';
    listItem.setAttribute('data-url', url || '');
    listItem.setAttribute('data-title', title || '');

    const sortHandler = document.createElement('div');
    sortHandler.hidden = !this.#isEditable;
    sortHandler.className = 'sort-handler text-primary';
    sortHandler.setAttribute('aria-label', 'Reorder feed');
    sortHandler.innerHTML = /* html */`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/>
      </svg>
    `;

    link.appendChild(linkContent);
    listItem.appendChild(sortHandler);
    listItem.appendChild(link);
    listItem.appendChild(deleteButton);

    this.#feedsListEl.appendChild(listItem);

    this.#toggleFeedsVisibility();
  }

  #removeFeed(feed) {
    const listItem = this.#feedsListEl.querySelector(`[data-url="${feed.url}"]`);
    listItem && listItem.remove();
    this.#toggleFeedsVisibility();
  }

  async #toggleFeedsVisibility() {
    const { value: feeds = [] } = await getFeeds();
    this.#feedsContainerEl.classList.toggle('d-none', feeds.length === 0);
    this.#noFeedsDisclaimerEl.classList.toggle('d-none', feeds.length > 0);
  }
}

if (!window.customElements.get('feeds-list')) {
  window.customElements.define('feeds-list', FeedsList);
}
