<template>
  <div class="BestDeals">
    <FilterNav
      :seasons="seasons"
      :prices="prices"
      :locations="locations"
      :ratings="ratings"
      @seasonClick="itemsSearched"
    />

    <main id="holiday-items">
      <!--BestDeal Item component v-for="bestdealitem in filteredPacks"-->
      <transition-group 
        name="fade" 
        tag="div"
      >
        <div
          v-for="bestdealitem in filteredPacks"
          :key="bestdealitem.id"
        >
          <BestDealItem :bestdealitem="bestdealitem" />
        </div>
      </transition-group>
    </main>

    <div class="clearfix" />
  </div>
</template>

<script>

import BestDealItem from "../components/BestDealItem.vue";
import FilterNav from "../components/FilterNav.vue";
import { bestdealitems,seasons,ratings,locations, prices  } from '../data-json.json';

export default {
  name: "BestDeals",
  components: {
    BestDealItem,
    FilterNav
  },  
  data(){
    return{
      bestdealitems,
      seasons,
      ratings,
      locations, 
      prices,
      selected: ' ',     
      holiday: [],
      count: 10
      
    }
  },
  computed: {
    filteredPacks: function(){

      if(!this.selected){
        return  bestdealitems
      }else if('winter' === this.selected || 'summer' === this.selected || 'spring' === this.selected || 'autumn' === this.selected ){
          return  bestdealitems.filter( bestdealitem => bestdealitem.season === this.selected)

      }else if('london' === this.selected || 'paris' === this.selected || 'madrid' === this.selected || 'dubai' == this.selected || 'rome' == this.selected ){
        return bestdealitems.filter( bestdealitem => bestdealitem.location === this.selected)
      }else if('one' === this.selected || 'two' === this.selected || 'three' === this.selected || 'four' == this.selected || 'five' === this.selected){
        return bestdealitems.filter( bestdealitem => bestdealitem.rating === this.selected)
      }else if('$399 - $499' == this.selected || '$499 - $599' == this.selected || '$599 - $699' == this.selected || '$699 - $999' == this.selected || '$999 +' == this.selected){
        return bestdealitems.filter( bestdealitem => bestdealitem.price === this.selected)
      }else{

        return bestdealitems
      }

    }

  }, 
  methods : {
      itemsSearched: function (id) {
        this.selected = id
      }
  },
    
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
  .fade-enter-active {
    animation: coming 1s;
    animation-delay: 1s;
    opacity: 0;
  }
  .fade-leave-active {
    animation: going 1s;
  }
  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
</style>
