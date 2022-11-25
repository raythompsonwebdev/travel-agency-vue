<template>
  <article class="holiday-details-small">
    <figure v-if="bestdealitem">
      <img :src="bestdealitem.url" :alt="bestdealitem.title" />
      <figcaption>
        <h1>{{ bestdealitem.title }}</h1>

        <span class="holiday-price-small">
          From
          <span class="offerbox-price-small">{{ bestdealitem.price }}</span>
        </span>
        <p>Location: {{ bestdealitem.location }}.</p>
        <p>Available: {{ bestdealitem.month }}.</p>
        <router-link
          :to="{
            name: 'BestDeal',
            params: {
              itemid: bestdealitem.itemid,
              slug: bestdealitem.location,
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
