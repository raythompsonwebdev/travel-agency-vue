<template>
  <div class="BestDeals">
    <main id="holiday-items">
      <h1>Best deals</h1>

      <div 
        v-for="bestdealitem in bestdealitems"
        :key="bestdealitem.id"
      >
        <img
          :src="bestdealitem.url"
          alt=""
        >
        <h3>{{ bestdealitem.title }}</h3>

        <!-- router link allows navigation without full page refresh-->
        <router-link :to="'/bestdeals/' + bestdealitem.id">
          <button>View details</button>
        </router-link>
      </div>
    </main>

    <div class="clearfix" />
  </div>
</template>

<script>

import { bestdealitems } from '../data-json.json';

export default {
  name: "BestDeals",
  
  data(){
    return{
      bestdealitems,
      
    }
  }
    
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
</style>
