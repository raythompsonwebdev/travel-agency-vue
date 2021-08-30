<template>
  <aside
    v-if="searchFilterFunction"
    id="filter-nav-sidebar"
    class="hide"
  >
    <button
      id="side-bar-btn"
      @click="searchFilterFunction"
    >
      SIDE
    </button>

    <section id="seasons">
      <h1>Filter By Season</h1>
      <ul>
        <li
          v-for="season in seasons"
          :key="season.id"
        >
          <button
            @click="SearchItemBtn(season.title)"
            @mouseup="InlineButtonClickHandler()"
          >
            {{ season.title }}
          </button> 
        </li>
      </ul>
    </section>
    <section id="locations">
      <h1>Filter By Location</h1>
      <ul>
        <li
          v-for="location in locations"
          :key="location.id"
        >
          <button
            @click="SearchItemBtn(location.title)"
            @mouseup="InlineButtonClickHandler()"
          >
            {{ location.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="prices">
      <h1>Filter By Price</h1>
      <ul>
        <li
          v-for="price in prices"
          :key="price.id"
        >
          <button
            @click="SearchItemBtn(price.title)"
            @mouseup="InlineButtonClickHandler()"
          >
            {{ price.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="ratings">
      <h1>Filter By Rating</h1>
      <ul>
        <li
          v-for="rating in ratings"
          :key="rating.id"
        >
          <button
            @click="SearchItemBtn(rating.title)"
            @mouseup="InlineButtonClickHandler()"
          >
            {{ rating.title }}
          </button>
        </li>
      </ul>
    </section>
    <br>
  </aside>
</template>

<script>
export default {
  name: "FilterNav",  
  props: {
    seasons: {
      type: Array,
      default: null
    },
    prices: {
      type: Array,
      default: null
    },
    locations: {
      type: Array,
      default: null
    },
    ratings: {
      type: Array,
      default: null
    }
  },  
  methods: {
    InlineButtonClickHandler: function() {
      //e.preventDefault();
      var slideoutMenu = document.querySelector("#filter-nav-sidebar");
      
      if (slideoutMenu.classList.contains("show")) {
        slideoutMenu.setAttribute("class", "hide");
      } else {
        slideoutMenu.setAttribute("class", "show");
      }
    },
    searchFilterFunction: function(event) {
      event.preventDefault();

      var el = document.getElementById("filter-nav-sidebar");

      var box = el.getAttribute("class");

      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
    SearchItemBtn(item) {
      this.$emit("seasonClick", item);
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
