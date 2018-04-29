// The service worker to be used for this sub-element.
var CACHE_NAME = 'my-static-site-cache-v1';
var urlsToCache = [
  '/',
  '/static/polyfill.min.js',
    '/static/require.min.js',
    '/static/dist.js',
    '/static/knockout-3.4.2.js',
    '/static/jquery-3.2.1.min.js'
];


self.addEventListener('install', function (e) {
    e.waitUntil(
	caches.open(CACHE_NAME)
	    .then(function (cache) {
		console.log('Opened cache ' + CACHE_NAME);
		return cache.addAll(urlsToCache);
	    }, function (err) {
		console.log('could not event open cache ' + CACHE_NAME);
	    }));
});

// Deal with statically cached content
self.addEventListener('fetch', function (e) {
    e.respondWith(
	caches.match(e.request)
	    .then(function (response) {
		if (response) {
		    return response;
		}
		return fetch(e.request);
	    }));
});
