import API_ENDPOINT from '../global/api-endpoint'
import CONFIG from '../global/config'

class RestaurantSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async addReview (review) {
    const response = await fetch(API_ENDPOINT.SEND_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY
      },
      body: JSON.stringify(review)
    })
    return response
  }
}

export default RestaurantSource
