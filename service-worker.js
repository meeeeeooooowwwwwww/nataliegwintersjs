// service-worker.js

self.addEventListener('fetch', event => {
    // Check if navigation preload is enabled
    if (event.preloadResponse) {
      event.respondWith(
        (async () => {
          // Wait for the preload response to settle
          const preloadResponse = await event.preloadResponse;
          
          if (preloadResponse) {
            return preloadResponse;
          }
          
          // If there's no preload response, fallback to network fetch
          return fetch(event.request);
        })()
      );
    } else {
      // If navigation preload is not enabled, fallback to network fetch
      event.respondWith(fetch(event.request));
    }
  });