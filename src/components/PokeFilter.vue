<template>
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
import "vue-select/src/scss/vue-select.scss";

export default {
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


<style lang="scss" scoped>
.type-select{
    margin: 0 auto;
    width: 50%;
}
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