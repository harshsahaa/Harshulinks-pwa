// ✅ Must be first line
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('harshulinks-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/?offline=true'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

