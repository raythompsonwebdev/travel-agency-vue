<template>
  <div class="AboutUs page">
    <button id="side-bar-btn" @click="aboutPageFunction">SIDE</button>

    <SideBanner />

    <main id="page-content">
      <h2 class="page-content-title">Lorem Ipsum Dolor Sit Amet</h2>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim odit sequi
        voluptatem esse doloribus libero commodi ea debitis id nostrum nostrum
        odio velit impedit vitae tenetur voluptates vero beatae excepturi. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit.Enim odit dolor sequi
        voluptatem esse doloribus libero commodi ea debitis id nostrum odio
        velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>
      <h3 class="page-content-title">Proin vehucula rutrum hendrerit.</h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h3 class="page-content-title">
        Pellentsque ut ellit sagittis fringilla.
      </h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h3 class="page-content-title">
        Lorem ipsum dolor sit amet consectetur.
      </h3>

      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim
        odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h3 class="page-content-title">
        Mosecenas suscioit fringilla nibh a interdum.
      </h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h3 class="page-content-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
    </main>
  </div>
</template>

<script>
import SideBanner from "@/components/SideBanner.vue";

export default {
  name: "AboutPage",
  components: {
    SideBanner,
  },
  data() {
    return {
      show: "true",
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

<style lang="scss">
.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.fade-leave-active {
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
