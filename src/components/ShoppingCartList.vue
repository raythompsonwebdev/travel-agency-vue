<template>
  <article v-for="product in props.products" :key="product.id" class="cart-details">
    <figure v-if="product" class="cart-details-items">
      <img :src="product.url" :alt="product.title" class="cart-details-img" />
      <figcaption class="cart-details-caption">
        <h1 class="cart-details-title">{{ product.title }}</h1>

        <span class="cart-details-price">
          From
          <span class="cart-offer">{{ product.price }}</span>
        </span>
        <p class="cart-text">Location: {{ product.location }}.</p>
      </figcaption>
    </figure>
    <button @click="$emit('remove-from-cart', product.id)" class="cart-link">
      Remove from Cart
    </button>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  products: {
    type: Array
  }
})
</script>
