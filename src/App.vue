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

        <div id="midsection"></div>

        <!---contact number-->
        <aside class="contact">
          <span class="tele">
            <img :src="'assets/images/Telephone.png'" />
            <a :href="`tel:${phoneNumber}`" id="contact-number">{{phoneNumber}}</a>
          </span>
          <span id="opening-time">{{openTime}}</span>
        </aside>
        <nav>
          <button v-on:click="naviFunction" id="toggle-menu">Menu</button>

          <ul id="navi" class="hide" v-if="naviFunction">
            <li>
              <router-link
                to="/"
                class="nav-item r-item"
                v-on:click.native="InlineButtonClickHandler"
              >Home</router-link>
            </li>
            <li>
              <router-link
                to="/HolidayPackages"
                class="nav-item r-item"
                v-on:click.native="InlineButtonClickHandler"
              >HolidayPackages</router-link>
            </li>
            <li>
              <router-link
                to="/BestDeal"
                class="nav-item r-item"
                v-on:click.native="InlineButtonClickHandler"
              >BestDeal</router-link>
            </li>
            <li>
              <router-link
                to="/Services"
                class="nav-item r-item"
                v-on:click.native="InlineButtonClickHandler"
              >Services</router-link>
            </li>
            <li>
              <router-link
                to="/AboutUs"
                class="nav-item r-item"
                v-on:click.native="InlineButtonClickHandler"
              >AboutUs</router-link>
            </li>
            <li>
              <router-link
                to="/Contact"
                class="nav-item r-item"
                v-on:click.native="InlineButtonClickHandler"
              >Contact</router-link>
            </li>
          </ul>
          <!--LanguageSelect Item component -->
          <aside id="language-box">
            <form>
              <label for="languages">Language:</label>
              <div id="flagImg">
                <img @error="imgUrlAlt" :src="'/assets/images/flags/' + selected + '.jpg'" />
              </div>
              <select
                name="languages"
                v-model="selected"
                v-on:click="itemsSearched($event.target.value);"
              >
                <option
                  v-for="(language, i) in onChangeImg"
                  :value="language.value"
                  :key="i"
                >{{language.name}}</option>
              </select>
            </form>
          </aside>
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
import axios from "axios";
export default {
  name: "app",
  mounted() {
    axios
      .get("./data-json/languageselect.json")
      .then((response) => (this.languages = response.data));
  },
  methods: {
    InlineButtonClickHandler: function (e) {
      e.preventDefault();

      var slideoutMenu = document.querySelector("#navi");

      if (slideoutMenu.classList.contains("show")) {
        slideoutMenu.setAttribute("class", "hide");
      } else {
        slideoutMenu.setAttribute("class", "show");
      }
    },

    naviFunction: function (event) {
      event.preventDefault();
      var el = document.querySelector("#navi");
      var box = el.getAttribute("class");
      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
    itemsSearched: function (id) {
      this.selected = id;
    },
    imgUrlAlt(event) {
      event.target.src = "/assets/images/flags/default.jpg";
    },
  },
  data: () => {
    return {
      phoneNumber: "0208-365-1452",
      openTime: "Everyday 8am - 9pm",
      selected: " ",
      defaultImage: "/assets/images/flags/default.jpg",
      languages: [],
    };
  },
  computed: {
    onChangeImg: function () {
      if (this.selected === "nothing") {
        return this.languages;
      } else if (this.selected === "United_Kingdom") {
        return this.languages;
      } else if (this.selected === "Germany") {
        return this.languages;
      } else if (this.selected === "United_States") {
        return this.languages;
      } else if (this.selected === "Jamaica") {
        return this.languages;
      } else if (this.selected === "France") {
        return this.languages;
      } else if (this.selected === "Spain") {
        return this.languages;
      } else {
        return this.languages;
      }
    },
  },
};
</script>

<style lang="scss">
@import "main.scss";
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s;
}
@keyframes coming {
  from {
    transform: translateX(-200px);
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
    transform: translateX(-200px);
    opacity: 0;
  }
}
</style>
