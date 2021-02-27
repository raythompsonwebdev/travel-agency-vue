<template>
  <nav>
    <button 
      id="toggle-menu" 
      @:click="naviFunction"
    >
      Menu
    </button>
    <ul      
      id="navi"
      class="hide"
    >
      <li>
        <router-link
          to="/"
          class="nav-item r-item"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/holidaypackages"
          class="nav-item r-item"
        >
          HolidayPackages
        </router-link>
      </li>
      <li>
        <router-link
          to="/bestdeals"
          class="nav-item r-item"
        >
          BestDeal
        </router-link>
      </li>
      <li>
        <router-link
          to="/services"
          class="nav-item r-item"
        >
          Services
        </router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-item r-item"
        >
          AboutUs
        </router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          class="nav-item r-item"
        >
          Contact
        </router-link>
      </li>
    </ul>
    <!--LanguageSelect Item component -->
    <LanguageSelect />
  </nav>
</template>

<script>
import LanguageSelect from "../components/LanguageSelect.vue";
export default {
  name:'NavBar',
  components: {
    LanguageSelect,
  },
  methods: {  
    InlineButtonClickHandler: function(e) {
      e.preventDefault();

      var slideoutMenu = document.querySelector("#navi");

      if (slideoutMenu.classList.contains("show")) {
        slideoutMenu.setAttribute("class", "hide");
      } else {
        slideoutMenu.setAttribute("class", "show");
      }
    },  
    naviFunction: function(e) {
      e.preventDefault();
      var el = document.querySelector("#navi");
      var box = el.getAttribute("class");
      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },    
  }, 
   
}
</script>