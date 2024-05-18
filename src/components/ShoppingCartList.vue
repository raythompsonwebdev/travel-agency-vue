<template>
  <article v-for="product in products" :key="product.id">
    <figure v-if="product" class="bestdeal-details-item">
      <img
        :src="product.url"
        :alt="product.title"
        class="bestdeal-details-img"
      />
      <figcaption class="bestdeal-details-caption">
        <h1 class="bestdeal-details-title">{{ product.title }}</h1>

        <span class="bestdeal-details-price">
          From
          <span class="bestdeal-offer">{{ product.price }}</span>
        </span>
        <p class="bestdeal-text">Location: {{ product.location }}.</p>
        <button
          @click="$emit('remove-from-cart', product.id)"
          class="bestdeal-link"
        >
          Remove from Cart
        </button>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: ["products"],
};
</script>
