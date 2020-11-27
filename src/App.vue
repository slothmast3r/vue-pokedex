<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1 class="page-header">POKEDEX</h1>
    <PokeFilter />
    <PokeList  v-if="pokesType === 'normal' || undefined"  />
     <PokeListByType v-else :pokesType="pokesType"/>
     <PokeDetails  :pokeInfo="pokeInfo"/>
   
   
  </div>
</template>

<script>
import PokeList from "./components/PokeList.vue";
import PokeFilter from "./components/PokeFilter.vue";
import PokeDetails from "./components/PokeDetails.vue";
import PokeListByType from './components/PokeListByType'
import { bus } from "./main";

// TODO - pokelist render refering to given URL - selecting pokemon will be possible 

export default {
  name: "App",
  components: {
    PokeList,
    PokeFilter,
    PokeDetails,
    PokeListByType
  },
  data() {
    return {
      pokeList: [],
      offset: 0,
      limit: 20,
      pokeInfo: Object,
      pokesType: String
    };
  },
  methods:{
    
  },
  mounted() {
    bus.$on("pokeInfo", (data) => {
      this.pokeInfo = data;
      console.log(this.pokeInfo)
    });
    bus.$on("pokesType", (data) => {
      this.pokesType = data;
      console.log(this.pokesType)
    })
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
