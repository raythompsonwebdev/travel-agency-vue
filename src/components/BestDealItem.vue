<template>
  <article class="holiday_details_small">
    <div v-bind:key="bestdealitem.id" v-for="bestdealitem in bestdealitem">
      <h1>{{bestdealitem.title}}</h1>
      <figure>
        <img :src="bestdealitem.url" />

        <figcaption>
          <span class="holidayprice">
            From
            <span class="offerbox-price">{{bestdealitem.price}}</span>
          </span>
          <p>Location: {{bestdealitem.place}}.</p>
          <p>Available: {{bestdealitem.month}}.</p>
          <a href>View Details</a>
        </figcaption>
      </figure>
    </div>
  </article>
</template>

<script>
export default {
  name: "BestDealItem",
  props: ["bestdealitem"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>