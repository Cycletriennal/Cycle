// ═══════════════════════════════════════════════════════
//  SERVICE WORKER — Cycle Triennal
//  Stratégie : Cache-first pour les assets locaux,
//              Network-first pour les appels Sefaria/Google
// ═══════════════════════════════════════════════════════

const CACHE_NAME = 'cycle-triennal-v1';

// Assets locaux mis en cache dès l'installation
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Domaines réseau — jamais interceptés (toujours en ligne)
const NETWORK_ONLY_DOMAINS = [
  'sefaria.org',
  'translate.googleapis.com'
];

// ── Installation : mise en cache des assets locaux ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── Activation : suppression des anciens caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch : stratégie intelligente ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 1. Requêtes réseau externes (Sefaria, Google Translate, Google Fonts)
  //    → Network-first, pas de mise en cache
  const isExternal = NETWORK_ONLY_DOMAINS.some(d => url.hostname.includes(d));
  if (isExternal || url.origin !== self.location.origin) {
    event.respondWith(
      fetch(event.request).catch(() => {
        // Si hors-ligne et que c'est une police Google, on laisse échouer silencieusement
        return new Response('', { status: 503, statusText: 'Offline' });
      })
    );
    return;
  }

  // 2. Assets locaux (index.html, manifest, icônes)
  //    → Cache-first, avec mise à jour réseau en arrière-plan (stale-while-revalidate)
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => cached); // Si hors-ligne, retourne le cache

        return cached || networkFetch;
      })
    )
  );
});
