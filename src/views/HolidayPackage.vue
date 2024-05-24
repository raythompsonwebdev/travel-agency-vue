<template>
  <main id="single-page" key="/best">
    <transition name="fade" tag="div">
      <article v-if="singleholidaypackage" class="single-item">
        <h2 class="single-item-title">{{ singleholidaypackage.title }}</h2>
        <figure class="single-item-figure">
          <img
            class="single-item-img"
            :src="singleholidaypackage.url"
            :alt="singleholidaypackage.title"
          />
          <figcaption class="single-item-caption">
            <h3 class="single-item-location">
              Location : {{ singleholidaypackage.location }}
            </h3>
            <span class="single-item-price">
              from
              <span class="single-item-offer">{{
                singleholidaypackage.price
              }}</span>
            </span>
            <p class="single-item-text">{{ singleholidaypackage.text }}</p>
            <p class="single-item-rating">
              Rating: {{ singleholidaypackage.rating }} Star
            </p>
            <button
              @click="addToCart"
              class="single-item-submit"
              v-if="!itemIsInCart"
            >
              Add to cart
            </button>
            <button class="single-item-added-to-cart" v-if="itemIsInCart">
              Item is already in cart
            </button>
          </figcaption>
        </figure>
      </article>
      <div v-else>
        <NotFoundpage />
      </div>
    </transition>
  </main>
</template>

<script>
import NotFoundpage from "../views/NotFoundpage.vue";
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
      cartItems: [],
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(
        (item) => item?.id === this.$route.params.itemid
      );
    },
  },
  methods: {
    async initData() {
      const result = await axios.get(
        `/api/holidaypackage/${parseInt(this.itemid)}`
      );
      const { data } = result;
      this.singleholidaypackage = data;
    },
    async addToCart() {
      await axios.post("/api/users/12345/cart", {
        id: this.$route.params.itemid,
      });
      this.$router.push({
        name: "CartPage",
        //query: this.formData,
      });
    },
  },
  async created() {
    this.initData();
    const cartResponse = await axios.get("/api/users/12345/cart");
    const cartItems = cartResponse.data;
    this.cartItems = cartItems;
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
