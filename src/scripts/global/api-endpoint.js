import CONFIG from './config'

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  FAVORITE: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}?`,
  SEND_REVIEW: `${CONFIG.BASE_URL}review`
}

export default API_ENDPOINT
