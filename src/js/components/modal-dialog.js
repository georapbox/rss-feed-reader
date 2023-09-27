import { styleSheets } from '../helpers/styles.js';

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    :host {
      display: block;
    }

    dialog,
    dialog::backdrop {
      transition: transform 0.2s, opacity 0.2s, display 0.2s allow-discrete, overlay 0.2s allow-discrete;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 0;
    }

    dialog[open]::backdrop {
      opacity: 1;
    }

    /* IS-OPEN STATE */
    dialog[open] {
      transform: translateY(0);
      opacity: 1;
    }

    /* EXIT STATE */
    dialog {
      transform: translateY(-50px);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      dialog[open] {
        transform: translateY(20px);
        opacity: 0;
      }

      dialog[open]::backdrop {
        opacity: 0;
      }
    }
  </style>

  <dialog class="shadow rounded" part="dialog">
    <div class="d-flex align-items-center justify-content-between px-3 pt-3" style="gap: 1.5rem;">
      <h2 class="h5 m-0" id="header-title"></h2>

      <form method="dialog">
        <button type="submit" class="d-flex align-items-center justify-content-center btn btn-outline-primary p-0" style="width: 36px; height: 36px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
          <span class="visually-hidden">Close</span>
        </button>
      </form>
    </div>

    <slot></slot>
  </dialog>
`;

class ModalDialog extends HTMLElement {
  #dialogEl;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.#dialogEl = this.shadowRoot.querySelector('dialog');

    this.shadowRoot.adoptedStyleSheets = styleSheets;
  }

  static get observedAttributes() {
    return ['open', 'header-title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open' && oldValue !== newValue) {
      this.open ? this.#openDialog() : this.#closeDialog();
    }

    if (name === 'header-title' && oldValue !== newValue) {
      this.shadowRoot.querySelector('#header-title').textContent = this.headerTitle;
    }
  }

  connectedCallback() {
    this.#dialogEl.addEventListener('click', this.#handleDialogClick);
    this.#dialogEl.addEventListener('close', this.#handleDialogClose);
  }

  disconnectedCallback() {
    this.#dialogEl.addEventListener('click', this.#handleDialogClick);
    this.#dialogEl.removeEventListener('close', this.#handleDialogClose);
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(value) {
    if (value) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  get headerTitle() {
    return this.getAttribute('header-title');
  }

  set headerTitle(value) {
    this.setAttribute('header-title', value);
  }

  get staticBackDrop() {
    return this.hasAttribute('static-backdrop');
  }

  set staticBackDrop(value) {
    if (value) {
      this.setAttribute('static-backdrop', '');
    } else {
      this.removeAttribute('static-backdrop');
    }
  }

  async #openDialog() {
    this.#dialogEl.showModal();
    document.body.classList.add('overflow-y-hidden');

    this.dispatchEvent(new CustomEvent('modal-dialog-open', {
      bubbles: true,
      composed: true,
      detail: {
        dialog: this.#dialogEl
      }
    }));
  }

  #closeDialog() {
    this.#dialogEl.close();
  }

  #handleDialogClose = () => {
    this.open = false;
    document.body.classList.remove('overflow-y-hidden');

    this.dispatchEvent(new CustomEvent('modal-dialog-close', {
      bubbles: true,
      composed: true,
      detail: {
        dialog: this.#dialogEl
      }
    }));
  };

  #handleDialogClick = evt => {
    if (evt.target === evt.currentTarget && !this.staticBackDrop) {
      this.#closeDialog();
    }
  };
}

if (!window.customElements.get('modal-dialog')) {
  window.customElements.define('modal-dialog', ModalDialog);
}
