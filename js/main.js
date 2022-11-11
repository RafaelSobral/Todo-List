
const Main = {

  init: function() {
    this.cacheSelectors()
    this.bindEvents()
  },

  cacheSelectors: function() {
    this.checkbuttons = document.querySelectorAll('.check')
  },

  bindEvents: function() {
    const self = this

    this.checkbuttons.forEach(function(button){
      button.onclik = self.bindEvents.checkbutton_click
    })
  },

  Events: {
    checkbutton_click: function() {
      alert('ok')
    }
  }

}

Main.init()