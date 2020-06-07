<template>
  <div class="Home page">

    <button v-on:click="leftSideFunction" id="side-bar-btn">SIDE</button>
    <!--Leftside-->
    <aside id="leftside" class="hide" v-if="leftSideFunction">
      <!---Search form-->
      <SearchForm />
      <!--Destinations-->
      <Destinations v-bind:destinationitems="destinationitems" />

      <br />
      <br />
      <br />
    </aside>

    <main id="content">
      <!--Banner Image-->
      <figure id="banner">
        <img :src="bannerimage" />
      </figure>

      <!--Featured Holiday Packages-->
      <FeaturedHolidays v-bind:featuredholidayitems="featuredholidayitems" />
    </main>

    <div class="clearfix"></div>
  </div>
</template>

<!--scripting-->
<script>

import SearchForm from "./SearchForm.vue";
import Destinations from "./Destinations.vue";
import destinationitems from './data/destinationitems.js';
import FeaturedHolidays from "./FeaturedHolidays.vue";
import featuredholidayitems from './data/featuredholidayitems.js';

export default {

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

  name: "Home",

  components: {
    Destinations,
    FeaturedHolidays,
    SearchForm
  },

  data() {

    return {

      show: "true",
      destinationitems: destinationitems,
      featuredholidayitems: featuredholidayitems,
      bannerimage: "assets/images/travel-agency-website-banner-image.jpg"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>


</style>
