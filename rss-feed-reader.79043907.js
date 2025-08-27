let e;function t(e){return new URL(n+(e=s.i?.[e]||e),import.meta.url).toString()}var o,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n="./",r={},a={},s=i.parcelRequire3ec4;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},i.parcelRequire3ec4=s),s.register,Object.assign(s.i??={},{fWGb9:"bootstrap.98b1201a.css","3ME5X":"main.fec4c1cd.css"});var l="clipboard-copy",d="success",c="error",h=document.createElement("template"),u=`
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;h.innerHTML=`
  <style>${u}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`,(class e extends HTMLElement{#e=void 0;#t=null;#o=null;#i=null;#n=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(h.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("button"),this.#o=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#n=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#r("value"),this.#r("from"),this.#r("disabled"),this.#r("feedbackDuration"),this.#t?.addEventListener("click",this.#a)}disconnectedCallback(){this.#t?.removeEventListener("click",this.#a),this.#s()}get value(){return this.getAttribute("value")||""}set value(e){this.setAttribute("value",null!=e?e.toString():e)}get from(){return this.getAttribute("from")||""}set from(e){this.setAttribute("from",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(e){this.setAttribute("feedback-duration",null!=e?e.toString():e)}async #l(){if(!(!this.value&&!this.from))try{let e="";if(this.value)e=this.value;else if(this.from){let t="getRootNode"in Element.prototype?this.#t?.getRootNode({composed:!0}):this.#t?.ownerDocument;if(!t||!(t instanceof Document||t instanceof ShadowRoot))return;let o=t.querySelector(this.from);if(!o)return;e=o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o.value:o instanceof HTMLAnchorElement&&o.hasAttribute("href")?o.href:o.textContent||""}await navigator.clipboard.writeText(e),this.#d(d),this.dispatchEvent(new CustomEvent(`${l}-success`,{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.#d(c),this.dispatchEvent(new CustomEvent(`${l}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}#a=e=>{e.preventDefault(),this.disabled||this.#e||this.#l()};#d(e){this.#o&&(this.#o.hidden=!0),this.#i&&(this.#i.hidden=e!==d),this.#n&&(this.#n.hidden=e!==c),this.#t?.part.remove("button--success"),this.#t?.part.remove("button--error"),this.#t?.part.add(`button--${e}`),this.#e&&clearTimeout(this.#e),this.#e=setTimeout(()=>{this.#o&&(this.#o.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#n&&(this.#n.hidden=!0),this.#t?.part.remove(`button--${e}`),this.#e=void 0},this.feedbackDuration)}#s(){this.#e&&clearTimeout(this.#e),this.#e=void 0,this.#o&&(this.#o.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#n&&(this.#n.hidden=!0),this.#t?.part.remove("button--success"),this.#t?.part.remove("button--error")}#r(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t=l){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var p=`
  :host {
    display: inline-block;
  }
