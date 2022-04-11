import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
import PageArrayStatistics from "./pages/PageArrayStatistics.vue";
import PageArraySearch from "./pages/PageArraySearch.vue";
import PageArrayTransformations from "./pages/PageArrayTransformations.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: PageHome
  },
  {
    name: "Array Statistics",
    path: "/array/statistics",
    component: PageArrayStatistics
  },
  {
    name: "Array Search",
    path: "/array/search",
    component: PageArraySearch
  },
  {
    name: "Array Transformations",
    path: "/array/transformations",
    component: PageArrayTransformations
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(console.clear);

export default router;
export { routes };
