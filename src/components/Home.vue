<template>
	<div class="Home page">

		<button id="side-bar-btn" v-on:click="leftSideFunction">SIDE</button>
		<!--Leftside-->
		<aside id="leftside" class="hide" v-if="leftSideFunction">

			<!---Search form-->
			<section class="leftsidebox">

			<h2>Holiday Search</h2>

			<form id="search_form" >

				<ul>
				<li>
					<label for="searchdestination">Where are you going?</label>

					<select v-model="searchDestination" name="searchdestination" class="destination1">
					
					<option v-for="(searchDestinations,index) in searchDestination" :key='index' >{{searchDestinations}}</option>

							</select>
					
				</li>

				<li class="time">
					<label>When are you going?</label>

					<select v-model="searchday" name="date" class="time_1">
					
					<option v-for="(searchday,index) in searchday" :key='index'>{{searchday}}</option>
					</select>

					<select v-model="searchmonth" name="month" id="time_2">
				
					<option v-for="(searchmonth,index) in searchmonth" :key='index'>{{searchmonth}}</option>
					</select>

					<select v-model="searchyear" name="year" class="time_1">
					<option v-for="(searchyear,index) in searchyear" :key='index'>{{searchyear}}</option>
					
					</select>

				</li>

				<li>
					<label> Duration</label>
					<select v-model="searchduration" name="duration" class="destination1">
					<option disabled value="">Please select one</option>
					<option v-for="(searchduration,index) in searchduration" :key='index'>{{searchduration}}</option>
							</select>
				</li>

				<li class="misc_inner">
					<label> Board</label>
					<select v-model="searchboard" name="board" class="misc">
					<option v-for="(searchboard,index) in searchboard" :key='index'>{{searchboard}}</option>
					</select>
				</li>

				<li class="misc_inner">
					<label> Stars</label>
					<select v-model="searchstar" name="stars" class="misc">
					<option v-for="(searchstar,index) in searchstar" :key='index'>{{searchstar}}</option>
							</select>
				</li>

				<li class="misc_inner">
					<label>Adults</label>
					<select v-model="searchadult" name="adults" class="misc">
					<option v-for="(searchadult,index) in searchadult" :key='index'>{{searchadult}}</option>
							</select>
				</li>
				<li class="misc_inner">
					<label>Children 0-17</label>
					<select v-model="searchchildren" name="children" class="misc">
					<option v-for="(searchchildren,index) in searchchildren" :key='index'>{{searchchildren}}</option>
					</select>
				</li>
				</ul>

				<input type="submit" value="Find Holiday" id="searchbtn">

			</form>

			</section>

			<!--Destinations-->
			<section class="leftsidebox">

			<h2>Top Destinations</h2>

			<div class="destinations" v-for="(holidayspot,index) in holidayspots" :key='index' >
				<figure>
				<img v-bind:src="holidayspot.url">

				<figcaption>
					<h3>{{holidayspot.title}}</h3>
					<p>{{holidayspot.country}}</p>
					<p>{{holidayspot.hotels}}</p>
				</figcaption>

				</figure>
			</div>
			
			<a href="">View All</a>

			</section>

			<br/><br/><br/>

		</aside>

		<main id="content">

			<figure id="banner">
				<img src='src/assets/images/travel-agency-website-banner-image.jpg'>
			</figure>

			<section id="offers">

				<h2>Featured Holiday Package</h2>

				<div class="offerbox">
					<figure>
					<img src='src/assets/images/travel-agency-website-spanish-villa-image.jpg'>

					<figcaption>
						<p>Lorem Ipsum Dolen sit.</p>
						<p>from only <span class="offerbox-price">&pound;339</span> per person</p>
					</figcaption>

					</figure>
				</div>
				<div class="offerbox">
					<figure>
					<img src='src/assets/images/travel-agency-website-taj-mahal-image.jpg'>
					<figcaption>
						<p>Lorem Ipsum Dolen sit.</p>
						<p>from only <span class="offerbox-price">&pound;339</span> per person</p>
					</figcaption>
					</figure>
				</div>
				<div class="offerbox">
					<figure>
					<img src='src/assets/images/travel-agency-website-gold-coast-image.jpg'>
					<figcaption>
						<p>Lorem Ipsum Dolen sit.</p>
						<p>from only <span class="offerbox-price">&pound;339</span> per person</p>
					</figcaption>
					</figure>

					<div class="clearfix"></div>
				</div>
				<div class="offerbox">
					<figure>
					<img src='src/assets/images/travel-agency-website-dubai-image.jpg'>

					<figcaption>
						<p>Lorem Ipsum Dolen sit.</p>
						<p>from only <span class="offerbox-price">&pound;339</span> per person</p>
					</figcaption>
					</figure>
				</div>
				<div class="offerbox">
					<figure>
					<img src='src/assets/images/travel-agency-website-singapore-image.jpg'>
					<figcaption>
						<p>Lorem Ipsum Dolen sit.</p>
						<p>from only <span class="offerbox-price">&pound;339</span> per person</p>
					</figcaption>
					</figure>
				</div>
				<div class="offerbox">
					<figure>
					<img src='src/assets/images/travel-agency-website-toronto-image.jpg'>


					<figcaption>
						<p>Lorem Ipsum Dolen sit.</p>
						<p>from only <span class="offerbox-price">&pound;339</span> per person</p>
					</figcaption>
					</figure>
				</div>

				<div class="clearfix"></div>

			</section>

		</main>

		<div class="clearfix"></div>
	</div>
