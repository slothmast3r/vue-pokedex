<template>
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
import "vue-select/src/scss/vue-select.scss";
import { bus } from "../main";

export default {
  name: "PokeFilter",
  data() {
    return {
      selectFields: null,
      slectedType: null,
    };
  },

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
</style>
