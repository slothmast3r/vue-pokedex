<template>
<<<<<<< HEAD
<div class="slect-container">
<select class="poke-select"
v-if="selectFields !== null" v-bind="selectedPoke">
<option v-for="item in selectFields" :key="item">
    {{item}}
</option>
</select>
</div>
</template>

<script>
import getFromUrl from '../services/client';
=======
  <div class="type-select">
    <select v-if="selectFields !== null"  @click="getSelectedField" class="select">
      <option v-for="item in selectFields" :key="item" class="select-option">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
import getFromUrl from "../services/client";
>>>>>>> 84d82d25b6dea8ca551bd29e13e7f37f4acba250
import "vue-select/src/scss/vue-select.scss";
import { bus } from "../main";

export default {
<<<<<<< HEAD
     name: "PokeFilter",
     data() {
         return{
             selectFields: null,
             selectedPoke: ""
         }
     },
    
     methods: {
         async getFilterFields(url) {
             let typesFromUrl = await getFromUrl(url);
             let typesRes = typesFromUrl.results;
             let typeName = typesRes.map(item => {
                 return item.name
             })
             this.selectFields = typeName
         }
     },
   async created() {
        await this.getFilterFields("https://pokeapi.co/api/v2/type");
         console.log(this.selectFields)
     }
}
</script>
=======
  name: "PokeFilter",
  data() {
    return {
      selectFields: null,
      slectedType: null,
    };
  },
>>>>>>> 84d82d25b6dea8ca551bd29e13e7f37f4acba250

  methods: {
    async getFilterFields(url) {
      let typesFromUrl = await getFromUrl(url);
      let typesRes = typesFromUrl.results;
      let typeName = typesRes.map((item) => {
        return item.name;
      });
      this.selectFields = typeName;
    },
    getSelectedField(e) {
        this.slectedType = e.target.value;
         bus.$emit("pokesType", this.slectedType);
        // console.log(this.slectedType)
    },
  },
  async created() {
    await this.getFilterFields("https://pokeapi.co/api/v2/type");
    console.log(this.selectFields);
  },
};
</script>

<style lang="scss" scoped>
.type-select {
    text-align: center;
    margin: 20px;
}
.select{

     text-align: center;
          width: 120px;
         border: 1px black solid;
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
<<<<<<< HEAD
.select-container{
    text-align: center;
    margin:  0 auto;
    width: 300px;
}
.poke-select{
    margin:  0 auto;
    border: 2px solid;
    text-align: center;
    width: 100px;
}
</style>
=======
</style>
>>>>>>> 84d82d25b6dea8ca551bd29e13e7f37f4acba250
