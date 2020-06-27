<template>

  <div class="BestDeal">

    <FilterNav 
      :seasons="this.filternav.seasons"
      :prices="this.filternav.prices"
      :locations="this.filternav.locations"
      :ratings="this.filternav.ratings"   
      v-on:seasonClick="itemsSearched"
    />

    <main id="content2">
      <!--BestDeal Item component -->
      <div>
        <article 
          class="holiday_details_small"            
          v-for="bestdealitem in filteredPacks"
          v-bind:key="bestdealitem.id"
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
import axios from 'axios';

export default {

  name: "BestDeal",
  components: {    
    FilterNav
  },

mounted() {
    axios.get("./data-json/bestdealitems.json").then(response => (this.data = response.data));
    axios.get("./data-json/filternav.json").then(response => (this.filternav = response.data)); 
},

  data: () => {

    return {
      data:[],
      filternav:[],
      selected: ' ',      
      holiday: [],
      count: 10
    };
  },

  methods : {

      itemsSearched: function (id) {
        this.selected = id           

      }
      
  },

  computed: {

    filteredPacks: function(){ 
            
      if(!this.selected){

        return  this.data 

      }else if('winter' === this.selected || 'summer' === this.selected || 'spring' === this.selected || 'autumn' === this.selected ){        

          return  this.data.filter( bestdealitem => bestdealitem.season === this.selected)
        

      }else if('london' === this.selected || 'paris' === this.selected || 'madrid' === this.selected || 'dubai' == this.selected || 'rome' == this.selected ){        

        return this.data.filter( bestdealitem => bestdealitem.location === this.selected)


      }else if('one' === this.selected || 'two' === this.selected || 'three' === this.selected || 'four' == this.selected || 'five' === this.selected){        

        return this.data.filter( bestdealitem => bestdealitem.rating === this.selected)

      }else if('$399 - $499' == this.selected || '$499 - $599' == this.selected || '$599 - $699' == this.selected || '$699 - $999' == this.selected || '$999 +' == this.selected){        

        return this.data.filter( bestdealitem => bestdealitem.price === this.selected)

      }else{ 
        
        return this.data        

      }       
       
    }          
    
  }


};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">



</style>
