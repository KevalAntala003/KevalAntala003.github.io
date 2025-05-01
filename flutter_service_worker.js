'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a6a8791881379159a3ea580a6d0a783d",
"version.json": "84057b5290e7d4b5e7c1eed074221621",
"index.html": "d58ff845337c870a003f7e875a4e772c",
"/": "d58ff845337c870a003f7e875a4e772c",
"main.dart.js": "7292d64d16ec02748ed1717e66552ffd",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "70e3a0672dd055734d1174092bea4d5e",
"icons/Icon-192.png": "7af58cf8fc0a023e848fe919fab8607d",
"icons/Icon-maskable-192.png": "7af58cf8fc0a023e848fe919fab8607d",
"icons/Icon-maskable-512.png": "6fa8118ff4954d49fe6ebb28bf0c9e9c",
"icons/Icon-512.png": "6fa8118ff4954d49fe6ebb28bf0c9e9c",
"manifest.json": "1fdfc04f6ec0173e569796c6db6f8342",
"assets/AssetManifest.json": "334e8dc1501c18d76ec9e6f7387a303f",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "340a36622b1cba99797807a6c762d424",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/AssetManifest.bin.json": "b2da216586d18d85fa6985f9ed8d64e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ef233ea1c13238c38294fce2c427d712",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2cdcae1357411b9bcc712fe3bea409c5",
"assets/fonts/MaterialIcons-Regular.otf": "7809869ac262e1e7db103e68aaad8e98",
"assets/assets/images/googleplay.png": "53aa2ac86504c8342aa08d4a6c22f834",
"assets/assets/images/By8.png": "c48a2448486429615b140888375fc54b",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/ai_lens.jpeg": "266f36f2128b302b73e3cf7314ae3bf4",
"assets/assets/images/dev_img.png": "1487d1b4b98ccb05a7a38b29e71195a5",
"assets/assets/images/my6.png": "604032bcf367376e9fcec03c05f544ab",
"assets/assets/images/my7.png": "e6fb4ad69515647e670989cf50ec6abd",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/my5.png": "6cfb78c8ed455f64caa283929566138e",
"assets/assets/images/my4.png": "1dbfd779180221a34151e016944f9ac4",
"assets/assets/images/hr3.png": "b0e1ebf8f7d69ceda6e9e4e816d83c24",
"assets/assets/images/my1.png": "c4f9031ac9ba02ac3e30fec6ff71d691",
"assets/assets/images/hr2.png": "196ab903c39e37ab3a056c5456da76fc",
"assets/assets/images/my_service.png": "e8fafda8534d02c7fcb8962c868c0adc",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/my3.png": "a971b9e9a3414b50bdd198bad833cd85",
"assets/assets/images/appstore.png": "69d4fd1d4b884bed2a767d4a62f151c0",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/my2.png": "e169ee82b73a6179fcfd0f31837858bf",
"assets/assets/images/hr1.png": "211e8b7cad3c3c7c4c9c049711c7872e",
"assets/assets/images/Pc1.png": "9a5129a565ca9ab9c28ee7d676584d46",
"assets/assets/images/Pc2.png": "7abed54a166b7291d1c7e4e6487fae33",
"assets/assets/images/Pc3.png": "9fb52fd5bea11b9e0139dd7adc37680c",
"assets/assets/images/By3.png": "787872e8d47f65c94faf62370c9cccb6",
"assets/assets/images/By2.png": "a8c3abe0a6160eb0e4ffd7cc82c0ff3e",
"assets/assets/images/By1.png": "6b0260b20dbfebf367695e7a927498f3",
"assets/assets/images/By5.png": "c76a62b1dec62f518ec6b009712dfc8a",
"assets/assets/images/By4.png": "e716fe25fda42595fc712a605965d645",
"assets/assets/images/By6.png": "60fd4d83879f16cb6e80bc93626b7ae2",
"assets/assets/images/By7.png": "3f8f585c5253b138c78ec6e41677ceff",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
