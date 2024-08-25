<template>
  <nav id="site-navigation">
    <button id="toggle-menu" @click="naviFunction">Menu</button>
    <ul id="site-inner-nav" class="hide">
      <li class="site-inner-nav-item">
        <RouterLink to="/" class="nav-item r-item" @click="InlineMenuButtonClickHandler()">
          Home
        </RouterLink>
      </li>
      <li class="site-inner-nav-item">
        <RouterLink
          active-class="active"
          to="/holidaypackages"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          Holiday Packages
        </RouterLink>
      </li>
      <li class="site-inner-nav-item">
        <RouterLink
          to="/bestdeals"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          BestDeal
        </RouterLink>
      </li>
      <li class="site-inner-nav-item">
        <RouterLink
          to="/services"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          Services
        </RouterLink>
      </li>
      <li class="site-inner-nav-item">
        <RouterLink to="/about" class="nav-item r-item" @mouseup="InlineMenuButtonClickHandler()">
          AboutUs
        </RouterLink>
      </li>
      <li class="site-inner-nav-item">
        <RouterLink to="/contact" class="nav-item r-item" @mouseup="InlineMenuButtonClickHandler()">
          Contact
        </RouterLink>
      </li>
    </ul>

    <LanguageSelect />
  </nav>
</template>

<script setup>
// import { RouterLink, useRoute } from 'vue-router';
import { RouterLink } from 'vue-router'
import LanguageSelect from '@/components/LanguageSelect.vue'

// const isActiveLink = (routePath) => {
//   const route = useRoute();
//   return route.path === routePath;
// };

const naviFunction = (e) => {
  e.preventDefault()
  const slideoutNav = document.getElementById('site-inner-nav')
  if (slideoutNav.classList.contains('show')) {
    slideoutNav.setAttribute('class', 'hide')
  } else {
    slideoutNav.setAttribute('class', 'show')
  }
}

const InlineMenuButtonClickHandler = () => {
  const slideoutMenu = document.getElementById('site-inner-nav')

  const box = slideoutMenu.getAttribute('class')
  if (box === 'hide') {
    slideoutMenu.setAttribute('class', 'show')
  } else {
    slideoutMenu.setAttribute('class', 'hide')
  }
}
</script>

<style lang="scss"></style>
