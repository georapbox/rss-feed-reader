!function(){let e;function t(e){return e&&e.__esModule?e.default:e}var n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},a=o.parcelRequire3ec4;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},o.parcelRequire3ec4=a),a.register("aNJCr",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,o={};n=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),Object.defineProperty({},"ClipboardCopy",{get:function(){return h},set:void 0,enumerable:!0,configurable:!0});let s="clipboard-copy",l="success",d="error",c=document.createElement("template");c.innerHTML=`
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
`;class h extends HTMLElement{#e=null;#t;#n;#o;#i;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(c.content.cloneNode(!0))),this.#t=this.shadowRoot.querySelector("button"),this.#n=this.shadowRoot.querySelector('slot[name="copy"]'),this.#o=this.shadowRoot.querySelector('slot[name="success"]'),this.#i=this.shadowRoot.querySelector('slot[name="error"]')}static get observedAttributes(){return["disabled"]}connectedCallback(){this.#r("value"),this.#r("from"),this.#r("disabled"),this.#t&&this.#t.addEventListener("click",this.#a)}disconnectedCallback(){this.#t&&this.#t.removeEventListener("click",this.#a)}attributeChangedCallback(e){"disabled"===e&&this.#t&&(this.#t.disabled=this.disabled,this.#t.setAttribute("aria-disabled",this.disabled),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(e){this.setAttribute("feedback-duration",e)}get value(){return this.getAttribute("value")}set value(e){this.setAttribute("value",e)}get from(){return this.getAttribute("from")}set from(e){this.setAttribute("from",e)}async #s(){if(this.value||this.from)try{let e="";if(this.value)e=this.value;else if(this.from){let t=("getRootNode"in Element.prototype?this.#t.getRootNode({composed:!0}):this.#t.ownerDocument).querySelector(this.from);if(!t)return;e=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:t instanceof HTMLAnchorElement&&t.hasAttribute("href")?t.href:t.textContent}await navigator.clipboard.writeText(e),this.#l(l),this.dispatchEvent(new CustomEvent(`${s}-success`,{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.#l(d),this.dispatchEvent(new CustomEvent(`${s}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}#a=e=>{e.preventDefault(),this.disabled||this.#e||this.#s()};#l(e){this.#n.hidden=!0,this.#o.hidden=e!==l,this.#i.hidden=e!==d,this.#t&&(this.#t.part.remove("button--success"),this.#t.part.remove("button--error"),this.#t.part.add(`button--${e}`)),clearTimeout(this.#e),this.#e=setTimeout(()=>{this.#n.hidden=!1,this.#o.hidden=!0,this.#i.hidden=!0,this.#t&&this.#t.part.remove(`button--${e}`),this.#e=null},this.feedbackDuration)}#r(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=s){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,h)}}function u(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function p(e,t){var n;return(n=u(e,t,"get")).get?n.get.call(e):n.value}function f(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function m(e,t,n){f(e,t),t.set(e,n)}function g(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=n}}(e,u(e,t,"set"),n),n}function v(e,t,n){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return n}function b(e,t){f(e,t),t.add(e)}h.defineCustomElement(),Object.defineProperty({},"WebShare",{get:function(){return _},set:eN,enumerable:!0,configurable:!0});let w=document.createElement("template"),y=String.raw;w.innerHTML=y`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var E=new WeakMap,x=new WeakMap,S=new WeakMap,C=new WeakMap,k=new WeakMap,T=new WeakSet,D=new WeakSet;class _ extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){v(this,D,A).call(this,"shareUrl"),v(this,D,A).call(this,"shareTitle"),v(this,D,A).call(this,"shareText"),v(this,D,A).call(this,"shareFiles"),v(this,D,A).call(this,"disabled"),p(this,E)&&p(this,E).addEventListener("slotchange",p(this,k)),p(this,x)&&p(this,x).addEventListener("click",p(this,C))}disconnectedCallback(){p(this,E)&&p(this,E).removeEventListener("slotchange",p(this,k)),p(this,x)&&p(this,x).removeEventListener("click",p(this,C))}attributeChangedCallback(e){"disabled"===e&&p(this,x)&&(p(this,x).disabled=this.disabled,p(this,x).setAttribute("aria-disabled",this.disabled),p(this,x).part&&p(this,x).part.contains("button")&&p(this,x).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return p(this,S)}set shareFiles(e){g(this,S,e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if("AbortError"===e.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,_)}constructor(){super(),b(this,T),b(this,D),m(this,E,{writable:!0,value:void 0}),m(this,x,{writable:!0,value:void 0}),m(this,S,{writable:!0,value:null}),m(this,C,{writable:!0,value:e=>{e.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),m(this,k,{writable:!0,value:e=>{e.target&&"button"===e.target.name&&(p(this,x)&&p(this,x).removeEventListener("click",p(this,C)),g(this,x,v(this,T,M).call(this)),p(this,x)&&(p(this,x).addEventListener("click",p(this,C)),"BUTTON"===p(this,x).nodeName||p(this,x).hasAttribute("role")||p(this,x).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(w.content.cloneNode(!0))),g(this,E,this.shadowRoot.querySelector('slot[name="button"]')),g(this,x,v(this,T,M).call(this))}}function M(){return p(this,E)?p(this,E).assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot")):null}function A(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}_.defineCustomElement(),function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,o="object"==typeof DOMException?Error:DOMException,i=Object.defineProperty,r=Array.prototype.forEach,a=/@import.+?;?$/gm,s=CSSStyleSheet.prototype;s.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},s.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var l=new WeakMap,d=new WeakMap,c=new WeakMap,h=new WeakMap,u=D.prototype;u.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},u.replaceSync=function(e){if(T(this),"string"==typeof e){var t,n=this;l.get(n).textContent=((t=e.replace(a,""))!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()),h.set(n,[]),d.get(n).forEach(function(e){e.isConnected()&&k(n,C(n,e))})}},i(u,"cssRules",{configurable:!0,enumerable:!0,get:function(){return T(this),l.get(this).sheet.cssRules}}),i(u,"media",{configurable:!0,enumerable:!0,get:function(){return T(this),l.get(this).sheet.media}}),["addRule","deleteRule","insertRule","removeRule"].forEach(function(e){u[e]=function(){var t=this;T(t);var n=arguments;h.get(t).push({method:e,args:n}),d.get(t).forEach(function(o){if(o.isConnected()){var i=C(t,o).sheet;i[e].apply(i,n)}});var o=l.get(t).sheet;return o[e].apply(o,n)}}),i(D,Symbol.hasInstance,{configurable:!0,value:x});var p={childList:!0,subtree:!0},f=new WeakMap,m=new WeakMap,g=new WeakMap,v=new WeakMap;if(O.prototype={isConnected:function(){var e,t=m.get(this);return t instanceof Document?"loading"!==t.readyState:"isConnected"in(e=t.host)?e.isConnected:document.contains(e)},connect:function(){var e=L(this);v.get(this).observe(e,p),g.get(this).length>0&&R(this),A(e,function(e){_(e).connect()})},disconnect:function(){v.get(this).disconnect()},update:function(e){var t=this,n=m.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(x))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");if(e.some(S))throw TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Can't adopt non-constructed stylesheets");t.sheets=e;var o=g.get(t),i=e.filter(function(t,n){return e.indexOf(t)===n});o.filter(function(e){return -1===i.indexOf(e)}).forEach(function(e){(function(e){e.parentNode.removeChild(e)})(C(e,t)),c.get(e).delete(t),d.set(e,d.get(e).filter(function(e){return e!==t}))}),g.set(t,i),t.isConnected()&&i.length>0&&R(t)}},window.CSSStyleSheet=D,M(Document),"ShadowRoot"in window){M(ShadowRoot);var b=Element.prototype,w=b.attachShadow;b.attachShadow=function(e){var t=w.call(this,e);return"closed"===e.mode&&n.set(this,t),t}}var y=_(document);y.isConnected()?y.connect():document.addEventListener("DOMContentLoaded",y.connect.bind(y))}function E(e){return e.shadowRoot||n.get(e)}function x(e){return"object"==typeof e&&(u.isPrototypeOf(e)||s.isPrototypeOf(e))}function S(e){return"object"==typeof e&&s.isPrototypeOf(e)}function C(e,t){return c.get(e).get(t)}function k(e,t){requestAnimationFrame(function(){t.textContent=l.get(e).textContent,h.get(e).forEach(function(e){return t.sheet[e.method].apply(t.sheet,e.args)})})}function T(e){if(!l.has(e))throw TypeError("Illegal invocation")}function D(){var e=document.createElement("style");t.body.appendChild(e),l.set(this,e),d.set(this,[]),c.set(this,new WeakMap),h.set(this,[])}function _(e){var t=f.get(e);return t||(t=new O(e),f.set(e,t)),t}function M(e){i(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return _(this).sheets},set:function(e){_(this).update(e)}})}function A(e,t){for(var n=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,function(e){return E(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),o=void 0;o=n.nextNode();)t(E(o))}function L(e){var t=m.get(e);return t instanceof Document?t.body:t}function R(e){var t=document.createDocumentFragment(),n=g.get(e),o=v.get(e),i=L(e);o.disconnect(),n.forEach(function(n){var o;t.appendChild(C(n,e)||(o=document.createElement("style"),c.get(n).set(e,o),d.get(n).push(e),o))}),i.insertBefore(t,null),o.observe(i,p),n.forEach(function(t){k(t,C(t,e))})}function O(t){var n=this;n.sheets=[],m.set(n,t),g.set(n,[]),v.set(n,new MutationObserver(function(t,o){if(!document){o.disconnect();return}t.forEach(function(t){e||r.call(t.addedNodes,function(e){e instanceof Element&&A(e,function(e){_(e).connect()})}),r.call(t.removedNodes,function(t){t instanceof Element&&(t instanceof HTMLStyleElement&&g.get(n).some(function(e){return C(e,n)})&&R(n),e||A(t,function(e){_(e).disconnect()}))})})}))}}();var L={};L=a("aNJCr").getBundleURL("jBxQq")+a("iE7OH").resolve("4z142");var R={};R=a("aNJCr").getBundleURL("jBxQq")+a("iE7OH").resolve("iVxim");let O=[t(L),t(R)],N=[];for(let e=0;e<O.length;e+=1)N.push(new CSSStyleSheet);!async function(){let e=await Promise.all(O.map(async e=>{let t=await fetch(e);return t.text()}));for(let t=0;t<e.length;t+=1)await N[t].replace(e[t]);document.body.style.visibility="visible"}();let I=document.createElement("template");I.innerHTML=`
  <style>
    :host {
      display: block;
    }
  </style>

  <div class="d-flex justify-content-center align-items-center flex-column text-center mx-3 my-5">
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="60" height="60" fill="currentColor">
      <title>RSS</title>
      <path d="M108.56 342.78a60.34 60.34 0 1060.56 60.44 60.63 60.63 0 00-60.56-60.44z"/>
      <path d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33z"/>
      <path d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48z"/>
    </svg>

    <h1 class="display-6 mb-0">RSS Feed Reader</h1>

    <div class="d-flex align-items-center mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github me-2" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>

      <span>
        Fork me on <a href="https://github.com/georapbox/rss-feed-reader" target="_blank" rel="noreferrer noopener">Github</a>
      </span>
    </div>
  </div>
`;class P extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(I.content.cloneNode(!0))),this.shadowRoot.adoptedStyleSheets=N}}function B(e){return new Promise(function(t,n){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return n(e.error)}})}function F(){if(!eI){var e,t,n;e="keyval",(t=indexedDB.open("keyval-store")).onupgradeneeded=function(){return t.result.createObjectStore(e)},n=B(t),eI=function(t,o){return n.then(function(n){return o(n.transaction(e,t).objectStore(e))})}}return eI}window.customElements.get("site-header")||window.customElements.define("site-header",P);let j="rss-reader/feeds",H=async e=>{try{return{value:await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F();return t("readonly",function(t){return B(t.get(e))})}(e),error:void 0}}catch(e){return{value:void 0,error:e}}},W=async(e,t)=>{try{return await function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F();return n("readwrite",function(n){return n.put(t,e),B(n.transaction)})}(e,t),{error:void 0}}catch(e){return{error:e}}},z=async()=>H(j),X=async(e,t=!0)=>{if(!Array.isArray(e))return;let{error:n}=await W(j,e);return!n&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"set",feeds:e}})),{error:n}},q=async(e,t=!0)=>{let{value:n=[]}=await z(),o=n.find(t=>t.url===e.url),i="";o?(o.url=e.url,o.title=e.title,i="update"):(n.push(e),i="create");let{error:r}=await W(j,n);return!r&&t&&document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:i,feed:e}})),{error:r}},Y=async(e,t=!0)=>{let{value:n=[]}=await z(),o=n.filter(t=>t.url!==e),{error:i}=await W(j,o);return!i&&t&&(0===o.length&&await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F();return t("readwrite",function(t){return t.delete(e),B(t.transaction)})}(j),document.dispatchEvent(new CustomEvent("feeds-updated",{bubbles:!0,detail:{action:"delete",feed:{url:e}}}))),{error:i}},U=document.createElement("template");U.innerHTML=`
  <style>
    :host {
      --input-height: 42px;

      display: block;
    }
  </style>

  <form name="addFeedForm" autocomplete="off" class="d-flex">
    <div class="form-group" style="flex: 1;">
      <input type="text" name="feed-url" class="form-control" style="height: var(--input-height);" placeholder="Enter a feed URL in XML format" autocapitalize="off" autocorrect="off" required>
    </div>
    <div class="ms-2">
      <input type="submit" value="Add feed" class="btn btn-primary" style="height: var(--input-height);">
    </div>
  </form>

  <em style="font-size: 0.75rem;">Add multiple URLs separated with tilde (~).</em>
`;class $ extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(U.content.cloneNode(!0))),this.shadowRoot.adoptedStyleSheets=N,this.formEl=this.shadowRoot.querySelector('form[name="addFeedForm"]')}connectedCallback(){this.formEl.addEventListener("submit",this.onFormSubmission)}disconnectedCallback(){this.formEl.addEventListener("submit",this.onFormSubmission)}async onFormSubmission(e){e.preventDefault();let t=e.target["feed-url"],{value:n}=t;for(let e of n.split("~")){let{value:t=[]}=await z(),n=!!t.find(t=>t.url===e),o=!0;try{new URL(e)}catch{o=!1}!n&&o&&await q({url:e,title:""})}t.value=""}}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach(function(t){var o;o=n[t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function Q(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}window.customElements.get("add-feed")||window.customElements.define("add-feed",$);var K=Q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ee=Q(/Edge/i),et=Q(/firefox/i),en=Q(/safari/i)&&!Q(/chrome/i)&&!Q(/android/i),eo=Q(/iP(ad|od|hone)/i),ei=Q(/chrome/i)&&Q(/android/i),er={capture:!1,passive:!1};function ea(e,t,n){e.addEventListener(t,n,!K&&er)}function es(e,t,n){e.removeEventListener(t,n,!K&&er)}function el(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){}return!1}}function ed(e,t,n,o){if(e){var i;n=n||document;do{if(null!=t&&(">"===t[0]?e.parentNode===n&&el(e,t):el(e,t))||o&&e===n)return e;if(e===n)break}while(e=(i=e).host&&i!==document&&i.host.nodeType?i.host:i.parentNode)}return null}var ec=/\s+/g;function eh(e,t,n){if(e&&t){if(e.classList)e.classList[n?"add":"remove"](t);else{var o=(" "+e.className+" ").replace(ec," ").replace(" "+t+" "," ");e.className=(o+(n?" "+t:"")).replace(ec," ")}}}function eu(e,t,n){var o=e&&e.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t];t in o||-1!==t.indexOf("webkit")||(t="-webkit-"+t),o[t]=n+("string"==typeof n?"":"px")}}function ep(e,t){var n="";if("string"==typeof e)n=e;else do{var o=eu(e,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!t&&(e=e.parentNode))var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function ef(e,t,n){if(e){var o=e.getElementsByTagName(t),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function em(){return document.scrollingElement||document.documentElement}function eg(e,t,n,o,i){if(e.getBoundingClientRect||e===window){if(e!==window&&e.parentNode&&e!==em()?(a=(r=e.getBoundingClientRect()).top,s=r.left,l=r.bottom,d=r.right,c=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(t||n)&&e!==window&&(i=i||e.parentNode,!K))do if(i&&i.getBoundingClientRect&&("none"!==eu(i,"transform")||n&&"static"!==eu(i,"position"))){var r,a,s,l,d,c,h,u=i.getBoundingClientRect();a-=u.top+parseInt(eu(i,"border-top-width")),s-=u.left+parseInt(eu(i,"border-left-width")),l=a+r.height,d=s+r.width;break}while(i=i.parentNode)if(o&&e!==window){var p=ep(i||e),f=p&&p.a,m=p&&p.d;p&&(a/=m,s/=f,h/=f,c/=m,l=a+c,d=s+h)}return{top:a,left:s,bottom:l,right:d,width:h,height:c}}}function ev(e,t,n){for(var o=ex(e,!0),i=eg(e)[t];o;){var r=eg(o)[n];if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===em())break;o=ex(o,!1)}return!1}function eb(e,t,n,o){for(var i=0,r=0,a=e.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==tb.ghost&&(o||a[r]!==tb.dragged)&&ed(a[r],n.draggable,e,!1)){if(i===t)return a[r];i++}r++}return null}function ew(e,t){for(var n=e.lastElementChild;n&&(n===tb.ghost||"none"===eu(n,"display")||t&&!el(n,t));)n=n.previousElementSibling;return n||null}function ey(e,t){var n=0;if(!e||!e.parentNode)return -1;for(;e=e.previousElementSibling;)"TEMPLATE"!==e.nodeName.toUpperCase()&&e!==tb.clone&&(!t||el(e,t))&&n++;return n}function eE(e){var t=0,n=0,o=em();if(e)do{var i=ep(e),r=i.a,a=i.d;t+=e.scrollLeft*r,n+=e.scrollTop*a}while(e!==o&&(e=e.parentNode))return[t,n]}function ex(e,t){if(!e||!e.getBoundingClientRect)return em();var n=e,o=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=eu(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return em();if(o||t)return n;o=!0}}while(n=n.parentNode)return em()}function eS(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function eC(e,t){return function(){if(!eP){var n=arguments;1===n.length?e.call(this,n[0]):e.apply(this,n),eP=setTimeout(function(){eP=void 0},t)}}}function ek(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}function eT(e){var t=window.Polymer,n=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}var eD="Sortable"+new Date().getTime(),e_=[],eM={initializeByDefault:!0},eA={mount:function(e){for(var t in eM)!eM.hasOwnProperty(t)||t in e||(e[t]=eM[t]);e_.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),e_.push(e)},pluginEvent:function(e,t,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var i=e+"Global";e_.forEach(function(o){t[o.pluginName]&&(t[o.pluginName][i]&&t[o.pluginName][i](Z({sortable:t},n)),t.options[o.pluginName]&&t[o.pluginName][e]&&t[o.pluginName][e](Z({sortable:t},n)))})},initializePlugins:function(e,t,n,o){for(var i in e_.forEach(function(o){var i=o.pluginName;if(e.options[i]||o.initializeByDefault){var r=new o(e,t,e.options);r.sortable=e,r.options=e.options,e[i]=r,J(n,r.defaults)}}),e.options)if(e.options.hasOwnProperty(i)){var r=this.modifyOption(e,i,e.options[i]);void 0!==r&&(e.options[i]=r)}},getEventProperties:function(e,t){var n={};return e_.forEach(function(o){"function"==typeof o.eventProperties&&J(n,o.eventProperties.call(t[o.pluginName],e))}),n},modifyOption:function(e,t,n){var o;return e_.forEach(function(i){e[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[t]&&(o=i.optionListeners[t].call(e[i.pluginName],n))}),o}},eL=["evt"],eR=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,i=function(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(n,eL);eA.pluginEvent.bind(tb)(e,t,Z({dragEl:eB,parentEl:eF,ghostEl:ej,rootEl:eH,nextEl:eW,lastDownEl:ez,cloneEl:eX,cloneHidden:eq,dragStarted:e2,putSortable:eG,activeSortable:tb.active,originalEvent:o,oldIndex:eY,oldDraggableIndex:e$,newIndex:eU,newDraggableIndex:eV,hideGhostForTarget:tf,unhideGhostForTarget:tm,cloneNowHidden:function(){eq=!0},cloneNowShown:function(){eq=!1},dispatchSortableEvent:function(e){eO({sortable:t,name:e,originalEvent:o})}},i))};function eO(e){!function(e){var t=e.sortable,n=e.rootEl,o=e.name,i=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,d=e.newIndex,c=e.oldDraggableIndex,h=e.newDraggableIndex,u=e.originalEvent,p=e.putSortable,f=e.extraEventProperties;if(t=t||n&&n[eD]){var m,g=t.options,v="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||K||ee?(m=document.createEvent("Event")).initEvent(o,!0,!0):m=new CustomEvent(o,{bubbles:!0,cancelable:!0}),m.to=a||n,m.from=s||n,m.item=i||n,m.clone=r,m.oldIndex=l,m.newIndex=d,m.oldDraggableIndex=c,m.newDraggableIndex=h,m.originalEvent=u,m.pullMode=p?p.lastPutMode:void 0;var b=Z(Z({},f),eA.getEventProperties(o,t));for(var w in b)m[w]=b[w];n&&n.dispatchEvent(m),g[v]&&g[v].call(t,m)}}(Z({putSortable:eG,cloneEl:eX,targetEl:eB,rootEl:eH,oldIndex:eY,oldDraggableIndex:e$,newIndex:eU,newDraggableIndex:eV},e))}var eN,eI,eP,eB,eF,ej,eH,eW,ez,eX,eq,eY,eU,e$,eV,eZ,eG,eJ,eQ,eK,e0,e1,e5,e2,e8,e3,e4,e6,e7=!1,e9=!1,te=[],tt=!1,tn=!1,to=[],ti=!1,tr=[],ta="undefined"!=typeof document,ts=ee||K?"cssFloat":"float",tl=ta&&!ei&&!eo&&"draggable"in document.createElement("div"),td=function(){if(ta){if(K)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),tc=function(e,t){var n=eu(e),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=eb(e,0,t),r=eb(e,1,t),a=i&&eu(i),s=r&&eu(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+eg(i).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+eg(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var c="left"===a.float?"left":"right";return r&&("both"===s.clear||s.clear===c)?"vertical":"horizontal"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=o&&"none"===n[ts]||r&&"none"===n[ts]&&l+d>o)?"vertical":"horizontal"},th=function(e,t,n){var o=n?e.left:e.top,i=n?e.right:e.bottom,r=n?e.width:e.height,a=n?t.left:t.top,s=n?t.right:t.bottom,l=n?t.width:t.height;return o===a||i===s||o+r/2===a+l/2},tu=function(e,t){var n;return te.some(function(o){var i=o[eD].options.emptyInsertThreshold;if(!(!i||ew(o))){var r=eg(o),a=e>=r.left-i&&e<=r.right+i,s=t>=r.top-i&&t<=r.bottom+i;if(a&&s)return n=o}}),n},tp=function(e){function t(e,n){return function(o,i,r,a){var s=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name;if(null==e&&(n||s))return!0;if(null==e||!1===e)return!1;if(n&&"clone"===e)return e;if("function"==typeof e)return t(e(o,i,r,a),n)(o,i,r,a);var l=(n?o:i).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var n={},o=e.group;o&&"object"==G(o)||(o={name:o}),n.name=o.name,n.checkPull=t(o.pull,!0),n.checkPut=t(o.put),n.revertClone=o.revertClone,e.group=n},tf=function(){!td&&ej&&eu(ej,"display","none")},tm=function(){!td&&ej&&eu(ej,"display","")};ta&&!ei&&document.addEventListener("click",function(e){if(e9)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),e9=!1,!1},!0);var tg=function(e){if(eB){var t=tu((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[eD]._onDragOver(n)}}},tv=function(e){eB&&eB.parentNode[eD]._isOutsideThisEl(e.target)};function tb(e,t){if(!(e&&e.nodeType&&1===e.nodeType))throw"Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(e));this.el=e,this.options=t=J({},t),e[eD]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return tc(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==tb.supportPointer&&"PointerEvent"in window&&!en,emptyInsertThreshold:5};for(var r in eA.initializePlugins(this,e,i),i)r in t||(t[r]=i[r]);for(var a in tp(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&tl,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?ea(e,"pointerdown",this._onTapStart):(ea(e,"mousedown",this._onTapStart),ea(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(ea(e,"dragover",this),ea(e,"dragenter",this)),te.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),J(this,(o=[],{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==eu(e,"display")&&e!==tb.ghost){o.push({target:e,rect:eg(e)});var t=Z({},o[o.length-1].rect);if(e.thisAnimationDuration){var n=ep(e,!0);n&&(t.top-=n.f,t.left-=n.e)}e.fromRect=t}})},addAnimationState:function(e){o.push(e)},removeAnimationState:function(e){o.splice(function(e,t){for(var n in e)if(e.hasOwnProperty(n)){for(var o in t)if(t.hasOwnProperty(o)&&t[o]===e[n][o])return Number(n)}return -1}(o,{target:e}),1)},animateAll:function(e){var t=this;if(!this.options.animation){clearTimeout(n),"function"==typeof e&&e();return}var i=!1,r=0;o.forEach(function(e){var n,o=0,a=e.target,s=a.fromRect,l=eg(a),d=a.prevFromRect,c=a.prevToRect,h=e.rect,u=ep(a,!0);u&&(l.top-=u.f,l.left-=u.e),a.toRect=l,a.thisAnimationDuration&&eS(d,l)&&!eS(s,l)&&(h.top-l.top)/(h.left-l.left)==(s.top-l.top)/(s.left-l.left)&&(n=t.options,o=Math.sqrt(Math.pow(d.top-h.top,2)+Math.pow(d.left-h.left,2))/Math.sqrt(Math.pow(d.top-c.top,2)+Math.pow(d.left-c.left,2))*n.animation),eS(l,s)||(a.prevFromRect=s,a.prevToRect=l,o||(o=t.options.animation),t.animate(a,h,l,o)),o&&(i=!0,r=Math.max(r,o),clearTimeout(a.animationResetTimer),a.animationResetTimer=setTimeout(function(){a.animationTime=0,a.prevFromRect=null,a.fromRect=null,a.prevToRect=null,a.thisAnimationDuration=null},o),a.thisAnimationDuration=o)}),clearTimeout(n),i?n=setTimeout(function(){"function"==typeof e&&e()},r):"function"==typeof e&&e(),o=[]},animate:function(e,t,n,o){if(o){eu(e,"transition",""),eu(e,"transform","");var i=ep(this.el),r=i&&i.a,a=i&&i.d,s=(t.left-n.left)/(r||1),l=(t.top-n.top)/(a||1);e.animatingX=!!s,e.animatingY=!!l,eu(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=e.offsetWidth,eu(e,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),eu(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){eu(e,"transition",""),eu(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},o)}}}))}function tw(e,t,n,o,i,r,a,s){var l,d,c=e[eD],h=c.options.onMove;return!window.CustomEvent||K||ee?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=n,l.draggedRect=o,l.related=i||t,l.relatedRect=r||eg(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),h&&(d=h.call(c,l,a)),d}function ty(e){e.draggable=!1}function tE(){ti=!1}function tx(e){return setTimeout(e,0)}function tS(e){return clearTimeout(e)}tb.prototype={constructor:tb,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(e8=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,eB):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,o=this.options,i=o.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(a||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=o.filter;if(function(e){tr.length=0;for(var t=e.getElementsByTagName("input"),n=t.length;n--;){var o=t[n];o.checked&&tr.push(o)}}(n),!(eB||/mousedown|pointerdown/.test(r)&&0!==e.button||o.disabled||l.isContentEditable||!this.nativeDraggable&&en&&s&&"SELECT"===s.tagName.toUpperCase()||(s=ed(s,o.draggable,n,!1))&&s.animated)&&ez!==s){if(eY=ey(s),e$=ey(s,o.draggable),"function"==typeof d){if(d.call(this,e,s,this)){eO({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:n,fromEl:n}),eR("filter",t,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(o){if(o=ed(l,o.trim(),n,!1))return eO({sortable:t,rootEl:o,name:"filter",targetEl:s,fromEl:n,toEl:n}),eR("filter",t,{evt:e}),!0}))){i&&e.cancelable&&e.preventDefault();return}(!o.handle||ed(l,o.handle,n,!1))&&this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,t,n){var o,i=this,r=i.el,a=i.options,s=r.ownerDocument;if(n&&!eB&&n.parentNode===r){var l=eg(n);if(eH=r,eF=(eB=n).parentNode,eW=eB.nextSibling,ez=n,eZ=a.group,tb.dragged=eB,e1=(eJ={target:eB,clientX:(t||e).clientX,clientY:(t||e).clientY}).clientX-l.left,e5=eJ.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,eB.style["will-change"]="all",o=function(){if(eR("delayEnded",i,{evt:e}),tb.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!et&&i.nativeDraggable&&(eB.draggable=!0),i._triggerDragStart(e,t),eO({sortable:i,name:"choose",originalEvent:e}),eh(eB,a.chosenClass,!0)},a.ignore.split(",").forEach(function(e){ef(eB,e.trim(),ty)}),ea(s,"dragover",tg),ea(s,"mousemove",tg),ea(s,"touchmove",tg),ea(s,"mouseup",i._onDrop),ea(s,"touchend",i._onDrop),ea(s,"touchcancel",i._onDrop),et&&this.nativeDraggable&&(this.options.touchStartThreshold=4,eB.draggable=!0),eR("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(ee||K))o();else{if(tb.eventCanceled){this._onDrop();return}ea(s,"mouseup",i._disableDelayedDrag),ea(s,"touchend",i._disableDelayedDrag),ea(s,"touchcancel",i._disableDelayedDrag),ea(s,"mousemove",i._delayedDragTouchMoveHandler),ea(s,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&ea(s,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){eB&&ty(eB),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;es(e,"mouseup",this._disableDelayedDrag),es(e,"touchend",this._disableDelayedDrag),es(e,"touchcancel",this._disableDelayedDrag),es(e,"mousemove",this._delayedDragTouchMoveHandler),es(e,"touchmove",this._delayedDragTouchMoveHandler),es(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?ea(document,"pointermove",this._onTouchMove):t?ea(document,"touchmove",this._onTouchMove):ea(document,"mousemove",this._onTouchMove):(ea(eB,"dragend",this),ea(eH,"dragstart",this._onDragStart));try{document.selection?tx(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(e7=!1,eH&&eB){eR("dragStarted",this,{evt:t}),this.nativeDraggable&&ea(document,"dragover",tv);var n=this.options;e||eh(eB,n.dragClass,!1),eh(eB,n.ghostClass,!0),tb.active=this,e&&this._appendGhost(),eO({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(eQ){this._lastX=eQ.clientX,this._lastY=eQ.clientY,tf();for(var e=document.elementFromPoint(eQ.clientX,eQ.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(eQ.clientX,eQ.clientY))!==t;)t=e;if(eB.parentNode[eD]._isOutsideThisEl(e),t)do{if(t[eD]&&t[eD]._onDragOver({clientX:eQ.clientX,clientY:eQ.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break;e=t}while(t=t.parentNode)tm()}},_onTouchMove:function(e){if(eJ){var t=this.options,n=t.fallbackTolerance,o=t.fallbackOffset,i=e.touches?e.touches[0]:e,r=ej&&ep(ej,!0),a=ej&&r&&r.a,s=ej&&r&&r.d,l=eo&&e6&&eE(e6),d=(i.clientX-eJ.clientX+o.x)/(a||1)+(l?l[0]-to[0]:0)/(a||1),c=(i.clientY-eJ.clientY+o.y)/(s||1)+(l?l[1]-to[1]:0)/(s||1);if(!tb.active&&!e7){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(ej){r?(r.e+=d-(eK||0),r.f+=c-(e0||0)):r={a:1,b:0,c:0,d:1,e:d,f:c};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");eu(ej,"webkitTransform",h),eu(ej,"mozTransform",h),eu(ej,"msTransform",h),eu(ej,"transform",h),eK=d,e0=c,eQ=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!ej){var e=this.options.fallbackOnBody?document.body:eH,t=eg(eB,!0,eo,!0,e),n=this.options;if(eo){for(e6=e;"static"===eu(e6,"position")&&"none"===eu(e6,"transform")&&e6!==document;)e6=e6.parentNode;e6!==document.body&&e6!==document.documentElement?(e6===document&&(e6=em()),t.top+=e6.scrollTop,t.left+=e6.scrollLeft):e6=em(),to=eE(e6)}eh(ej=eB.cloneNode(!0),n.ghostClass,!1),eh(ej,n.fallbackClass,!0),eh(ej,n.dragClass,!0),eu(ej,"transition",""),eu(ej,"transform",""),eu(ej,"box-sizing","border-box"),eu(ej,"margin",0),eu(ej,"top",t.top),eu(ej,"left",t.left),eu(ej,"width",t.width),eu(ej,"height",t.height),eu(ej,"opacity","0.8"),eu(ej,"position",eo?"absolute":"fixed"),eu(ej,"zIndex","100000"),eu(ej,"pointerEvents","none"),tb.ghost=ej,e.appendChild(ej),eu(ej,"transform-origin",e1/parseInt(ej.style.width)*100+"% "+e5/parseInt(ej.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,o=e.dataTransfer,i=n.options;if(eR("dragStart",this,{evt:e}),tb.eventCanceled){this._onDrop();return}eR("setupClone",this),tb.eventCanceled||((eX=eT(eB)).removeAttribute("id"),eX.draggable=!1,eX.style["will-change"]="",this._hideClone(),eh(eX,this.options.chosenClass,!1),tb.clone=eX),n.cloneId=tx(function(){eR("clone",n),tb.eventCanceled||(n.options.removeCloneOnHide||eH.insertBefore(eX,eB),n._hideClone(),eO({sortable:n,name:"clone"}))}),t||eh(eB,i.dragClass,!0),t?(e9=!0,n._loopId=setInterval(n._emulateDragOver,50)):(es(document,"mouseup",n._onDrop),es(document,"touchend",n._onDrop),es(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,eB)),ea(document,"drop",n),eu(eB,"transform","translateZ(0)")),e7=!0,n._dragStartId=tx(n._dragStarted.bind(n,t,e)),ea(document,"selectstart",n),e2=!0,en&&eu(document.body,"user-select","none")},_onDragOver:function(e){var t,n,o,i,r=this.el,a=e.target,s=this.options,l=s.group,d=tb.active,c=eZ===l,h=s.sort,u=eG||d,p=this,f=!1;if(!ti){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),a=ed(a,s.draggable,r,!0),O("dragOver"),tb.eventCanceled)return f;if(eB.contains(e.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return I(!1);if(e9=!1,d&&!s.disabled&&(c?h||(o=eF!==eH):eG===this||(this.lastPutMode=eZ.checkPull(this,d,eB,e))&&l.checkPut(this,d,eB,e))){if(i="vertical"===this._getDirection(e,a),t=eg(eB),O("dragOverValid"),tb.eventCanceled)return f;if(o)return eF=eH,N(),this._hideClone(),O("revert"),tb.eventCanceled||(eW?eH.insertBefore(eB,eW):eH.appendChild(eB)),I(!0);var m=ew(r,s.draggable);if(!m||(v=i,b=eg(ew(this.el,this.options.draggable)),(v?e.clientX>b.right+10||e.clientX<=b.right&&e.clientY>b.bottom&&e.clientX>=b.left:e.clientX>b.right&&e.clientY>b.top||e.clientX<=b.right&&e.clientY>b.bottom+10)&&!m.animated)){if(m===eB)return I(!1);if(m&&r===e.target&&(a=m),a&&(n=eg(a)),!1!==tw(eH,r,eB,t,a,n,e,!!a))return N(),m&&m.nextSibling?r.insertBefore(eB,m.nextSibling):r.appendChild(eB),eF=r,P(),I(!0)}else if(m&&(w=i,y=eg(eb(this.el,0,this.options,!0)),w?e.clientX<y.left-10||e.clientY<y.top&&e.clientX<y.right:e.clientY<y.top-10||e.clientY<y.bottom&&e.clientX<y.left)){var g=eb(r,0,s,!0);if(g===eB)return I(!1);if(n=eg(a=g),!1!==tw(eH,r,eB,t,a,n,e,!1))return N(),r.insertBefore(eB,g),eF=r,P(),I(!0)}else if(a.parentNode===r){n=eg(a);var v,b,w,y,E,x,S=0,C=eB.parentNode!==r,k=!th(eB.animated&&eB.toRect||t,a.animated&&a.toRect||n,i),T=i?"top":"left",D=ev(a,"top","top")||ev(eB,"top","top"),_=D?D.scrollTop:void 0;if(e8!==a&&(x=n[T],tt=!1,tn=!k&&s.invertSwap||C),0!==(S=function(e,t,n,o,i,r,a,s){var l=o?e.clientY:e.clientX,d=o?n.height:n.width,c=o?n.top:n.left,h=o?n.bottom:n.right,u=!1;if(!a){if(s&&e4<d*i){if(!tt&&(1===e3?l>c+d*r/2:l<h-d*r/2)&&(tt=!0),tt)u=!0;else if(1===e3?l<c+e4:l>h-e4)return-e3}else if(l>c+d*(1-i)/2&&l<h-d*(1-i)/2)return ey(eB)<ey(t)?1:-1}return(u=u||a)&&(l<c+d*r/2||l>h-d*r/2)?l>c+d/2?1:-1:0}(e,a,n,i,k?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,tn,e8===a))){var M=ey(eB);do M-=S,E=eF.children[M];while(E&&("none"===eu(E,"display")||E===ej))}if(0===S||E===a)return I(!1);e8=a,e3=S;var A=a.nextElementSibling,L=!1,R=tw(eH,r,eB,t,a,n,e,L=1===S);if(!1!==R)return(1===R||-1===R)&&(L=1===R),ti=!0,setTimeout(tE,30),N(),L&&!A?r.appendChild(eB):a.parentNode.insertBefore(eB,L?A:a),D&&ek(D,0,_-D.scrollTop),eF=eB.parentNode,void 0===x||tn||(e4=Math.abs(x-eg(a)[T])),P(),I(!0)}if(r.contains(eB))return I(!1)}return!1}function O(s,l){eR(s,p,Z({evt:e,isOwner:c,axis:i?"vertical":"horizontal",revert:o,dragRect:t,targetRect:n,canSort:h,fromSortable:u,target:a,completed:I,onMove:function(n,o){return tw(eH,r,eB,t,n,eg(n),e,o)},changed:P},l))}function N(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function I(t){return O("dragOverCompleted",{insertion:t}),t&&(c?d._hideClone():d._showClone(p),p!==u&&(eh(eB,eG?eG.options.ghostClass:d.options.ghostClass,!1),eh(eB,s.ghostClass,!0)),eG!==p&&p!==tb.active?eG=p:p===tb.active&&eG&&(eG=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a!==eB||eB.animated)&&(a!==r||a.animated)||(e8=null),s.dragoverBubble||e.rootEl||a===document||(eB.parentNode[eD]._isOutsideThisEl(e.target),t||tg(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),f=!0}function P(){eU=ey(eB),eV=ey(eB,s.draggable),eO({sortable:p,name:"change",toEl:r,newIndex:eU,newDraggableIndex:eV,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){es(document,"mousemove",this._onTouchMove),es(document,"touchmove",this._onTouchMove),es(document,"pointermove",this._onTouchMove),es(document,"dragover",tg),es(document,"mousemove",tg),es(document,"touchmove",tg)},_offUpEvents:function(){var e=this.el.ownerDocument;es(e,"mouseup",this._onDrop),es(e,"touchend",this._onDrop),es(e,"pointerup",this._onDrop),es(e,"touchcancel",this._onDrop),es(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;if(eU=ey(eB),eV=ey(eB,n.draggable),eR("drop",this,{evt:e}),eF=eB&&eB.parentNode,eU=ey(eB),eV=ey(eB,n.draggable),tb.eventCanceled){this._nulling();return}e7=!1,tn=!1,tt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),tS(this.cloneId),tS(this._dragStartId),this.nativeDraggable&&(es(document,"drop",this),es(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),en&&eu(document.body,"user-select",""),eu(eB,"transform",""),e&&(e2&&(e.cancelable&&e.preventDefault(),n.dropBubble||e.stopPropagation()),ej&&ej.parentNode&&ej.parentNode.removeChild(ej),(eH===eF||eG&&"clone"!==eG.lastPutMode)&&eX&&eX.parentNode&&eX.parentNode.removeChild(eX),eB&&(this.nativeDraggable&&es(eB,"dragend",this),ty(eB),eB.style["will-change"]="",e2&&!e7&&eh(eB,eG?eG.options.ghostClass:this.options.ghostClass,!1),eh(eB,this.options.chosenClass,!1),eO({sortable:this,name:"unchoose",toEl:eF,newIndex:null,newDraggableIndex:null,originalEvent:e}),eH!==eF?(eU>=0&&(eO({rootEl:eF,name:"add",toEl:eF,fromEl:eH,originalEvent:e}),eO({sortable:this,name:"remove",toEl:eF,originalEvent:e}),eO({rootEl:eF,name:"sort",toEl:eF,fromEl:eH,originalEvent:e}),eO({sortable:this,name:"sort",toEl:eF,originalEvent:e})),eG&&eG.save()):eU!==eY&&eU>=0&&(eO({sortable:this,name:"update",toEl:eF,originalEvent:e}),eO({sortable:this,name:"sort",toEl:eF,originalEvent:e})),tb.active&&((null==eU||-1===eU)&&(eU=eY,eV=e$),eO({sortable:this,name:"end",toEl:eF,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){eR("nulling",this),eH=eB=eF=ej=eW=eX=ez=eq=eJ=eQ=e2=eU=eV=eY=e$=e8=e3=eG=eZ=tb.dragged=tb.ghost=tb.clone=tb.active=null,tr.forEach(function(e){e.checked=!0}),tr.length=eK=e0=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":eB&&(this._onDragOver(e),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault());break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)ed(e=n[o],r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||function(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,o=0;n--;)o+=t.charCodeAt(n);return o.toString(36)}(e));return t},sort:function(e,t){var n={},o=this.el;this.toArray().forEach(function(e,t){var i=o.children[t];ed(i,this.options.draggable,o,!1)&&(n[e]=i)},this),t&&this.captureAnimationState(),e.forEach(function(e){n[e]&&(o.removeChild(n[e]),o.appendChild(n[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return ed(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];var o=eA.modifyOption(this,e,t);void 0!==o?n[e]=o:n[e]=t,"group"===e&&tp(n)},destroy:function(){eR("destroy",this);var e=this.el;e[eD]=null,es(e,"mousedown",this._onTapStart),es(e,"touchstart",this._onTapStart),es(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(es(e,"dragover",this),es(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),te.splice(te.indexOf(this.el),1),this.el=null},_hideClone:function(){eq||(eR("hideClone",this),tb.eventCanceled||(eu(eX,"display","none"),this.options.removeCloneOnHide&&eX.parentNode&&eX.parentNode.removeChild(eX),eq=!0))},_showClone:function(e){if("clone"!==e.lastPutMode){this._hideClone();return}if(eq){if(eR("showClone",this),tb.eventCanceled)return;eB.parentNode!=eH||this.options.group.revertClone?eW?eH.insertBefore(eX,eW):eH.appendChild(eX):eH.insertBefore(eX,eB),this.options.group.revertClone&&this.animate(eB,eX),eu(eX,"display",""),eq=!1}}},ta&&ea(document,"touchmove",function(e){(tb.active||e7)&&e.cancelable&&e.preventDefault()}),tb.utils={on:ea,off:es,css:eu,find:ef,is:function(e,t){return!!ed(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},throttle:eC,closest:ed,toggleClass:eh,clone:eT,index:ey,nextTick:tx,cancelNextTick:tS,detectDirection:tc,getChild:eb},tb.get=function(e){return e[eD]},tb.mount=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(e));e.utils&&(tb.utils=Z(Z({},tb.utils),e.utils)),eA.mount(e)})},tb.create=function(e,t){return new tb(e,t)},tb.version="1.15.0";var tC,tk,tT,tD=[];eC(function(e,t,n,o){if(t.scroll){var i,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,d=em();tk!==n&&(tk=n,tD.forEach(function(e){clearInterval(e.pid)}),tD=[],tC=t.scroll,i=t.scrollFn,!0===tC&&(tC=ex(n,!0)));var c=0,h=tC;do{var u=h,p=eg(u),f=p.top,m=p.bottom,g=p.left,v=p.right,b=p.width,w=p.height,y=void 0,E=void 0,x=u.scrollWidth,S=u.scrollHeight,C=eu(u),k=u.scrollLeft,T=u.scrollTop;u===d?(y=b<x&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(y=b<x&&("auto"===C.overflowX||"scroll"===C.overflowX),E=w<S&&("auto"===C.overflowY||"scroll"===C.overflowY));var D=y&&(Math.abs(v-r)<=s&&k+b<x)-(Math.abs(g-r)<=s&&!!k),_=E&&(Math.abs(m-a)<=s&&T+w<S)-(Math.abs(f-a)<=s&&!!T);if(!tD[c])for(var M=0;M<=c;M++)tD[M]||(tD[M]={});(tD[c].vx!=D||tD[c].vy!=_||tD[c].el!==u)&&(tD[c].el=u,tD[c].vx=D,tD[c].vy=_,clearInterval(tD[c].pid),(0!=D||0!=_)&&(tD[c].pid=setInterval((function(){o&&0===this.layer&&tb.active._onTouchMove(tT);var t=tD[this.layer].vy?tD[this.layer].vy*l:0,n=tD[this.layer].vx?tD[this.layer].vx*l:0;("function"!=typeof i||"continue"===i.call(tb.dragged.parentNode[eD],n,t,e,tT,tD[this.layer].el))&&ek(tD[this.layer].el,n,t)}).bind({layer:c}),24))),c++}while(t.bubbleScroll&&h!==d&&(h=ex(h,!1)))}},30);var t_=function(e){var t=e.originalEvent,n=e.putSortable,o=e.dragEl,i=e.activeSortable,r=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=n||i;a();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),l&&!l.el.contains(c)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function tM(){}function tA(){}tM.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=eb(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(t,o):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:t_},J(tM,{pluginName:"revertOnSpill"}),tA.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:t_},J(tA,{pluginName:"removeOnSpill"});let tL=(e,t=0,n=!1)=>{let o=null;if("function"!=typeof e)throw TypeError("Expected a function for first argument");return(...i)=>{clearTimeout(o),n&&!o&&e(...i),o=setTimeout(()=>{o=null,n||e(...i)},t)}},tR=document.createElement("template");tR.innerHTML=`
  <style>
    :host {
      display: block;
    }

    #exportCode {
      overflow-y: auto;
      max-width: 500px;
      white-space: nowrap;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(3px);
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

  <dialog class="shadow rounded" part="dialog">
    <div class="d-flex align-items-center justify-content-between px-3 pt-3" style="gap: 1.5rem;">
      <h2 class="h5 m-0">Export feeds</h2>

      <form method="dialog">
        <button type="submit" class="d-flex align-items-center justify-content-center btn btn-outline-primary p-0" style="width: 36px; height: 36px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
          <span class="visually-hidden">Close</span>
        </button>
      </form>
    </div>

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

      <div class="card mt-2">
        <div class="card-body">
          <code id="exportCode" class="d-block hide-scrollbars"></code>
        </div>
      </div>
    </div>
  </dialog>
`;class tO extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tR.content.cloneNode(!0))),this.clipboardCopyEl=this.shadowRoot.querySelector("clipboard-copy"),this.exportDialogEl=this.shadowRoot.querySelector("dialog"),this.shadowRoot.adoptedStyleSheets=N}static get observedAttributes(){return["open"]}attributeChangedCallback(e){"open"===e&&this.open&&this.openExportfeedsModal()}connectedCallback(){this.exportDialogEl.addEventListener("click",this.onExportDialogClick),this.exportDialogEl.addEventListener("close",this.onExportDialogClose)}disconnectedCallback(){this.exportDialogEl.addEventListener("click",this.onExportDialogClick),this.exportDialogEl.removeEventListener("close",this.onExportDialogClose),clearTimeout(this._copyTimeout)}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}async openExportfeedsModal(){let{value:e=[]}=await z(),t=e.map(e=>e.url).join("~");this.shadowRoot.getElementById("exportCode").innerHTML=t,this.clipboardCopyEl.value=t,this.shadowRoot.querySelector("web-share").shareText=t,this.exportDialogEl.showModal()}closeExportfeedsModal(){this.exportDialogEl.close()}onExportDialogClose=()=>{this.open=!1};onExportDialogClick=e=>{e.target===e.currentTarget&&this.closeExportfeedsModal()}}window.customElements.get("export-feeds")||window.customElements.define("export-feeds",tO);let tN=document.createElement("template");tN.innerHTML=`
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
  </style>

  <div id="feedsContainer">
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
        <button type="button" id="editBtn" class="reorder-button btn btn-outline-primary btn-sm d-flex align-items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18">
            <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" fill="currentColor"/>
          </svg>
          <span class="d-none d-sm-block">Edit</span>
        </button>

        <button type="button" id="exportBtn" class="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
            <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 272l80 80 80-80M256 48v288"/>
          </svg>
          <span class="d-none d-sm-block">Export</span>
        </button>
      </div>
    </div>

    <export-feeds></export-feeds>

    <ul class="list-group" id="feedsList"></ul>
  </div>
`;class tI extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tN.content.cloneNode(!0))),this._isEditable=!1,this.shadowRoot.adoptedStyleSheets=N,this.feedsContainerEl=this.shadowRoot.getElementById("feedsContainer"),this.feedsListEl=this.shadowRoot.getElementById("feedsList"),this.editBtn=this.shadowRoot.getElementById("editBtn"),this.exportBtn=this.shadowRoot.getElementById("exportBtn"),this.searchInput=this.shadowRoot.getElementById("searchInput"),this.searchClearBtn=this.shadowRoot.getElementById("searchClearBtn"),this.exportFeedsEl=this.shadowRoot.querySelector("export-feeds")}async connectedCallback(){let{value:e=[]}=await z();e.forEach(e=>this.addFeed(e)),this.toggleFeedsVisibility(),this.feedsListEl.addEventListener("click",this.onActionsClick),this.editBtn.addEventListener("click",this.onEditRequest),this.exportBtn.addEventListener("click",this.onExportRequest),this.searchInput.addEventListener("input",this.onSearchInputDebounced),this.searchClearBtn.addEventListener("click",this.onSearchClear),document.addEventListener("feeds-updated",this.onFeedsUpdateSuccess),new tb(this.feedsListEl,{animation:150,handle:".sort-handler",onEnd:async e=>{let t=Array.prototype.map.call(e.to.querySelectorAll("li"),e=>({url:e.getAttribute("data-url"),title:e.getAttribute("data-title")||""}));await X(t,!1)}})}disconnectedCallback(){this.feedsListEl.removeEventListener("click",this.onActionsClick),this.editBtn.removeEventListener("click",this.onEditRequest),this.exportBtn.removeEventListener("click",this.onExportRequest),this.searchInput.removeEventListener("input",this.onSearchInputDebounced),this.searchClearBtn.removeEventListener("click",this.onSearchClear),document.removeEventListener("feeds-updated",this.onFeedsUpdateSuccess)}searchFeeds=(e="")=>{let t=this.feedsListEl.querySelectorAll("[data-url]");0!==t.length&&t.forEach(t=>{let n=(t.getAttribute("data-url")||"").toLowerCase(),o=(t.getAttribute("data-title")||"").toLowerCase(),i=e.trim().toLowerCase();t.hidden=!(n.includes(i)||o.includes(i))})};debounceSearchFeeds=tL(this.searchFeeds,250);onSearchInputDebounced=e=>{let t=e.target.value;return this.searchClearBtn.classList.toggle("d-none",!t),this.debounceSearchFeeds(t)};onSearchClear=()=>{this.searchInput.value="",this.searchInput.dispatchEvent(new Event("input"))};onEditRequest=e=>{this._isEditable=!this._isEditable,e.currentTarget.classList.toggle("active"),this.shadowRoot.querySelectorAll(".sort-handler, .delete-button").forEach(e=>{e.hidden=!e.hidden})};onExportRequest=()=>{this.exportFeedsEl.open=!0};onFeedsUpdateSuccess=e=>{if("delete"===e.detail.action&&this.removeFeed(e.detail.feed),"create"===e.detail.action&&(this.addFeed(e.detail.feed),this.searchInput.value&&(this.searchInput.value="",this.searchFeeds(""))),"update"===e.detail.action){let{url:t,title:n}=e.detail.feed,o=this.feedsListEl.querySelector(`[data-url="${t}"]`);if(o){let e=o.querySelector(".link-content");o.setAttribute("data-title",n||""),e&&(e.innerHTML=n?`${n}<br><small class="text-muted">${t}</small>`:t)}}};onActionsClick=e=>{let t=e.target,n=t.closest("button.delete-button"),o=t.closest("a.link");if(!o&&!n)return;let i=t.closest("li"),r=i.getAttribute("data-url");n&&window.confirm(`Are you sure you want to delete feed "${r}"?`)&&Y(r),o&&(e.preventDefault(),document.querySelector("feed-reader").feedUrl=r)};addFeed(e){let{url:t,title:n}=e,o=document.createElement("a");o.className="link text-decoration-none d-flex align-items-center h-100",o.style.flex="1",o.style.minWidth=0,o.style.color="inherit",o.href=t;let i=document.createElement("div");i.className="text-truncate link-content",i.innerHTML=n?`${n}<br><small class="text-muted">${t}</small>`:t;let r=document.createElement("button");r.type="button",r.title="Delete feed",r.hidden=!this._isEditable,r.className="delete-button btn btn-default text-danger p-0",r.style.lineHeight="1",r.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
      <span class="visually-hidden">Delete</span>
    `;let a=document.createElement("li");a.className="list-group-item p-0 d-flex justify-content-between align-items-center",a.style.height="var(--list-item-height)",a.setAttribute("data-url",t||""),a.setAttribute("data-title",n||"");let s=document.createElement("div");s.hidden=!this._isEditable,s.className="sort-handler text-primary",s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/>
      </svg>
      <span class="visually-hidden">Reorder</span>
    `,o.appendChild(i),a.appendChild(s),a.appendChild(o),a.appendChild(r),this.feedsListEl.appendChild(a),this.toggleFeedsVisibility()}removeFeed(e){let t=this.feedsListEl.querySelector(`[data-url="${e.url}"]`);t&&t.remove(),this.toggleFeedsVisibility()}async toggleFeedsVisibility(){let{value:e=[]}=await z();this.feedsContainerEl.classList.toggle("d-none",0===e.length)}}function tP(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function tB(e,t){var n;return(n=tP(e,t,"get")).get?n.get.call(e):n.value}function tF(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function tj(e,t,n){tF(e,t),t.set(e,n)}function tH(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=n}}(e,tP(e,t,"set"),n),n}function tW(e,t,n){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return n}function tz(e,t){tF(e,t),t.add(e)}window.customElements.get("feeds-list")||window.customElements.define("feeds-list",tI),Object.defineProperty({},"SkeletonPlaceholder",{get:function(){return tG},set:n,enumerable:!0,configurable:!0});let tX=document.createElement("template"),tq=String.raw;tX.innerHTML=tq`
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
`;var tY=new WeakMap,tU=new WeakMap,t$=new WeakSet,tV=new WeakSet,tZ=new WeakSet;class tG extends HTMLElement{connectedCallback(){tW(this,tZ,tK).call(this,"effect"),tW(this,tZ,tK).call(this,"variant"),this.effect||(this.effect="none")}static get observedAttributes(){return["effect","variant"]}attributeChangedCallback(e,t,n){"effect"===e&&(tB(this,tY).className=tW(this,t$,tJ).call(this,n)),"variant"===e&&(tB(this,tU).className=tW(this,tV,tQ).call(this,n))}get effect(){return this.getAttribute("effect")}set effect(e){this.setAttribute("effect",e)}get variant(){return this.getAttribute("variant")}set variant(e){this.setAttribute("variant",e)}static defineCustomElement(e="skeleton-placeholder"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,tG)}constructor(){super(),tz(this,t$),tz(this,tV),tz(this,tZ),tj(this,tY,{writable:!0,value:void 0}),tj(this,tU,{writable:!0,value:void 0}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tX.content.cloneNode(!0)),tH(this,tY,this.shadowRoot.querySelector('[part="wrapper"]')),tH(this,tU,this.shadowRoot.querySelector('[part="placeholder"]'))}}function tJ(e){let t="";switch(e){case"wave":t="skeleton skeleton--wave";break;case"fade":t="skeleton skeleton--fade";break;default:t="skeleton"}return t}function tQ(e){let t="";switch(e){case"circle":t="skeleton__placeholder skeleton__placeholder--circle";break;case"rect":t="skeleton__placeholder skeleton__placeholder--rect";break;case"pill":t="skeleton__placeholder skeleton__placeholder--pill";break;default:t="skeleton__placeholder"}return t}function tK(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}tG.defineCustomElement();let t0=new Map,t1=async(e,t={})=>{let n=t0.get(e);if(n)return n;let o=await fetch("https://api.rss2json.com/v1/api.json?rss_url="+e,t);if(!o.ok)throw Error("Error fetching data");let i=await o.json();return t0.set(e,i),i},t5=document.createElement("template"),t2=()=>`
    <skeleton-placeholder style="--color: var(--skeleton-color); height: 26px;"></skeleton-placeholder>
  `;t5.innerHTML=`
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
              ${t2()}
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
`;class t8 extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t5.content.cloneNode(!0))),this.spinnerEl=this.shadowRoot.getElementById("spinner"),this.dialogEl=this.shadowRoot.querySelector("dialog"),this.modalTitle=this.dialogEl.querySelector("#feedTitle"),this.feedsViewer=this.shadowRoot.getElementById("feedsViewer"),this.errorEl=this.shadowRoot.getElementById("error"),this.shadowRoot.adoptedStyleSheets=N}static get observedAttributes(){return["feed-url"]}attributeChangedCallback(e){"feed-url"===e&&(this.feedUrl?this.openFeed(this.feedUrl):this.closeFeed())}connectedCallback(){this.dialogEl.addEventListener("close",this.onFeedClose)}disconnectedCallback(){this.dialogEl.removeEventListener("close",this.onFeedClose)}get feedUrl(){return this.getAttribute("feed-url")}set feedUrl(e){e?this.setAttribute("feed-url",e):this.removeAttribute("feed-url")}openFeed(e){document.body.classList.add("overflow-hidden"),this.dialogEl.showModal(),this.renderFeed(e)}closeFeed(){this.dialogEl.close()}onFeedClose=()=>{e&&e.abort(),document.body.classList.remove("overflow-hidden"),this.resetDialogContent(),this.feedUrl=null};resetDialogContent(){this.feedsViewer.querySelectorAll(".card").forEach(e=>e.remove()),this.modalTitle.innerHTML=t2(),this.spinnerEl.classList.add("d-none"),this.errorEl.classList.add("d-none")}async renderFeed(t){this.spinnerEl.classList.remove("d-none"),e=new AbortController;try{let n=await t1(t,{signal:e.signal}),{value:o=[]}=await z(),i=o.find(e=>e.url===t);i&&!i.title&&await q({url:t,title:n.feed.title||""}),this.modalTitle.textContent=n.feed.title||t,n.items.forEach(e=>{this.feedsViewer.insertAdjacentHTML("beforeend",this.feedsReaderTemplate(e))})}catch(e){"AbortError"!==e.name&&(console.error(e),this.modalTitle.textContent="",this.errorEl.classList.remove("d-none"))}finally{this.spinnerEl.classList.add("d-none")}}feedsReaderTemplate(e){let{link:t,title:n,description:o,author:i,pubDate:r,thumbnail:a}=e,s="";try{s=new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}).format(new Date(r))}catch{s="-"}return`
      <div class="card mb-3">
        <div class="card-body">
          <a href="${t}" target="_blank" rel="noreferrer noopener" class="d-flex justify-content-between gap-3 text-decoration-none" style="color: inherit;">
            <div style="min-width: 0;">
              <h5 class="card-title h6">${n}</h5>
              <p class="text-muted text-truncate"><small>${s} ${i?`&bull; ${i}`:""}</small></p>
            </div>

            <img src="${a}" alt="${n}" width="120" height="70" class="thumbnail rounded" loading="lazy" />
          </a>

          <details>
            <summary>Read more...</summary>
            <div class="feed-description-viewer">
              ${o}
            </div>
          </details>
        </div>
      </div>
    `}}window.customElements.get("feed-reader")||window.customElements.define("feed-reader",t8),document.adoptedStyleSheets=N}();
//# sourceMappingURL=index.c7de9545.js.map