`,m=document.createElement("template");m.innerHTML=`
  <style>${p}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class e extends HTMLElement{#e;#t;#r=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(m.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#d()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#i("shareUrl"),this.#i("shareTitle"),this.#i("shareText"),this.#i("shareFiles"),this.#i("disabled"),this.#e?.addEventListener("slotchange",this.#s),this.#t?.addEventListener("click",this.#o)}disconnectedCallback(){this.#e?.removeEventListener("slotchange",this.#s),this.#t?.removeEventListener("click",this.#o)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#r}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#r=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name)return void this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#o=e=>{e.preventDefault(),this.disabled||this.share()};#s=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#o),this.#t=this.#d(),this.#t&&(this.#t.addEventListener("click",this.#o),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#d(){return this.#e&&this.#e.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#i(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t="web-share"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var f=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),g=[".DS_Store","Thumbs.db"],b=(e,t)=>{let o=(e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=f.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e})(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},v=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),w=async e=>{let t=[],o=await v(e);for(;o.length>0;)t.push(...o),o=await v(e);return t},y=e=>new Promise((t,o)=>{e.file(o=>t(b(o,e.fullPath)),o)}),E=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e)if(e.isFile){let o=await y(e);-1===g.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await w(e.createReader()))}return t},x=async e=>{let t=[];for(let o of e)-1===g.indexOf(o.name)&&t.push(b(o));return t},S=async e=>e.dataTransfer?e.dataTransfer.items?await E(e.dataTransfer.items):await x(e.dataTransfer.files):await x(e.target.files),C=String.raw,_=String.raw,k="files-dropzone",A=document.createElement("template"),T=C`
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
    --dropzone-border-width: 2px;
    --dropzone-border-style: dashed;
    --dropzone-border-radius: 0.25rem;
    --dropzone-border-color: #6c757d;
    --dropzone-border-color-dragover: #0d6efd;
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49, 132, 253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

    display: block;
  }

  :host(:not([no-style])) .dropzone {
    border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
    border-radius: var(--dropzone-border-radius);
    padding: 3rem 1rem;
    overflow: hidden;
    background-color: var(--dropzone-background-color);
    color: var(--dropzone-body-color);
    text-align: center;
    cursor: pointer;
    transition:
      border var(--dropzone-transition-duration) ease-in-out,
      background-color var(--dropzone-transition-duration) ease-in-out,
      color var(--dropzone-transition-duration) ease-in-out,
      box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
    user-select: none;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;A.innerHTML=_`
  <style>
    ${T}
  </style>

  <input type="file" id="file-input" hidden />

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot><span>Drag 'n' drop files here, or click to select files</span></slot>
  </div>
`,(class e extends HTMLElement{static ERROR_CODES={FILE_DIALOG_OPEN_FAILED:"FILE_DIALOG_OPEN_FAILED",FILE_INPUT_CHANGE_FAILED:"FILE_INPUT_CHANGE_FAILED",DROP_EVENT_PROCESSING_FAILED:"DROP_EVENT_PROCESSING_FAILED",UNKNOWN_ERROR:"UNKNOWN_ERROR"};static REJECTION_CODES={TOO_MANY_FILES:"TOO_MANY_FILES",FILE_TOO_LARGE:"FILE_TOO_LARGE",FILE_TOO_SMALL:"FILE_TOO_SMALL",INVALID_MIME_TYPE:"INVALID_MIME_TYPE"};#t=null;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(A.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("file-input"),this.#e=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?(this.#e?.removeAttribute("tabindex"),this.#e?.setAttribute("aria-disabled","true")):(this.#e?.setAttribute("tabindex","0"),this.#e?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple)}connectedCallback(){this.#n("accept"),this.#n("disabled"),this.#n("maxFiles"),this.#n("maxSize"),this.#n("minSize"),this.#n("multiple"),this.#n("autoFocus"),this.#n("noStyle"),this.#t?.addEventListener("change",this.#i),this.#e?.addEventListener("dragenter",this.#a),this.#e?.addEventListener("dragover",this.#s),this.#e?.addEventListener("dragleave",this.#l),this.#e?.addEventListener("drop",this.#c),this.#e?.addEventListener("click",this.#h),this.#e?.addEventListener("keyup",this.#u),this.autoFocus&&this.#e?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#i),this.#e?.removeEventListener("dragenter",this.#a),this.#e?.removeEventListener("dragover",this.#s),this.#e?.removeEventListener("dragleave",this.#l),this.#e?.removeEventListener("drop",this.#c),this.#e?.removeEventListener("click",this.#h),this.#e?.removeEventListener("keyup",this.#u)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#o(e,t,o){let i=new CustomEvent(`${k}-${e}`,{bubbles:!0,composed:!0,cancelable:!1,...o,detail:t});return this.dispatchEvent(i)}#r(e,t){this.#o("error",{code:e,error:t})}#i=async t=>{try{this.#d(await S(t))}catch(t){this.#r(e.ERROR_CODES.FILE_INPUT_CHANGE_FAILED,t)}};#a=()=>{this.disabled||this.#o("dragenter")};#s=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e&&(this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover")),this.#o("dragover")};#l=()=>{this.disabled||(this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover")),this.#o("dragleave"))};#c=async t=>{if(!this.disabled){t.preventDefault(),this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"));try{this.#d(await S(t))}catch(t){this.#r(e.ERROR_CODES.DROP_EVENT_PROCESSING_FAILED,t)}}};#h=()=>{this.disabled||this.openFileDialog()};#u=e=>{this.disabled||(" "===e.key||"Enter"===e.key)&&this.openFileDialog()};#d(t){if(!Array.isArray(t)||!t.length)return;let o=[],i=[],n=t.length;if(!this.multiple&&n>1)for(let o of t)i.push({file:o,errors:[{code:e.REJECTION_CODES.TOO_MANY_FILES,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&n>this.maxFiles)for(let o of t)i.push({file:o,errors:[{code:e.REJECTION_CODES.TOO_MANY_FILES,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let n of t){let t=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(n,this.accept),r=n.size>this.maxSize,a=n.size<this.minSize;if(!t||r||a){let o=[];t||o.push({code:e.REJECTION_CODES.INVALID_MIME_TYPE,message:`File type "${n.type}" is not accepted.`}),r&&o.push({code:e.REJECTION_CODES.FILE_TOO_LARGE,message:`File size ${n.size} exceeds the maximum size of ${this.maxSize}.`}),a&&o.push({code:e.REJECTION_CODES.FILE_TOO_SMALL,message:`File size ${n.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:n,errors:o})}else o.push(n)}this.#o("drop",{acceptedFiles:o,rejectedFiles:i}),o.length>0&&this.#o("drop-accepted",{acceptedFiles:o}),i.length>0&&this.#o("drop-rejected",{rejectedFiles:i}),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){if(!(this.disabled||!this.#t)){if("showPicker"in HTMLInputElement.prototype&&"function"==typeof this.#t.showPicker){try{this.#t.showPicker()}catch(t){this.#r(e.ERROR_CODES.FILE_DIALOG_OPEN_FAILED,t)}return}this.#t.click()}}#n(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t=k){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var L=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},D=(e,t)=>{if(Object.prototype.hasOwnProperty.call(t,e)){let o=t[e];delete t[e],t[e]=o}},R=0,O=`
  :host {
    box-sizing: border-box;
    display: inline-block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.375rem 0.75rem;
    white-space: nowrap;
    cursor: pointer;
  }

  :host([disabled]) .tab {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :host([selected]) .tab {
    color: var(--selected-tab-color);
    background-color: var(--selected-tab-bg-color);
  }

  .tab__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: inherit;
    cursor: pointer;
  }
`,M=document.createElement("template");M.innerHTML=`
  <style>
    ${O}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`,(class e extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(M.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(e,t,o){if("selected"===e&&t!==o&&(this.setAttribute("aria-selected",this.selected.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"disabled"===e&&t!==o&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"closable"===e&&t!==o)if(this.closable){let e=document.createElement("span");e.className="tab__close",e.setAttribute("part","close-tab"),e.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(e),e.addEventListener("click",this.#e)}else{let e=this.shadowRoot?.querySelector(".tab__close");e?.removeEventListener("click",this.#e),e?.remove()}}connectedCallback(){this.#i("selected"),this.#i("disabled"),this.#i("closable"),this.id||(this.id=L("tab",(++R).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")}disconnectedCallback(){this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click",this.#e)}get selected(){return this.hasAttribute("selected")}set selected(e){this.toggleAttribute("selected",!!e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get closable(){return this.hasAttribute("closable")}set closable(e){this.toggleAttribute("closable",!!e)}#e=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#i(e){return D(e,this)}static defineCustomElement(t="a-tab"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var I=0,z=`
  :host {
    box-sizing: border-box;
    display: block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`,F=document.createElement("template");F.innerHTML=`
  <style>
    ${z}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`,(class e extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(F.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=L("panel",(++I).toString()))}static defineCustomElement(t="a-tab-panel"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var N={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},B=Object.entries(N).map(([,e])=>e),P="auto",j="manual",H=`
  :host {
    --selected-tab-color: #005fcc;
    --selected-tab-bg-color: transparent;
    --tabs-scroll-behavior: smooth;
    --scroll-button-width: 2.125em;
    --scroll-button-height: 2.125em;
    --scroll-button-inline-offset: 0rem;

    box-sizing: border-box;
    display: block;
    contain: content;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --tabs-scroll-behavior: auto;
    }
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab-group {
    display: flex;
    width: 100%;
  }

  .tab-group__nav {
    position: relative;
  }

  .tab-group__nav--has-scroll-controls {
    padding: 0 calc(var(--scroll-button-width) + var(--scroll-button-inline-offset));
  }

  .tab-group__scroll-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--scroll-button-width);
    height: var(--scroll-button-height);
    padding: 0; /* Required for iOS, otherwise the svg is not visible: https://stackoverflow.com/questions/66532071/flex-svg-behaving-strange-in-ios-safari-14-0-3 */
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    color: currentColor;
  }

  .tab-group__scroll-button--start {
    left: var(--scroll-button-inline-offset);
  }

  .tab-group__scroll-button--end {
    right: var(--scroll-button-inline-offset);
  }

  :host([dir="rtl"]) .tab-group__scroll-button--start,
  :host(:dir(rtl)) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="rtl"]) .tab-group__scroll-button--end,
  :host(:dir(rtl)) .tab-group__scroll-button--end {
    left: var(--scroll-button-inline-offset);
    right: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  .tab-group__tabs {
    display: flex;
    padding: 0.25rem;
    overflow-x: auto;
    scroll-behavior: var(--tabs-scroll-behavior);
    scrollbar-width: none;
  }

  .tab-group__tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-group__panels {
    padding: 1rem 0;
  }

  /* placement="top" */
  .tab-group,
  :host([placement="${N.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${N.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${N.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${N.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${N.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${N.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${N.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${N.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${N.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${N.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,q=document.createElement("template");q.innerHTML=`
  <style>${H}</style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`,(class e extends HTMLElement{#e=null;#i=null;#c=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(q.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(e,t,o){"placement"===e&&t!==o&&this.#o(),"no-scroll-controls"===e&&t!==o&&this.#o()}get placement(){return this.getAttribute("placement")||N.TOP}set placement(e){null!=e&&this.setAttribute("placement",e)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(e){this.toggleAttribute("no-scroll-controls",!!e)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(e){this.setAttribute("scroll-distance",Math.abs(e).toString()||"200")}get activation(){return this.getAttribute("activation")||P}set activation(e){this.setAttribute("activation",e||P)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(e){this.toggleAttribute("no-tab-cycling",!!e)}connectedCallback(){this.#n("placement"),this.#n("noScrollControls"),this.#n("scrollDistance"),this.#n("activation"),this.#n("noTabCycling");let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=this.shadowRoot?.querySelector(".tab-group__nav"),n=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.addEventListener("slotchange",this.#a),t?.addEventListener("slotchange",this.#a),o?.addEventListener("click",this.#p),o?.addEventListener("keydown",this.#u),n.forEach(e=>e.addEventListener("click",this.#m)),this.addEventListener("a-tab-close",this.#f),"ResizeObserver"in window&&(this.#e=new ResizeObserver(e=>{this.#i=window.requestAnimationFrame(()=>{let t=e?.[0]?.target,o=t?.scrollWidth>t?.clientWidth;n.forEach(e=>e.toggleAttribute("hidden",!o)),i?.part.toggle("nav--has-scroll-controls",o),i?.classList.toggle("tab-group__nav--has-scroll-controls",o)})})),this.#d(),this.#o()}disconnectedCallback(){let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.removeEventListener("slotchange",this.#a),t?.removeEventListener("slotchange",this.#a),o?.removeEventListener("click",this.#p),o?.removeEventListener("keydown",this.#u),i.forEach(e=>e.removeEventListener("click",this.#m)),this.removeEventListener("a-tab-close",this.#f),this.#h()}#g(){if(!this.#e)return;let e=this.shadowRoot?.querySelector(".tab-group__tabs");e&&(this.#e.unobserve(e),this.#e.observe(e))}#h(){this.#e&&(this.#e.disconnect(),null!==this.#i&&(window.cancelAnimationFrame(this.#i),this.#i=null))}#l(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?"ltr":"rtl":window.getComputedStyle(this).direction||"ltr"}#d(){this.hidden=0===this.#t().length}#b(){let e=this.#t();this.#d(),e.forEach(e=>{let t=e.nextElementSibling;if(!t||"a-tab-panel"!==t.tagName.toLowerCase())return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)})}#v(){return Array.from(this.querySelectorAll("a-tab-panel"))}#t(){return Array.from(this.querySelectorAll("a-tab"))}#w(e){let t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}#y(){return this.#t().find(e=>!e.disabled)||null}#E(){let e=this.#t();for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return e[t];return null}#s(){let e=this.#t(),t=this.activation===j?e.findIndex(e=>e.matches(":focus"))-1:e.findIndex(e=>e.selected)-1;for(;e[(t+e.length)%e.length].disabled;)t--;return this.noTabCycling&&t<0?null:e[(t+e.length)%e.length]}#r(){let e=this.#t(),t=this.activation===j?e.findIndex(e=>e.matches(":focus"))+1:e.findIndex(e=>e.selected)+1;for(;e[t%e.length].disabled;)t++;return this.noTabCycling&&t>=e.length?null:e[t%e.length]}#x(){let e=this.#t(),t=this.#v();e.forEach(e=>e.selected=!1),t.forEach(e=>e.hidden=!0)}#o(){let e=this.shadowRoot?.querySelector(".tab-group__nav"),t=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===N.START||this.placement===N.END?(this.#h(),o.forEach(e=>e.hidden=!0),e?.part.remove("nav--has-scroll-controls"),e?.classList.remove("tab-group__nav--has-scroll-controls"),t?.setAttribute("aria-orientation","vertical")):(this.#g(),o.forEach(e=>e.hidden=!1),t?.setAttribute("aria-orientation","horizontal"))}#S(){let e=this.#t(),t=e.find(e=>e.selected&&!e.disabled)||e.find(e=>!e.disabled);t&&(this.#c&&!t.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.#C(t))}#C(e){this.#x(),e&&(e.selected=!0);let t=this.#w(e);t&&(t.hidden=!1)}#a=e=>{this.#b(),this.#o(),this.#S(),"tab"===e.target.name&&(this.#c=!0)};#u=e=>{if("a-tab"!==e.target.tagName.toLowerCase()||e.altKey)return;let t=B.includes(this.placement||"")?this.placement:N.TOP,o=[N.TOP,N.BOTTOM].includes(t||"")?"horizontal":"vertical",i=this.#l(),n=null;switch(e.key){case"ArrowLeft":"horizontal"===o&&(n="ltr"===i?this.#s():this.#r())&&(this.activation===j?n.focus():this.selectTab(n));break;case"ArrowRight":"horizontal"===o&&(n="ltr"===i?this.#r():this.#s())&&(this.activation===j?n.focus():this.selectTab(n));break;case"ArrowUp":"vertical"===o&&(n=this.#s())&&(this.activation===j?n.focus():this.selectTab(n));break;case"ArrowDown":"vertical"===o&&(n=this.#r())&&(this.activation===j?n.focus():this.selectTab(n));break;case"Home":(n=this.#y())&&(this.activation===j?n.focus():this.selectTab(n));break;case"End":(n=this.#E())&&(this.activation===j?n.focus():this.selectTab(n));break;case"Enter":case" ":(n=e.target)&&this.selectTab(n);break;default:return}e.preventDefault()};#p=e=>{let t=e.target.closest("a-tab");t&&this.selectTab(t)};#m=e=>{let t=e.target.closest(".tab-group__scroll-button"),o=this.shadowRoot?.querySelector(".tab-group__tabs");if(!t||!o)return;let i=t.classList.contains("tab-group__scroll-button--start"),n="ltr"===this.#l(),r=o.scrollLeft;o.scrollTo({left:r+(i?n?-1:1:n?1:-1)*this.scrollDistance})};#f=e=>{let t=e.target,o=this.#w(t);t&&(t.remove(),t.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}}))),o&&"a-tab-panel"===o.tagName.toLowerCase()&&o.remove()};#n(e){return D(e,this)}selectTabByIndex(e){let t=this.#t()[e];t&&this.selectTab(t)}selectTabById(e){let t=this.#t().find(t=>t.id===e);t&&this.selectTab(t)}selectTab(e){let t=this.#t().find(e=>e.selected);!e||e.disabled||e.selected||"a-tab"!==e.tagName.toLowerCase()||(this.#C(e),window.requestAnimationFrame(()=>{e.scrollIntoView({inline:"nearest",block:"nearest"}),e.focus()}),t&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})))}static defineCustomElement(t="a-tab-group"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var $=document.createElement("template"),Y=`
  :host {
    --me-width: 32rem;
    --me-height: fit-content;
    --me-border-color: initial;
    --me-border-style: solid;
    --me-border-width: initial;
    --me-border-radius: 0;
    --me-box-shadow: none;
    --me-background-color: canvas;
    --me-color: canvastext;

    --me-header-spacing: 1rem;
    --me-footer-spacing: 1rem;
    --me-header-background-color: transparent;
    --me-header-color: initial;

    --me-body-spacing: 1rem;
    --me-body-background-color: transparent;
    --me-body-color: initial;
    --me-footer-background-color: transparent;
    --me-footer-color: initial;

    --me-close-padding: 0.4375rem;
    --me-close-border: none;
    --me-close-border-radius: 0;
    --me-close-background-color: transparent;
    --me-close-color: inherit;
    --me-close-font-size: 1rem;

    --me-backdrop-background: rgba(0, 0, 0, 0.5);
    --me-backdrop-filter: none;

    display: contents;
    box-sizing: border-box;
  }

  :host *,
  :host *:after,
  :host *:before {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  /* Dialog */
  .dialog {
    --dialog-placement-margin: calc((2em + 6px) / 2);

    width: var(--me-width);
    height: var(--me-height);
    padding: 0;
    border-color: var(--me-border-color);
    border-style: var(--me-border-style);
    border-width: var(--me-border-width);
    border-radius: var(--me-border-radius);
    box-shadow: var(--me-box-shadow);
    background-color: var(--me-background-color);
    color: var(--me-color);
  }

  .dialog[open] {
    display: flex;
  }

  :host([fullscreen]) .dialog {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }

  .dialog::backdrop {
    background: var(--me-backdrop-background, rgba(0, 0, 0, 0.5));
    backdrop-filter: var(--me-backdrop-filter, none);
    opacity: 0;
  }

  .dialog[open]::backdrop {
    opacity: 1;
  }

  /* Dialog placement */
  :host(:not([fullscreen])[placement="top-start"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-center"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-end"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center-start"]) .dialog {
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center"]) .dialog {
    margin: auto;
  }

  :host(:not([fullscreen])[placement="center-end"]) .dialog {
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-start"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-center"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-end"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  /* Dialog animations */
  @media (prefers-reduced-motion: no-preference) {
    .dialog:not(.dialog--no-animations),
    .dialog:not(.dialog--no-animations)::backdrop {
      transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
    }

    /* 1. IS-OPEN STATE */
    .dialog[open]:not(.dialog--no-animations) {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog:not(.dialog--no-animations) {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open]:not(.dialog--no-animations) {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]:not(.dialog--no-animations)::backdrop {
        opacity: 0;
      }
    }

    .dialog--pulse:not(.dialog--no-animations) {
      animation-name: pulse;
      animation-duration: 300ms;
      animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  }

  /* Dialog panel, header, body, footer */
  .dialog__panel {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--me-header-spacing);
    column-gap: 0.5rem;
    background-color: var(--me-header-background-color);
    color: var(--me-header-color);
  }

  :host([no-close-button]) .dialog__header {
    column-gap: 0;
  }

  .dialog__title {
    display: block;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    padding: var(--me-body-spacing);
    overflow: auto;
    background-color: var(--me-body-background-color);
    color: var(--me-body-color);
    overscroll-behavior: contain;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: end;
    padding: var(--me-footer-spacing);
    background-color: var(--me-footer-background-color);
    color: var(--me-footer-color);
  }

  .dialog__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--me-close-padding);
    border: var(--me-close-border);
    border-radius: var(--me-close-border-radius);
    background-color: var(--me-close-background-color);
    color: var(--me-close-color);
    font-size: var(--me-close-font-size);
  }

  .dialog__close:not(:disabled) {
    cursor: pointer;
  }

  .dialog__close:disabled {
    cursor: not-allowed;
  }
`;$.innerHTML=`
  <style>${Y}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg part="close-icon" xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </slot>
          </button>
        </form>
      </header>

      <slot part="body" class="dialog__body"></slot>

      <footer part="footer" class="dialog__footer" hidden>
        <slot name="footer"></slot>
      </footer>
    </div>
  </dialog>
`,(class e extends HTMLElement{#e=null;#s=null;#i=null;#n=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild($.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.querySelector("dialog"),this.#s=this.shadowRoot.querySelector('slot[name="footer"]'),this.#i=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(e,t,o){if(null!==this.#e){if("open"===e&&t!==o&&(this.open?(this.#e.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#e.close()),"no-header"===e&&t!==o){let e=this.#e.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#e.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#e.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}"close-label"===e&&t!==o&&this.#r()}}connectedCallback(){this.#t("open"),this.#t("staticBackdrop"),this.#t("noHeader"),this.#t("noAnimations"),this.#t("noCloseButton"),this.#t("fullscreen"),this.#t("preserveOverflow"),this.#t("placement"),this.#t("closeLabel"),this.#e?.addEventListener("click",this.#d),this.#e?.addEventListener("close",this.#c),this.#e?.addEventListener("cancel",this.#l),this.#e?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#h),this.#s?.addEventListener("slotchange",this.#p),this.#i?.addEventListener("slotchange",this.#C),this.addEventListener("command",this.#f)}disconnectedCallback(){this.#n&&clearTimeout(this.#n),this.#e?.removeEventListener("click",this.#d),this.#e?.removeEventListener("close",this.#c),this.#e?.removeEventListener("cancel",this.#l),this.#e?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#h),this.#s?.removeEventListener("slotchange",this.#p),this.#i?.removeEventListener("slotchange",this.#C),this.removeEventListener("command",this.#f)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}get placement(){return this.getAttribute("placement")||"center"}set placement(e){this.setAttribute("placement",null!=e?e.toString():e)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(e){this.setAttribute("close-label",null!=e?e.toString():e)}#r(){if(null===this.#e)return;let e=this.#e.querySelector(".dialog__close");null!==e&&((this.#i?.assignedElements()||[])?.some(e=>e.textContent?.replace(/\s/g,"")!=="")?e.removeAttribute("aria-label"):e.setAttribute("aria-label",this.closeLabel))}#o(){this.#n||(this.#e?.classList.add("dialog--pulse"),this.#n=setTimeout(()=>{this.#e?.classList.remove("dialog--pulse"),clearTimeout(this.#n),this.#n=void 0},300))}#c=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#l=e=>{let t=this.#a("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#o())};#h=e=>{let t=this.#a("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#o())};#d=e=>{let t=e.target;if(t===e.currentTarget){let e=this.#a("backdrop-click");this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#o():this.hide()}if(t instanceof HTMLElement&&null!==t.closest("[data-me-close]")){let e=this.#a("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#o():this.hide()}};#f=e=>{if("--me-open"!==e.command||this.open||this.show(),"--me-close"===e.command&&this.open){let e=this.#a("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#o():this.hide()}};#p=()=>{if(null===this.#e)return;let e=this.#e.querySelector(".dialog__footer");if(null===e)return;let t=this.#s?.assignedNodes();e.hidden=!(t&&t.length>0)};#C=()=>{this.#r()};#a(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#t(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(t="modal-element"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement(),function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),o=new WeakMap,i="object"==typeof DOMException?Error:DOMException,n=Object.defineProperty,r=Array.prototype.forEach,a=/@import.+?;?$/gm,s=CSSStyleSheet.prototype;s.replace=function(){return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."))},s.replaceSync=function(){throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var l=new WeakMap,d=new WeakMap,c=new WeakMap,h=new WeakMap,u=A.prototype;u.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},u.replaceSync=function(e){if(k(this),"string"==typeof e){var t,o,i=this;l.get(i).textContent=((o=(t=e).replace(a,""))!==t&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),o.trim()),h.set(i,[]),d.get(i).forEach(function(e){e.isConnected()&&_(i,C(i,e))})}},n(u,"cssRules",{configurable:!0,enumerable:!0,get:function(){return k(this),l.get(this).sheet.cssRules}}),n(u,"media",{configurable:!0,enumerable:!0,get:function(){return k(this),l.get(this).sheet.media}}),["addRule","deleteRule","insertRule","removeRule"].forEach(function(e){u[e]=function(){var t=this;k(t);var o=arguments;h.get(t).push({method:e,args:o}),d.get(t).forEach(function(i){if(i.isConnected()){var n=C(t,i).sheet;n[e].apply(n,o)}});var i=l.get(t).sheet;return i[e].apply(i,o)}}),n(A,Symbol.hasInstance,{configurable:!0,value:x});var p={childList:!0,subtree:!0},m=new WeakMap,f=new WeakMap,g=new WeakMap,b=new WeakMap;if(M.prototype={isConnected:function(){var e,t=f.get(this);return t instanceof Document?"loading"!==t.readyState:"isConnected"in(e=t.host)?e.isConnected:document.contains(e)},connect:function(){var e=R(this);b.get(this).observe(e,p),g.get(this).length>0&&O(this),D(e,function(e){T(e).connect()})},disconnect:function(){b.get(this).disconnect()},update:function(e){var t,o,i,n=this,r=f.get(n)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+r+": Iterator getter is not callable.");if(!e.every(x))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+r+": Failed to convert value to 'CSSStyleSheet'");if(e.some(S))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+r+": Can't adopt non-constructed stylesheets");n.sheets=e;var a=g.get(n),s=(t=e).filter(function(e,o){return t.indexOf(e)===o});(o=a,i=s,o.filter(function(e){return -1===i.indexOf(e)})).forEach(function(e){var t,o,i;(t=C(e,n)).parentNode.removeChild(t),o=e,i=n,c.get(o).delete(i),d.set(o,d.get(o).filter(function(e){return e!==i}))}),g.set(n,s),n.isConnected()&&s.length>0&&O(n)}},window.CSSStyleSheet=A,L(Document),"ShadowRoot"in window){L(ShadowRoot);var v=Element.prototype,w=v.attachShadow;v.attachShadow=function(e){var t=w.call(this,e);return"closed"===e.mode&&o.set(this,t),t}}var y=T(document);y.isConnected()?y.connect():document.addEventListener("DOMContentLoaded",y.connect.bind(y))}function E(e){return e.shadowRoot||o.get(e)}function x(e){return"object"==typeof e&&(u.isPrototypeOf(e)||s.isPrototypeOf(e))}function S(e){return"object"==typeof e&&s.isPrototypeOf(e)}function C(e,t){return c.get(e).get(t)}function _(e,t){requestAnimationFrame(function(){t.textContent=l.get(e).textContent,h.get(e).forEach(function(e){return t.sheet[e.method].apply(t.sheet,e.args)})})}function k(e){if(!l.has(e))throw TypeError("Illegal invocation")}function A(){var e=document.createElement("style");t.body.appendChild(e),l.set(this,e),d.set(this,[]),c.set(this,new WeakMap),h.set(this,[])}function T(e){var t=m.get(e);return t||(t=new M(e),m.set(e,t)),t}function L(e){n(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return T(this).sheets},set:function(e){T(this).update(e)}})}function D(e,t){for(var o=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,function(e){return E(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),i=void 0;i=o.nextNode();)t(E(i))}function R(e){var t=f.get(e);return t instanceof Document?t.body:t}function O(e){var t=document.createDocumentFragment(),o=g.get(e),i=b.get(e),n=R(e);i.disconnect(),o.forEach(function(o){var i;t.appendChild(C(o,e)||(i=document.createElement("style"),c.get(o).set(e,i),d.get(o).push(e),i))}),n.insertBefore(t,null),i.observe(n,p),o.forEach(function(t){_(t,C(t,e))})}function M(t){var o=this;o.sheets=[],f.set(o,t),g.set(o,[]),b.set(o,new MutationObserver(function(t,i){if(!document)return void i.disconnect();t.forEach(function(t){e||r.call(t.addedNodes,function(e){e instanceof Element&&D(e,function(e){T(e).connect()})}),r.call(t.removedNodes,function(t){t instanceof Element&&(t instanceof HTMLStyleElement&&g.get(o).some(function(e){return C(e,o)})&&O(o),e||D(t,function(e){T(e).disconnect()}))})})}))}}();var X={};X=t("fWGb9");const U=[X,t("3ME5X")],V=[];for(let e=0;e<U.length;e+=1)V.push(new CSSStyleSheet);function W(e){return new Promise(function(t,o){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return o(e.error)}})}function G(){var e,t,o;return eG||(e="keyval",o=function(){if(t)return t;var o=indexedDB.open("keyval-store");return o.onupgradeneeded=function(){return o.result.createObjectStore(e)},(t=W(o)).then(function(e){e.onclose=function(){return t=void 0}},function(){}),t},eG=function(t,i){return o().then(function(o){return i(o.transaction(e,t).objectStore(e))})}),eG}!async function(){let e=await Promise.all(U.map(async e=>(await fetch(e)).text()));for(let t=0;t<e.length;t+=1)await V[t].replace(e[t]);document.body.style.visibility="visible"}();const J="rss-reader/feeds",Z=async e=>{try{return{value:await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G();return t("readonly",function(t){return W(t.get(e))})}(e),error:void 0}}catch(e){return{value:void 0,error:e}}},K=async(e,t)=>{try{return await function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G();return o("readwrite",function(o){return o.put(t,e),W(o.transaction)})}(e,t),{error:void 0}}catch(e){return{error:e}}},Q=async()=>Z(J),ee=async(e,t=!0)=>{if(!Array.isArray(e))return;let{error:o}=await K(J,e);return!o&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"set",feeds:e}})),{error:o}},et=async(e,t=!0)=>{let{value:o=[]}=await Q(),i=o.find(t=>t.url===e.url),n="";i?(i.url=e.url,i.title=e.title,n="update"):(o.push(e),n="create");let{error:r}=await K(J,o);return!r&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:n,feed:e}})),{error:r}},eo=async(e,t=!0)=>{let{value:o=[]}=await Q(),i=o.filter(t=>t.url!==e),{error:n}=await K(J,i);return!n&&t&&(0===i.length&&await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G();return t("readwrite",function(t){return t.delete(e),W(t.transaction)})}(J),document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"delete",feed:{url:e}}}))),{error:n}},ei=e=>{try{return new URL(e),!0}catch{return!1}},en=`
  :host {
    --input-height: 42px;
    display: block;
  }
`,er=document.createElement("template");er.innerHTML=`
  <style>${en}</style>

  <form name="addFeedForm" autocomplete="off" class="d-flex">
    <div class="form-group" style="flex: 1;">
      <label for="feedUrl" class="visually-hidden">Enter a feed URL in XML format</label>
      <input id="feedUrl" type="url" name="feed-url" class="form-control" style="height: var(--input-height);" placeholder="Enter a feed URL in XML format" autocapitalize="off" autocorrect="off" required>
    </div>
    <div class="ms-2">
      <input type="submit" value="Add feed" class="btn btn-primary" style="height: var(--input-height);">
    </div>
  </form>
`;class ea extends HTMLElement{#_=null;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(er.content.cloneNode(!0))),this.shadowRoot.adoptedStyleSheets=V,this.#_=this.shadowRoot.querySelector('form[name="addFeedForm"]')}connectedCallback(){this.#_.addEventListener("submit",this.#k)}disconnectedCallback(){this.#_.addEventListener("submit",this.#k)}async #k(e){e.preventDefault();let t=e.target["feed-url"],o=t.value.trim(),{value:i=[]}=await Q(),n=!!i.find(e=>e.url===o),r=ei(o);!n&&r&&await et({url:o,title:""}),t.value=""}}function es(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function el(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?es(Object(o),!0).forEach(function(t){var i,n,r;i=e,n=t,r=o[t],n in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):es(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function ed(e){return(ed="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ec(){return(ec=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}function eh(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}window.customElements.get("add-feed")||window.customElements.define("add-feed",ea);var eu=eh(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ep=eh(/Edge/i),em=eh(/firefox/i),ef=eh(/safari/i)&&!eh(/chrome/i)&&!eh(/android/i),eg=eh(/iP(ad|od|hone)/i),eb=eh(/chrome/i)&&eh(/android/i),ev={capture:!1,passive:!1};function ew(e,t,o){e.addEventListener(t,o,!eu&&ev)}function ey(e,t,o){e.removeEventListener(t,o,!eu&&ev)}function eE(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){}return!1}}function ex(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function eS(e,t,o,i){if(e){o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&eE(e,t):eE(e,t))||i&&e===o)return e;if(e===o)break}while(e=ex(e))}return null}var eC=/\s+/g;function e_(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(eC," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(eC," ")}}function ek(e,t,o){var i=e&&e.style;if(i)if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];else t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}function eA(e,t){var o="";if("string"==typeof e)o=e;else do{var i=ek(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode))var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function eT(e,t,o){if(e){var i=e.getElementsByTagName(t),n=0,r=i.length;if(o)for(;n<r;n++)o(i[n],n);return i}return[]}function eL(){var e=document.scrollingElement;return e||document.documentElement}function eD(e,t,o,i,n){if(e.getBoundingClientRect||e===window){if(e!==window&&e.parentNode&&e!==eL()?(a=(r=e.getBoundingClientRect()).top,s=r.left,l=r.bottom,d=r.right,c=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(t||o)&&e!==window&&(n=n||e.parentNode,!eu))do if(n&&n.getBoundingClientRect&&("none"!==ek(n,"transform")||o&&"static"!==ek(n,"position"))){var r,a,s,l,d,c,h,u=n.getBoundingClientRect();a-=u.top+parseInt(ek(n,"border-top-width")),s-=u.left+parseInt(ek(n,"border-left-width")),l=a+r.height,d=s+r.width;break}while(n=n.parentNode)if(i&&e!==window){var p=eA(n||e),m=p&&p.a,f=p&&p.d;p&&(a/=f,s/=m,h/=m,c/=f,l=a+c,d=s+h)}return{top:a,left:s,bottom:l,right:d,width:h,height:c}}}function eR(e,t,o){for(var i=eF(e,!0),n=eD(e)[t];i;){var r=eD(i)[o];if(!("top"===o||"left"===o?n>=r:n<=r))return i;if(i===eL())break;i=eF(i,!1)}return!1}function eO(e,t,o,i){for(var n=0,r=0,a=e.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==tO.ghost&&(i||a[r]!==tO.dragged)&&eS(a[r],o.draggable,e,!1)){if(n===t)return a[r];n++}r++}return null}function eM(e,t){for(var o=e.lastElementChild;o&&(o===tO.ghost||"none"===ek(o,"display")||t&&!eE(o,t));)o=o.previousElementSibling;return o||null}function eI(e,t){var o=0;if(!e||!e.parentNode)return -1;for(;e=e.previousElementSibling;)"TEMPLATE"!==e.nodeName.toUpperCase()&&e!==tO.clone&&(!t||eE(e,t))&&o++;return o}function ez(e){var t=0,o=0,i=eL();if(e)do{var n=eA(e),r=n.a,a=n.d;t+=e.scrollLeft*r,o+=e.scrollTop*a}while(e!==i&&(e=e.parentNode))return[t,o]}function eF(e,t){if(!e||!e.getBoundingClientRect)return eL();var o=e,i=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=ek(o);if(o.clientWidth<o.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!o.getBoundingClientRect||o===document.body)return eL();if(i||t)return o;i=!0}}while(o=o.parentNode)return eL()}function eN(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function eB(e,t){return function(){if(!eJ){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),eJ=setTimeout(function(){eJ=void 0},t)}}}function eP(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function ej(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function eH(e,t,o){var i={};return Array.from(e.children).forEach(function(n){if(eS(n,t.draggable,e,!1)&&!n.animated&&n!==o){var r,a,s,l,d=eD(n);i.left=Math.min(null!=(r=i.left)?r:1/0,d.left),i.top=Math.min(null!=(a=i.top)?a:1/0,d.top),i.right=Math.max(null!=(s=i.right)?s:-1/0,d.right),i.bottom=Math.max(null!=(l=i.bottom)?l:-1/0,d.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var eq="Sortable"+new Date().getTime(),e$=[],eY={initializeByDefault:!0},eX={mount:function(e){for(var t in eY)!eY.hasOwnProperty(t)||t in e||(e[t]=eY[t]);e$.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),e$.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var n=e+"Global";e$.forEach(function(i){t[i.pluginName]&&(t[i.pluginName][n]&&t[i.pluginName][n](el({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](el({sortable:t},o)))})},initializePlugins:function(e,t,o,i){for(var n in e$.forEach(function(i){var n=i.pluginName;if(e.options[n]||i.initializeByDefault){var r=new i(e,t,e.options);r.sortable=e,r.options=e.options,e[n]=r,ec(o,r.defaults)}}),e.options)if(e.options.hasOwnProperty(n)){var r=this.modifyOption(e,n,e.options[n]);void 0!==r&&(e.options[n]=r)}},getEventProperties:function(e,t){var o={};return e$.forEach(function(i){"function"==typeof i.eventProperties&&ec(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return e$.forEach(function(n){e[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[t]&&(i=n.optionListeners[t].call(e[n.pluginName],o))}),i}},eU=["evt"],eV=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,n=function(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(o,eU);eX.pluginEvent.bind(tO)(e,t,el({dragEl:eZ,parentEl:eK,ghostEl:eQ,rootEl:e0,nextEl:e1,lastDownEl:e5,cloneEl:e2,cloneHidden:e8,dragStarted:ts,putSortable:te,activeSortable:tO.active,originalEvent:i,oldIndex:e3,oldDraggableIndex:e6,newIndex:e4,newDraggableIndex:e7,hideGhostForTarget:tT,unhideGhostForTarget:tL,cloneNowHidden:function(){e8=!0},cloneNowShown:function(){e8=!1},dispatchSortableEvent:function(e){eW({sortable:t,name:e,originalEvent:i})}},n))};function eW(e){!function(e){var t=e.sortable,o=e.rootEl,i=e.name,n=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,d=e.newIndex,c=e.oldDraggableIndex,h=e.newDraggableIndex,u=e.originalEvent,p=e.putSortable,m=e.extraEventProperties;if(t=t||o&&o[eq]){var f,g=t.options,b="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||eu||ep?(f=document.createEvent("Event")).initEvent(i,!0,!0):f=new CustomEvent(i,{bubbles:!0,cancelable:!0}),f.to=a||o,f.from=s||o,f.item=n||o,f.clone=r,f.oldIndex=l,f.newIndex=d,f.oldDraggableIndex=c,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var v=el(el({},m),eX.getEventProperties(i,t));for(var w in v)f[w]=v[w];o&&o.dispatchEvent(f),g[b]&&g[b].call(t,f)}}(el({putSortable:te,cloneEl:e2,targetEl:eZ,rootEl:e0,oldIndex:e3,oldDraggableIndex:e6,newIndex:e4,newDraggableIndex:e7},e))}var eG,eJ,eZ,eK,eQ,e0,e1,e5,e2,e8,e3,e4,e6,e7,e9,te,tt,to,ti,tn,tr,ta,ts,tl,td,tc,th,tu=!1,tp=!1,tm=[],tf=!1,tg=!1,tb=[],tv=!1,tw=[],ty="undefined"!=typeof document,tE=ep||eu?"cssFloat":"float",tx=ty&&!eb&&!eg&&"draggable"in document.createElement("div"),tS=function(){if(ty){if(eu)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),tC=function(e,t){var o=ek(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),n=eO(e,0,t),r=eO(e,1,t),a=n&&ek(n),s=r&&ek(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+eD(n).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+eD(r).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var c="left"===a.float?"left":"right";return r&&("both"===s.clear||s.clear===c)?"vertical":"horizontal"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===o[tE]||r&&"none"===o[tE]&&l+d>i)?"vertical":"horizontal"},t_=function(e,t,o){var i=o?e.left:e.top,n=o?e.right:e.bottom,r=o?e.width:e.height,a=o?t.left:t.top,s=o?t.right:t.bottom,l=o?t.width:t.height;return i===a||n===s||i+r/2===a+l/2},tk=function(e,t){var o;return tm.some(function(i){var n=i[eq].options.emptyInsertThreshold;if(!(!n||eM(i))){var r=eD(i),a=e>=r.left-n&&e<=r.right+n,s=t>=r.top-n&&t<=r.bottom+n;if(a&&s)return o=i}}),o},tA=function(e){function t(e,o){return function(i,n,r,a){var s=i.options.group.name&&n.options.group.name&&i.options.group.name===n.options.group.name;if(null==e&&(o||s))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,n,r,a),o)(i,n,r,a);var l=(o?i:n).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var o={},i=e.group;i&&"object"==ed(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},tT=function(){!tS&&eQ&&ek(eQ,"display","none")},tL=function(){!tS&&eQ&&ek(eQ,"display","")};ty&&!eb&&document.addEventListener("click",function(e){if(tp)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),tp=!1,!1},!0);var tD=function(e){if(eZ){var t=tk((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[eq]._onDragOver(o)}}},tR=function(e){eZ&&eZ.parentNode[eq]._isOutsideThisEl(e.target)};function tO(e,t){if(!(e&&e.nodeType&&1===e.nodeType))throw"Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(e));this.el=e,this.options=t=ec({},t),e[eq]=this;var o,i,n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return tC(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==tO.supportPointer&&"PointerEvent"in window&&(!ef||eg),emptyInsertThreshold:5};for(var r in eX.initializePlugins(this,e,n),n)r in t||(t[r]=n[r]);for(var a in tA(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&tx,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?ew(e,"pointerdown",this._onTapStart):(ew(e,"mousedown",this._onTapStart),ew(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(ew(e,"dragover",this),ew(e,"dragenter",this)),tm.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),ec(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==ek(e,"display")&&e!==tO.ghost){i.push({target:e,rect:eD(e)});var t=el({},i[i.length-1].rect);if(e.thisAnimationDuration){var o=eA(e,!0);o&&(t.top-=o.f,t.left-=o.e)}e.fromRect=t}})},addAnimationState:function(e){i.push(e)},removeAnimationState:function(e){i.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o)}return -1}(i,{target:e}),1)},animateAll:function(e){var t=this;if(!this.options.animation){clearTimeout(o),"function"==typeof e&&e();return}var n=!1,r=0;i.forEach(function(e){var o,i,a,s,l=0,d=e.target,c=d.fromRect,h=eD(d),u=d.prevFromRect,p=d.prevToRect,m=e.rect,f=eA(d,!0);f&&(h.top-=f.f,h.left-=f.e),d.toRect=h,d.thisAnimationDuration&&eN(u,h)&&!eN(c,h)&&(m.top-h.top)/(m.left-h.left)==(c.top-h.top)/(c.left-h.left)&&(o=m,i=u,a=p,s=t.options,l=Math.sqrt(Math.pow(i.top-o.top,2)+Math.pow(i.left-o.left,2))/Math.sqrt(Math.pow(i.top-a.top,2)+Math.pow(i.left-a.left,2))*s.animation),eN(h,c)||(d.prevFromRect=c,d.prevToRect=h,l||(l=t.options.animation),t.animate(d,m,h,l)),l&&(n=!0,r=Math.max(r,l),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},l),d.thisAnimationDuration=l)}),clearTimeout(o),n?o=setTimeout(function(){"function"==typeof e&&e()},r):"function"==typeof e&&e(),i=[]},animate:function(e,t,o,i){if(i){ek(e,"transition",""),ek(e,"transform","");var n=eA(this.el),r=n&&n.a,a=n&&n.d,s=(t.left-o.left)/(r||1),l=(t.top-o.top)/(a||1);e.animatingX=!!s,e.animatingY=!!l,ek(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=e.offsetWidth,ek(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),ek(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){ek(e,"transition",""),ek(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},i)}}}))}function tM(e,t,o,i,n,r,a,s){var l,d,c=e[eq],h=c.options.onMove;return!window.CustomEvent||eu||ep?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=n||t,l.relatedRect=r||eD(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),h&&(d=h.call(c,l,a)),d}function tI(e){e.draggable=!1}function tz(){tv=!1}function tF(e){return setTimeout(e,0)}function tN(e){return clearTimeout(e)}tO.prototype={constructor:tO,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(tl=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,eZ):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,n=i.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(a||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=i.filter;if(function(e){tw.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var i=t[o];i.checked&&tw.push(i)}}(o),!(eZ||/mousedown|pointerdown/.test(r)&&0!==e.button||i.disabled||l.isContentEditable||!this.nativeDraggable&&ef&&s&&"SELECT"===s.tagName.toUpperCase()||(s=eS(s,i.draggable,o,!1))&&s.animated)&&e5!==s){if(e3=eI(s),e6=eI(s,i.draggable),"function"==typeof d){if(d.call(this,e,s,this)){eW({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),eV("filter",t,{evt:e}),n&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(i){if(i=eS(l,i.trim(),o,!1))return eW({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),eV("filter",t,{evt:e}),!0}))){n&&e.preventDefault();return}(!i.handle||eS(l,i.handle,o,!1))&&this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,t,o){var i,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(o&&!eZ&&o.parentNode===r){var l=eD(o);if(e0=r,eK=(eZ=o).parentNode,e1=eZ.nextSibling,e5=o,e9=a.group,tO.dragged=eZ,tr=(tt={target:eZ,clientX:(t||e).clientX,clientY:(t||e).clientY}).clientX-l.left,ta=tt.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,eZ.style["will-change"]="all",i=function(){if(eV("delayEnded",n,{evt:e}),tO.eventCanceled)return void n._onDrop();n._disableDelayedDragEvents(),!em&&n.nativeDraggable&&(eZ.draggable=!0),n._triggerDragStart(e,t),eW({sortable:n,name:"choose",originalEvent:e}),e_(eZ,a.chosenClass,!0)},a.ignore.split(",").forEach(function(e){eT(eZ,e.trim(),tI)}),ew(s,"dragover",tD),ew(s,"mousemove",tD),ew(s,"touchmove",tD),a.supportPointer?(ew(s,"pointerup",n._onDrop),this.nativeDraggable||ew(s,"pointercancel",n._onDrop)):(ew(s,"mouseup",n._onDrop),ew(s,"touchend",n._onDrop),ew(s,"touchcancel",n._onDrop)),em&&this.nativeDraggable&&(this.options.touchStartThreshold=4,eZ.draggable=!0),eV("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(ep||eu))i();else{if(tO.eventCanceled)return void this._onDrop();a.supportPointer?(ew(s,"pointerup",n._disableDelayedDrag),ew(s,"pointercancel",n._disableDelayedDrag)):(ew(s,"mouseup",n._disableDelayedDrag),ew(s,"touchend",n._disableDelayedDrag),ew(s,"touchcancel",n._disableDelayedDrag)),ew(s,"mousemove",n._delayedDragTouchMoveHandler),ew(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&ew(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(i,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){eZ&&tI(eZ),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;ey(e,"mouseup",this._disableDelayedDrag),ey(e,"touchend",this._disableDelayedDrag),ey(e,"touchcancel",this._disableDelayedDrag),ey(e,"pointerup",this._disableDelayedDrag),ey(e,"pointercancel",this._disableDelayedDrag),ey(e,"mousemove",this._delayedDragTouchMoveHandler),ey(e,"touchmove",this._delayedDragTouchMoveHandler),ey(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?ew(document,"pointermove",this._onTouchMove):t?ew(document,"touchmove",this._onTouchMove):ew(document,"mousemove",this._onTouchMove):(ew(eZ,"dragend",this),ew(e0,"dragstart",this._onDragStart));try{document.selection?tF(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(tu=!1,e0&&eZ){eV("dragStarted",this,{evt:t}),this.nativeDraggable&&ew(document,"dragover",tR);var o=this.options;e||e_(eZ,o.dragClass,!1),e_(eZ,o.ghostClass,!0),tO.active=this,e&&this._appendGhost(),eW({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(to){this._lastX=to.clientX,this._lastY=to.clientY,tT();for(var e=document.elementFromPoint(to.clientX,to.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(to.clientX,to.clientY))!==t;)t=e;if(eZ.parentNode[eq]._isOutsideThisEl(e),t)do{if(t[eq]&&t[eq]._onDragOver({clientX:to.clientX,clientY:to.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break;e=t}while(t=ex(t))tL()}},_onTouchMove:function(e){if(tt){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,n=e.touches?e.touches[0]:e,r=eQ&&eA(eQ,!0),a=eQ&&r&&r.a,s=eQ&&r&&r.d,l=eg&&th&&ez(th),d=(n.clientX-tt.clientX+i.x)/(a||1)+(l?l[0]-tb[0]:0)/(a||1),c=(n.clientY-tt.clientY+i.y)/(s||1)+(l?l[1]-tb[1]:0)/(s||1);if(!tO.active&&!tu){if(o&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(eQ){r?(r.e+=d-(ti||0),r.f+=c-(tn||0)):r={a:1,b:0,c:0,d:1,e:d,f:c};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");ek(eQ,"webkitTransform",h),ek(eQ,"mozTransform",h),ek(eQ,"msTransform",h),ek(eQ,"transform",h),ti=d,tn=c,to=n}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!eQ){var e=this.options.fallbackOnBody?document.body:e0,t=eD(eZ,!0,eg,!0,e),o=this.options;if(eg){for(th=e;"static"===ek(th,"position")&&"none"===ek(th,"transform")&&th!==document;)th=th.parentNode;th!==document.body&&th!==document.documentElement?(th===document&&(th=eL()),t.top+=th.scrollTop,t.left+=th.scrollLeft):th=eL(),tb=ez(th)}e_(eQ=eZ.cloneNode(!0),o.ghostClass,!1),e_(eQ,o.fallbackClass,!0),e_(eQ,o.dragClass,!0),ek(eQ,"transition",""),ek(eQ,"transform",""),ek(eQ,"box-sizing","border-box"),ek(eQ,"margin",0),ek(eQ,"top",t.top),ek(eQ,"left",t.left),ek(eQ,"width",t.width),ek(eQ,"height",t.height),ek(eQ,"opacity","0.8"),ek(eQ,"position",eg?"absolute":"fixed"),ek(eQ,"zIndex","100000"),ek(eQ,"pointerEvents","none"),tO.ghost=eQ,e.appendChild(eQ),ek(eQ,"transform-origin",tr/parseInt(eQ.style.width)*100+"% "+ta/parseInt(eQ.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,n=o.options;if(eV("dragStart",this,{evt:e}),tO.eventCanceled)return void this._onDrop();eV("setupClone",this),tO.eventCanceled||((e2=ej(eZ)).removeAttribute("id"),e2.draggable=!1,e2.style["will-change"]="",this._hideClone(),e_(e2,this.options.chosenClass,!1),tO.clone=e2),o.cloneId=tF(function(){eV("clone",o),tO.eventCanceled||(o.options.removeCloneOnHide||e0.insertBefore(e2,eZ),o._hideClone(),eW({sortable:o,name:"clone"}))}),t||e_(eZ,n.dragClass,!0),t?(tp=!0,o._loopId=setInterval(o._emulateDragOver,50)):(ey(document,"mouseup",o._onDrop),ey(document,"touchend",o._onDrop),ey(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(o,i,eZ)),ew(document,"drop",o),ek(eZ,"transform","translateZ(0)")),tu=!0,o._dragStartId=tF(o._dragStarted.bind(o,t,e)),ew(document,"selectstart",o),ts=!0,window.getSelection().removeAllRanges(),ef&&ek(document.body,"user-select","none")},_onDragOver:function(e){var t,o,i,n,r=this.el,a=e.target,s=this.options,l=s.group,d=tO.active,c=e9===l,h=s.sort,u=te||d,p=this,m=!1;if(!tv){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),a=eS(a,s.draggable,r,!0),P("dragOver"),tO.eventCanceled)return m;if(eZ.contains(e.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return H(!1);if(tp=!1,d&&!s.disabled&&(c?h||(i=eK!==e0):te===this||(this.lastPutMode=e9.checkPull(this,d,eZ,e))&&l.checkPut(this,d,eZ,e))){if(n="vertical"===this._getDirection(e,a),t=eD(eZ),P("dragOverValid"),tO.eventCanceled)return m;if(i)return eK=e0,j(),this._hideClone(),P("revert"),tO.eventCanceled||(e1?e0.insertBefore(eZ,e1):e0.appendChild(eZ)),H(!0);var f=eM(r,s.draggable);if(!f||(b=e,v=n,w=this,y=eD(eM(w.el,w.options.draggable)),E=eH(w.el,w.options,eQ),(v?b.clientX>E.right+10||b.clientY>y.bottom&&b.clientX>y.left:b.clientY>E.bottom+10||b.clientX>y.right&&b.clientY>y.top)&&!f.animated)){if(f===eZ)return H(!1);if(f&&r===e.target&&(a=f),a&&(o=eD(a)),!1!==tM(e0,r,eZ,t,a,o,e,!!a))return j(),f&&f.nextSibling?r.insertBefore(eZ,f.nextSibling):r.appendChild(eZ),eK=r,q(),H(!0)}else if(f&&(x=e,S=n,C=this,_=eD(eO(C.el,0,C.options,!0)),k=eH(C.el,C.options,eQ),S?x.clientX<k.left-10||x.clientY<_.top&&x.clientX<_.right:x.clientY<k.top-10||x.clientY<_.bottom&&x.clientX<_.left)){var g=eO(r,0,s,!0);if(g===eZ)return H(!1);if(o=eD(a=g),!1!==tM(e0,r,eZ,t,a,o,e,!1))return j(),r.insertBefore(eZ,g),eK=r,q(),H(!0)}else if(a.parentNode===r){o=eD(a);var b,v,w,y,E,x,S,C,_,k,A,T,L=0,D=eZ.parentNode!==r,R=!t_(eZ.animated&&eZ.toRect||t,a.animated&&a.toRect||o,n),O=n?"top":"left",M=eR(a,"top","top")||eR(eZ,"top","top"),I=M?M.scrollTop:void 0;if(tl!==a&&(T=o[O],tf=!1,tg=!R&&s.invertSwap||D),0!==(L=function(e,t,o,i,n,r,a,s){var l,d=i?e.clientY:e.clientX,c=i?o.height:o.width,h=i?o.top:o.left,u=i?o.bottom:o.right,p=!1;if(!a){if(s&&tc<c*n){if(!tf&&(1===td?d>h+c*r/2:d<u-c*r/2)&&(tf=!0),tf)p=!0;else if(1===td?d<h+tc:d>u-tc)return-td}else if(d>h+c*(1-n)/2&&d<u-c*(1-n)/2){return l=t,eI(eZ)<eI(l)?1:-1}}return(p=p||a)&&(d<h+c*r/2||d>u-c*r/2)?d>h+c/2?1:-1:0}(e,a,o,n,R?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,tg,tl===a))){var z=eI(eZ);do z-=L,A=eK.children[z];while(A&&("none"===ek(A,"display")||A===eQ))}if(0===L||A===a)return H(!1);tl=a,td=L;var F=a.nextElementSibling,N=!1,B=tM(e0,r,eZ,t,a,o,e,N=1===L);if(!1!==B)return(1===B||-1===B)&&(N=1===B),tv=!0,setTimeout(tz,30),j(),N&&!F?r.appendChild(eZ):a.parentNode.insertBefore(eZ,N?F:a),M&&eP(M,0,I-M.scrollTop),eK=eZ.parentNode,void 0===T||tg||(tc=Math.abs(T-eD(a)[O])),q(),H(!0)}if(r.contains(eZ))return H(!1)}return!1}function P(s,l){eV(s,p,el({evt:e,isOwner:c,axis:n?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:h,fromSortable:u,target:a,completed:H,onMove:function(o,i){return tM(e0,r,eZ,t,o,eD(o),e,i)},changed:q},l))}function j(){P("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function H(t){return P("dragOverCompleted",{insertion:t}),t&&(c?d._hideClone():d._showClone(p),p!==u&&(e_(eZ,te?te.options.ghostClass:d.options.ghostClass,!1),e_(eZ,s.ghostClass,!0)),te!==p&&p!==tO.active?te=p:p===tO.active&&te&&(te=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){P("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a!==eZ||eZ.animated)&&(a!==r||a.animated)||(tl=null),s.dragoverBubble||e.rootEl||a===document||(eZ.parentNode[eq]._isOutsideThisEl(e.target),t||tD(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function q(){e4=eI(eZ),e7=eI(eZ,s.draggable),eW({sortable:p,name:"change",toEl:r,newIndex:e4,newDraggableIndex:e7,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){ey(document,"mousemove",this._onTouchMove),ey(document,"touchmove",this._onTouchMove),ey(document,"pointermove",this._onTouchMove),ey(document,"dragover",tD),ey(document,"mousemove",tD),ey(document,"touchmove",tD)},_offUpEvents:function(){var e=this.el.ownerDocument;ey(e,"mouseup",this._onDrop),ey(e,"touchend",this._onDrop),ey(e,"pointerup",this._onDrop),ey(e,"pointercancel",this._onDrop),ey(e,"touchcancel",this._onDrop),ey(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;if(e4=eI(eZ),e7=eI(eZ,o.draggable),eV("drop",this,{evt:e}),eK=eZ&&eZ.parentNode,e4=eI(eZ),e7=eI(eZ,o.draggable),tO.eventCanceled)return void this._nulling();tu=!1,tg=!1,tf=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),tN(this.cloneId),tN(this._dragStartId),this.nativeDraggable&&(ey(document,"drop",this),ey(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ef&&ek(document.body,"user-select",""),ek(eZ,"transform",""),e&&(ts&&(e.cancelable&&e.preventDefault(),o.dropBubble||e.stopPropagation()),eQ&&eQ.parentNode&&eQ.parentNode.removeChild(eQ),(e0===eK||te&&"clone"!==te.lastPutMode)&&e2&&e2.parentNode&&e2.parentNode.removeChild(e2),eZ&&(this.nativeDraggable&&ey(eZ,"dragend",this),tI(eZ),eZ.style["will-change"]="",ts&&!tu&&e_(eZ,te?te.options.ghostClass:this.options.ghostClass,!1),e_(eZ,this.options.chosenClass,!1),eW({sortable:this,name:"unchoose",toEl:eK,newIndex:null,newDraggableIndex:null,originalEvent:e}),e0!==eK?(e4>=0&&(eW({rootEl:eK,name:"add",toEl:eK,fromEl:e0,originalEvent:e}),eW({sortable:this,name:"remove",toEl:eK,originalEvent:e}),eW({rootEl:eK,name:"sort",toEl:eK,fromEl:e0,originalEvent:e}),eW({sortable:this,name:"sort",toEl:eK,originalEvent:e})),te&&te.save()):e4!==e3&&e4>=0&&(eW({sortable:this,name:"update",toEl:eK,originalEvent:e}),eW({sortable:this,name:"sort",toEl:eK,originalEvent:e})),tO.active&&((null==e4||-1===e4)&&(e4=e3,e7=e6),eW({sortable:this,name:"end",toEl:eK,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){eV("nulling",this),e0=eZ=eK=eQ=e1=e2=e5=e8=tt=to=ts=e4=e7=e3=e6=tl=td=te=e9=tO.dragged=tO.ghost=tO.clone=tO.active=null,tw.forEach(function(e){e.checked=!0}),tw.length=ti=tn=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":var t;eZ&&(this._onDragOver(e),(t=e).dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault());break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,n=o.length,r=this.options;i<n;i++)eS(e=o[i],r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||function(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(e,t){var n=i.children[t];eS(n,this.options.draggable,i,!1)&&(o[e]=n)},this),t&&this.captureAnimationState(),e.forEach(function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return eS(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=eX.modifyOption(this,e,t);void 0!==i?o[e]=i:o[e]=t,"group"===e&&tA(o)},destroy:function(){eV("destroy",this);var e=this.el;e[eq]=null,ey(e,"mousedown",this._onTapStart),ey(e,"touchstart",this._onTapStart),ey(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(ey(e,"dragover",this),ey(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),tm.splice(tm.indexOf(this.el),1),this.el=null},_hideClone:function(){!e8&&(eV("hideClone",this),tO.eventCanceled||(ek(e2,"display","none"),this.options.removeCloneOnHide&&e2.parentNode&&e2.parentNode.removeChild(e2),e8=!0))},_showClone:function(e){if("clone"!==e.lastPutMode)return void this._hideClone();if(e8){if(eV("showClone",this),tO.eventCanceled)return;eZ.parentNode!=e0||this.options.group.revertClone?e1?e0.insertBefore(e2,e1):e0.appendChild(e2):e0.insertBefore(e2,eZ),this.options.group.revertClone&&this.animate(eZ,e2),ek(e2,"display",""),e8=!1}}},ty&&ew(document,"touchmove",function(e){(tO.active||tu)&&e.cancelable&&e.preventDefault()}),tO.utils={on:ew,off:ey,css:ek,find:eT,is:function(e,t){return!!eS(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:eB,closest:eS,toggleClass:e_,clone:ej,index:eI,nextTick:tF,cancelNextTick:tN,detectDirection:tC,getChild:eO,expando:eq},tO.get=function(e){return e[eq]},tO.mount=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(e));e.utils&&(tO.utils=el(el({},tO.utils),e.utils)),eX.mount(e)})},tO.create=function(e,t){return new tO(e,t)},tO.version="1.15.6";var tB,tP,tj,tH=[];eB(function(e,t,o,i){if(t.scroll){var n,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,d=eL();tP!==o&&(tP=o,tH.forEach(function(e){clearInterval(e.pid)}),tH=[],tB=t.scroll,n=t.scrollFn,!0===tB&&(tB=eF(o,!0)));var c=0,h=tB;do{var u=h,p=eD(u),m=p.top,f=p.bottom,g=p.left,b=p.right,v=p.width,w=p.height,y=void 0,E=void 0,x=u.scrollWidth,S=u.scrollHeight,C=ek(u),_=u.scrollLeft,k=u.scrollTop;u===d?(y=v<x&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(y=v<x&&("auto"===C.overflowX||"scroll"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY));var A=y&&(Math.abs(b-r)<=s&&_+v<x)-(Math.abs(g-r)<=s&&!!_),T=E&&(Math.abs(f-a)<=s&&k+w<S)-(Math.abs(m-a)<=s&&!!k);if(!tH[c])for(var L=0;L<=c;L++)tH[L]||(tH[L]={});(tH[c].vx!=A||tH[c].vy!=T||tH[c].el!==u)&&(tH[c].el=u,tH[c].vx=A,tH[c].vy=T,clearInterval(tH[c].pid),(0!=A||0!=T)&&(tH[c].pid=setInterval((function(){i&&0===this.layer&&tO.active._onTouchMove(tj);var t=tH[this.layer].vy?tH[this.layer].vy*l:0,o=tH[this.layer].vx?tH[this.layer].vx*l:0;("function"!=typeof n||"continue"===n.call(tO.dragged.parentNode[eq],o,t,e,tj,tH[this.layer].el))&&eP(tH[this.layer].el,o,t)}).bind({layer:c}),24))),c++}while(t.bubbleScroll&&h!==d&&(h=eF(h,!1)))}},30);var tq=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,n=e.activeSortable,r=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=o||n;a();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),l&&!l.el.contains(c)&&(r("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function t$(){}function tY(){}t$.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=eO(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:tq},ec(t$,{pluginName:"revertOnSpill"}),tY.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:tq},ec(tY,{pluginName:"removeOnSpill"});const tX=`
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
    --dropzone-focus-box-shadow: var(--focus-ring);

    @media (prefers-color-scheme: dark) {
      --dropzone-border-color: var(--bs-gray-600);
      --dropzone-background-color: var(--bs-gray-800);
      --dropzone-background-color-dragover: var(--bs-gray-700);
    }
  }

  a-tab:focus-visible {
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
    box-shadow: var(--focus-ring) inset;
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
`,tU=document.createElement("template");tU.innerHTML=`
  <style>${tX}</style>

  <a-tab-group no-scroll-controls>
    <a-tab slot="tab" role="heading">From file</a-tab>
    <a-tab-panel slot="panel">
      <div class="px-3 my-1">
        <files-dropzone accept="application/json">
          Drag 'n' drop a file, or click to select file to import
          <br />
          <small><em>(Only JSON files are allowed)</em></small>
        </files-dropzone>
      </div>
    </a-tab-panel>

    <a-tab slot="tab" role="heading">From text</a-tab>
    <a-tab-panel slot="panel">
      <form name="import-form" class="px-3 my-1">
        <textarea class="form-control mb-3" id="import-data" name="import-data" cols="42" placeholder="Enter the JSON data to import" required></textarea>
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </a-tab-panel>
  </a-tab-group>
`;class tV extends HTMLElement{#A=null;#T=null;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tU.content.cloneNode(!0))),this.#A=this.shadowRoot.querySelector("files-dropzone"),this.#T=this.shadowRoot.querySelector('form[name="import-form"]'),this.shadowRoot.adoptedStyleSheets=V}connectedCallback(){this.#A.addEventListener("files-dropzone-drop-accepted",this.#L),this.#T.addEventListener("submit",this.#D)}disconnectedCallback(){this.#A.removeEventListener("files-dropzone-drop-accepted",this.#L),this.#T.removeEventListener("submit",this.#D)}#L=e=>{let{acceptedFiles:t=[]}=e.detail,o=t[0];if(!o)return;let i=new FileReader;i.readAsText(o,"utf-8"),i.onload=this.#R};async #O(e){if(!Array.isArray(e)||0===e.length)return alert("Invalid file or no feeds found.");let{value:t=[]}=await Q();for(let o of e){let e=!!t.find(e=>e.url===o.url),{url:i,title:n}=o,r=ei(i);!e&&r&&await et({url:i,title:n})}this.dispatchEvent(new Event("feeds-imported",{bubbles:!0,composed:!0}))}#R=async e=>{try{let{result:t}=e.target;this.#O(JSON.parse(t))}catch{alert("The file is not valid.")}};#D=async e=>{e.preventDefault();let t=new FormData(e.target).get("import-data");try{this.#O(JSON.parse(t))}catch{alert("The data is not valid.")}}}window.customElements.get("import-feeds")||window.customElements.define("import-feeds",tV);const tW=(e,t)=>{let o="";try{o=JSON.stringify(e,null,t)}catch(e){console.error(e)}return o},tG=`
  :host {
    display: block;
    max-width: 500px;
  }

  #exportCode {
    display: block;
    overflow-y: auto;
    max-height: 200px;
    font-size: 0.75rem;
  }

  clipboard-copy::part(button) {
    background-color: transparent;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    color: currentColor;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  }

  clipboard-copy::part(button):focus {
    outline: 0;
    box-shadow: var(--focus-ring);
  }

  clipboard-copy span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`,tJ=document.createElement("template");tJ.innerHTML=`
  <style>${tG}</style>

  <div class="d-flex justify-content-end">
    <clipboard-copy feedback-duration="1500">
      <span slot="copy">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copy
      </span>
      <span slot="success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copied
      </span>
    </clipboard-copy>

    <web-share class="${!("object"==typeof o?"share"in navigator&&"canShare"in navigator&&navigator.canShare(o):"share"in navigator)?"d-none":""}">
      <button slot="button" class="btn btn-sm btn-default d-flex align-items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18" aria-hidden="true">
          <circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          <circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          <circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"/>
        </svg>
        <span class="label">Share</span>
      </button>
    </web-share>
  </div>

  <div class="card mt-2 mb-3">
    <div class="card-body">
      <pre class="m-0"><code id="exportCode"></code></pre>
    </div>
  </div>

  <button type="button" class="btn btn-primary d-inline-flex align-items-center justify-content-center gap-1 w-100" id="downloadButton">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>
    Download
  </button>
`;class tZ extends HTMLElement{#M=[];#I=null;#z=null;#F=null;#N=null;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tJ.content.cloneNode(!0))),this.#I=this.shadowRoot.getElementById("exportCode"),this.#z=this.shadowRoot.querySelector("clipboard-copy"),this.#F=this.shadowRoot.querySelector("web-share"),this.#N=this.shadowRoot.getElementById("downloadButton"),this.shadowRoot.adoptedStyleSheets=V}static get observedAttributes(){return["visible"]}attributeChangedCallback(e,t,o){if("visible"===e&&t!==o){let e=tW(this.feeds,2);this.#I.textContent=e,this.#z.value=e,this.#F.shareText=e}}connectedCallback(){this.#N.addEventListener("click",this.#B)}disconnectedCallback(){this.#N.removeEventListener("click",this.#B)}get feeds(){return this.#M}set feeds(e){this.#M=e||[]}get visible(){return this.hasAttribute("visible")}set visible(e){this.toggleAttribute("visible",!!e)}#P(e){let t=new Blob([tW(e,2)],{type:"application/json"}),o=URL.createObjectURL(t),i=document.createElement("a");i.href=o,i.download="rss-feeds-export.json",i.click(),URL.revokeObjectURL(o)}#B=()=>{this.#P(this.feeds)}}window.customElements.get("export-feeds")||window.customElements.define("export-feeds",tZ);const tK=`
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
`,tQ=document.createElement("template");tQ.innerHTML=`
  <style>${tK}</style>

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
`;class t0 extends HTMLElement{#j=!1;#H=null;#q=null;#$=null;#Y=null;#X=null;#U=null;#V=null;#W=null;#G=null;#J=null;#Z=null;#K=null;#Q=null;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tQ.content.cloneNode(!0))),this.shadowRoot.adoptedStyleSheets=V,this.#H=this.shadowRoot.getElementById("feedsContainer"),this.#q=this.shadowRoot.getElementById("feedsList"),this.#$=this.shadowRoot.getElementById("editBtn"),this.#Y=this.shadowRoot.getElementById("importBtn"),this.#X=this.shadowRoot.getElementById("importAltBtn"),this.#U=this.shadowRoot.getElementById("exportBtn"),this.#V=this.shadowRoot.getElementById("searchInput"),this.#W=this.shadowRoot.getElementById("searchClearBtn"),this.#G=this.shadowRoot.getElementById("importDialog"),this.#J=this.shadowRoot.getElementById("exportDialog"),this.#Z=this.shadowRoot.querySelector("import-feeds"),this.#K=this.shadowRoot.querySelector("export-feeds"),this.#Q=this.shadowRoot.getElementById("noFeedsDisclaimer")}async connectedCallback(){let{value:e=[]}=await Q();e.forEach(e=>this.#ee(e)),this.#et(),this.#q.addEventListener("click",this.#eo),this.#$.addEventListener("click",this.#ei),this.#X.addEventListener("click",this.#en),this.#Y.addEventListener("click",this.#en),this.#U.addEventListener("click",this.#er),this.#V.addEventListener("input",this.#ea),this.#W.addEventListener("click",this.#es),this.#G.addEventListener("me-open",this.#el),this.#J.addEventListener("me-open",this.#ed),this.#J.addEventListener("me-close",this.#ec),this.addEventListener("feeds-imported",this.#eh),document.addEventListener("feeds-updated",this.#eu),new tO(this.#q,{animation:150,handle:".sort-handler",onEnd:async e=>{let t=Array.prototype.map.call(e.to.querySelectorAll("li"),e=>({url:e.getAttribute("data-url"),title:e.getAttribute("data-title")||""}));await ee(t,!1)}})}disconnectedCallback(){this.#q.removeEventListener("click",this.#eo),this.#$.removeEventListener("click",this.#ei),this.#Y.removeEventListener("click",this.#en),this.#X.removeEventListener("click",this.#en),this.#U.removeEventListener("click",this.#er),this.#V.removeEventListener("input",this.#ea),this.#W.removeEventListener("click",this.#es),this.#G.removeEventListener("me-open",this.#el),this.#J.removeEventListener("me-open",this.#ed),this.#J.removeEventListener("me-close",this.#ec),this.removeEventListener("feeds-imported",this.#eh),document.removeEventListener("feeds-updated",this.#eu)}#ep=(e="")=>{let t=this.#q.querySelectorAll("[data-url]");0!==t.length&&t.forEach(t=>{let o=(t.getAttribute("data-url")||"").toLowerCase(),i=(t.getAttribute("data-title")||"").toLowerCase(),n=e.trim().toLowerCase();t.hidden=!(o.includes(n)||i.includes(n))})};#em=((e,t=0,o=!1)=>{let i=null;if("function"!=typeof e)throw TypeError("Expected a function for first argument");return(...n)=>{clearTimeout(i),o&&!i&&e(...n),i=setTimeout(()=>{i=null,o||e(...n)},t)}})(this.#ep,250);#ea=e=>{let t=e.target.value;return this.#W.classList.toggle("d-none",!t),this.#em(t)};#es=()=>{this.#V.value="",this.#V.dispatchEvent(new Event("input"))};#ei=e=>{this.#j=!this.#j,e.currentTarget.classList.toggle("active"),this.shadowRoot.querySelectorAll(".sort-handler, .delete-button").forEach(e=>{e.hidden=!e.hidden})};#en=()=>{this.#G.open=!0};#er=()=>{this.#J.open=!0};#el=()=>{try{this.#Z.shadowRoot.querySelector("a-tab-group").selectTabByIndex(0),this.#Z.shadowRoot.querySelector("textarea").value=""}catch{}};#ed=async()=>{let{value:e=[]}=await Q();this.#K.feeds=e,this.#K.setAttribute("visible","")};#ec=()=>{this.#K.removeAttribute("visible")};#eh=()=>{this.#G.open=!1};#eu=e=>{if("delete"===e.detail.action&&this.#ef(e.detail.feed),"create"===e.detail.action&&(this.#ee(e.detail.feed),this.#V.value&&(this.#V.value="",this.#ep(""))),"update"===e.detail.action){let{url:t,title:o}=e.detail.feed,i=this.#q.querySelector(`[data-url="${t}"]`);if(i){let e=i.querySelector(".link-content");i.setAttribute("data-title",o||""),e&&(e.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t)}}};#eo=e=>{let t=e.target,o=t.closest("button.delete-button"),i=t.closest("a.link");if(!i&&!o)return;let n=t.closest("li").getAttribute("data-url");o&&window.confirm(`Are you sure you want to delete feed "${n}"?`)&&eo(n),i&&(e.preventDefault(),document.querySelector("feed-reader").feedUrl=n)};#ee(e){let{url:t,title:o}=e,i=document.createElement("a");i.className="link text-decoration-none d-flex align-items-center h-100",i.style.flex="1",i.style.minWidth=0,i.style.color="inherit",i.href=t;let n=document.createElement("div");n.className="text-truncate link-content",n.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t;let r=document.createElement("button");r.type="button",r.hidden=!this.#j,r.className="delete-button btn btn-default text-danger p-0",r.style.lineHeight="1",r.setAttribute("aria-label","Delete feed"),r.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `;let a=document.createElement("li");a.className="list-group-item p-0 d-flex justify-content-between align-items-center",a.style.height="var(--list-item-height)",a.setAttribute("data-url",t||""),a.setAttribute("data-title",o||"");let s=document.createElement("div");s.hidden=!this.#j,s.className="sort-handler text-primary",s.setAttribute("aria-label","Reorder feed"),s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/>
      </svg>
    `,i.appendChild(n),a.appendChild(s),a.appendChild(i),a.appendChild(r),this.#q.appendChild(a),this.#et()}#ef(e){let t=this.#q.querySelector(`[data-url="${e.url}"]`);t&&t.remove(),this.#et()}async #et(){let{value:e=[]}=await Q();this.#H.classList.toggle("d-none",0===e.length),this.#Q.classList.toggle("d-none",e.length>0)}}window.customElements.get("feeds-list")||window.customElements.define("feeds-list",t0);const t1=new Map,t5=async(e,t={})=>{let o=t1.get(e);if(o)return o;let i=await fetch("https://api.rss2json.com/v1/api.json?rss_url="+e,t);if(!i.ok)throw Error("Error fetching data");let n=await i.json();return t1.set(e,n),n},t2=`
  :host {
    display: block;
  }

  img[src=""] {
    display: none !important;
  }

  .thumbnail {
    display: block;
    object-fit: cover;
    min-width: 90px;
    width: 90px;
  }

  @media (min-width: 500px) {
    .thumbnail {
      min-width: 120px;
      width: 120px;
    }
  }

  .feed-description-viewer img,
  .feed-description-viewer video {
    max-width: 100%;
    height: auto;
  }

  details summary {
    transition: margin 0.1s ease-out;
  }

  details[open] summary {
    margin-bottom: 0.75rem;
  }

  details:not([open]):not(.card details):last-child summary {
    margin-bottom: 1rem;
  }

  #spinner,
  #error {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    text-align: center;
    color: var(--body-color);
  }

  #feedsReaderModal {
    --me-border-radius: 0;
    --body-max-width: 1200px;
  }

  @supports (color: rgb(from white r g b)) {
    #feedsReaderModal {
      --me-background-color: rgb(from var(--body-bg) r g b / 0.75);
    }
  }

  #feedsReaderModal::part(base) {
    backdrop-filter: blur(4px);
  }

  #feedsReaderModal::part(header) {
    gap: 1rem;
    width: 100%;
    max-width: var(--body-max-width);
    margin: 0 auto;
    justify-content: space-between;
  }

  #feedsReaderModal::part(title) {
    min-width: 0;
  }

  #feedsReaderModal .modal-body {
    position: relative;
    max-width: var(--body-max-width);
    margin: 0 auto;
    min-height: 100%;
  }

  #feedsViewer {
    padding: 0 1rem;
  }

  @media screen and (max-width: 1200px) {
    #feedsViewer {
      padding: 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    #feedsReaderModal::part(header) {
      border-color: var(--bs-gray-700);
    }
  }
