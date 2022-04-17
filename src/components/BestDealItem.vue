<template>
  <article class="holiday_details_small">
    <figure>
      <img :src="bestdealitem.url" :alt="bestdealitem.title" />
      <figcaption>
        <h1>{{ bestdealitem.title }}</h1>

        <span class="holidayprice">
          From
          <span class="offerbox-price">{{ bestdealitem.price }}</span>
        </span>
        <p>Location: {{ bestdealitem.location }}.</p>
        <p>Available: {{ bestdealitem.month }}.</p>
        <!-- <router-link :to="'/bestdeal/' + bestdealitem.itemid">
          View Details
        </router-link> -->
        <router-link
          :to="{
            name: 'BestDeal',
            params: {
              itemid: bestdealitem.itemid,
              name: bestdealitem.location,
            },
          }"
        >
          View Details
        </router-link>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  name: "BestDealItem",
  props: {
    bestdealitem: {
      type: Object,
      default: null,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
