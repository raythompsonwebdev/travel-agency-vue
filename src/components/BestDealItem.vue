<template>
  <article 
    class="holiday_details_small"
  >
    <h1>{{ bestdealitem.title }}</h1>

    <span class="holidayprice">
      From
      <span class="offerbox-price">{{ bestdealitem.price }}</span>
    </span>
    <figure>
      <img
        :src="bestdealitem.url"
        :alt="bestdealitem.title"
      >
      <figcaption>        
        <p>Location: {{ bestdealitem.location }}.</p>
        <p>Available: {{ bestdealitem.month }}.</p>
        <router-link :to="'/bestdeals/' + bestdealitem.id">
          <button>View Details</button>
        </router-link>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  name: "BestDealItem",
  //props: ["bestdealitems"],
  props: {
    bestdealitem: {
      type: Object,
      default: null
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