`,t8=document.createElement("template");t8.innerHTML=`
  <style>${t2}</style>

  <modal-element fullscreen no-animations static-backdrop id="feedsReaderModal">
    <h2 slot="header" id="feedTitle" class="h5 mb-0 text-truncate">

    </h2>

    <div class="modal-body">
      <div id="spinner" class="d-none">
        <span class="spinner-border" aria-hidden="true"></span>
        <span role="status">Please wait...</span>
      </div>

      <div id="error" class="d-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
          <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
        </svg>
        There was an error while fetching the feed.
      </div>

      <div id="feedsViewer"></div>
    </div>
  </modal-element>
`;class t3 extends HTMLElement{#eg=null;#eb=null;#ev=null;#ew=null;#ey=null;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t8.content.cloneNode(!0))),this.#eg=this.shadowRoot.getElementById("spinner"),this.#eb=this.shadowRoot.querySelector("modal-element"),this.#ev=this.#eb.querySelector("#feedTitle"),this.#ew=this.shadowRoot.getElementById("feedsViewer"),this.#ey=this.shadowRoot.getElementById("error"),this.shadowRoot.adoptedStyleSheets=V}static get observedAttributes(){return["feed-url"]}attributeChangedCallback(e){"feed-url"===e&&(this.feedUrl?this.#eE(this.feedUrl):this.#ex())}connectedCallback(){this.#eb.addEventListener("me-close",this.#eS)}disconnectedCallback(){this.#eb.removeEventListener("me-close",this.#eS)}get feedUrl(){return this.getAttribute("feed-url")}set feedUrl(e){e?this.setAttribute("feed-url",e):this.removeAttribute("feed-url")}#eE(e){this.#eb.open=!0,this.#eC(e)}#ex(){this.#eb.open=!1}#eS=()=>{e&&e.abort(),this.#e_(),this.feedUrl=null};#e_(){this.#ew.querySelectorAll(".card").forEach(e=>e.remove()),this.#ev.innerHTML="",this.#eg.classList.add("d-none"),this.#ey.classList.add("d-none")}async #eC(t){this.#eg.classList.remove("d-none"),e=new AbortController;try{let o=await t5(t,{signal:e.signal}),{value:i=[]}=await Q(),n=i.find(e=>e.url===t);n&&!n.title&&await et({url:t,title:o.feed.title||""}),this.#ev.textContent=o.feed.title||t,o.items.forEach(e=>{this.#ew.insertAdjacentHTML("beforeend",this.#ek(e))})}catch(e){"AbortError"!==e.name&&(console.error(e),this.#ev.textContent="",this.#ey.classList.remove("d-none"))}finally{this.#eg.classList.add("d-none")}}#ek(e){let{link:t,title:o,description:i,author:n,pubDate:r,thumbnail:a}=e,s="";try{s=new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}).format(new Date(r))}catch{s="-"}return`
      <div class="card mb-3">
        <div class="card-body">
          <a href="${t}" target="_blank" rel="noreferrer noopener" class="d-flex justify-content-between gap-3 text-decoration-none" style="color: inherit;">
            <div style="min-width: 0;">
              <h5 class="card-title h6">${o}</h5>
              <p class="text-muted text-truncate"><small>${s} ${n?`&bull; ${n}`:""}</small></p>
            </div>

            <img src="${a}" alt="${o}" width="120" height="70" class="thumbnail rounded" loading="lazy" />
          </a>

          <details>
            <summary>Read more...</summary>
            <div class="feed-description-viewer">
              ${i}
            </div>
          </details>
        </div>
      </div>
    `}}window.customElements.get("feed-reader")||window.customElements.define("feed-reader",t3),document.adoptedStyleSheets=V;
//# sourceMappingURL=rss-feed-reader.79043907.js.map
