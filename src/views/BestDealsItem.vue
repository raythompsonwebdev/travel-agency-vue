<template>
  <div v-if="bestdealitem">
    <div class="BestDealsItem">
      <h1>Best deal item</h1>
    
      <main id="holiday-items">       
        <div>
          <h1>{{ bestdealitem[0].title }}</h1>
          <p>{{ bestdealitem[0].season }}</p>
          <img 
            :src="bestdealitem[0].url" 
            alt="Image" 
          >
          <button>Add to Cart</button>      
        </div>
      </main>

      <div class="clearfix" />
    </div>
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
    id:{
      type: String,
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

<style >
</style>
