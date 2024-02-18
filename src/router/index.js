import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import BestDeals from "@/views/BestDeals";
import BestDeal from "@/views/BestDeal";
import AboutPage from "@/views/AboutPage";
import HolidayPackages from "@/views/HolidayPackages";
import HolidayPackage from "@/views/HolidayPackage";
import ContactPage from "@/views/ContactPage";
import ServicePage from "@/views/ServicePage";
import NotFoundpage from "@/views/NotFoundpage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/holidaypackages",
    name: "HolidayPackages",
    component: HolidayPackages,
    props: true,
  },
  {
    path: "/holidaypackage/:itemid",
    name: "HolidayPackage",
    component: HolidayPackage,
    props: true,
  },
  {
    path: "/bestdeals",
    name: "BestDeals",
    component: BestDeals,
    props: true,
  },
  {
    path: "/bestdeal/:itemid",
    name: "BestDeal",
    component: BestDeal,
    props: true,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/services",
    name: "ServicePage",
    component: ServicePage,
    //component: () => import("@/views/ServicePage"),
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
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
