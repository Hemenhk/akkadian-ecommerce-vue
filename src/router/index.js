import { createRouter, createWebHashHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomePage from "../pages/HomePage.vue";
import ShopPage from "../pages/shop/ShopPage.vue"
import SingleItem from "../pages/single-item/SingleItem.vue"

const routes = [
  {
    path: "/",
    name: "Root",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: HomePage,
      },
      {
        path: "shop",
        name: "Shop",
        component: ShopPage
      },
      {
        path: "/:productId",
        name: "Single Item",
        component: SingleItem

      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
