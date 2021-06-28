import NotificationHelper from './notification-helper'
import CONFIG from '../global/config'

const WebSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },

  _onMessageHandler (message) {
    const moviePlay = JSON.parse(message.data)
    NotificationHelper.sendNotification({
      title: `${moviePlay.title} Play on RestaurantApp`,
      options: {
        body: moviePlay.overview,
        image: `${CONFIG.WEB_SOCKET_IMAGE_URL + moviePlay.poster_path}`
      }
    })
  }

}

export default WebSocketInitiator
