<template>
  <!--Featured Holiday Package-->

  <section id="offers">
    <h2>Featured Holiday Package</h2>

    <div
      v-for="featuredholiday in featuredholidayitems"
      :key="featuredholiday.id"
      class="offerbox"
    >
      <figure>
        <img
          :src="featuredholiday.url"
          :alt="images"
        > 

        <figcaption>
          <p>{{ featuredholiday.text }}</p>
          <p>
            from only
            <span class="offerbox-price">{{ featuredholiday.price }}</span> per person
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="clearfix" />
  </section>
</template>

<script>
export default {
  name: "FeaturedHolidays",
  //props: ["featuredholidayitems"]
  props: {
    featuredholidayitems: {
      type: Array,
      default: null
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
