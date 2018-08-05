<template>
<div class="BestDeal">
  <button id="side-bar-btn" v-on:click="leftsideFunction">SIDE</button>

  <!--Leftside-->

  <aside id="leftside2" class="hide" v-if="leftsideFunction">
    <br/>
    <h1>Filter By Season</h1>
    <ul>
      <li v-for="seasons in season" :key="seasons"><a href="#">{{seasons.title}}</a></li>

    </ul>
    <br/><br/>
    <h1>Filter By Location</h1>
    <ul>
      <li v-for="locations in location" :key="locations"><a href="#">{{locations.title}}</a></li>

    </ul>
    <br/><br/>
    <h1>Filter By Price</h1>
    <ul>
      <li v-for="prices in price" :key="prices"><a href="#">{{prices.title}}</a></li>

    </ul>
    <br/><br/>
    <h1>Filter By Rating</h1>
    <ul>
      <li v-for="ratings in rating" :key="ratings"><a href="#">{{ratings.title}}</a></li>

    </ul>
    <br/>
  </aside>


  <main id="content2">

    <article class="holiday_details_small" v-for="(holiday,index) in holidays" :key='index'>

      <h1>{{holiday.title}}</h1>
      <figure>

        <img :src="holiday.url" />

        <figcaption>
          <span class="holidayprice">From <span class="offerbox-price">{{holiday.pricesmall}}</span></span>
          <p>Location: {{holiday.place}}.</p>
          <p> Available: {{holiday.month}}.</p>
          <a href="">View Details</a>
        </figcaption>

      </figure>

    </article>

    <br/>

  </main>

  <div class="clearfix"></div>
</div>
</template>

<script>
export default {

  

  methods: {

    leftsideFunction: function() {

      //console.log(event);

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

  name: 'BestDeal',

  holidays : [],

  data() {

    return {

      show: 'true',
     
      
      holidays: [

        {
          title: 'Lorem ipsum dolor sit amet.', 
          pricesmall: '$399 - $599',
          url: './src/assets/images/travel-agency-website-grand-canyon-image.jpg' ,
          place: 'Yellowstone',
          month: 'June',
        },
        {
          title: 'Lorem ipsum dolor sit amet.', 
          pricesmall: '$599 - $899',
          url: './src/assets/images/travel-agency-website-bangkok-image.jpg' ,
          place: 'Bangkok',
          month: 'May',
        },

        {
          title: 'Lorem ipsum dolor sit amet.', 
          pricesmall: '$899 - $999',
          url: './src/assets/images/travel-agency-website-eiffel-tower-image.jpg' ,
          place: 'France',
          month: 'May',
        }


      ],

      season: [

        {
          title: 'Winter'
        },
        {
          title: 'Summer'
        },
        {
          title: 'Spring'
        },
        {
          title: 'Autumn'
        }

      ],

      location: [

        {
          title: 'London'
        },
        {
          title: 'Paris'
        },
        {
          title: 'Madrid'
        },
        {
          title: 'Rome'
        },
        {
          title: 'Dubai'
        }

      ],

      price: [

        {
          title: '$100 - $500'
        },
        {
          title: '$500 - $1000'
        },
        {
          title: '$1000 - $1500'
        },
        {
          title: '$1500 - $2000'
        },
        {
          title: '$2000 +'
        }

      ],

      rating: [

        {
          title: '1 Star'
        },
        {
          title: '2 Star'
        },
        {
          title: '3 Star'
        },
        {
          title: '4 Star'
        },
        {
          title: '5 Star'
        }

      ],
            
    }

  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">



</style>
