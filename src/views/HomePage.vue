/* eslint-disable prefer-destructuring */
<template>
  <div class="Home page">
    <button id="side-bar-btn" @click="sideBarFunction">SIDE</button>

    <aside id="home-page-sidebar" class="hide">
      <SearchForm :searchformdata="searchform" />
      <Destinations :destinationitems="destinationitems" />
    </aside>

    <main id="home-page-content">
      <figure id="banner">
        <img :src="bannerImage" :alt="'banner-image'" id="banner-img" />
      </figure>

      <FeaturedHolidays :featuredholidayitems="featuredholidayitems" />
    </main>

    <div class="clearfix" />
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import Destinations from "@/components/Destinations.vue";
import FeaturedHolidays from "@/components/FeaturedHolidays.vue";
import bannerImage from "@/assets/img/travel-agency-website-banner-image.jpg";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    Destinations,
    FeaturedHolidays,
    SearchForm,
  },
  data() {
    return {
      destinationitems: [],
      featuredholidayitems: [],
      searchform: [],
      show: true,
      bannerImage,
    };
  },
  async created() {
    const result = await axios.get("/api/home");
    const { data } = result;

    const searchformdata = await axios.get("/api/searchform");

    const { destinationitems } = data[0];
    const { featuredholidayitems } = data[0];
    const [searchformresult] = searchformdata.data;

    this.destinationitems = destinationitems;
    this.featuredholidayitems = featuredholidayitems;
    this.searchform = searchformresult;
  },
  methods: {
    sideBarFunction(event) {
      event.preventDefault();
      const el = document.getElementById("home-page-sidebar");
      const box = el.getAttribute("class");
      if (box === "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
  },
};
</script>

<style lang="scss"></style>
