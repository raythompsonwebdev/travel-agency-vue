<template>
  <!--BestDeal Item component v-for="bestdealitem in filteredPacks"-->
  <div
    v-if="bestdealitem"
    class="BestDealsItem"
  >
    <h1>{{ bestdealitem[0].id }}</h1>
    <article        
      class="holiday_item_details"
    >
      <h1>{{ bestdealitem[0].title }}</h1>
      <span class="holidayprice">
        From
        <span class="offerbox-price">{{ bestdealitem[0].price }}</span>
      </span>
      <figure>
        <img
          :src="bestdealitem[0].url"
          :alt="bestdealitem[0].title"
        >

        <figcaption>
          <h3>Location: {{ bestdealitem[0].location }}.</h3>
          
          <button>Book Holiday</button>
        </figcaption>
      </figure>
    </article>
  </div>
 
  <NotFoundpage v-else />
</template>

<script>

import { bestdealitems } from '../data-json.js';
import NotFoundpage from '../views/NotFoundpage'

export default {
  name: "BestDealsItem",  
  components: {
    NotFoundpage
  },
  props:{
    bestdealitems:{
      type: Array,
      default: null
    }
  },
  data(){
    return{
      //.find((b) => b.id === this.$route.params.id),
      bestdealitem: bestdealitems.filter( element => element.id == this.$route.params.id ),
    }
  }
    
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>

