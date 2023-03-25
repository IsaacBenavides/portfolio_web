'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ea368cf15d735b774aa247f46d1e33dc",
"index.html": "c91db0d4d2fb0e7da4a299d6c743301d",
"/": "c91db0d4d2fb0e7da4a299d6c743301d",
"main.dart.js": "a0b0108ba6a228218a968a5f20d5d61c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d3dcfb45cb3a047a2c07e9c028251695",
".git/ORIG_HEAD": "9c7d575313f14d065dc56799a4a3b5e6",
".git/config": "0367456114ac6a4bd79d9f50cba758bc",
".git/objects/61/23d4ce4a0053cfac2638a7b9ea4115d9cd29bc": "f5f4757c4dbed4c371d876e57ba53ca1",
".git/objects/95/f520547e69175e85e852d892fd3332749bd6f8": "c1659b9ec812032a31a6955a117e2a69",
".git/objects/3e/7afcf44ca4943c62e274b826c0e436b119df49": "08586cf4a913735424f8b01a327fdd1d",
".git/objects/50/ce3f4f8f0106613d7df49097f48a8816d3cc4a": "afb3078407a3627ada79cbb8df54d8d8",
".git/objects/04/7115acab6560d92c9834794b34e7d2fe4f07e3": "a71425c370fa7c03791755294255b139",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/f2f6a6a1620ac868e235b7c3c052c2f6d2f839": "a323d283940865eb14120f48b3d0b385",
".git/objects/56/ca2a343e5de7c3d0a19213ff466d403b970427": "f838661dfaacb37ba4d817f966c64bde",
".git/objects/51/a9c44d300c5bcf8094bf3c90f6b66c5bb436ff": "e79c90f26956c477259d98153cc5c63e",
".git/objects/5f/294d7ebe07c226a6c89edebcfa0212370b31d7": "e08f22b9b85f8f0f9e9fd90a01404c95",
".git/objects/a4/3aa9385510cb49aec8f8f3bab170d53856d0a4": "e11307fddaf5d66fd02922f5edfeefa6",
".git/objects/d9/2763217697b53db0b4cb35db35773bbd9b8481": "475d55d58c07ae692c769a72f0e699bc",
".git/objects/ad/23da6affa1e0d323193dc02853f1b180404975": "716195ea45e05b1f0e0a4be8abd20f1f",
".git/objects/ad/245a1f24bb0838805938331335343fa4c0c1f7": "044681cfa0b27b138ba5899132788a94",
".git/objects/d7/a42e4568bc49df2f6953fbbd457053d775513f": "9e470ecff618ab10f5f60d69dcea7b83",
".git/objects/be/e3c3a8df5b455581e392aba62c4ca7246cc364": "0bb9450099252b8cd329ee8e3c81610f",
".git/objects/d1/b4f9332847c858d0da83db9d1c0aa660487ab9": "2f56db9b73d971f3d4fc1a3b064bf420",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/56cadd026402537ea76718bd540f60953f8686": "f94130b35b084b60886fd7f67a18f766",
".git/objects/f4/460e3f289e9d278472b25524d04b4f2a76cd7a": "29136c1463f60796c52901aaa769f7fd",
".git/objects/f3/0a4a4bb0fe63f2013e852dff6990f7ee886393": "ef95c61d37eaff898d33a7674ff7970c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/663be417db7912235811f859e31dbf62e5609e": "b27514fcf01db3629cfbcc28dcbcb3a4",
".git/objects/4b/790d27a76d671c0e7ca34380eb2a560b8be475": "434cf1f64081a986218caafc09008767",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/a26bd3b26403f884324df633a7e8ded67eb4c0": "fc5be35dcf72bd6cf26ad074678dad88",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/1a/bf8d46bf68716ad0b9ad43267ef7ec36f08c85": "b0b4af8d1ba21f1e4ba1661a9e3d6b98",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/99758dbf974a32339d9ac7f41aab6fffc0f076": "487c28b2b0f428cda69353f722e0b967",
".git/objects/4d/70c956cd4c20f086cacdf8117fb7e0e0352314": "7bb4779bc0ab167e92376fd681f54c1a",
".git/objects/43/526be22117f765c024557576fd7bf27f327fa2": "e9cda2c70d9d7734fbe6f02e08cbd7e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/ef3eeb93cb68b079b09549bf585d6d51f7f59b": "5508526a9a36f6d0eefa5e479b55846a",
".git/objects/5c/f97316c2d1c92fbb6881bac427971f58801423": "938cf3be04f8fddf4900563e56c72daa",
".git/objects/91/96ab797ca4116b7488495b3d03c3a5c5cee8e5": "f72184a9040ef34a7d0f96897928d649",
".git/objects/65/f26d22ccf00a013b017afa28652046126c70c3": "2d2548d2d04747d08b0b542004e1a28d",
".git/objects/62/db86582d25c4ca6f4ff8af7da3d2c3e17fdba8": "0393aa4c4d0ebcf8a229158df5fb13a6",
".git/objects/3a/9afaa9a772ad5cd5d521baf98ca8d65eea8346": "d9337f00f8232f413bb7ab29e488b33d",
".git/objects/54/001b9c468204887be799d0c9383d3fdad943e8": "f201208bf15541035e3fb5c257b13f3c",
".git/objects/5b/82cbb0fdb664f9e57be44190782dc49b8b822f": "7fe7986b10aa675ca47e4ea51672410c",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/54306262fb4e8c129f7853dbdae0ef89c1df65": "00179f0ae81de73945cb9b42f29cecce",
".git/objects/52/46996fe2107297ca606a057295977fd3f6ff51": "a358d6b7823a8a645e4f0665b18094d6",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/6b2457c08cf407eeef3243f45f4c07bef8e562": "9332478e601e2793993c6705062eec36",
".git/objects/0a/232fc2dfa6befc9a4b9bd2aef217d800f250e8": "a8c58b3d1329c2828f99b95157d3119b",
".git/objects/ba/3b78b94022267cb829b56180bd446c699c0866": "2e904584abbbb4569c35c6b54fe939be",
".git/objects/b1/2e1dc3626ac31fbeb20ef8f7d2b7be2f745caf": "5c5ab8c2b70030292aa2748a72058da7",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/3a276b4cb8b5e3ebff7c5b8c4bc69d8c6848a1": "815bcdd48a552d2ad1a12b1954c58e2c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7f936f5db8d1f004bb4bf549fc99f166fb8c78": "0bba5c2db8e2a2771fb59212b5cace7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/8c9d40e676677ba01e241a797043b0e96a3b4c": "34549f0e9816366ec07347074f57f3ea",
".git/objects/cb/1676ee2fe034f85aa4ecc8a76374598e34df6a": "00b0af2d62a902bd74b5e895f9811e7b",
".git/objects/f8/44f562d9ddca86421f2cbaa63021f10ecc15f0": "b3b295f884fb36963451adc6b7fe140e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/014b3d03f842175806306087a03d26ef016ef1": "c4076356e20625457ea85a674d882c27",
".git/objects/15/86e01c0e1679b5a7464c3b37734c629f3bae46": "918da3f64dc198358dbc7387da115a42",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/831db4e258c530a102010b69bc064fbf016b35": "431688db6da260a22077086919a4fd28",
".git/objects/76/b005897a9b58a1203a3eefacd70da02b3298fa": "29479adb0aa4616e8f1df071b08ecd60",
".git/objects/49/61be12f1060e7f0e896fd188cd911bbf0caf3b": "da676c1321e85d3e404c594a23820b69",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/7a/d26862ed2f9e175f8cf57067f365b55b33df88": "4ac5ba4b2c206ec7c670d7ba09f08094",
".git/objects/14/053581c99816d082d33eff2bd61d36e284b19f": "c22c8fedc55a50a0b3e49fa0ec9028d1",
".git/objects/14/fa0aeeac187e04bd52d7498f933d3ff54292bc": "b455f5e5e6396f84dfa0b4e6f8a846ed",
".git/objects/8e/319903efc8698b18424d517f8da8557332f844": "8f463c043bdff4c4fae2c2adcfb9da4c",
".git/objects/8e/c84e213a0c385d29f16a43943408519866d8bb": "90501a81b0997d4b72b59b05189f227f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a6e0a124a6466ba6d41f2ab15f875635",
".git/logs/refs/heads/main": "a6e0a124a6466ba6d41f2ab15f875635",
".git/logs/refs/remotes/origin/main": "4c99721a3cebe6c6aacf55498696d966",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dcea783db5081ddef4ee9e47326a7f25",
".git/refs/remotes/origin/main": "dcea783db5081ddef4ee9e47326a7f25",
".git/index": "514ba6b22fd9c5314d3aa84ec6893147",
".git/COMMIT_EDITMSG": "ed8ce0af0d18754f44bea4489aa905a3",
".git/FETCH_HEAD": "7db61268530f9a2ad7de67dd47db01e7",
"assets/AssetManifest.json": "6e80eca4df78f2fec489f58e4a0dfe5b",
"assets/NOTICES": "2c811ddfa60e78f92f18b4b935a05209",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/wifi.png": "3ee31b72dd4c6670933ebaeef3f9a11b",
"assets/assets/images/mail.png": "f907b8940ee0f5fa13578f3f057a634f",
"assets/assets/images/github.png": "c7e34c06b9160e9046cba5e64c4b294f",
"assets/assets/images/background.jpeg": "88f90b4d80926877dc02030c4ba56e9c",
"assets/assets/images/background-mobile.jpeg": "7d5e5fe7a0f5402c1dc170ad273d9f6f",
"assets/assets/images/linkedin.png": "537cd12463d5c28133c96c5104054fe1",
"assets/assets/images/battery-filled.png": "9d573cac52f01ae382edc2ec2245211b",
"assets/assets/images/phone.png": "06ce6a8d0369e7c6143fffa9efaf8c15",
"assets/assets/images/pdf.png": "25f6da5f9e69cb5560c3bfda60964bb7",
"assets/assets/images/contacts.png": "1e0fcc529ca4487f0f1dbc19e538d0a2",
"assets/assets/images/brand-apple.png": "d10c7a7b68bd94d09e8baab976b20123",
"assets/assets/images/background-tablet.jpeg": "cf39e0f061aebc447acaa16d99bc250c",
"assets/assets/files/cv.pdf": "75e6f1a05cb5ae37ddf37c2cdf97d8fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
