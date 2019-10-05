<template>

  <div class="HolidayPackages">
    

    <!---leftside2-->
    <FilterNav 
      v-bind:seasons="seasons"
      v-bind:locations="locations" 
      v-bind:prices="prices"
      v-bind:ratings="ratings" 
       
    />

    <!---main content-->
    <main id="content2">
      <HolidayPackageItem v-bind:holidaypackageitem="holidaypackageitem" />
    </main>

    <div class="clearfix"></div>

  </div>
</template>

<script>
import FilterNav from "./FilterNav.vue";
import HolidayPackageItem from "./HolidayPackageItem.vue";

export default {
  
  name: "HolidayPackages",

  

  components: {
    HolidayPackageItem,
    FilterNav
  },

  data() {
    return {
      show: "true",

      holidaypackageitem: [
        
        {
          id: 1,

          url: "assets/images/page2grandcanyon_03.jpg",

          title: "Lorem ipsum dolor sit amet.",

          price: "$399 - $599",

          place: "Yellowstone",

          month: "June",

          season: "summer",

          location: "america",

          rating: "2 Star",




        },
        {
          id: 2,

          url: "assets/images/page2grandcanyon_03.jpg",

          title: "Lorem ipsum dolor sit amet.",

          price: "$399 - $599",

          place: "Yellowstone",

          month: "June",

          season: "summer",

          location: "america",

          rating: "4 Star",
        }
      ],
          
      seasons: [

        {
          id:1,
          title: 'Winter'
        },
        {
          id:2,
          title: 'Summer'
        },
        {
          id:3,
          title: 'Spring'
        },
        {
          id:4,
          title: 'Autumn'
        }

      ],

      locations: [

        {
          id:1,
          title: 'London'
        },
        {
          id:2,
          title: 'Paris'
        },
        {
          id:3,
          title: 'Madrid'
        },
        {
          id:4,
          title: 'Rome'
        },
        {
          id:5,
          title: 'Dubai'
        }

      ],

      prices: [

        {
          id:1,
          title: '$100 - $500'
        },
        {
          id:2,
          title: '$500 - $1000'
        },
        {
          id:3,
          title: '$1000 - $1500'
        },
        {
          id:4,
          title: '$1500 - $2000'
        },
        {
          id:5,
          title: '$2000 +'
        }

      ],

      ratings: [

        {
          id:1,
          title: '1 Star'
        },
        {
          id:2,
          title: '2 Star'
        },
        {
          id:3,
          title: '3 Star'
        },
        {
          id:4,
          title: '4 Star'
        },
        {
          id:5,
          title: '5 Star'
        }

      ],
            
      holiday: [],

      count: 10
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
