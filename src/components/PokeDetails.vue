<template>
<div>
<img v-if="pokeDetails !== undefined" v-bind:src="imgUrl + pokeDetails.id + '.png'"/>
</div>
</template>

<script>

export default {
     name: "PokeFilter",
     props: ['pokeInfo'],
     data() {
         return{
             pokeDetails: this.pokeInfo,
               imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
         }
     },
    
     methods: {
       
     },
  
}
</script>


<style lang="scss" scoped>
.type-select{
    margin: 0 auto;
    width: 50%;
}
</style>