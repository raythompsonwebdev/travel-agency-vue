<template>
  <header id="site-header">
    <figure id="logo">
      <img :src="image" :alt="'website logo'" id="logo-img" />
      <h1 id="logo-title">
        <span class="logo-span">Travel</span
        ><span class="logo-span">AGENCY</span>
      </h1>
    </figure>
    <!-- <div id="cart-icon">
      <img :src="image" :alt="'website logo'" id="logo-img" />
      <router-link id="cart-icon-btn" to="/cart">{{
        cartItems ? cartItems.length : ""
      }}</router-link>
    </div> -->
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

<script>
import phoneImage from "@/assets/img/contact/Telephone.png";
export default {
  name: "TravelHeader",
  props: {
    cartItems: { type: Array, required: true },
  },
  data() {
    return {
      phoneNumber: "0208-365-1452",
      openTime: "Everyday 8am - 9pm",
      phoneImg: phoneImage,
      image: require("@/assets/img/travel-agency-website-logo-copy.png"),
    };
  },
};
</script>

<style lang="scss"></style>
