<template>
  <div>
    <p v-if="errors.length">
      <b>please correct following errors:</b>
      <ul>
        <li
          v-for="error in errors"
          :key="error"
        >
          {{ error }}
        </li>
      </ul>
    </p>

    <form
      id="contactform"
      @submit.prevent="onSubmit"
    >
      <ul>
        <li>
          <label for="firstname">First name
            <input
              id="firstname"
              v-model="firstname"
              type="text"
              name="firstname"
            ></label>
        </li>
        <li>
          <label for="lastname">Last name
            <input
              id="lastname"
              v-model="lastname"
              type="text"
              name="lastname"
            ></label>
        </li>
        <li>
          <label for="email">Email
            <input
              id="email"
              v-model="email"
              type="text"
              name="email"
            ></label>
        </li>
        <li>
          <label for="phone">Phone
            <input
              id="phone"
              type="text"
              name="phone"
            ></label>
        </li>
        <li>
          <label for="message">Message
            <textarea
              id="message"
              name="message"
              class="required"
              cols="50"
              rows="10"
            > ..</textarea></label>
        </li>
        <li>
          <input
            id="contactbtn"
            type="submit"
            value="submit"
          >
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {

  name: 'ContactForm',

  data() {
    return {
      show: 'true',
      firstname:null,
      lastname: null,
      email:null,
      errors: []
    }
  },

  methods: {

    onSubmit() {

      if(this.firstname && this.lastname && this.email){

        const productReview = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email
        }
        this.$emit('review-submitted', productReview)
        this.firstname = null
        this.lastname = null
        this.email = null
      }else{

        if(!this.firstname) this.errors.push("FirstName required")
        if(!this.lastname) this.errors.push("LastName required")
        if(!this.email) this.errors.push("e-mail required")

      }
    }


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
</style>
