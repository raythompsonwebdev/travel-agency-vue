<template>
  <aside id="language-select">
    <form id="language-selector">
      <label for="languageselectitems"
        >Language:
        <img
          id="flag-img"
          v-bind:src="
            selected !== ' '
              ? `../assets/img/flags/${selected}.png`
              : defaultImage
          "
          :alt="'flag image'"
        />
        <select
          v-model="selected"
          name="languageselectitems"
          @click="itemsSearched($event.target.value)"
          aria-label="select country"
        >
          <option
            v-for="languageitems in onChangeImg"
            :key="languageitems.id"
            :value="languageitems.value"
          >
            {{ languageitems.text }}
          </option>
        </select>
      </label>
    </form>
  </aside>
</template>

<script>
export default {
  name: "LanguageSelect",
  props: {
    languageitems: { type: Object, required: true },
  },
  data() {
    return {
      selected: " ",
      defaultImage: require(`@/assets/img/flags/default.png`),
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
      e.target.src = `./assets/img/flags/default.png`;
    },
  },
};
</script>

<style lang="scss"></style>
