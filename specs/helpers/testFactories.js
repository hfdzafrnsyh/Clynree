/* eslint-disable no-unused-vars */
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter'
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-database'

const createFavoriteButtonPresenterRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createFavoriteButtonPresenterRestaurant }
