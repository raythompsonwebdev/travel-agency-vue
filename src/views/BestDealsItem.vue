<template>
  <!--BestDeal Item component v-for="bestdealitem in filteredPacks"-->
  <div
    v-if="bestdealitem"
    class="BestDealsItem"
  >
    <h1>{{ bestdealitem.title }}</h1>
    <article        
      class="holiday_item_details"
    >
      <h1>{{ bestdealitem.title }}</h1>
      <span class="holidayprice">
        From
        <span class="offerbox-price">{{ bestdealitem.price }}</span>
      </span>
      <figure>
        <img
          :src="bestdealitem.url"
          :alt="bestdealitem.title"
        >

        <figcaption>
          <h3>Location: {{ bestdealitem.location }}.</h3>
          
          <button>Book Holiday</button>
        </figcaption>
      </figure>
    </article>
  </div>
 
  <NotFoundpage v-else />
</template>

<script>

//import { bestdealitems } from '../data-json.js';
import NotFoundpage from '../views/NotFoundpage';
import axios from "axios";

export default {
  name: "BestDealsItem",  
  components: {
    NotFoundpage
  },
  data(){
    return{
      bestdealitem: {},
    }
  },
  async created(){
    const result = await axios.get(`/api/bestdeals/${this.$route.params.id}`);
    const bestdealitem = result.data;
    this.bestdealitem = bestdealitem;
  }
    
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>

