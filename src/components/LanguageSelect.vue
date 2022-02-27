<template>
  <aside id="language-box">
    <form id="languagebox">
      <label for="languageselectitems"
        >Language :
        <img
          id="flagImg"
          v-bind:src="'../assets/images/flags/default.jpg'"
          :alt="'newimage'"
        />
        <select
          v-model="selected"
          name="languageselectitems"
          @click="itemsSearched($event.target.value)"
        >
          <option
            v-for="(languageselectitem, i) in onChangeImg"
            :key="i"
            :value="languageselectitem.value"
          >
            {{ languageselectitem.text }}
          </option>
        </select>
      </label>
    </form>
  </aside>
</template>

<script>
import { languageselectitems } from "../data-json.json";
import defaultImage from "../assets/images/flags/default.jpg";
export default {
  name: "LanguageSelect",
  data() {
    return {
      selected: " ",
      defaultImage: defaultImage,
      languageselectitems,
    };
  },
  computed: {
    onChangeImg() {
      if (this.selected === "default") {
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
    },
  },
  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
    imgUrlAlt(e) {
      e.target.src = `../assets/images/flags/default.jpg`;
    },
    getImgUrl(image) {
      require("../assets/images/flags/" + image + ".jpg");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
