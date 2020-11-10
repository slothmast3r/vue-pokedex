<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1 class="page-header">POKEDEX</h1>
    <PokeFilter />
    <PokeList  />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PokeList from "./components/PokeList.vue";
import PokeFilter from "./components/PokeFilter.vue";

export default {
  name: "App",
  components: {
    PokeList,
    PokeFilter
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
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 80%;
  margin: 0 auto;

  .page-header{
    text-align: center;
  }
}
</style>
