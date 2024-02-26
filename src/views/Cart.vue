<template>
  <div class="Cart">
    <h2>{{ title }}</h2>
    <transition-group name="fade" tag="div" id="cart-items">
      <div v-for="(cartItem, index) in cartItems" :key="index">
        <CartItems :cartItem="cartItem" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import CartItems from "@/components/CartItems";
import axios from "axios";

export default {
  name: "CartPage",
  components: {
    CartItems,
  },
  data() {
    return {
      title: "Cart page",
      cartItems: [],
    };
  },
  async created() {
    const result = await axios.get("/api/users/12345/cart");
    const { data } = result;
    this.cartItems = data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.5s;
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
