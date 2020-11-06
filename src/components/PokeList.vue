<template>
  <div class="poke__list">
   <ul id="example-1">
      <li v-for="item in pokeList.results" :key="item.name">
        {{ item.name }}
      </li>
</ul>
<button v-on:click="movePage(prev)">prev</button>

<button>next</button>
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  name: 'HelloWorld',
  props: {
    pokeList: null
  },
  methods: {
    movePage(direction) {
      bus.$emit('moveList', direction)
    }
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
