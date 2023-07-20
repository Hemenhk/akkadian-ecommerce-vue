import { createStore } from "vuex";
import cartModule from "./modules/cart-module/cartModule";
import fetchAllProductsModule from "./modules/fetch-all-products/index";
import fetchSingleProduct from "./modules/fetch-single-product/index";

const store = createStore({
  modules: {
    cart: cartModule,
    allProducts: fetchAllProductsModule,
    product: fetchSingleProduct
    
  },
});

export default store;
