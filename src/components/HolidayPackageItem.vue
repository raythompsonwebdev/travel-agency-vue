<template>
  <article v-if="holidaypackageitem" class="holiday-pkg-details">
    <h1 class="holiday-pkg-title">{{ holidaypackageitem.title }}</h1>
    <span class="holiday-pkg-price">
      <span class="holiday-pkg-offer">{{ holidaypackageitem.price }}</span>
    </span>
    <figure class="holiday-pkg-item">
      <img
        :src="holidaypackageitem.url"
        :alt="holidaypackageitem.title"
        class="holiday-pkg-img"
      />
      <figcaption class="holiday-pkg-caption">
        <p class="holiday-pkg-txt">
          Location :
          {{ holidaypackageitem.location }} Available :
          {{ holidaypackageitem.month }}
        </p>
        <p class="holiday-pkg-txt">{{ holidaypackageitem.text }}</p>
        <router-link
          class="holiday-pkg-link"
          :to="{
            name: 'HolidayPackage',
            params: {
              itemid: holidaypackageitem.id,
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
  name: "HolidayPackageItem",
  props: {
    holidaypackageitem: {
      type: Object,
      required: true,
    },
  },
  flushCom() {
    this.$router.go();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"></style>
