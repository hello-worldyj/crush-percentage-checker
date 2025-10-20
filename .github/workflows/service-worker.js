self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('love-checker-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './heart.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
