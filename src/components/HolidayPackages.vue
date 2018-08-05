<template>
<div class="HolidayPackages">

  <button v-on:click="leftsideFunction" id="side-bar-btn">SIDE</button>


  <!---leftside2-->
  <aside id="leftside2" class="hide" v-if="leftsideFunction">
    <br/>
    <h1>Filter By Season</h1>
    <ul>
      <li v-for="(data,index) in seasons" :key='index'>
        <a href="">{{data.season}}</a>
      </li>

    </ul>
    <br/>
    <br/>
    <h1>Filter By Location</h1>
    <ul>
      <li v-for="(data,index) in locations" :key='index'>
        <a href="">{{data.location}}</a>
        </li>

    </ul>
    <br/>
    <br/>
    <h1>Filter By Price</h1>
    <ul>
      <li v-for="(data,index) in prices" :key='index'>
        <a href="">{{data.price}}</a>
      </li>

    </ul>
    <br/>
    <br/>
    <h1>Filter By Rating</h1>
    <ul>
      <li v-for="(data,index) in ratings" :key='index'>
        <a href="">{{data.rating}}</a>
      </li>

    </ul>
    <br/>
  </aside>

  <!---main content-->
  <main id="content2">

    <article class="holiday_details" v-for="(holiday,index) in holidays" :key='index'>

      <h1>{{holiday.title}}</h1>
      <span class="holidayprice">from <span class="offerbox-price">{{holiday.pricesmall}}</span></span>

      <figure>
        <img v-bind:src="holiday.url" />
        <figcaption>
          <p>Location : {{holiday.place}}</p>
          <p>Available: {{holiday.month}}</p>
          <a href="">View Details</a>

        </figcaption>

      </figure>


    </article>


  </main>

  <div class="clearfix"></div>

</div>
</template>

<script>
export default {

  methods: {

    leftsideFunction: function() {

      console.log(event);

      event.preventDefault();

      var el = document.getElementById("leftside2");

      var box = el.getAttribute("class");

      if (box == "hide") {

        el.setAttribute("class", "show");

      } else {
        el.setAttribute("class", "hide");

      }
    }

  },

  name: 'HolidayPackages',
  holidays : [],

  data() {

    return {

      show: 'true',

      holidays : [

        {
          title: 'Lorem ipsum dolor sit amet.', 
          pricesmall: '$399 - $599',
          url: './src/assets/images/travel-agency-website-grand-canyon-image.jpg' ,
          place: 'Yellowstone',
          month: 'June',
        },
        {
          title: 'Lorem ipsum dolor sit amet.', 
          pricesmall: '$599 - $599',
          url: './src/assets/images/travel-agency-website-grand-canyon-image.jpg' ,
          place: 'Washington',
          month: 'May',
        }

      ],
           
      seasons: [

        {
          "season": "Winter"
        },
        {
          "season": "Summer"
        },
        {
          "season": "Spring"
        },
        {
          "season": "Autumn"
        }

      ],

      locations: [

        {
          "location": 'London'
        },
        {
          "location": 'Paris'
        },
        {
          "location": 'Madrid'
        },
        {
          "location": 'Rome'
        },
        {
          "location": 'Dubai'
        }

      ],

      prices: [

        {
          "price": '$100 - $500'
        },
        {
          "price": '$500 - $1000'
        },
        {
          "price": '$1000 - $1500'
        },
        {
          "price": '$1500 - $2000'
        },
        {
          "price": '$2000 +'
        }

      ],

      ratings: [

        {
          "rating": '1 Star'
        },
        {
          "rating": '2 Star'
        },
        {
          "rating": '3 Star'
        },
        {
          "rating": '4 Star'
        },
        {
          "rating": '5 Star'
        }

      ],

      holiday: [],

      count: 10

      
    }

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >




</style>
