<template>
  <!--header-->
  <header>
    <!---logo-->
    <figure id="logo">
      <img
        :src="image"
        :alt="'website logo'"
      >
      <h1><span>Travel</span><span>AGENCY</span></h1>
    </figure>
    <!---contact number-->
    <aside class="contact">
      <span class="tele">
        <img
          :src="`${phoneImg}`"
          :alt="'image of phone'"
        >
        <a
          id="contact-number"
          :href="`tel:${phoneNumber}`"
        >
          {{ phoneNumber }}
        </a>
      </span>
      <span id="opening-time">{{ openTime }}</span>
    </aside>
  </header>
</template>

<script>
export default {
  name:'Header',
  data () {
    return {
      phoneNumber: "0208-365-1452",
      openTime: "Everyday 8am - 9pm",
      phoneImg : "assets/images/Telephone.png",
      image: require('@/assets/images/travel-agency-website-logo-copy.png')
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
</style>
