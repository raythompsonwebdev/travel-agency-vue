<template>

     <!---leftside2-->
    <aside id="leftside2" class="hide" v-if="leftsideFunction">
      <br />
      <h1>Filter By Season</h1>
      <ul>
        <li v-for="season in seasons" v-bind:key="season.id">
          <a href v-on:click="filterFunction">{{season.title}}</a>
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
  props:['ratings','locations','seasons','prices'],
  methods: {

    leftsideFunction: function() {

      //console.log(event);

      event.preventDefault();

      var el = document.getElementById("leftside2");

      var box = el.getAttribute("class");

      if (box == "hide") {

        el.setAttribute("class", "show");

      } else {

        el.setAttribute("class", "hide");

      }
    }  



  }
  /**
   * 
   * computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
   */
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>