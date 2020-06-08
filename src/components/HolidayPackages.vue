<template>

  <div class="HolidayPackages">

  <!---leftside2-->

      <FilterNav
        v-bind:seasons="seasons"
        v-bind:locations="locations"
        v-bind:prices="prices"
        v-bind:ratings="ratings"
        @seasonClick="itemsSearched"
      />

    <!---main content-->
    <main id="content2">
      <HolidayPackageItem
        v-bind:holidaypackageitems="holidaypackageitems"
      />
    </main>

    <div class="clearfix"></div>
  </div>
</template>

<script>

import FilterNav from "./FilterNav.vue";
import HolidayPackageItem from "./HolidayPackageItem.vue";
import holidaypackageitems from './data/holidaypackageitems.js';
import {locations , prices, ratings, seasons} from './data/filterNavText.js';

export default {

  name: "HolidayPackages",

  components: {
    HolidayPackageItem,
    FilterNav
  },

  data: () => {

    return {

      show: "true",
      search: ' ',
      holidaypackageitems: holidaypackageitems,
      locations: locations,
      prices: prices,
      ratings: ratings,
      seasons: seasons,
      holiday: [],
      count: 10

    };
  },

  methods : {
      itemsSearched : function(){

        let ses = this.seasons.title;
        
        return this.holidaypackageitems.filter(function(holidaypackageitem){
          return holidaypackageitem ? holidaypackageitem.season == ses : holidaypackageitem;
        });

      }
  }






};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
