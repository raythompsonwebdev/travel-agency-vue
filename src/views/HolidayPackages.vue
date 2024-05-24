<template>
  <main id="holiday-packages">
    <FilterNav
      :seasons="filterNavData.seasons"
      :prices="filterNavData.prices"
      :locations="filterNavData.locations"
      :ratings="filterNavData.ratings"
      @seasonClick="itemsSearched"
    />

    <!---main content-->
    <main id="holiday-items">
      <!--HolidayPackage Item component -->
      <transition-group name="fade" tag="div">
        <div v-for="(holidaypackageitem, index) in filteredPacks" :key="index">
          <HolidayPackageItem :holidaypackageitem="holidaypackageitem" />
        </div>
      </transition-group>
    </main>
  </main>
</template>

<script>
import axios from "axios";
import HolidayPackageItem from "@/components/HolidayPackageItem.vue";
import FilterNav from "@/components/FilterNav.vue";

export default {
  name: "HolidayPackages",
  components: {
    FilterNav,
    HolidayPackageItem,
  },
  data() {
    return {
      filterNavData: {
        locations: [
          {
            id: 1,
            title: "london",
          },
          {
            id: 2,
            title: "paris",
          },
          {
            id: 3,
            title: "madrid",
          },
          {
            id: 4,
            title: "rome",
          },
          {
            id: 5,
            title: "dubai",
          },
          {
            id: 6,
            title: "tajmahal",
          },
          {
            id: 7,
            title: "singapore",
          },
          {
            id: 8,
            title: "toronto",
          },
          {
            id: 9,
            title: "goldcoast",
          },
        ],
        prices: [
          {
            id: 1,
            title: "$399 - $499",
          },
          {
            id: 2,
            title: "$499 - $599",
          },
          {
            id: 3,
            title: "$599 - $699",
          },
          {
            id: 4,
            title: "$699 - $999",
          },
          {
            id: 5,
            title: "$999 +",
          },
        ],
        ratings: [
          {
            id: 1,
            title: "one",
          },
          {
            id: 2,
            title: "two",
          },
          {
            id: 3,
            title: "three",
          },
          {
            id: 4,
            title: "four",
          },
          {
            id: 5,
            title: "five",
          },
        ],
        seasons: [
          {
            id: 1,
            title: "winter",
          },
          {
            id: 2,
            title: "summer",
          },
          {
            id: 3,
            title: "spring",
          },
          {
            id: 4,
            title: "autumn",
          },
        ],
      },
      selected: " ",
      holidaypackageitems: [],
      count: 10,
    };
  },
  computed: {
    filteredPacks() {
      if (!this.selected) {
        return this.holidaypackageitems;
      } else if (
        "winter" === this.selected ||
        "summer" === this.selected ||
        "spring" === this.selected ||
        "autumn" === this.selected
      ) {
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.season === this.selected
        );
      } else if (
        "london" === this.selected ||
        "paris" === this.selected ||
        "madrid" === this.selected ||
        "dubai" === this.selected ||
        "rome" === this.selected ||
        "goldcoast" === this.selected ||
        "singapore" === this.selected ||
        "toronto" === this.selected ||
        "tajmahal" === this.selected
      ) {
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.location === this.selected
        );
      } else if (
        "one" === this.selected ||
        "two" === this.selected ||
        "three" === this.selected ||
        "four" === this.selected ||
        "five" === this.selected
      ) {
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.rating === this.selected
        );
      } else if (
        "$399 - $499" === this.selected ||
        "$499 - $599" === this.selected ||
        "$599 - $699" === this.selected ||
        "$699 - $999" === this.selected ||
        "$999 +" === this.selected
      ) {
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.price === this.selected
        );
      } else {
        return this.holidaypackageitems;
      }
    },
  },
  async created() {
    const result = await axios.get("/api/holidaypackages");
    const { data } = result;
    this.holidaypackageitems = data;
  },
  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.7s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.5s;
}
@keyframes coming {
  from {
    transform: translateX(-50px);
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
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
