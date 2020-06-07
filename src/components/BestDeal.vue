<template>

  <div class="BestDeal">

    <FilterNav
      v-bind:seasons="seasons"
      v-bind:locations="locations"
      v-bind:prices="prices"
      v-bind:ratings="ratings"
    />

    <main id="content2">
      
      <BestDealItem v-bind:bestdealitems="bestdealitems" />

    </main>

    <div class="clearfix"></div>

  </div>
</template>

<script>
import FilterNav from "./FilterNav.vue";
import BestDealItem from "./BestDealItem.vue";
import bestdealitems from './data/bestdealitems.js'
import {locations , prices, ratings, seasons} from './data/filterNavText.js';

export default {

  name: "BestDeal",
  components: {
    BestDealItem,
    FilterNav
  },

  data: () => {

    return {

      bestdealitems: bestdealitems,
      show: "true",
      locations: locations,
      prices: prices,
      ratings: ratings,
      seasons: seasons,
      holiday: [],
      count: 10
    };
  },


};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">



</style>
