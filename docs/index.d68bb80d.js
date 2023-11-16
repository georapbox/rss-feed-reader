!function(){let e;function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=o.parcelRequire3ec4;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},o.parcelRequire3ec4=r),r.register("aNJCr",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:function(){return o},set:function(e){return o=e},enumerable:!0,configurable:!0});var o,i={};o=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),Object.defineProperty({},"ClipboardCopy",{get:function(){return c},set:void 0,enumerable:!0,configurable:!0});let a="clipboard-copy",s="success",l="error",d=document.createElement("template");d.innerHTML=`
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
`;class c extends HTMLElement{#e=null;#t;#o;#i;#n;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(d.content.cloneNode(!0))),this.#t=this.shadowRoot.querySelector("button"),this.#o=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#n=this.shadowRoot.querySelector('slot[name="error"]')}static get observedAttributes(){return["disabled"]}connectedCallback(){this.#r("value"),this.#r("from"),this.#r("disabled"),this.#t&&this.#t.addEventListener("click",this.#a)}disconnectedCallback(){this.#t&&this.#t.removeEventListener("click",this.#a)}attributeChangedCallback(e){"disabled"===e&&this.#t&&(this.#t.disabled=this.disabled,this.#t.setAttribute("aria-disabled",this.disabled),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(e){this.setAttribute("feedback-duration",e)}get value(){return this.getAttribute("value")}set value(e){this.setAttribute("value",e)}get from(){return this.getAttribute("from")}set from(e){this.setAttribute("from",e)}async #s(){if(this.value||this.from)try{let e="";if(this.value)e=this.value;else if(this.from){let t=("getRootNode"in Element.prototype?this.#t.getRootNode({composed:!0}):this.#t.ownerDocument).querySelector(this.from);if(!t)return;e=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:t instanceof HTMLAnchorElement&&t.hasAttribute("href")?t.href:t.textContent}await navigator.clipboard.writeText(e),this.#l(s),this.dispatchEvent(new CustomEvent(`${a}-success`,{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.#l(l),this.dispatchEvent(new CustomEvent(`${a}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}#a=e=>{e.preventDefault(),this.disabled||this.#e||this.#s()};#l(e){this.#o.hidden=!0,this.#i.hidden=e!==s,this.#n.hidden=e!==l,this.#t&&(this.#t.part.remove("button--success"),this.#t.part.remove("button--error"),this.#t.part.add(`button--${e}`)),clearTimeout(this.#e),this.#e=setTimeout(()=>{this.#o.hidden=!1,this.#i.hidden=!0,this.#n.hidden=!0,this.#t&&this.#t.part.remove(`button--${e}`),this.#e=null},this.feedbackDuration)}#r(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=a){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,c)}}function h(e,t,o){if(!t.has(e))throw TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}function u(e,t){var o;return(o=h(e,t,"get")).get?o.get.call(e):o.value}function p(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function m(e,t,o){p(e,t),t.set(e,o)}function f(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=o}}(e,h(e,t,"set"),o),o}function b(e,t,o){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return o}function g(e,t){p(e,t),t.add(e)}c.defineCustomElement(),Object.defineProperty({},"WebShare",{get:function(){return _},set:to,enumerable:!0,configurable:!0});let v=document.createElement("template"),w=String.raw;v.innerHTML=w`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var y=new WeakMap,E=new WeakMap,x=new WeakMap,S=new WeakMap,C=new WeakMap,k=new WeakSet,A=new WeakSet;class _ extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){b(this,A,L).call(this,"shareUrl"),b(this,A,L).call(this,"shareTitle"),b(this,A,L).call(this,"shareText"),b(this,A,L).call(this,"shareFiles"),b(this,A,L).call(this,"disabled"),u(this,y)&&u(this,y).addEventListener("slotchange",u(this,C)),u(this,E)&&u(this,E).addEventListener("click",u(this,S))}disconnectedCallback(){u(this,y)&&u(this,y).removeEventListener("slotchange",u(this,C)),u(this,E)&&u(this,E).removeEventListener("click",u(this,S))}attributeChangedCallback(e){"disabled"===e&&u(this,E)&&(u(this,E).disabled=this.disabled,u(this,E).setAttribute("aria-disabled",this.disabled),u(this,E).part&&u(this,E).part.contains("button")&&u(this,E).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return u(this,x)}set shareFiles(e){f(this,x,e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if("AbortError"===e.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,_)}constructor(){super(),g(this,k),g(this,A),m(this,y,{writable:!0,value:void 0}),m(this,E,{writable:!0,value:void 0}),m(this,x,{writable:!0,value:null}),m(this,S,{writable:!0,value:e=>{e.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),m(this,C,{writable:!0,value:e=>{e.target&&"button"===e.target.name&&(u(this,E)&&u(this,E).removeEventListener("click",u(this,S)),f(this,E,b(this,k,T).call(this)),u(this,E)&&(u(this,E).addEventListener("click",u(this,S)),"BUTTON"===u(this,E).nodeName||u(this,E).hasAttribute("role")||u(this,E).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(v.content.cloneNode(!0))),f(this,y,this.shadowRoot.querySelector('slot[name="button"]')),f(this,E,b(this,k,T).call(this))}}function T(){return u(this,y)?u(this,y).assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot")):null}function L(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}_.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return $},set:void 0,enumerable:!0,configurable:!0});let D=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),M=[".DS_Store","Thumbs.db"],R=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=t.split(".").pop().toLowerCase(),i=D.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e},z=(e,t)=>{let o=R(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},O=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),N=async e=>{let t=[],o=await O(e);for(;o.length>0;)t.push(...o),o=await O(e);return t},I=e=>new Promise((t,o)=>{e.file(o=>t(z(o,e.fullPath)),o)}),B=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e){if(e.isFile){let o=await I(e);-1===M.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await N(e.createReader()))}}return t},F=async e=>{let t=[];for(let o of e)-1===M.indexOf(o.name)&&t.push(z(o));return t},j=async e=>e.dataTransfer?e.dataTransfer.items?await B(e.dataTransfer.items):await F(e.dataTransfer.files):await F(e.target.files),P="files-dropzone",H="TOO_MANY_FILES",q=document.createElement("template");q.innerHTML=`
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
      --dropzone-border-width: 2px;
      --dropzone-border-style: dashed;
      --dropzone-border-radius: 0.25rem;
      --dropzone-border-color: #6c757d;
      --dropzone-border-color-dragover: #0d6efd;
      --dropzone-background-color: #ffffff;
      --dropzone-background-color-dragover: #f4f4f5;
      --dropzone-body-color: #3f3f46;
      --dropzone-body-color-dragover: var(--dropzone-body-color);
      --dropzone-focus-shadow-rgb: 49,132,253;
      --transition-duration: 0.2s;

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
      transition: border var(--transition-duration) ease-in-out, background-color var(--transition-duration) ease-in-out, color var(--transition-duration) ease-in-out, box-shadow var(--transition-duration) ease-in-out;
    }

    :host(:not([no-style])[no-click]) .dropzone {
      cursor: default;
    }

    :host(:not([no-style])[disabled]) .dropzone {
      opacity: 0.8;
      cursor: not-allowed;
    }

    :host(:not([no-style]):not([disabled])) .dropzone--dragover {
      border-color: var(--dropzone-border-color-dragover);
      background-color: var(--dropzone-background-color-dragover);
      color: var(--dropzone-body-color-dragover);
    }

    :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
      outline: none;
      box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    }
  </style>

  <input type="file" id="fileInput" hidden>

  <div part="dropzone" class="dropzone" id="dropzoneEl" tabindex="0" role="presentation">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class $ extends HTMLElement{#t;#e;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(q.content.cloneNode(!0))),this.#t=this.shadowRoot.getElementById("fileInput"),this.#e=this.shadowRoot.getElementById("dropzoneEl")}static get observedAttributes(){return["accept","disabled","multiple","no-keyboard"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?this.#e.removeAttribute("tabindex"):this.#e.setAttribute("tabindex","0")),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple),"no-keyboard"===e&&t!==o&&this.#e&&(this.noKeyboard?this.#e.removeAttribute("tabindex"):this.#e.setAttribute("tabindex","0"))}connectedCallback(){this.#o("accept"),this.#o("disabled"),this.#o("maxFiles"),this.#o("maxSize"),this.#o("minSize"),this.#o("multiple"),this.#o("noClick"),this.#o("noDrag"),this.#o("noKeyboard"),this.#o("autoFocus"),this.#o("noStyle"),this.#t.addEventListener("change",this.#n),this.#e.addEventListener("dragenter",this.#r),this.#e.addEventListener("dragover",this.#l),this.#e.addEventListener("dragleave",this.#i),this.#e.addEventListener("drop",this.#a),this.#e.addEventListener("click",this.#d),this.#e.addEventListener("keyup",this.#s),this.autoFocus&&this.#e.focus()}disconnectedCallback(){this.#t.removeEventListener("change",this.#n),this.#e.removeEventListener("dragenter",this.#r),this.#e.removeEventListener("dragover",this.#l),this.#e.removeEventListener("dragleave",this.#i),this.#e.removeEventListener("drop",this.#a),this.#e.removeEventListener("click",this.#d),this.#e.removeEventListener("keyup",this.#s)}get accept(){return this.getAttribute("accept")}set accept(e){this.setAttribute("accept",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){e?this.setAttribute("multiple",""):this.removeAttribute("multiple")}get noClick(){return this.hasAttribute("no-click")}set noClick(e){e?this.setAttribute("no-click",""):this.removeAttribute("no-click")}get noDrag(){return this.hasAttribute("no-drag")}set noDrag(e){e?this.setAttribute("no-drag",""):this.removeAttribute("no-drag")}get noKeyboard(){return this.hasAttribute("no-keyboard")}set noKeyboard(e){e?this.setAttribute("no-keyboard",""):this.removeAttribute("no-keyboard")}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){e?this.setAttribute("auto-focus",""):this.removeAttribute("auto-focus")}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){e?this.setAttribute("no-style",""):this.removeAttribute("no-style")}#n=async e=>{try{this.#c(await j(e))}catch(e){this.dispatchEvent(new CustomEvent(`${P}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#r=()=>{this.disabled||this.noDrag||this.dispatchEvent(new Event(`${P}-dragenter`,{bubbles:!0,composed:!0}))};#l=e=>{if(e.preventDefault(),this.disabled||this.noDrag){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover"),this.dispatchEvent(new Event(`${P}-dragover`,{bubbles:!0,composed:!0}))};#i=()=>{this.disabled||this.noDrag||(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"),this.dispatchEvent(new Event(`${P}-dragleave`,{bubbles:!0,composed:!0})))};#a=async e=>{if(!this.disabled&&!this.noDrag){e.preventDefault(),this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover");try{this.#c(await j(e))}catch(e){this.dispatchEvent(new CustomEvent(`${P}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#d=()=>{this.disabled||this.noClick||this.#t.click()};#s=e=>{this.disabled||this.noKeyboard||" "!==e.key&&"Enter"!==e.key||this.#t.click()};#c(e){if(!Array.isArray(e)||!e.length)return;let t=[],o=[],i=e.length;if(!this.multiple&&i>1)for(let t of e)o.push({file:t,errors:[{code:H,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let t of e)o.push({file:t,errors:[{code:H,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of e){let e=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(i,this.accept),n=i.size>this.maxSize,r=i.size<this.minSize;if(!e||n||r){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),n&&t.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),r&&t.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:t})}else t.push(i)}this.dispatchEvent(new CustomEvent(`${P}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:o}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${P}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${P}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#t.value=this.#t.defaultValue}openFileDialog(){this.disabled||this.#t.click()}#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=P){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,$)}}$.defineCustomElement();let W="a-tab",Y=document.createElement("template"),X=0;Y.innerHTML=`
  <style>
    .tab {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
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
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;class U extends HTMLElement{static get observedAttributes(){return["selected","disabled","closable"]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Y.content.cloneNode(!0)))}connectedCallback(){this.#e("selected"),this.#e("disabled"),this.#e("closable"),this.id||(this.id=`a-tab-generated-${X++}`),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled?-1:0)}disconnectedCallback(){let e=this.shadowRoot.querySelector(".tab__close");e?.removeEventListener("click",this.#t)}attributeChangedCallback(e,t,o){if("selected"===e&&t!==o&&this.setAttribute("aria-selected",this.selected),"disabled"===e&&t!==o&&(this.setAttribute("aria-disabled",this.disabled),this.setAttribute("tabindex",this.disabled?-1:0)),"closable"===e&&t!==o){if(this.closable){let e=document.createElement("span");e.className="tab__close",e.part="close-tab",e.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot.querySelector(".tab").appendChild(e),e.addEventListener("click",this.#t)}else{let e=this.shadowRoot.querySelector(".tab__close");e?.removeEventListener("click",this.#t),e?.remove()}}}get selected(){return this.hasAttribute("selected")}set selected(e){e?this.setAttribute("selected",""):this.removeAttribute("selected")}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get closable(){return this.hasAttribute("closable")}set closable(e){e?this.setAttribute("closable",""):this.removeAttribute("closable")}#t=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`${W}-close`,{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#e(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}}window.customElements&&!window.customElements.get(W)&&window.customElements.define(W,U);let V="a-tab-panel",G=document.createElement("template"),J=0;G.innerHTML=`
  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;class Z extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(G.content.cloneNode(!0)))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`a-tab-panel-generated-${J++}`)}}window.customElements&&!window.customElements.get(V)&&window.customElements.define(V,Z);let K="a-tab-group",Q="a-tab",ee="a-tab-panel",et="bottom",eo="start",ei="auto",en="manual",er={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:"Space"},ea=document.createElement("template");ea.innerHTML=`
  <style>
    *,
    *::after,
    *::before {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }

    :host([hidden]),
    [hidden],
    ::slotted([hidden]) {
      display: none !important;
    }

    :host {
      --selected-tab-color: #005fcc;
      --selected-tab-bg-color: transparent;
      --tabs-scroll-behavior: smooth;
      --scroll-button-width: 2.125em;
      --scroll-button-height: 2.125em;
      --scroll-button-inline-offset: 0rem;

      display: block;
      box-sizing: border-box;
    }

    .tab-group {
      display: flex;
      width: 100%;
    }

    .tab-group__nav {
      position: relative;
    }

    .tab-group__nav--scrollable {
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
      border: 0;
      z-index: 1;
      background-color: transparent;
      font-size: inherit;
      cursor: pointer;
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
    :host([placement="top"]) .tab-group {
      flex-direction: column;
    }

    /* placement="bottom" */
    :host([placement="${et}"]) .tab-group {
      flex-direction: column;
    }

    :host([placement="${et}"]) .tab-group__nav {
      order: 1;
    }

    /* placement="start" */
    :host([placement="${eo}"]) .tab-group {
      flex-direction: row;
    }

    :host([placement="${eo}"]) .tab-group__tabs {
      flex-direction: column;
      align-items: flex-start;
    }

    :host([placement="${eo}"]) .tab-group__panels {
      flex: 1;
      padding: 0 1rem;
    }

    /* placement="end" */
    :host([placement="end"]) .tab-group {
      flex-direction: row;
    }

    :host([placement="end"]) .tab-group__nav {
      order: 1;
    }

    :host([placement="end"]) .tab-group__tabs {
      flex-direction: column;
      align-items: flex-start;
    }

    :host([placement="end"]) .tab-group__panels {
      flex: 1;
      padding: 0 1rem;
    }
  </style>

  <div part="base" class="tab-group">
    <div class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;class es extends HTMLElement{#i=!1;#o;static get observedAttributes(){return["placement","no-scroll-controls"]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ea.content.cloneNode(!0)))}connectedCallback(){this.#e("placement"),this.#e("noScrollControls"),this.#e("scrollDistance"),this.#e("activation"),this.#e("panelTransition");let e=this.shadowRoot.querySelector("slot[name=tab]"),t=this.shadowRoot.querySelector("slot[name=panel]"),o=this.shadowRoot.querySelector(".tab-group__tabs"),i=this.shadowRoot.querySelector(".tab-group__nav"),n=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));e.addEventListener("slotchange",this.#l),t.addEventListener("slotchange",this.#l),o.addEventListener("click",this.#s),o.addEventListener("keydown",this.#r),n.forEach(e=>e.addEventListener("click",this.#n)),this.addEventListener(`${Q}-close`,this.#a),"ResizeObserver"in window&&(this.#o=new ResizeObserver(e=>{let t=e?.[0],o=t?.target,r=o?.scrollWidth>(t?.borderBoxSize?.[0]?.inlineSize||o?.clientWidth);n.forEach(e=>e.hidden=!r),i.classList.toggle("tab-group__nav--scrollable",r)})),this.#h(),this.hidden=0===this.#d().length,this.placement=this.placement||"top"}disconnectedCallback(){let e=this.shadowRoot.querySelector("slot[name=tab]"),t=this.shadowRoot.querySelector("slot[name=panel]"),o=this.shadowRoot.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));e.removeEventListener("slotchange",this.#l),t.removeEventListener("slotchange",this.#l),o.removeEventListener("click",this.#s),o.removeEventListener("keydown",this.#r),i.forEach(e=>e.removeEventListener("click",this.#n)),this.removeEventListener(`${Q}-close`,this.#a),this.#u()}attributeChangedCallback(e,t,o){"placement"===e&&t!==o&&this.#h(),"no-scroll-controls"===e&&t!==o&&this.#h()}get placement(){return this.getAttribute("placement")}set placement(e){this.setAttribute("placement",e)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(e){e?this.setAttribute("no-scroll-controls",""):this.removeAttribute("no-scroll-controls")}get scrollDistance(){return Math.abs(this.getAttribute("scroll-distance"))||200}set scrollDistance(e){this.setAttribute("scroll-distance",Math.abs(e)||200)}get activation(){return this.getAttribute("activation")||ei}set activation(e){this.setAttribute("activation",e||ei)}get panelTransition(){return this.hasAttribute("panel-transition")}set panelTransition(e){e?this.setAttribute("panel-transition",""):this.removeAttribute("panel-transition")}#p(){if(!this.#o)return;let e=this.shadowRoot.querySelector(".tab-group__tabs");this.#o.unobserve(e),this.#o.observe(e)}#u(){this.#o&&this.#o.disconnect()}#m(){let e=this.#d();this.hidden=0===e.length,e.forEach(e=>{let t=e.nextElementSibling;if(!t||t.tagName.toLowerCase()!==ee)return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)});let t=e.find(e=>e.selected&&!e.disabled)||e.find(e=>!e.disabled);this.#c(t)}#f(){return Array.from(this.querySelectorAll(ee))}#d(){return Array.from(this.querySelectorAll(Q))}#b(e){let t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}#g(){return this.#d().find(e=>!e.disabled)}#v(){let e=this.#d();for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return e[t]}#w(){let e=this.#d(),t=this.activation===en?e.findIndex(e=>e.matches(":focus"))-1:e.findIndex(e=>e.selected)-1;for(;e[(t+e.length)%e.length].disabled;)t--;return e[(t+e.length)%e.length]}#y(){let e=this.#d(),t=this.activation===en?e.findIndex(e=>e.matches(":focus"))+1:e.findIndex(e=>e.selected)+1;for(;e[t%e.length].disabled;)t++;return e[t%e.length]}#r=e=>{let t;if(e.target.tagName.toLowerCase()===Q&&!e.altKey){switch(e.code){case er.LEFT:case er.UP:t=this.#w(),this.activation===en?t.focus():this.selectTab(t);break;case er.RIGHT:case er.DOWN:t=this.#y(),this.activation===en?t.focus():this.selectTab(t);break;case er.HOME:t=this.#g(),this.activation===en?t.focus():this.selectTab(t);break;case er.END:t=this.#v(),this.activation===en?t.focus():this.selectTab(t);break;case er.ENTER:case er.SPACE:t=e.target,this.selectTab(t);break;default:return}e.preventDefault()}};#s=e=>{let t=e.target.closest(Q);this.selectTab(t)};#n=e=>{let t=e.target.closest(".tab-group__scroll-button");if(!t)return;let o=this.shadowRoot.querySelector(".tab-group__tabs"),i=t.classList.contains("tab-group__scroll-button--start")?eo:"end";o.scrollBy({left:i===eo?-this.scrollDistance:this.scrollDistance})};#a=e=>{let t=e.target,o=this.#b(t);t&&o.tagName.toLowerCase()===ee&&(o.remove(),t.remove())};#l=()=>{this.#i=!1,this.#m(),this.#h()};#E(){let e=this.#d(),t=this.#f();e.forEach(e=>e.selected=!1),this.#x(()=>t.forEach(e=>e.hidden=!0))}#c(e){if(this.#E(),!e||e.selected)return;let t=this.#b(e);t&&(e.selected=!0,this.#x(()=>t.hidden=!1),this.#i=!0)}#h(){let e=this.shadowRoot.querySelector(".tab-group__nav"),t=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));this.noScrollControls||this.placement===eo||"end"===this.placement?(this.#u(),t.forEach(e=>e.hidden=!0),e.classList.remove("tab-group__nav--scrollable")):(this.#p(),t.forEach(e=>e.hidden=!1))}#x(e=()=>{}){"function"==typeof document.startViewTransition&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches&&this.#i&&this.panelTransition?document.startViewTransition(e):e()}#e(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}selectTabByIndex(e){let t=this.#d()[e];this.selectTab(t)}selectTab(e){!e||e.disabled||e.selected||(this.#c(e),setTimeout(()=>e.focus(),0),this.dispatchEvent(new CustomEvent(`${Q}-select`,{bubbles:!0,composed:!0,detail:{tabId:e.id}})))}}window.customElements&&!window.customElements.get(K)&&window.customElements.define(K,es),Object.defineProperty({},"ModalElement",{get:function(){return ed},set:void 0,enumerable:!0,configurable:!0});let el=document.createElement("template");el.innerHTML=`
  <style>
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
          transform: scale(0.9);
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
  </style>

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
`;class ed extends HTMLElement{#t=null;#e=null;#o=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(el.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#e=this.shadowRoot.querySelector('slot[name="footer"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button"]}attributeChangedCallback(e,t,o){if(null!==this.#t){if("open"===e&&t!==o&&(this.open?(this.#t.showModal(),document.body&&(document.body.style.overflowY="hidden"),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}}))):this.#t.close()),"no-header"===e&&t!==o){let e=this.#t.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#t.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}}}connectedCallback(){this.#n("open"),this.#n("staticBackdrop"),this.#n("noHeader"),this.#n("noAnimations"),this.#n("noCloseButton"),this.#n("fullscreen"),this.#t?.addEventListener("click",this.#l),this.#t?.addEventListener("close",this.#s),this.#t?.addEventListener("cancel",this.#i),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#a),this.#e?.addEventListener("slotchange",this.#r)}disconnectedCallback(){this.#o&&clearTimeout(this.#o),this.#t?.addEventListener("click",this.#l),this.#t?.removeEventListener("close",this.#s),this.#t?.removeEventListener("cancel",this.#i),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#a),this.#e?.removeEventListener("slotchange",this.#r)}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){e?this.setAttribute("static-backdrop",""):this.removeAttribute("static-backdrop")}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){e?this.setAttribute("no-header",""):this.removeAttribute("no-header")}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){e?this.setAttribute("no-animations",""):this.removeAttribute("no-animations")}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){e?this.setAttribute("no-close-button",""):this.removeAttribute("no-close-button")}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){e?this.setAttribute("fullscreen",""):this.removeAttribute("fullscreen")}#d(){this.#o||(this.#t?.classList.add("dialog--pulse"),this.#o=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#o),this.#o=void 0},300))}#s=()=>{this.open=!1,document.body&&(document.body.style.overflowY=""),this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}}))};#i=e=>{let t=this.#h("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#d())};#a=e=>{let t=this.#h("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#d())};#l=e=>{if(e.target!==e.currentTarget)return;let t=this.#h("backdrop-click");if(this.dispatchEvent(t),t.defaultPrevented||this.staticBackdrop){this.noAnimations||this.#d();return}this.#t?.close()};#r=()=>{if(null===this.#t)return;let e=this.#t.querySelector(".dialog__footer");if(null===e)return;let t=this.#e?.assignedNodes(),o=!!t&&t.length>0;e.hidden=!o};#h(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#n(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,ed)}}ed.defineCustomElement(),function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),o=new WeakMap,i="object"==typeof DOMException?Error:DOMException,n=Object.defineProperty,r=Array.prototype.forEach,a=/@import.+?;?$/gm,s=CSSStyleSheet.prototype;s.replace=function(){return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."))},s.replaceSync=function(){throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var l=new WeakMap,d=new WeakMap,c=new WeakMap,h=new WeakMap,u=_.prototype;u.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},u.replaceSync=function(e){if(A(this),"string"==typeof e){var t,o=this;l.get(o).textContent=((t=e.replace(a,""))!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()),h.set(o,[]),d.get(o).forEach(function(e){e.isConnected()&&k(o,C(o,e))})}},n(u,"cssRules",{configurable:!0,enumerable:!0,get:function(){return A(this),l.get(this).sheet.cssRules}}),n(u,"media",{configurable:!0,enumerable:!0,get:function(){return A(this),l.get(this).sheet.media}}),["addRule","deleteRule","insertRule","removeRule"].forEach(function(e){u[e]=function(){var t=this;A(t);var o=arguments;h.get(t).push({method:e,args:o}),d.get(t).forEach(function(i){if(i.isConnected()){var n=C(t,i).sheet;n[e].apply(n,o)}});var i=l.get(t).sheet;return i[e].apply(i,o)}}),n(_,Symbol.hasInstance,{configurable:!0,value:x});var p={childList:!0,subtree:!0},m=new WeakMap,f=new WeakMap,b=new WeakMap,g=new WeakMap;if(z.prototype={isConnected:function(){var e,t=f.get(this);return t instanceof Document?"loading"!==t.readyState:"isConnected"in(e=t.host)?e.isConnected:document.contains(e)},connect:function(){var e=M(this);g.get(this).observe(e,p),b.get(this).length>0&&R(this),D(e,function(e){T(e).connect()})},disconnect:function(){g.get(this).disconnect()},update:function(e){var t=this,o=f.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Iterator getter is not callable.");if(!e.every(x))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Failed to convert value to 'CSSStyleSheet'");if(e.some(S))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Can't adopt non-constructed stylesheets");t.sheets=e;var i=b.get(t),n=e.filter(function(t,o){return e.indexOf(t)===o});i.filter(function(e){return -1===n.indexOf(e)}).forEach(function(e){(function(e){e.parentNode.removeChild(e)})(C(e,t)),c.get(e).delete(t),d.set(e,d.get(e).filter(function(e){return e!==t}))}),b.set(t,n),t.isConnected()&&n.length>0&&R(t)}},window.CSSStyleSheet=_,L(Document),"ShadowRoot"in window){L(ShadowRoot);var v=Element.prototype,w=v.attachShadow;v.attachShadow=function(e){var t=w.call(this,e);return"closed"===e.mode&&o.set(this,t),t}}var y=T(document);y.isConnected()?y.connect():document.addEventListener("DOMContentLoaded",y.connect.bind(y))}function E(e){return e.shadowRoot||o.get(e)}function x(e){return"object"==typeof e&&(u.isPrototypeOf(e)||s.isPrototypeOf(e))}function S(e){return"object"==typeof e&&s.isPrototypeOf(e)}function C(e,t){return c.get(e).get(t)}function k(e,t){requestAnimationFrame(function(){t.textContent=l.get(e).textContent,h.get(e).forEach(function(e){return t.sheet[e.method].apply(t.sheet,e.args)})})}function A(e){if(!l.has(e))throw TypeError("Illegal invocation")}function _(){var e=document.createElement("style");t.body.appendChild(e),l.set(this,e),d.set(this,[]),c.set(this,new WeakMap),h.set(this,[])}function T(e){var t=m.get(e);return t||(t=new z(e),m.set(e,t)),t}function L(e){n(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return T(this).sheets},set:function(e){T(this).update(e)}})}function D(e,t){for(var o=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,function(e){return E(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),i=void 0;i=o.nextNode();)t(E(i))}function M(e){var t=f.get(e);return t instanceof Document?t.body:t}function R(e){var t=document.createDocumentFragment(),o=b.get(e),i=g.get(e),n=M(e);i.disconnect(),o.forEach(function(o){var i;t.appendChild(C(o,e)||(i=document.createElement("style"),c.get(o).set(e,i),d.get(o).push(e),i))}),n.insertBefore(t,null),i.observe(n,p),o.forEach(function(t){k(t,C(t,e))})}function z(t){var o=this;o.sheets=[],f.set(o,t),b.set(o,[]),g.set(o,new MutationObserver(function(t,i){if(!document){i.disconnect();return}t.forEach(function(t){e||r.call(t.addedNodes,function(e){e instanceof Element&&D(e,function(e){T(e).connect()})}),r.call(t.removedNodes,function(t){t instanceof Element&&(t instanceof HTMLStyleElement&&b.get(o).some(function(e){return C(e,o)})&&R(o),e||D(t,function(e){T(e).disconnect()}))})})}))}}();var ec={};ec=r("aNJCr").getBundleURL("jBxQq")+r("iE7OH").resolve("4z142");var eh={};eh=r("aNJCr").getBundleURL("jBxQq")+r("iE7OH").resolve("iVxim");let eu=[t(ec),t(eh)],ep=[];for(let e=0;e<eu.length;e+=1)ep.push(new CSSStyleSheet);function em(e){return new Promise(function(t,o){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return o(e.error)}})}function ef(){if(!ti){var e,t,o;e="keyval",(t=indexedDB.open("keyval-store")).onupgradeneeded=function(){return t.result.createObjectStore(e)},o=em(t),ti=function(t,i){return o.then(function(o){return i(o.transaction(e,t).objectStore(e))})}}return ti}!async function(){let e=await Promise.all(eu.map(async e=>{let t=await fetch(e);return t.text()}));for(let t=0;t<e.length;t+=1)await ep[t].replace(e[t]);document.body.style.visibility="visible"}();let eb="rss-reader/feeds",eg=async e=>{try{return{value:await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ef();return t("readonly",function(t){return em(t.get(e))})}(e),error:void 0}}catch(e){return{value:void 0,error:e}}},ev=async(e,t)=>{try{return await function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ef();return o("readwrite",function(o){return o.put(t,e),em(o.transaction)})}(e,t),{error:void 0}}catch(e){return{error:e}}},ew=async()=>eg(eb),ey=async(e,t=!0)=>{if(!Array.isArray(e))return;let{error:o}=await ev(eb,e);return!o&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"set",feeds:e}})),{error:o}},eE=async(e,t=!0)=>{let{value:o=[]}=await ew(),i=o.find(t=>t.url===e.url),n="";i?(i.url=e.url,i.title=e.title,n="update"):(o.push(e),n="create");let{error:r}=await ev(eb,o);return!r&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:n,feed:e}})),{error:r}},ex=async(e,t=!0)=>{let{value:o=[]}=await ew(),i=o.filter(t=>t.url!==e),{error:n}=await ev(eb,i);return!n&&t&&(0===i.length&&await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ef();return t("readwrite",function(t){return t.delete(e),em(t.transaction)})}(eb),document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"delete",feed:{url:e}}}))),{error:n}},eS=e=>{try{return new URL(e),!0}catch{return!1}},eC=document.createElement("template");eC.innerHTML=`
  <style>
    :host {
      --input-height: 42px;

      display: block;
    }
  </style>

  <form name="addFeedForm" autocomplete="off" class="d-flex">
    <div class="form-group" style="flex: 1;">
      <input type="url" name="feed-url" class="form-control" style="height: var(--input-height);" placeholder="Enter a feed URL in XML format" autocapitalize="off" autocorrect="off" required>
    </div>
    <div class="ms-2">
      <input type="submit" value="Add feed" class="btn btn-primary" style="height: var(--input-height);">
    </div>
  </form>
