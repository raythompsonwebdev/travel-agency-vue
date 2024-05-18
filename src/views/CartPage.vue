<template>
  <div class="Cart">
    <h2>{{ title }}</h2>
    <transition-group name="fade" tag="div" id="cart-items">
      <div v-if="cartItems.length > 0">
        <ShoppingCartList
          @remove-from-cart="removeFromCart($event)"
          :products="cartItems"
        />
        <button class="bestdeal-link">Proceed to Checkout</button>
      </div>
      <div v-if="cartItems.length === 0">
        You current have no items in your cart!
      </div>
    </transition-group>
  </div>
</template>

<script>
import axios from "axios";
import ShoppingCartList from "@/components/ShoppingCartList.vue";

export default {
  name: "ShoppingCartPage",
  components: {
    ShoppingCartList,
  },
  data() {
    return {
      cartItems: [],
      title: "Cart Page",
    };
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/12345/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },
  async created() {
    const response = await axios.get("/api/users/12345/cart");
    const cartItems = response.data;
    this.cartItems = cartItems;
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
