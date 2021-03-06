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

          <!-- add @click="addToCart" to button -->
          <!-- add v-if="!showSuccessmessage" to button if false -->          
          <button>
            Book Holiday
          </button>          
          <!-- v-if="showSuccessmessage" button if true -->
          <!-- make button different color -->
          <!-- no click event -->
          <!-- <button>
            Book Holiday Success
          </button> -->
        </figcaption>
      </figure>
    </article>
  </div>
 
  <NotFoundpage v-else />
</template>

<script>

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
      showSuccessMessage: false,
    }
  },  
  async created(){
    const result = await axios.get(`/api/bestdeals/${this.$route.params.id}`);
    const bestdealitem = result.data;
    this.bestdealitem = bestdealitem;
  },
  // methods:{
  //   async addToCart(){
  //     //add request body object as second argument
  //     await axios.post('/api/users/1234/cart/', {
  //       bestdealId: this.$route.params.id,
  //     });
          // this.showSuccessMessage = true;

          // setTimeout(()=>{
          //   this.$router.push('/bestdeals');
          // }, 1500);
          
  //   }
  // },
    
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>

