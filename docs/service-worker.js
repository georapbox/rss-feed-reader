if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const n=e=>c(e,r),s={module:{uri:r},exports:f,require:n};i[r]=Promise.all(a.map((e=>s[e]||n(e)))).then((e=>(d(...e),f)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"180.9aaad6a8.png",revision:"b3a23dca48f21f2754042dcc4b17bbc4"},{url:"192.ffb825f5.png",revision:"0dd7cb0815747a0327a40b9b55e8c9a4"},{url:"384.8096e822.png",revision:"c6af2bb3ab052b01a374258cd12ba1a3"},{url:"512.6a784401.png",revision:"848f43da3e168bcaed4a05dc1d2c02f6"},{url:"bootstrap.b962f832.css",revision:"04983d7268dfbc0a9b73c49ab2e9c577"},{url:"bootstrap.b962f832.css.map",revision:"96cd91615ebd080814f45fb72f24d133"},{url:"favicon-192.e081d247.png",revision:"521f88b6f070fdf2cf81a1ed5d5a49b5"},{url:"index.2ea3fa88.js",revision:"d06006796898db88f90a4214a06db60b"},{url:"index.2ea3fa88.js.map",revision:"2c14efe14dbf6f6cc36813f9300ed2dc"},{url:"index.5fa12010.js",revision:"42231dbbcc1ea0328ca28157a2a57195"},{url:"index.5fa12010.js.map",revision:"918dfeec211c012b2f74b842f7946919"},{url:"index.84d098aa.js",revision:"31b3dbcaf6b1ff235919b9a9cd10e3f2"},{url:"index.84d098aa.js.map",revision:"4963b85430cdf416bd1622660b0e781f"},{url:"index.c9f882a9.js",revision:"04ca6c211d7dbec32cc350a74a311978"},{url:"index.c9f882a9.js.map",revision:"497518c62cdf6cf08b0066a2f5ed8b23"},{url:"index.html",revision:"f0ccf6899d86b97b41c1e43087dc760a"},{url:"main.82ca4913.css",revision:"955ca827916f4ebcac7193bc3bcef684"},{url:"main.82ca4913.css.map",revision:"397e69c27b665576266a62cfdd2ed41f"},{url:"manifest.webmanifest",revision:"d2d6743324d9b8300577e6b2b008a268"},{url:"screenshot_dark.458ff1e2.png",revision:"c012903caa0195952daaa2e911b37888"},{url:"screenshot_light.68d807b4.png",revision:"1f9b1978a886ebc70af260cb04b733d3"}],{})}));
//# sourceMappingURL=service-worker.js.map
