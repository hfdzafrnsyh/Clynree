import { createFavoriteButtonTemplate, createFavoritesButtonTemplate } from '../views/templates/template-creator'

const FavoriteButtonPresenter = {

  async init ({ favoriteButtonContainer, favoriteRestaurant, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._restaurant = restaurant
    this._favoriteRestaurant = favoriteRestaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderFavorites()
    } else {
      this._renderFavorite()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id)
    return !!restaurant
  },

  _renderFavorite () {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate()

    const favoriteButton = document.querySelector('#likeButton')
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderFavorites () {
    this._favoriteButtonContainer.innerHTML = createFavoritesButtonTemplate()

    const favoriteButton = document.querySelector('#likeButton')
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }

}

export default FavoriteButtonPresenter
