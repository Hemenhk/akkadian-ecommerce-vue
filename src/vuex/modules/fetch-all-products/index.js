import axios from "axios";

const fetchAllProductsModule = {
  namespaced: true,
  state: {
    allProducts: [],
    isLoading: false,
    error: null,
  },
  mutations: {
    setProducts(state, payload) {
      state.allProducts = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchAllProducts({ commit }) {
      commit("setIsLoading", true);
      try {
        const response = await axios.get("https://akk-api-eb96d31d9900.herokuapp.com/api/products");
        const products = response.data.data.products;
        commit("setProducts", products);
        commit("setIsLoading", false);
      } catch (error) {
        commit("setError", "Failed to fetch data from the API");
      }
    },
  },
};

export default fetchAllProductsModule;
