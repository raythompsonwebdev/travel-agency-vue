<template>
  <nav>
    <button id="toggle-menu" @click="naviFunction">Menu</button>
    <ul id="navi" class="hide">
      <li>
        <router-link
          to="/"
          class="nav-item r-item"
          @click="InlineMenuButtonClickHandler()"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/holidaypackages"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          Holiday Packages
        </router-link>
      </li>
      <li>
        <router-link
          to="/bestdeals"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          BestDeal
        </router-link>
      </li>
      <li>
        <router-link
          to="/services"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          Services
        </router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          AboutUs
        </router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
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
  name: "TravelNav",
  components: {
    LanguageSelect,
  },
  methods: {
    naviFunction(e) {
      e.preventDefault();
      const slideoutNav = document.getElementById("navi");
      if (slideoutNav.classList.contains("show")) {
        slideoutNav.setAttribute("class", "hide");
      } else {
        slideoutNav.setAttribute("class", "show");
      }
    },
    InlineMenuButtonClickHandler() {
      // eslint-disable-next-line no-console
      //e.preventDefault();
      let slideoutMenu = document.getElementById("navi");

      let box = slideoutMenu.getAttribute("class");
      if (box == "hide") {
        slideoutMenu.setAttribute("class", "show");
      } else {
        slideoutMenu.setAttribute("class", "hide");
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"></style>
