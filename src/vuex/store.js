import { createStore } from "vuex";
import productModule from "./modules/product-module/productModule";
import cartModule from "./modules/cart-module/cartModule";

const store = createStore({
  modules: {
    product: productModule,
    cart: cartModule
  },
});

export default store;
