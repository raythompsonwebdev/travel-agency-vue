<template>
  <div
    v-if="holidaypackageitem" 
    class="HolidayPackagesItem"
  >
    <h1>{{ holidaypackageitem[0].id }}</h1>
    <article class="holiday_item_details">
      <h1>{{ holidaypackageitem[0].title }}</h1>
      <span class="holidayprice">
        from
        <span class="offerbox-price">{{ holidaypackageitem[0].price }}</span>
      </span>
      <figure>
        <img
          :src="holidaypackageitem[0].url"
          :alt="holidaypackageitem[0].title"
        >
        <figcaption>
          <h3>Location : {{ holidaypackageitem[0].location }}</h3>
   
          <router-link :to="'/bestdeals/' + holidaypackageitem[0].id">
            <button>Book Holiday</button>
          </router-link>
        </figcaption>
      </figure>
    </article>
  </div>
  <NotFoundpage v-else />
</template>

<script>

import { holidaypackageitems } from '../data-json.js';
import NotFoundpage from '../views/NotFoundpage'

export default {
  name: "HolidayPackagesItem",
  title: 'Holiday Package Page',
  components: {
    NotFoundpage
  },
  data(){
    return{      
      holidaypackageitem: holidaypackageitems.filter( element => element.id == this.$route.params.id ),
    }
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
 
</style>
