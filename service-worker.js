/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6daa78c198039145d7568cc0670dfb7e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8d218db2.css",
    "revision": "dbfda11d4ae97e5c21e0ef2eb72e4ba0"
  },
  {
    "url": "assets/img/all1.4973cd05.png",
    "revision": "4973cd05833306507e60b2b88f92fc58"
  },
  {
    "url": "assets/img/delete1.abcf65f4.png",
    "revision": "abcf65f4ce14ff3ff61258291b81545b"
  },
  {
    "url": "assets/img/error.514b5e28.png",
    "revision": "514b5e284da5d92c2eb8e0232d2cda83"
  },
  {
    "url": "assets/img/get1.bfedef61.png",
    "revision": "bfedef61a60716378b01d578a6754263"
  },
  {
    "url": "assets/img/post1.01e120b0.png",
    "revision": "01e120b0e2e32255a7e00b803adf9b25"
  },
  {
    "url": "assets/img/post2.78d0bbc6.png",
    "revision": "78d0bbc6f5a0c1517ef65df74a416812"
  },
  {
    "url": "assets/img/put1.eea9765c.png",
    "revision": "eea9765cf3c63c6435be32ae45ba3cee"
  },
  {
    "url": "assets/img/put2.149069c8.png",
    "revision": "149069c86c2c2de36e85ac36dad6e8b7"
  },
  {
    "url": "assets/img/relscheme.20f4bef6.png",
    "revision": "20f4bef68d64bf57625c3b91cc2d2821"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.c297eaff.js",
    "revision": "84b987c051a2f5be2207e7f758438054"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.b3a8734e.js",
    "revision": "8ffe4e775d210276d03de47fa8e2a4d8"
  },
  {
    "url": "assets/js/14.d8e8f653.js",
    "revision": "247ab6962c40c076a8240f8512296f87"
  },
  {
    "url": "assets/js/15.5275a576.js",
    "revision": "fcb55ba3e1e5ffffa4416a288436253d"
  },
  {
    "url": "assets/js/16.5474a375.js",
    "revision": "2e8ffc63aca523f6cd975e6b8ab2ff1a"
  },
  {
    "url": "assets/js/17.f080a618.js",
    "revision": "71169f96f4eefe2761a92a0ad27117e8"
  },
  {
    "url": "assets/js/18.ac8962e1.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.f429d4cd.js",
    "revision": "07711f655ea05a9d95783933752fd94a"
  },
  {
    "url": "assets/js/2.40261184.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.03e0853e.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.ad9c72fb.js",
    "revision": "9afec4c2767de41a6b06437ee4974b1e"
  },
  {
    "url": "assets/js/22.1b67b517.js",
    "revision": "2106869a9a9a8a9f46ec6ba0f8041a6e"
  },
  {
    "url": "assets/js/23.23747c14.js",
    "revision": "20df23b04b24c92474adaf7ea06dfbed"
  },
  {
    "url": "assets/js/24.bf6b13e8.js",
    "revision": "1392a9a317e348125f65f4b01cf4b447"
  },
  {
    "url": "assets/js/26.3c108c65.js",
    "revision": "14070395307afbb22387ff5bad8d960c"
  },
  {
    "url": "assets/js/3.48a4ea16.js",
    "revision": "d203412078185bb1e03a1a16c0ac64a0"
  },
  {
    "url": "assets/js/4.e3512878.js",
    "revision": "e82d2d7c0cbf65eceb164c2b4d9f1db9"
  },
  {
    "url": "assets/js/5.44c7cda6.js",
    "revision": "956a31b5a51211553849fb62eae2af2a"
  },
  {
    "url": "assets/js/6.cb1ca25b.js",
    "revision": "fa5e8c6dd8fcfb1e81a1277f88437590"
  },
  {
    "url": "assets/js/7.ce35d75e.js",
    "revision": "5b4888d3d6bfcdf50f41d84f97b97416"
  },
  {
    "url": "assets/js/8.d2aeb2f3.js",
    "revision": "b6a14a3bc9caded74fad7965e01d9116"
  },
  {
    "url": "assets/js/9.b7deb88f.js",
    "revision": "0451ff4db2380cc8e2e1dc8fb14be457"
  },
  {
    "url": "assets/js/app.fd07a303.js",
    "revision": "2f9ae7769e77732e8dca4f5a746c00b3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "91a92270cdc7e580b9c422a1d9f58d89"
  },
  {
    "url": "design/index.html",
    "revision": "64e2cf583c8145f7c7da8293340dfba7"
  },
  {
    "url": "index.html",
    "revision": "bc90dc5ecdc859b1dd0b5674c2351e6b"
  },
  {
    "url": "intro/index.html",
    "revision": "989691ed541d6e484882b4b4e57b8838"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "84fc060ccdb5d8933681c9f36d19519b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6ec1dbefe9292f8329d98cb35670c9c4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0e125cdeed7fb799979dae3ff7ba7872"
  },
  {
    "url": "software/index.html",
    "revision": "bbf5e2fae2271c78625b198f54dc5605"
  },
  {
    "url": "test/index.html",
    "revision": "abce55d40f42f796443181ef1bb72f72"
  },
  {
    "url": "use cases/index.html",
    "revision": "3d8a6111e5dc1a8fff84eb0a139d915a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
