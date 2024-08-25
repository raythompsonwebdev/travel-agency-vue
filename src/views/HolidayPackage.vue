<template>
  <main id="single-page" key="/best">
    <transition name="fade" tag="div">
      <article v-if="singleholidaypackage" class="single-item">
        <h2 class="single-item-title">{{ singleholidaypackage.title }}</h2>
        <figure class="single-item-figure">
          <img
            class="single-item-img"
            :src="singleholidaypackage.url"
            :alt="singleholidaypackage.title"
          />
          <figcaption class="single-item-caption">
            <h3 class="single-item-location">Location : {{ singleholidaypackage.location }}</h3>
            <span class="single-item-price">
              from
              <span class="single-item-offer">{{ singleholidaypackage.price }}</span>
            </span>
            <p class="single-item-text">{{ singleholidaypackage.text }}</p>
            <p class="single-item-rating">Rating: {{ singleholidaypackage.rating }} Star</p>
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
import NotFoundpage from '../views/NotFoundpage.vue'
import axios from 'axios'
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps({
  itemid: String
})

const singleholidaypackage = ref([])

const cartItems = ref([])

const itemIsInCart = computed(() => {
  return cartItems.value.some((item) => item?.id === this.$route.params.props.itemid)
})

const initData = async () => {
  const result = await axios.get(`/api/holidaypackage/${parseInt(props.itemid)}`)
  const { data } = result

  singleholidaypackage.value = data
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
    const { data } = cartResponse
    cartItems.value = data
  } catch (error) {
    console.error('Error fetching jobs', error)
  } finally {
    console.log('Products received')
  }
})

// beforeRouteUpdate(to, from, next) {
//   initData();
//   next();
// };
</script>

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
