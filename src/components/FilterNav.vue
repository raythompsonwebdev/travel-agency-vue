<template>
  <!---leftside2  v-if="leftsideFunction2"-->
  <aside id="leftside2" class="hide" v-if="leftSideFunction">

    <button v-on:click="leftSideFunction" id="side-bar-btn">SIDE</button>

    <br />
    <h1>Filter By Season</h1>
    <ul>
      <li v-for="season in seasons" v-bind:key="season.id">
        <button v-on:click="SearchItemBtn(season.id)" >{{season.title}}</button>
      </li>
    </ul>
    <br />
    <br />
    <h1>Filter By Location</h1>
    <ul>
      <li v-for="location in locations" v-bind:key="location.id">
        <button v-on:click="SearchItemBtn(location.id)" >{{location.title}}</button>
      </li>
    </ul>
    <br />
    <br />
    <h1>Filter By Price</h1>
    <ul>
      <li v-for="price in prices" v-bind:key="price.id">
        <button v-on:click="SearchItemBtn(price.id)" >{{price.title}}</button>
      </li>
    </ul>
    <br />
    <br />
    <h1>Filter By Rating</h1>
    <ul>
      <li v-for="rating in ratings" v-bind:key="rating.id">
        <button v-on:click="SearchItemBtn(rating.id)" >{{rating.title}}</button>
      </li>
    </ul>
    <br />
  </aside>
</template>

<script>

export default {

  name: "FilterNav",
  props: ["seasons","prices","locations","ratings"],

  methods: {

    leftSideFunction: function(event) {

      event.preventDefault();

      var el = document.getElementById("leftside2");

      var box = el.getAttribute("class");

      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },

    SearchItemBtn(item) {
      this.$emit('seasonClick', item)
    }

  },



};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >

</style>
