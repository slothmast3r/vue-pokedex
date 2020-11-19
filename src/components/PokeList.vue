<template>
  <div>
    <div class="poke-list" v-if="pokeList != []" >
      <div class="poke-card" v-for="poke in pokeList.results" :key="poke.name" @click="getPokemonInfo(poke.name)">
        <img
        class="poke-image"
          v-bind:src="imgUrl + pokeId(poke.url) + '.png'"
        />
         <h5 class="poke-name"> {{ poke.name }}  </h5> 
      </div>
    </div>
    <div class="list-pagination">
    <button class="list-pagination-button" v-on:click="movePage('prev')">Prev</button>
    <button class="list-pagination-button" v-on:click="movePage('next')">Next</button>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import getFromUrl from "../services/client";

export default {
  name: "PokeList",

  data() {
    return {
      MoveDirection: String,
      pokeList: [],
      offset: 0,
      limit: 20,
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      selectedPokeId: null,
      SelectedPokeInfo: Object,
      pokesType: String
    };
  },
  methods: {
    async loadPokes(url) {
      let res = await getFromUrl(url);
      this.pokeList = res;
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
      if (direction === "prev" && this.offset - this.limit >= 0) {
        this.offset -= 20;
        this.loadPokes(
          `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${this.limit}`
        );
      }
      if (direction === "next" && this.offset + this.limit < 1050) {
        this.offset += 20;
        this.loadPokes(
          `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${this.limit}`
        );
      }
    },
    movePage(direction) {
      this.MoveDirection = direction;
      bus.$emit("moveList", this.MoveDirection);
    },
    async getPokemonInfo(name) {
        const pokeInfo = await getFromUrl(`https://pokeapi.co/api/v2/pokemon/${name}`);
        this.SelectedPokeInfo = pokeInfo;
        bus.$emit("pokeInfo", this.SelectedPokeInfo);
        // console.log(this.SelectedPokeInfo)
     
    }
  },
  created() {
    this.loadPokes(
      `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${this.limit}`
    );
    bus.$on("moveList", (data) => {
      this.updateList(data);
    });
  },
  mounted() {
    bus.$on("pokesType", (data) => {
      this.pokesType = data;
      console.log(this.pokesType)
    });
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
