<template>
<div>
<v-select data-app
v-if="selectFields !== null"
:items="selectFields"
      label="Poke Type">
</v-select>
</div>
</template>

<script>
import getFromUrl from '../services/client';
import vSelect from 'vue-select'
import "vue-select/src/scss/vue-select.scss";

export default {
     name: "PokeFilter",
     components: {
         vSelect,
     },
     data() {
         return{
             selectFields: null,
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
</style>