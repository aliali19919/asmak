import Contact from "@/views/Contact.vue";
import HomePage from "@/views/HomePage.vue";
import LatestNews from "@/views/LatestNews.vue";
import Menu from "@/views/Menu.vue";
import OurStory from "@/views/OurStory.vue";
import SocialReviews from "@/views/SocialReviews.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/our/story",
    name: "our-story",
    component: OurStory,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/latest/news",
    name: "latest-news",
    component: LatestNews,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/social/reviews",
    name: "social-reviews",
    component: SocialReviews,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
