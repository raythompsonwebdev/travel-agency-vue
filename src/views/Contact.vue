<template>
  <div class="Contact">
    <button
      id="side-bar-btn"
      @click="contactFunction"
    >
      Contact
    </button>

    <!--contact details box-->
    <aside 
      v-if="contactFunction"
      id="contact-page-sidebar"      
      class="hide" 
    >
      <ul id="contact-details">
        <li>
          <span>
            <img
              :src="'../assets/images/Telephone.png'"
              :alt="'telephone-image'"
            >
          </span>
          Phone:
          <a href="tel:123 436 7890">123 436 7890</a>
        </li>
        <li>
          <span>
            <img
              :src="'../assets/images/envelope.png'"
              :alt="'envelope-image'"
            >
          </span>
          Mail:
          <a href="mailto:info@travelagency.com">info@travelagency.com</a>
        </li>
        <li>
          <span>
            <img
              :src="'../assets/images/Address.png'"
              :alt="'address-image'"
            >
          </span>
          Address:
          <br>Lorem Ipsum 1234 Dolo Sit Amet
        </li>
      </ul>
    </aside>

    <main id="content2">
      <h1>Lorem ipsum dolor sit amet, consectetur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br>Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
        <br>Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br>Enim odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>      
      <br>
      <ContactForm @review-submitted="addReview" />
    </main>
    <div class="clearfix" />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
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
    contactFunction: function(e) {
        e.preventDefault();
      var el = document.getElementById("contact-page-sidebar");
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

<style lang="scss" >
</style>
