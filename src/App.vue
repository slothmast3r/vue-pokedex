<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1 class="page-header">POKEDEX</h1>
    <PokeFilter />
    <PokeList  />
    <PokeDetails :pokeInfo="pokeInfo"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PokeList from "./components/PokeList.vue";
import PokeFilter from "./components/PokeFilter.vue";
import PokeDetails from "./components/PokeDetails.vue";

import { bus } from "./main";

export default {
  name: "App",
  components: {
    PokeList,
    PokeFilter,
    PokeDetails
  },
  data() {
    return {
      pokeList: [],
      offset: 0,
      limit: 20,
      pokeInfo: Object
    };
  },
  methods:{
    
  },
  mounted() {
    bus.$on("pokeInfo", (data) => {
      this.pokeInfo = data;
      console.log(this.pokeInfo)
    });
  }
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
