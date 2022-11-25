<template>
  <transition name="fade" tag="div">
    <div v-if="singlebestdeal" class="singlebestdeal" key="/best">
      <article class="single_item_details">
        <h1>{{ singlebestdeal.title }}</h1>
        <span class="holidayprice">
          from
          <span class="offerbox-price">{{ singlebestdeal.price }}</span>
        </span>
        <p>{{ singlebestdeal.text }}</p>

        <figure>
          <img :src="singlebestdeal.url" :alt="singlebestdeal.title" />
          <figcaption>
            <h3>Location : {{ singlebestdeal.location }}</h3>
            <p>Rating: {{ singlebestdeal.rating }} Star</p>
          </figcaption>
        </figure>
      </article>
    </div>
    <NotFoundpage v-else />
  </transition>
</template>

<script>
import NotFoundpage from "./NotFoundpage";
import axios from "axios";

export default {
  name: "BestDeal",
  props: {
    itemid: { type: String, required: true },
  },
  components: {
    NotFoundpage,
  },
  data() {
    return {
      singlebestdeal: {},
    };
  },
  methods: {
    async initData() {
      const result = await axios.get(`/api/bestdeal/${parseInt(this.itemid)}`);
      const { data } = result;
      this.singlebestdeal = data;
    },
  },
  created() {
    this.initData();
  },

  beforeRouteUpdate(to, from, next) {
    this.initData();
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.fade-leave-active {
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
.singlebestdeal {
  border: 2px #ededeb solid;
  margin: 2em auto;
  display: block;
  width: 90%;
  padding: 0.5em;
}
/*Holiday details packages page*/
.singlebestdeal h1 {
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
  width: auto;
  display: block;
  margin: 0.5em auto;
}
figcaption {
  width: 100%;
  display: inline-block;
  margin-bottom: 0.5em;
}
figcaption > h3 {
  margin: 0;
  width: 100%;
  line-height: 40px;
  font-size: 1em;
  text-align: center;
  color: #1485c9;
}

figcaption > p {
  font-size: 0.9em;
  margin: 0;
  line-height: 35px;
  color: #9e9e9e;
  text-transform: capitalize;
}
figcaption > button {
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
figcaption > button:hover {
  color: #fff;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
</style>
