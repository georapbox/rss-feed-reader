if(!self.define){let e,d={};const c=(c,i)=>(c=new URL(c+".js",i).href,d[c]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=d,document.head.appendChild(e)}else e=c,importScripts(c),d()})).then((()=>{let e=d[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let n={};const s=e=>c(e,r),b={module:{uri:r},exports:n,require:s};d[r]=Promise.all(i.map((e=>b[e]||s(e)))).then((e=>(a(...e),n)))}}define(["./workbox-6716fad7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"180.9aaad6a8.png",revision:"b3a23dca48f21f2754042dcc4b17bbc4"},{url:"192.ffb825f5.png",revision:"0dd7cb0815747a0327a40b9b55e8c9a4"},{url:"384.8096e822.png",revision:"c6af2bb3ab052b01a374258cd12ba1a3"},{url:"512.6a784401.png",revision:"848f43da3e168bcaed4a05dc1d2c02f6"},{url:"bootstrap.0d041aa5.css",revision:"b42cf33de9c84ed6454044e9b9c8c5a9"},{url:"bootstrap.0d041aa5.css.map",revision:"1b77670a1f6f091bcdbbb0b8d78fcc5d"},{url:"favicon-192.e081d247.png",revision:"521f88b6f070fdf2cf81a1ed5d5a49b5"},{url:"index.1d5fd3bc.js",revision:"3986073e4844c5ec9c2fdab1d2342a0b"},{url:"index.1d5fd3bc.js.map",revision:"e1e89cec29d1a0cd360712a724ea3c8c"},{url:"index.5fa12010.js",revision:"42231dbbcc1ea0328ca28157a2a57195"},{url:"index.5fa12010.js.map",revision:"d1decd51e332cca714b8c92d2366e0cf"},{url:"index.d4365515.js",revision:"3d5e57d3119f5b52b2d15865fb72a9b0"},{url:"index.d4365515.js.map",revision:"002af492315bca6c87e7689e2e7bffcd"},{url:"index.ebb5ee0c.js",revision:"c4c9e29ad3a5364bb2088a614210de88"},{url:"index.ebb5ee0c.js.map",revision:"c4ab8ae4a7895179def21a8f36711e3c"},{url:"index.html",revision:"d8f438b48ec776ddc83b24fd26fd1df1"},{url:"main.743d9779.css",revision:"a77b483001dddf66799b639712b30a20"},{url:"main.743d9779.css.map",revision:"9df2c6df42011e88de23b63acc1c5028"},{url:"manifest.webmanifest",revision:"f966894dc9bdf277b7910117b5462a27"},{url:"screenshot.9766fb44.png",revision:"d26369cf8a2a02fdb7d47779329b802f"}],{})}));
//# sourceMappingURL=service-worker.js.map
