if(!self.define){let e,d={};const a=(a,i)=>(a=new URL(a+".js",i).href,d[a]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=d,document.head.appendChild(e)}else e=a,importScripts(a),d()})).then((()=>{let e=d[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(d[c])return;let n={};const s=e=>a(e,c),b={module:{uri:c},exports:n,require:s};d[c]=Promise.all(i.map((e=>b[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-6716fad7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"180.9aaad6a8.png",revision:"b3a23dca48f21f2754042dcc4b17bbc4"},{url:"192.ffb825f5.png",revision:"0dd7cb0815747a0327a40b9b55e8c9a4"},{url:"384.8096e822.png",revision:"c6af2bb3ab052b01a374258cd12ba1a3"},{url:"512.6a784401.png",revision:"848f43da3e168bcaed4a05dc1d2c02f6"},{url:"bootstrap.0d041aa5.css",revision:"b42cf33de9c84ed6454044e9b9c8c5a9"},{url:"bootstrap.0d041aa5.css.map",revision:"1b77670a1f6f091bcdbbb0b8d78fcc5d"},{url:"favicon-192.e081d247.png",revision:"521f88b6f070fdf2cf81a1ed5d5a49b5"},{url:"index.5fa12010.js",revision:"42231dbbcc1ea0328ca28157a2a57195"},{url:"index.5fa12010.js.map",revision:"d1decd51e332cca714b8c92d2366e0cf"},{url:"index.9150454a.js",revision:"8e93cdc9d70f231d84236e0181d94663"},{url:"index.9150454a.js.map",revision:"e9ba0c4e6aa140d62954a0d95b1d4d33"},{url:"index.b67d8b0e.js",revision:"13b84570f9958bf918baadde98a29669"},{url:"index.b67d8b0e.js.map",revision:"948bfa15dd7724633364f7b8d1a9e1c4"},{url:"index.d4365515.js",revision:"3d5e57d3119f5b52b2d15865fb72a9b0"},{url:"index.d4365515.js.map",revision:"002af492315bca6c87e7689e2e7bffcd"},{url:"index.html",revision:"f30785e88b432eae6d4d14de580e8181"},{url:"main.c01a1fe6.css",revision:"8b18af30516e9eab83c5fa401a154528"},{url:"main.c01a1fe6.css.map",revision:"14c4e2d80a0bfbde13928c0fa2651258"},{url:"manifest.webmanifest",revision:"d75134396e7a6d7e97f28c74a38ae121"},{url:"screenshot_dark.1cd65fb1.png",revision:"f90b5bd4653f16fb11303590c1f9aa98"},{url:"screenshot_light.5214ebb4.png",revision:"2b1ec85da9fd1daf5d48877bc426d3b3"}],{})}));
//# sourceMappingURL=service-worker.js.map
