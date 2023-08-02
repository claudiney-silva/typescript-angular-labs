//export type {};
//declare const self: ServiceWorkerGlobalScope;

const cacheName = "::yourserviceworker";
const version = "v0.0.1";

self.addEventListener("install", function (event) {
  console.log('install sw');
  /*
  event.waitUntil(
    caches.open(version + cacheName).then(function (cache) {
      return cache.addAll(["/", "/offline"]);
    })
  );
  */
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
      caches.keys().then(function (keys) {
        // Remove caches whose name is no longer valid
        return Promise.all(
          keys
            .filter(function (key) {
              return key.indexOf(version) !== 0;
            })
            .map(function (key) {
              return caches.delete(key);
            })
        );
      })
    );
  });

  self.addEventListener("fetch", function (event) {
    const request = event.request;
  
    // Always fetch non-GET requests from the network
    if (request.method !== "GET") {
      event.respondWith(
        fetch(request).catch(function () {
          return caches.match("/offline");
        }) //as Promise<Response>
      );
      return;
    }
  });