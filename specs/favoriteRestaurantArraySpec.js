/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'

let favoriteRestaurant = []

const FavoriteRestaurantArray = {

  getRestaurant (id) {
    if (!id) {
      return
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id == id)
  },

  getAllRestaurant () {
    return favoriteRestaurant
  },

  putRestaurant (restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    if (this.getRestaurant(restaurant.id)) {
      return
    }

    favoriteRestaurant.push(restaurant)
  },

  deleteRestaurant (id) {
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id != id)
  }
}

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurant = [])

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray)
})
