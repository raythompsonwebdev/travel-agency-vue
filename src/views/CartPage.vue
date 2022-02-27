<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Text:</p>
    <!-- <CartList
      :products="cartItems"
      v-on:remove-from-cart="removeFromCart($event)"/> -->
    <button>Remove</button>
    <!-- <p>Total: ${{ totalPrice }}</p>  -->
    <button>Proceed to checkout</button>
  </div>
</template>

<script>
import axios from "axios";
//import CartsList from '../components/CartsList.vue';
export default {
  name: "CartPage",
  // components: {
  //     CartList,
  // },
  data() {
    return {
      title: "Shopping Cart page",
      cartItems: {},
    };
  },
  computed: {
    //adds cart item prices
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
  async created() {
    const result = await axios.get(
      `/api/holidaypackages/${this.$route.params.id}/cart`
    );
    const { data } = result;
    this.cartItems = data;
  },
  // methods: {
  //   async removeFromCart(productId) {
  //     const result = await axios.delete(`/api/users/12345/cart/${productId}`);
  //     this.cartItems = result.data;
  //   }
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
