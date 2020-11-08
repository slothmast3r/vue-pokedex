<template>
  <div class="poke__list">
   <ul id="example-1">
      <li v-for="poke in pokeList.results" :key="poke.name">
        {{ poke.name }}
        <img :src="imageUrl + poke.id + 'png'" />
      </li>
</ul>
<button v-on:click="movePage('prev')">prev</button>
<button v-on:click="movePage('next')">next</button>

  </div>
</template>

<script>
import { bus } from '../main'
import axios from "axios";

export default {
  name: 'HelloWorld',
  data() {
    return {
      MoveDirection: String,
      pokeList: [],
      offset: 0,
      limit: 20,
      imgUrl: String,
    }
  },
  methods: {
      loadPokes() {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`
        )
        .then((response) => {
          this.pokeList = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

      updateList(direction) {
      if (direction === "prev" && this.offset - this.limit > 0) {
        this.offset -= 20;
        this.loadPokes();
      }
      if (direction === "next" && this.offset + this.limit < 1050) {
        this.offset += 20;
        this.loadPokes();
      }
    },
      movePage(direction) {
      this.MoveDirection = direction;
      bus.$emit('moveList', this.MoveDirection)
    },
  },
   created() {
    this.loadPokes();
    bus.$on("moveList", (data) => {
      this.updateList(data);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
