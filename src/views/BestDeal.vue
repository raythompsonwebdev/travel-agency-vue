<template>
  <main id="single-page" key="/best">
    <transition name="fade" tag="div">
      <article v-if="singlebestdeal" class="single-item">
        <h2 class="single-item-title">{{ singlebestdeal.title }}</h2>
        <figure class="single-item-figure">
          <img :src="singlebestdeal.url" :alt="singlebestdeal.title" class="single-item-img" />
          <figcaption class="single-item-caption">
            <h3 class="single-item-location">Location : {{ singlebestdeal.location }}</h3>
            <span class="single-item-price">
              from
              <span class="single-item-offer">{{ singlebestdeal.price }}</span>
            </span>
            <p class="single-item-text">{{ singlebestdeal.text }}</p>
            <p class="single-item-rating">Rating: {{ singlebestdeal.rating }} Star</p>
            <button @click="addToCart" class="single-item-submit" v-if="!itemIsInCart">
              Add to cart
            </button>
            <button class="single-item-added-to-cart" v-if="itemIsInCart">
              Item is already in cart
            </button>
          </figcaption>
        </figure>
      </article>
      <div v-else>
        <NotFoundpage />
      </div>
    </transition>
  </main>
</template>

<script setup>
import NotFoundpage from './NotFoundpage.vue'
import axios from 'axios'
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps({
  itemid: Object
})

const singlebestdeal = ref({})
const cartItems = ref([])

const itemIsInCart = computed(() => {
  return cartItems.value.some((item) => item?.id === this.$route.params.props.itemid)
})

const initData = async () => {
  const result = await axios.get(`/api/bestdeal/${parseInt(props.itemid)}`)
  const { data } = result
  singlebestdeal.value = data
}
const addToCart = async () => {
  await axios.post('/api/users/12345/cart', {
    id: this.$route.params.props.itemid
  })

  this.$router.push({
    name: 'CartPage'
    //query: this.formData,
  })
}

onMounted(async () => {
  initData()
  itemIsInCart()

  try {
    const cartResponse = await axios.get('/api/users/12345/cart')
    const cartItems = cartResponse.data
    cartItems.value = cartItems
  } catch (error) {
    console.error('Error fetching best deals:', error)
    // Check if it's an HTML response or another issue
    if (error.response && error.response.status === 404) {
      console.error('API endpoint not found')
    } else if (error.response && error.response.status === 500) {
      console.error('Server error')
    }
  }
})

// beforeRouteUpdate(to, from, next) {
//   this.initData()
//   next()
// }
</script>

<style lang="scss" scoped>
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
    transform: translateX(-200px);
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
    transform: translateX(-200px);
    opacity: 0;
  }
}
</style>
