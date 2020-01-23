<template>
  <!---leftside2  v-if="leftsideFunction2"-->
  <aside id="leftside2" >
    <br />
    <h1>Filter By Season</h1>
    <ul>
      <li v-for="season in seasons" v-bind:key="season.id">
        <a href>{{season.title}}</a>
      </li>
    </ul>
    <br />
    <br />
    <h1>Filter By Location</h1>
    <ul>
      <li v-for="location in locations" v-bind:key="location.id">
        <a href>{{location.title}}</a>
      </li>
    </ul>
    <br />
    <br />
    <h1>Filter By Price</h1>
    <ul>
      <li v-for="price in prices" v-bind:key="price.id">
        <a href>{{price.title}}</a>
      </li>
    </ul>
    <br />
    <br />
    <h1>Filter By Rating</h1>
    <ul>
      <li v-for="rating in ratings" v-bind:key="rating.id">
        <a href>{{rating.title}}</a>
      </li>
    </ul>
    <br />
  </aside>
</template>

<script>
export default {
  
  name: "FilterNav",
  props: ["ratings", "locations", "seasons", "prices"],

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >

</style>