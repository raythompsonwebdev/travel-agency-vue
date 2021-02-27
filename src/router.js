import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BestDeals from "./views/BestDeals";
import BestDealsItem from "./views/BestDealsItem";
import About from "./views/AboutUs";
import HolidayPackages from "./views/HolidayPackages";
import HolidayPackagesItem from "./views/HolidayPackagesItem";
import Contact from "./views/Contact";
import Services from "./views/Services";
import NotFoundpage from "./views/NotFoundpage";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "aboutus",
      component: About,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/AboutUs.vue"),
    },
    {
      path: "/bestdeals",
      name: "BestDeals",
      component: BestDeals,
    },
    {
      path: "/bestdeals/:id",
      name: "BestDealsItem",
      component: BestDealsItem,
    },
    {
      path: "/holidaypackages",
      name: "HolidayPackages",
      component: HolidayPackages,
    },
    {
      path: "/holidaypackages/:id",
      name: "HolidayPackage Item",
      component: HolidayPackagesItem,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },

    {
      path: "/services",
      name: "Services",
      component: Services,
    },
    {
      path: " * ",
      name: "NotFoundpage",
      component: NotFoundpage,
    },
  ],
});
