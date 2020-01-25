<template>
  <div>
    <article class="holiday_details_small" v-bind:key="bestdealitem.id" v-for="bestdealitem in bestdealitem">

      <h1>{{bestdealitem.title}}</h1>

      <span class="holidayprice">
            From
            <span class="offerbox-price">{{bestdealitem.price}}</span>
          </span>
      <figure>
        <img :src="bestdealitem.url" />

        <figcaption>
          
          <p>Location: {{bestdealitem.place}}.</p>
          <p>Available: {{bestdealitem.month}}.</p>
          <button >View Details</button>
        </figcaption>
      </figure>
      
    </article>
  </div>
</template>

<script>
  export default {
    name: "BestDealItem",
    props: ["bestdealitem"]
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>