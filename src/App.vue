<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <li v-for="poke in props.pokeList" :key="poke.url">
                {{ poke.name }}
            </li>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PokeList from './components/PokeList.vue'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PokeList
  },
  data() {
    return {
      pokeList : []
    }
  },
   created() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.pokeList = response.data.resultes;
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })
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
  margin-top: 60px;
}
</style>
