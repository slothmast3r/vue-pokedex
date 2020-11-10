<template>
<div>
<v-select  data-app
v-if="selectFields != []"
:items="this.selectFields"
class="type-select"
      label="Poke Type">
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
         }
     },
     created() {
         this.getFilterFields("https://pokeapi.co/api/v2/type");
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