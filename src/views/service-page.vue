<template>
  <div class="Services">
    <!---Leftside3-->
    <button id="side-bar-btn" @click="servicePageFunction">SIDE</button>
    <aside id="about-page-banner" class="hide">
      <figure>
        <figcaption>
          <h1>Lorem ipsum dolor sit amet</h1>
          <span
            ><img
              :src="bannerImageLabel"
              :alt="'travel-agency-website-sidebar-banner-image-label'"
          /></span>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Maxime minima magnam iure libero, laboriosam. Vitae magnam earum,
            quae
          </p>
          <p>
            rillo cupiditate deleniti expedita. Maxime minima magnam iure libero
          </p>
        </figcaption>
        <img
          :src="bannerImage"
          :alt="'travel-agency-website-sidebar-banner-image'"
        />
      </figure>
    </aside>

    <main id="content2">
      <h1>Lorem ipsum dolor sit amet, consectetur</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
      <div class="servicebox">
        <h1>Enim odit dolor sequi voluptatem</h1>
        <figure>
          <img
            class="service-box-img"
            :src="customerService"
            :alt="'travel-agency-website-customer-service-image'"
          />
          <figcaption>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>
            <a :href="'http://www.google.com'">Learn More</a>
          </figcaption>
        </figure>
      </div>

      <div class="servicebox">
        <h1>Enim odit dolor sequi voluptatem</h1>
        <figure>
          <img
            class="service-box-img"
            :src="busTours"
            :alt="'travel-agency-website-bus-tours-image'"
          />

          <figcaption>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>

            <a :href="'http://www.google.com'">Learn More</a>
          </figcaption>
        </figure>
      </div>

      <div class="servicebox">
        <h1>Enim odit dolor sequi voluptatem</h1>
        <figure>
          <img
            class="service-box-img"
            :src="hotelRoom"
            :alt="'travel-agency-website-hotel-room-image'"
          />
          <figcaption>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>
            <a :href="'http://www.google.com'">Learn More</a>
          </figcaption>
        </figure>
      </div>

      <div class="clearfix" />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
    </main>

    <div class="clearfix" />
  </div>
</template>

<script>
import bannerImage from "../assets/images/travel-agency-website-sidebar-banner-image.jpg";
import bannerImageLabel from "../assets/images/travel-agency-website-sidebar-banner-image-label.jpg";
import customerService from "../assets/images/travel-agency-website-customer-service-image.jpg";
import busTours from "../assets/images/travel-agency-website-bus-tours-image.jpg";
import hotelRoom from "../assets/images/travel-agency-website-hotel-room-image.jpg";
export default {
  name: "ServicePage",
  data() {
    return {
      show: "true",

      bannerImage: bannerImage,
      bannerImageLabel: bannerImageLabel,
      customerService: customerService,
      busTours: busTours,
      hotelRoom: hotelRoom,
    };
  },
  methods: {
    servicePageFunction(event) {
      event.preventDefault();

      const el = document.getElementById("about-page-banner");
      const box = el.getAttribute("class");

      if (box === "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
