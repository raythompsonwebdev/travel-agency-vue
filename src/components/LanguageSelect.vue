<template>
  <aside id="language-box">
    <form>
      <label for="langs">Language:</label>
      <select
        name="langs"
        v-model="this.languages"
        v-on:click="itemsSearched($event.target.value);"
      >
        <option
          v-for="(language, i) in this.languages"
          :value="language.value"
          :key="i"
        >{{language.name}}</option>
      </select>
    </form>
  </aside>
</template>

<script>
import axios from "axios";

//import langs from './data/languageselectitems'

export default {
  name: "LanguageSelect",

  mounted() {
    axios
      .get("./data-json/languageselect.json")
      .then(response => (this.languages = response.data));
  },

  data: () => {
    return {
      selected: " ",
      languages: []
    };
  },

  methods: {
    itemsSearched: function(id) {
      this.selected = id;
    }
  },

  computed: {
    onChange: function() {
      if (
        this.selected === "Jamaica" ||
        this.selected === "United_States" ||
        this.selected === "United_Kingdom" ||
        this.selected === "Spain" ||
        this.selected === "France" ||
        this.selectee === "Germany"
      ) {
        return this.languages;
      } else {
        return this.languages;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
