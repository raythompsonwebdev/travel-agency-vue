
<template>
  <nav>
    <button 
      id="toggle-menu" 
      @click="naviFunction"
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
          @click.native="InlineButtonClickHandler"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/holidaypackages"
          class="nav-item r-item"
          @click.native="InlineButtonClickHandler"
        >
          Holiday
          Packages
        </router-link>
      </li>
      <li>
        <router-link
          to="/bestdeals"
          class="nav-item r-item"
          @click.native="InlineButtonClickHandler"
        >
          BestDeal
        </router-link>
      </li>
      <li>
        <router-link
          to="/services"
          class="nav-item r-item"
          @click.native="InlineButtonClickHandler"
        >
          Services
        </router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-item r-item"
          @click.native="InlineButtonClickHandler"
        >
          AboutUs
        </router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          class="nav-item r-item"
          @click.native="InlineButtonClickHandler"
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
    naviFunction: function(event) {
      event.preventDefault();
      var slideoutNav = document.querySelector("#navi");
      if (slideoutNav.classList.contains("show")) {
        slideoutNav.setAttribute("class", "hide");
      } else {
        slideoutNav.setAttribute("class", "show");
      }      
    }, 
  }, 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>
