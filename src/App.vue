<template>
<div id="app">

  <!--wrapper-->
  <div id="wrapper">

    <!--header-->
    <header>
      <!---logo-->
      <figure id="logo">
        <img :src="'assets/images/travel-agency-website-logo.png'" />
      </figure>
      <!--<div id="midsection"></div>-->
      <!---contact number-->
      <aside class="contact">
        <span class="tele">
          <img :src="'assets/images/images/Telephone.png'" />
          <a href="tel:0208-000-1452" id="contact-number">{{phoneNumber}}</a>
        </span>
        <span id="opening-time">{{openTime}}</span>
      </aside>

      <!---primary navigation-->
      <nav>

        <!---language select-->
        <LanguageSelect v-bind:languageselect="languageselect" />

        <button v-on:click="naviFunction" id="toggle-menu">Menu</button>

        <ul id="navi" class="hide" v-if="naviFunction">
          <li>
            <router-link to="/" class="nav-item r-item">Home</router-link>
          </li>
          <li>
            <router-link to="/HolidayPackages" class="nav-item r-item">HolidayPackages</router-link>
          </li>
          <li>
            <router-link to="/BestDeal" class="nav-item r-item">BestDeal</router-link>
          </li>
          <li>
            <router-link to="/Services" class="nav-item r-item">Services</router-link>
          </li>
          <li>
            <router-link to="/AboutUs" class="nav-item r-item">AboutUs</router-link>
          </li>
          <li>
            <router-link to="/Contact" class="nav-item r-item">Contact</router-link>
          </li>
        </ul>

      </nav>

    </header>

    <transition name="router-anim">
      <!--view-->
      <router-view></router-view>

    </transition>

  </div>

  <!--footer-->
  <footer>
    <ul>
      <li>
        <router-link to="/" class="nav-item r-item">Home</router-link>
      </li>
      <li>
        <router-link to="/BestDeal" class="nav-item r-item">BestDeal</router-link>
      </li>
      <li>
        <router-link to="/AboutUs" class="nav-item r-item">AboutUs</router-link>
      </li>
      <li>
        <router-link to="/HolidayPackages" class="nav-item r-item">HolidayPackages</router-link>
      </li>
      <li>
        <router-link to="/Contact" class="nav-item r-item">Contact</router-link>
      </li>
      <li>
        <router-link to="/Services" class="nav-item r-item">Services</router-link>
      </li>
    </ul>
  </footer>

</div>
</template>

<script>

import LanguageSelect from "./components/LanguageSelect.vue";

export default {
  name: "app",
  methods: {

    naviFunction: function() {
      //console.log(event);

      event.preventDefault();

      var el = document.querySelector("#navi");

      var box = el.getAttribute("class");

      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    }

  },

  components: {

    LanguageSelect

  },

  data() {
    return {
      phoneNumber: "0208-365-1452",
      openTime: "Everyday 8am - 9pm",
      languageselect: [{
          id: 1,
          country: " "
        },
        {
          id: 2,
          country: "United_Kingdom"
        },
        {
          id: 3,
          country: "Germany"
        },
        {
          id: 4,
          country: "United_States"
        },
        {
          id: 5,
          country: "Jamaica"
        },
        {
          id: 6,
          country: "France"
        },
        {
          id: 7,
          country: "Spain"
        }
      ]
    };
  }
};

</script>

<style lang="scss">

  @import "main.scss";

  .router-anim-enter-active {
      animation: coming 1s;
      animation-delay: 1s;
      opacity: 0;
  }

  .router-anim-leave-active {
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

</style>
