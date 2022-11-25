<template>
  <aside id="about-page-banner" class="hide">
    <figure class="page-banner">
      <figcaption class="page-banner-caption">
        <h1 class="page-banner-title">Lorem ipsum dolor sit amet</h1>
        <span
          ><img
            class="page-banner-img-label"
            :src="bannerImageLabel"
            :alt="'travel-agency-website-sidebar-banner-image-label'"
        /></span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          Maxime minima magnam iure libero, laboriosam. Vitae magnam earum, quae
        </p>
        <p>
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

<script>
export default {
  name: "TravelFooter",
  data() {
    return {
      show: "true",
      bannerImage: require("@/assets/images/travel-agency-website-sidebar-banner-image.jpg"),
      bannerImageLabel: require("@/assets/images/travel-agency-website-sidebar-banner-image-label.jpg"),
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
