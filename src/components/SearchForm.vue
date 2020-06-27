<template>
  <section class="leftsidebox">
    <h2>Holiday Search</h2>

    <form id="search_form">
      <ul>
        <li>
          <label>Where are you going?</label>
          <select name="destination" class="destination1">
            <option value="Dubai">Dubai</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Paris">Paris</option>
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="London">London</option>
            <option value="Rome">Rome</option>
            <option value="Madrid">Madrid</option>
          </select>
        </li>

        <li class="time">
          <label>When are you going?</label>
          <select name="date" class="time_1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select name="month" id="time_2">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <select name="year" class="time_1">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </li>

        <li>
          <label>Duration</label>
          <select name="duration" class="destination1">
            <option value="Day Trip">Day Trip</option>
            <option value="Seven Days">Two Days</option>
            <option value="Three Days">Three Days</option>
            <option value="Seven Days">Seven Days</option>
            <option value="One Month">One Month</option>
          </select>
        </li>

        <li class="misc_inner">
          <label>Board</label>

          <select name="board" class="misc">
            <option value="Half">Half</option>
            <option value="Full">Full</option>
          </select>
        </li>
        <li class="misc_inner">
          <label>Star</label>
          <select name="star" class="misc">
            <option value="1 Star">1 Star</option>
            <option value="2 Star">2 Star</option>
            <option value="3 Star">3 Star</option>
            <option value="4 Star">4 Star</option>
            <option value="5 Star">5 Star</option>
          </select>
        </li>

        <li class="misc_inner">
          <label>Adults</label>
          <select name="adults" class="misc">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">5</option>
            <option value="5">6</option>
          </select>
        </li>
        <li class="misc_inner">
          <label>Children 0-17</label>
          <select name="children" class="misc">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>
      </ul>
      <input type="submit" value="Find Holiday" id="searchbtn" />
    </form>
  </section>
</template>

<script>
export default {
  name: "SearchForm"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
