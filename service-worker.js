if(!self.define){const o=async o=>{if("require"!==o&&(o+=".js"),!e[o]&&(await new Promise(async i=>{if("document"in self){const e=document.createElement("script");e.src=o,document.head.appendChild(e),e.onload=i}else importScripts(o),i()}),!e[o]))throw new Error(`Module ${o} didn’t register its module`);return e[o]},i=async(i,e)=>{const a=await Promise.all(i.map(o));e(1===a.length?a[0]:a)};i.toUrl=o=>`./${o}`;const e={require:Promise.resolve(i)};self.define=(i,a,r)=>{e[i]||(e[i]=new Promise(async e=>{let n={};const f={uri:location.origin+i.slice(1)},c=await Promise.all(a.map(i=>"exports"===i?n:"module"===i?f:o(i))),t=r(...c);n.default||(n.default=t),e(n)}))}}define("./service-worker.js",["./workbox-5d3caa67"],(function(o){"use strict";o.skipWaiting(),o.clientsClaim(),o.precacheAndRoute([{url:"app.js",revision:"ceda89e1572046c0561487615f0046e2"},{url:"favicon.ico",revision:"d7cba811185150a83fd1653e5e9aee52"},{url:"icons/icon-192.png",revision:"1ddf1f71fe5338573fa06d480c9ab6c7"},{url:"icons/icon-512.png",revision:"7cfd20e845682c76a846114a0321a89d"},{url:"icons/icon_128.png",revision:"57c17409e171a316fff61d17c217e23b"},{url:"img/roboto-mono-latin-100.woff",revision:"cf6d683a8f9c5663563d12f466d42c59"},{url:"img/roboto-mono-latin-100.woff2",revision:"17f4661402646db18537d346ad2e0f37"},{url:"img/roboto-mono-latin-100italic.woff",revision:"d553aa0cffa8231d3c4fa419c2113bbd"},{url:"img/roboto-mono-latin-100italic.woff2",revision:"3e35c3695d45b0e4c0ad5eb46e50415b"},{url:"img/roboto-mono-latin-300.woff",revision:"44f888000468884edc2faf9e1c967294"},{url:"img/roboto-mono-latin-300.woff2",revision:"0c8fb655ddd6b7f87e08e410b30d1ecf"},{url:"img/roboto-mono-latin-300italic.woff",revision:"f6e36c9799a9cf51247ad391dbabf923"},{url:"img/roboto-mono-latin-300italic.woff2",revision:"e470999445ae32e747dee1b56813ffab"},{url:"img/roboto-mono-latin-400.woff",revision:"6d5bc1d8c0dc6b8420463d00e33be71a"},{url:"img/roboto-mono-latin-400.woff2",revision:"0c94e034ca06357576c2d03d623e1fcd"},{url:"img/roboto-mono-latin-400italic.woff",revision:"fce1aae7a5427ca04e739cfc4d77a913"},{url:"img/roboto-mono-latin-400italic.woff2",revision:"2820fa2acd542ff7b04d97821392d566"},{url:"img/roboto-mono-latin-500.woff",revision:"3f107f0a4cf59cba836c6cad6b76c224"},{url:"img/roboto-mono-latin-500.woff2",revision:"6221bb5e9ca6f51a91ebcbe89ad10361"},{url:"img/roboto-mono-latin-500italic.woff",revision:"8f683f310450928c8acc32caa82bb5b0"},{url:"img/roboto-mono-latin-500italic.woff2",revision:"b340d3a4eb064d6cbe74a55f51e3ea50"},{url:"img/roboto-mono-latin-700.woff",revision:"b5ee3da2876c44c6d7d2d6bac0cdba0b"},{url:"img/roboto-mono-latin-700.woff2",revision:"73491684849da6c94511623a2f5ae93d"},{url:"img/roboto-mono-latin-700italic.woff",revision:"b933305ebfd47a7f5d26380d97242113"},{url:"img/roboto-mono-latin-700italic.woff2",revision:"a516d634263cef2229a84c016cce883d"},{url:"index.html",revision:"5628e0149530e36ec2550ebde6cb9bcf"},{url:"manifest.json",revision:"04fe4f5eed277a4a25927a0df4e220b3"},{url:"timer.mp3",revision:"9eef5a4906e1c84e6a7410427c3e96e1"}],{})}));
