<template>
  <section class="leftsidebox">
    <h2>Holiday Search</h2>
    <form id="search_form" @submit.prevent="onSubmit">
      <label class="label_wide" for="locations">
        Where are you going ?
        <select v-model="locations" name="locations" class="select_wide">
          <option
            v-for="location in searchform[0].locations"
            :key="location.id"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </label>

      <label for="date" class="label_wide"
        ><span> When are you going ? </span>
        <select v-model="date" name="date" class="select_date_year">
          <option
            v-for="date in searchform[1].date"
            :key="date.id"
            :value="date"
          >
            {{ date }}
          </option>
        </select>
        <select id="select_month" v-model="month" name="month">
          <option
            v-for="month in searchform[2].month"
            :key="month.id"
            :value="month"
          >
            {{ month }}
          </option>
        </select>
        <select v-model="year" name="year" class="select_date_year">
          <option
            v-for="year in searchform[3].year"
            :key="year.id"
            :value="year"
          >
            {{ year }}
          </option>
        </select>
      </label>

      <label class="label_wide" for="duration">
        Duration

        <select v-model="duration" name="duration" class="select_wide">
          <option
            v-for="duration in searchform[4].duration"
            :key="duration.id"
            :value="duration"
          >
            {{ duration }}
          </option>
        </select>
      </label>

      <label class="label_half" for="board"
        >Board
        <select v-model="board" name="board" class="select_half">
          <option
            v-for="board in searchform[5].board"
            :key="board.id"
            :value="board"
          >
            {{ board }}
          </option>
        </select>
      </label>

      <label class="label_half" for="star"
        >Star
        <select v-model="star" name="star" class="select_half">
          <option
            v-for="star in searchform[6].star"
            :key="star.id"
            :value="star"
          >
            {{ star }}
          </option>
        </select>
      </label>

      <label class="label_half" for="adults"
        >Adults
        <select v-model.number="adults" name="adults" class="select_half">
          <option
            v-for="adult in searchform[7].adults"
            :key="adult.id"
            :value="adult"
          >
            {{ adult }}
          </option>
        </select>
      </label>
      <label class="label_half" for="children"
        >Children 0-17
        <select v-model.number="children" name="children" class="select_half">
          <option
            v-for="child in searchform[8].children"
            :key="child.id"
            :value="child"
          >
            {{ child }}
          </option>
        </select>
      </label>

      <input id="searchbtn" type="submit" value="Find Holiday" />
    </form>
  </section>
</template>

<script>
import { searchform } from "../data-json.json";

export default {
  name: "SearchForm",
  data() {
    return {
      searchform,
      locations: " ",
      date: " ",
      month: " ",
      year: " ",
      duration: " ",
      board: " ",
      star: " ",
      adults: " ",
      children: " ",
    };
  },

  methods: {
    onSubmit() {
      if (
        this.locations &&
        this.date &&
        this.month &&
        this.year &&
        this.duration &&
        this.board &&
        this.star &&
        this.adults &&
        this.children
      ) {
        const findHoliday = {
          locations: this.locations,
          date: this.date,
          month: this.month,
          year: this.year,
          duration: this.duration,
          board: this.board,
          star: this.star,
          adults: this.adults,
          children: this.children,
        };

        console.log(findHoliday);

        this.$emit("review-submitted", findHoliday);

        this.locations = null;
        this.date = null;
        this.month = null;
        this.year = null;
        this.duration = null;
        this.board = null;
        this.star = null;
        this.adults = null;
        this.children = null;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
