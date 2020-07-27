<template>
<<<<<<< HEAD
<div class="HolidayPackages">

  	<button v-on:click="leftsideFunction" id="side-bar-btn">SIDE</button>
=======
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d

  <div class="HolidayPackages">

<<<<<<< HEAD
	<!---leftside2-->
	<aside id="leftside2" class="hide" v-if="leftsideFunction">
		<br/>
		<h1>Filter By Season</h1>
			<ul>
				<li v-for="(data,index) in seasons" :key='index'>
					<button @click="seasonFinder">{{data.season}}</button>
				</li>

			</ul>
			<br/><br/>
		<h1>Filter By Location</h1>
			<ul>
				<li v-for="(data,index) in locations" :key='index'>
				<button @click="locationFinder">{{data.location}}</button>
				</li>

			</ul>
			<br/><br/>
		<h1>Filter By Price</h1>
			<ul>
				<li v-for="(data,index) in prices" :key='index'>
					<button @click="priceFinder">{{data.price}}</button>
				</li>

			</ul>
			<br/><br/>
		<h1>Filter By Rating</h1>
			<ul>
				<li v-for="(data,index) in ratings" :key='index'>
					<button @click="ratingsFinder">{{data.rating}}</button>
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
=======
  <!---leftside2-->

      <FilterNav
        :seasons="this.filternav.seasons"
        :prices="this.filternav.prices"
        :locations="this.filternav.locations"
        :ratings="this.filternav.ratings"   
        v-on:seasonClick="itemsSearched"
      />

    <!---main content-->
    <main id="content2">
       
      <!--HolidayPackage Item component -->           
      <article>
        <transition-group name="fade" tag="div" >
        <div
          class="holiday_details"
          v-for="holidaypackageitem in filteredPacks"
          v-bind:key="holidaypackageitem.id"          
        >
          <h1>{{holidaypackageitem.title}}</h1>
          <span class="holidayprice">
            from
            <span class="offerbox-price">{{holidaypackageitem.price}}</span>
          </span>
          <figure>
            <img :src="holidaypackageitem.url" :alt="holidaypackageitem.title"/>
            <figcaption>
              <p>Location : {{holidaypackageitem.location}}</p>
              <p>{{holidaypackageitem.text}}</p>
              <button>View Details</button>
            </figcaption>
          </figure>
        </div>
        </transition-group>
      </article>
      
    </main>

    <div class="clearfix"></div>
  </div>
</template>
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d

<script>

<<<<<<< HEAD
		</article>
=======
import FilterNav from "./FilterNav.vue";
import axios from 'axios';
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d

export default {

<<<<<<< HEAD
	</main>

	<div class="clearfix"></div>
=======
  name: "HolidayPackages",

  components: {    
    FilterNav
  },
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d

  mounted() {
    axios.get("./data-json/holidaypackageitems.json").then(response => (this.holidaypackageitems = response.data));
    axios.get("./data-json/filternav.json").then(response => (this.filternav = response.data)); 
  },

<<<<<<< HEAD
<script>
	export default {

		methods: {

			leftsideFunction: function() {

				// console.log(event);

				event.preventDefault();

				var el = document.getElementById("leftside2");

				var box = el.getAttribute("class");

				if (box == "hide") {

				el.setAttribute("class", "show");

				} else {
				el.setAttribute("class", "hide");

				}
			},

			seasonFinder: function() {
				
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
=======
  data: () => {

    return {
      selected: ' ',
      holidaypackageitems: [],
      filternav: [],  
      holiday: [],
      count: 10,
      

    };
  },

  methods : {

      itemsSearched: function (id) {

        this.selected = id  

      }
      
  },

  computed: {

    filteredPacks: function(){                    
      
      if(!this.selected){

         return this.holidaypackageitems

      }else if('winter' === this.selected || 'summer' === this.selected || 'spring' === this.selected || 'autumn' === this.selected ){        

          return  this.holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.season === this.selected)
        

      }else if('london' === this.selected || 'paris' === this.selected || 'madrid' === this.selected || 'dubai' == this.selected || 'rome' == this.selected ){        

        return this.holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.location == this.selected)


      }else if('one' === this.selected || 'two' === this.selected || 'three' === this.selected || 'four' == this.selected || 'five' === this.selected){        

        return this.holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.rating === this.selected)

      }else if('$399 - $499' == this.selected || '$499 - $599' == this.selected || '$599 - $699' == this.selected || '$699 - $999' == this.selected || '$999 +' == this.selected){        

        return this.holidaypackageitems.filter( holidaypackageitem => holidaypackageitem.price === this.selected)

      }else{ 
        
        return this.holidaypackageitems        

      }        
       
    }          
    
  }  

};
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >

<<<<<<< HEAD
=======
  .fade-enter-active {
      animation: coming 1s;
      animation-delay: 1s;
      opacity: 0;
  }

  .fade-leave-active {
      animation: going 1s;
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


>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
</style>
