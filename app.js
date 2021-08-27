// the Vue instance

new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue developer',
    name: 'Alan'
  },
  methods: {
    greet(time) {
      return `Hello and good ${time}, ${this.name}!`
    }
  }
})