<template>
  <article class="holiday_details">
    <h1>{{ holidaypackageitem.title }}</h1>
    <span class="holidayprice">
      from
      <span class="offerbox-price">{{ holidaypackageitem.price }}</span>
    </span>
    <figure>
      <img :src="holidaypackageitem.url" :alt="holidaypackageitem.title" />
      <figcaption>
        <p>
          Location :
          {{ holidaypackageitem.location }} &nbsp;&nbsp;&nbsp;&nbsp;Available :
          {{ holidaypackageitem.available }}
        </p>
        <p>{{ holidaypackageitem.text }}</p>
        <router-link :to="'/holidaypackages/' + holidaypackageitem.itemid">
          View Details
        </router-link>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  name: "HolidayPackageItem",
  props: {
    holidaypackageitem: {
      type: Object,
      default: null,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"></style>
