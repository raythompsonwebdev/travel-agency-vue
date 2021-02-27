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
export default {
  name: "Cart",
  data(){
    return{
      title: "Shopping Cart page",
      
    }
  },
  // computed:{
  //   //adds cart item prices
  //   totalPrice(){
  //     return this.cartItems.reduce(
  //       (sum, item) => sum + Number(item,price),
  //       0,
  //     );
  //   }
  // }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

</style>
