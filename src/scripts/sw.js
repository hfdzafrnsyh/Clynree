import 'regenerator-runtime'
import CacheHelper from './utils/cache-helpers'

const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker')
  event.waitUntil(CacheHelper.cachingRestaurantApp([...assets, './']))
})

self.addEventListener('activate', (event) => {
  console.log('Activated Service Worker')
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
})
