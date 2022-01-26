<template>
  <section class="leftsidebox">
    <h2>Holiday Search</h2>

    <form
      id="search_form"
      @submit.prevent="onSubmit"
    >
      <label
        class="label_wide"
        for="locations"
      >
        Where are you going ?                 
        <select 
          v-model="locations"
          name="locations"
          class="select_wide"
        >
          <option value="Dubai">
            Dubai
          </option>
          <option value="Jamaica">
            Jamaica
          </option> 
          <option value="Paris">
            Paris
          </option>
          <option value="Spain">
            Spain
          </option>
          <option value="France">
            France
          </option>
          <option value="London">
            London
          </option>
          <option value="Rome">
            Rome
          </option>
          <option value="Madrid">
            Madrid
          </option>
        </select>
      </label> 



      <label
        for="date"
        class="label_wide"
      ><span> When are you going ? </span>                
        <select
          v-model="date"
          name="date"
          class="select_date_year"
        >
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
        </select>    
     
        <select
          id="select_month"
          v-model="month"
          name="month"
        >
          <option value="January">
            January
          </option>
          <option value="February">
            February
          </option>
          <option value="March">
            March
          </option>
          <option value="April">
            April
          </option>
          <option value="May">
            May
          </option>
          <option value="June">
            June
          </option>
          <option value="July">
            July
          </option>
          <option value="August">
            August
          </option>
          <option value="September">
            September
          </option>
          <option value="October">
            October
          </option>
          <option value="November">
            November
          </option>
          <option value="December">
            December
          </option>
        </select>
        <select
          v-model="year"
          name="year"
          class="select_date_year"
        >
          <option value="2020">
            2020
          </option>
          <option value="2021">
            2021
          </option>
          <option value="2022">
            2022
          </option>
        </select>
      </label>



      <label
        class="label_wide"
        for="duration"
      >
        Duration
 
        <select
          v-model="duration"
          name="duration"
          class="select_wide"
        >
          <option value="Day Trip">
            Day Trip
          </option>
          <option value="Seven Days">
            Two Days
          </option>
          <option value="Three Days">
            Three Days
          </option>
          <option value="Seven Days">
            Seven Days
          </option>
          <option value="One Month">
            One Month
          </option>
        </select>
      </label>


      <label
        class="label_half"
        for="board"
      >Board
        <select
          v-model="board"
          name="board"
          class="select_half"            
        >
          <option value="Half">
            Half
          </option>
          <option value="Full">
            Full
          </option>
        </select>
      </label>

      <label
        class="label_half"
        for="star"
      >Star
        <select
          v-model="star"
          name="star"
          class="select_half"
        >
          <option value="1 Star">
            1 Star
          </option>
          <option value="2 Star">
            2 Star
          </option>
          <option value="3 Star">
            3 Star
          </option>
          <option value="4 Star">
            4 Star
          </option>
          <option value="5 Star">
            5 Star
          </option>
        </select>
      </label>


      <label
        class="label_half"
        for="adults"
      >Adults
        <select
          v-model="adults"
          name="adults" 
          class="select_half"           
        >
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            5
          </option>
          <option value="5">
            6
          </option>
        </select>
      </label>
      <label
        class="label_half"
        for="children"
      >Children 0-17
        <select
          v-model="children"
          name="children"
          class="select_half"
        >
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
        </select>
      </label>


      <input
        id="searchbtn"
        type="submit"
        value="Find Holiday"
      >
    </form>
  </section>
</template>

<script>
export default {
  name: "SearchForm",  

  data: () => {

    return {

      destinations:' ',
      locations:' ',
      date:' ',
      month:' ',
      year:' ',
      duration:' ',
      board:' ',
      star:' ',
      adults:' ',
      children:' '

    }


  },

  methods: {

    onSubmit() {

      if(this.destinations && this.locations && this.date && this.month && this.year && this.duration && this.board && this.star && this.adults && this.children ){

        let findHoliday = {

          destinations: this.destinations,
          locations: this.locations,
          date: this.date,
          month:this.month,
          year:this.year,
          duration:this.duration,
          board:this.board,
          star:this.star,
          adults:this.adults,
          children:this.children

        }
        
        this.$emit('review-submitted', findHoliday)

        this.destinations = null
        this.locations = null
        this.date = null
        this.month = null
        this.year = null
        this.duration = null
        this.board = null
        this.star = null
        this.adults = null
        this.children = null

      }
    }

    
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
