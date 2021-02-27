<template>
  <!--footer-->
  <footer>
    <ul>
      <li>
        <router-link
          to="/"
          class="nav-item r-item"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/BestDeal"
          class="nav-item r-item"
        >
          BestDeal
        </router-link>
      </li>
      <li>
        <router-link
          to="/AboutUs"
          class="nav-item r-item"
        >
          AboutUs
        </router-link>
      </li>
      <li>
        <router-link
          to="/HolidayPackages"
          class="nav-item r-item"
        >
          HolidayPackages
        </router-link>
      </li>
      <li>
        <router-link
          to="/Contact"
          class="nav-item r-item"
        >
          Contact
        </router-link>
      </li>
      <li>
        <router-link
          to="/Services"
          class="nav-item r-item"
        >
          Services
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name:'Header',
}
</script>