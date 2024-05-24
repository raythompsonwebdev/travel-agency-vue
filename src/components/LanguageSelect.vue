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
            v-for="(languageselectitem, index) in onChangeImg"
            :key="index"
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
export default {
  name: "LanguageSelect",
  // props: {
  //   languageselectitems: { type: Array, default: null },
  // },
  data() {
    return {
      selected: " ",
      defaultImage: require(`@/assets/img/flags/default.png`),
      languageselectitems: [
        {
          value: "default",
          text: " ",
          url: "/assets/img/flags/United_Kingdom.jpg",
        },
        {
          value: "Bangkok",
          text: "Bangkok",
          url: "/assets/img/flags/Bangkok.png",
        },
        {
          value: "Germany",
          text: "Germany",
          url: "/assets/img/flags/Germany.jpg",
        },
        {
          value: "United_States",
          text: "United_States",
          url: "/assets/img/flags/USA.gif",
        },
        {
          value: "India",
          text: "India",
          url: "/assets/img/flags/India.png",
        },
        {
          value: "France",
          text: "France",
          url: "/assets/img/flags/France.jpg",
        },
        {
          value: "Spain",
          text: "Spain",
          url: "/assets/img/flags/Spain.jpg",
        },
      ],
    };
  },
  computed: {
    onChangeImg() {
      if (this.selected === "default") {
        return this.languageselectitems;
      } else if (this.selected === "Bangkok") {
        return this.languageselectitems;
      } else if (this.selected === "Germany") {
        return this.languageselectitems;
      } else if (this.selected === "United_States") {
        return this.languageselectitems;
      } else if (this.selected === "India") {
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
