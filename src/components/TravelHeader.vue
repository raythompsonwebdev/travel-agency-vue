<template>
  <header id="site-header">
    <figure id="logo">
      <img :src="image" :alt="'website logo'" id="logo-img" />
      <h1 id="logo-title">
        <span class="logo-span">Travel</span><span class="logo-span">AGENCY</span>
      </h1>
    </figure>
    <div id="cart-icon">
      Cart Items
      <!-- <img :src="image" :alt="'website logo'" id="logo-img" /> -->
      <RouterLink id="cart-icon-btn" to="/cart">{{
        props.cartItems ? props.cartItems.length : ''
      }}</RouterLink>
    </div>
    <aside class="contact">
      <address class="telephone-number">
        <a id="contact-number" :href="`tel:${phoneNumber}`">
          {{ phoneNumber }}
        </a>
      </address>
      <span id="opening-time">{{ openTime }}</span>
    </aside>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'
import image from '@/assets/img/travel-agency-website-logo-copy.png'
const phoneNumber = '0208-365-1452'
const openTime = 'Everyday 8am - 9pm'

const props = defineProps({
  cartItems: {
    type: Object
  }
})
</script>

<style lang="scss"></style>
