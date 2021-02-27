<template>
  <div class="Home page">
    <div class="Home page">
      <button 
        id="side-bar-btn"
        @click="sideBarFunction"        
      >
        SIDE
      </button>
      <!--Leftside-->
      <aside        
        id="home-page-sidebar"
        class="hide"
      >
        <!---Search form-->
        <SearchForm />
        <!--Destinations-->
        <Destinations :destinationitems="destinationitems" /> 
        <br>
        <br>
        <br>
      </aside>

      <main id="home-page-content">
        <!--Banner Image-->
        <figure id="banner">
          <img
            :src="'../assets/images/travel-agency-website-banner-image.jpg'"
            :alt="'banner-image'"
          >
        </figure>

        <!--Featured Holiday Packages-->
        <FeaturedHolidays
          :featuredholidayitems="featuredholidayitems"
        />
      </main>

      <div class="clearfix" />
    </div>
  </div>
</template>

<!--scripting-->
<script>

import SearchForm from "../components/SearchForm.vue";
import Destinations from "../components/Destinations.vue";
import FeaturedHolidays from "../components/FeaturedHolidays.vue";

import { destinationitems, featuredholidayitems  } from '../data-json.json';

export default {
  name: "Home",
  components: {
    Destinations,
    FeaturedHolidays,
    SearchForm
  },
  data() {
    return {
      destinationitems, 
      featuredholidayitems,
      data: [],
      show: true
    };
  },
  methods: {
    sideBarFunction: function(event) {
      event.preventDefault();
      var el = document.getElementById("home-page-sidebar");
      var box = el.getAttribute("class");
      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    }
  },  
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
</style>
