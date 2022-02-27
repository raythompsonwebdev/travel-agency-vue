<template>
  <div v-if="holidaypackageitem" class="HolidayPackagesItem">
    <h1>{{ holidaypackageitem.title }}</h1>
    <article class="holiday_item_details">
      <h1>{{ holidaypackageitem.title }}</h1>
      <span class="holidayprice">
        from
        <span class="offerbox-price">{{ holidaypackageitem.price }}</span>
      </span>
      <figure>
        <img :src="holidaypackageitem.url" :alt="holidaypackageitem.title" />
        <figcaption>
          <h3>Location : {{ holidaypackageitem.location }}</h3>

          <router-link :to="'/bestdeals/' + holidaypackageitem.id">
            <button>Book Holiday</button>
          </router-link>
        </figcaption>
      </figure>
    </article>
  </div>
  <NotFoundpage v-else />
</template>

<script>
import NotFoundpage from "../views/NotFoundpage";
import axios from "axios";

export default {
  name: "HolidayPackagesItem",
  title: "Holiday Package Page",
  components: {
    NotFoundpage,
  },
  data() {
    return {
      holidaypackageitem: {},
    };
  },
  async created() {
    const result = await axios.get(
      `/api/holidaypackages/${this.$route.params.id}`
    );
    const { data } = result;
    this.holidaypackageitem = data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"></style>
