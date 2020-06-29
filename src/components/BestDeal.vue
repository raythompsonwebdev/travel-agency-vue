<template>
<<<<<<< HEAD
	<div class="BestDeal">
		<button id="side-bar-btn" v-on:click="leftsideFunction">SIDE</button>

		<!--Leftside-->
		<aside id="leftside2" class="hide" v-if="leftsideFunction">
			<br>
			<h1>Filter By Season</h1>

			<ul>
				<li>
					<button href="#" class="cat-active" category="prod-cnt">Restart</button>
				</li>
			</ul>

			<ul>
				<li v-for="seasons in season" :key="seasons">
					<button href="#" class v-bind:category="seasons.title">{{seasons.title}}</button>
				</li>
			</ul>
			<br>
			<br>
			<h1>Filter By Location</h1>
			<ul>
				<li v-for="locations in location" :key="locations">
					<button href="#" class v-bind:category="locations.title">{{locations.title}}</button>
				</li>
			</ul>
			<br>
			<br>
			<h1>Filter By Price</h1>
			<ul>
				<li v-for="prices in price" :key="prices">
					<button href="#" class v-bind:category="prices.title">{{prices.title}}</button>
				</li>
			</ul>
			<br>
			<br>
			<h1>Filter By Rating</h1>
			<ul>
				<li v-for="ratings in rating" :key="ratings">
					<button href="#" class v-bind:category="ratings.title">{{ratings.title}}</button>
				</li>
			</ul>
			<br>
		</aside>

		<main id="content2">

			<article class="holiday_details_small" v-for="(holiday,index) in holidays" :key="index">
				<h1>{{holiday.title}}</h1>
				<figure>
					<img :src="holiday.url">

					<figcaption>
						<span class="holidayprice">From
							<span class="offerbox-price">{{holiday.pricesmall}}</span>
						</span>
						<p>Location: {{holiday.place}}.</p>
						<p>Available: {{holiday.month}}.</p>
						<a href>View Details</a>
					</figcaption>
				</figure>
			</article>

			<br>
		</main>

		<div class="clearfix"></div>
	</div>
</template>

<script>

	export default {

		name:"BestDeal",

		methods: {
			leftsideFunction: function () {
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

		name: "BestDeal",

		holidays: [],

		data() {
			return {
				show: "true",

				holidays: [{
						title: "Lorem ipsum dolor sit amet.",
						pricesmall: "$399 - $599",
						url: "./src/assets/images/travel-agency-website-grand-canyon-image.jpg",
						place: "Yellowstone",
						month: "June"
					},
					{
						title: "Lorem ipsum dolor sit amet.",
						pricesmall: "$599 - $899",
						url: "./src/assets/images/travel-agency-website-bangkok-image.jpg",
						place: "Bangkok",
						month: "May"
					},

					{
						title: "Lorem ipsum dolor sit amet.",
						pricesmall: "$899 - $999",
						url: "./src/assets/images/travel-agency-website-eiffel-tower-image.jpg",
						place: "France",
						month: "May"
					}
				],

				season: [{
						title: "Winter"
					},
					{
						title: "Summer"
					},
					{
						title: "Spring"
					},
					{
						title: "Autumn"
					}
				],

				location: [{
						title: "London"
					},
					{
						title: "Paris"
					},
					{
						title: "Madrid"
					},
					{
						title: "Rome"
					},
					{
						title: "Dubai"
					}
				],

				price: [{
						title: "$100 - $500"
					},
					{
						title: "$500 - $1000"
					},
					{
						title: "$1000 - $1500"
					},
					{
						title: "$1500 - $2000"
					},
					{
						title: "$2000 +"
					}
				],

				rating: [{
						title: "1 Star"
					},
					{
						title: "2 Star"
					},
					{
						title: "3 Star"
					},
					{
						title: "4 Star"
					},
					{
						title: "5 Star"
					}
				]
			};
		}

	};
=======

  <div class="BestDeal">

    <FilterNav 
      :seasons="this.filternav.seasons"
      :prices="this.filternav.prices"
      :locations="this.filternav.locations"
      :ratings="this.filternav.ratings"   
      v-on:seasonClick="itemsSearched"
    />

    <main id="content2">
      <!--BestDeal Item component -->
      <div>
        <article 
          class="holiday_details_small"            
          v-for="bestdealitem in filteredPacks"
          v-bind:key="bestdealitem.id"
        >
          <h1>{{bestdealitem.title}}</h1>

          <span class="holidayprice">
                From
                <span class="offerbox-price">{{bestdealitem.price}}</span>
              </span>
          <figure>
             <img :src="bestdealitem.url" :alt="bestdealitem.title" />

            <figcaption>

              <p>Location: {{bestdealitem.location}}.</p>
              <p>Available: {{bestdealitem.month}}.</p>
              <button >View Details</button>
            </figcaption>
          </figure>

        </article>
      </div>

    </main>

    <div class="clearfix"></div>

  </div>
</template>

<script>
import FilterNav from "./FilterNav.vue";
import axios from 'axios';

export default {

  name: "BestDeal",
  components: {    
    FilterNav
  },

mounted() {
    axios.get("./data-json/bestdealitems.json").then(response => (this.data = response.data));
    axios.get("./data-json/filternav.json").then(response => (this.filternav = response.data)); 
},

  data: () => {

    return {
      data:[],
      filternav:[],
      selected: ' ',      
      holiday: [],
      count: 10
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

        return  this.data 

      }else if('winter' === this.selected || 'summer' === this.selected || 'spring' === this.selected || 'autumn' === this.selected ){        

          return  this.data.filter( bestdealitem => bestdealitem.season === this.selected)
        

      }else if('london' === this.selected || 'paris' === this.selected || 'madrid' === this.selected || 'dubai' == this.selected || 'rome' == this.selected ){        

        return this.data.filter( bestdealitem => bestdealitem.location === this.selected)


      }else if('one' === this.selected || 'two' === this.selected || 'three' === this.selected || 'four' == this.selected || 'five' === this.selected){        

        return this.data.filter( bestdealitem => bestdealitem.rating === this.selected)

      }else if('$399 - $499' == this.selected || '$499 - $599' == this.selected || '$599 - $699' == this.selected || '$699 - $999' == this.selected || '$999 +' == this.selected){        

        return this.data.filter( bestdealitem => bestdealitem.price === this.selected)

      }else{ 
        
        return this.data        

      }       
       
    }          
    
  }


};
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
</style>