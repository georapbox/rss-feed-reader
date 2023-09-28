let e;function t(e){return e&&e.__esModule?e.default:e}var o,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=i.parcelRequire3ec4;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},i.parcelRequire3ec4=r),Object.defineProperty({},"ClipboardCopy",{get:function(){return h},set:void 0,enumerable:!0,configurable:!0});let s="clipboard-copy",l="success",d="error",c=document.createElement("template");c.innerHTML=`
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
`;class h extends HTMLElement{#e=null;#t;#o;#i;#n;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(c.content.cloneNode(!0))),this.#t=this.shadowRoot.querySelector("button"),this.#o=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#n=this.shadowRoot.querySelector('slot[name="error"]')}static get observedAttributes(){return["disabled"]}connectedCallback(){this.#a("value"),this.#a("from"),this.#a("disabled"),this.#t&&this.#t.addEventListener("click",this.#r)}disconnectedCallback(){this.#t&&this.#t.removeEventListener("click",this.#r)}attributeChangedCallback(e){"disabled"===e&&this.#t&&(this.#t.disabled=this.disabled,this.#t.setAttribute("aria-disabled",this.disabled),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(e){this.setAttribute("feedback-duration",e)}get value(){return this.getAttribute("value")}set value(e){this.setAttribute("value",e)}get from(){return this.getAttribute("from")}set from(e){this.setAttribute("from",e)}async #s(){if(this.value||this.from)try{let e="";if(this.value)e=this.value;else if(this.from){let t=("getRootNode"in Element.prototype?this.#t.getRootNode({composed:!0}):this.#t.ownerDocument).querySelector(this.from);if(!t)return;e=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:t instanceof HTMLAnchorElement&&t.hasAttribute("href")?t.href:t.textContent}await navigator.clipboard.writeText(e),this.#l(l),this.dispatchEvent(new CustomEvent(`${s}-success`,{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.#l(d),this.dispatchEvent(new CustomEvent(`${s}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}#r=e=>{e.preventDefault(),this.disabled||this.#e||this.#s()};#l(e){this.#o.hidden=!0,this.#i.hidden=e!==l,this.#n.hidden=e!==d,this.#t&&(this.#t.part.remove("button--success"),this.#t.part.remove("button--error"),this.#t.part.add(`button--${e}`)),clearTimeout(this.#e),this.#e=setTimeout(()=>{this.#o.hidden=!1,this.#i.hidden=!0,this.#n.hidden=!0,this.#t&&this.#t.part.remove(`button--${e}`),this.#e=null},this.feedbackDuration)}#a(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=s){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,h)}}function u(e,t,o){if(!t.has(e))throw TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}function p(e,t){var o;return(o=u(e,t,"get")).get?o.get.call(e):o.value}function f(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function m(e,t,o){f(e,t),t.set(e,o)}function b(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=o}}(e,u(e,t,"set"),o),o}function g(e,t,o){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return o}function v(e,t){f(e,t),t.add(e)}h.defineCustomElement(),Object.defineProperty({},"WebShare",{get:function(){return _},set:tq,enumerable:!0,configurable:!0});const w=document.createElement("template"),y=String.raw;w.innerHTML=y`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var E=new WeakMap,x=new WeakMap,k=new WeakMap,S=new WeakMap,C=new WeakMap,A=new WeakSet,T=new WeakSet;class _ extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){g(this,T,D).call(this,"shareUrl"),g(this,T,D).call(this,"shareTitle"),g(this,T,D).call(this,"shareText"),g(this,T,D).call(this,"shareFiles"),g(this,T,D).call(this,"disabled"),p(this,E)&&p(this,E).addEventListener("slotchange",p(this,C)),p(this,x)&&p(this,x).addEventListener("click",p(this,S))}disconnectedCallback(){p(this,E)&&p(this,E).removeEventListener("slotchange",p(this,C)),p(this,x)&&p(this,x).removeEventListener("click",p(this,S))}attributeChangedCallback(e){"disabled"===e&&p(this,x)&&(p(this,x).disabled=this.disabled,p(this,x).setAttribute("aria-disabled",this.disabled),p(this,x).part&&p(this,x).part.contains("button")&&p(this,x).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return p(this,k)}set shareFiles(e){b(this,k,e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if("AbortError"===e.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,_)}constructor(){super(),v(this,A),v(this,T),m(this,E,{writable:!0,value:void 0}),m(this,x,{writable:!0,value:void 0}),m(this,k,{writable:!0,value:null}),m(this,S,{writable:!0,value:e=>{e.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),m(this,C,{writable:!0,value:e=>{e.target&&"button"===e.target.name&&(p(this,x)&&p(this,x).removeEventListener("click",p(this,S)),b(this,x,g(this,A,L).call(this)),p(this,x)&&(p(this,x).addEventListener("click",p(this,S)),"BUTTON"===p(this,x).nodeName||p(this,x).hasAttribute("role")||p(this,x).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(w.content.cloneNode(!0))),b(this,E,this.shadowRoot.querySelector('slot[name="button"]')),b(this,x,g(this,A,L).call(this))}}function L(){return p(this,E)?p(this,E).assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot")):null}function D(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}_.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return $},set:void 0,enumerable:!0,configurable:!0});let M=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),R=[".DS_Store","Thumbs.db"],z=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=t.split(".").pop().toLowerCase(),i=M.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e},O=(e,t)=>{let o=z(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},I=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),N=async e=>{let t=[],o=await I(e);for(;o.length>0;)t.push(...o),o=await I(e);return t},F=e=>new Promise((t,o)=>{e.file(o=>t(O(o,e.fullPath)),o)}),B=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e){if(e.isFile){let o=await F(e);-1===R.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await N(e.createReader()))}}return t},j=async e=>{let t=[];for(let o of e)-1===R.indexOf(o.name)&&t.push(O(o));return t},P=async e=>e.dataTransfer?e.dataTransfer.items?await B(e.dataTransfer.items):await j(e.dataTransfer.files):await j(e.target.files),H="files-dropzone",W="TOO_MANY_FILES",q=document.createElement("template");q.innerHTML=`
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
`;class $ extends HTMLElement{#t;#e;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(q.content.cloneNode(!0))),this.#t=this.shadowRoot.getElementById("fileInput"),this.#e=this.shadowRoot.getElementById("dropzoneEl")}static get observedAttributes(){return["accept","disabled","multiple","no-keyboard"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?this.#e.removeAttribute("tabindex"):this.#e.setAttribute("tabindex","0")),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple),"no-keyboard"===e&&t!==o&&this.#e&&(this.noKeyboard?this.#e.removeAttribute("tabindex"):this.#e.setAttribute("tabindex","0"))}connectedCallback(){this.#o("accept"),this.#o("disabled"),this.#o("maxFiles"),this.#o("maxSize"),this.#o("minSize"),this.#o("multiple"),this.#o("noClick"),this.#o("noDrag"),this.#o("noKeyboard"),this.#o("autoFocus"),this.#o("noStyle"),this.#t.addEventListener("change",this.#n),this.#e.addEventListener("dragenter",this.#a),this.#e.addEventListener("dragover",this.#l),this.#e.addEventListener("dragleave",this.#i),this.#e.addEventListener("drop",this.#r),this.#e.addEventListener("click",this.#d),this.#e.addEventListener("keyup",this.#s),this.autoFocus&&this.#e.focus()}disconnectedCallback(){this.#t.removeEventListener("change",this.#n),this.#e.removeEventListener("dragenter",this.#a),this.#e.removeEventListener("dragover",this.#l),this.#e.removeEventListener("dragleave",this.#i),this.#e.removeEventListener("drop",this.#r),this.#e.removeEventListener("click",this.#d),this.#e.removeEventListener("keyup",this.#s)}get accept(){return this.getAttribute("accept")}set accept(e){this.setAttribute("accept",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){e?this.setAttribute("multiple",""):this.removeAttribute("multiple")}get noClick(){return this.hasAttribute("no-click")}set noClick(e){e?this.setAttribute("no-click",""):this.removeAttribute("no-click")}get noDrag(){return this.hasAttribute("no-drag")}set noDrag(e){e?this.setAttribute("no-drag",""):this.removeAttribute("no-drag")}get noKeyboard(){return this.hasAttribute("no-keyboard")}set noKeyboard(e){e?this.setAttribute("no-keyboard",""):this.removeAttribute("no-keyboard")}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){e?this.setAttribute("auto-focus",""):this.removeAttribute("auto-focus")}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){e?this.setAttribute("no-style",""):this.removeAttribute("no-style")}#n=async e=>{try{this.#c(await P(e))}catch(e){this.dispatchEvent(new CustomEvent(`${H}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#a=()=>{this.disabled||this.noDrag||this.dispatchEvent(new Event(`${H}-dragenter`,{bubbles:!0,composed:!0}))};#l=e=>{if(e.preventDefault(),this.disabled||this.noDrag){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover"),this.dispatchEvent(new Event(`${H}-dragover`,{bubbles:!0,composed:!0}))};#i=()=>{this.disabled||this.noDrag||(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"),this.dispatchEvent(new Event(`${H}-dragleave`,{bubbles:!0,composed:!0})))};#r=async e=>{if(!this.disabled&&!this.noDrag){e.preventDefault(),this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover");try{this.#c(await P(e))}catch(e){this.dispatchEvent(new CustomEvent(`${H}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#d=()=>{this.disabled||this.noClick||this.#t.click()};#s=e=>{this.disabled||this.noKeyboard||" "!==e.key&&"Enter"!==e.key||this.#t.click()};#c(e){if(!Array.isArray(e)||!e.length)return;let t=[],o=[],i=e.length;if(!this.multiple&&i>1)for(let t of e)o.push({file:t,errors:[{code:W,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let t of e)o.push({file:t,errors:[{code:W,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of e){let e=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(i,this.accept),n=i.size>this.maxSize,a=i.size<this.minSize;if(!e||n||a){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),n&&t.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),a&&t.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:t})}else t.push(i)}this.dispatchEvent(new CustomEvent(`${H}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:o}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${H}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${H}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#t.value=this.#t.defaultValue}openFileDialog(){this.disabled||this.#t.click()}#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=H){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,$)}}function X(e,t,o){if(!t.has(e))throw TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}function Y(e,t){var o;return(o=X(e,t,"get")).get?o.get.call(e):o.value}function U(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function V(e,t,o){U(e,t),t.set(e,o)}function Z(e,t,o){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return o}function G(e,t){U(e,t),t.add(e)}$.defineCustomElement();const J="a-tab",K=document.createElement("template");let Q=0;K.innerHTML='\n  <style>\n    .tab {\n      display: inline-flex;\n      align-items: center;\n      gap: 0.5rem;\n      padding: 0.375rem 0.75rem;\n      white-space: nowrap;\n      cursor: pointer;\n    }\n\n    :host([disabled]) .tab {\n      opacity: 0.7;\n      cursor: not-allowed;\n    }\n\n    :host([selected]) .tab {\n      color: var(--selected-tab-color);\n      background-color: var(--selected-tab-bg-color);\n    }\n\n    .tab__close {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 0.25rem;\n      font-size: inherit;\n      cursor: pointer;\n    }\n  </style>\n\n  <div part="base" class="tab">\n    <slot></slot>\n  </div>\n';var ee=new WeakMap,et=new WeakSet;class eo extends HTMLElement{static get observedAttributes(){return["selected","disabled","closable"]}connectedCallback(){Z(this,et,ei).call(this,"selected"),Z(this,et,ei).call(this,"disabled"),Z(this,et,ei).call(this,"closable"),this.id||(this.id="a-tab-generated-"+Q++),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled?-1:0)}disconnectedCallback(){let e=this.shadowRoot.querySelector(".tab__close");e?.removeEventListener("click",Y(this,ee))}attributeChangedCallback(e,t,o){if("selected"===e&&t!==o&&this.setAttribute("aria-selected",this.selected),"disabled"===e&&t!==o&&(this.setAttribute("aria-disabled",this.disabled),this.setAttribute("tabindex",this.disabled?-1:0)),"closable"===e&&t!==o){if(this.closable){let e=document.createElement("span");e.className="tab__close",e.part="close-tab",e.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot.querySelector(".tab").appendChild(e),e.addEventListener("click",Y(this,ee))}else{let e=this.shadowRoot.querySelector(".tab__close");e?.removeEventListener("click",Y(this,ee)),e?.remove()}}}get selected(){return this.hasAttribute("selected")}set selected(e){e?this.setAttribute("selected",""):this.removeAttribute("selected")}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get closable(){return this.hasAttribute("closable")}set closable(e){e?this.setAttribute("closable",""):this.removeAttribute("closable")}constructor(){super(),G(this,et),V(this,ee,{writable:!0,value:e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`${J}-close`,{bubbles:!0,composed:!0,detail:{tabId:this.id}}))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(K.content.cloneNode(!0)))}}function ei(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}window.customElements&&!window.customElements.get(J)&&window.customElements.define(J,eo);const en="a-tab-panel",ea=document.createElement("template");let er=0;ea.innerHTML='\n  <div part="base" class="tab-panel">\n    <slot></slot>\n  </div>\n';class es extends HTMLElement{connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id="a-tab-panel-generated-"+er++)}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ea.content.cloneNode(!0)))}}window.customElements&&!window.customElements.get(en)&&window.customElements.define(en,es);const el="a-tab-group",ed="a-tab",ec="a-tab-panel",eh="bottom",eu="start",ep="auto",ef="manual",em=document.createElement("template");em.innerHTML=`
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
    :host([placement="${eh}"]) .tab-group {
      flex-direction: column;
    }

    :host([placement="${eh}"]) .tab-group__nav {
      order: 1;
    }

    /* placement="start" */
    :host([placement="${eu}"]) .tab-group {
      flex-direction: row;
    }

    :host([placement="${eu}"]) .tab-group__tabs {
      flex-direction: column;
      align-items: flex-start;
    }

    :host([placement="${eu}"]) .tab-group__panels {
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
`;var eb=new WeakMap,eg=new WeakSet,ev=new WeakSet,ew=new WeakSet,ey=new WeakSet,eE=new WeakSet,ex=new WeakSet,ek=new WeakSet,eS=new WeakSet,eC=new WeakSet,eA=new WeakSet,eT=new WeakMap,e_=new WeakMap,eL=new WeakMap,eD=new WeakMap,eM=new WeakMap,eR=new WeakSet,ez=new WeakSet,eO=new WeakSet,eI=new WeakSet;class eN extends HTMLElement{static get observedAttributes(){return["placement","no-scroll-controls"]}connectedCallback(){var e;Z(this,eI,eG).call(this,"placement"),Z(this,eI,eG).call(this,"noScrollControls"),Z(this,eI,eG).call(this,"scrollDistance"),Z(this,eI,eG).call(this,"activation");let t=this.shadowRoot.querySelector("slot[name=tab]"),o=this.shadowRoot.querySelector("slot[name=panel]"),i=this.shadowRoot.querySelector(".tab-group__tabs"),n=this.shadowRoot.querySelector(".tab-group__nav"),a=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));t.addEventListener("slotchange",Y(this,eM)),o.addEventListener("slotchange",Y(this,eM)),i.addEventListener("click",Y(this,e_)),i.addEventListener("keydown",Y(this,eT)),a.forEach(e=>e.addEventListener("click",Y(this,eL))),this.addEventListener(`${ed}-close`,Y(this,eD)),"ResizeObserver"in window&&(e=new ResizeObserver(e=>{let t=e?.[0],o=t?.target,i=o?.scrollWidth>(t?.borderBoxSize?.[0]?.inlineSize||o?.clientWidth);a.forEach(e=>e.hidden=!i),n.classList.toggle("tab-group__nav--scrollable",i)}),function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=o}}(this,X(this,eb,"set"),e)),Z(this,eO,eZ).call(this),this.hidden=0===Z(this,eE,eH).call(this).length,this.placement=this.placement||"top"}disconnectedCallback(){let e=this.shadowRoot.querySelector("slot[name=tab]"),t=this.shadowRoot.querySelector("slot[name=panel]"),o=this.shadowRoot.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));e.removeEventListener("slotchange",Y(this,eM)),t.removeEventListener("slotchange",Y(this,eM)),o.removeEventListener("click",Y(this,e_)),o.removeEventListener("keydown",Y(this,eT)),i.forEach(e=>e.removeEventListener("click",Y(this,eL))),this.removeEventListener(`${ed}-close`,Y(this,eD)),Z(this,ev,eB).call(this)}attributeChangedCallback(e,t,o){"placement"===e&&t!==o&&Z(this,eO,eZ).call(this),"no-scroll-controls"===e&&t!==o&&Z(this,eO,eZ).call(this)}get placement(){return this.getAttribute("placement")}set placement(e){this.setAttribute("placement",e)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(e){e?this.setAttribute("no-scroll-controls",""):this.removeAttribute("no-scroll-controls")}get scrollDistance(){return Math.abs(this.getAttribute("scroll-distance"))||200}set scrollDistance(e){this.setAttribute("scroll-distance",Math.abs(e)||200)}get activation(){return this.getAttribute("activation")||ep}set activation(e){this.setAttribute("activation",e||ep)}selectTabByIndex(e){let t=Z(this,eE,eH).call(this)[e];!t||t.disabled||t.selected||(Z(this,ez,eV).call(this,t),this.dispatchEvent(new CustomEvent(`${ed}-select`,{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}selectTab(e){!e||e.disabled||e.selected||(Z(this,ez,eV).call(this,e),e.focus(),this.dispatchEvent(new CustomEvent(`${ed}-select`,{bubbles:!0,composed:!0,detail:{tabId:e.id}})))}constructor(){super(),G(this,eg),G(this,ev),G(this,ew),G(this,ey),G(this,eE),G(this,ex),G(this,ek),G(this,eS),G(this,eC),G(this,eA),G(this,eR),G(this,ez),G(this,eO),G(this,eI),V(this,eb,{writable:!0,value:void 0}),V(this,eT,{writable:!0,value:e=>{let t;if(e.target.tagName.toLowerCase()===ed&&!e.altKey){switch(e.code){case"ArrowLeft":case"ArrowUp":t=Z(this,eC,eX).call(this),this.activation===ef?t.focus():this.selectTab(t);break;case"ArrowRight":case"ArrowDown":t=Z(this,eA,eY).call(this),this.activation===ef?t.focus():this.selectTab(t);break;case"Home":t=Z(this,ek,eq).call(this),this.activation===ef?t.focus():this.selectTab(t);break;case"End":t=Z(this,eS,e$).call(this),this.activation===ef?t.focus():this.selectTab(t);break;case"Enter":case"Space":t=e.target,this.selectTab(t);break;default:return}e.preventDefault()}}}),V(this,e_,{writable:!0,value:e=>{let t=e.target.closest(ed);this.selectTab(t)}}),V(this,eL,{writable:!0,value:e=>{let t=e.target.closest(".tab-group__scroll-button");if(!t)return;let o=this.shadowRoot.querySelector(".tab-group__tabs"),i=t.classList.contains("tab-group__scroll-button--start")?eu:"end";o.scrollBy({left:i===eu?-this.scrollDistance:this.scrollDistance})}}),V(this,eD,{writable:!0,value:e=>{let t=e.target,o=Z(this,ex,eW).call(this,t);t&&o.tagName.toLowerCase()===ec&&(o.remove(),t.remove())}}),V(this,eM,{writable:!0,value:()=>{Z(this,ew,ej).call(this),Z(this,eO,eZ).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(em.content.cloneNode(!0)))}}function eF(){if(!Y(this,eb))return;let e=this.shadowRoot.querySelector(".tab-group__tabs");Y(this,eb).unobserve(e),Y(this,eb).observe(e)}function eB(){Y(this,eb)&&Y(this,eb).disconnect()}function ej(){let e=Z(this,eE,eH).call(this);this.hidden=0===e.length,e.forEach(e=>{let t=e.nextElementSibling;if(!t||t.tagName.toLowerCase()!==ec)return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)});let t=e.find(e=>e.selected&&!e.disabled)||e.find(e=>!e.disabled);Z(this,ez,eV).call(this,t)}function eP(){return Array.from(this.querySelectorAll(ec))}function eH(){return Array.from(this.querySelectorAll(ed))}function eW(e){let t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}function eq(){return Z(this,eE,eH).call(this).find(e=>!e.disabled)}function e$(){let e=Z(this,eE,eH).call(this);for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return e[t]}function eX(){let e=Z(this,eE,eH).call(this),t=this.activation===ef?e.findIndex(e=>e.matches(":focus"))-1:e.findIndex(e=>e.selected)-1;for(;e[(t+e.length)%e.length].disabled;)t--;return e[(t+e.length)%e.length]}function eY(){let e=Z(this,eE,eH).call(this),t=this.activation===ef?e.findIndex(e=>e.matches(":focus"))+1:e.findIndex(e=>e.selected)+1;for(;e[t%e.length].disabled;)t++;return e[t%e.length]}function eU(){let e=Z(this,eE,eH).call(this),t=Z(this,ey,eP).call(this);e.forEach(e=>e.selected=!1),t.forEach(e=>e.hidden=!0)}function eV(e){if(Z(this,eR,eU).call(this),!e)return;let t=Z(this,ex,eW).call(this,e);t&&(e.selected=!0,t.hidden=!1)}function eZ(){let e=this.shadowRoot.querySelector(".tab-group__nav"),t=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));this.noScrollControls||this.placement===eu||"end"===this.placement?(Z(this,ev,eB).call(this),t.forEach(e=>e.hidden=!0),e.classList.remove("tab-group__nav--scrollable")):(Z(this,eg,eF).call(this),t.forEach(e=>e.hidden=!1))}function eG(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}window.customElements&&!window.customElements.get(el)&&window.customElements.define(el,eN),function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),o=new WeakMap,i="object"==typeof DOMException?Error:DOMException,n=Object.defineProperty,a=Array.prototype.forEach,r=/@import.+?;?$/gm,s=CSSStyleSheet.prototype;s.replace=function(){return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."))},s.replaceSync=function(){throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var l=new WeakMap,d=new WeakMap,c=new WeakMap,h=new WeakMap,u=T.prototype;u.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},u.replaceSync=function(e){if(A(this),"string"==typeof e){var t,o=this;l.get(o).textContent=((t=e.replace(r,""))!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()),h.set(o,[]),d.get(o).forEach(function(e){e.isConnected()&&C(o,S(o,e))})}},n(u,"cssRules",{configurable:!0,enumerable:!0,get:function(){return A(this),l.get(this).sheet.cssRules}}),n(u,"media",{configurable:!0,enumerable:!0,get:function(){return A(this),l.get(this).sheet.media}}),["addRule","deleteRule","insertRule","removeRule"].forEach(function(e){u[e]=function(){var t=this;A(t);var o=arguments;h.get(t).push({method:e,args:o}),d.get(t).forEach(function(i){if(i.isConnected()){var n=S(t,i).sheet;n[e].apply(n,o)}});var i=l.get(t).sheet;return i[e].apply(i,o)}}),n(T,Symbol.hasInstance,{configurable:!0,value:x});var p={childList:!0,subtree:!0},f=new WeakMap,m=new WeakMap,b=new WeakMap,g=new WeakMap;if(z.prototype={isConnected:function(){var e,t=m.get(this);return t instanceof Document?"loading"!==t.readyState:"isConnected"in(e=t.host)?e.isConnected:document.contains(e)},connect:function(){var e=M(this);g.get(this).observe(e,p),b.get(this).length>0&&R(this),D(e,function(e){_(e).connect()})},disconnect:function(){g.get(this).disconnect()},update:function(e){var t=this,o=m.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Iterator getter is not callable.");if(!e.every(x))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Failed to convert value to 'CSSStyleSheet'");if(e.some(k))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Can't adopt non-constructed stylesheets");t.sheets=e;var i=b.get(t),n=e.filter(function(t,o){return e.indexOf(t)===o});i.filter(function(e){return -1===n.indexOf(e)}).forEach(function(e){(function(e){e.parentNode.removeChild(e)})(S(e,t)),c.get(e).delete(t),d.set(e,d.get(e).filter(function(e){return e!==t}))}),b.set(t,n),t.isConnected()&&n.length>0&&R(t)}},window.CSSStyleSheet=T,L(Document),"ShadowRoot"in window){L(ShadowRoot);var v=Element.prototype,w=v.attachShadow;v.attachShadow=function(e){var t=w.call(this,e);return"closed"===e.mode&&o.set(this,t),t}}var y=_(document);y.isConnected()?y.connect():document.addEventListener("DOMContentLoaded",y.connect.bind(y))}function E(e){return e.shadowRoot||o.get(e)}function x(e){return"object"==typeof e&&(u.isPrototypeOf(e)||s.isPrototypeOf(e))}function k(e){return"object"==typeof e&&s.isPrototypeOf(e)}function S(e,t){return c.get(e).get(t)}function C(e,t){requestAnimationFrame(function(){t.textContent=l.get(e).textContent,h.get(e).forEach(function(e){return t.sheet[e.method].apply(t.sheet,e.args)})})}function A(e){if(!l.has(e))throw TypeError("Illegal invocation")}function T(){var e=document.createElement("style");t.body.appendChild(e),l.set(this,e),d.set(this,[]),c.set(this,new WeakMap),h.set(this,[])}function _(e){var t=f.get(e);return t||(t=new z(e),f.set(e,t)),t}function L(e){n(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return _(this).sheets},set:function(e){_(this).update(e)}})}function D(e,t){for(var o=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,function(e){return E(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),i=void 0;i=o.nextNode();)t(E(i))}function M(e){var t=m.get(e);return t instanceof Document?t.body:t}function R(e){var t=document.createDocumentFragment(),o=b.get(e),i=g.get(e),n=M(e);i.disconnect(),o.forEach(function(o){var i;t.appendChild(S(o,e)||(i=document.createElement("style"),c.get(o).set(e,i),d.get(o).push(e),i))}),n.insertBefore(t,null),i.observe(n,p),o.forEach(function(t){C(t,S(t,e))})}function z(t){var o=this;o.sheets=[],m.set(o,t),b.set(o,[]),g.set(o,new MutationObserver(function(t,i){if(!document){i.disconnect();return}t.forEach(function(t){e||a.call(t.addedNodes,function(e){e instanceof Element&&D(e,function(e){_(e).connect()})}),a.call(t.removedNodes,function(t){t instanceof Element&&(t instanceof HTMLStyleElement&&b.get(o).some(function(e){return S(e,o)})&&R(o),e||D(t,function(e){_(e).disconnect()}))})})}))}}();var eJ={};eJ=new URL(r("kyEFX").resolve("4z142"),import.meta.url).toString();var eK={};eK=new URL(r("kyEFX").resolve("iVxim"),import.meta.url).toString();const eQ=[t(eJ),t(eK)],e0=[];for(let e=0;e<eQ.length;e+=1)e0.push(new CSSStyleSheet);function e1(e){return new Promise(function(t,o){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return o(e.error)}})}function e5(){if(!t$){var e,t,o;e="keyval",(t=indexedDB.open("keyval-store")).onupgradeneeded=function(){return t.result.createObjectStore(e)},o=e1(t),t$=function(t,i){return o.then(function(o){return i(o.transaction(e,t).objectStore(e))})}}return t$}!async function(){let e=await Promise.all(eQ.map(async e=>{let t=await fetch(e);return t.text()}));for(let t=0;t<e.length;t+=1)await e0[t].replace(e[t]);document.body.style.visibility="visible"}();const e2="rss-reader/feeds",e4=async e=>{try{return{value:await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e5();return t("readonly",function(t){return e1(t.get(e))})}(e),error:void 0}}catch(e){return{value:void 0,error:e}}},e8=async(e,t)=>{try{return await function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e5();return o("readwrite",function(o){return o.put(t,e),e1(o.transaction)})}(e,t),{error:void 0}}catch(e){return{error:e}}},e3=async()=>e4(e2),e6=async(e,t=!0)=>{if(!Array.isArray(e))return;let{error:o}=await e8(e2,e);return!o&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"set",feeds:e}})),{error:o}},e7=async(e,t=!0)=>{let{value:o=[]}=await e3(),i=o.find(t=>t.url===e.url),n="";i?(i.url=e.url,i.title=e.title,n="update"):(o.push(e),n="create");let{error:a}=await e8(e2,o);return!a&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:n,feed:e}})),{error:a}},e9=async(e,t=!0)=>{let{value:o=[]}=await e3(),i=o.filter(t=>t.url!==e),{error:n}=await e8(e2,i);return!n&&t&&(0===i.length&&await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e5();return t("readwrite",function(t){return t.delete(e),e1(t.transaction)})}(e2),document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"delete",feed:{url:e}}}))),{error:n}},te=e=>{try{return new URL(e),!0}catch{return!1}},tt=document.createElement("template");tt.innerHTML=`
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
`;class to extends HTMLElement{#h;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tt.content.cloneNode(!0))),this.shadowRoot.adoptedStyleSheets=e0,this.#h=this.shadowRoot.querySelector('form[name="addFeedForm"]')}connectedCallback(){this.#h.addEventListener("submit",this.#u)}disconnectedCallback(){this.#h.addEventListener("submit",this.#u)}async #u(e){e.preventDefault();let t=e.target["feed-url"],o=t.value.trim(),{value:i=[]}=await e3(),n=!!i.find(e=>e.url===o),a=te(o);!n&&a&&await e7({url:o,title:""}),t.value=""}}function ti(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function tn(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ti(Object(o),!0).forEach(function(t){var i;i=o[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ti(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function ta(e){return(ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function tr(){return(tr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}function ts(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}window.customElements.get("add-feed")||window.customElements.define("add-feed",to);var tl=ts(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),td=ts(/Edge/i),tc=ts(/firefox/i),th=ts(/safari/i)&&!ts(/chrome/i)&&!ts(/android/i),tu=ts(/iP(ad|od|hone)/i),tp=ts(/chrome/i)&&ts(/android/i),tf={capture:!1,passive:!1};function tm(e,t,o){e.addEventListener(t,o,!tl&&tf)}function tb(e,t,o){e.removeEventListener(t,o,!tl&&tf)}function tg(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){}return!1}}function tv(e,t,o,i){if(e){var n;o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&tg(e,t):tg(e,t))||i&&e===o)return e;if(e===o)break}while(e=(n=e).host&&n!==document&&n.host.nodeType?n.host:n.parentNode)}return null}var tw=/\s+/g;function ty(e,t,o){if(e&&t){if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(tw," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(tw," ")}}}function tE(e,t,o){var i=e&&e.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}}function tx(e,t){var o="";if("string"==typeof e)o=e;else do{var i=tE(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode))var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function tk(e,t,o){if(e){var i=e.getElementsByTagName(t),n=0,a=i.length;if(o)for(;n<a;n++)o(i[n],n);return i}return[]}function tS(){return document.scrollingElement||document.documentElement}function tC(e,t,o,i,n){if(e.getBoundingClientRect||e===window){if(e!==window&&e.parentNode&&e!==tS()?(r=(a=e.getBoundingClientRect()).top,s=a.left,l=a.bottom,d=a.right,c=a.height,h=a.width):(r=0,s=0,l=window.innerHeight,d=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(t||o)&&e!==window&&(n=n||e.parentNode,!tl))do if(n&&n.getBoundingClientRect&&("none"!==tE(n,"transform")||o&&"static"!==tE(n,"position"))){var a,r,s,l,d,c,h,u=n.getBoundingClientRect();r-=u.top+parseInt(tE(n,"border-top-width")),s-=u.left+parseInt(tE(n,"border-left-width")),l=r+a.height,d=s+a.width;break}while(n=n.parentNode)if(i&&e!==window){var p=tx(n||e),f=p&&p.a,m=p&&p.d;p&&(r/=m,s/=f,h/=f,c/=m,l=r+c,d=s+h)}return{top:r,left:s,bottom:l,right:d,width:h,height:c}}}function tA(e,t,o){for(var i=tM(e,!0),n=tC(e)[t];i;){var a=tC(i)[o];if(!("top"===o||"left"===o?n>=a:n<=a))return i;if(i===tS())break;i=tM(i,!1)}return!1}function tT(e,t,o,i){for(var n=0,a=0,r=e.children;a<r.length;){if("none"!==r[a].style.display&&r[a]!==oT.ghost&&(i||r[a]!==oT.dragged)&&tv(r[a],o.draggable,e,!1)){if(n===t)return r[a];n++}a++}return null}function t_(e,t){for(var o=e.lastElementChild;o&&(o===oT.ghost||"none"===tE(o,"display")||t&&!tg(o,t));)o=o.previousElementSibling;return o||null}function tL(e,t){var o=0;if(!e||!e.parentNode)return -1;for(;e=e.previousElementSibling;)"TEMPLATE"!==e.nodeName.toUpperCase()&&e!==oT.clone&&(!t||tg(e,t))&&o++;return o}function tD(e){var t=0,o=0,i=tS();if(e)do{var n=tx(e),a=n.a,r=n.d;t+=e.scrollLeft*a,o+=e.scrollTop*r}while(e!==i&&(e=e.parentNode))return[t,o]}function tM(e,t){if(!e||!e.getBoundingClientRect)return tS();var o=e,i=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=tE(o);if(o.clientWidth<o.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!o.getBoundingClientRect||o===document.body)return tS();if(i||t)return o;i=!0}}while(o=o.parentNode)return tS()}function tR(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function tz(e,t){return function(){if(!tX){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),tX=setTimeout(function(){tX=void 0},t)}}}function tO(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function tI(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}var tN="Sortable"+new Date().getTime(),tF=[],tB={initializeByDefault:!0},tj={mount:function(e){for(var t in tB)!tB.hasOwnProperty(t)||t in e||(e[t]=tB[t]);tF.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),tF.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var n=e+"Global";tF.forEach(function(i){t[i.pluginName]&&(t[i.pluginName][n]&&t[i.pluginName][n](tn({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](tn({sortable:t},o)))})},initializePlugins:function(e,t,o,i){for(var n in tF.forEach(function(i){var n=i.pluginName;if(e.options[n]||i.initializeByDefault){var a=new i(e,t,e.options);a.sortable=e,a.options=e.options,e[n]=a,tr(o,a.defaults)}}),e.options)if(e.options.hasOwnProperty(n)){var a=this.modifyOption(e,n,e.options[n]);void 0!==a&&(e.options[n]=a)}},getEventProperties:function(e,t){var o={};return tF.forEach(function(i){"function"==typeof i.eventProperties&&tr(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return tF.forEach(function(n){e[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[t]&&(i=n.optionListeners[t].call(e[n.pluginName],o))}),i}},tP=["evt"],tH=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,n=function(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(o,tP);tj.pluginEvent.bind(oT)(e,t,tn({dragEl:tY,parentEl:tU,ghostEl:tV,rootEl:tZ,nextEl:tG,lastDownEl:tJ,cloneEl:tK,cloneHidden:tQ,dragStarted:oo,putSortable:t8,activeSortable:oT.active,originalEvent:i,oldIndex:t0,oldDraggableIndex:t5,newIndex:t1,newDraggableIndex:t2,hideGhostForTarget:ok,unhideGhostForTarget:oS,cloneNowHidden:function(){tQ=!0},cloneNowShown:function(){tQ=!1},dispatchSortableEvent:function(e){tW({sortable:t,name:e,originalEvent:i})}},n))};function tW(e){!function(e){var t=e.sortable,o=e.rootEl,i=e.name,n=e.targetEl,a=e.cloneEl,r=e.toEl,s=e.fromEl,l=e.oldIndex,d=e.newIndex,c=e.oldDraggableIndex,h=e.newDraggableIndex,u=e.originalEvent,p=e.putSortable,f=e.extraEventProperties;if(t=t||o&&o[tN]){var m,b=t.options,g="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||tl||td?(m=document.createEvent("Event")).initEvent(i,!0,!0):m=new CustomEvent(i,{bubbles:!0,cancelable:!0}),m.to=r||o,m.from=s||o,m.item=n||o,m.clone=a,m.oldIndex=l,m.newIndex=d,m.oldDraggableIndex=c,m.newDraggableIndex=h,m.originalEvent=u,m.pullMode=p?p.lastPutMode:void 0;var v=tn(tn({},f),tj.getEventProperties(i,t));for(var w in v)m[w]=v[w];o&&o.dispatchEvent(m),b[g]&&b[g].call(t,m)}}(tn({putSortable:t8,cloneEl:tK,targetEl:tY,rootEl:tZ,oldIndex:t0,oldDraggableIndex:t5,newIndex:t1,newDraggableIndex:t2},e))}var tq,t$,tX,tY,tU,tV,tZ,tG,tJ,tK,tQ,t0,t1,t5,t2,t4,t8,t3,t6,t7,t9,oe,ot,oo,oi,on,oa,or,os=!1,ol=!1,od=[],oc=!1,oh=!1,ou=[],op=!1,of=[],om="undefined"!=typeof document,ob=td||tl?"cssFloat":"float",og=om&&!tp&&!tu&&"draggable"in document.createElement("div"),ov=function(){if(om){if(tl)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),ow=function(e,t){var o=tE(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),n=tT(e,0,t),a=tT(e,1,t),r=n&&tE(n),s=a&&tE(a),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+tC(n).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+tC(a).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&r.float&&"none"!==r.float){var c="left"===r.float?"left":"right";return a&&("both"===s.clear||s.clear===c)?"vertical":"horizontal"}return n&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=i&&"none"===o[ob]||a&&"none"===o[ob]&&l+d>i)?"vertical":"horizontal"},oy=function(e,t,o){var i=o?e.left:e.top,n=o?e.right:e.bottom,a=o?e.width:e.height,r=o?t.left:t.top,s=o?t.right:t.bottom,l=o?t.width:t.height;return i===r||n===s||i+a/2===r+l/2},oE=function(e,t){var o;return od.some(function(i){var n=i[tN].options.emptyInsertThreshold;if(!(!n||t_(i))){var a=tC(i),r=e>=a.left-n&&e<=a.right+n,s=t>=a.top-n&&t<=a.bottom+n;if(r&&s)return o=i}}),o},ox=function(e){function t(e,o){return function(i,n,a,r){var s=i.options.group.name&&n.options.group.name&&i.options.group.name===n.options.group.name;if(null==e&&(o||s))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,n,a,r),o)(i,n,a,r);var l=(o?i:n).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var o={},i=e.group;i&&"object"==ta(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},ok=function(){!ov&&tV&&tE(tV,"display","none")},oS=function(){!ov&&tV&&tE(tV,"display","")};om&&!tp&&document.addEventListener("click",function(e){if(ol)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ol=!1,!1},!0);var oC=function(e){if(tY){var t=oE((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[tN]._onDragOver(o)}}},oA=function(e){tY&&tY.parentNode[tN]._isOutsideThisEl(e.target)};function oT(e,t){if(!(e&&e.nodeType&&1===e.nodeType))throw"Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(e));this.el=e,this.options=t=tr({},t),e[tN]=this;var o,i,n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ow(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==oT.supportPointer&&"PointerEvent"in window&&!th,emptyInsertThreshold:5};for(var a in tj.initializePlugins(this,e,n),n)a in t||(t[a]=n[a]);for(var r in ox(t),this)"_"===r.charAt(0)&&"function"==typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!t.forceFallback&&og,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?tm(e,"pointerdown",this._onTapStart):(tm(e,"mousedown",this._onTapStart),tm(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(tm(e,"dragover",this),tm(e,"dragenter",this)),od.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),tr(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==tE(e,"display")&&e!==oT.ghost){i.push({target:e,rect:tC(e)});var t=tn({},i[i.length-1].rect);if(e.thisAnimationDuration){var o=tx(e,!0);o&&(t.top-=o.f,t.left-=o.e)}e.fromRect=t}})},addAnimationState:function(e){i.push(e)},removeAnimationState:function(e){i.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o)}return -1}(i,{target:e}),1)},animateAll:function(e){var t=this;if(!this.options.animation){clearTimeout(o),"function"==typeof e&&e();return}var n=!1,a=0;i.forEach(function(e){var o,i=0,r=e.target,s=r.fromRect,l=tC(r),d=r.prevFromRect,c=r.prevToRect,h=e.rect,u=tx(r,!0);u&&(l.top-=u.f,l.left-=u.e),r.toRect=l,r.thisAnimationDuration&&tR(d,l)&&!tR(s,l)&&(h.top-l.top)/(h.left-l.left)==(s.top-l.top)/(s.left-l.left)&&(o=t.options,i=Math.sqrt(Math.pow(d.top-h.top,2)+Math.pow(d.left-h.left,2))/Math.sqrt(Math.pow(d.top-c.top,2)+Math.pow(d.left-c.left,2))*o.animation),tR(l,s)||(r.prevFromRect=s,r.prevToRect=l,i||(i=t.options.animation),t.animate(r,h,l,i)),i&&(n=!0,a=Math.max(a,i),clearTimeout(r.animationResetTimer),r.animationResetTimer=setTimeout(function(){r.animationTime=0,r.prevFromRect=null,r.fromRect=null,r.prevToRect=null,r.thisAnimationDuration=null},i),r.thisAnimationDuration=i)}),clearTimeout(o),n?o=setTimeout(function(){"function"==typeof e&&e()},a):"function"==typeof e&&e(),i=[]},animate:function(e,t,o,i){if(i){tE(e,"transition",""),tE(e,"transform","");var n=tx(this.el),a=n&&n.a,r=n&&n.d,s=(t.left-o.left)/(a||1),l=(t.top-o.top)/(r||1);e.animatingX=!!s,e.animatingY=!!l,tE(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=e.offsetWidth,tE(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),tE(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){tE(e,"transition",""),tE(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},i)}}}))}function o_(e,t,o,i,n,a,r,s){var l,d,c=e[tN],h=c.options.onMove;return!window.CustomEvent||tl||td?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=n||t,l.relatedRect=a||tC(t),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),h&&(d=h.call(c,l,r)),d}function oL(e){e.draggable=!1}function oD(){op=!1}function oM(e){return setTimeout(e,0)}function oR(e){return clearTimeout(e)}oT.prototype={constructor:oT,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(oi=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,tY):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,n=i.preventOnFilter,a=e.type,r=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(r||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=i.filter;if(function(e){of.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var i=t[o];i.checked&&of.push(i)}}(o),!(tY||/mousedown|pointerdown/.test(a)&&0!==e.button||i.disabled||l.isContentEditable||!this.nativeDraggable&&th&&s&&"SELECT"===s.tagName.toUpperCase()||(s=tv(s,i.draggable,o,!1))&&s.animated)&&tJ!==s){if(t0=tL(s),t5=tL(s,i.draggable),"function"==typeof d){if(d.call(this,e,s,this)){tW({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),tH("filter",t,{evt:e}),n&&e.cancelable&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(i){if(i=tv(l,i.trim(),o,!1))return tW({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),tH("filter",t,{evt:e}),!0}))){n&&e.cancelable&&e.preventDefault();return}(!i.handle||tv(l,i.handle,o,!1))&&this._prepareDragStart(e,r,s)}}},_prepareDragStart:function(e,t,o){var i,n=this,a=n.el,r=n.options,s=a.ownerDocument;if(o&&!tY&&o.parentNode===a){var l=tC(o);if(tZ=a,tU=(tY=o).parentNode,tG=tY.nextSibling,tJ=o,t4=r.group,oT.dragged=tY,oe=(t3={target:tY,clientX:(t||e).clientX,clientY:(t||e).clientY}).clientX-l.left,ot=t3.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,tY.style["will-change"]="all",i=function(){if(tH("delayEnded",n,{evt:e}),oT.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!tc&&n.nativeDraggable&&(tY.draggable=!0),n._triggerDragStart(e,t),tW({sortable:n,name:"choose",originalEvent:e}),ty(tY,r.chosenClass,!0)},r.ignore.split(",").forEach(function(e){tk(tY,e.trim(),oL)}),tm(s,"dragover",oC),tm(s,"mousemove",oC),tm(s,"touchmove",oC),tm(s,"mouseup",n._onDrop),tm(s,"touchend",n._onDrop),tm(s,"touchcancel",n._onDrop),tc&&this.nativeDraggable&&(this.options.touchStartThreshold=4,tY.draggable=!0),tH("delayStart",this,{evt:e}),!r.delay||r.delayOnTouchOnly&&!t||this.nativeDraggable&&(td||tl))i();else{if(oT.eventCanceled){this._onDrop();return}tm(s,"mouseup",n._disableDelayedDrag),tm(s,"touchend",n._disableDelayedDrag),tm(s,"touchcancel",n._disableDelayedDrag),tm(s,"mousemove",n._delayedDragTouchMoveHandler),tm(s,"touchmove",n._delayedDragTouchMoveHandler),r.supportPointer&&tm(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(i,r.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){tY&&oL(tY),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;tb(e,"mouseup",this._disableDelayedDrag),tb(e,"touchend",this._disableDelayedDrag),tb(e,"touchcancel",this._disableDelayedDrag),tb(e,"mousemove",this._delayedDragTouchMoveHandler),tb(e,"touchmove",this._delayedDragTouchMoveHandler),tb(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?tm(document,"pointermove",this._onTouchMove):t?tm(document,"touchmove",this._onTouchMove):tm(document,"mousemove",this._onTouchMove):(tm(tY,"dragend",this),tm(tZ,"dragstart",this._onDragStart));try{document.selection?oM(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(os=!1,tZ&&tY){tH("dragStarted",this,{evt:t}),this.nativeDraggable&&tm(document,"dragover",oA);var o=this.options;e||ty(tY,o.dragClass,!1),ty(tY,o.ghostClass,!0),oT.active=this,e&&this._appendGhost(),tW({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(t6){this._lastX=t6.clientX,this._lastY=t6.clientY,ok();for(var e=document.elementFromPoint(t6.clientX,t6.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(t6.clientX,t6.clientY))!==t;)t=e;if(tY.parentNode[tN]._isOutsideThisEl(e),t)do{if(t[tN]&&t[tN]._onDragOver({clientX:t6.clientX,clientY:t6.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break;e=t}while(t=t.parentNode)oS()}},_onTouchMove:function(e){if(t3){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,n=e.touches?e.touches[0]:e,a=tV&&tx(tV,!0),r=tV&&a&&a.a,s=tV&&a&&a.d,l=tu&&or&&tD(or),d=(n.clientX-t3.clientX+i.x)/(r||1)+(l?l[0]-ou[0]:0)/(r||1),c=(n.clientY-t3.clientY+i.y)/(s||1)+(l?l[1]-ou[1]:0)/(s||1);if(!oT.active&&!os){if(o&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(tV){a?(a.e+=d-(t7||0),a.f+=c-(t9||0)):a={a:1,b:0,c:0,d:1,e:d,f:c};var h="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");tE(tV,"webkitTransform",h),tE(tV,"mozTransform",h),tE(tV,"msTransform",h),tE(tV,"transform",h),t7=d,t9=c,t6=n}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!tV){var e=this.options.fallbackOnBody?document.body:tZ,t=tC(tY,!0,tu,!0,e),o=this.options;if(tu){for(or=e;"static"===tE(or,"position")&&"none"===tE(or,"transform")&&or!==document;)or=or.parentNode;or!==document.body&&or!==document.documentElement?(or===document&&(or=tS()),t.top+=or.scrollTop,t.left+=or.scrollLeft):or=tS(),ou=tD(or)}ty(tV=tY.cloneNode(!0),o.ghostClass,!1),ty(tV,o.fallbackClass,!0),ty(tV,o.dragClass,!0),tE(tV,"transition",""),tE(tV,"transform",""),tE(tV,"box-sizing","border-box"),tE(tV,"margin",0),tE(tV,"top",t.top),tE(tV,"left",t.left),tE(tV,"width",t.width),tE(tV,"height",t.height),tE(tV,"opacity","0.8"),tE(tV,"position",tu?"absolute":"fixed"),tE(tV,"zIndex","100000"),tE(tV,"pointerEvents","none"),oT.ghost=tV,e.appendChild(tV),tE(tV,"transform-origin",oe/parseInt(tV.style.width)*100+"% "+ot/parseInt(tV.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,n=o.options;if(tH("dragStart",this,{evt:e}),oT.eventCanceled){this._onDrop();return}tH("setupClone",this),oT.eventCanceled||((tK=tI(tY)).removeAttribute("id"),tK.draggable=!1,tK.style["will-change"]="",this._hideClone(),ty(tK,this.options.chosenClass,!1),oT.clone=tK),o.cloneId=oM(function(){tH("clone",o),oT.eventCanceled||(o.options.removeCloneOnHide||tZ.insertBefore(tK,tY),o._hideClone(),tW({sortable:o,name:"clone"}))}),t||ty(tY,n.dragClass,!0),t?(ol=!0,o._loopId=setInterval(o._emulateDragOver,50)):(tb(document,"mouseup",o._onDrop),tb(document,"touchend",o._onDrop),tb(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(o,i,tY)),tm(document,"drop",o),tE(tY,"transform","translateZ(0)")),os=!0,o._dragStartId=oM(o._dragStarted.bind(o,t,e)),tm(document,"selectstart",o),oo=!0,th&&tE(document.body,"user-select","none")},_onDragOver:function(e){var t,o,i,n,a=this.el,r=e.target,s=this.options,l=s.group,d=oT.active,c=t4===l,h=s.sort,u=t8||d,p=this,f=!1;if(!op){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),r=tv(r,s.draggable,a,!0),z("dragOver"),oT.eventCanceled)return f;if(tY.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return I(!1);if(ol=!1,d&&!s.disabled&&(c?h||(i=tU!==tZ):t8===this||(this.lastPutMode=t4.checkPull(this,d,tY,e))&&l.checkPut(this,d,tY,e))){if(n="vertical"===this._getDirection(e,r),t=tC(tY),z("dragOverValid"),oT.eventCanceled)return f;if(i)return tU=tZ,O(),this._hideClone(),z("revert"),oT.eventCanceled||(tG?tZ.insertBefore(tY,tG):tZ.appendChild(tY)),I(!0);var m=t_(a,s.draggable);if(!m||(g=n,v=tC(t_(this.el,this.options.draggable)),(g?e.clientX>v.right+10||e.clientX<=v.right&&e.clientY>v.bottom&&e.clientX>=v.left:e.clientX>v.right&&e.clientY>v.top||e.clientX<=v.right&&e.clientY>v.bottom+10)&&!m.animated)){if(m===tY)return I(!1);if(m&&a===e.target&&(r=m),r&&(o=tC(r)),!1!==o_(tZ,a,tY,t,r,o,e,!!r))return O(),m&&m.nextSibling?a.insertBefore(tY,m.nextSibling):a.appendChild(tY),tU=a,N(),I(!0)}else if(m&&(w=n,y=tC(tT(this.el,0,this.options,!0)),w?e.clientX<y.left-10||e.clientY<y.top&&e.clientX<y.right:e.clientY<y.top-10||e.clientY<y.bottom&&e.clientX<y.left)){var b=tT(a,0,s,!0);if(b===tY)return I(!1);if(o=tC(r=b),!1!==o_(tZ,a,tY,t,r,o,e,!1))return O(),a.insertBefore(tY,b),tU=a,N(),I(!0)}else if(r.parentNode===a){o=tC(r);var g,v,w,y,E,x,k=0,S=tY.parentNode!==a,C=!oy(tY.animated&&tY.toRect||t,r.animated&&r.toRect||o,n),A=n?"top":"left",T=tA(r,"top","top")||tA(tY,"top","top"),_=T?T.scrollTop:void 0;if(oi!==r&&(x=o[A],oc=!1,oh=!C&&s.invertSwap||S),0!==(k=function(e,t,o,i,n,a,r,s){var l=i?e.clientY:e.clientX,d=i?o.height:o.width,c=i?o.top:o.left,h=i?o.bottom:o.right,u=!1;if(!r){if(s&&oa<d*n){if(!oc&&(1===on?l>c+d*a/2:l<h-d*a/2)&&(oc=!0),oc)u=!0;else if(1===on?l<c+oa:l>h-oa)return-on}else if(l>c+d*(1-n)/2&&l<h-d*(1-n)/2)return tL(tY)<tL(t)?1:-1}return(u=u||r)&&(l<c+d*a/2||l>h-d*a/2)?l>c+d/2?1:-1:0}(e,r,o,n,C?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,oh,oi===r))){var L=tL(tY);do L-=k,E=tU.children[L];while(E&&("none"===tE(E,"display")||E===tV))}if(0===k||E===r)return I(!1);oi=r,on=k;var D=r.nextElementSibling,M=!1,R=o_(tZ,a,tY,t,r,o,e,M=1===k);if(!1!==R)return(1===R||-1===R)&&(M=1===R),op=!0,setTimeout(oD,30),O(),M&&!D?a.appendChild(tY):r.parentNode.insertBefore(tY,M?D:r),T&&tO(T,0,_-T.scrollTop),tU=tY.parentNode,void 0===x||oh||(oa=Math.abs(x-tC(r)[A])),N(),I(!0)}if(a.contains(tY))return I(!1)}return!1}function z(s,l){tH(s,p,tn({evt:e,isOwner:c,axis:n?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:h,fromSortable:u,target:r,completed:I,onMove:function(o,i){return o_(tZ,a,tY,t,o,tC(o),e,i)},changed:N},l))}function O(){z("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function I(t){return z("dragOverCompleted",{insertion:t}),t&&(c?d._hideClone():d._showClone(p),p!==u&&(ty(tY,t8?t8.options.ghostClass:d.options.ghostClass,!1),ty(tY,s.ghostClass,!0)),t8!==p&&p!==oT.active?t8=p:p===oT.active&&t8&&(t8=null),u===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){z("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(r!==tY||tY.animated)&&(r!==a||r.animated)||(oi=null),s.dragoverBubble||e.rootEl||r===document||(tY.parentNode[tN]._isOutsideThisEl(e.target),t||oC(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),f=!0}function N(){t1=tL(tY),t2=tL(tY,s.draggable),tW({sortable:p,name:"change",toEl:a,newIndex:t1,newDraggableIndex:t2,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){tb(document,"mousemove",this._onTouchMove),tb(document,"touchmove",this._onTouchMove),tb(document,"pointermove",this._onTouchMove),tb(document,"dragover",oC),tb(document,"mousemove",oC),tb(document,"touchmove",oC)},_offUpEvents:function(){var e=this.el.ownerDocument;tb(e,"mouseup",this._onDrop),tb(e,"touchend",this._onDrop),tb(e,"pointerup",this._onDrop),tb(e,"touchcancel",this._onDrop),tb(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;if(t1=tL(tY),t2=tL(tY,o.draggable),tH("drop",this,{evt:e}),tU=tY&&tY.parentNode,t1=tL(tY),t2=tL(tY,o.draggable),oT.eventCanceled){this._nulling();return}os=!1,oh=!1,oc=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),oR(this.cloneId),oR(this._dragStartId),this.nativeDraggable&&(tb(document,"drop",this),tb(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),th&&tE(document.body,"user-select",""),tE(tY,"transform",""),e&&(oo&&(e.cancelable&&e.preventDefault(),o.dropBubble||e.stopPropagation()),tV&&tV.parentNode&&tV.parentNode.removeChild(tV),(tZ===tU||t8&&"clone"!==t8.lastPutMode)&&tK&&tK.parentNode&&tK.parentNode.removeChild(tK),tY&&(this.nativeDraggable&&tb(tY,"dragend",this),oL(tY),tY.style["will-change"]="",oo&&!os&&ty(tY,t8?t8.options.ghostClass:this.options.ghostClass,!1),ty(tY,this.options.chosenClass,!1),tW({sortable:this,name:"unchoose",toEl:tU,newIndex:null,newDraggableIndex:null,originalEvent:e}),tZ!==tU?(t1>=0&&(tW({rootEl:tU,name:"add",toEl:tU,fromEl:tZ,originalEvent:e}),tW({sortable:this,name:"remove",toEl:tU,originalEvent:e}),tW({rootEl:tU,name:"sort",toEl:tU,fromEl:tZ,originalEvent:e}),tW({sortable:this,name:"sort",toEl:tU,originalEvent:e})),t8&&t8.save()):t1!==t0&&t1>=0&&(tW({sortable:this,name:"update",toEl:tU,originalEvent:e}),tW({sortable:this,name:"sort",toEl:tU,originalEvent:e})),oT.active&&((null==t1||-1===t1)&&(t1=t0,t2=t5),tW({sortable:this,name:"end",toEl:tU,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){tH("nulling",this),tZ=tY=tU=tV=tG=tK=tJ=tQ=t3=t6=oo=t1=t2=t0=t5=oi=on=t8=t4=oT.dragged=oT.ghost=oT.clone=oT.active=null,of.forEach(function(e){e.checked=!0}),of.length=t7=t9=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":tY&&(this._onDragOver(e),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault());break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,n=o.length,a=this.options;i<n;i++)tv(e=o[i],a.draggable,this.el,!1)&&t.push(e.getAttribute(a.dataIdAttr)||function(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(e,t){var n=i.children[t];tv(n,this.options.draggable,i,!1)&&(o[e]=n)},this),t&&this.captureAnimationState(),e.forEach(function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return tv(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=tj.modifyOption(this,e,t);void 0!==i?o[e]=i:o[e]=t,"group"===e&&ox(o)},destroy:function(){tH("destroy",this);var e=this.el;e[tN]=null,tb(e,"mousedown",this._onTapStart),tb(e,"touchstart",this._onTapStart),tb(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(tb(e,"dragover",this),tb(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),od.splice(od.indexOf(this.el),1),this.el=null},_hideClone:function(){tQ||(tH("hideClone",this),oT.eventCanceled||(tE(tK,"display","none"),this.options.removeCloneOnHide&&tK.parentNode&&tK.parentNode.removeChild(tK),tQ=!0))},_showClone:function(e){if("clone"!==e.lastPutMode){this._hideClone();return}if(tQ){if(tH("showClone",this),oT.eventCanceled)return;tY.parentNode!=tZ||this.options.group.revertClone?tG?tZ.insertBefore(tK,tG):tZ.appendChild(tK):tZ.insertBefore(tK,tY),this.options.group.revertClone&&this.animate(tY,tK),tE(tK,"display",""),tQ=!1}}},om&&tm(document,"touchmove",function(e){(oT.active||os)&&e.cancelable&&e.preventDefault()}),oT.utils={on:tm,off:tb,css:tE,find:tk,is:function(e,t){return!!tv(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:tz,closest:tv,toggleClass:ty,clone:tI,index:tL,nextTick:oM,cancelNextTick:oR,detectDirection:ow,getChild:tT},oT.get=function(e){return e[tN]},oT.mount=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(e));e.utils&&(oT.utils=tn(tn({},oT.utils),e.utils)),tj.mount(e)})},oT.create=function(e,t){return new oT(e,t)},oT.version="1.15.0";var oz,oO,oI,oN=[];tz(function(e,t,o,i){if(t.scroll){var n,a=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,d=tS();oO!==o&&(oO=o,oN.forEach(function(e){clearInterval(e.pid)}),oN=[],oz=t.scroll,n=t.scrollFn,!0===oz&&(oz=tM(o,!0)));var c=0,h=oz;do{var u=h,p=tC(u),f=p.top,m=p.bottom,b=p.left,g=p.right,v=p.width,w=p.height,y=void 0,E=void 0,x=u.scrollWidth,k=u.scrollHeight,S=tE(u),C=u.scrollLeft,A=u.scrollTop;u===d?(y=v<x&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),E=w<k&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(y=v<x&&("auto"===S.overflowX||"scroll"===S.overflowX),E=w<k&&("auto"===S.overflowY||"scroll"===S.overflowY));var T=y&&(Math.abs(g-a)<=s&&C+v<x)-(Math.abs(b-a)<=s&&!!C),_=E&&(Math.abs(m-r)<=s&&A+w<k)-(Math.abs(f-r)<=s&&!!A);if(!oN[c])for(var L=0;L<=c;L++)oN[L]||(oN[L]={});(oN[c].vx!=T||oN[c].vy!=_||oN[c].el!==u)&&(oN[c].el=u,oN[c].vx=T,oN[c].vy=_,clearInterval(oN[c].pid),(0!=T||0!=_)&&(oN[c].pid=setInterval((function(){i&&0===this.layer&&oT.active._onTouchMove(oI);var t=oN[this.layer].vy?oN[this.layer].vy*l:0,o=oN[this.layer].vx?oN[this.layer].vx*l:0;("function"!=typeof n||"continue"===n.call(oT.dragged.parentNode[tN],o,t,e,oI,oN[this.layer].el))&&tO(oN[this.layer].el,o,t)}).bind({layer:c}),24))),c++}while(t.bubbleScroll&&h!==d&&(h=tM(h,!1)))}},30);var oF=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,n=e.activeSortable,a=e.dispatchSortableEvent,r=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=o||n;r();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),l&&!l.el.contains(c)&&(a("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function oB(){}function oj(){}oB.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=tT(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:oF},tr(oB,{pluginName:"revertOnSpill"}),oj.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:oF},tr(oj,{pluginName:"removeOnSpill"});const oP=(e,t=0,o=!1)=>{let i=null;if("function"!=typeof e)throw TypeError("Expected a function for first argument");return(...n)=>{clearTimeout(i),o&&!i&&e(...n),i=setTimeout(()=>{i=null,o||e(...n)},t)}},oH=document.createElement("template");oH.innerHTML=`
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

    a-tab-group {
      padding-top: 1rem;
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
`;class oW extends HTMLElement{#p;#f;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oH.content.cloneNode(!0))),this.#p=this.shadowRoot.querySelector("files-dropzone"),this.#f=this.shadowRoot.querySelector('form[name="import-form"]'),this.shadowRoot.adoptedStyleSheets=e0}connectedCallback(){this.#p.addEventListener("files-dropzone-drop-accepted",this.#m),this.#f.addEventListener("submit",this.#b)}disconnectedCallback(){this.#p.removeEventListener("files-dropzone-drop-accepted",this.#m),this.#f.removeEventListener("submit",this.#b)}#m=e=>{let{acceptedFiles:t=[]}=e.detail,o=t[0];if(!o)return;let i=new FileReader;i.readAsText(o,"utf-8"),i.onload=this.#g};async #v(e){if(!Array.isArray(e)||0===e.length)return alert("Invalid file or no feeds found.");let{value:t=[]}=await e3();for(let o of e){let e=!!t.find(e=>e.url===o.url),{url:i,title:n}=o,a=te(i);!e&&a&&await e7({url:i,title:n})}this.dispatchEvent(new Event("feeds-imported",{bubbles:!0,composed:!0}))}#g=async e=>{try{let{result:t}=e.target;this.#v(JSON.parse(t))}catch(e){alert("The file is not valid.")}};#b=async e=>{e.preventDefault();let t=new FormData(e.target),o=t.get("import-data");try{this.#v(JSON.parse(o))}catch(e){alert("The data is not valid.")}}}window.customElements.get("import-feeds")||window.customElements.define("import-feeds",oW);const oq=document.createElement("template");oq.innerHTML=`
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

  <div class="p-3">
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
  </div>
`;class o$ extends HTMLElement{#w;#y;#E;#x;#k;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oq.content.cloneNode(!0))),this.#y=this.shadowRoot.getElementById("exportCode"),this.#E=this.shadowRoot.querySelector("clipboard-copy"),this.#x=this.shadowRoot.querySelector("web-share"),this.#k=this.shadowRoot.getElementById("downloadButton"),this.shadowRoot.adoptedStyleSheets=e0}static get observedAttributes(){return["feeds"]}attributeChangedCallback(e,t,o){if("feeds"===e&&t!==o&&this.feeds){let e=this.#S();this.#y.innerHTML=e,this.#E.value=e,this.#x.shareText=e}}connectedCallback(){this.#k.addEventListener("click",this.#C)}disconnectedCallback(){this.#k.removeEventListener("click",this.#C)}get feeds(){return this.getAttribute("feeds")}set feeds(e){this.setAttribute("feeds",e)}#S(){let e="";try{e=JSON.stringify(JSON.parse(this.feeds),null,2)}catch(e){console.error(e)}return e}#A(e){let t=JSON.stringify(e,null,2),o=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(o),n=document.createElement("a");n.href=i,n.download="rss-feeds-export.json",n.click(),URL.revokeObjectURL(i)}#C=async()=>{let{value:e=[]}=await e3();this.#A(e)}}window.customElements.get("export-feeds")||window.customElements.define("export-feeds",o$);const oX=document.createElement("template");oX.innerHTML=`
  <style>
    :host {
      display: block;
      --list-item-height: 64px;
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
      margin: 0 auto;
    }
  </style>

  <div id="feedsContainer" class="d-none">
    <div class="d-flex mb-3">
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

  <modal-dialog id="importDialog" header-title="Import feeds" static-backdrop>
    <import-feeds></import-feeds>
  </modal-dialog>

  <modal-dialog id="exportDialog" header-title="Export feeds">
    <export-feeds></export-feeds>
  </modal-dialog>
`;class oY extends HTMLElement{#T;#_;#L;#D;#M;#R;#z;#O;#I;#N;#F;#B;#j;#P;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oX.content.cloneNode(!0))),this.#T=!1,this.shadowRoot.adoptedStyleSheets=e0,this.#_=this.shadowRoot.getElementById("feedsContainer"),this.#L=this.shadowRoot.getElementById("feedsList"),this.#D=this.shadowRoot.getElementById("editBtn"),this.#M=this.shadowRoot.getElementById("importBtn"),this.#R=this.shadowRoot.getElementById("importAltBtn"),this.#z=this.shadowRoot.getElementById("exportBtn"),this.#O=this.shadowRoot.getElementById("searchInput"),this.#I=this.shadowRoot.getElementById("searchClearBtn"),this.#N=this.shadowRoot.getElementById("importDialog"),this.#F=this.shadowRoot.getElementById("exportDialog"),this.#B=this.shadowRoot.querySelector("import-feeds"),this.#j=this.shadowRoot.querySelector("export-feeds"),this.#P=this.shadowRoot.getElementById("noFeedsDisclaimer")}async connectedCallback(){let{value:e=[]}=await e3();e.forEach(e=>this.#H(e)),this.#W(),this.#L.addEventListener("click",this.#q),this.#D.addEventListener("click",this.#$),this.#R.addEventListener("click",this.#X),this.#M.addEventListener("click",this.#X),this.#z.addEventListener("click",this.#Y),this.#O.addEventListener("input",this.#U),this.#I.addEventListener("click",this.#V),this.#N.addEventListener("modal-dialog-open",this.#Z),this.#F.addEventListener("modal-dialog-open",this.#G),this.#F.addEventListener("modal-dialog-close",this.#J),this.addEventListener("feeds-imported",this.#K),document.addEventListener("feeds-updated",this.#Q),new oT(this.#L,{animation:150,handle:".sort-handler",onEnd:async e=>{let t=Array.prototype.map.call(e.to.querySelectorAll("li"),e=>({url:e.getAttribute("data-url"),title:e.getAttribute("data-title")||""}));await e6(t,!1)}})}disconnectedCallback(){this.#L.removeEventListener("click",this.#q),this.#D.removeEventListener("click",this.#$),this.#M.removeEventListener("click",this.#X),this.#R.removeEventListener("click",this.#X),this.#z.removeEventListener("click",this.#Y),this.#O.removeEventListener("input",this.#U),this.#I.removeEventListener("click",this.#V),this.#N.removeEventListener("modal-dialog-open",this.#Z),this.#F.removeEventListener("modal-dialog-open",this.#G),this.#F.removeEventListener("modal-dialog-close",this.#J),this.removeEventListener("feeds-imported",this.#K),document.removeEventListener("feeds-updated",this.#Q)}#ee=(e="")=>{let t=this.#L.querySelectorAll("[data-url]");0!==t.length&&t.forEach(t=>{let o=(t.getAttribute("data-url")||"").toLowerCase(),i=(t.getAttribute("data-title")||"").toLowerCase(),n=e.trim().toLowerCase();t.hidden=!(o.includes(n)||i.includes(n))})};#et=oP(this.#ee,250);#U=e=>{let t=e.target.value;return this.#I.classList.toggle("d-none",!t),this.#et(t)};#V=()=>{this.#O.value="",this.#O.dispatchEvent(new Event("input"))};#$=e=>{this.#T=!this.#T,e.currentTarget.classList.toggle("active"),this.shadowRoot.querySelectorAll(".sort-handler, .delete-button").forEach(e=>{e.hidden=!e.hidden})};#X=()=>{this.#N.open=!0};#Y=()=>{this.#F.open=!0};#Z=()=>{try{this.#B.shadowRoot.querySelector("a-tab-group").selectTabByIndex(0),this.#B.shadowRoot.querySelector("textarea").value=""}catch{}};#G=async()=>{let{value:e=[]}=await e3();this.#j.setAttribute("feeds",JSON.stringify(e))};#J=()=>{this.#j.removeAttribute("feeds")};#K=()=>{this.#N.open=!1};#Q=e=>{if("delete"===e.detail.action&&this.#eo(e.detail.feed),"create"===e.detail.action&&(this.#H(e.detail.feed),this.#O.value&&(this.#O.value="",this.#ee(""))),"update"===e.detail.action){let{url:t,title:o}=e.detail.feed,i=this.#L.querySelector(`[data-url="${t}"]`);if(i){let e=i.querySelector(".link-content");i.setAttribute("data-title",o||""),e&&(e.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t)}}};#q=e=>{let t=e.target,o=t.closest("button.delete-button"),i=t.closest("a.link");if(!i&&!o)return;let n=t.closest("li"),a=n.getAttribute("data-url");o&&window.confirm(`Are you sure you want to delete feed "${a}"?`)&&e9(a),i&&(e.preventDefault(),document.querySelector("feed-reader").feedUrl=a)};#H(e){let{url:t,title:o}=e,i=document.createElement("a");i.className="link text-decoration-none d-flex align-items-center h-100",i.style.flex="1",i.style.minWidth=0,i.style.color="inherit",i.href=t;let n=document.createElement("div");n.className="text-truncate link-content",n.innerHTML=o?`${o}<br><small class="text-muted">${t}</small>`:t;let a=document.createElement("button");a.type="button",a.title="Delete feed",a.hidden=!this.#T,a.className="delete-button btn btn-default text-danger p-0",a.style.lineHeight="1",a.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
      <span class="visually-hidden">Delete</span>
    `;let r=document.createElement("li");r.className="list-group-item p-0 d-flex justify-content-between align-items-center",r.style.height="var(--list-item-height)",r.setAttribute("data-url",t||""),r.setAttribute("data-title",o||"");let s=document.createElement("div");s.hidden=!this.#T,s.className="sort-handler text-primary",s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/>
      </svg>
      <span class="visually-hidden">Reorder</span>
    `,i.appendChild(n),r.appendChild(s),r.appendChild(i),r.appendChild(a),this.#L.appendChild(r),this.#W()}#eo(e){let t=this.#L.querySelector(`[data-url="${e.url}"]`);t&&t.remove(),this.#W()}async #W(){let{value:e=[]}=await e3();this.#_.classList.toggle("d-none",0===e.length),this.#P.classList.toggle("d-none",e.length>0)}}function oU(e,t,o){if(!t.has(e))throw TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}function oV(e,t){var o;return(o=oU(e,t,"get")).get?o.get.call(e):o.value}function oZ(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function oG(e,t,o){oZ(e,t),t.set(e,o)}function oJ(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=o}}(e,oU(e,t,"set"),o),o}function oK(e,t,o){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return o}function oQ(e,t){oZ(e,t),t.add(e)}window.customElements.get("feeds-list")||window.customElements.define("feeds-list",oY),Object.defineProperty({},"SkeletonPlaceholder",{get:function(){return o6},set:o,enumerable:!0,configurable:!0});const o0=document.createElement("template"),o1=String.raw;o0.innerHTML=o1`
  <style>
    :host {
      --border-radius: 0.25rem;
      --color: #ced4da;
      --wave-color: #e9ecef;
      box-sizing: border-box;
      display: block;
      position: relative;
    }
    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
    [hidden] {
      display: none !important;
    }
    .skeleton {
      display: flex;
      width: 100%;
      height: 100%;
      min-height: 1rem;
    }
    .skeleton__placeholder {
      flex: 1 1 auto;
      background-color: var(--color);
      border-radius: var(--border-radius);
    }
    .skeleton__placeholder--circle {
      border-radius: 50%;
    }
    .skeleton__placeholder--rect {
      border-radius: 0;
    }
    .skeleton__placeholder--pill {
      border-radius: 9999px;
    }
    .skeleton--wave .skeleton__placeholder {
      background-image: linear-gradient(270deg, var(--wave-color), var(--color), var(--color), var(--wave-color));
      background-size: 400% 100%;
      transform: translate3d(0, 0, 0);
      animation: wave-animation 8s ease-in-out infinite;
    }
    .skeleton--fade .skeleton__placeholder {
      animation: fade-animation 2s ease-in-out 0.5s infinite;
    }
    @keyframes wave-animation {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @keyframes fade-animation {
      0% { opacity: 1; }
      50% { opacity: 0.4; }
      100% { opacity: 1; }
    }
  </style>
  <div part="wrapper" class="skeleton" aria-busy="true" aria-live="polite">
    <div part="placeholder" class="skeleton__placeholder"><slot></slot></div>
  </div>
`;var o5=new WeakMap,o2=new WeakMap,o4=new WeakSet,o8=new WeakSet,o3=new WeakSet;class o6 extends HTMLElement{connectedCallback(){oK(this,o3,ie).call(this,"effect"),oK(this,o3,ie).call(this,"variant"),this.effect||(this.effect="none")}static get observedAttributes(){return["effect","variant"]}attributeChangedCallback(e,t,o){"effect"===e&&(oV(this,o5).className=oK(this,o4,o7).call(this,o)),"variant"===e&&(oV(this,o2).className=oK(this,o8,o9).call(this,o))}get effect(){return this.getAttribute("effect")}set effect(e){this.setAttribute("effect",e)}get variant(){return this.getAttribute("variant")}set variant(e){this.setAttribute("variant",e)}static defineCustomElement(e="skeleton-placeholder"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,o6)}constructor(){super(),oQ(this,o4),oQ(this,o8),oQ(this,o3),oG(this,o5,{writable:!0,value:void 0}),oG(this,o2,{writable:!0,value:void 0}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o0.content.cloneNode(!0)),oJ(this,o5,this.shadowRoot.querySelector('[part="wrapper"]')),oJ(this,o2,this.shadowRoot.querySelector('[part="placeholder"]'))}}function o7(e){let t="";switch(e){case"wave":t="skeleton skeleton--wave";break;case"fade":t="skeleton skeleton--fade";break;default:t="skeleton"}return t}function o9(e){let t="";switch(e){case"circle":t="skeleton__placeholder skeleton__placeholder--circle";break;case"rect":t="skeleton__placeholder skeleton__placeholder--rect";break;case"pill":t="skeleton__placeholder skeleton__placeholder--pill";break;default:t="skeleton__placeholder"}return t}function ie(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}o6.defineCustomElement();const it=new Map,io=async(e,t={})=>{let o=it.get(e);if(o)return o;let i=await fetch("https://api.rss2json.com/v1/api.json?rss_url="+e,t);if(!i.ok)throw Error("Error fetching data");let n=await i.json();return it.set(e,n),n},ii=document.createElement("template"),ia=()=>`
    <skeleton-placeholder style="--color: var(--skeleton-color); height: 26px;"></skeleton-placeholder>
  `;ii.innerHTML=`
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

    details[open] summary {
      padding-bottom: 0.5rem;
    }

    details:not([open]):not(.card details):last-child summary {
      margin-bottom: 1rem;
    }
  </style>

  <dialog class="w-100 h-100 mw-100 mh-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
          <div class="d-flex justify-content-between pt-4 pb-3" style="gap: 1.5rem;">
            <h2 id="feedTitle" class="h5 mb-0" style="flex: 1;">
              ${ia()}
            </h2>

            <form method="dialog">
              <button type="submit" class="d-flex align-items-center justify-content-center btn btn-outline-primary p-0" style="width: 36px; height: 36px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <span class="visually-hidden">Close</span>
              </button>
            </form>
          </div>

          <div id="spinner" class="d-none">
            ${Array.from({length:6}).map(()=>`
                  <skeleton-placeholder class="mb-3" style="--color: var(--skeleton-color);">
                    <div class="p-3 d-flex justify-content-between gap-3">
                      <div class="w-100">
                        <skeleton-placeholder effect="fade" class="mb-2" style="--color: var(--skeleton-color); max-width: 500px; height: 26px; filter: brightness(80%);"></skeleton-placeholder>
                        <skeleton-placeholder effect="fade" class="mb-2" style="--color: var(--skeleton-color); max-width: 250px; height: 21px; filter: brightness(80%);"></skeleton-placeholder>
                        <skeleton-placeholder effect="fade" class="mb-0" style="--color: var(--skeleton-color); max-width: 120px; height: 21px; filter: brightness(80%);"></skeleton-placeholder>
                      </div>
                      <skeleton-placeholder effect="fade" class="mb-0" style="--color: var(--skeleton-color); width: 120px; height: 70px; filter: brightness(80%);"></skeleton-placeholder>
                    </div>
                  </skeleton-placeholder>
                `).join("")}
          </div>

          <div id="error" class="alert alert-danger d-none">Error fetching feed.</div>

          <div id="feedsViewer"></div>
        </div>
      </div>
    </div>
  </dialog>
`;class ir extends HTMLElement{#ei;#en;#ea;#er;#es;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ii.content.cloneNode(!0))),this.#ei=this.shadowRoot.getElementById("spinner"),this.#en=this.shadowRoot.querySelector("dialog"),this.#ea=this.#en.querySelector("#feedTitle"),this.#er=this.shadowRoot.getElementById("feedsViewer"),this.#es=this.shadowRoot.getElementById("error"),this.shadowRoot.adoptedStyleSheets=e0}static get observedAttributes(){return["feed-url"]}attributeChangedCallback(e){"feed-url"===e&&(this.feedUrl?this.#el(this.feedUrl):this.#ed())}connectedCallback(){this.#en.addEventListener("close",this.#ec)}disconnectedCallback(){this.#en.removeEventListener("close",this.#ec)}get feedUrl(){return this.getAttribute("feed-url")}set feedUrl(e){e?this.setAttribute("feed-url",e):this.removeAttribute("feed-url")}#el(e){document.body.classList.add("overflow-hidden"),this.#en.showModal(),this.#eh(e)}#ed(){this.#en.close()}#ec=()=>{e&&e.abort(),document.body.classList.remove("overflow-hidden"),this.#eu(),this.feedUrl=null};#eu(){this.#er.querySelectorAll(".card").forEach(e=>e.remove()),this.#ea.innerHTML=ia(),this.#ei.classList.add("d-none"),this.#es.classList.add("d-none")}async #eh(t){this.#ei.classList.remove("d-none"),e=new AbortController;try{let o=await io(t,{signal:e.signal}),{value:i=[]}=await e3(),n=i.find(e=>e.url===t);n&&!n.title&&await e7({url:t,title:o.feed.title||""}),this.#ea.textContent=o.feed.title||t,o.items.forEach(e=>{this.#er.insertAdjacentHTML("beforeend",this.#ep(e))})}catch(e){"AbortError"!==e.name&&(console.error(e),this.#ea.textContent="",this.#es.classList.remove("d-none"))}finally{this.#ei.classList.add("d-none")}}#ep(e){let{link:t,title:o,description:i,author:n,pubDate:a,thumbnail:r}=e,s="";try{s=new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}).format(new Date(a))}catch{s="-"}return`
      <div class="card mb-3">
        <div class="card-body">
          <a href="${t}" target="_blank" rel="noreferrer noopener" class="d-flex justify-content-between gap-3 text-decoration-none" style="color: inherit;">
            <div style="min-width: 0;">
              <h5 class="card-title h6">${o}</h5>
              <p class="text-muted text-truncate"><small>${s} ${n?`&bull; ${n}`:""}</small></p>
            </div>

            <img src="${r}" alt="${o}" width="120" height="70" class="thumbnail rounded" loading="lazy" />
          </a>

          <details>
            <summary>Read more...</summary>
            <div class="feed-description-viewer">
              ${i}
            </div>
          </details>
        </div>
      </div>
    `}}window.customElements.get("feed-reader")||window.customElements.define("feed-reader",ir);const is=document.createElement("template");is.innerHTML=`
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

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 0;
    }

    dialog[open]::backdrop {
      opacity: 1;
    }

    @media (prefers-reduced-motion: no-preference) {
      dialog,
      dialog::backdrop {
        transition: transform 0.2s, opacity 0.2s, display 0.2s allow-discrete, overlay 0.2s allow-discrete;
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

      .modal-static {
        animation-name: modal-static;
        animation-duration: 300ms;
        animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
      }
    }

    @keyframes modal-static {
      0%   { transform: scale(1); }
      50%  { transform: scale(1.02); }
      100% { transform: scale(1); }
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
`;class il extends HTMLElement{#en;#ef;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(is.content.cloneNode(!0))),this.#en=this.shadowRoot.querySelector("dialog"),this.shadowRoot.adoptedStyleSheets=e0}static get observedAttributes(){return["open","header-title"]}attributeChangedCallback(e,t,o){"open"===e&&t!==o&&(this.open?this.#em():this.#eb()),"header-title"===e&&t!==o&&(this.shadowRoot.querySelector("#header-title").textContent=this.headerTitle)}connectedCallback(){this.#en.addEventListener("click",this.#eg),this.#en.addEventListener("close",this.#ev)}disconnectedCallback(){this.#ef&&clearTimeout(this.#ef),this.#en.addEventListener("click",this.#eg),this.#en.removeEventListener("close",this.#ev)}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}get headerTitle(){return this.getAttribute("header-title")}set headerTitle(e){this.setAttribute("header-title",e)}get staticBackDrop(){return this.hasAttribute("static-backdrop")}set staticBackDrop(e){e?this.setAttribute("static-backdrop",""):this.removeAttribute("static-backdrop")}async #em(){this.#en.showModal(),document.body.classList.add("overflow-y-hidden"),this.dispatchEvent(new CustomEvent("modal-dialog-open",{bubbles:!0,composed:!0,detail:{dialog:this.#en}}))}#eb(){this.#en.close()}#ev=()=>{this.open=!1,document.body.classList.remove("overflow-y-hidden"),this.dispatchEvent(new CustomEvent("modal-dialog-close",{bubbles:!0,composed:!0,detail:{dialog:this.#en}}))};#eg=e=>{if(e.target===e.currentTarget&&this.staticBackDrop){if(this.#ef)return;this.#en.classList.add("modal-static"),this.#ef=setTimeout(()=>{this.#en.classList.remove("modal-static"),clearTimeout(this.#ef),this.#ef=null},300)}e.target!==e.currentTarget||this.staticBackDrop||this.#eb()}}window.customElements.get("modal-dialog")||window.customElements.define("modal-dialog",il),document.adoptedStyleSheets=e0;
//# sourceMappingURL=index.20d9d352.js.map
