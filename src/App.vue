<template id="#app">

  <div>{{$store.state.message}}</div>
  <MenuBar/>
</template>

<script>
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    MenuBar
  },

  computed: {
    message () {
      return ''
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
