<template>
<div class="poke-details">

<img class="pokeImage" v-bind:src="imgUrl + pokeInfo.id + '.png'" />
<div>
    <h3 class="poke-name">{{pokeInfo.name}}</h3>
</div>
<button @click="closeDetails()" class="close-button">X</button>
</div>
</template>

<script>
import { bus } from "../main";
export default {
     name: "PokeFilter",
     props: ['pokeInfo'],
     data() {
         return{
               imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
         }
     },
     methods: {
         closeDetails() {
            bus.$emit("closeDetailsTab", null);
         }
     },
  
}
</script>


<style lang="scss" scoped>
.poke-details{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    .pokeImage{
     height: 100px;
      width: 100px;  
    }
    .poke-name::first-letter {
    text-transform:  capitalize;
  }
    }
    .close-button{
    cursor: pointer;
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 5px;
    }
    
</style>