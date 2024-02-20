const CACHE_NAME = 'v1'

self.addEventListener('install', async event => {
  const cache = await caches.open(CACHE_NAME)
  await cache.addAll(['app.js', 'icon.png', 'index.html', 'manifest.json']);
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  for (let cacheName in cacheNames) {
    if (cacheName !== CACHE_NAME) {
      await caches.delete(cacheName);
    }
  }

  await self.clients.claim();
})

self.addEventListener('fetch', async event => {
  const cachedResponse = await caches.match(event.request)
  const freshResponse = await fetch(event.request)

  if (freshResponse.ok) {
    const cache = caches.open(CACHE_NAME)
    await cache.put(event.request, freshResponse.clone())
    await event.respondWith(freshResponse)
    return;
  }

  if (cachedResponse) {
    await event.respondWith(cachedResponse)
    return;
  }

  await event.respondWith(freshResponse)
})
