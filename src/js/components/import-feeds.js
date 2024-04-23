import { styleSheets } from '../helpers/styles.js';
import { getFeeds, saveFeed } from '../helpers/storage.js';
import { canParseURL } from '../utils/canParseURL.js';

const styles = /* css */`
  :host {
    display: block;
    max-width: 500px;
  }

  files-dropzone {
    --dropzone-border-color: var(--bs-gray-500);
    --dropzone-border-color-dragover: var(--primary-color);
    --dropzone-body-color: var(--body-color);
    --dropzone-background-color: var(--bs-gray-100);
    --dropzone-background-color-dragover: var(--bs-gray-200);

    @media (prefers-color-scheme: dark) {
      --dropzone-border-color: var(--bs-gray-600);
      --dropzone-background-color: var(--bs-gray-800);
      --dropzone-background-color-dragover: var(--bs-gray-700);
    }
  }

  a-tab:focus-visible {
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
    box-shadow: rgb(13 110 253 / 25%) inset 0px 0px 0px 0.25rem;
  }

  a-tab-group::part(tabs) {
    display: flex;
    padding: 0;
  }

  a-tab-group a-tab {
    flex: 1;
    text-align: center;
    border-bottom: 3px solid transparent;
  }

  a-tab-group a-tab::part(base) {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }

  a-tab-group a-tab[selected] {
    border-color: var(--primary-color);
  }

  a-tab-group a-tab[selected]::part(base) {
    color: var(--body-color);
  }

  textarea {
    min-height: 93px !important;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>${styles}</style>

  <a-tab-group no-scroll-controls>
    <a-tab slot="tab" role="heading">From file</a-tab>
    <a-tab-panel slot="panel">
      <div class="px-3">
        <files-dropzone accept="application/json">
          Drag 'n' drop a file, or click to select file to import
          <br />
          <small><em>(Only JSON files are allowed)</em></small>
        </files-dropzone>
      </div>
    </a-tab-panel>

    <a-tab slot="tab" role="heading">From text</a-tab>
    <a-tab-panel slot="panel">
      <form name="import-form" class="px-3">
        <textarea class="form-control mb-3" id="import-data" name="import-data" cols="42" placeholder="Enter the JSON data to import" required></textarea>
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </a-tab-panel>
  </a-tab-group>
`;

class ImportFeeds extends HTMLElement {
  #dropzoneEl = null;
  #importForm = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.#dropzoneEl = this.shadowRoot.querySelector('files-dropzone');
    this.#importForm = this.shadowRoot.querySelector('form[name="import-form"]');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  connectedCallback() {
    this.#dropzoneEl.addEventListener('files-dropzone-drop-accepted', this.#handleFilesDropzoneDropAccepted);
    this.#importForm.addEventListener('submit', this.#handleImportFormSubmit);
  }

  disconnectedCallback() {
    this.#dropzoneEl.removeEventListener('files-dropzone-drop-accepted', this.#handleFilesDropzoneDropAccepted);
    this.#importForm.removeEventListener('submit', this.#handleImportFormSubmit);
  }

  #handleFilesDropzoneDropAccepted = evt => {
    const { acceptedFiles = [] } = evt.detail;
    const file = acceptedFiles[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file, 'utf-8');
    reader.onload = this.#handleFileReaderLoad;
  };

  async #importFeeds(feedsToImport) {
    if (!Array.isArray(feedsToImport) || feedsToImport.length === 0) {
      return alert('Invalid file or no feeds found.');
    }

    const { value: feeds = [] } = await getFeeds();

    for (const feed of feedsToImport) {
      const feedExists = Boolean(feeds.find(f => f.url === feed.url));
      const { url, title } = feed;
      const isValidURL = canParseURL(url);

      if (!feedExists && isValidURL) {
        await saveFeed({ url, title });
      }
    }

    this.dispatchEvent(new Event('feeds-imported', {
      bubbles: true,
      composed: true
    }));
  }

  #handleFileReaderLoad = async (evt) => {
    try {
      const { result } = evt.target;
      this.#importFeeds(JSON.parse(result));
    } catch (err) {
      alert('The file is not valid.');
    }
  };

  #handleImportFormSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = formData.get('import-data');

    try {
      this.#importFeeds(JSON.parse(data));
    } catch (err) {
      alert('The data is not valid.');
    }
  };
}

if (!window.customElements.get('import-feeds')) {
  window.customElements.define('import-feeds', ImportFeeds);
}
