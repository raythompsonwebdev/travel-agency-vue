<template>
<<<<<<< HEAD
	<div id="app">
		<!--wrapper-->
		<div id="wrapper">
		<!--header-->
		<header>
			<!---contact number-->
			<aside class="contact">
			<span class="tele">
				<img v-bind:src="'src/assets/images/Telephone.png'">
				<a href="tel:0208-000-1452" id="contact-number">{{phoneNumber}}</a>
			</span>
			<span id="opening-time">{{openTime}}</span>
			</aside>

			<!---logo-->
			<figure id="logo">
			<img v-bind:src="'./src/assets/images/travel-agency-website-logo.png'">
			</figure>

			<!---primary navigation-->
			<nav>
			<aside id="language-box">
				<form>
				<label>Language:</label>
				<select v-model="languages" name="language">
					<option v-for="(language,index) in languages" :key="index">{{language.title}}</option>
				</select>
				</form>
			</aside>

			<button id="toggle-menu">Menu</button>

			<ul id="navi" class="hide">
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
			<!---primary navigation end-->
		</header>

		<transition name="router-anim">
			<!--view-->
			<router-view/>
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
export default {
  name: "app",
  methods: {},
  data() {
    return {
      phoneNumber: "0208-365-1452",
      openTime: "Everyday 8am - 9pm",

      languages: [
        { title: "English" },
        { title: "Chinese" },
        { title: "German" },
        { title: "French" },
        { title: "Spanish" },
        { title: "Arabic" }
      ]
    };
=======
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
            <img :src="'assets/images/Telephone.png'" />
            <a :href="`tel:${phoneNumber}`" id="contact-number">{{phoneNumber}}</a>
          </span>
          <span id="opening-time">{{openTime}}</span>
        </aside>
        <nav>
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
import axios from "axios";

export default {
  name: "app",

  mounted() {
    axios
      .get("./data-json/languageselect.json")
      .then(response => (this.languages = response.data));
  },

  methods: {
    naviFunction: function(event) {
      event.preventDefault();

      var el = document.querySelector("#navi");

      var box = el.getAttribute("class");

      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },

    itemsSearched: function(id) {
      this.selected = id;
    },
    imgUrlAlt(event) {
      event.target.src = "/assets/images/flags/default.jpg";
    }
  },

  data: () => {
    return {
      phoneNumber: "0208-365-1452",
      openTime: "Everyday 8am - 9pm",
      selected: " ",
      defaultImage: "/assets/images/flags/default.jpg",
      languages: []
    };
  },

  computed: {
    onChangeImg: function() {
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
    }
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
  }
};
</script>

<style lang="scss">
@import "main.scss";

.router-anim-enter-active {
<<<<<<< HEAD
  animation: coming 1s;
  animation-delay: 1s;
=======
  animation: coming 0.5s;
  animation-delay: 0.5s;
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
  opacity: 0;
}

.router-anim-leave-active {
<<<<<<< HEAD
  animation: going 1s;
=======
  animation: going 0.5s;
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
}

@keyframes coming {
  from {
<<<<<<< HEAD
    transform: translateX(-50px);
=======
    transform: translateX(-200px);
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
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
<<<<<<< HEAD
    transform: translateX(-50px);
=======
    transform: translateX(-200px);
>>>>>>> 1b2f91303d694f93f1f4b8687c7692c699f7c16d
    opacity: 0;
  }
}
</style>
