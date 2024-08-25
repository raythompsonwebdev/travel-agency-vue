<template>
  <!--Featured Holiday Package-->
  <section id="holiday-offers">
    <h2 id="holiday-offers-title">Featured Holiday Package</h2>

    <div
      v-for="featuredholiday in props.featuredholidayitems"
      :key="featuredholiday.id"
      class="offer-item-div"
    >
      <figure class="offer-item">
        <img :src="featuredholiday.url" :alt="'img'" class="offer-item-img" />

        <figcaption class="offer-item-caption">
          <p class="offer-item-text">{{ featuredholiday.text }}</p>
          <p class="offer-item-text">
            from only
            <span class="offer-item-price">{{ featuredholiday.price }}</span>
            per person
          </p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
// const name = "FeaturedHolidays";
const props = defineProps({
  featuredholidayitems: Array
})

// const holidayImage = computed((url) => {
//   return url;
// });
</script>

<style lang="scss"></style>
