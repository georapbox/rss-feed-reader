if(!self.define){let e,i={};const c=(c,f)=>(c=new URL(c+".js",f).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(f,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const s=e=>c(e,d),b={module:{uri:d},exports:n,require:s};i[d]=Promise.all(f.map((e=>b[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"180.7bf2a919.png",revision:"e0e6506e2c6d68e67b5216d2e2e9d279"},{url:"192.bb58cb51.png",revision:"d95c67511305d57484661ace299df673"},{url:"384.2497e760.png",revision:"7513f0ef31bd0a4dc90d4fc714d09581"},{url:"512.abf7862a.png",revision:"8e22b2040007c33969fea990fe5465cc"},{url:"bootstrap.33ff2998.css",revision:"75416cf388ce73317c787e7363673496"},{url:"bootstrap.33ff2998.css.map",revision:"9e4e4208c50a591ba8f929d04db42878"},{url:"favicon-192.c4da8b1a.png",revision:"234a13f4a216f2ae0b11b2771b3273c7"},{url:"index.2b8c09b0.js",revision:"4d0f5621a5c07c710f752fb8173c55a6"},{url:"index.2b8c09b0.js.map",revision:"ee534df2b35c1342d9eb04112cd9f5f1"},{url:"index.89efe45b.js",revision:"6814a61841cd719f59765d1ee48ea09a"},{url:"index.89efe45b.js.map",revision:"c88920bec0571a6511e504850de79c03"},{url:"index.c4734e4f.js",revision:"f46b7a4f4ebb1c72cbed74a0bd95ed53"},{url:"index.c4734e4f.js.map",revision:"047e4969e202ce49be9c2ae1bc3bc9f4"},{url:"index.d44e81ec.js",revision:"b90a75d7c5128c18c30bf621d43c8122"},{url:"index.d44e81ec.js.map",revision:"4f7febc735b0a98935455f8329214edd"},{url:"index.html",revision:"73aae6b7f187eb994cef00b10ab1de48"},{url:"index.runtime.14ff93db.js",revision:"1c5c51650fa5ff3f070749ca1e3783f8"},{url:"index.runtime.14ff93db.js.map",revision:"38e1642e60697b3f460fb5aef4f5a506"},{url:"index.runtime.af7604cc.js",revision:"9df6bf3a0295efd00954592170272bfd"},{url:"index.runtime.af7604cc.js.map",revision:"58016a219f0d77e73a7f9ab73cf5fb0d"},{url:"main.2238cf96.css",revision:"106c8f8954ba8d68bd4a38761d3ba02d"},{url:"main.2238cf96.css.map",revision:"9e36e8fb99da3d7714f63040929fe23b"},{url:"manifest.webmanifest",revision:"490b82406161245c75d5a1df136b83cc"},{url:"screenshot_dark.ef8c2713.png",revision:"4b2a0eddebdec456504268b27bbf9892"},{url:"screenshot_light.6e3c7371.png",revision:"637c4251c4d256f23dc5d70d543966bc"}],{})}));
//# sourceMappingURL=service-worker.js.map
