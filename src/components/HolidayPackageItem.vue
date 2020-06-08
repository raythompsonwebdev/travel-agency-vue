<template>
  <article>
    <div
      class="holiday_details"
      v-for="holidaypackageitem in holidaypackageitems"
      v-bind:key="holidaypackageitem.id"
    >
      <h1>{{holidaypackageitem.title}}</h1>
      <span class="holidayprice">
        from
        <span class="offerbox-price">{{holidaypackageitem.price}}</span>
      </span>
      <figure>
        <img :src="holidaypackageitem.url" :alt="holidaypackageitem.title"/>
        <figcaption>
          <p>Location : {{holidaypackageitem.place}}</p>
          <p>{{holidaypackageitem.text}}</p>
          <button>View Details</button>
        </figcaption>
      </figure>
    </div>
  </article>
</template>

<script>

export default {
  name: "HolidayPackageItem",
  props: ["holidaypackageitems"],

};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
