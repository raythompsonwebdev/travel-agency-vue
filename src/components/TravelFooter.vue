<template>
  <footer id="site-footer">
    <ul id="site-inner-footer">
      <li class="inner-footer-item">
        <RouterLink to="/" class="footer-nav-item r-item"> Home </RouterLink>
      </li>
      <li class="inner-footer-item">
        <RouterLink to="/BestDeal" class="footer-nav-item r-item"> BestDeal </RouterLink>
      </li>
      <li class="inner-footer-item">
        <RouterLink to="/AboutUs" class="footer-nav-item r-item"> AboutUs </RouterLink>
      </li>
      <li class="inner-footer-item">
        <RouterLink to="/HolidayPackages" class="footer-nav-item r-item">
          HolidayPackages
        </RouterLink>
      </li>
      <li class="inner-footer-item">
        <RouterLink to="/Contact" class="footer-nav-item r-item"> Contact </RouterLink>
      </li>
      <li class="inner-footer-item">
        <RouterLink to="/Services" class="footer-nav-item r-item"> Services </RouterLink>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss"></style>
