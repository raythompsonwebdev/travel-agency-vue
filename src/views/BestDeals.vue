<template>
  <main id="best-deals">
    <FilterNav
      :seasons="filterNavData.seasons"
      :prices="filterNavData.prices"
      :locations="filterNavData.locations"
      :ratings="filterNavData.ratings"
      @findSeason="itemsSearched"
    />

    <section id="holiday-items">
      <transition-group name="fade" tag="div">
        <div v-for="(bestdealitem, index) in filteredPacks" :key="index">
          <BestDealItem :bestdealitem="bestdealitem" />
        </div>
      </transition-group>
    </section>
  </main>
</template>

<script setup>
import BestDealItem from '@/components/BestDealItem.vue'
import FilterNav from '@/components/FilterNav.vue'
import axios from 'axios'
import { onMounted, computed, ref } from 'vue'

const filterNavData = {
  locations: [
    {
      id: 1,
      title: 'london'
    },
    {
      id: 2,
      title: 'paris'
    },
    {
      id: 3,
      title: 'madrid'
    },
    {
      id: 4,
      title: 'rome'
    },
    {
      id: 5,
      title: 'dubai'
    },
    {
      id: 6,
      title: 'tajmahal'
    },
    {
      id: 7,
      title: 'singapore'
    },
    {
      id: 8,
      title: 'toronto'
    },
    {
      id: 9,
      title: 'goldcoast'
    }
  ],
  prices: [
    {
      id: 1,
      title: '$399 - $499'
    },
    {
      id: 2,
      title: '$499 - $599'
    },
    {
      id: 3,
      title: '$599 - $699'
    },
    {
      id: 4,
      title: '$699 - $999'
    },
    {
      id: 5,
      title: '$999 +'
    }
  ],
  ratings: [
    {
      id: 1,
      title: 'one'
    },
    {
      id: 2,
      title: 'two'
    },
    {
      id: 3,
      title: 'three'
    },
    {
      id: 4,
      title: 'four'
    },
    {
      id: 5,
      title: 'five'
    }
  ],
  seasons: [
    {
      id: 1,
      title: 'winter'
    },
    {
      id: 2,
      title: 'summer'
    },
    {
      id: 3,
      title: 'spring'
    },
    {
      id: 4,
      title: 'autumn'
    }
  ]
}
const selected = ref(' ')
const bestdealitems = ref([])

const filteredPacks = computed(() => {
  if (!selected.value) {
    return bestdealitems.value
  } else if (
    'winter' === selected.value ||
    'summer' === selected.value ||
    'spring' === selected.value ||
    'autumn' === selected.value
  ) {
    return bestdealitems.value.filter((bestdealitem) => bestdealitem.season === selected.value)
  } else if (
    'london' === selected.value ||
    'paris' === selected.value ||
    'madrid' === selected.value ||
    'dubai' === selected.value ||
    'rome' === selected.value ||
    'goldcoast' === selected.value ||
    'singapore' === selected.value ||
    'toronto' === selected.value ||
    'tajmahal' === selected.value
  ) {
    return bestdealitems.value.filter((bestdealitem) => bestdealitem.location === selected.value)
  } else if (
    'one' === selected.value ||
    'two' === selected.value ||
    'three' === selected.value ||
    'four' === selected.value ||
    'five' === selected.value
  ) {
    return bestdealitems.value.filter((bestdealitem) => bestdealitem.rating === selected.value)
  } else if (
    '$399 - $499' === selected.value ||
    '$499 - $599' === selected.value ||
    '$599 - $699' === selected.value ||
    '$699 - $999' === selected.value ||
    '$999 +' === selected.value
  ) {
    return bestdealitems.value.filter((bestdealitem) => bestdealitem.price === selected.value)
  } else {
    return bestdealitems.value
  }
})

onMounted(async () => {
  try {
    const result = await axios.get('/api/bestdeals')
    const { data } = result
    bestdealitems.value = data
  } catch (error) {
    // Check if it's an HTML response or another issue
    if (error.response && error.response.status === 404) {
      console.error('API endpoint not found')
    } else if (error.response && error.response.status === 500) {
      console.error('Server error')
    }
  }
})

const itemsSearched = (id) => {
  selected.value = id
}
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
