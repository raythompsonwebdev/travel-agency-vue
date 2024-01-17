<template>
  <transition name="fade" tag="div">
    <div v-if="singlebestdeal" class="singlebestdeal" key="/best">
      <article class="single-best-details">
        <h1 class="single-best-title">{{ singlebestdeal.title }}</h1>
        <span class="single-best-price">
          from
          <span class="single-best-offer">{{ singlebestdeal.price }}</span>
        </span>
        <p class="single-best-txt">{{ singlebestdeal.text }}</p>

        <figure class="single-best-item">
          <img
            :src="singlebestdeal.url"
            :alt="singlebestdeal.title"
            class="single-best-img"
          />
          <figcaption class="single-best-caption">
            <h3 class="single-best-location">
              Location : {{ singlebestdeal.location }}
            </h3>
            <p class="single-best-rating">
              Rating: {{ singlebestdeal.rating }} Star
            </p>
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

<style lang="scss" scoped>
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
</style>
