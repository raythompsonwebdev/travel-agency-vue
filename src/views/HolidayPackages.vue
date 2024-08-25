<template>
  <main id="holiday-packages">
    <FilterNav
      :seasons="filterNavData.seasons"
      :prices="filterNavData.prices"
      :locations="filterNavData.locations"
      :ratings="filterNavData.ratings"
      @seasonClick="itemsSearched"
    />

    <!---main content-->
    <main id="holiday-items">
      <!--HolidayPackage Item component -->
      <transition-group name="fade" tag="div">
        <div v-for="(holidaypackageitem, index) in filteredPacks" :key="index">
          <HolidayPackageItem :holidaypackageitem="holidaypackageitem" />
        </div>
      </transition-group>
    </main>
  </main>
</template>

<script setup>
import axios from 'axios'
import HolidayPackageItem from '@/components/HolidayPackageItem.vue'
import FilterNav from '@/components/FilterNav.vue'
import { onMounted, computed, ref } from 'vue'

const selected = ref(' ')
const holidaypackageitems = ref([])

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

onMounted(async () => {
  try {
    const result = await axios.get('/api/holidaypackages')
    holidaypackageitems.value = result.data
  } catch (error) {
    console.error('Error fetching products', error)
  } finally {
    console.log('Products received')
  }
})

const filteredPacks = computed(() => {
  if (!selected.value) {
    return holidaypackageitems.value
  } else if (
    'winter' === selected.value ||
    'summer' === selected.value ||
    'spring' === selected.value ||
    'autumn' === selected.value
  ) {
    return holidaypackageitems.value.filter(
      (holidaypackageitem) => holidaypackageitem.season === selected.value
    )
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
    return holidaypackageitems.value.filter(
      (holidaypackageitem) => holidaypackageitem.location === selected.value
    )
  } else if (
    'one' === selected.value ||
    'two' === selected.value ||
    'three' === selected.value ||
    'four' === selected.value ||
    'five' === selected.value
  ) {
    return holidaypackageitems.value.filter(
      (holidaypackageitem) => holidaypackageitem.rating === selected.value
    )
  } else if (
    '$399 - $499' === selected.value ||
    '$499 - $599' === selected.value ||
    '$599 - $699' === selected.value ||
    '$699 - $999' === selected.value ||
    '$999 +' === selected.value
  ) {
    return holidaypackageitems.value.filter(
      (holidaypackageitem) => holidaypackageitem.price === selected.value
    )
  } else {
    return holidaypackageitems.value
  }
})

const itemsSearched = (id) => {
  selected.value = id
}
</script>

<style lang="scss">
.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.7s;
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
