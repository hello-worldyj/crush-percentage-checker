self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("love-quiz-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./heart.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
