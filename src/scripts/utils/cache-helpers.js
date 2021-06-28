import CONFIG from '../global/config'

const CacheHelper = {
  async cachingRestaurantApp (request) {
    const cache = await this._openCache()
    cache.addAll(request)
  },

  async deleteOldCache () {
    const cacheName = await caches.keys()
    cacheName
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName))
  },

  async revalidateCache (request) {
    const response = await caches.match(request)

    if (response) {
      this._fetchRequest(request)
      return response
    }

    return this._fetchRequest(request)
  },

  async _openCache () {
    return caches.open(CONFIG.CACHE_NAME)
  },

  async _fetchRequest (request) {
    const response = await fetch(request)

    if (!response || response.status !== 200) {
      return response
    }

    await this._addCache(request)
    return response
  },

  async _addCache (request) {
    const cache = await this._openCache()
    cache.add(request)
  }

}

export default CacheHelper
