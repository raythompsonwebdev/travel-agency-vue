<template>

  <div class="BestDeal">

    <FilterNav
      v-bind:seasons="seasons"
      v-bind:locations="locations"
      v-bind:prices="prices"
      v-bind:ratings="ratings"
      v-on:seasonClick="itemsSearched"
    />

    <main id="content2">
      
      <div>
        <article 
          class="holiday_details_small" 
          v-bind:key="bestdealitem.id" 
          v-for="bestdealitem in filteredPacks"
        >

          <h1>{{bestdealitem.title}}</h1>

          <span class="holidayprice">
                From
                <span class="offerbox-price">{{bestdealitem.price}}</span>
              </span>
          <figure>
            <img :src="bestdealitem.url" :alt="bestdealitem.title" />

            <figcaption>

              <p>Location: {{bestdealitem.location}}.</p>
              <p>Available: {{bestdealitem.month}}.</p>
              <button >View Details</button>
            </figcaption>
          </figure>

        </article>
      </div>

    </main>

    <div class="clearfix"></div>

  </div>
</template>

<script>
import FilterNav from "./FilterNav.vue";
//import BestDealItem from "./BestDealItem.vue";
import bestdealitems from './data/bestdealitems.js'
import {locations , prices, ratings, seasons} from './data/filterNavText.js';

export default {

  name: "BestDeal",
  components: {
    //BestDealItem,
    FilterNav
  },

  data: () => {

    return {
      selected: ' ',
      bestdealitems: bestdealitems,
      show: true,
      locations: locations,
      prices: prices,
      ratings: ratings,
      seasons: seasons,
      holiday: [],
      count: 10
    };
  },

  methods : {

      itemsSearched: function (id) {

        this.selected = id 
        
        alert(id)

      }
      
  },

  computed: {

    filteredPacks: function(){ 
      
      if(this.selected == ' '){

        return this.bestdealitems  

      }else if('winter' === this.selected || 'summer' === this.selected || 'spring' === this.selected || 'autumn' === this.selected ){        

          return  this.bestdealitems.filter( bestdealitem => bestdealitem.season === this.selected)
        

      }else if('london' === this.selected || 'paris' === this.selected || 'madrid' === this.selected || 'dubai' == this.selected || 'rome' == this.selected ){        

        return this.bestdealitems.filter( bestdealitem => bestdealitem.location == this.selected)


      }else if('one' === this.selected || 'two' === this.selected || 'three' === this.selected || 'four' == this.selected || 'five' === this.selected){        

        return this.bestdealitems.filter( bestdealitem => bestdealitem.rating === this.selected)

      }else if('$100 - $200' == this.selected || '$200 - $300' == this.selected || '$300 - $400' == this.selected || '$400 - $500' == this.selected || '$500 +' == this.selected){        

        return this.bestdealitems.filter( bestdealitem => bestdealitem.price === this.selected)

      }else{ 
        
        return this.bestdealitems        

      }       
       
    }          
    
  }


};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">



</style>
