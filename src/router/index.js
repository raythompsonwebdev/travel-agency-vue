import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import BestDeal from "@/components/BestDeal";
import AboutUs from "@/components/AboutUs";
import HolidayPackages from "@/components/HolidayPackages";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

Vue.use(VueRouter);

export default new VueRouter({

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/BestDeal",
      name: "BestDeal",
      component: BestDeal
    },

    {
      path: "/AboutUs",
      name: "AboutUs",
      component: AboutUs
    },

    {
      path: "/HolidayPackages",
      name: "HolidayPackages",
      component: HolidayPackages
    },

    {
      path: "/Contact",
      name: "Contact",
      component: Contact
    },

    {
      path: "/Services",
      name: "Services",
      component: Services
    }
  ]

});
