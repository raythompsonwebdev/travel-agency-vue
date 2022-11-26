<template>
  <div>
    <ResultList :products="searchResult" />
  </div>
</template>

<script>
//import { cartItems } from "./fake-data";
import axios from "axios";
import ResultList from "@/components/ResultList.vue";
export default {
  name: "ResultPage",
  props: ["results"],
  components: {
    ResultList,
  },
  data() {
    return {
      title: "Result page",
      cartItems: {},
      searchQuery: " ",
    };
  },

  computed: {
    searchResult() {
      if (this.cartItems) {
        return this.cartItems.filter((item) => item);
      } else {
        return this.cartItems;
      }
    },
  },

  async created() {
    const result = await axios.get("/api/bestdeals");
    const { data } = result;
    this.cartItems = data;
  },

  methods: {
    itemsSearched(id) {
      this.product = id;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