`;class ek extends HTMLElement{#S;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(eC.content.cloneNode(!0))),this.shadowRoot.adoptedStyleSheets=ep,this.#S=this.shadowRoot.querySelector('form[name="addFeedForm"]')}connectedCallback(){this.#S.addEventListener("submit",this.#C)}disconnectedCallback(){this.#S.addEventListener("submit",this.#C)}async #C(e){e.preventDefault();let t=e.target["feed-url"],o=t.value.trim(),{value:i=[]}=await ew(),n=!!i.find(e=>e.url===o),r=eS(o);!n&&r&&await eE({url:o,title:""}),t.value=""}}function eA(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function e_(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?eA(Object(o),!0).forEach(function(t){var i;i=o[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):eA(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function eT(e){return(eT="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eL(){return(eL=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}function eD(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}window.customElements.get("add-feed")||window.customElements.define("add-feed",ek);var eM=eD(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),eR=eD(/Edge/i),ez=eD(/firefox/i),eO=eD(/safari/i)&&!eD(/chrome/i)&&!eD(/android/i),eN=eD(/iP(ad|od|hone)/i),eI=eD(/chrome/i)&&eD(/android/i),eB={capture:!1,passive:!1};function eF(e,t,o){e.addEventListener(t,o,!eM&&eB)}function ej(e,t,o){e.removeEventListener(t,o,!eM&&eB)}function eP(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){}return!1}}function eH(e,t,o,i){if(e){var n;o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&eP(e,t):eP(e,t))||i&&e===o)return e;if(e===o)break}while(e=(n=e).host&&n!==document&&n.host.nodeType?n.host:n.parentNode)}return null}var eq=/\s+/g;function e$(e,t,o){if(e&&t){if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(eq," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(eq," ")}}}function eW(e,t,o){var i=e&&e.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}}function eY(e,t){var o="";if("string"==typeof e)o=e;else do{var i=eW(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode))var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function eX(e,t,o){if(e){var i=e.getElementsByTagName(t),n=0,r=i.length;if(o)for(;n<r;n++)o(i[n],n);return i}return[]}function eU(){return document.scrollingElement||document.documentElement}function eV(e,t,o,i,n){if(e.getBoundingClientRect||e===window){if(e!==window&&e.parentNode&&e!==eU()?(a=(r=e.getBoundingClientRect()).top,s=r.left,l=r.bottom,d=r.right,c=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(t||o)&&e!==window&&(n=n||e.parentNode,!eM))do if(n&&n.getBoundingClientRect&&("none"!==eW(n,"transform")||o&&"static"!==eW(n,"position"))){var r,a,s,l,d,c,h,u=n.getBoundingClientRect();a-=u.top+parseInt(eW(n,"border-top-width")),s-=u.left+parseInt(eW(n,"border-left-width")),l=a+r.height,d=s+r.width;break}while(n=n.parentNode)if(i&&e!==window){var p=eY(n||e),m=p&&p.a,f=p&&p.d;p&&(a/=f,s/=m,h/=m,c/=f,l=a+c,d=s+h)}return{top:a,left:s,bottom:l,right:d,width:h,height:c}}}function eG(e,t,o){for(var i=e0(e,!0),n=eV(e)[t];i;){var r=eV(i)[o];if(!("top"===o||"left"===o?n>=r:n<=r))return i;if(i===eU())break;i=e0(i,!1)}return!1}function eJ(e,t,o,i){for(var n=0,r=0,a=e.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==tJ.ghost&&(i||a[r]!==tJ.dragged)&&eH(a[r],o.draggable,e,!1)){if(n===t)return a[r];n++}r++}return null}function eZ(e,t){for(var o=e.lastElementChild;o&&(o===tJ.ghost||"none"===eW(o,"display")||t&&!eP(o,t));)o=o.previousElementSibling;return o||null}function eK(e,t){var o=0;if(!e||!e.parentNode)return -1;for(;e=e.previousElementSibling;)"TEMPLATE"!==e.nodeName.toUpperCase()&&e!==tJ.clone&&(!t||eP(e,t))&&o++;return o}function eQ(e){var t=0,o=0,i=eU();if(e)do{var n=eY(e),r=n.a,a=n.d;t+=e.scrollLeft*r,o+=e.scrollTop*a}while(e!==i&&(e=e.parentNode))return[t,o]}function e0(e,t){if(!e||!e.getBoundingClientRect)return eU();var o=e,i=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=eW(o);if(o.clientWidth<o.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!o.getBoundingClientRect||o===document.body)return eU();if(i||t)return o;i=!0}}while(o=o.parentNode)return eU()}function e1(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function e5(e,t){return function(){if(!tn){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),tn=setTimeout(function(){tn=void 0},t)}}}function e2(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function e3(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}var e4="Sortable"+new Date().getTime(),e8=[],e6={initializeByDefault:!0},e7={mount:function(e){for(var t in e6)!e6.hasOwnProperty(t)||t in e||(e[t]=e6[t]);e8.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),e8.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var n=e+"Global";e8.forEach(function(i){t[i.pluginName]&&(t[i.pluginName][n]&&t[i.pluginName][n](e_({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](e_({sortable:t},o)))})},initializePlugins:function(e,t,o,i){for(var n in e8.forEach(function(i){var n=i.pluginName;if(e.options[n]||i.initializeByDefault){var r=new i(e,t,e.options);r.sortable=e,r.options=e.options,e[n]=r,eL(o,r.defaults)}}),e.options)if(e.options.hasOwnProperty(n)){var r=this.modifyOption(e,n,e.options[n]);void 0!==r&&(e.options[n]=r)}},getEventProperties:function(e,t){var o={};return e8.forEach(function(i){"function"==typeof i.eventProperties&&eL(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return e8.forEach(function(n){e[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[t]&&(i=n.optionListeners[t].call(e[n.pluginName],o))}),i}},e9=["evt"],te=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,n=function(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(o,e9);e7.pluginEvent.bind(tJ)(e,t,e_({dragEl:tr,parentEl:ta,ghostEl:ts,rootEl:tl,nextEl:td,lastDownEl:tc,cloneEl:th,cloneHidden:tu,dragStarted:tk,putSortable:tv,activeSortable:tJ.active,originalEvent:i,oldIndex:tp,oldDraggableIndex:tf,newIndex:tm,newDraggableIndex:tb,hideGhostForTarget:tX,unhideGhostForTarget:tU,cloneNowHidden:function(){tu=!0},cloneNowShown:function(){tu=!1},dispatchSortableEvent:function(e){tt({sortable:t,name:e,originalEvent:i})}},n))};function tt(e){!function(e){var t=e.sortable,o=e.rootEl,i=e.name,n=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,d=e.newIndex,c=e.oldDraggableIndex,h=e.newDraggableIndex,u=e.originalEvent,p=e.putSortable,m=e.extraEventProperties;if(t=t||o&&o[e4]){var f,b=t.options,g="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||eM||eR?(f=document.createEvent("Event")).initEvent(i,!0,!0):f=new CustomEvent(i,{bubbles:!0,cancelable:!0}),f.to=a||o,f.from=s||o,f.item=n||o,f.clone=r,f.oldIndex=l,f.newIndex=d,f.oldDraggableIndex=c,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var v=e_(e_({},m),e7.getEventProperties(i,t));for(var w in v)f[w]=v[w];o&&o.dispatchEvent(f),b[g]&&b[g].call(t,f)}}(e_({putSortable:tv,cloneEl:th,targetEl:tr,rootEl:tl,oldIndex:tp,oldDraggableIndex:tf,newIndex:tm,newDraggableIndex:tb},e))}var to,ti,tn,tr,ta,ts,tl,td,tc,th,tu,tp,tm,tf,tb,tg,tv,tw,ty,tE,tx,tS,tC,tk,tA,t_,tT,tL,tD=!1,tM=!1,tR=[],tz=!1,tO=!1,tN=[],tI=!1,tB=[],tF="undefined"!=typeof document,tj=eR||eM?"cssFloat":"float",tP=tF&&!eI&&!eN&&"draggable"in document.createElement("div"),tH=function(){if(tF){if(eM)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),tq=function(e,t){var o=eW(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),n=eJ(e,0,t),r=eJ(e,1,t),a=n&&eW(n),s=r&&eW(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+eV(n).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+eV(r).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var c="left"===a.float?"left":"right";return r&&("both"===s.clear||s.clear===c)?"vertical":"horizontal"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===o[tj]||r&&"none"===o[tj]&&l+d>i)?"vertical":"horizontal"},t$=function(e,t,o){var i=o?e.left:e.top,n=o?e.right:e.bottom,r=o?e.width:e.height,a=o?t.left:t.top,s=o?t.right:t.bottom,l=o?t.width:t.height;return i===a||n===s||i+r/2===a+l/2},tW=function(e,t){var o;return tR.some(function(i){var n=i[e4].options.emptyInsertThreshold;if(!(!n||eZ(i))){var r=eV(i),a=e>=r.left-n&&e<=r.right+n,s=t>=r.top-n&&t<=r.bottom+n;if(a&&s)return o=i}}),o},tY=function(e){function t(e,o){return function(i,n,r,a){var s=i.options.group.name&&n.options.group.name&&i.options.group.name===n.options.group.name;if(null==e&&(o||s))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,n,r,a),o)(i,n,r,a);var l=(o?i:n).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var o={},i=e.group;i&&"object"==eT(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},tX=function(){!tH&&ts&&eW(ts,"display","none")},tU=function(){!tH&&ts&&eW(ts,"display","")};tF&&!eI&&document.addEventListener("click",function(e){if(tM)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),tM=!1,!1},!0);var tV=function(e){if(tr){var t=tW((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[e4]._onDragOver(o)}}},tG=function(e){tr&&tr.parentNode[e4]._isOutsideThisEl(e.target)};function tJ(e,t){if(!(e&&e.nodeType&&1===e.nodeType))throw"Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(e));this.el=e,this.options=t=eL({},t),e[e4]=this;var o,i,n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return tq(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==tJ.supportPointer&&"PointerEvent"in window&&!eO,emptyInsertThreshold:5};for(var r in e7.initializePlugins(this,e,n),n)r in t||(t[r]=n[r]);for(var a in tY(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&tP,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?eF(e,"pointerdown",this._onTapStart):(eF(e,"mousedown",this._onTapStart),eF(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(eF(e,"dragover",this),eF(e,"dragenter",this)),tR.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),eL(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==eW(e,"display")&&e!==tJ.ghost){i.push({target:e,rect:eV(e)});var t=e_({},i[i.length-1].rect);if(e.thisAnimationDuration){var o=eY(e,!0);o&&(t.top-=o.f,t.left-=o.e)}e.fromRect=t}})},addAnimationState:function(e){i.push(e)},removeAnimationState:function(e){i.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o)}return -1}(i,{target:e}),1)},animateAll:function(e){var t=this;if(!this.options.animation){clearTimeout(o),"function"==typeof e&&e();return}var n=!1,r=0;i.forEach(function(e){var o,i=0,a=e.target,s=a.fromRect,l=eV(a),d=a.prevFromRect,c=a.prevToRect,h=e.rect,u=eY(a,!0);u&&(l.top-=u.f,l.left-=u.e),a.toRect=l,a.thisAnimationDuration&&e1(d,l)&&!e1(s,l)&&(h.top-l.top)/(h.left-l.left)==(s.top-l.top)/(s.left-l.left)&&(o=t.options,i=Math.sqrt(Math.pow(d.top-h.top,2)+Math.pow(d.left-h.left,2))/Math.sqrt(Math.pow(d.top-c.top,2)+Math.pow(d.left-c.left,2))*o.animation),e1(l,s)||(a.prevFromRect=s,a.prevToRect=l,i||(i=t.options.animation),t.animate(a,h,l,i)),i&&(n=!0,r=Math.max(r,i),clearTimeout(a.animationResetTimer),a.animationResetTimer=setTimeout(function(){a.animationTime=0,a.prevFromRect=null,a.fromRect=null,a.prevToRect=null,a.thisAnimationDuration=null},i),a.thisAnimationDuration=i)}),clearTimeout(o),n?o=setTimeout(function(){"function"==typeof e&&e()},r):"function"==typeof e&&e(),i=[]},animate:function(e,t,o,i){if(i){eW(e,"transition",""),eW(e,"transform","");var n=eY(this.el),r=n&&n.a,a=n&&n.d,s=(t.left-o.left)/(r||1),l=(t.top-o.top)/(a||1);e.animatingX=!!s,e.animatingY=!!l,eW(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=e.offsetWidth,eW(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),eW(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){eW(e,"transition",""),eW(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},i)}}}))}function tZ(e,t,o,i,n,r,a,s){var l,d,c=e[e4],h=c.options.onMove;return!window.CustomEvent||eM||eR?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=n||t,l.relatedRect=r||eV(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),h&&(d=h.call(c,l,a)),d}function tK(e){e.draggable=!1}function tQ(){tI=!1}function t0(e){return setTimeout(e,0)}function t1(e){return clearTimeout(e)}tJ.prototype={constructor:tJ,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(tA=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,tr):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,n=i.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(a||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=i.filter;if(function(e){tB.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var i=t[o];i.checked&&tB.push(i)}}(o),!(tr||/mousedown|pointerdown/.test(r)&&0!==e.button||i.disabled||l.isContentEditable||!this.nativeDraggable&&eO&&s&&"SELECT"===s.tagName.toUpperCase()||(s=eH(s,i.draggable,o,!1))&&s.animated)&&tc!==s){if(tp=eK(s),tf=eK(s,i.draggable),"function"==typeof d){if(d.call(this,e,s,this)){tt({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),te("filter",t,{evt:e}),n&&e.cancelable&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(i){if(i=eH(l,i.trim(),o,!1))return tt({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),te("filter",t,{evt:e}),!0}))){n&&e.cancelable&&e.preventDefault();return}(!i.handle||eH(l,i.handle,o,!1))&&this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,t,o){var i,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(o&&!tr&&o.parentNode===r){var l=eV(o);if(tl=r,ta=(tr=o).parentNode,td=tr.nextSibling,tc=o,tg=a.group,tJ.dragged=tr,tS=(tw={target:tr,clientX:(t||e).clientX,clientY:(t||e).clientY}).clientX-l.left,tC=tw.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,tr.style["will-change"]="all",i=function(){if(te("delayEnded",n,{evt:e}),tJ.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!ez&&n.nativeDraggable&&(tr.draggable=!0),n._triggerDragStart(e,t),tt({sortable:n,name:"choose",originalEvent:e}),e$(tr,a.chosenClass,!0)},a.ignore.split(",").forEach(function(e){eX(tr,e.trim(),tK)}),eF(s,"dragover",tV),eF(s,"mousemove",tV),eF(s,"touchmove",tV),eF(s,"mouseup",n._onDrop),eF(s,"touchend",n._onDrop),eF(s,"touchcancel",n._onDrop),ez&&this.nativeDraggable&&(this.options.touchStartThreshold=4,tr.draggable=!0),te("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(eR||eM))i();else{if(tJ.eventCanceled){this._onDrop();return}eF(s,"mouseup",n._disableDelayedDrag),eF(s,"touchend",n._disableDelayedDrag),eF(s,"touchcancel",n._disableDelayedDrag),eF(s,"mousemove",n._delayedDragTouchMoveHandler),eF(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&eF(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(i,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){tr&&tK(tr),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;ej(e,"mouseup",this._disableDelayedDrag),ej(e,"touchend",this._disableDelayedDrag),ej(e,"touchcancel",this._disableDelayedDrag),ej(e,"mousemove",this._delayedDragTouchMoveHandler),ej(e,"touchmove",this._delayedDragTouchMoveHandler),ej(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?eF(document,"pointermove",this._onTouchMove):t?eF(document,"touchmove",this._onTouchMove):eF(document,"mousemove",this._onTouchMove):(eF(tr,"dragend",this),eF(tl,"dragstart",this._onDragStart));try{document.selection?t0(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(tD=!1,tl&&tr){te("dragStarted",this,{evt:t}),this.nativeDraggable&&eF(document,"dragover",tG);var o=this.options;e||e$(tr,o.dragClass,!1),e$(tr,o.ghostClass,!0),tJ.active=this,e&&this._appendGhost(),tt({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(ty){this._lastX=ty.clientX,this._lastY=ty.clientY,tX();for(var e=document.elementFromPoint(ty.clientX,ty.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(ty.clientX,ty.clientY))!==t;)t=e;if(tr.parentNode[e4]._isOutsideThisEl(e),t)do{if(t[e4]&&t[e4]._onDragOver({clientX:ty.clientX,clientY:ty.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break;e=t}while(t=t.parentNode)tU()}},_onTouchMove:function(e){if(tw){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,n=e.touches?e.touches[0]:e,r=ts&&eY(ts,!0),a=ts&&r&&r.a,s=ts&&r&&r.d,l=eN&&tL&&eQ(tL),d=(n.clientX-tw.clientX+i.x)/(a||1)+(l?l[0]-tN[0]:0)/(a||1),c=(n.clientY-tw.clientY+i.y)/(s||1)+(l?l[1]-tN[1]:0)/(s||1);if(!tJ.active&&!tD){if(o&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(ts){r?(r.e+=d-(tE||0),r.f+=c-(tx||0)):r={a:1,b:0,c:0,d:1,e:d,f:c};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");eW(ts,"webkitTransform",h),eW(ts,"mozTransform",h),eW(ts,"msTransform",h),eW(ts,"transform",h),tE=d,tx=c,ty=n}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!ts){var e=this.options.fallbackOnBody?document.body:tl,t=eV(tr,!0,eN,!0,e),o=this.options;if(eN){for(tL=e;"static"===eW(tL,"position")&&"none"===eW(tL,"transform")&&tL!==document;)tL=tL.parentNode;tL!==document.body&&tL!==document.documentElement?(tL===document&&(tL=eU()),t.top+=tL.scrollTop,t.left+=tL.scrollLeft):tL=eU(),tN=eQ(tL)}e$(ts=tr.cloneNode(!0),o.ghostClass,!1),e$(ts,o.fallbackClass,!0),e$(ts,o.dragClass,!0),eW(ts,"transition",""),eW(ts,"transform",""),eW(ts,"box-sizing","border-box"),eW(ts,"margin",0),eW(ts,"top",t.top),eW(ts,"left",t.left),eW(ts,"width",t.width),eW(ts,"height",t.height),eW(ts,"opacity","0.8"),eW(ts,"position",eN?"absolute":"fixed"),eW(ts,"zIndex","100000"),eW(ts,"pointerEvents","none"),tJ.ghost=ts,e.appendChild(ts),eW(ts,"transform-origin",tS/parseInt(ts.style.width)*100+"% "+tC/parseInt(ts.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,n=o.options;if(te("dragStart",this,{evt:e}),tJ.eventCanceled){this._onDrop();return}te("setupClone",this),tJ.eventCanceled||((th=e3(tr)).removeAttribute("id"),th.draggable=!1,th.style["will-change"]="",this._hideClone(),e$(th,this.options.chosenClass,!1),tJ.clone=th),o.cloneId=t0(function(){te("clone",o),tJ.eventCanceled||(o.options.removeCloneOnHide||tl.insertBefore(th,tr),o._hideClone(),tt({sortable:o,name:"clone"}))}),t||e$(tr,n.dragClass,!0),t?(tM=!0,o._loopId=setInterval(o._emulateDragOver,50)):(ej(document,"mouseup",o._onDrop),ej(document,"touchend",o._onDrop),ej(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(o,i,tr)),eF(document,"drop",o),eW(tr,"transform","translateZ(0)")),tD=!0,o._dragStartId=t0(o._dragStarted.bind(o,t,e)),eF(document,"selectstart",o),tk=!0,eO&&eW(document.body,"user-select","none")},_onDragOver:function(e){var t,o,i,n,r=this.el,a=e.target,s=this.options,l=s.group,d=tJ.active,c=tg===l,h=s.sort,u=tv||d,p=this,m=!1;if(!tI){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),a=eH(a,s.draggable,r,!0),z("dragOver"),tJ.eventCanceled)return m;if(tr.contains(e.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return N(!1);if(tM=!1,d&&!s.disabled&&(c?h||(i=ta!==tl):tv===this||(this.lastPutMode=tg.checkPull(this,d,tr,e))&&l.checkPut(this,d,tr,e))){if(n="vertical"===this._getDirection(e,a),t=eV(tr),z("dragOverValid"),tJ.eventCanceled)return m;if(i)return ta=tl,O(),this._hideClone(),z("revert"),tJ.eventCanceled||(td?tl.insertBefore(tr,td):tl.appendChild(tr)),N(!0);var f=eZ(r,s.draggable);if(!f||(g=n,v=eV(eZ(this.el,this.options.draggable)),(g?e.clientX>v.right+10||e.clientX<=v.right&&e.clientY>v.bottom&&e.clientX>=v.left:e.clientX>v.right&&e.clientY>v.top||e.clientX<=v.right&&e.clientY>v.bottom+10)&&!f.animated)){if(f===tr)return N(!1);if(f&&r===e.target&&(a=f),a&&(o=eV(a)),!1!==tZ(tl,r,tr,t,a,o,e,!!a))return O(),f&&f.nextSibling?r.insertBefore(tr,f.nextSibling):r.appendChild(tr),ta=r,I(),N(!0)}else if(f&&(w=n,y=eV(eJ(this.el,0,this.options,!0)),w?e.clientX<y.left-10||e.clientY<y.top&&e.clientX<y.right:e.clientY<y.top-10||e.clientY<y.bottom&&e.clientX<y.left)){var b=eJ(r,0,s,!0);if(b===tr)return N(!1);if(o=eV(a=b),!1!==tZ(tl,r,tr,t,a,o,e,!1))return O(),r.insertBefore(tr,b),ta=r,I(),N(!0)}else if(a.parentNode===r){o=eV(a);var g,v,w,y,E,x,S=0,C=tr.parentNode!==r,k=!t$(tr.animated&&tr.toRect||t,a.animated&&a.toRect||o,n),A=n?"top":"left",_=eG(a,"top","top")||eG(tr,"top","top"),T=_?_.scrollTop:void 0;if(tA!==a&&(x=o[A],tz=!1,tO=!k&&s.invertSwap||C),0!==(S=function(e,t,o,i,n,r,a,s){var l=i?e.clientY:e.clientX,d=i?o.height:o.width,c=i?o.top:o.left,h=i?o.bottom:o.right,u=!1;if(!a){if(s&&tT<d*n){if(!tz&&(1===t_?l>c+d*r/2:l<h-d*r/2)&&(tz=!0),tz)u=!0;else if(1===t_?l<c+tT:l>h-tT)return-t_}else if(l>c+d*(1-n)/2&&l<h-d*(1-n)/2)return eK(tr)<eK(t)?1:-1}return(u=u||a)&&(l<c+d*r/2||l>h-d*r/2)?l>c+d/2?1:-1:0}(e,a,o,n,k?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,tO,tA===a))){var L=eK(tr);do L-=S,E=ta.children[L];while(E&&("none"===eW(E,"display")||E===ts))}if(0===S||E===a)return N(!1);tA=a,t_=S;var D=a.nextElementSibling,M=!1,R=tZ(tl,r,tr,t,a,o,e,M=1===S);if(!1!==R)return(1===R||-1===R)&&(M=1===R),tI=!0,setTimeout(tQ,30),O(),M&&!D?r.appendChild(tr):a.parentNode.insertBefore(tr,M?D:a),_&&e2(_,0,T-_.scrollTop),ta=tr.parentNode,void 0===x||tO||(tT=Math.abs(x-eV(a)[A])),I(),N(!0)}if(r.contains(tr))return N(!1)}return!1}function z(s,l){te(s,p,e_({evt:e,isOwner:c,axis:n?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:h,fromSortable:u,target:a,completed:N,onMove:function(o,i){return tZ(tl,r,tr,t,o,eV(o),e,i)},changed:I},l))}function O(){z("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function N(t){return z("dragOverCompleted",{insertion:t}),t&&(c?d._hideClone():d._showClone(p),p!==u&&(e$(tr,tv?tv.options.ghostClass:d.options.ghostClass,!1),e$(tr,s.ghostClass,!0)),tv!==p&&p!==tJ.active?tv=p:p===tJ.active&&tv&&(tv=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){z("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a!==tr||tr.animated)&&(a!==r||a.animated)||(tA=null),s.dragoverBubble||e.rootEl||a===document||(tr.parentNode[e4]._isOutsideThisEl(e.target),t||tV(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function I(){tm=eK(tr),tb=eK(tr,s.draggable),tt({sortable:p,name:"change",toEl:r,newIndex:tm,newDraggableIndex:tb,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){ej(document,"mousemove",this._onTouchMove),ej(document,"touchmove",this._onTouchMove),ej(document,"pointermove",this._onTouchMove),ej(document,"dragover",tV),ej(document,"mousemove",tV),ej(document,"touchmove",tV)},_offUpEvents:function(){var e=this.el.ownerDocument;ej(e,"mouseup",this._onDrop),ej(e,"touchend",this._onDrop),ej(e,"pointerup",this._onDrop),ej(e,"touchcancel",this._onDrop),ej(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;if(tm=eK(tr),tb=eK(tr,o.draggable),te("drop",this,{evt:e}),ta=tr&&tr.parentNode,tm=eK(tr),tb=eK(tr,o.draggable),tJ.eventCanceled){this._nulling();return}tD=!1,tO=!1,tz=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),t1(this.cloneId),t1(this._dragStartId),this.nativeDraggable&&(ej(document,"drop",this),ej(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),eO&&eW(document.body,"user-select",""),eW(tr,"transform",""),e&&(tk&&(e.cancelable&&e.preventDefault(),o.dropBubble||e.stopPropagation()),ts&&ts.parentNode&&ts.parentNode.removeChild(ts),(tl===ta||tv&&"clone"!==tv.lastPutMode)&&th&&th.parentNode&&th.parentNode.removeChild(th),tr&&(this.nativeDraggable&&ej(tr,"dragend",this),tK(tr),tr.style["will-change"]="",tk&&!tD&&e$(tr,tv?tv.options.ghostClass:this.options.ghostClass,!1),e$(tr,this.options.chosenClass,!1),tt({sortable:this,name:"unchoose",toEl:ta,newIndex:null,newDraggableIndex:null,originalEvent:e}),tl!==ta?(tm>=0&&(tt({rootEl:ta,name:"add",toEl:ta,fromEl:tl,originalEvent:e}),tt({sortable:this,name:"remove",toEl:ta,originalEvent:e}),tt({rootEl:ta,name:"sort",toEl:ta,fromEl:tl,originalEvent:e}),tt({sortable:this,name:"sort",toEl:ta,originalEvent:e})),tv&&tv.save()):tm!==tp&&tm>=0&&(tt({sortable:this,name:"update",toEl:ta,originalEvent:e}),tt({sortable:this,name:"sort",toEl:ta,originalEvent:e})),tJ.active&&((null==tm||-1===tm)&&(tm=tp,tb=tf),tt({sortable:this,name:"end",toEl:ta,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){te("nulling",this),tl=tr=ta=ts=td=th=tc=tu=tw=ty=tk=tm=tb=tp=tf=tA=t_=tv=tg=tJ.dragged=tJ.ghost=tJ.clone=tJ.active=null,tB.forEach(function(e){e.checked=!0}),tB.length=tE=tx=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":tr&&(this._onDragOver(e),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault());break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,n=o.length,r=this.options;i<n;i++)eH(e=o[i],r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||function(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(e,t){var n=i.children[t];eH(n,this.options.draggable,i,!1)&&(o[e]=n)},this),t&&this.captureAnimationState(),e.forEach(function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return eH(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=e7.modifyOption(this,e,t);void 0!==i?o[e]=i:o[e]=t,"group"===e&&tY(o)},destroy:function(){te("destroy",this);var e=this.el;e[e4]=null,ej(e,"mousedown",this._onTapStart),ej(e,"touchstart",this._onTapStart),ej(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(ej(e,"dragover",this),ej(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),tR.splice(tR.indexOf(this.el),1),this.el=null},_hideClone:function(){tu||(te("hideClone",this),tJ.eventCanceled||(eW(th,"display","none"),this.options.removeCloneOnHide&&th.parentNode&&th.parentNode.removeChild(th),tu=!0))},_showClone:function(e){if("clone"!==e.lastPutMode){this._hideClone();return}if(tu){if(te("showClone",this),tJ.eventCanceled)return;tr.parentNode!=tl||this.options.group.revertClone?td?tl.insertBefore(th,td):tl.appendChild(th):tl.insertBefore(th,tr),this.options.group.revertClone&&this.animate(tr,th),eW(th,"display",""),tu=!1}}},tF&&eF(document,"touchmove",function(e){(tJ.active||tD)&&e.cancelable&&e.preventDefault()}),tJ.utils={on:eF,off:ej,css:eW,find:eX,is:function(e,t){return!!eH(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:e5,closest:eH,toggleClass:e$,clone:e3,index:eK,nextTick:t0,cancelNextTick:t1,detectDirection:tq,getChild:eJ},tJ.get=function(e){return e[e4]},tJ.mount=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(e));e.utils&&(tJ.utils=e_(e_({},tJ.utils),e.utils)),e7.mount(e)})},tJ.create=function(e,t){return new tJ(e,t)},tJ.version="1.15.0";var t5,t2,t3,t4=[];e5(function(e,t,o,i){if(t.scroll){var n,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,d=eU();t2!==o&&(t2=o,t4.forEach(function(e){clearInterval(e.pid)}),t4=[],t5=t.scroll,n=t.scrollFn,!0===t5&&(t5=e0(o,!0)));var c=0,h=t5;do{var u=h,p=eV(u),m=p.top,f=p.bottom,b=p.left,g=p.right,v=p.width,w=p.height,y=void 0,E=void 0,x=u.scrollWidth,S=u.scrollHeight,C=eW(u),k=u.scrollLeft,A=u.scrollTop;u===d?(y=v<x&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(y=v<x&&("auto"===C.overflowX||"scroll"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY));var _=y&&(Math.abs(g-r)<=s&&k+v<x)-(Math.abs(b-r)<=s&&!!k),T=E&&(Math.abs(f-a)<=s&&A+w<S)-(Math.abs(m-a)<=s&&!!A);if(!t4[c])for(var L=0;L<=c;L++)t4[L]||(t4[L]={});(t4[c].vx!=_||t4[c].vy!=T||t4[c].el!==u)&&(t4[c].el=u,t4[c].vx=_,t4[c].vy=T,clearInterval(t4[c].pid),(0!=_||0!=T)&&(t4[c].pid=setInterval((function(){i&&0===this.layer&&tJ.active._onTouchMove(t3);var t=t4[this.layer].vy?t4[this.layer].vy*l:0,o=t4[this.layer].vx?t4[this.layer].vx*l:0;("function"!=typeof n||"continue"===n.call(tJ.dragged.parentNode[e4],o,t,e,t3,t4[this.layer].el))&&e2(t4[this.layer].el,o,t)}).bind({layer:c}),24))),c++}while(t.bubbleScroll&&h!==d&&(h=e0(h,!1)))}},30);var t8=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,n=e.activeSortable,r=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=o||n;a();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),l&&!l.el.contains(c)&&(r("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function t6(){}function t7(){}t6.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=eJ(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:t8},eL(t6,{pluginName:"revertOnSpill"}),t7.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:t8},eL(t7,{pluginName:"removeOnSpill"});let t9=(e,t=0,o=!1)=>{let i=null;if("function"!=typeof e)throw TypeError("Expected a function for first argument");return(...n)=>{clearTimeout(i),o&&!i&&e(...n),i=setTimeout(()=>{i=null,o||e(...n)},t)}},oe=document.createElement("template");oe.innerHTML=`
  <style>
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
  </style>

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
`;class ot extends HTMLElement{#k;#A;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oe.content.cloneNode(!0))),this.#k=this.shadowRoot.querySelector("files-dropzone"),this.#A=this.shadowRoot.querySelector('form[name="import-form"]'),this.shadowRoot.adoptedStyleSheets=ep}connectedCallback(){this.#k.addEventListener("files-dropzone-drop-accepted",this.#_),this.#A.addEventListener("submit",this.#T)}disconnectedCallback(){this.#k.removeEventListener("files-dropzone-drop-accepted",this.#_),this.#A.removeEventListener("submit",this.#T)}#_=e=>{let{acceptedFiles:t=[]}=e.detail,o=t[0];if(!o)return;let i=new FileReader;i.readAsText(o,"utf-8"),i.onload=this.#L};async #D(e){if(!Array.isArray(e)||0===e.length)return alert("Invalid file or no feeds found.");let{value:t=[]}=await ew();for(let o of e){let e=!!t.find(e=>e.url===o.url),{url:i,title:n}=o,r=eS(i);!e&&r&&await eE({url:i,title:n})}this.dispatchEvent(new Event("feeds-imported",{bubbles:!0,composed:!0}))}#L=async e=>{try{let{result:t}=e.target;this.#D(JSON.parse(t))}catch(e){alert("The file is not valid.")}};#T=async e=>{e.preventDefault();let t=new FormData(e.target),o=t.get("import-data");try{this.#D(JSON.parse(o))}catch(e){alert("The data is not valid.")}}}window.customElements.get("import-feeds")||window.customElements.define("import-feeds",ot);let oo=document.createElement("template");oo.innerHTML=`
  <style>
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
  </style>

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

    <web-share class="${!function(e={}){return Array.isArray((e={files:null,...e}).files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e.files):"share"in navigator}()?"d-none":""}">
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
`;class oi extends HTMLElement{#M;#R;#z;#O;#N;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oo.content.cloneNode(!0))),this.#R=this.shadowRoot.getElementById("exportCode"),this.#z=this.shadowRoot.querySelector("clipboard-copy"),this.#O=this.shadowRoot.querySelector("web-share"),this.#N=this.shadowRoot.getElementById("downloadButton"),this.shadowRoot.adoptedStyleSheets=ep}static get observedAttributes(){return["feeds"]}attributeChangedCallback(e,t,o){if("feeds"===e&&t!==o&&this.feeds){let e=this.#I();this.#R.innerHTML=e,this.#z.value=e,this.#O.shareText=e}}connectedCallback(){this.#N.addEventListener("click",this.#B)}disconnectedCallback(){this.#N.removeEventListener("click",this.#B)}get feeds(){return this.getAttribute("feeds")}set feeds(e){this.setAttribute("feeds",e)}#I(){let e="";try{e=JSON.stringify(JSON.parse(this.feeds),null,2)}catch(e){console.error(e)}return e}#F(e){let t=JSON.stringify(e,null,2),o=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(o),n=document.createElement("a");n.href=i,n.download="rss-feeds-export.json",n.click(),URL.revokeObjectURL(i)}#B=async()=>{let{value:e=[]}=await ew();this.#F(e)}}window.customElements.get("export-feeds")||window.customElements.define("export-feeds",oi);let on=document.createElement("template");on.innerHTML=`
  <style>
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
  </style>

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

  <modal-element id="importDialog" static-backdrop>
    <h2 slot="header" class="h5 m-0">Import feeds</h2>
    <import-feeds></import-feeds>
  </modal-element>

  <modal-element id="exportDialog">
    <h2 slot="header" class="h5 m-0">Export feeds</h2>
    <export-feeds></export-feeds>
  </modal-element>
