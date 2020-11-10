<template>
<div>
<v-select  :items="selectFields"
      label="Standard">
</v-select>
</div>
</template>

<script>
import getFromUrl from '../services/client'

export default {
     name: "PokeFilter",
     data() {
         return{
             selectFields: []
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
             console.log(typeName)
         }
     },
     created() {
         this.getFilterFields("https://pokeapi.co/api/v2/type");
     }
}
</script>


<style lang="scss">
</style>