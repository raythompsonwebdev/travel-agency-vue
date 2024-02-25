<template>
  <div class="Cart">
    <main id="cart-items">
      <transition-group name="fade" tag="div">
        <div v-for="cartitem in cartItems" :key="cartitem.id">
          <CartItems :cartitem="cartitem" />
        </div>
      </transition-group>
    </main>
  </div>
</template>

<script>
// import axios from "axios";
import CartItems from "@/components/CartItems";

export default {
  name: "CartPage",
  components: {
    CartItems,
  },
  data() {
    return {
      title: "Shopping Cart page",
      cartItems: {},
    };
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
