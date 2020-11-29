<template>
<div>
<div class="poke-list">
    
  <div class="poke-card"  v-bind:key="poke.name" v-for="poke in pokeList.slice(offset,offset+ LIMIT)" @click="getPokemonInfo(poke.name)">
         <img
        class="poke-image"
          v-bind:src="imgUrl + pokeId(poke.url) + '.png'"
           onerror="this.src='https://www.flaticon.com/svg/static/icons/svg/188/188918.svg'" height="80px"
        />
      <h5  class="poke-name"> {{poke.name}} </h5>
  </div>
  
      </div>
       <div class="list-pagination">
    <button class="list-pagination-button" v-on:click="updateList('prev')">Prev</button>
    <button class="list-pagination-button" v-on:click="updateList('next')">Next</button>
    </div>
</div>
</template>

<script>
import { bus } from "../main";
import getFromUrl from "../services/client";
//  NEED FIXES
export default {
  name: "PokeList",
 props: ['propsPokesType'],
  data() {
    return {
      MoveDirection: String,
      pokeList: [],
      offset: 0,
      LIMIT: 20,
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      selectedPokeId: null,
      SelectedPokeInfo: Object,
      pokesType: this.propsPokesType
    };
  },
  methods: {
    async loadPokes(url) {
      let res = await getFromUrl(url);
      this.pokeList = res.pokemon.map((wrapper) => wrapper.pokemon)
    },
    pokeId(url) {
      return url
        .split("/")
        .filter((part) => {
          return !!part;
        })
        .pop();
    },
    updateList(direction) {
      if (direction === "prev" && this.offset - this.LIMIT >= 0) {
        this.offset -= 20;
      }
      if (direction === "next" && this.offset + this.LIMIT < this.pokeList.length) {
        this.offset += 20;
      }
    },
    async getPokemonInfo(name) {
        const pokeInfo = await getFromUrl(`https://pokeapi.co/api/v2/pokemon/${name}`);
        this.SelectedPokeInfo = pokeInfo;
        bus.$emit("pokeInfo", this.SelectedPokeInfo);
    }
  },
  created() {
       bus.$on("pokesType", (data) => {
      this.pokesType = data;
       this.loadPokes(
      `https://pokeapi.co/api/v2/type/${this.pokesType}`
    );
    });
    bus.$on("resetOffset", (data) => {
      this.offset = data;
    })
    this.loadPokes(
      `https://pokeapi.co/api/v2/type/${this.pokesType}`
    );
  },
  mounted() {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$breakpoint-mobile: 700px;

.poke-list{
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  @media (max-width: $breakpoint-mobile) {
  padding-bottom: 50px;
    }
 
  .poke-card{
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 10%;
    box-shadow: 0px 1px 10px lightgray;
    cursor: pointer;

.poke-image{
  margin: 10px 0 0 0;
  min-height: 100px;
}
  .poke-name::first-letter {
    text-transform:  capitalize;
  }
  }  
}

.list-pagination{
  text-align: center;
  margin-top: 20px;
   @media (max-width: $breakpoint-mobile) {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  .list-pagination-button{
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
        @media (max-width: $breakpoint-mobile) {
          padding: 10px 20px;
        }
  }
}
</style>
