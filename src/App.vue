<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>POKEDEX</h1>
    <PokeList :pokeList="pokeList" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PokeList from "./components/PokeList.vue";
import { bus } from "./main";
import axios from "axios";

export default {
  name: "App",
  components: {
    PokeList,
  },
  data() {
    return {
      pokeList: [],
      offset:0,
      limit:20
    };
  },
  methods: {
    loadPokes() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((response) => {
          this.pokeList = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateList(direction) {
      if(direction === "prev") {
        console.log("Da")
      }
    }
  },
  created() {
    this.loadPokes();
    bus.$on('moveList', data => {
       this.updateList(data)
    })
  },
};
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
