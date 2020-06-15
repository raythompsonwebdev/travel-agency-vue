<template>
	<div class="Services">

	<!---Leftside3-->
	<aside id="leftside3" >

		<figure>
			<figcaption>
				<h1>Lorem ipsum dolor sit amet</h1>
				
				<span>
					<img 
						v-bind:src="'assets/images/travel-agency-website-sidebar-banner-image-label.jpg'" :alt="'travel-agency-website-sidebar-banner-image-label'"
					>
				</span>
				
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				<p> Maxime minima magnam iure libero, laboriosam. Vitae magnam earum, quae</p>
				<p> rillo cupiditate deleniti expedita. Maxime minima magnam iure libero</p>
			</figcaption>

			<img 
				v-bind:src="'assets/images/travel-agency-website-sidebar-banner-image-small.jpg'" :alt="'travel-agency-website-sidebar-banner-image-small'"
			>

		</figure>

	</aside>

	<main id="content2">

		<h1>Lorem ipsum dolor sit amet, consectetur</h1>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<br/>
		<div class="servicebox">
			<h1>Enim odit dolor sequi voluptatem</h1>
			<figure>
				<img 
					class="service-box-img" 
					v-bind:src="'assets/images/travel-agency-website-customer-service-image.jpg'"
					:alt="'travel-agency-website-customer-service-image'" 
				>
				<figcaption>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
				<a :href="'http://www.google.com'" >Learn More</a>
				</figcaption>
			</figure>

		</div>

		<div class="servicebox">
			<h1>Enim odit dolor sequi voluptatem</h1>
			<figure>
				<img 
					class="service-box-img" 
					v-bind:src="'assets/images/travel-agency-website-bus-tours-image.jpg'" 
					:alt="'travel-agency-website-bus-tours-image'"
				>

				<figcaption>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>

				<a :href="'http://www.google.com'" >Learn More</a>
				</figcaption>
			</figure>

		</div>

		<div class="servicebox">
			<h1>Enim odit dolor sequi voluptatem</h1>
			<figure>
			<img 
				class="service-box-img" 
				v-bind:src="'assets/images/travel-agency-website-hotel-room-image.jpg'" 
				:alt="'travel-agency-website-hotel-room-image'"
				
			>
			<figcaption>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
			<a :href="'http://www.google.com'" >Learn More</a>
			</figcaption>
			</figure>

		</div>

		<div class="clearfix"></div>
		<br/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.</p>
		<br/>
	</main>

	<div class="clearfix"></div>

	</div>
</template>

<script>
	export default {
			name: 'Services',
			data(){  
				return{
					show :'true',							
				}	
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>




</style>