<template>
  <section class="holiday-search-sidebar">
    <h2 id="holiday-search-title">Holiday Search</h2>
    <form id="holiday-search-form" @submit.prevent="submitForm">
      <label class="label-wide" for="locations">
        Where are you going ?
        <select
          name="locations"
          class="select-wide"
          v-model="formData.location"
        >
          <option
            v-for="(location, index) in options.location"
            :key="index"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </label>

      <label class="label-wide" for="date">
        <span> When are you going ? </span>
        <select name="date" class="select-date-year" v-model="formData.date">
          <option
            v-for="(date, index) in options.date"
            :key="index"
            :value="date"
          >
            {{ date }}
          </option>
        </select>
        <select id="select-month" name="month" v-model="formData.month">
          <option
            v-for="(month, index) in options.month"
            :key="index"
            :value="month"
          >
            {{ month }}
          </option>
        </select>
        <select name="year" class="select-date-year" v-model="formData.year">
          <option
            v-for="(year, index) in options.year"
            :key="index"
            :value="year"
          >
            {{ year }}
          </option>
        </select>
      </label>

      <label class="label-wide" for="duration">
        Duration
        <select name="duration" class="select-wide" v-model="formData.duration">
          <option
            v-for="(duration, index) in options.duration"
            :key="index"
            :value="duration"
          >
            {{ duration }}
          </option>
        </select>
      </label>

      <label class="label-half" for="board">
        Board
        <select name="board" class="select-half" v-model="formData.board">
          <option
            v-for="(board, index) in options.board"
            :key="index"
            :value="board"
          >
            {{ board }}
          </option>
        </select>
      </label>

      <label class="label-half" for="star">
        Star
        <select name="star" class="select-half" v-model="formData.star">
          <option
            v-for="(star, index) in options.star"
            :key="index"
            :value="star"
          >
            {{ star }}
          </option>
        </select>
      </label>

      <label class="label-half" for="adults">
        Adults
        <select name="adults" class="select-half" v-model="formData.adults">
          <option
            v-for="(adult, index) in options.adults"
            :key="index"
            :value="adult"
          >
            {{ adult }}
          </option>
        </select>
      </label>

      <label class="label-half" for="children">
        Children 0-17
        <select name="children" class="select-half" v-model="formData.children">
          <option
            v-for="(child, index) in options.children"
            :key="index"
            :value="child"
          >
            {{ child }}
          </option>
        </select>
      </label>

      <input id="holiday-search-btn" type="submit" value="Find Holiday" />
    </form>
  </section>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      options: {
        location: [
          "Dubai",
          "Taj Mahal",
          "Paris",
          "Hong Kong",
          "London",
          "Toronto",
          "Rome",
          "Madrid",
          "Bangkok",
          "Instanbul",
          "Gold Coast",
          "Singapore",
        ],
        date: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
        ],
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        year: ["2024", "2025", "2026", "2027", "2028"],
        duration: [
          "Day Trip",
          "Two Days",
          "Three Days",
          "Four Days",
          "Five Days",
          "Six Days",
          "One Week",
          "One Month",
          "3 Months",
          "Six Months",
        ],
        board: ["half", "full"],
        star: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
        adults: ["1", "2", "3", "4", "5"],
        children: ["1", "2", "3", "4", "5"],
      },
      formData: {
        location: "",
        date: "",
        month: "",
        year: "",
        duration: "",
        board: "",
        star: "",
        adults: "",
        children: "",
      },
    };
  },

  methods: {
    submitForm() {
      this.$router.push({
        name: "SearchResultsPage",
        query: this.formData,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
