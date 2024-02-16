!function(){let e;var t,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=o.parcelRequire3ec4;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},o.parcelRequire3ec4=r),r.register,Object.defineProperty({},"ClipboardCopy",{get:function(){return c},set:void 0,enumerable:!0,configurable:!0});let a="clipboard-copy",s="success",l="error",d=document.createElement("template");d.innerHTML=`
  <style>
    :host([hidden]),
    [hidden],
    ::slotted([hidden]) {
      display: none !important;
    }
  </style>

  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;class c extends HTMLElement{#e=null;#t;#o;#i;#n;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(d.content.cloneNode(!0))),this.#t=this.shadowRoot.querySelector("button"),this.#o=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#n=this.shadowRoot.querySelector('slot[name="error"]')}static get observedAttributes(){return["disabled"]}connectedCallback(){this.#r("value"),this.#r("from"),this.#r("disabled"),this.#r("feedbackDuration"),this.#t.addEventListener("click",this.#a)}disconnectedCallback(){this.#t.removeEventListener("click",this.#a),this.#s()}attributeChangedCallback(e){"disabled"===e&&(this.#t.disabled=this.disabled,this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}get value(){return this.getAttribute("value")}set value(e){this.setAttribute("value",e)}get from(){return this.getAttribute("from")}set from(e){this.setAttribute("from",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(e){this.setAttribute("feedback-duration",e)}async #l(){if(this.value||this.from)try{let e="";if(this.value)e=this.value;else if(this.from){let t="getRootNode"in Element.prototype?this.#t.getRootNode({composed:!0}):this.#t.ownerDocument;if(!t||!(t instanceof Document||t instanceof ShadowRoot))return;let o=t.querySelector(this.from);if(!o)return;e=o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o.value:o instanceof HTMLAnchorElement&&o.hasAttribute("href")?o.href:o.textContent}await navigator.clipboard.writeText(e),this.#d(s),this.dispatchEvent(new CustomEvent(`${a}-success`,{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.#d(l),this.dispatchEvent(new CustomEvent(`${a}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}#a=e=>{e.preventDefault(),this.disabled||this.#e||this.#l()};#d(e){this.#o.hidden=!0,this.#i.hidden=e!==s,this.#n.hidden=e!==l,this.#t.part.remove("button--success"),this.#t.part.remove("button--error"),this.#t.part.add(`button--${e}`),this.#e&&clearTimeout(this.#e),this.#e=setTimeout(()=>{this.#o.hidden=!1,this.#i.hidden=!0,this.#n.hidden=!0,this.#t.part.remove(`button--${e}`),this.#e=null},this.feedbackDuration)}#s(){this.#e&&clearTimeout(this.#e),this.#e=null,this.#o.hidden=!1,this.#i.hidden=!0,this.#n.hidden=!0,this.#t.part.remove("button--success"),this.#t.part.remove("button--error")}#r(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=a){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,c)}}c.defineCustomElement(),Object.defineProperty({},"WebShare",{get:function(){return p},set:void 0,enumerable:!0,configurable:!0});let h=`
  :host {
    display: inline-block;
  }
