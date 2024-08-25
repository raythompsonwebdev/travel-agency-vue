<template>
  <div>
    <span v-if="errors.length" id="contact-form-errors">
      <h2 id="error-message">Please Correct the Following Errors:</h2>
      <ul id="errors-list">
        <li v-for="error in errors" :key="error" id="errors-item">
          {{ error }}
        </li>
      </ul>
    </span>

    <form id="contact-form" @submit.prevent="onSubmit">
      <ul id="contact-form-fields">
        <li class="contact-form-field">
          <label for="firstname" class="contact-label"
            >First name <input id="firstname" v-model="firstname" type="text" name="firstname"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="lastname" class="contact-label"
            >Last name <input id="lastname" v-model="lastname" type="text" name="lastname"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="email" class="contact-label"
            >Email <input id="email" v-model="email" type="text" name="email"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="phone" class="contact-label"
            >Phone <input id="phone" v-model="phone" type="text" name="phone"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="message" class="contact-label"
            >Message
            <textarea
              v-model="message"
              id="message"
              name="message"
              class="required"
              cols="50"
              rows="10"
            >
            </textarea>
          </label>
        </li>
        <li class="contact-form-field">
          <input id="contact-submit" type="submit" value="SEND" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const firstname = ref(' ')
const lastname = ref(' ')
const email = ref(' ')
const phone = ref(' ')
const message = ref(' ')
const errors = ref([])

onMounted(async () => {
  if (firstname.value !== ' ' && lastname.value !== ' ' && email.value !== ' ') {
    const contactData = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    }

    console.error(contactData)

    await axios.post('/api/contact', contactData)

    firstname.value = ' '
    lastname.value = ' '
    email.value = ' '
    phone.value = ' '
    message.value = ' '
  } else {
    errors.value.push('FirstName required')
    errors.value.push('LastName required')
    errors.value.push('e-mail required')
  }
})
</script>

<style lang="scss"></style>
