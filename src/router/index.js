import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home-page.vue";
import BestDeals from "../views/BestDeals";
import BestDealsItem from "../components/BestDealsItem";
import AboutPage from "../views/about-page";
import HolidayPackages from "../views/HolidayPackages";
import HolidayPackagesItem from "../components/HolidayPackagesItem";
import ContactPage from "../views/contact-page";
import ServicePage from "../views/service-page";
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
