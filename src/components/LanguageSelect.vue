
<template>
  <aside id="language-box">
    <form>
      <label for="langs">Language:</label>
      <div id="flagImg">
        <img
          :src="'/assets/images/flags/' + selected + '.jpg'"
          @error="imgUrlAlt"
        >
      </div>
      <select
        v-model="selected"
        name="languageselectitems"
        @click="itemsSearched($event.target.value);"
      >
        <option
          v-for="(languageselectitem, i) in onChangeImg" 
          :key="i"
          :value="languageselectitem.value"
        >
          {{ languageselectitem.text }}
        </option>
      </select>
    </form>
  </aside>
</template>

<script>
import { languageselectitems } from '../data-json.json';
export default {
  name: "LanguageSelect",
  data: () => {
    return {
      selected: " ",
      defaultImage: "../assets/images/flags/default.jpg",
      languageselectitems,
    };
  },
  computed: {
    onChangeImg: function() {
      if (this.selected === "nothing") {
        return this.languageselectitems;
      } else if (this.selected === "United_Kingdom") {
        return this.languageselectitems;
      } else if (this.selected === "Germany") {
        return this.languageselectitems;
      } else if (this.selected === "United_States") {
        return this.languageselectitems;
      } else if (this.selected === "Jamaica") {
        return this.languageselectitems;
      } else if (this.selected === "France") {
        return this.languageselectitems;
      } else if (this.selected === "Spain") {
        return this.languageselectitems;
      } else {
        return this.languageselectitems;
      }
    }
  },
  methods: {
    itemsSearched: function(id) {
      this.selected = id;
    },
    imgUrlAlt(e) {
      e.target.src = "../assets/images/flags/default.jpg";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
