<template>
  <article class="bestdeal-details">
    <figure v-if="props.bestdealitem" class="bestdeal-details-item">
      <img :src="bestdealitem.url" :alt="bestdealitem.title" class="bestdeal-details-img" />
      <figcaption class="bestdeal-details-caption">
        <h1 class="bestdeal-details-title">{{ props.bestdealitem.title }}</h1>

        <span class="bestdeal-details-price">
          From
          <span class="bestdeal-offer">{{ props.bestdealitem.price }}</span>
        </span>
        <p class="bestdeal-text">Location: {{ props.bestdealitem.location }}.</p>
        <p class="bestdeal-text">Available: {{ props.bestdealitem.month }}.</p>
        <RouterLink
          class="bestdeal-link"
          :to="{
            name: 'BestDeal',
            params: {
              itemid: props.bestdealitem.id
              // slug: bestdealitem.location,
            }
          }"
        >
          View Details
        </RouterLink>
      </figcaption>
    </figure>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  bestdealitem: {
    type: Object
  }
})
</script>

<style lang="scss"></style>
