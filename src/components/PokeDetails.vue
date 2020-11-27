<template>
<div >
<img  v-bind:src="imgUrl + pokeInfo.id + '.png'" @click="dupa"/>
</div>
</template>

<script>

export default {
     name: "PokeFilter",
     props: ['pokeInfo'],
     data() {
         return{
               imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
         }
     },
     methods: {
         dupa() {
             console.log(this.pokeInfo)
         }
     },
  
}
</script>


<style lang="scss" scoped>
.type-select{
    margin: 0 auto;
    width: 50%;
}
</style>