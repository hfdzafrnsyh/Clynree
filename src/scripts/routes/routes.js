import FavoriteRestaurant from '../views/pages/favorite-restaurant'
import DetailRestaurant from '../views/pages/detail-restaurant'
import HomeRestaurant from '../views/pages/home-restaurants'

const routes = {
  '/': HomeRestaurant,
  '/favorite': FavoriteRestaurant,
  '/detail/:id': DetailRestaurant
}

export default routes
