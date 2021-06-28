/* eslint-disable indent */
import RestaurantSource from '../../data/restaurant-source'
import UrlParse from '../../routes/url-parser'
import { detailRestaurant, buttonBackItem, loadingItem } from '../templates/template-creator'
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter'
import FavoriteRestaurantIdb from '../../data/favorite-database'
import SendReview from '../../utils/send-review'

const DetailRestaurant = {
  async render () {
    return `
      
          <div id="details" class="details">
               <div id="loading"></div>
          </div>
          <div id="backButton"></div>
          <div id="likeButtonContainer" ></div>
           
        `
  },
  async afterRender () {
    const loading = document.querySelector('#loading')
    loading.innerHTML = loadingItem()
    loading.style.display = 'block'

    try {
      const url = UrlParse.parseActiveUrlWithoutCombiner()
      const restaurant = await RestaurantSource.detailRestaurant(url.id)
      const elementRestaurant = document.querySelector('#details')
      elementRestaurant.innerHTML = detailRestaurant(restaurant)
      const backButton = document.querySelector('#backButton')
      backButton.innerHTML = buttonBackItem()

      FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          description: restaurant.description,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
          categories: restaurant.categories,
          menus: restaurant.menus,
          customerReview: restaurant.customerReviews
        }

      })

      const sendReview = document.querySelector('#sendReview')
      const addName = document.querySelector('#addName')
      const addComment = document.querySelector('#addComment')

      sendReview.addEventListener('submit', (e) => {
        e.preventDefault()

        const data = {
          id: url.id,
          name: addName.value,
          review: addComment.value
        }

        SendReview(data)
        alert('Success Ad Review!')
      })

      loading.style.display = 'none'
    } catch (error) {
      loading.style.display = 'none'
      cardRestaurant.innerHTML += '<h3 tabindex="0" class="restaurant-not-found">Error: Whoops Something Went Wrong!</h3>'
      console.log(error)
    }
  }

}

export default DetailRestaurant
