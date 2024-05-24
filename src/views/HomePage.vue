/* eslint-disable prefer-destructuring */
<template>
  <main id="home-page">
    <button id="side-bar-btn" @click="sideBarFunction">SIDE</button>

    <aside id="home-page-sidebar" class="hide">
      <SearchForm />
      <Destinations :destinationitems="destinationitems" />
    </aside>

    <section id="home-page-content">
      <figure id="banner">
        <img :src="bannerImage" :alt="'banner-image'" id="banner-img" />
      </figure>

      <FeaturedHolidays :featuredholidayitems="featuredholidayitems" />
    </section>
  </main>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import Destinations from "@/components/Destinations.vue";
import FeaturedHolidays from "@/components/FeaturedHolidays.vue";
import bannerImage from "@/assets/img/travel-agency-website-banner-image.jpg";

export default {
  name: "HomePage",
  components: {
    Destinations,
    FeaturedHolidays,
    SearchForm,
  },
  data() {
    return {
      destinationitems: [
        {
          id: 1,
          city: "Paris",
          country: "France",
          hotels: "1,399 Hotels",
          url: "/assets/img/destinations/travel-agency-website-eiffel-tower-image.jpg",
        },
        {
          id: 2,
          city: "London",
          country: "England",
          hotels: "1,912 Hotels",
          url: "/assets/img/destinations/travel-agency-website-tower-of-london-image.jpg",
        },
        {
          id: 3,
          city: "Bangkok",
          country: "Thailand",
          hotels: "1,542 Hotels",
          url: "/assets/img/destinations/travel-agency-website-bangkok-image.jpg",
        },
        {
          id: 4,
          city: "Istanbul",
          country: "Turkey",
          hotels: "504 Hotels",
          url: "/assets/img/destinations/travel-agency-website-istanbul-image.jpg",
        },
        {
          id: 5,
          city: "Hong Kong",
          country: "China",
          hotels: "504 Hotels",
          url: "/assets/img/destinations/travel-agency-website-hong-kong-image.jpg",
        },
      ],
      featuredholidayitems: [
        {
          id: 1,
          url: "/assets/img/travel-agency-website-spanish-villa-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£339",
        },
        {
          id: 2,
          url: "/assets/img/travel-agency-website-taj-mahal-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£339",
        },
        {
          id: 3,
          url: "/assets/img/travel-agency-website-gold-coast-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£339",
        },
        {
          id: 4,
          url: "/assets/img/travel-agency-website-dubai-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£339",
        },
        {
          id: 5,
          url: "/assets/img/travel-agency-website-singapore-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£339",
        },
        {
          id: 6,
          url: "/assets/img/travel-agency-website-toronto-image.jpg",
          text: "Lorem Ipsum Dolen sit.",
          price: "£339",
        },
      ],
      show: true,
      bannerImage,
    };
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
