<template>
  <main class="contact-page">
    <button id="side-bar-btn" @click="contactFunction">Contact</button>

    <!--contact details box-->
    <aside v-if="contactFunction" id="contact-page-sidebar" class="hide">
      <address id="contact-details">
        <p class="addr-title" style="">Phone:</p>
        <a href="tel:123-436-7890" class="addr-link">123-436-7890 </a>
        <p class="addr-title">Mail :</p>
        <a href="mailto:info@travelagency.com" class="addr-link">info@travelagency.com</a>
        <p class="addr-title">Address:</p>
        <p>Lorem Ipsum 1234 Dolo Sit Amet</p>
      </address>
    </aside>

    <section id="page-content">
      <h2 class="page-content-title">Lorem Ipsum Dolor Sit Amet</h2>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit dolor sequi voluptatem
        esse doloribus libero commodi ea debitis id nostrum odio velit impedit vitae tenetur
        voluptates vero beatae excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <br />
      <ContactForm />
    </section>
  </main>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'

const contactFunction = (e) => {
  e.preventDefault()
  const el = document.getElementById('contact-page-sidebar')
  const box = el.getAttribute('class')
  if (box === 'hide') {
    el.setAttribute('class', 'show')
  } else {
    el.setAttribute('class', 'hide')
  }
}
</script>

<style lang="scss">
.v-enter-from {
  transform: translateX(-200px);
  opacity: 0;
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all 0.5s ease-in;
}

.v-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
