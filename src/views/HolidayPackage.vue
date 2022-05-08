<template>
  <div v-if="singleholidaypackage" class="singleholidaypackage">
    <article class="single_item_details">
      <h1>{{ singleholidaypackage.title }}</h1>
      <span class="holidayprice">
        from
        <span class="offerbox-price">{{ singleholidaypackage.price }}</span>
      </span>
      <p>{{ singleholidaypackage.text }}</p>

      <figure>
        <img
          :src="singleholidaypackage.url"
          :alt="singleholidaypackage.title"
        />
        <figcaption>
          <h3>Location : {{ singleholidaypackage.location }}</h3>
          <p>Rating: {{ singleholidaypackage.rating }} Star</p>
        </figcaption>
      </figure>
    </article>
  </div>
  <NotFoundpage v-else />
</template>

<script>
import NotFoundpage from "./NotFoundpage";
import axios from "axios";

export default {
  name: "HolidayPackage",
  title: "Holiday Package Page",
  props: ["itemid"],
  components: {
    NotFoundpage,
  },
  data() {
    return {
      singleholidaypackage: {},
    };
  },
  methods: {
    async initData() {
      const result = await axios.get(
        `/api/holidaypackage/${this.$route.params.itemid}`
      );

      const { data } = result;
      this.singleholidaypackage = data;
    },
  },

  async created() {
    this.$watch(() => this.$route.params.itemid, this.initData());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.singleholidaypackage {
  border: 2px #ededeb solid;
  margin: 2em auto;
  display: block;
  width: 50%;
  padding: 0.5em;
}
/*Holiday details packages page*/
.singleholidaypackage h1 {
  text-align: center;
  display: block;
  line-height: 50px;
  color: #1485c9;
  font-size: 1.4em;
  margin: 0;
}
.single_item_details {
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}
.single_item_details p {
  margin: 0;
  width: 100%;
  line-height: 1.6em;
  font-size: 1em;
  align-self: flex-start;
  text-align: center;
}
span.holidayprice {
  font-size: 1.1em;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #9e9e9e;
}
span.holidayprice .offerbox-price {
  display: inline-block;
  font-weight: bold;
  color: #ff6d00;
}

figure {
  margin: 0;
}
figure img {
  width: 45%;
  display: block;
  margin: 0.5em auto;
}
figcaption {
  width: 100%;
  display: inline-block;
  margin-bottom: 0.5em;
}
figcaption h3 {
  margin: 0;
  width: 100%;
  line-height: 40px;
  font-size: 1em;
  text-align: center;
  color: #1485c9;
}

figcaption p {
  font-size: 0.9em;
  margin: 0;
  line-height: 35px;
  color: #9e9e9e;
  text-transform: capitalize;
}
figcaption button {
  width: 80%;
  text-align: center;
  color: #fff;
  height: auto;
  font-size: 1em;
  text-decoration: none;
  padding: 0;
  margin: 0 auto;
  line-height: 45px;
  border: 1px solid #fff;
  display: block;
}
figcaption button:hover {
  color: #fff;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
</style>
