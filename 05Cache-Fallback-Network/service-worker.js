var cacheName = 'demo-app';
var filesToCache = [
  '/',
  '/app.js',
  '/style.css',
  '/index.html',  
];

self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
});

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
   caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(async function() {
    const response = await caches.match(event.request);
    return response || fetch(event.request);
  }());
});
