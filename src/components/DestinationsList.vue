<template>
  <section class="holiday-search-sidebar">
    <h2 id="holiday-destination-title">{{ title }}</h2>
    <div v-for="destination in props.destinationitems" :key="destination.id" class="destinations">
      <figure class="destination">
        <img
          class="destination-img"
          :src="destination.url"
          :alt="`Destination : ${destination.country}`"
        />

        <figcaption class="destination-caption">
          <h3 class="destination-title">{{ destination.city }}</h3>
          <p class="destination-txt">{{ destination.country }}</p>
          <p class="destination-txt">{{ destination.hotels }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
const title = 'Top Destinations'

const props = defineProps({
  destinationitems: Object
})
</script>

<style lang="scss"></style>
