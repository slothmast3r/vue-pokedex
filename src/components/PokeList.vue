<template>
  <div class="hello">
      <ul id="example-1">
            <li v-for="poke in props.pokeList" :key="poke.url">
                {{ poke.name }}
            </li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    pokeList: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
