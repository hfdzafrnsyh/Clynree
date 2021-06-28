import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app'
import swRegister from './utils/sw-register'
import CONFIG from './global/config'
import WebSocketInitiator from './utils/websocket-initiator'

const app = new App({
  button: document.querySelector('#button-hamburger'),
  drawer: document.querySelector('nav ul'),
  mainContent: document.querySelector('#main-content')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER)
})

// date year
const date = new Date()
document.getElementById('date').innerHTML = date.getFullYear()