`,u=document.createElement("template");u.innerHTML=`
  <style>${h}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class p extends HTMLElement{#e;#t;#i=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(u.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#n()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#r("shareUrl"),this.#r("shareTitle"),this.#r("shareText"),this.#r("shareFiles"),this.#r("disabled"),this.#e?.addEventListener("slotchange",this.#s),this.#t?.addEventListener("click",this.#a)}disconnectedCallback(){this.#e?.removeEventListener("slotchange",this.#s),this.#t?.removeEventListener("click",this.#a)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#i}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#i=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#a=e=>{e.preventDefault(),this.disabled||this.share()};#s=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#a),this.#t=this.#n(),this.#t&&(this.#t.addEventListener("click",this.#a),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#n(){return this.#e&&this.#e.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#r(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,p)}}p.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return _},set:void 0,enumerable:!0,configurable:!0});let m=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),f=[".DS_Store","Thumbs.db"],b=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=m.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e},g=(e,t)=>{let o=b(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},v=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),w=async e=>{let t=[],o=await v(e);for(;o.length>0;)t.push(...o),o=await v(e);return t},y=e=>new Promise((t,o)=>{e.file(o=>t(g(o,e.fullPath)),o)}),E=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e){if(e.isFile){let o=await y(e);-1===f.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await w(e.createReader()))}}return t},x=async e=>{let t=[];for(let o of e)-1===f.indexOf(o.name)&&t.push(g(o));return t},S=async e=>e.dataTransfer?e.dataTransfer.items?await E(e.dataTransfer.items):await x(e.dataTransfer.files):await x(e.target.files),C="files-dropzone",k="TOO_MANY_FILES",A=document.createElement("template"),T=`
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
    --dropzone-focus-shadow-rgb: 49,132,253;
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
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
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
`;A.innerHTML=`
  <style>
    ${T}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class _ extends HTMLElement{#t=null;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(A.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("file-input"),this.#e=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?(this.#e?.removeAttribute("tabindex"),this.#e?.setAttribute("aria-disabled","true")):(this.#e?.setAttribute("tabindex","0"),this.#e?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple)}connectedCallback(){this.#o("accept"),this.#o("disabled"),this.#o("maxFiles"),this.#o("maxSize"),this.#o("minSize"),this.#o("multiple"),this.#o("autoFocus"),this.#o("noStyle"),this.#t?.addEventListener("change",this.#n),this.#e?.addEventListener("dragenter",this.#r),this.#e?.addEventListener("dragover",this.#s),this.#e?.addEventListener("dragleave",this.#a),this.#e?.addEventListener("drop",this.#i),this.#e?.addEventListener("click",this.#d),this.#e?.addEventListener("keyup",this.#l),this.autoFocus&&this.#e?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#n),this.#e?.removeEventListener("dragenter",this.#r),this.#e?.removeEventListener("dragover",this.#s),this.#e?.removeEventListener("dragleave",this.#a),this.#e?.removeEventListener("drop",this.#i),this.#e?.removeEventListener("click",this.#d),this.#e?.removeEventListener("keyup",this.#l)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#n=async e=>{try{this.#c(await S(e))}catch(e){this.dispatchEvent(new CustomEvent(`${C}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#r=()=>{this.disabled||this.dispatchEvent(new Event(`${C}-dragenter`,{bubbles:!0,composed:!0}))};#s=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e&&(this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${C}-dragover`,{bubbles:!0,composed:!0}))};#a=()=>{this.disabled||(this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${C}-dragleave`,{bubbles:!0,composed:!0})))};#i=async e=>{if(!this.disabled){e.preventDefault(),this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"));try{this.#c(await S(e))}catch(e){this.dispatchEvent(new CustomEvent(`${C}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#d=()=>{this.disabled||this.#t?.click()};#l=e=>{this.disabled||" "!==e.key&&"Enter"!==e.key||this.#t?.click()};#c(e){if(!Array.isArray(e)||!e.length)return;let t=[],o=[],i=e.length;if(!this.multiple&&i>1)for(let t of e)o.push({file:t,errors:[{code:k,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let t of e)o.push({file:t,errors:[{code:k,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of e){let e=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(i,this.accept),n=i.size>this.maxSize,r=i.size<this.minSize;if(!e||n||r){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),n&&t.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),r&&t.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:t})}else t.push(i)}this.dispatchEvent(new CustomEvent(`${C}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:o}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${C}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${C}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){this.disabled||this.#t?.click()}#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=C){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,_)}}_.defineCustomElement();let L=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},D=(e,t)=>{if(Object.prototype.hasOwnProperty.call(t,e)){let o=t[e];delete t[e],t[e]=o}},M=0,R=`
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
`,z=document.createElement("template");z.innerHTML=`
  <style>
    ${R}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;class O extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(z.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(e,t,o){if("selected"===e&&t!==o&&this.setAttribute("aria-selected",this.selected.toString()),"disabled"===e&&t!==o&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0")),"closable"===e&&t!==o){if(this.closable){let e=document.createElement("span");e.className="tab__close",e.setAttribute("part","close-tab"),e.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(e),e.addEventListener("click",this.#e)}else{let e=this.shadowRoot?.querySelector(".tab__close");e?.removeEventListener("click",this.#e),e?.remove()}}}connectedCallback(){this.#t("selected"),this.#t("disabled"),this.#t("closable"),this.id||(this.id=L("tab",(++M).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled?"-1":"0")}disconnectedCallback(){let e=this.shadowRoot?.querySelector(".tab__close");e?.removeEventListener("click",this.#e)}get selected(){return this.hasAttribute("selected")}set selected(e){this.toggleAttribute("selected",!!e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get closable(){return this.hasAttribute("closable")}set closable(e){this.toggleAttribute("closable",!!e)}#e=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#t(e){return D(e,this)}static defineCustomElement(e="a-tab"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,O)}}O.defineCustomElement();let N=0,I=`
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
    ${I}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;class B extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(F.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=L("panel",(++N).toString()))}static defineCustomElement(e="a-tab-panel"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,B)}}B.defineCustomElement();let P={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},j=Object.entries(P).map(([,e])=>e),H={AUTO:"auto",MANUAL:"manual"},q={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:" "},$=`
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
  :host([placement="${P.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${P.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${P.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${P.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${P.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${P.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${P.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${P.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${P.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${P.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,U=document.createElement("template");U.innerHTML=`
  <style>
    ${$}
  </style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;class Y extends HTMLElement{#i=null;#o=null;#s=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(U.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(e,t,o){"placement"===e&&t!==o&&this.#l(),"no-scroll-controls"===e&&t!==o&&this.#l()}get placement(){return this.getAttribute("placement")||P.TOP}set placement(e){null!=e&&this.setAttribute("placement",e)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(e){this.toggleAttribute("no-scroll-controls",!!e)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(e){this.setAttribute("scroll-distance",Math.abs(e).toString()||"200")}get activation(){return this.getAttribute("activation")||H.AUTO}set activation(e){this.setAttribute("activation",e||H.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(e){this.toggleAttribute("no-tab-cycling",!!e)}connectedCallback(){this.#t("placement"),this.#t("noScrollControls"),this.#t("scrollDistance"),this.#t("activation"),this.#t("noTabCycling");let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=this.shadowRoot?.querySelector(".tab-group__nav"),n=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.addEventListener("slotchange",this.#n),t?.addEventListener("slotchange",this.#n),o?.addEventListener("click",this.#r),o?.addEventListener("keydown",this.#a),n.forEach(e=>e.addEventListener("click",this.#h)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#i=new ResizeObserver(e=>{this.#o=window.requestAnimationFrame(()=>{let t=e?.[0],o=t?.target,r=o?.scrollWidth>o?.clientWidth;n.forEach(e=>e.toggleAttribute("hidden",!r)),i?.part.toggle("nav--has-scroll-controls",r),i?.classList.toggle("tab-group__nav--has-scroll-controls",r)})})),this.#u(),this.#l()}disconnectedCallback(){let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.removeEventListener("slotchange",this.#n),t?.removeEventListener("slotchange",this.#n),o?.removeEventListener("click",this.#r),o?.removeEventListener("keydown",this.#a),i.forEach(e=>e.removeEventListener("click",this.#h)),this.removeEventListener("a-tab-close",this.#d),this.#p()}#m(){if(!this.#i)return;let e=this.shadowRoot?.querySelector(".tab-group__tabs");e&&(this.#i.unobserve(e),this.#i.observe(e))}#p(){this.#i&&(this.#i.disconnect(),null!==this.#o&&(window.cancelAnimationFrame(this.#o),this.#o=null))}#c(){return getComputedStyle(this).direction||"ltr"}#u(){this.hidden=0===this.#f().length}#b(){let e=this.#f();this.#u(),e.forEach(e=>{let t=e.nextElementSibling;if(!t||"a-tab-panel"!==t.tagName.toLowerCase())return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#f(){return Array.from(this.querySelectorAll("a-tab"))}#v(e){let t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}#w(){return this.#f().find(e=>!e.disabled)||null}#y(){let e=this.#f();for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return e[t];return null}#E(){let e=this.#f(),t=this.activation===H.MANUAL?e.findIndex(e=>e.matches(":focus"))-1:e.findIndex(e=>e.selected)-1;for(;e[(t+e.length)%e.length].disabled;)t--;return this.noTabCycling&&t<0?null:e[(t+e.length)%e.length]}#x(){let e=this.#f(),t=this.activation===H.MANUAL?e.findIndex(e=>e.matches(":focus"))+1:e.findIndex(e=>e.selected)+1;for(;e[t%e.length].disabled;)t++;return this.noTabCycling&&t>=e.length?null:e[t%e.length]}#S(){let e=this.#f(),t=this.#g();e.forEach(e=>e.selected=!1),t.forEach(e=>e.hidden=!0)}#l(){let e=this.shadowRoot?.querySelector(".tab-group__nav"),t=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===P.START||this.placement===P.END?(this.#p(),t.forEach(e=>e.hidden=!0),e?.part.remove("nav--has-scroll-controls"),e?.classList.remove("tab-group__nav--has-scroll-controls")):(this.#m(),t.forEach(e=>e.hidden=!1))}#C(){let e=this.#f(),t=e.find(e=>e.selected&&!e.disabled)||e.find(e=>!e.disabled);t&&(this.#s&&!t.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.#k(t))}#k(e){this.#S(),e&&(e.selected=!0);let t=this.#v(e);t&&(t.hidden=!1)}#n=e=>{this.#b(),this.#l(),this.#C(),"tab"===e.target.name&&(this.#s=!0)};#a=e=>{if("a-tab"!==e.target.tagName.toLowerCase()||e.altKey)return;let t=j.includes(this.placement||"")?this.placement:P.TOP,o=[P.TOP,P.BOTTOM].includes(t||"")?"horizontal":"vertical",i=this.#c(),n=null;switch(e.key){case q.LEFT:"horizontal"===o&&(n="ltr"===i?this.#E():this.#x())&&(this.activation===H.MANUAL?n.focus():this.selectTab(n));break;case q.RIGHT:"horizontal"===o&&(n="ltr"===i?this.#x():this.#E())&&(this.activation===H.MANUAL?n.focus():this.selectTab(n));break;case q.UP:"vertical"===o&&(n=this.#E())&&(this.activation===H.MANUAL?n.focus():this.selectTab(n));break;case q.DOWN:"vertical"===o&&(n=this.#x())&&(this.activation===H.MANUAL?n.focus():this.selectTab(n));break;case q.HOME:(n=this.#w())&&(this.activation===H.MANUAL?n.focus():this.selectTab(n));break;case q.END:(n=this.#y())&&(this.activation===H.MANUAL?n.focus():this.selectTab(n));break;case q.ENTER:case q.SPACE:(n=e.target)&&this.selectTab(n);break;default:return}e.preventDefault()};#r=e=>{let t=e.target.closest("a-tab");t&&this.selectTab(t)};#h=e=>{let t=e.target.closest(".tab-group__scroll-button"),o=this.shadowRoot?.querySelector(".tab-group__tabs");if(!t||!o)return;let i=t.classList.contains("tab-group__scroll-button--start")?-1:1,n=o.scrollLeft;o.scrollTo({left:n+i*this.scrollDistance})};#d=e=>{let t=e.target,o=this.#v(t);t&&(t.remove(),t.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}}))),o&&"a-tab-panel"===o.tagName.toLowerCase()&&o.remove()};#t(e){return D(e,this)}selectTabByIndex(e){let t=this.#f()[e];t&&this.selectTab(t)}selectTabById(e){let t=this.#f().find(t=>t.id===e);t&&this.selectTab(t)}selectTab(e){let t=this.#f().find(e=>e.selected);!e||e.disabled||e.selected||"a-tab"!==e.tagName.toLowerCase()||(this.#k(e),window.requestAnimationFrame(()=>{e.scrollIntoView({inline:"nearest",block:"nearest"}),e.focus()}),t&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})))}static defineCustomElement(e="a-tab-group"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,Y)}}Y.defineCustomElement(),Object.defineProperty({},"ModalElement",{get:function(){return V},set:void 0,enumerable:!0,configurable:!0});let X=document.createElement("template"),W=`
  :host {
    --me-width: 32rem;
    --me-height: fit-content;
    --me-border-color: initial;
    --me-border-style: solid;
    --me-border-width: initial;
    --me-border-radius: 0;
    --me-box-shadow: none;
    --me-background-color: canvas;
    --me-header-spacing: 1rem;
    --me-body-spacing: 1rem;
    --me-footer-spacing: 1rem;
    --me-header-background-color: transparent;
    --me-body-background-color: transparent;
    --me-footer-background-color: transparent;
    --me-close-border-radius: 0;
    --me-close-background-color: transparent;
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
    width: var(--me-width);
    height: var(--me-height);
    padding: 0;
    border-color: var(--me-border-color);
    border-style: var(--me-border-style);
    border-width: var(--me-border-width);
    border-radius: var(--me-border-radius);
    box-shadow: var(--me-box-shadow);
    background-color: var(--me-background-color);
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

  @media (prefers-reduced-motion: no-preference) {
    .dialog:not(.dialog--no-animations),
    .dialog:not(.dialog--no-animations)::backdrop {
      transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
    }

    /* 1. IS-OPEN STATE */
    .dialog[open] {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open] {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]::backdrop {
        opacity: 0;
      }
    }

    .dialog--pulse:not(.dialog--no-animations) {
      animation-name: pulse;
      animation-duration: 300ms;
      animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }

    @keyframes pulse {
      0%   { transform: scale(1); }
      50%  { transform: scale(1.02); }
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
    overscroll-behavior: contain;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;

    padding: var(--me-footer-spacing);
    background-color: var(--me-footer-background-color);
  }

  .dialog__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.4375rem;
    border: none;
    background-color: transparent;
  }

  .dialog__close:not(:disabled) {
    cursor: pointer;
  }

  .dialog__close:disabled {
    cursor: not-allowed;
  }
`;X.innerHTML=`
  <style>${W}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
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
`;class V extends HTMLElement{#t=null;#e=null;#o=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(X.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#e=this.shadowRoot.querySelector('slot[name="footer"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button"]}attributeChangedCallback(e,t,o){if(null!==this.#t){if("open"===e&&t!==o&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===e&&t!==o){let e=this.#t.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#t.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}}}connectedCallback(){this.#n("open"),this.#n("staticBackdrop"),this.#n("noHeader"),this.#n("noAnimations"),this.#n("noCloseButton"),this.#n("fullscreen"),this.#n("preserveOverflow"),this.#t?.addEventListener("click",this.#s),this.#t?.addEventListener("close",this.#l),this.#t?.addEventListener("cancel",this.#r),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#i),this.#e?.addEventListener("slotchange",this.#a)}disconnectedCallback(){this.#o&&clearTimeout(this.#o),this.#t?.addEventListener("click",this.#s),this.#t?.removeEventListener("close",this.#l),this.#t?.removeEventListener("cancel",this.#r),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#i),this.#e?.removeEventListener("slotchange",this.#a)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}#d(){this.#o||(this.#t?.classList.add("dialog--pulse"),this.#o=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#o),this.#o=void 0},300))}#l=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#r=e=>{let t=this.#h("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#d())};#i=e=>{let t=this.#h("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#d())};#s=e=>{if(e.target!==e.currentTarget)return;let t=this.#h("backdrop-click");if(this.dispatchEvent(t),t.defaultPrevented||this.staticBackdrop){this.noAnimations||this.#d();return}this.#t?.close()};#a=()=>{if(null===this.#t)return;let e=this.#t.querySelector(".dialog__footer");if(null===e)return;let t=this.#e?.assignedNodes(),o=!!t&&t.length>0;e.hidden=!o};#h(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#n(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,V)}}V.defineCustomElement(),function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),o=new WeakMap,i="object"==typeof DOMException?Error:DOMException,n=Object.defineProperty,r=Array.prototype.forEach,a=/@import.+?;?$/gm,s=CSSStyleSheet.prototype;s.replace=function(){return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."))},s.replaceSync=function(){throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var l=new WeakMap,d=new WeakMap,c=new WeakMap,h=new WeakMap,u=T.prototype;u.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},u.replaceSync=function(e){if(A(this),"string"==typeof e){var t,o=this;l.get(o).textContent=((t=e.replace(a,""))!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()),h.set(o,[]),d.get(o).forEach(function(e){e.isConnected()&&k(o,C(o,e))})}},n(u,"cssRules",{configurable:!0,enumerable:!0,get:function(){return A(this),l.get(this).sheet.cssRules}}),n(u,"media",{configurable:!0,enumerable:!0,get:function(){return A(this),l.get(this).sheet.media}}),["addRule","deleteRule","insertRule","removeRule"].forEach(function(e){u[e]=function(){var t=this;A(t);var o=arguments;h.get(t).push({method:e,args:o}),d.get(t).forEach(function(i){if(i.isConnected()){var n=C(t,i).sheet;n[e].apply(n,o)}});var i=l.get(t).sheet;return i[e].apply(i,o)}}),n(T,Symbol.hasInstance,{configurable:!0,value:x});var p={childList:!0,subtree:!0},m=new WeakMap,f=new WeakMap,b=new WeakMap,g=new WeakMap;if(z.prototype={isConnected:function(){var e,t=f.get(this);return t instanceof Document?"loading"!==t.readyState:"isConnected"in(e=t.host)?e.isConnected:document.contains(e)},connect:function(){var e=M(this);g.get(this).observe(e,p),b.get(this).length>0&&R(this),D(e,function(e){_(e).connect()})},disconnect:function(){g.get(this).disconnect()},update:function(e){var t=this,o=f.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Iterator getter is not callable.");if(!e.every(x))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Failed to convert value to 'CSSStyleSheet'");if(e.some(S))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Can't adopt non-constructed stylesheets");t.sheets=e;var i=b.get(t),n=e.filter(function(t,o){return e.indexOf(t)===o});i.filter(function(e){return -1===n.indexOf(e)}).forEach(function(e){(function(e){e.parentNode.removeChild(e)})(C(e,t)),c.get(e).delete(t),d.set(e,d.get(e).filter(function(e){return e!==t}))}),b.set(t,n),t.isConnected()&&n.length>0&&R(t)}},window.CSSStyleSheet=T,L(Document),"ShadowRoot"in window){L(ShadowRoot);var v=Element.prototype,w=v.attachShadow;v.attachShadow=function(e){var t=w.call(this,e);return"closed"===e.mode&&o.set(this,t),t}}var y=_(document);y.isConnected()?y.connect():document.addEventListener("DOMContentLoaded",y.connect.bind(y))}function E(e){return e.shadowRoot||o.get(e)}function x(e){return"object"==typeof e&&(u.isPrototypeOf(e)||s.isPrototypeOf(e))}function S(e){return"object"==typeof e&&s.isPrototypeOf(e)}function C(e,t){return c.get(e).get(t)}function k(e,t){requestAnimationFrame(function(){t.textContent=l.get(e).textContent,h.get(e).forEach(function(e){return t.sheet[e.method].apply(t.sheet,e.args)})})}function A(e){if(!l.has(e))throw TypeError("Illegal invocation")}function T(){var e=document.createElement("style");t.body.appendChild(e),l.set(this,e),d.set(this,[]),c.set(this,new WeakMap),h.set(this,[])}function _(e){var t=m.get(e);return t||(t=new z(e),m.set(e,t)),t}function L(e){n(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return _(this).sheets},set:function(e){_(this).update(e)}})}function D(e,t){for(var o=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,function(e){return E(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),i=void 0;i=o.nextNode();)t(E(i))}function M(e){var t=f.get(e);return t instanceof Document?t.body:t}function R(e){var t=document.createDocumentFragment(),o=b.get(e),i=g.get(e),n=M(e);i.disconnect(),o.forEach(function(o){var i;t.appendChild(C(o,e)||(i=document.createElement("style"),c.get(o).set(e,i),d.get(o).push(e),i))}),n.insertBefore(t,null),i.observe(n,p),o.forEach(function(t){k(t,C(t,e))})}function z(t){var o=this;o.sheets=[],f.set(o,t),b.set(o,[]),g.set(o,new MutationObserver(function(t,i){if(!document){i.disconnect();return}t.forEach(function(t){e||r.call(t.addedNodes,function(e){e instanceof Element&&D(e,function(e){_(e).connect()})}),r.call(t.removedNodes,function(t){t instanceof Element&&(t instanceof HTMLStyleElement&&b.get(o).some(function(e){return C(e,o)})&&R(o),e||D(t,function(e){_(e).disconnect()}))})})}))}}();var G={};G=r("aNJCr").getBundleURL("itQ15")+"bootstrap.1b02f2c5.css";let J=[G,r("aNJCr").getBundleURL("itQ15")+"main.86f0dde0.css"],Z=[];for(let e=0;e<J.length;e+=1)Z.push(new CSSStyleSheet);function Q(e){return new Promise(function(t,o){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return o(e.error)}})}function K(){if(!eQ){var e,t,o,i;e="keyval-store",t="keyval",(o=indexedDB.open(e)).onupgradeneeded=function(){return o.result.createObjectStore(t)},i=Q(o),eQ=function(e,o){return i.then(function(i){return o(i.transaction(t,e).objectStore(t))})}}return eQ}!async function(){let e=await Promise.all(J.map(async e=>(await fetch(e)).text()));for(let t=0;t<e.length;t+=1)await Z[t].replace(e[t]);document.body.style.visibility="visible"}();let ee="rss-reader/feeds",et=async e=>{try{return{value:await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K();return t("readonly",function(t){return Q(t.get(e))})}(e),error:void 0}}catch(e){return{value:void 0,error:e}}},eo=async(e,t)=>{try{return await function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K();return o("readwrite",function(o){return o.put(t,e),Q(o.transaction)})}(e,t),{error:void 0}}catch(e){return{error:e}}},ei=async()=>et(ee),en=async(e,t=!0)=>{if(!Array.isArray(e))return;let{error:o}=await eo(ee,e);return!o&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"set",feeds:e}})),{error:o}},er=async(e,t=!0)=>{let{value:o=[]}=await ei(),i=o.find(t=>t.url===e.url),n="";i?(i.url=e.url,i.title=e.title,n="update"):(o.push(e),n="create");let{error:r}=await eo(ee,o);return!r&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:n,feed:e}})),{error:r}},ea=async(e,t=!0)=>{let{value:o=[]}=await ei(),i=o.filter(t=>t.url!==e),{error:n}=await eo(ee,i);return!n&&t&&(0===i.length&&await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K();return t("readwrite",function(t){return t.delete(e),Q(t.transaction)})}(ee),document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"delete",feed:{url:e}}}))),{error:n}},es=e=>{try{return new URL(e),!0}catch{return!1}},el=`
  :host {
    --input-height: 42px;
    display: block;
  }
`,ed=document.createElement("template");ed.innerHTML=`
  <style>${el}</style>

  <form name="addFeedForm" autocomplete="off" class="d-flex">
    <div class="form-group" style="flex: 1;">
      <input type="url" name="feed-url" class="form-control" style="height: var(--input-height);" placeholder="Enter a feed URL in XML format" autocapitalize="off" autocorrect="off" required>
    </div>
    <div class="ms-2">
      <input type="submit" value="Add feed" class="btn btn-primary" style="height: var(--input-height);">
    </div>
  </form>
`;class ec extends HTMLElement{#A;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ed.content.cloneNode(!0))),this.shadowRoot.adoptedStyleSheets=Z,this.#A=this.shadowRoot.querySelector('form[name="addFeedForm"]')}connectedCallback(){this.#A.addEventListener("submit",this.#T)}disconnectedCallback(){this.#A.addEventListener("submit",this.#T)}async #T(e){e.preventDefault();let t=e.target["feed-url"],o=t.value.trim(),{value:i=[]}=await ei(),n=!!i.find(e=>e.url===o),r=es(o);!n&&r&&await er({url:o,title:""}),t.value=""}}/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function eh(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function eu(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?eh(Object(o),!0).forEach(function(t){var i;i=o[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):eh(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function ep(e){return(ep="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function em(){return(em=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}function ef(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}window.customElements.get("add-feed")||window.customElements.define("add-feed",ec);var eb=ef(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),eg=ef(/Edge/i),ev=ef(/firefox/i),ew=ef(/safari/i)&&!ef(/chrome/i)&&!ef(/android/i),ey=ef(/iP(ad|od|hone)/i),eE=ef(/chrome/i)&&ef(/android/i),ex={capture:!1,passive:!1};function eS(e,t,o){e.addEventListener(t,o,!eb&&ex)}function eC(e,t,o){e.removeEventListener(t,o,!eb&&ex)}function ek(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){}return!1}}function eA(e,t,o,i){if(e){var n;o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&ek(e,t):ek(e,t))||i&&e===o)return e;if(e===o)break}while(e=(n=e).host&&n!==document&&n.host.nodeType?n.host:n.parentNode)}return null}var eT=/\s+/g;function e_(e,t,o){if(e&&t){if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(eT," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(eT," ")}}}function eL(e,t,o){var i=e&&e.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}}function eD(e,t){var o="";if("string"==typeof e)o=e;else do{var i=eL(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode))var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function eM(e,t,o){if(e){var i=e.getElementsByTagName(t),n=0,r=i.length;if(o)for(;n<r;n++)o(i[n],n);return i}return[]}function eR(){return document.scrollingElement||document.documentElement}function ez(e,t,o,i,n){if(e.getBoundingClientRect||e===window){if(e!==window&&e.parentNode&&e!==eR()?(a=(r=e.getBoundingClientRect()).top,s=r.left,l=r.bottom,d=r.right,c=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(t||o)&&e!==window&&(n=n||e.parentNode,!eb))do if(n&&n.getBoundingClientRect&&("none"!==eL(n,"transform")||o&&"static"!==eL(n,"position"))){var r,a,s,l,d,c,h,u=n.getBoundingClientRect();a-=u.top+parseInt(eL(n,"border-top-width")),s-=u.left+parseInt(eL(n,"border-left-width")),l=a+r.height,d=s+r.width;break}while(n=n.parentNode)if(i&&e!==window){var p=eD(n||e),m=p&&p.a,f=p&&p.d;p&&(a/=f,s/=m,h/=m,c/=f,l=a+c,d=s+h)}return{top:a,left:s,bottom:l,right:d,width:h,height:c}}}function eO(e,t,o){for(var i=eP(e,!0),n=ez(e)[t];i;){var r=ez(i)[o];if(!("top"===o||"left"===o?n>=r:n<=r))return i;if(i===eR())break;i=eP(i,!1)}return!1}function eN(e,t,o,i){for(var n=0,r=0,a=e.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==tN.ghost&&(i||a[r]!==tN.dragged)&&eA(a[r],o.draggable,e,!1)){if(n===t)return a[r];n++}r++}return null}function eI(e,t){for(var o=e.lastElementChild;o&&(o===tN.ghost||"none"===eL(o,"display")||t&&!ek(o,t));)o=o.previousElementSibling;return o||null}function eF(e,t){var o=0;if(!e||!e.parentNode)return -1;for(;e=e.previousElementSibling;)"TEMPLATE"!==e.nodeName.toUpperCase()&&e!==tN.clone&&(!t||ek(e,t))&&o++;return o}function eB(e){var t=0,o=0,i=eR();if(e)do{var n=eD(e),r=n.a,a=n.d;t+=e.scrollLeft*r,o+=e.scrollTop*a}while(e!==i&&(e=e.parentNode))return[t,o]}function eP(e,t){if(!e||!e.getBoundingClientRect)return eR();var o=e,i=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=eL(o);if(o.clientWidth<o.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!o.getBoundingClientRect||o===document.body)return eR();if(i||t)return o;i=!0}}while(o=o.parentNode)return eR()}function ej(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function eH(e,t){return function(){if(!eK){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),eK=setTimeout(function(){eK=void 0},t)}}}function eq(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function e$(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function eU(e,t,o){var i={};return Array.from(e.children).forEach(function(n){if(eA(n,t.draggable,e,!1)&&!n.animated&&n!==o){var r,a,s,l,d=ez(n);i.left=Math.min(null!==(r=i.left)&&void 0!==r?r:1/0,d.left),i.top=Math.min(null!==(a=i.top)&&void 0!==a?a:1/0,d.top),i.right=Math.max(null!==(s=i.right)&&void 0!==s?s:-1/0,d.right),i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,d.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var eY="Sortable"+new Date().getTime(),eX=[],eW={initializeByDefault:!0},eV={mount:function(e){for(var t in eW)!eW.hasOwnProperty(t)||t in e||(e[t]=eW[t]);eX.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),eX.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var n=e+"Global";eX.forEach(function(i){t[i.pluginName]&&(t[i.pluginName][n]&&t[i.pluginName][n](eu({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](eu({sortable:t},o)))})},initializePlugins:function(e,t,o,i){for(var n in eX.forEach(function(i){var n=i.pluginName;if(e.options[n]||i.initializeByDefault){var r=new i(e,t,e.options);r.sortable=e,r.options=e.options,e[n]=r,em(o,r.defaults)}}),e.options)if(e.options.hasOwnProperty(n)){var r=this.modifyOption(e,n,e.options[n]);void 0!==r&&(e.options[n]=r)}},getEventProperties:function(e,t){var o={};return eX.forEach(function(i){"function"==typeof i.eventProperties&&em(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return eX.forEach(function(n){e[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[t]&&(i=n.optionListeners[t].call(e[n.pluginName],o))}),i}},eG=["evt"],eJ=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,n=function(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(o,eG);eV.pluginEvent.bind(tN)(e,t,eu({dragEl:e0,parentEl:e1,ghostEl:e5,rootEl:e2,nextEl:e3,lastDownEl:e8,cloneEl:e4,cloneHidden:e6,dragStarted:tc,putSortable:ti,activeSortable:tN.active,originalEvent:i,oldIndex:e7,oldDraggableIndex:te,newIndex:e9,newDraggableIndex:tt,hideGhostForTarget:tM,unhideGhostForTarget:tR,cloneNowHidden:function(){e6=!0},cloneNowShown:function(){e6=!1},dispatchSortableEvent:function(e){eZ({sortable:t,name:e,originalEvent:i})}},n))};function eZ(e){!function(e){var t=e.sortable,o=e.rootEl,i=e.name,n=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,d=e.newIndex,c=e.oldDraggableIndex,h=e.newDraggableIndex,u=e.originalEvent,p=e.putSortable,m=e.extraEventProperties;if(t=t||o&&o[eY]){var f,b=t.options,g="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||eb||eg?(f=document.createEvent("Event")).initEvent(i,!0,!0):f=new CustomEvent(i,{bubbles:!0,cancelable:!0}),f.to=a||o,f.from=s||o,f.item=n||o,f.clone=r,f.oldIndex=l,f.newIndex=d,f.oldDraggableIndex=c,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var v=eu(eu({},m),eV.getEventProperties(i,t));for(var w in v)f[w]=v[w];o&&o.dispatchEvent(f),b[g]&&b[g].call(t,f)}}(eu({putSortable:ti,cloneEl:e4,targetEl:e0,rootEl:e2,oldIndex:e7,oldDraggableIndex:te,newIndex:e9,newDraggableIndex:tt},e))}var eQ,eK,e0,e1,e5,e2,e3,e8,e4,e6,e7,e9,te,tt,to,ti,tn,tr,ta,ts,tl,td,tc,th,tu,tp,tm,tf=!1,tb=!1,tg=[],tv=!1,tw=!1,ty=[],tE=!1,tx=[],tS="undefined"!=typeof document,tC=eg||eb?"cssFloat":"float",tk=tS&&!eE&&!ey&&"draggable"in document.createElement("div"),tA=function(){if(tS){if(eb)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),tT=function(e,t){var o=eL(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),n=eN(e,0,t),r=eN(e,1,t),a=n&&eL(n),s=r&&eL(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+ez(n).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+ez(r).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var c="left"===a.float?"left":"right";return r&&("both"===s.clear||s.clear===c)?"vertical":"horizontal"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===o[tC]||r&&"none"===o[tC]&&l+d>i)?"vertical":"horizontal"},t_=function(e,t,o){var i=o?e.left:e.top,n=o?e.right:e.bottom,r=o?e.width:e.height,a=o?t.left:t.top,s=o?t.right:t.bottom,l=o?t.width:t.height;return i===a||n===s||i+r/2===a+l/2},tL=function(e,t){var o;return tg.some(function(i){var n=i[eY].options.emptyInsertThreshold;if(!(!n||eI(i))){var r=ez(i),a=e>=r.left-n&&e<=r.right+n,s=t>=r.top-n&&t<=r.bottom+n;if(a&&s)return o=i}}),o},tD=function(e){function t(e,o){return function(i,n,r,a){var s=i.options.group.name&&n.options.group.name&&i.options.group.name===n.options.group.name;if(null==e&&(o||s))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,n,r,a),o)(i,n,r,a);var l=(o?i:n).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var o={},i=e.group;i&&"object"==ep(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},tM=function(){!tA&&e5&&eL(e5,"display","none")},tR=function(){!tA&&e5&&eL(e5,"display","")};tS&&!eE&&document.addEventListener("click",function(e){if(tb)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),tb=!1,!1},!0);var tz=function(e){if(e0){var t=tL((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[eY]._onDragOver(o)}}},tO=function(e){e0&&e0.parentNode[eY]._isOutsideThisEl(e.target)};function tN(e,t){if(!(e&&e.nodeType&&1===e.nodeType))throw"Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(e));this.el=e,this.options=t=em({},t),e[eY]=this;var o,i,n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return tT(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==tN.supportPointer&&"PointerEvent"in window&&!ew,emptyInsertThreshold:5};for(var r in eV.initializePlugins(this,e,n),n)r in t||(t[r]=n[r]);for(var a in tD(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&tk,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?eS(e,"pointerdown",this._onTapStart):(eS(e,"mousedown",this._onTapStart),eS(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(eS(e,"dragover",this),eS(e,"dragenter",this)),tg.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),em(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==eL(e,"display")&&e!==tN.ghost){i.push({target:e,rect:ez(e)});var t=eu({},i[i.length-1].rect);if(e.thisAnimationDuration){var o=eD(e,!0);o&&(t.top-=o.f,t.left-=o.e)}e.fromRect=t}})},addAnimationState:function(e){i.push(e)},removeAnimationState:function(e){i.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o)}return -1}(i,{target:e}),1)},animateAll:function(e){var t=this;if(!this.options.animation){clearTimeout(o),"function"==typeof e&&e();return}var n=!1,r=0;i.forEach(function(e){var o,i=0,a=e.target,s=a.fromRect,l=ez(a),d=a.prevFromRect,c=a.prevToRect,h=e.rect,u=eD(a,!0);u&&(l.top-=u.f,l.left-=u.e),a.toRect=l,a.thisAnimationDuration&&ej(d,l)&&!ej(s,l)&&(h.top-l.top)/(h.left-l.left)==(s.top-l.top)/(s.left-l.left)&&(o=t.options,i=Math.sqrt(Math.pow(d.top-h.top,2)+Math.pow(d.left-h.left,2))/Math.sqrt(Math.pow(d.top-c.top,2)+Math.pow(d.left-c.left,2))*o.animation),ej(l,s)||(a.prevFromRect=s,a.prevToRect=l,i||(i=t.options.animation),t.animate(a,h,l,i)),i&&(n=!0,r=Math.max(r,i),clearTimeout(a.animationResetTimer),a.animationResetTimer=setTimeout(function(){a.animationTime=0,a.prevFromRect=null,a.fromRect=null,a.prevToRect=null,a.thisAnimationDuration=null},i),a.thisAnimationDuration=i)}),clearTimeout(o),n?o=setTimeout(function(){"function"==typeof e&&e()},r):"function"==typeof e&&e(),i=[]},animate:function(e,t,o,i){if(i){eL(e,"transition",""),eL(e,"transform","");var n=eD(this.el),r=n&&n.a,a=n&&n.d,s=(t.left-o.left)/(r||1),l=(t.top-o.top)/(a||1);e.animatingX=!!s,e.animatingY=!!l,eL(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=e.offsetWidth,eL(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),eL(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){eL(e,"transition",""),eL(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},i)}}}))}function tI(e,t,o,i,n,r,a,s){var l,d,c=e[eY],h=c.options.onMove;return!window.CustomEvent||eb||eg?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=n||t,l.relatedRect=r||ez(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),h&&(d=h.call(c,l,a)),d}function tF(e){e.draggable=!1}function tB(){tE=!1}function tP(e){return setTimeout(e,0)}function tj(e){return clearTimeout(e)}tN.prototype={constructor:tN,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(th=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,e0):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,n=i.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(a||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=i.filter;if(function(e){tx.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var i=t[o];i.checked&&tx.push(i)}}(o),!(e0||/mousedown|pointerdown/.test(r)&&0!==e.button||i.disabled||l.isContentEditable||!this.nativeDraggable&&ew&&s&&"SELECT"===s.tagName.toUpperCase()||(s=eA(s,i.draggable,o,!1))&&s.animated)&&e8!==s){if(e7=eF(s),te=eF(s,i.draggable),"function"==typeof d){if(d.call(this,e,s,this)){eZ({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),eJ("filter",t,{evt:e}),n&&e.cancelable&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(i){if(i=eA(l,i.trim(),o,!1))return eZ({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),eJ("filter",t,{evt:e}),!0}))){n&&e.cancelable&&e.preventDefault();return}(!i.handle||eA(l,i.handle,o,!1))&&this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,t,o){var i,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(o&&!e0&&o.parentNode===r){var l=ez(o);if(e2=r,e1=(e0=o).parentNode,e3=e0.nextSibling,e8=o,to=a.group,tN.dragged=e0,tl=(tn={target:e0,clientX:(t||e).clientX,clientY:(t||e).clientY}).clientX-l.left,td=tn.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,e0.style["will-change"]="all",i=function(){if(eJ("delayEnded",n,{evt:e}),tN.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!ev&&n.nativeDraggable&&(e0.draggable=!0),n._triggerDragStart(e,t),eZ({sortable:n,name:"choose",originalEvent:e}),e_(e0,a.chosenClass,!0)},a.ignore.split(",").forEach(function(e){eM(e0,e.trim(),tF)}),eS(s,"dragover",tz),eS(s,"mousemove",tz),eS(s,"touchmove",tz),eS(s,"mouseup",n._onDrop),eS(s,"touchend",n._onDrop),eS(s,"touchcancel",n._onDrop),ev&&this.nativeDraggable&&(this.options.touchStartThreshold=4,e0.draggable=!0),eJ("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(eg||eb))i();else{if(tN.eventCanceled){this._onDrop();return}eS(s,"mouseup",n._disableDelayedDrag),eS(s,"touchend",n._disableDelayedDrag),eS(s,"touchcancel",n._disableDelayedDrag),eS(s,"mousemove",n._delayedDragTouchMoveHandler),eS(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&eS(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(i,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){e0&&tF(e0),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;eC(e,"mouseup",this._disableDelayedDrag),eC(e,"touchend",this._disableDelayedDrag),eC(e,"touchcancel",this._disableDelayedDrag),eC(e,"mousemove",this._delayedDragTouchMoveHandler),eC(e,"touchmove",this._delayedDragTouchMoveHandler),eC(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?eS(document,"pointermove",this._onTouchMove):t?eS(document,"touchmove",this._onTouchMove):eS(document,"mousemove",this._onTouchMove):(eS(e0,"dragend",this),eS(e2,"dragstart",this._onDragStart));try{document.selection?tP(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(tf=!1,e2&&e0){eJ("dragStarted",this,{evt:t}),this.nativeDraggable&&eS(document,"dragover",tO);var o=this.options;e||e_(e0,o.dragClass,!1),e_(e0,o.ghostClass,!0),tN.active=this,e&&this._appendGhost(),eZ({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(tr){this._lastX=tr.clientX,this._lastY=tr.clientY,tM();for(var e=document.elementFromPoint(tr.clientX,tr.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(tr.clientX,tr.clientY))!==t;)t=e;if(e0.parentNode[eY]._isOutsideThisEl(e),t)do{if(t[eY]&&t[eY]._onDragOver({clientX:tr.clientX,clientY:tr.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break;e=t}while(t=t.parentNode)tR()}},_onTouchMove:function(e){if(tn){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,n=e.touches?e.touches[0]:e,r=e5&&eD(e5,!0),a=e5&&r&&r.a,s=e5&&r&&r.d,l=ey&&tm&&eB(tm),d=(n.clientX-tn.clientX+i.x)/(a||1)+(l?l[0]-ty[0]:0)/(a||1),c=(n.clientY-tn.clientY+i.y)/(s||1)+(l?l[1]-ty[1]:0)/(s||1);if(!tN.active&&!tf){if(o&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(e5){r?(r.e+=d-(ta||0),r.f+=c-(ts||0)):r={a:1,b:0,c:0,d:1,e:d,f:c};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");eL(e5,"webkitTransform",h),eL(e5,"mozTransform",h),eL(e5,"msTransform",h),eL(e5,"transform",h),ta=d,ts=c,tr=n}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!e5){var e=this.options.fallbackOnBody?document.body:e2,t=ez(e0,!0,ey,!0,e),o=this.options;if(ey){for(tm=e;"static"===eL(tm,"position")&&"none"===eL(tm,"transform")&&tm!==document;)tm=tm.parentNode;tm!==document.body&&tm!==document.documentElement?(tm===document&&(tm=eR()),t.top+=tm.scrollTop,t.left+=tm.scrollLeft):tm=eR(),ty=eB(tm)}e_(e5=e0.cloneNode(!0),o.ghostClass,!1),e_(e5,o.fallbackClass,!0),e_(e5,o.dragClass,!0),eL(e5,"transition",""),eL(e5,"transform",""),eL(e5,"box-sizing","border-box"),eL(e5,"margin",0),eL(e5,"top",t.top),eL(e5,"left",t.left),eL(e5,"width",t.width),eL(e5,"height",t.height),eL(e5,"opacity","0.8"),eL(e5,"position",ey?"absolute":"fixed"),eL(e5,"zIndex","100000"),eL(e5,"pointerEvents","none"),tN.ghost=e5,e.appendChild(e5),eL(e5,"transform-origin",tl/parseInt(e5.style.width)*100+"% "+td/parseInt(e5.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,n=o.options;if(eJ("dragStart",this,{evt:e}),tN.eventCanceled){this._onDrop();return}eJ("setupClone",this),tN.eventCanceled||((e4=e$(e0)).removeAttribute("id"),e4.draggable=!1,e4.style["will-change"]="",this._hideClone(),e_(e4,this.options.chosenClass,!1),tN.clone=e4),o.cloneId=tP(function(){eJ("clone",o),tN.eventCanceled||(o.options.removeCloneOnHide||e2.insertBefore(e4,e0),o._hideClone(),eZ({sortable:o,name:"clone"}))}),t||e_(e0,n.dragClass,!0),t?(tb=!0,o._loopId=setInterval(o._emulateDragOver,50)):(eC(document,"mouseup",o._onDrop),eC(document,"touchend",o._onDrop),eC(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(o,i,e0)),eS(document,"drop",o),eL(e0,"transform","translateZ(0)")),tf=!0,o._dragStartId=tP(o._dragStarted.bind(o,t,e)),eS(document,"selectstart",o),tc=!0,ew&&eL(document.body,"user-select","none")},_onDragOver:function(e){var t,o,i,n,r=this.el,a=e.target,s=this.options,l=s.group,d=tN.active,c=to===l,h=s.sort,u=ti||d,p=this,m=!1;if(!tE){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),a=eA(a,s.draggable,r,!0),N("dragOver"),tN.eventCanceled)return m;if(e0.contains(e.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return F(!1);if(tb=!1,d&&!s.disabled&&(c?h||(i=e1!==e2):ti===this||(this.lastPutMode=to.checkPull(this,d,e0,e))&&l.checkPut(this,d,e0,e))){if(n="vertical"===this._getDirection(e,a),t=ez(e0),N("dragOverValid"),tN.eventCanceled)return m;if(i)return e1=e2,I(),this._hideClone(),N("revert"),tN.eventCanceled||(e3?e2.insertBefore(e0,e3):e2.appendChild(e0)),F(!0);var f=eI(r,s.draggable);if(!f||(g=n,v=ez(eI(this.el,this.options.draggable)),w=eU(this.el,this.options,e5),(g?e.clientX>w.right+10||e.clientY>v.bottom&&e.clientX>v.left:e.clientY>w.bottom+10||e.clientX>v.right&&e.clientY>v.top)&&!f.animated)){if(f===e0)return F(!1);if(f&&r===e.target&&(a=f),a&&(o=ez(a)),!1!==tI(e2,r,e0,t,a,o,e,!!a))return I(),f&&f.nextSibling?r.insertBefore(e0,f.nextSibling):r.appendChild(e0),e1=r,B(),F(!0)}else if(f&&(y=n,E=ez(eN(this.el,0,this.options,!0)),x=eU(this.el,this.options,e5),y?e.clientX<x.left-10||e.clientY<E.top&&e.clientX<E.right:e.clientY<x.top-10||e.clientY<E.bottom&&e.clientX<E.left)){var b=eN(r,0,s,!0);if(b===e0)return F(!1);if(o=ez(a=b),!1!==tI(e2,r,e0,t,a,o,e,!1))return I(),r.insertBefore(e0,b),e1=r,B(),F(!0)}else if(a.parentNode===r){o=ez(a);var g,v,w,y,E,x,S,C,k=0,A=e0.parentNode!==r,T=!t_(e0.animated&&e0.toRect||t,a.animated&&a.toRect||o,n),_=n?"top":"left",L=eO(a,"top","top")||eO(e0,"top","top"),D=L?L.scrollTop:void 0;if(th!==a&&(C=o[_],tv=!1,tw=!T&&s.invertSwap||A),0!==(k=function(e,t,o,i,n,r,a,s){var l=i?e.clientY:e.clientX,d=i?o.height:o.width,c=i?o.top:o.left,h=i?o.bottom:o.right,u=!1;if(!a){if(s&&tp<d*n){if(!tv&&(1===tu?l>c+d*r/2:l<h-d*r/2)&&(tv=!0),tv)u=!0;else if(1===tu?l<c+tp:l>h-tp)return-tu}else if(l>c+d*(1-n)/2&&l<h-d*(1-n)/2)return eF(e0)<eF(t)?1:-1}return(u=u||a)&&(l<c+d*r/2||l>h-d*r/2)?l>c+d/2?1:-1:0}(e,a,o,n,T?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,tw,th===a))){var M=eF(e0);do M-=k,S=e1.children[M];while(S&&("none"===eL(S,"display")||S===e5))}if(0===k||S===a)return F(!1);th=a,tu=k;var R=a.nextElementSibling,z=!1,O=tI(e2,r,e0,t,a,o,e,z=1===k);if(!1!==O)return(1===O||-1===O)&&(z=1===O),tE=!0,setTimeout(tB,30),I(),z&&!R?r.appendChild(e0):a.parentNode.insertBefore(e0,z?R:a),L&&eq(L,0,D-L.scrollTop),e1=e0.parentNode,void 0===C||tw||(tp=Math.abs(C-ez(a)[_])),B(),F(!0)}if(r.contains(e0))return F(!1)}return!1}function N(s,l){eJ(s,p,eu({evt:e,isOwner:c,axis:n?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:h,fromSortable:u,target:a,completed:F,onMove:function(o,i){return tI(e2,r,e0,t,o,ez(o),e,i)},changed:B},l))}function I(){N("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function F(t){return N("dragOverCompleted",{insertion:t}),t&&(c?d._hideClone():d._showClone(p),p!==u&&(e_(e0,ti?ti.options.ghostClass:d.options.ghostClass,!1),e_(e0,s.ghostClass,!0)),ti!==p&&p!==tN.active?ti=p:p===tN.active&&ti&&(ti=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){N("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a!==e0||e0.animated)&&(a!==r||a.animated)||(th=null),s.dragoverBubble||e.rootEl||a===document||(e0.parentNode[eY]._isOutsideThisEl(e.target),t||tz(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function B(){e9=eF(e0),tt=eF(e0,s.draggable),eZ({sortable:p,name:"change",toEl:r,newIndex:e9,newDraggableIndex:tt,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){eC(document,"mousemove",this._onTouchMove),eC(document,"touchmove",this._onTouchMove),eC(document,"pointermove",this._onTouchMove),eC(document,"dragover",tz),eC(document,"mousemove",tz),eC(document,"touchmove",tz)},_offUpEvents:function(){var e=this.el.ownerDocument;eC(e,"mouseup",this._onDrop),eC(e,"touchend",this._onDrop),eC(e,"pointerup",this._onDrop),eC(e,"touchcancel",this._onDrop),eC(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;if(e9=eF(e0),tt=eF(e0,o.draggable),eJ("drop",this,{evt:e}),e1=e0&&e0.parentNode,e9=eF(e0),tt=eF(e0,o.draggable),tN.eventCanceled){this._nulling();return}tf=!1,tw=!1,tv=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),tj(this.cloneId),tj(this._dragStartId),this.nativeDraggable&&(eC(document,"drop",this),eC(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ew&&eL(document.body,"user-select",""),eL(e0,"transform",""),e&&(tc&&(e.cancelable&&e.preventDefault(),o.dropBubble||e.stopPropagation()),e5&&e5.parentNode&&e5.parentNode.removeChild(e5),(e2===e1||ti&&"clone"!==ti.lastPutMode)&&e4&&e4.parentNode&&e4.parentNode.removeChild(e4),e0&&(this.nativeDraggable&&eC(e0,"dragend",this),tF(e0),e0.style["will-change"]="",tc&&!tf&&e_(e0,ti?ti.options.ghostClass:this.options.ghostClass,!1),e_(e0,this.options.chosenClass,!1),eZ({sortable:this,name:"unchoose",toEl:e1,newIndex:null,newDraggableIndex:null,originalEvent:e}),e2!==e1?(e9>=0&&(eZ({rootEl:e1,name:"add",toEl:e1,fromEl:e2,originalEvent:e}),eZ({sortable:this,name:"remove",toEl:e1,originalEvent:e}),eZ({rootEl:e1,name:"sort",toEl:e1,fromEl:e2,originalEvent:e}),eZ({sortable:this,name:"sort",toEl:e1,originalEvent:e})),ti&&ti.save()):e9!==e7&&e9>=0&&(eZ({sortable:this,name:"update",toEl:e1,originalEvent:e}),eZ({sortable:this,name:"sort",toEl:e1,originalEvent:e})),tN.active&&((null==e9||-1===e9)&&(e9=e7,tt=te),eZ({sortable:this,name:"end",toEl:e1,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){eJ("nulling",this),e2=e0=e1=e5=e3=e4=e8=e6=tn=tr=tc=e9=tt=e7=te=th=tu=ti=to=tN.dragged=tN.ghost=tN.clone=tN.active=null,tx.forEach(function(e){e.checked=!0}),tx.length=ta=ts=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":e0&&(this._onDragOver(e),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault());break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,n=o.length,r=this.options;i<n;i++)eA(e=o[i],r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||function(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(e,t){var n=i.children[t];eA(n,this.options.draggable,i,!1)&&(o[e]=n)},this),t&&this.captureAnimationState(),e.forEach(function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return eA(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=eV.modifyOption(this,e,t);void 0!==i?o[e]=i:o[e]=t,"group"===e&&tD(o)},destroy:function(){eJ("destroy",this);var e=this.el;e[eY]=null,eC(e,"mousedown",this._onTapStart),eC(e,"touchstart",this._onTapStart),eC(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(eC(e,"dragover",this),eC(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),tg.splice(tg.indexOf(this.el),1),this.el=null},_hideClone:function(){e6||(eJ("hideClone",this),tN.eventCanceled||(eL(e4,"display","none"),this.options.removeCloneOnHide&&e4.parentNode&&e4.parentNode.removeChild(e4),e6=!0))},_showClone:function(e){if("clone"!==e.lastPutMode){this._hideClone();return}if(e6){if(eJ("showClone",this),tN.eventCanceled)return;e0.parentNode!=e2||this.options.group.revertClone?e3?e2.insertBefore(e4,e3):e2.appendChild(e4):e2.insertBefore(e4,e0),this.options.group.revertClone&&this.animate(e0,e4),eL(e4,"display",""),e6=!1}}},tS&&eS(document,"touchmove",function(e){(tN.active||tf)&&e.cancelable&&e.preventDefault()}),tN.utils={on:eS,off:eC,css:eL,find:eM,is:function(e,t){return!!eA(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:eH,closest:eA,toggleClass:e_,clone:e$,index:eF,nextTick:tP,cancelNextTick:tj,detectDirection:tT,getChild:eN},tN.get=function(e){return e[eY]},tN.mount=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(e));e.utils&&(tN.utils=eu(eu({},tN.utils),e.utils)),eV.mount(e)})},tN.create=function(e,t){return new tN(e,t)},tN.version="1.15.2";var tH,tq,t$,tU=[];eH(function(e,t,o,i){if(t.scroll){var n,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,d=eR();tq!==o&&(tq=o,tU.forEach(function(e){clearInterval(e.pid)}),tU=[],tH=t.scroll,n=t.scrollFn,!0===tH&&(tH=eP(o,!0)));var c=0,h=tH;do{var u=h,p=ez(u),m=p.top,f=p.bottom,b=p.left,g=p.right,v=p.width,w=p.height,y=void 0,E=void 0,x=u.scrollWidth,S=u.scrollHeight,C=eL(u),k=u.scrollLeft,A=u.scrollTop;u===d?(y=v<x&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(y=v<x&&("auto"===C.overflowX||"scroll"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY));var T=y&&(Math.abs(g-r)<=s&&k+v<x)-(Math.abs(b-r)<=s&&!!k),_=E&&(Math.abs(f-a)<=s&&A+w<S)-(Math.abs(m-a)<=s&&!!A);if(!tU[c])for(var L=0;L<=c;L++)tU[L]||(tU[L]={});(tU[c].vx!=T||tU[c].vy!=_||tU[c].el!==u)&&(tU[c].el=u,tU[c].vx=T,tU[c].vy=_,clearInterval(tU[c].pid),(0!=T||0!=_)&&(tU[c].pid=setInterval((function(){i&&0===this.layer&&tN.active._onTouchMove(t$);var t=tU[this.layer].vy?tU[this.layer].vy*l:0,o=tU[this.layer].vx?tU[this.layer].vx*l:0;("function"!=typeof n||"continue"===n.call(tN.dragged.parentNode[eY],o,t,e,t$,tU[this.layer].el))&&eq(tU[this.layer].el,o,t)}).bind({layer:c}),24))),c++}while(t.bubbleScroll&&h!==d&&(h=eP(h,!1)))}},30);var tY=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,n=e.activeSortable,r=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=o||n;a();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),l&&!l.el.contains(c)&&(r("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function tX(){}function tW(){}tX.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=eN(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:tY},em(tX,{pluginName:"revertOnSpill"}),tW.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:tY},em(tW,{pluginName:"removeOnSpill"});let tV=(e,t=0,o=!1)=>{let i=null;if("function"!=typeof e)throw TypeError("Expected a function for first argument");return(...n)=>{clearTimeout(i),o&&!i&&e(...n),i=setTimeout(()=>{i=null,o||e(...n)},t)}},tG=`
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
`,tJ=document.createElement("template");tJ.innerHTML=`
  <style>${tG}</style>

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
`;class tZ extends HTMLElement{#_;#L;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tJ.content.cloneNode(!0))),this.#_=this.shadowRoot.querySelector("files-dropzone"),this.#L=this.shadowRoot.querySelector('form[name="import-form"]'),this.shadowRoot.adoptedStyleSheets=Z}connectedCallback(){this.#_.addEventListener("files-dropzone-drop-accepted",this.#D),this.#L.addEventListener("submit",this.#M)}disconnectedCallback(){this.#_.removeEventListener("files-dropzone-drop-accepted",this.#D),this.#L.removeEventListener("submit",this.#M)}#D=e=>{let{acceptedFiles:t=[]}=e.detail,o=t[0];if(!o)return;let i=new FileReader;i.readAsText(o,"utf-8"),i.onload=this.#R};async #z(e){if(!Array.isArray(e)||0===e.length)return alert("Invalid file or no feeds found.");let{value:t=[]}=await ei();for(let o of e){let e=!!t.find(e=>e.url===o.url),{url:i,title:n}=o,r=es(i);!e&&r&&await er({url:i,title:n})}this.dispatchEvent(new Event("feeds-imported",{bubbles:!0,composed:!0}))}#R=async e=>{try{let{result:t}=e.target;this.#z(JSON.parse(t))}catch(e){alert("The file is not valid.")}};#M=async e=>{e.preventDefault();let t=new FormData(e.target).get("import-data");try{this.#z(JSON.parse(t))}catch(e){alert("The data is not valid.")}}}window.customElements.get("import-feeds")||window.customElements.define("import-feeds",tZ);let tQ=`
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
    box-shadow: rgba(13,110,253,.25) 0px 0px 0px 0.25rem;
  }

  clipboard-copy span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`,tK=document.createElement("template");tK.innerHTML=`
  <style>${tQ}</style>

  <div class="d-flex justify-content-end">
    <clipboard-copy feedback-duration="1500">
      <span slot="copy">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copy
      </span>
      <span slot="success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copied
      </span>
    </clipboard-copy>

    <web-share class="${("object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator)?"":"d-none"}">
      <button slot="button" class="btn btn-sm btn-default d-flex align-items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><title>Share Social</title><circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"/></svg>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>
    Download
  </button>
