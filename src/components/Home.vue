<template>
  <div class="Home page">
    <button v-on:click="leftSideFunction" id="side-bar-btn">SIDE</button>
    <!--Leftside-->
    <aside id="leftside" class="hide" v-if="leftSideFunction">
      <!---Search form-->
      <SearchForm />

      <!--Destinations-->
      <Destinations v-bind:destinations="destinations" />

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
      <FeaturedHolidays v-bind:featuredholidays="featuredholidays" />
    </main>

    <div class="clearfix"></div>
  </div>
</template>

<!--scripting-->
<script>
import SearchForm from "./SearchForm.vue";
import Destinations from "./Destinations.vue";
import FeaturedHolidays from "./FeaturedHolidays.vue";

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

      destinations: [
        {
          id: 1,
          city: "Paris",
          country: "France",
          hotels: "1,399 Hotels",
          url: "assets/images/travel-agency-website-eiffel-tower-image.jpg"
        },
        {
          id: 2,
          city: "London",
          country: "England",
          hotels: "1,912 Hotels",
          url: "assets/images/travel-agency-website-tower-of-london-image.jpg"
        },
        {
          id: 3,
          city: "Bangkok",
          country: "Thailand",
          hotels: "1,542 Hotels",
          url: "assets/images/travel-agency-website-bangkok-image.jpg"
        },
        {
          id: 4,
          city: "Istanbul",
          country: "Turkey",
          hotels: "504 Hotels",
          url: "assets/images/travel-agency-website-istanbul-image.jpg"
        },
        {
          id: 5,
          city: "Hong Kong",
          country: "China",
          hotels: "504 Hotels",
          url: "assets/images/travel-agency-website-hong-kong-image.jpg"
        }
      ],

      featuredholidays: [
        {
          id: 1,
          url: "assets/images/travel-agency-website-spanish-villa-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "339"
        },
        {
          id: 2,
          url: "assets/images/travel-agency-website-taj-mahal-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£ 339"
        },
        {
          id: 3,
          url: "assets/images/travel-agency-website-gold-coast-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£ 339"
        },
        {
          id: 4,
          url: "assets/images/travel-agency-website-dubai-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£ 339"
        },
        {
          id: 5,
          url: "assets/images/travel-agency-website-singapore-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£ 339"
        },
        {
          id: 6,
          url: "assets/images/travel-agency-website-toronto-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£ 339"
        }
      ],

      bannerimage: "assets/images/travel-agency-website-banner-image.jpg"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>


</style>
