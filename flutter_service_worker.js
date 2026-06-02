'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f152834fa1530f3bf9095f172818f8bc",
"version.json": "a3b5d1d3f812f1fa52e9236efc54def1",
"index.html": "9a513b60f1a8deed160b01331dcdab85",
"/": "9a513b60f1a8deed160b01331dcdab85",
"main.dart.js": "ae4f301d569a921d0c91245f6dcc0a5b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"resume.pdf": "454434ec5dc751ff5b67095920d8965a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a1e973e8f9ca168fd02470294ac6f91b",
"assets/NOTICES": "9bf2893dfe9fead9f6e60051448c2abd",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/AssetManifest.bin.json": "89019ce4e3f50a28060b35db9cb36c43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "d885a0cf701fd9ee2dbacec3407ea50e",
"assets/fonts/MaterialIcons-Regular.otf": "8acb59ae8a9cb978d17c90b65b5e03a6",
"assets/assets/posts/bayes.png": "38e766c273b9d13ce21fa2450cf40c05",
"assets/assets/posts/MapREx.png": "ec7535d467dec41d871adc95f88f687d",
"assets/assets/posts/datamodelBig.jpg": "2d5c96f20b6fcc16bccb1a06296fb9fb",
"assets/assets/posts/hadoop1.webp": "b733d58d15c8ef4b7e7f9db893f71dd6",
"assets/assets/posts/hdfsA.png": "a5fe82bfe8c0987a02eadee658e9216c",
"assets/assets/posts/purviewBig.png": "75d70e1aec84c1333b0ed44d5270d867",
"assets/assets/posts/mapreduce.png": "73948ce9aa8de2c1f66e67d82fecff99",
"assets/assets/posts/datamodelingIcon.jpg": "cf0766d101f267efcb6f632b5797557a",
"assets/assets/posts/hadoopeco.png": "0f97d7e1cf783e6cc5b666bffba7de8a",
"assets/assets/posts/python2.jpeg": "6684082f97a56391916aa89f26ea503f",
"assets/assets/posts/MapRA.png": "55459f26dc53879abbbca95da22e1209",
"assets/assets/posts/python1.png": "dca3cd734f5eb8c4854f00af58e534ff",
"assets/assets/posts/bayes1.png": "3b6995779ef5f785405da567bb1ab44f",
"assets/assets/posts/microsoftfabricbig.png": "16396631db7d60bfadcc2be875a70e8d",
"assets/assets/imgs/rga.png": "589a5503777922d4132c3a269345a5bd",
"assets/assets/imgs/Tableau.jpg": "d82345d2ebd7c697e364d628577cb577",
"assets/assets/imgs/gabriels.png": "806c7190ae65ad75dcb70868eb995fbb",
"assets/assets/imgs/background_img.jpg": "2abf0d7f3601f4505919ede7b2ad32e7",
"assets/assets/imgs/flutter.png": "a4af8161a7e402dbbfa84a284dc09f2a",
"assets/assets/imgs/bamboofresh.png": "79a05a03d5f89e8968a23ae5c18e8111",
"assets/assets/imgs/03.png": "dc2ab9bf1dc7b655c283b4238c7f75b8",
"assets/assets/imgs/02.png": "105b71d9e31637d434d6988a93eb7d88",
"assets/assets/imgs/jupyter.png": "7b484e0067040d298a397c5f41b62304",
"assets/assets/imgs/powerbi.png": "32911861985ca140b8d98c188570a7f4",
"assets/assets/imgs/powerbiproject.png": "bbd7c3466a86a0b8ef0b597dfe8345c9",
"assets/assets/imgs/textAI.png": "0728caf0d8663dde91e9b0c4c3c4baf2",
"assets/assets/imgs/replit.png": "5d2a8e5a4b78b70a8ad2c20ef90dfeed",
"assets/assets/imgs/Tableau1.png": "cecdd184671cd55a30e1f4f7a6d09c96",
"assets/assets/imgs/IMG_0107.png": "a4af8161a7e402dbbfa84a284dc09f2a",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/streamlit.png": "6f922c5d4c97512bfdd5b5d5d9e2efd2",
"assets/assets/imgs/unibuddy.png": "906350ee1bc1ecdfb3b63a273aa4ab14",
"assets/assets/imgs/tcs.png": "b6d0a48fc97c68c48c1b66d8b7de680a",
"assets/assets/imgs/kitsw.jpeg": "54686c61692be06a31be1f6e007fdac7",
"assets/assets/imgs/BG01.jpg": "0f1c2311cea992e4aacfdf48722fdfe7",
"assets/assets/imgs/siue.png": "6d2856650b46fc1ef8b70707ad3f2f7a",
"assets/assets/imgs/DA2.png": "c232d869652f5d7a6c7bf8ce47088ba8",
"assets/assets/imgs/neteffects.png": "c44d866986c26e128370f9ed8bf0b4b6",
"assets/assets/imgs/BambooFreshLogo.png": "fa1e8c2dd5ddb1686b48f801a05ceeef",
"assets/assets/imgs/DA1.png": "105f7698fe9f3eb7ad902c7fa6608221",
"assets/assets/imgs/llm.png": "7fd97b59858c902928bc74d55501ba11",
"assets/assets/imgs/msfabric.png": "e1093001cd2f333f1e1e89689084e7f0",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
