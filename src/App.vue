<template>
  <div id="app">
    <!--wrapper-->
    <div id="wrapper">
      <Header />
      <NavBar />
      <transition name="router-anim">
        <router-view />
      </transition>
      <div class="clearfix" />
    </div>
  
    <Footer />
  </div>
</template>
<script>
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components:{
    NavBar,
    Header,
    Footer
  },
  
  
}
</script>

<style lang='scss'>

@import "assets/main";
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
