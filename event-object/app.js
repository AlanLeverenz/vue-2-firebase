// the Vue instance

new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue developer',
    coords: {
      x: 0,
      y: 0
    }
  },
methods: { 
  logEvent(e){
    console.log(e)
  },
  logCoords(e) {
    this.coords.x = e.offsetX
    this.coords.y = e.offsetY
  }
}
  
})