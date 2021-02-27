<template>
  <!--header-->
  <header>
    <!---logo-->
    <figure id="logo">
      <img :src="'../assets/images/travel-agency-website-logo.png'">
    </figure>    
    <!---contact number-->
    <aside class="contact">
      <span class="tele">
        <img :src="`${phoneImg}`">
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
  data: () => {
    return {
      phoneNumber: "0208-365-1452",
      openTime: "Everyday 8am - 9pm",
      phoneImg : "assets/images/Telephone.png"      
    };
  },
}
</script>