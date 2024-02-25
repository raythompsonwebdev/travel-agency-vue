<template>
  <div v-if="cartitem" class="cart-product-container">
    <img class="cart-product-image" :src="product.imageUrl" />
    <div class="cart-details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <!-- <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove from Cart</button> -->
  </div>
  <div v-else class="cart-product-container">
    <div class="cart-details-wrap">
      <h3>Sorry</h3>
      <p>No Product Found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: {
    cartitem: {
      type: Object,
      default: null,
    },
  },
};
</script>
