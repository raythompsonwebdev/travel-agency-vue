<template>
  <div>
    <span v-if="errors.length" id="contact-form-errors">
      <h2>Please Correct the Following Errors:</h2>
      <ul>
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </span>

    <form id="contactform" @submit.prevent="onSubmit">
      <ul>
        <li>
          <label for="firstname"
            >First name
            <input
              id="firstname"
              v-model="firstname"
              type="text"
              name="firstname"
          /></label>
        </li>
        <li>
          <label for="lastname"
            >Last name
            <input id="lastname" v-model="lastname" type="text" name="lastname"
          /></label>
        </li>
        <li>
          <label for="email"
            >Email <input id="email" v-model="email" type="text" name="email"
          /></label>
        </li>
        <li>
          <label for="phone"
            >Phone <input id="phone" v-model="phone" type="text" name="phone"
          /></label>
        </li>
        <li>
          <label for="message"
            >Message
            <textarea
              v-model="message"
              id="message"
              name="message"
              class="required"
              cols="50"
              rows="10"
            >
 ..</textarea
            >
          </label>
        </li>
        <li>
          <input id="contactbtn" type="submit" value="submit" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "ContactForm",

  data() {
    return {
      show: "true",
      firstname: " ",
      lastname: " ",
      email: " ",
      phone: " ",
      message: " ",
      errors: [],
    };
  },

  methods: {
    async onSubmit() {
      if (
        this.firstname !== " " &&
        this.lastname !== " " &&
        this.email !== " "
      ) {
        const contactData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          message: this.message,
        };

        console.error(contactData);

        //await axios.post("/api/contact", contactData);

        this.firstname = " ";
        this.lastname = " ";
        this.email = " ";
        this.phone = " ";
        this.message = " ";
      } else {
        this.errors.push("FirstName required");
        this.errors.push("LastName required");
        this.errors.push("e-mail required");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
