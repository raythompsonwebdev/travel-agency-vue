<template>
  <aside id="language-select">
    <form id="language-selector">
      <label for="languageselectitems"
        >Language:
        <img
          id="flag-img"
          v-bind:src="selected !== ' ' ? `../assets/img/flags/${selected}.png` : defaultImage"
          :alt="'flag image'"
        />
        <select
          v-model="selected"
          name="languageselectitems"
          @click="itemsSearched($event.target.value)"
          aria-label="select country"
        >
          <option
            v-for="(languageselectitem, index) in onChangeImg"
            :key="index"
            :value="languageselectitem.value"
          >
            {{ languageselectitem.text }}
          </option>
        </select>
      </label>
    </form>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import defaultImage from '@/assets/img/flags/default.png'

const selected = ref(' ')

const languageselectitems = ref([
  {
    value: 'default',
    text: ' ',
    url: './assets/img/flags/United_Kingdom.jpg'
  },
  {
    value: 'Bangkok',
    text: 'Bangkok',
    url: './assets/img/flags/Bangkok.png'
  },
  {
    value: 'Germany',
    text: 'Germany',
    url: './assets/img/flags/Germany.jpg'
  },
  {
    value: 'United_States',
    text: 'United_States',
    url: './assets/img/flags/USA.gif'
  },
  {
    value: 'India',
    text: 'India',
    url: './assets/img/flags/India.png'
  },
  {
    value: 'France',
    text: 'France',
    url: './assets/img/flags/France.jpg'
  },
  {
    value: 'Spain',
    text: 'Spain',
    url: './assets/img/flags/Spain.jpg'
  }
])

const onChangeImg = computed(() => {
  if (selected.value === 'default') {
    return languageselectitems.value
  } else if (selected.value === 'Bangkok') {
    return languageselectitems.value
  } else if (selected.value === 'Germany') {
    return languageselectitems.value
  } else if (selected.value === 'United_States') {
    return languageselectitems.value
  } else if (selected.value === 'India') {
    return languageselectitems.value
  } else if (selected.value === 'France') {
    return languageselectitems.value
  } else if (selected.value === 'Spain') {
    return languageselectitems.value
  } else {
    return languageselectitems.value
  }
})

const itemsSearched = (id) => {
  selected.value = id
}
// const imgUrlAlt = (e) => {
//   e.target.src = `./assets/img/flags/default.png`
// };
</script>

<style lang="scss"></style>
