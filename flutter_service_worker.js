'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3ff1058211bc96e06f814a41a1068cdd",
"index.html": "f239c798243ae074fb02d7af1d0b3c48",
"/": "f239c798243ae074fb02d7af1d0b3c48",
"main.dart.js": "6d02f5ce2bccb04a30915aa58a5a8a36",
"flutter.js": "d41d8cd98f00b204e9800998ecf8427e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "854dfdeab885f33f34dfc9a59a8abadf",
"assets/AssetManifest.json": "1c5127a722715ba36a42c1c2bed4b24a",
"assets/NOTICES": "f74925b927ce0085d162abb593114f6d",
"assets/FontManifest.json": "6f2a05468b14e60a0ddac172ca5dfac3",
"assets/AssetManifest.bin.json": "f0d0e65a4d7c37fc3d84268892501998",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/lib/packages/csc_picker/json/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/AssetManifest.bin": "0745da1ab8bc602032e1ad1c1ce71f94",
"assets/fonts/MaterialIcons-Regular.otf": "d216964bc75405329d4dd30312e892b6",
"assets/assets/images/add_image.svg": "4ffa598d869ed63f97a12757337e366f",
"assets/assets/images/user_place.png": "2c5419d4299950dd208aa16a399d5fd1",
"assets/assets/images/qr_code.png": "2e5ec693aa0ae68a1c6f2b9aed6f2fd4",
"assets/assets/images/app_logo.png": "e514f4163dabbcdbdf830b10ad1aaa5b",
"assets/assets/json/coming_soon.json": "6c724fb9ee1ab29a8edef1a54a8a7c1a",
"assets/assets/icon/ic_filter.svg": "05c39c6e130f506e8430cae1bd421161",
"assets/assets/icon/ic_create_admin_drawer.svg": "960991e4ae0f91a9f82d1c78f59d35d6",
"assets/assets/icon/ic_delete.svg": "43770ce4382ea4e4966371eb1cac3e07",
"assets/assets/icon/ic_complain_drawer.svg": "2a25b33c21aa5803916c8e75f6f276fa",
"assets/assets/icon/ic_notification_drawer.svg": "9ee73f2de37c5886f17114e887a858af",
"assets/assets/icon/ic_master_drawer.svg": "e322e99ae353cf4a3286889b6a9af973",
"assets/assets/icon/ic_member_request_drawer.svg": "ca3a66d1e99d3f1d5ba8d7e272d07b79",
"assets/assets/icon/ic_add.svg": "555d76a69d50ce7ceaaab0d122df659d",
"assets/assets/icon/ic_dashboard_drawer.svg": "9ee73f2de37c5886f17114e887a858af",
"assets/assets/icon/ic_uploads_drawer.svg": "94bf4c067467aa4ca9cab7a236dc036e",
"assets/assets/icon/ic_close.svg": "d09ae669de7bf00fdfdf41a95ef16073",
"assets/assets/icon/ic_visitor_drawer.svg": "2af4a8de7ac182b9580b145b5dd67448",
"assets/assets/icon/ic_office_booking_drawer.svg": "3ba3d924bba1d3d8980dc9790d33cdf0",
"assets/assets/icon/ic_member_drawer.svg": "997c33ae141092a453fc8c6257a3c162",
"assets/assets/icon/ic_payment_drawer.svg": "3b70ab6b006bb0a166e558d1d64e86af",
"assets/assets/icon/ic_ruppes.svg": "7cc388d36b2fb22c2ee2e36afe8f61bd",
"assets/assets/icon/ic_how_to_use_drawer.svg": "bd60e43126d56c8b808ee88d82666a54",
"assets/assets/icon/ic_arrow.svg": "263179d34bb8dea5503091c7f8ab922e",
"assets/assets/icon/ic_search.svg": "fc940b313f13c7e870f6b4dbd4ce4362",
"assets/assets/icon/ic_edit.svg": "8114e1a6c9ed4375a7736bcc2307cb09",
"assets/assets/icon/ic_event_drawer.svg": "a8198a348efdd4f60ae7b8dad2fcfa18",
"assets/assets/icon/ic_export.svg": "f75fda13f32786d7558492a1638a45e6",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
