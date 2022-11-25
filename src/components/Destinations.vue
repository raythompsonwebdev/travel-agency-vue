<template>
  <!--Destinations-->
  <section class="holiday-search-sidebar">
    <h2>Top Destinations</h2>
    <div
      v-for="destination in destinationitems"
      :key="destination.id"
      class="destinations"
    >
      <figure>
        <img
          :src="destination.url"
          :alt="`Destination : ${destination.country}`"
        />

        <figcaption>
          <h3>{{ destination.city }}</h3>
          <p>{{ destination.country }}</p>
          <p>{{ destination.hotels }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: "Destinations",
  props: {
    destinationitems: {
      type: Array,
      default: null,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
