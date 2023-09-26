import { styleSheets } from '../helpers/styles.js';
import { getFeeds, saveFeed } from '../helpers/storage.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: block;
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
  </style>

  <div class="px-3 py-4">
    <files-dropzone accept="application/json">
      Drag 'n' drop a file, or click to select file to import
      <br />
      <small><em>(Only JSON files are allowed)</em></small>
    </files-dropzone>
  </div>
`;

class ImportFeeds extends HTMLElement {
  #dropzoneEl;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.#dropzoneEl = this.shadowRoot.querySelector('files-dropzone');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  connectedCallback() {
    this.#dropzoneEl.addEventListener('files-dropzone-drop-accepted', this.#handleFilesDropzoneDropAccepted);
  }

  disconnectedCallback() {
    this.#dropzoneEl.removeEventListener('files-dropzone-drop-accepted', this.#handleFilesDropzoneDropAccepted);
  }

  #handleFilesDropzoneDropAccepted = evt => {
    console.log(evt.detail);

    const { acceptedFiles = [] } = evt.detail;
    const file = acceptedFiles[0];

    if (file) {
      // read file
      const reader = new FileReader();
      reader.readAsText(file, 'utf-8');
      reader.onload = this.#handleFileReaderLoad;
    }

    this.dispatchEvent(new Event('feeds-imported', {
      bubbles: true,
      composed: true
    }));
  };

  #handleFileReaderLoad = async (evt) => {
    const { result } = evt.target;
    let importedFeeds;

    try {
      importedFeeds = JSON.parse(result);
    } catch (err) {
      console.error(err);
    }

    if (Array.isArray(importedFeeds) && importedFeeds.length > 0) {
      const { value: feeds = [] } = await getFeeds();

      for (const feed of importedFeeds) {
        const feedExists = Boolean(feeds.find(f => f.url === feed.url));
        const { url, title } = feed;

        if (!feedExists && url) {
          await saveFeed({ url, title });
        }
      }
    } else {
      alert('Invalid file or no feeds found');
    }
  };
}

if (!window.customElements.get('import-feeds')) {
  window.customElements.define('import-feeds', ImportFeeds);
}
