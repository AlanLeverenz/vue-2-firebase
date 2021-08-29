// the Vue instance

new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue developer',
    name: 'Alan'
  },
  methods: {
    updateName(e) {
      // console.log(e.target.value)
      this.name = e.target.value
    }
  }
})