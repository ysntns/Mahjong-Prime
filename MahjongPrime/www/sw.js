"use strict";

var CACHE_NAME = 'mahjong-prime-v3.0.0';
var urlsToCache = [
    './',
    './index.html',
    './css/normalize.css',
    './css/mahjong.css',
    './css/mahjong_verysmallscreen.css',
    './css/mahjong_smallscreen.css',
    './css/mahjong_bigscreen.css',
    './css/mahjong_verybigscreen.css',
    './lib/jquery/jquery-2.1.0.min.js',
    './lib/l10n.js',
    './lib/sparouter.js',
    './js/mahjong.js',
    './js/pointCalculation.js',
    './js/turtle.js',
    './js/flower.js',
    './js/spider.js',
    './js/cloud.js',
    './js/bug.js',
    './js/fourHills.js',
    './images/application_icons.png',
    './images/application_icons_small.png',
    './images/background_classic.jpg',
    './images/background_fruits.jpg',
    './images/background_highvisibility.jpg',
    './images/cup_small.png',
    './images/layouts_thumbs.png',
    './images/shadow_bigscreen.png',
    './images/shadow_smallscreen.png',
    './images/shadow_verybigscreen.png',
    './images/shadow_verysmallscreen.png',
    './images/mahjong_bigscreen_classic.png',
    './images/mahjong_bigscreen_classic_bw.png',
    './images/mahjong_bigscreen_fruits.png',
    './images/mahjong_bigscreen_fruits_bw.png',
    './images/mahjong_bigscreen_highvisibility.png',
    './images/mahjong_bigscreen_highvisibility_bw.png',
    './images/mahjong_smallscreen_classic.png',
    './images/mahjong_smallscreen_classic_bw.png',
    './images/mahjong_smallscreen_fruits.png',
    './images/mahjong_smallscreen_fruits_bw.png',
    './images/mahjong_smallscreen_highvisibility.png',
    './images/mahjong_smallscreen_highvisibility_bw.png',
    './images/mahjong_verybigscreen_classic.png',
    './images/mahjong_verybigscreen_classic_bw.png',
    './images/mahjong_verybigscreen_fruits.png',
    './images/mahjong_verybigscreen_fruits_bw.png',
    './images/mahjong_verybigscreen_highvisibility.png',
    './images/mahjong_verybigscreen_highvisibility_bw.png',
    './images/mahjong_verysmallscreen_classic.png',
    './images/mahjong_verysmallscreen_classic_bw.png',
    './images/mahjong_verysmallscreen_fruits.png',
    './images/mahjong_verysmallscreen_fruits_bw.png',
    './images/mahjong_verysmallscreen_highvisibility.png',
    './images/mahjong_verysmallscreen_highvisibility_bw.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName !== CACHE_NAME;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
