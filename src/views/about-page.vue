<template>
  <div class="AboutUs page">
    <button id="side-bar-btn" @click="aboutPageFunction">SIDE</button>
    <aside id="about-page-banner" class="hide">
      <figure>
        <figcaption>
          <h1>Lorem ipsum dolor sit amet</h1>

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
          :alt="'travel-agency-website-sidebar-banner-image-small'"
        />
      </figure>
    </aside>

    <main id="content2">
      <h1>Lorem Ipsum Dolor Sit Amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim odit dolor
        sequi voluptatem esse doloribus libero commodi ea debitis id nostrum
        odio velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
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
    </main>
  </div>
</template>

<script>
import bannerImage from "../assets/images/travel-agency-website-sidebar-banner-image.jpg";

export default {
  name: "AboutPage",
  data() {
    return {
      show: "true",
      bannerImage: bannerImage,
    };
  },
  methods: {
    aboutPageFunction(event) {
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
