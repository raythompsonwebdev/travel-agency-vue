<template>
  <!--wrapper-->
  <div id="wrapper">
    <TravelHeader />
    <TravelNav />
    <router-view v-slot="{ Component }" :key="$route.path">
      <transition name="router-anim">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <div class="clearfix" />
  </div>

  <TravelFooter />
</template>
<script>
import TravelNav from "./components/travel-nav";
import TravelHeader from "./components/travel-header";
import TravelFooter from "./components/travel-footer";

export default {
  name: "App",
  components: {
    TravelNav,
    TravelHeader,
    TravelFooter,
  },
};
</script>
<style lang="scss">
@import "assets/sass/main";
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s;
}
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
  }
  to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
</style>
