<template>
  <div>
    <h1>{{ title }}</h1> 
    <p>Text:</p> 
    <button>Remove</button>
    <!-- <p>Total: ${{ totalPrice }}</p>  -->
    <button>Proceed to checkout</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cart",
  data(){
    return{
      title: "Shopping Cart page",
      cartItems: {},
      
    }
  },
  computed:{
    //adds cart item prices
    totalPrice(){
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0,
      );
    }
  },
  async created () {
    const result = await axios.get('/api/users/12335/cart');
    const cartItems = result.data;
    this.cartItems = cartItems;


  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

</style>
