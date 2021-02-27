<template>
  <div id="app">
    <!--wrapper-->
    <div id="wrapper">
      <Header />
      <NavBar />
      <router-view />
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
  }
  
}
</script>

<style lang='scss'>

@import "assets/main";

</style>
