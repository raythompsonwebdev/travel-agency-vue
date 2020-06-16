<template>

  <div class="HolidayPackages">

  <!---leftside2-->

      <FilterNav
        v-bind:seasons="seasons"
        v-bind:locations="locations"
        v-bind:prices="prices"
        v-bind:ratings="ratings"
        v-on:seasonClick="itemsSearched"
      />

    <!---main content-->
    <main id="content2">
      <!-- <HolidayPackageItem
        v-bind:holidaypackageitems="holidaypackageitems"                
      /> -->
      
      <article>
        <transition-group name="fade" tag="div" >
        <div
          class="holiday_details"
          v-for="holidaypackageitem in filteredPacks"
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
              <p>Location : {{holidaypackageitem.location}}</p>
              <p>{{holidaypackageitem.text}}</p>
              <button>View Details</button>
            </figcaption>
          </figure>
        </div>
        </transition-group>
      </article>
      
    </main>

    <div class="clearfix"></div>
  </div>
</template>

<script>

import FilterNav from "./FilterNav.vue";
//import HolidayPackageItem from "./HolidayPackageItem.vue";
import holidaypackageitems from './data/holidaypackageitems.js';
import {locations , prices, ratings, seasons} from './data/filterNavText.js';

export default {

  name: "HolidayPackages",

  components: {
    //HolidayPackageItem,
    FilterNav
  },

  data: () => {

    return {
      //show: true,
      selected: ' ',
      holidaypackageitems: holidaypackageitems,
      locations: locations,
      prices: prices,
      ratings: ratings,
      seasons: seasons,
      holiday: [],
      count: 10,
      

    };
  },

  methods : {

      itemsSearched: function (id) {

        this.selected = id  

      }
      
  },

  computed: {

    filteredPacks: function(){                    
      
      if(this.selected === " "){

         return holidaypackageitems

      }else if('winter' === this.selected || 'summer' === this.selected || 'spring' === this.selected || 'autumn' === this.selected ){        

          return  holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.season === this.selected)
        

      }else if('london' === this.selected || 'paris' === this.selected || 'madrid' === this.selected || 'dubai' == this.selected || 'rome' == this.selected ){        

        return holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.location == this.selected)


      }else if('one' === this.selected || 'two' === this.selected || 'three' === this.selected || 'four' == this.selected || 'five' === this.selected){        

        return holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.rating === this.selected)

      }else if('$399 - $499' == this.selected || '$499 - $599' == this.selected || '$599 - $699' == this.selected || '$699 - $999' == this.selected || '$999 +' == this.selected){        

        return holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.price === this.selected)

      }else{ 
        
        return holidaypackageitems        

      }        
       
    }          
    
  }  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >

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