`;class or extends HTMLElement{#j;#P;#H;#q;#$;#W;#Y;#X;#U;#V;#G;#J;#Z;#K;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(on.content.cloneNode(!0))),this.#j=!1,this.shadowRoot.adoptedStyleSheets=ep,this.#P=this.shadowRoot.getElementById("feedsContainer"),this.#H=this.shadowRoot.getElementById("feedsList"),this.#q=this.shadowRoot.getElementById("editBtn"),this.#$=this.shadowRoot.getElementById("importBtn"),this.#W=this.shadowRoot.getElementById("importAltBtn"),this.#Y=this.shadowRoot.getElementById("exportBtn"),this.#X=this.shadowRoot.getElementById("searchInput"),this.#U=this.shadowRoot.getElementById("searchClearBtn"),this.#V=this.shadowRoot.getElementById("importDialog"),this.#G=this.shadowRoot.getElementById("exportDialog"),this.#J=this.shadowRoot.querySelector("import-feeds"),this.#Z=this.shadowRoot.querySelector("export-feeds"),this.#K=this.shadowRoot.getElementById("noFeedsDisclaimer")}async connectedCallback(){let{value:e=[]}=await ew();e.forEach(e=>this.#Q(e)),this.#ee(),this.#H.addEventListener("click",this.#et),this.#q.addEventListener("click",this.#eo),this.#W.addEventListener("click",this.#ei),this.#$.addEventListener("click",this.#ei),this.#Y.addEventListener("click",this.#en),this.#X.addEventListener("input",this.#er),this.#U.addEventListener("click",this.#ea),this.#V.addEventListener("me-open",this.#es),this.#G.addEventListener("me-open",this.#el),this.#G.addEventListener("me-close",this.#ed),this.addEventListener("feeds-imported",this.#ec),document.addEventListener("feeds-updated",this.#eh),new tJ(this.#H,{animation:150,handle:".sort-handler",onEnd:async e=>{let t=Array.prototype.map.call(e.to.querySelectorAll("li"),e=>({url:e.getAttribute("data-url"),title:e.getAttribute("data-title")||""}));await ey(t,!1)}})}disconnectedCallback(){this.#H.removeEventListener("click",this.#et),this.#q.removeEventListener("click",this.#eo),this.#$.removeEventListener("click",this.#ei),this.#W.removeEventListener("click",this.#ei),this.#Y.removeEventListener("click",this.#en),this.#X.removeEventListener("input",this.#er),this.#U.removeEventListener("click",this.#ea),this.#V.removeEventListener("me-open",this.#es),this.#G.removeEventListener("me-open",this.#el),this.#G.removeEventListener("me-close",this.#ed),this.removeEventListener("feeds-imported",this.#ec),document.removeEventListener("feeds-updated",this.#eh)}#eu=(e="")=>{let t=this.#H.querySelectorAll("[data-url]");0!==t.length&&t.forEach(t=>{let o=(t.getAttribute("data-url")||"").toLowerCase(),i=(t.getAttribute("data-title")||"").toLowerCase(),n=e.trim().toLowerCase();t.hidden=!(o.includes(n)||i.includes(n))})};#ep=t9(this.#eu,250);#er=e=>{let t=e.target.value;return this.#U.classList.toggle("d-none",!t),this.#ep(t)};#ea=()=>{this.#X.value="",this.#X.dispatchEvent(new Event("input"))};#eo=e=>{this.#j=!this.#j,e.currentTarget.classList.toggle("active"),this.shadowRoot.querySelectorAll(".sort-handler, .delete-button").forEach(e=>{e.hidden=!e.hidden})};#ei=()=>{this.#V.open=!0};#en=()=>{this.#G.open=!0};#es=()=>{try{this.#J.shadowRoot.querySelector("a-tab-group").selectTabByIndex(0),this.#J.shadowRoot.querySelector("textarea").value=""}catch{}};#el=async()=>{let{value:e=[]}=await ew();this.#Z.setAttribute("feeds",JSON.stringify(e))};#ed=()=>{this.#Z.removeAttribute("feeds")};#ec=()=>{this.#V.open=!1};#eh=e=>{if("delete"===e.detail.action&&this.#em(e.detail.feed),"create"===e.detail.action&&(this.#Q(e.detail.feed),this.#X.value&&(this.#X.value="",this.#eu(""))),"update"===e.detail.action){let{url:t,title:o}=e.detail.feed,i=this.#H.querySelector(`[data-url="${t}"]`);if(i){let e=i.querySelector(".link-content");i.setAttribute("data-title",o||""),e&&(e.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t)}}};#et=e=>{let t=e.target,o=t.closest("button.delete-button"),i=t.closest("a.link");if(!i&&!o)return;let n=t.closest("li"),r=n.getAttribute("data-url");o&&window.confirm(`Are you sure you want to delete feed "${r}"?`)&&ex(r),i&&(e.preventDefault(),document.querySelector("feed-reader").feedUrl=r)};#Q(e){let{url:t,title:o}=e,i=document.createElement("a");i.className="link text-decoration-none d-flex align-items-center h-100",i.style.flex="1",i.style.minWidth=0,i.style.color="inherit",i.href=t;let n=document.createElement("div");n.className="text-truncate link-content",n.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t;let r=document.createElement("button");r.type="button",r.title="Delete feed",r.hidden=!this.#j,r.className="delete-button btn btn-default text-danger p-0",r.style.lineHeight="1",r.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
      <span class="visually-hidden">Delete</span>
    `;let a=document.createElement("li");a.className="list-group-item p-0 d-flex justify-content-between align-items-center",a.style.height="var(--list-item-height)",a.setAttribute("data-url",t||""),a.setAttribute("data-title",o||"");let s=document.createElement("div");s.hidden=!this.#j,s.className="sort-handler text-primary",s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/>
      </svg>
      <span class="visually-hidden">Reorder</span>
    `,i.appendChild(n),a.appendChild(s),a.appendChild(i),a.appendChild(r),this.#H.appendChild(a),this.#ee()}#em(e){let t=this.#H.querySelector(`[data-url="${e.url}"]`);t&&t.remove(),this.#ee()}async #ee(){let{value:e=[]}=await ew();this.#P.classList.toggle("d-none",0===e.length),this.#K.classList.toggle("d-none",e.length>0)}}window.customElements.get("feeds-list")||window.customElements.define("feeds-list",or);let oa=new Map,os=async(e,t={})=>{let o=oa.get(e);if(o)return o;let i=await fetch("https://api.rss2json.com/v1/api.json?rss_url="+e,t);if(!i.ok)throw Error("Error fetching data");let n=await i.json();return oa.set(e,n),n},ol=document.createElement("template");ol.innerHTML=`
  <style>
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
  </style>

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
`;class od extends HTMLElement{#ef;#eb;#eg;#ev;#ew;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ol.content.cloneNode(!0))),this.#ef=this.shadowRoot.getElementById("spinner"),this.#eb=this.shadowRoot.querySelector("modal-element"),this.#eg=this.#eb.querySelector("#feedTitle"),this.#ev=this.shadowRoot.getElementById("feedsViewer"),this.#ew=this.shadowRoot.getElementById("error"),this.shadowRoot.adoptedStyleSheets=ep}static get observedAttributes(){return["feed-url"]}attributeChangedCallback(e){"feed-url"===e&&(this.feedUrl?this.#ey(this.feedUrl):this.#eE())}connectedCallback(){this.#eb.addEventListener("me-close",this.#ex)}disconnectedCallback(){this.#eb.removeEventListener("me-close",this.#ex)}get feedUrl(){return this.getAttribute("feed-url")}set feedUrl(e){e?this.setAttribute("feed-url",e):this.removeAttribute("feed-url")}#ey(e){this.#eb.open=!0,this.#eS(e)}#eE(){this.#eb.open=!1}#ex=()=>{e&&e.abort(),this.#eC(),this.feedUrl=null};#eC(){this.#ev.querySelectorAll(".card").forEach(e=>e.remove()),this.#eg.innerHTML="",this.#ef.classList.add("d-none"),this.#ew.classList.add("d-none")}async #eS(t){this.#ef.classList.remove("d-none"),e=new AbortController;try{let o=await os(t,{signal:e.signal}),{value:i=[]}=await ew(),n=i.find(e=>e.url===t);n&&!n.title&&await eE({url:t,title:o.feed.title||""}),this.#eg.textContent=o.feed.title||t,o.items.forEach(e=>{this.#ev.insertAdjacentHTML("beforeend",this.#ek(e))})}catch(e){"AbortError"!==e.name&&(console.error(e),this.#eg.textContent="",this.#ew.classList.remove("d-none"))}finally{this.#ef.classList.add("d-none")}}#ek(e){let{link:t,title:o,description:i,author:n,pubDate:r,thumbnail:a}=e,s="";try{s=new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}).format(new Date(r))}catch{s="-"}return`
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
    `}}window.customElements.get("feed-reader")||window.customElements.define("feed-reader",od),document.adoptedStyleSheets=ep}();
//# sourceMappingURL=index.d68bb80d.js.map
