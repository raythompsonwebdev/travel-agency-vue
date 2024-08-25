<template>
  <main id="cart-page">
    <h2 class="single-item-title">{{ title }}</h2>
    <transition-group name="fade" tag="div" id="cart-items">
      <div v-if="cartItems.length > 0">
        <ShoppingCartList @remove-from-cart="removeFromCart($event)" :products="cartItems" />
        <button class="proceed-to-checkout">Proceed to Checkout</button>
      </div>
      <div v-if="cartItems.length === 0">You current have no items in your cart!</div>
    </transition-group>
  </main>
</template>

<script setup>
import axios from 'axios'
import ShoppingCartList from '@/components/ShoppingCartList.vue'
import { ref, onMounted } from 'vue'

const cartItems = ref([])
const title = 'Cart Page'

const removeFromCart = async (productId) => {
  const response = await axios.delete(`/api/users/12345/cart/${productId}`)
  const updatedCart = response.data
  cartItems.value = updatedCart
}

onMounted(async () => {
  const response = await axios.get('/api/users/12345/cart')
  const { data } = response
  cartItems.value = data
})
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