</template>

<!--scripting-->
<script>
	export default {

		methods: {

			leftSideFunction: function() {

			console.log(event);

			event.preventDefault();

			var el = document.getElementById("leftside");

			var box = el.getAttribute("class");

			if (box == "hide") {

				el.setAttribute("class", "show");

			} else {
				el.setAttribute("class", "hide");

			}
			}

		},

		name: 'Home',
		

		data() {

			return {

			show: 'true',
									
			searchDestination: [
				'Istanbul', 
				'HongKong', 
				'Paris', 
				'Bangkok', 
				'London', 
				'Dubai', 
				'Sydney'
			],

			searchday: [
				1,
				2, 
				3,
				4, 
				5, 
				6,  
				7, 
				8,
				9, 
				10, 
				11, 
				12, 
				13, 
				14,
				15, 
				16, 
				17, 
				18, 
				19, 
				20,
				21,  
				22,  
				23,  
				24, 
				25,  
				26,  
				27, 
				28, 
				29,  
				30,  
				31,
			],

			searchmonth:[
				'January',
				'February',
				'March',
				'April',
				'May',
				'June', 
				'July',
				'August',
				'September',
				'October', 
				'November',
				'December'
			],

			searchyear:[
				2018, 
				2019, 
				2020, 
				2021, 
				2022
			],

			searchduration:[
				'Day Trip', 
				'Weekend',
				'One Week',
				'Two Weeks',
				'Three Weeks',
				'One Month', 
				'Three Months',
				'Six Months'
			],

			searchboard:[
				'Half',
				'Full'
			],

			searchstar:[
				'1 Star',
				'2 Star',
				'3 Star',
				'4 Star', 
				'5 Star'
			],

			searchadult:[
				'1',
				'2', 
				'3',
				'4', 
				'5', 
				'6'
			],

			searchchildren:[
				'1',
				'2', 
				'3',
				'4', 
				'5', 
				'6'
			],

			holidayspots:[
					
				{
					url :"src/assets/images/travel-agency-website-eiffel-tower-image.jpg",
					title : 'Paris',
					country : 'France',
					hotels : '1,399 Hotels'
				},
				{
					url :"src/assets/images/travel-agency-website-tower-of-london-image.jpg",
					title : 'London',
					country : 'England',
					hotels : '1,912 Hotels'
				},
				{
					url :"src/assets/images/travel-agency-website-bangkok-image.jpg",
					title : 'Bangkok',
					country : 'Thailand',
					hotels : '1,542 Hotels'
				},
				{
					url :"src/assets/images/travel-agency-website-istanbul-image.jpg",
					title : 'Istanbul',
					country : 'Turkey',
					hotels : '504 Hotels'
				},
				{
					url :"src/assets/images/travel-agency-website-hong-kong-image.jpg",
					title : 'Hong Kong',
					country : 'China',
					hotels : '504 Hotels'
				},

			]

			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
</style>
