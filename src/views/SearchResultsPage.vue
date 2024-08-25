<template>
  <main id="cart-page">
    <h2 class="single-item-title">{{ title }}</h2>
    <transition-group name="fade" tag="div" id="cart-items">
      <div v-if="results.length > 0">
        <ResultsList :products="results" />
      </div>
      <div v-if="results.length === 0">You current have no items in your cart!</div>
    </transition-group>
  </main>
</template>

<script setup>
import axios from 'axios'
import ResultsList from '@/components/ResultsList.vue'
import { ref, onMounted } from 'vue'

const results = ref([])
const title = 'Search Results Page'

onMounted(async () => {
  try {
    console.log(this.$route.query)
    const result = await axios.get('/api/searchform', {
      data: this.$route.query
    })
    const { data } = result
    results.value = data
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
