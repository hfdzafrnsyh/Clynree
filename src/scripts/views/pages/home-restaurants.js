import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantTemplate, loadingItem } from '../templates/template-creator'

const HomeRestaurant = {
  async render () {
    return `
    
   
    <section class="wrapper">
    <h2 tabindex="0">Explore Restaurant</h2>
       <div id="loading"></div>
             <div class="card-element"  id="card-restaurant"> 
              </div>
       </section>
     
        `
  },

  async afterRender () {
    const loading = document.querySelector('#loading')
    const cardRestaurant = document.querySelector('#card-restaurant')
    loading.innerHTML = loadingItem()

    try {
      const dataRestaurant = await RestaurantSource.listRestaurant()
      dataRestaurant.forEach(restaurant => {
        cardRestaurant.innerHTML += createRestaurantTemplate(restaurant)
      })

      loading.style.display = 'none'
    } catch (error) {
      loading.style.display = 'none'
      cardRestaurant.innerHTML += '<h3 tabindex="0" class="restaurant-not-found">Error: Whoops Something Went Wrong!</h3>'
      console.log(error)
    }
  }

}

export default HomeRestaurant
