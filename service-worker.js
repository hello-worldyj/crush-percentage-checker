self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('love-quiz-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './heart.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
