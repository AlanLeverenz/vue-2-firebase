// the Vue instance

new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue developer',
    showName: false,
    showAge: true
  },
  methods: { 
    toggleName() {
      this.showName = !this.showName
    },
    toggleAge() {
      this.showAge = !this.showAge
    }
  }
})

  
