/* eslint-disable no-unused-vars */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-database'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb)
})
