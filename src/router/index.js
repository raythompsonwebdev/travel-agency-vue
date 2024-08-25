import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import BestDeals from '@/views/BestDeals.vue'
import BestDeal from '@/views/BestDeal.vue'
import AboutPage from '@/views/AboutPage.vue'
import HolidayPackages from '@/views/HolidayPackages.vue'
import HolidayPackage from '@/views/HolidayPackage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ServicePage from '@/views/ServicePage.vue'
import NotFoundpage from '@/views/NotFoundpage.vue'
import CartPage from '@/views/CartPage.vue'
import SearchResultsPage from '@/views/SearchResultsPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/holidaypackages',
    name: 'HolidayPackages',
    component: HolidayPackages,
    props: true
  },
  {
    path: '/holidaypackage/:itemid',
    name: 'HolidayPackage',
    component: HolidayPackage,
    props: true
  },
  {
    path: '/bestdeals',
    name: 'BestDeals',
    component: BestDeals,
    props: true
  },
  {
    path: '/bestdeal/:itemid',
    name: 'BestDeal',
    component: BestDeal,
    props: true
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/services',
    name: 'ServicePage',
    component: ServicePage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundpage',
    component: NotFoundpage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    props: true
  },
  {
    path: '/search-results',
    name: 'SearchResultsPage',
    component: SearchResultsPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
