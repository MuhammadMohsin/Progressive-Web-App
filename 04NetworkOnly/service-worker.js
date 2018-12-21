self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
