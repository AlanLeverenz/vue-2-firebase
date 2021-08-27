// the Vue instance

new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue developer',
    name: 'Alan',
    wage: 10
  },
  methods: {
    changeWage(amount) {
      this.wage += amount
    }
  }
})