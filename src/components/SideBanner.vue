<template>
  <aside id="about-page-banner" class="hide">
    <figure class="page-banner">
      <figcaption class="page-banner-caption">
        <h3 class="page-banner-title">Lorem ipsum dolor sit amet</h3>
        <span class="caption-img-span"
          ><img
            class="caption-img"
            :src="bannerImageLabel"
            :alt="'travel-agency-website-sidebar-banner-image-label'"
        /></span>

        <p class="page-banner-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="page-banner-text">
          Maxime minima magnam iure libero, laboriosam. Vitae magnam earum, quae
        </p>
        <p class="page-banner-text">
          rillo cupiditate deleniti expedita. Maxime minima magnam iure libero
        </p>
      </figcaption>
      <img
        class="page-banner-img"
        :src="bannerImage"
        :alt="'travel-agency-website-sidebar-banner-image'"
      />
    </figure>
  </aside>
</template>

<script setup>
import bannerImage from '@/assets/img/travel-agency-website-sidebar-banner-image.jpg'
import bannerImageLabel from '@/assets/img/travel-agency-website-sidebar-banner-image-label.jpg'
</script>

<style lang="scss"></style>
