<template>
  <div class="Home page">
    <button v-on:click="leftSideFunction" id="side-bar-btn">SIDE</button>
    <!--Leftside-->
    <aside id="leftside" class="hide" v-if="leftSideFunction">
      <!---Search form-->
      <SearchForm />
      <!--Destinations-->
      <Destinations :destinationitems="this.data.destinationitems" />

      <br />
      <br />
      <br />
    </aside>

    <main id="content">
      <!--Banner Image-->
      <figure id="banner">
        <img :src="'assets/images/travel-agency-website-banner-image.jpg'" :alt="'banner-image'" />
      </figure>

      <!--Featured Holiday Packages-->
      <FeaturedHolidays :featuredholidayitems="this.data.featuredholidayitems" />
    </main>

    <div class="clearfix"></div>
  </div>
</template>

<!--scripting-->
<script>
import SearchForm from "./SearchForm.vue";
import Destinations from "./Destinations.vue";
import FeaturedHolidays from "./FeaturedHolidays.vue";
import axios from "axios";
export default {
  name: "Home",
  methods: {
    leftSideFunction: function(event) {
      event.preventDefault();
      var el = document.getElementById("leftside");
      var box = el.getAttribute("class");
      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    }
  },
  components: {
    Destinations,
    FeaturedHolidays,
    SearchForm
  },
  mounted() {
    axios
      .get("./data-json/data-json.json")
      .then(response => (this.data = response.data));
  },
  data() {
    return {
      data: [],
      show: true
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
</style>
