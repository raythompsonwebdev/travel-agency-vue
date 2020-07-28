<template>
  <div class="Contact">
    <button v-on:click="contactFunction" id="side-bar-btn">Contact</button>

    <!--contact details box-->
    <aside id="contactside" class="hide" v-if="contactFunction">
      <ul id="contact-details">
        <li>
          <span>
            <img v-bind:src="'assets/images/Telephone.png'" />
          </span>
          Phone:
          <a href="tel:123 436 7890">123 436 7890</a>
        </li>
        <li>
          <span>
            <img v-bind:src="'assets/images/envelope.png'" />
          </span>
          Mail:
          <a href="mailto:info@travelagency.com">info@travelagency.com</a>
        </li>
        <li>
          <span>
            <img v-bind:src="'assets/images/Address.png'" />
          </span>
          Address:
          <br />Lorem Ipsum 1234 Dolo Sit Amet
        </li>
      </ul>
      <div class="clearfix"></div>
    </aside>

    <main id="content2">
      <h1>Lorem ipsum dolor sit amet, consectetur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
        <br />Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>
      <div class="clearfix"></div>
      <br />

      <ContactForm @review-submitted="addReview"></ContactForm>

      <div class="clearfix"></div>
    </main>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";
export default {
  name: "Contact",
  components: {
    ContactForm
  },
  data() {
    return {
      show: "true",
      reviews: []
    };
  },
  methods: {
    contactFunction: function() {
      //console.log(event);
      event.preventDefault();
      var el = document.getElementById("contactside");
      var box = el.getAttribute("class");
      if (box == "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
</style>