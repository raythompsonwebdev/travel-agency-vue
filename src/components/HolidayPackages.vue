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
      <article
        v-if="show"
          >
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
              <p>Location : {{holidaypackageitem.place}}</p>
              <p>{{holidaypackageitem.text}}</p>
              <button>View Details</button>
            </figcaption>
          </figure>
        </div>
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
      show: true,
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
          
        //alert(id)
          

      }
      
  },

  computed: {

    filteredPacks: function(){            
              
      
      if(this.selected == ' '){

        return this.holidaypackageitems

      }else{

        return this.holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.id == this.selected)


      }       
       
    }          
    
  }

  
      

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
