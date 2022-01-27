<template>
  <div class="product-container">
    <!-- <img
      class="product-image"
      :src="product.imageUrl"
    > -->
    <div class="details-wrap">
      <!-- <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p> -->
    </div>
    <!-- <button
      class="remove-button"
      @click="$emit('remove-from-cart', product.id)"
    >
      Remove From Cart
    </button> -->
  </div>
</template>

<script>
export default {
    name: 'CartsListItem',
    //props: ['products'],
}
</script>

<style scoped>

</style>