<template>
  <!--wrapper-->
  <div id="wrapper">
    <TravelHeader :cartItems="cartItems" />
    <TravelNav />
    <!--:key="$route.path" :key="$route.fullPath"-->
    <router-view v-slot="{ Component, route }">
      <transition name="anim" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>

  <TravelFooter />
</template>
<script>
import axios from "axios";
import TravelNav from "@/components/TravelNav";
import TravelHeader from "@/components/TravelHeader";
import TravelFooter from "@/components/TravelFooter";

export default {
  name: "App",
  components: {
    TravelNav,
    TravelHeader,
    TravelFooter,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  // computed: {
  //   cartTotal() {
  //     let sum = 0;
  //     for (const key in this.cartItems) {
  //       sum = sum + this.cartItems[key].price * this.cartItems[key].qty;
  //     }

  //     return sum;
  //   },
  //   cartQty() {
  //     let qty = 0;
  //     for (const key in this.cartItems) {
  //       qty = qty + this.cartItems[key].qty;
  //     }
  //     return qty;
  //   },
  // },

  async created() {
    const response = await axios.get("/api/users/12345/cart");
    const cartItems = response.data;
    this.cartItems = cartItems;
  },
};
</script>
<style lang="scss">
@import "assets/sass/main";
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
    opacity: 1;
  }
  to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
.anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.anim-leave-active {
  animation: going 0.5s;
}
</style>
