import FavoriteRestaurantIdb from '../../data/favorite-database'
import { createRestaurantTemplate, loadingItem } from '../templates/template-creator'

const FavoriteRestaurant = {
  async render () {
    return `
        <div class="wrapper">
        <h2 tabindex="0">Favorite Restaurant</h2>
        <div id="loading"></div>
           <div class="card-element"  id="favorite-restaurant">
            
            </div>
         </div>
        `
  },

  async afterRender () {
    const favoriteContainer = document.querySelector('#favorite-restaurant')
    const loading = document.querySelector('#loading')
    loading.innerHTML = loadingItem()

    try {
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurant()

      if (restaurant.length === 0) {
        favoriteContainer.innerHTML = `
          <h3 tabindex="0" class="restaurant-not-found">You dont have a Restaurant Favorite</h3>
        `
      }

      restaurant.forEach((restaurants) => {
        favoriteContainer.innerHTML += createRestaurantTemplate(restaurants)
      })
      loading.style.display = 'none'
    } catch (error) {
      loading.style.display = 'none'
      cardRestaurant.innerHTML += '<h3 tabindex="0" class="restaurant-not-found">Error: Whoops Something Went Wrong!</h3>'
      console.log(error)
    }
  }

}

export default FavoriteRestaurant
