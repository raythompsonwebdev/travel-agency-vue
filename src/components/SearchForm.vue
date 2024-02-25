<template>
  <section class="holiday-search-sidebar">
    <h2 id="holiday-search-title">Holiday Search</h2>
    <form id="holiday-search-form">
      <label class="label-wide" for="locations">
        Where are you going ?
        <select name="locations" class="select-wide">
          <option
            v-for="location in searchformdata.locations"
            :key="location.id"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </label>

      <label for="date" class="label-wide"
        ><span> When are you going ? </span>
        <select name="date" class="select-date-year">
          <option
            v-for="date in searchformdata.date"
            :key="date.id"
            :value="date"
          >
            {{ date }}
          </option>
        </select>
        <select id="select-month" name="month">
          <option
            v-for="month in searchformdata.month"
            :key="month.id"
            :value="month"
          >
            {{ month }}
          </option>
        </select>
        <select name="year" class="select-date-year">
          <option
            v-for="year in searchformdata.year"
            :key="year.id"
            :value="year"
          >
            {{ year }}
          </option>
        </select>
      </label>

      <label class="label-wide" for="duration">
        Duration

        <select name="duration" class="select-wide">
          <option
            v-for="duration in searchformdata.duration"
            :key="duration.id"
            :value="duration"
          >
            {{ duration }}
          </option>
        </select>
      </label>

      <label class="label-half" for="board"
        >Board
        <select name="board" class="select-half">
          <option
            v-for="board in searchformdata.board"
            :key="board.id"
            :value="board"
          >
            {{ board }}
          </option>
        </select>
      </label>

      <label class="label-half" for="star"
        >Star
        <select name="star" class="select-half">
          <option
            v-for="star in searchformdata.star"
            :key="star.id"
            :value="star"
          >
            {{ star }}
          </option>
        </select>
      </label>

      <label class="label-half" for="adults"
        >Adults
        <select name="adults" class="select-half">
          <option
            v-for="adult in searchformdata.adults"
            :key="adult.id"
            :value="adult"
          >
            {{ adult }}
          </option>
        </select>
      </label>
      <label class="label-half" for="children"
        >Children 0-17
        <select name="children" class="select-half">
          <option
            v-for="child in searchformdata.children"
            :key="child.id"
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
  props: {
    searchformdata: {
      type: Object,
      default: null,
    },
  },
  // data() {
  //   return {
  //     searchform,
  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
