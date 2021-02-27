<template>
  <div v-if="holidaypackageitem">
    <div class="HolidayPackages">
      <!---main content-->
      <main id="holiday-items">
        <h1>Holiday Packages</h1>
      </main>
    </div>
  </div>
  <NotFoundpage v-else />
</template>

<script>

import { holidaypackageitems } from '../data-json.js';
import NotFoundpage from '../views/NotFoundpage'

export default {
  name: "HolidayPackagesItem",
  components: {
    NotFoundpage
  },
  data(){
    return{      
      holidaypackageitem: holidaypackageitems.filter( element => element.id == this.$route.params.id ),
    }
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
 
</style>
