const VERSION = "blackdragon-v1";
const FILES = ["./", "index.html", "programs/crossfit.js", "programs/halterofilia.js", "manifest.webmanifest",
  "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-512-maskable.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const path = new URL(e.request.url).pathname;
  const fresh = e.request.mode === "navigate" || path.endsWith("/") || /\.(html|js)$/.test(path);
  e.respondWith(caches.open(VERSION).then(async cache => {
    const cached = await cache.match(e.request, {ignoreSearch: true});
    const network = fetch(e.request, {cache: "no-cache"}).then(r => {
      if (r.ok) cache.put(e.request, r.clone());
      return r;
    });
    if (!fresh) return cached || network;
    const timeout = new Promise(resolve => setTimeout(() => resolve(cached), 3000));
    try {
      return (await Promise.race([network, cached ? timeout : network])) || cached || await network;
    } catch (_) {
      return cached || Response.error();
    }
  }));
});
