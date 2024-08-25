<template>
  <aside v-if="searchFilterFunction" id="filter-nav-sidebar" class="hide">
    <button id="side-bar-btn" @click="handleClick">SIDE</button>

    <section id="seasons">
      <ul class="filter-list">
        <li class="filter-list-item">
          <button
            @click="handleClick()"
            @mouseup="InlineButtonClickHandler()"
            id="reset"
            type="submit"
          >
            RESET ALL
          </button>
        </li>
      </ul>
      <h1 class="filter-title">Filter By Season</h1>
      <ul class="filter-list">
        <li v-for="season in props.seasons" :key="season.id" class="filter-list-item">
          <button
            @click="handleClick(season.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ season.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="locations">
      <h1 class="filter-title">Filter By Location</h1>
      <ul class="filter-list">
        <li v-for="location in props.locations" :key="location.id" class="filter-list-item">
          <button
            @click="handleClick(location.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ location.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="prices">
      <h1 class="filter-title">Filter By Price</h1>
      <ul class="filter-list">
        <li v-for="price in props.prices" :key="price.id" class="filter-list-item">
          <button
            @click="handleClick(price.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ price.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="ratings">
      <h1 class="filter-title">Filter By Rating</h1>
      <ul class="filter-list">
        <li v-for="rating in props.ratings" :key="rating.id" class="filter-list-item">
          <button
            @click="handleClick(rating.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ rating.title }}
          </button>
        </li>
      </ul>
    </section>
    <br />
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
// Define the emit function
const emit = defineEmits(['findSeason'])

const props = defineProps({
  seasons: Array,
  prices: Array,
  locations: Array,
  ratings: Array
})

const InlineButtonClickHandler = () => {
  const slideoutMenu = document.querySelector('#filter-nav-sidebar')
  if (slideoutMenu.classList.contains('show')) {
    slideoutMenu.setAttribute('class', 'hide')
  } else {
    slideoutMenu.setAttribute('class', 'show')
  }
}
const searchFilterFunction = (event) => {
  event.preventDefault()

  const el = document.getElementById('filter-nav-sidebar')

  const box = el.getAttribute('class')

  if (box === 'hide') {
    el.setAttribute('class', 'show')
  } else {
    el.setAttribute('class', 'hide')
  }
}

const handleClick = (item) => {
  emit('findSeason', item)
}
</script>

<style lang="scss"></style>
