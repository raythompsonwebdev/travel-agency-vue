<template>
  <div v-if="singleholidaypackage" class="singleholidaypackage">
    <article class="single-item-details">
      <h2 class="single-item-title">{{ singleholidaypackage.title }}</h2>
      <span class="single-item-price">
        from
        <span class="single-item-offer">{{ singleholidaypackage.price }}</span>
      </span>
      <p class="single-item-text">{{ singleholidaypackage.text }}</p>

      <figure class="single-item">
        <img
          class="single-item-img"
          :src="singleholidaypackage.url"
          :alt="singleholidaypackage.title"
        />
        <figcaption class="single-item-caption">
          <h3 class="single-item-location">
            Location : {{ singleholidaypackage.location }}
          </h3>
          <p class="single-item-rating">
            Rating: {{ singleholidaypackage.rating }} Star
          </p>
        </figcaption>
      </figure>
    </article>
  </div>
  <div v-else>
    <NotFoundpage />
  </div>
</template>

<script>
import NotFoundpage from "./NotFoundpage";
import axios from "axios";

export default {
  name: "HolidayPackage",
  title: "Holiday Package Page",
  props: {
    itemid: { type: String, required: true },
  },
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
        `/api/holidaypackage/${parseInt(this.itemid)}`
      );
      const { data } = result;
      this.singleholidaypackage = data;
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

<style lang="scss">
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
