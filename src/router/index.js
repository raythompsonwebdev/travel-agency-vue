import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home-page.vue";
import BestDeals from "../views/BestDeals";
import BestDeal from "../views/BestDeal";
import AboutPage from "../views/about-page";
import HolidayPackages from "../views/HolidayPackages";
import HolidayPackage from "../views/HolidayPackage";
import ContactPage from "../views/contact-page";
import ServicePage from "../views/service-page";
//import CartPage from "../views/Cartpage";
import NotFoundpage from "../views/NotFoundpage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/bestdeals",
    name: "BestDeals",
    component: BestDeals,
  },
  {
    path: "/bestdeals/:id",
    name: "BestDeal",
    component: BestDeal,
  },
  {
    path: "/holidaypackages",
    name: "HolidayPackages",
    component: HolidayPackages,
  },
  {
    path: "/holidaypackages/:id",
    name: "HolidayPackage",
    component: HolidayPackage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },

  {
    path: "/services",
    name: "ServicePage",
    component: ServicePage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundpage",
    component: NotFoundpage,
  },
  // {
  //   path: "/cart",
  //   name: "CartPage",
  //   component: CartPage,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
