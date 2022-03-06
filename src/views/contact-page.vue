<template>
  <div class="Contact">
    <button id="side-bar-btn" @click="contactFunction">Contact</button>

    <!--contact details box-->
    <aside v-if="contactFunction" id="contact-page-sidebar" class="hide">
      <address id="contact-details">
        <p class="addr_title" style="">Phone:</p>
        <a href="tel:123-436-7890">123-436-7890 </a>
        <p class="addr_title">Mail :</p>
        <a href="mailto:info@travelagency.com">info@travelagency.com</a>
        <p class="addr_title">Address:</p>
        <p>Lorem Ipsum 1234 Dolo Sit Amet</p>
        <!-- <li>
          <span>
            <img :src="telephoneImage" :alt="'telephone-image'" />
          </span>
          Phone:
          <a href="tel:123 436 7890">123 436 7890</a>
        </li>
        <li>
          <span>
            <img :src="envelopeImage" :alt="'envelope-image'" />
          </span>
          Mail:
          <a href="mailto:info@travelagency.com">info@travelagency.com</a>
        </li>
        <li>
          <span>
            <img :src="addressImage" :alt="'address-image'" />
          </span>
          Address:
          <br />Lorem Ipsum 1234 Dolo Sit Amet
        </li> -->
      </address>
    </aside>

    <main id="content2">
      <h1>Lorem ipsum dolor sit amet, consectetur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <br />
      <ContactForm @review-submitted="addReview" />
    </main>
    <div class="clearfix" />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import addressImage from "../assets/images/Address.png";
import envelopeImage from "../assets/images/envelope.png";
import telephoneImage from "../assets/images/Telephone.png";
export default {
  name: "ContactPage",
  components: {
    ContactForm,
  },
  data() {
    return {
      show: "true",
      reviews: [],
      addressImage: addressImage,
      envelopeImage: envelopeImage,
      telephoneImage: telephoneImage,
    };
  },
  methods: {
    contactFunction(e) {
      e.preventDefault();
      const el = document.getElementById("contact-page-sidebar");
      const box = el.getAttribute("class");
      if (box === "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    },

    imageFunc() {
      const addrTitles = document.getElementsByClassName("addr_title");
      console.log(addrTitles);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
