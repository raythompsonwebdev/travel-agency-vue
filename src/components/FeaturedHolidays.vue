<template>
<!--Featured Holiday Package-->
    
    <section id="offers">

      <h2>Featured Holiday Package</h2>

      <div class="offerbox" v-for="featuredholiday in featuredholidays" v-bind:key="featuredholiday.id">
         
        <figure>
          <img :src='featuredholiday.url'>

          <figcaption>
            <p>{{featuredholiday.text}}</p>
            <p>from only <span class="offerbox-price">{{featuredholiday.price}}</span> per person</p>
          </figcaption>

        </figure>
        
      </div>
      

      <div class="clearfix"></div>

    </section> 
</template>

<script>
export default {
    
  name: "FeaturedHolidays",
  props:['featuredholidays']
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>