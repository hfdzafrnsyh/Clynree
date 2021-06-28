const NavDrawer = {
  init ({ button, drawer, mainContent }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer)
    })

    mainContent.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer)
    })
  },

  _toggleDrawer (e, drawer) {
    e.stopPropagation()
    drawer.classList.toggle('slides')
  },

  _closeDrawer (e, drawer) {
    e.stopPropagation()
    drawer.classList.remove('slides')
  }

}

export default NavDrawer