`;class t0 extends HTMLElement{#O;#N;#I;#F;#B;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tK.content.cloneNode(!0))),this.#N=this.shadowRoot.getElementById("exportCode"),this.#I=this.shadowRoot.querySelector("clipboard-copy"),this.#F=this.shadowRoot.querySelector("web-share"),this.#B=this.shadowRoot.getElementById("downloadButton"),this.shadowRoot.adoptedStyleSheets=Z}static get observedAttributes(){return["feeds"]}attributeChangedCallback(e,t,o){if("feeds"===e&&t!==o&&this.feeds){let e=this.#P();this.#N.innerHTML=e,this.#I.value=e,this.#F.shareText=e}}connectedCallback(){this.#B.addEventListener("click",this.#j)}disconnectedCallback(){this.#B.removeEventListener("click",this.#j)}get feeds(){return this.getAttribute("feeds")}set feeds(e){this.setAttribute("feeds",e)}#P(){let e="";try{e=JSON.stringify(JSON.parse(this.feeds),null,2)}catch(e){console.error(e)}return e}#H(e){let t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(t),i=document.createElement("a");i.href=o,i.download="rss-feeds-export.json",i.click(),URL.revokeObjectURL(o)}#j=async()=>{let{value:e=[]}=await ei();this.#H(e)}}window.customElements.get("export-feeds")||window.customElements.define("export-feeds",t0);let t1=`
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
`,t5=document.createElement("template");t5.innerHTML=`
  <style>${t1}</style>

  <div id="feedsContainer" class="d-none">
    <div class="actions-container">
      <div class="input-group me-2 position-relative">
        <span class="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>

        <input type="text" id="searchInput" class="form-control rounded-end" placeholder="Search feeds..." autocapitalize="off" autocomplete="off" style="padding-right: 38px;" />

        <button type="button" class="btn btn-default btn-sm h-100 position-absolute top-0 end-0 d-flex align-items-center justify-content-center d-none" id="searchClearBtn" style="width: 38px; z-index: 5;">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
          <span class="visually-hidden">Clear</span>
        </button>
      </div>

      <div class="btn-group">
        <button type="button" id="editBtn" class="reorder-button btn btn-outline-primary btn-sm d-flex align-items-center gap-1" title="Edit feeds">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18">
            <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" fill="currentColor"/>
          </svg>
          <span class="d-none d-sm-block">Edit</span>
        </button>

        <button type="button" id="importBtn" class="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1" title="Import feeds">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" width="20" height="20" style="transform: rotate(180deg);">
            <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 272l80 80 80-80M256 48v288"/>
          </svg>
          <span class="d-none d-sm-block">Import</span>
        </button>

        <button type="button" id="exportBtn" class="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1" title="Export feeds">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" width="20" height="20">
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" width="18" height="18" style="transform: rotate(180deg);">
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
`;class t2 extends HTMLElement{#q;#$;#U;#Y;#X;#W;#V;#G;#J;#Z;#Q;#K;#ee;#et;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t5.content.cloneNode(!0))),this.#q=!1,this.shadowRoot.adoptedStyleSheets=Z,this.#$=this.shadowRoot.getElementById("feedsContainer"),this.#U=this.shadowRoot.getElementById("feedsList"),this.#Y=this.shadowRoot.getElementById("editBtn"),this.#X=this.shadowRoot.getElementById("importBtn"),this.#W=this.shadowRoot.getElementById("importAltBtn"),this.#V=this.shadowRoot.getElementById("exportBtn"),this.#G=this.shadowRoot.getElementById("searchInput"),this.#J=this.shadowRoot.getElementById("searchClearBtn"),this.#Z=this.shadowRoot.getElementById("importDialog"),this.#Q=this.shadowRoot.getElementById("exportDialog"),this.#K=this.shadowRoot.querySelector("import-feeds"),this.#ee=this.shadowRoot.querySelector("export-feeds"),this.#et=this.shadowRoot.getElementById("noFeedsDisclaimer")}async connectedCallback(){let{value:e=[]}=await ei();e.forEach(e=>this.#eo(e)),this.#ei(),this.#U.addEventListener("click",this.#en),this.#Y.addEventListener("click",this.#er),this.#W.addEventListener("click",this.#ea),this.#X.addEventListener("click",this.#ea),this.#V.addEventListener("click",this.#es),this.#G.addEventListener("input",this.#el),this.#J.addEventListener("click",this.#ed),this.#Z.addEventListener("me-open",this.#ec),this.#Q.addEventListener("me-open",this.#eh),this.#Q.addEventListener("me-close",this.#eu),this.addEventListener("feeds-imported",this.#ep),document.addEventListener("feeds-updated",this.#em),new tN(this.#U,{animation:150,handle:".sort-handler",onEnd:async e=>{let t=Array.prototype.map.call(e.to.querySelectorAll("li"),e=>({url:e.getAttribute("data-url"),title:e.getAttribute("data-title")||""}));await en(t,!1)}})}disconnectedCallback(){this.#U.removeEventListener("click",this.#en),this.#Y.removeEventListener("click",this.#er),this.#X.removeEventListener("click",this.#ea),this.#W.removeEventListener("click",this.#ea),this.#V.removeEventListener("click",this.#es),this.#G.removeEventListener("input",this.#el),this.#J.removeEventListener("click",this.#ed),this.#Z.removeEventListener("me-open",this.#ec),this.#Q.removeEventListener("me-open",this.#eh),this.#Q.removeEventListener("me-close",this.#eu),this.removeEventListener("feeds-imported",this.#ep),document.removeEventListener("feeds-updated",this.#em)}#ef=(e="")=>{let t=this.#U.querySelectorAll("[data-url]");0!==t.length&&t.forEach(t=>{let o=(t.getAttribute("data-url")||"").toLowerCase(),i=(t.getAttribute("data-title")||"").toLowerCase(),n=e.trim().toLowerCase();t.hidden=!(o.includes(n)||i.includes(n))})};#eb=tV(this.#ef,250);#el=e=>{let t=e.target.value;return this.#J.classList.toggle("d-none",!t),this.#eb(t)};#ed=()=>{this.#G.value="",this.#G.dispatchEvent(new Event("input"))};#er=e=>{this.#q=!this.#q,e.currentTarget.classList.toggle("active"),this.shadowRoot.querySelectorAll(".sort-handler, .delete-button").forEach(e=>{e.hidden=!e.hidden})};#ea=()=>{this.#Z.open=!0};#es=()=>{this.#Q.open=!0};#ec=()=>{try{this.#K.shadowRoot.querySelector("a-tab-group").selectTabByIndex(0),this.#K.shadowRoot.querySelector("textarea").value=""}catch{}};#eh=async()=>{let{value:e=[]}=await ei();this.#ee.setAttribute("feeds",JSON.stringify(e))};#eu=()=>{this.#ee.removeAttribute("feeds")};#ep=()=>{this.#Z.open=!1};#em=e=>{if("delete"===e.detail.action&&this.#eg(e.detail.feed),"create"===e.detail.action&&(this.#eo(e.detail.feed),this.#G.value&&(this.#G.value="",this.#ef(""))),"update"===e.detail.action){let{url:t,title:o}=e.detail.feed,i=this.#U.querySelector(`[data-url="${t}"]`);if(i){let e=i.querySelector(".link-content");i.setAttribute("data-title",o||""),e&&(e.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t)}}};#en=e=>{let t=e.target,o=t.closest("button.delete-button"),i=t.closest("a.link");if(!i&&!o)return;let n=t.closest("li").getAttribute("data-url");o&&window.confirm(`Are you sure you want to delete feed "${n}"?`)&&ea(n),i&&(e.preventDefault(),document.querySelector("feed-reader").feedUrl=n)};#eo(e){let{url:t,title:o}=e,i=document.createElement("a");i.className="link text-decoration-none d-flex align-items-center h-100",i.style.flex="1",i.style.minWidth=0,i.style.color="inherit",i.href=t;let n=document.createElement("div");n.className="text-truncate link-content",n.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t;let r=document.createElement("button");r.type="button",r.title="Delete feed",r.hidden=!this.#q,r.className="delete-button btn btn-default text-danger p-0",r.style.lineHeight="1",r.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
      <span class="visually-hidden">Delete</span>
    `;let a=document.createElement("li");a.className="list-group-item p-0 d-flex justify-content-between align-items-center",a.style.height="var(--list-item-height)",a.setAttribute("data-url",t||""),a.setAttribute("data-title",o||"");let s=document.createElement("div");s.hidden=!this.#q,s.className="sort-handler text-primary",s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/>
      </svg>
      <span class="visually-hidden">Reorder</span>
    `,i.appendChild(n),a.appendChild(s),a.appendChild(i),a.appendChild(r),this.#U.appendChild(a),this.#ei()}#eg(e){let t=this.#U.querySelector(`[data-url="${e.url}"]`);t&&t.remove(),this.#ei()}async #ei(){let{value:e=[]}=await ei();this.#$.classList.toggle("d-none",0===e.length),this.#et.classList.toggle("d-none",e.length>0)}}window.customElements.get("feeds-list")||window.customElements.define("feeds-list",t2);let t3=new Map,t8=async(e,t={})=>{let o=t3.get(e);if(o)return o;let i=await fetch("https://api.rss2json.com/v1/api.json?rss_url="+e,t);if(!i.ok)throw Error("Error fetching data");let n=await i.json();return t3.set(e,n),n},t4=`
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
`,t6=document.createElement("template");t6.innerHTML=`
  <style>${t4}</style>

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
`;class t7 extends HTMLElement{#ev;#ew;#ey;#eE;#ex;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t6.content.cloneNode(!0))),this.#ev=this.shadowRoot.getElementById("spinner"),this.#ew=this.shadowRoot.querySelector("modal-element"),this.#ey=this.#ew.querySelector("#feedTitle"),this.#eE=this.shadowRoot.getElementById("feedsViewer"),this.#ex=this.shadowRoot.getElementById("error"),this.shadowRoot.adoptedStyleSheets=Z}static get observedAttributes(){return["feed-url"]}attributeChangedCallback(e){"feed-url"===e&&(this.feedUrl?this.#eS(this.feedUrl):this.#eC())}connectedCallback(){this.#ew.addEventListener("me-close",this.#ek)}disconnectedCallback(){this.#ew.removeEventListener("me-close",this.#ek)}get feedUrl(){return this.getAttribute("feed-url")}set feedUrl(e){e?this.setAttribute("feed-url",e):this.removeAttribute("feed-url")}#eS(e){this.#ew.open=!0,this.#eA(e)}#eC(){this.#ew.open=!1}#ek=()=>{e&&e.abort(),this.#eT(),this.feedUrl=null};#eT(){this.#eE.querySelectorAll(".card").forEach(e=>e.remove()),this.#ey.innerHTML="",this.#ev.classList.add("d-none"),this.#ex.classList.add("d-none")}async #eA(t){this.#ev.classList.remove("d-none"),e=new AbortController;try{let o=await t8(t,{signal:e.signal}),{value:i=[]}=await ei(),n=i.find(e=>e.url===t);n&&!n.title&&await er({url:t,title:o.feed.title||""}),this.#ey.textContent=o.feed.title||t,o.items.forEach(e=>{this.#eE.insertAdjacentHTML("beforeend",this.#e_(e))})}catch(e){"AbortError"!==e.name&&(console.error(e),this.#ey.textContent="",this.#ex.classList.remove("d-none"))}finally{this.#ev.classList.add("d-none")}}#e_(e){let{link:t,title:o,description:i,author:n,pubDate:r,thumbnail:a}=e,s="";try{s=new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}).format(new Date(r))}catch{s="-"}return`
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
    `}}window.customElements.get("feed-reader")||window.customElements.define("feed-reader",t7),document.adoptedStyleSheets=Z}();
//# sourceMappingURL=index.a371b4ea.js.map
