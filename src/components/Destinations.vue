<template>
  <!--Destinations-->
  <section class="leftsidebox">
    <h2>Top Destinations</h2>
    <div v-for="destination in destinationitems" v-bind:key="destination.id">
      <div class="destinations">
        <figure>
          <img :src="destination.url" />

          <figcaption>
            <h3>{{destination.city}}</h3>
            <p>{{destination.country}}</p>
            <p>{{destination.hotels}}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Destinations",
  props: ["destinationitems"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
