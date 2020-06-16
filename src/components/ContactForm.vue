<template>
  <div>

    <p v-if="errors.length">
      <b>please correct following errors:</b>
      <ul>
        <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>

    </p>

    <form @submit.prevent="onSubmit" id="contactform">

      <ul>
        <li>
          <label>First name</label>
          <input id="firstname" type="text" name="firstname" v-model="firstname">
        
        </li>
        <li>
          <label>Last name</label>
          <input type="text" id="lastname" name="lastname" v-model="lastname">
        </li>
        <li>
          <label>Email</label>
          <input type="text" id="email" name="email" v-model="email">
        </li>
        <li>
          <label>Phone</label>
          <input type="text" id="phone" name="phone" >
        </li>
        <li>
          <label>Message</label>
          <textarea name="message" id="message" class="required" cols="50" rows="10"> ..</textarea>
        </li>
        <li>
          <input type="submit" value="submit" id="contactbtn">
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

        let productReview = {
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

<style lang="scss" scoped>



</style>