<template>
<section class="leftsidebox">
        <h2>Holiday Search</h2>

        
        <form id="search_form">
          <ul>
            <li>
              <label>Where are you going?</label>
              <select name="destination" class="destination1">
                <option value="Antigua">Antigua</option>
                <option value="Belgium">Jamaica</option>
                <option value="United Kingdom">India</option>
                <option value="United Kingdom">United States</option>
                <option value="United Kingdom">United Kingdom</option>
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
                <option value="January">June</option>
                <option value="February">July</option>
                <option value="March">August</option>
                <option value="April">September</option>
                <option value="May">October</option>
                <option value="May">November</option>
                <option value="May">December</option>
              </select>

              <select name="year" class="time_1">
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
              </select>
            </li>

            <li>
              <label>Duration</label>
              <select name="duration" class="destination1">
                <option value="One Day">One Day</option>
                <option value="One Week">One Week</option>
                <option value="One Month">One Month</option>
                <option value="Six Months">Six Months</option>
                <option value="One Year">One Year</option>
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
                <option value="14">1</option>
                <option value="15">2</option>
                <option value="16">3</option>
                <option value>4</option>
                <option value>5</option>
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