<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>POKEDEX</h1>
    <PokeList  />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PokeList from "./components/PokeList.vue";

export default {
  name: "App",
  components: {
    PokeList,
  },
  data() {
    return {
      pokeList: [],
      offset: 0,
      limit: 20,
    };
  },
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
