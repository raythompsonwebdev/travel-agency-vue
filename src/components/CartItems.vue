<template>
  <div v-if="cartItem" class="cart-product-container">
    <img class="cart-product-image" :src="cartItem.url" />
    <div class="cart-details-wrap">
      <h3>{{ cartItem.title }}</h3>
      <p>{{ cartItem.price }}</p>
      <p>{{ cartItem.location }}</p>
    </div>
    <!-- <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove from Cart</button> -->
    <button class="cart-button">Remove from Cart</button>
  </div>
  <div v-else class="cart-product-container">
    <div class="cart-details-wrap">
      <h3>No Product Found</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: {
    cartItem: {
      type: Object,
      default: null,
    },
  },
};
</script>
