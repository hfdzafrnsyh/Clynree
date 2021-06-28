import NavDrawer from '../utils/nav-drawers'
import UrlParse from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor ({ button, drawer, mainContent }) {
    this._button = button
    this._drawer = drawer
    this._mainContent = mainContent

    this._initialApps()
  }

  _initialApps () {
    NavDrawer.init({
      button: this._button,
      drawer: this._drawer,
      mainContent: this._mainContent
    })
  }

  async renderPage () {
    const url = UrlParse.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._mainContent.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
